(function(){
  'use strict';

  /*
   * Live metal-price synchronizer for the educational mirror.
   * The origin page renders metal-linked prices server-side. A static ZIP cannot
   * call that private server routine directly, so this recreates the visible
   * behaviour client-side: sale/market-linked products scale from the mirrored
   * snapshot price by the current public XAU/XAG spot quote. Fixed-price items
   * (no sale/market discount block) are intentionally left unchanged.
   */
  var BASE = {
    XAU: 4438.421437,
    XAG: 72.1069134,
    capturedAt: '2026-06-05T06:05:00Z'
  };
  var API = 'https://api.gold-api.com/price/';
  var fmt = new Intl.NumberFormat('ko-KR');

  function numberFromText(text){
    var m = String(text || '').replace(/\s/g,'').match(/([0-9][0-9,]*)원/);
    return m ? parseInt(m[1].replace(/,/g,''),10) : null;
  }
  function won(n){ return fmt.format(Math.max(0, Math.round(n))) + '원'; }
  function metalFromName(name){
    name = String(name || '');
    if(/금화|골드|\bgold\b|\bGold\b|\bGOLD\b/.test(name)) return 'XAU';
    if(/은화|실버|\bsilver\b|\bSilver\b|\bSILVER\b/.test(name)) return 'XAG';
    return null;
  }
  function gramsFromName(name){
    var m = String(name || '').match(/([0-9]+(?:\.[0-9]+)?)\s*(kg|g)\b/i);
    if(!m) return null;
    var v = parseFloat(m[1]);
    if(!isFinite(v)) return null;
    return /kg/i.test(m[2]) ? v * 1000 : v;
  }
  function productName(root){
    var h = root.querySelector('h1,h2,.item-pay h2,.item_detail_tit,.shop-title');
    return h ? h.textContent.trim() : root.textContent.trim().slice(0,220);
  }
  function isMarketLinked(root){
    var text = root.textContent || '';
    return /5\s*%/.test(text) && (/(금화|은화|골드|실버|Gold|Silver)/.test(text));
  }
  function ensureBase(el, attr, value){
    if(!el || value == null) return null;
    if(!el.dataset[attr]) el.dataset[attr] = String(value);
    return parseInt(el.dataset[attr],10);
  }
  function updateTextPrice(el, price){ if(el) el.textContent = won(price); }
  function replaceGramText(root, perGram){
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function(node){
        return /g당\s*[0-9,]+원/.test(node.nodeValue || '') ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var nodes = [];
    while(walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(function(node){
      node.nodeValue = node.nodeValue.replace(/g당\s*[0-9,]+원/g, 'g당 ' + fmt.format(perGram) + '원');
    });
  }

  function updateListItem(item, ratios){
    if(!isMarketLinked(item)) return;
    var name = productName(item);
    var metal = metalFromName(name);
    if(!metal || !ratios[metal]) return;

    var scope = item.querySelector('.item-detail') || item.querySelector('.item-pay') || item.querySelector('.item-overlay') || item;
    var salePay = scope.querySelector('p.sale_price, .sale_price.pay_number, .sale_price .pay, p.sale_price .pay, .sale_price');
    var realPay = null;
    var pays = Array.from(scope.querySelectorAll('.special-sale-wrap .pay, .pay, .real_price'));
    if(salePay){
      realPay = pays.find(function(p){ return p !== salePay && numberFromText(p.textContent); });
    } else {
      realPay = pays.find(function(p){ return numberFromText(p.textContent); });
    }

    var baseSale = salePay ? ensureBase(salePay, 'ygBasePrice', numberFromText(salePay.textContent)) : null;
    var baseReal = realPay ? ensureBase(realPay, 'ygBasePrice', numberFromText(realPay.textContent)) : null;
    if(baseSale) updateTextPrice(salePay, baseSale * ratios[metal]);
    if(baseReal) updateTextPrice(realPay, baseReal * ratios[metal]);

    var current = baseReal || baseSale;
    var grams = gramsFromName(name);
    if(current && grams){
      var per = Math.round((current * ratios[metal]) / grams);
      replaceGramText(item, per);
    }

    var prop = item.getAttribute('data-product-properties');
    if(prop){
      try{
        var decoded = prop.replace(/&quot;/g,'"');
        var data = JSON.parse(decoded);
        if(data && data.price){
          data.price = Math.round((baseReal || baseSale || data.price) * ratios[metal]);
          item.setAttribute('data-product-properties', JSON.stringify(data));
        }
      }catch(e){}
    }
  }

  function updateDetail(ratios){
    var wrap = document.querySelector('._item_detail_wrap, .shop_view, .shop-content.open');
    if(!wrap) return;
    var name = productName(wrap);
    var metal = metalFromName(name);
    if(!metal || !ratios[metal] || !isMarketLinked(wrap)) return;
    var sale = wrap.querySelector('.pay_detail .sale_price, .sale_price.pay_number');
    var real = wrap.querySelector('.pay_detail .real_price, .real_price');
    var baseSale = sale ? ensureBase(sale, 'ygBasePrice', numberFromText(sale.textContent)) : null;
    var baseReal = real ? ensureBase(real, 'ygBasePrice', numberFromText(real.textContent)) : null;
    if(baseSale) updateTextPrice(sale, baseSale * ratios[metal]);
    if(baseReal) updateTextPrice(real, baseReal * ratios[metal]);
    var grams = gramsFromName(name);
    var current = baseReal || baseSale;
    if(grams && current){
      var per = Math.round((current * ratios[metal]) / grams);
      replaceGramText(wrap, per);
    }
  }

  function apply(quotes){
    var ratios = {};
    if(quotes.XAU && BASE.XAU) ratios.XAU = quotes.XAU / BASE.XAU;
    if(quotes.XAG && BASE.XAG) ratios.XAG = quotes.XAG / BASE.XAG;
    document.documentElement.dataset.ygLivePriceSync = 'on';
    document.documentElement.dataset.ygGoldRatio = ratios.XAU ? ratios.XAU.toFixed(6) : '';
    document.documentElement.dataset.ygSilverRatio = ratios.XAG ? ratios.XAG.toFixed(6) : '';
    Array.from(document.querySelectorAll('.shop-item, ._shop_item')).forEach(function(item){ updateListItem(item, ratios); });
    updateDetail(ratios);
  }

  function fetchQuote(symbol){
    return fetch(API + symbol, {cache:'no-store'}).then(function(r){ return r.json(); }).then(function(j){ return Number(j.price); });
  }
  function run(){
    Promise.all([fetchQuote('XAU'), fetchQuote('XAG')]).then(function(vals){
      apply({XAU: vals[0], XAG: vals[1]});
    }).catch(function(err){
      document.documentElement.dataset.ygLivePriceSync = 'failed';
      console.warn('[YG live price sync] quote fetch failed; keeping mirrored prices', err);
    });
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
})();
