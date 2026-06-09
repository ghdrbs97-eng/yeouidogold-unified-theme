(function(){
  'use strict';

  var DEFAULT_CONFIG = {
    symbols: [
      { proName: 'TVC:GOLD', title: '국제 금시세' },
      { proName: 'TVC:SILVER', title: '국제 은시세' }
    ],
    colorTheme: 'dark',
    locale: 'kr',
    largeChartUrl: '',
    isTransparent: false,
    showSymbolLogo: true,
    displayMode: 'adaptive',
    width: '100%',
    height: 78
  };

  function extend(base, extra){
    var out = {};
    Object.keys(base).forEach(function(k){ out[k] = base[k]; });
    if(extra && typeof extra === 'object') Object.keys(extra).forEach(function(k){ out[k] = extra[k]; });
    if(!out.width) out.width = '100%';
    if(!out.height) out.height = 78;
    if(!out.locale) out.locale = 'kr';
    return out;
  }

  function parseConfig(script){
    var raw = (script && script.textContent || '').trim();
    if(!raw) return extend(DEFAULT_CONFIG, null);
    try { return extend(DEFAULT_CONFIG, JSON.parse(raw)); }
    catch(e) { return extend(DEFAULT_CONFIG, null); }
  }

  function ensureStyle(){
    if(document.getElementById('yg-tradingview-widget-style')) return;
    var style = document.createElement('style');
    style.id = 'yg-tradingview-widget-style';
    style.textContent = [
      '.tradingview-widget-container{position:relative;box-sizing:border-box;width:100%;height:78px;overflow:visible;background:#fff}',
      '.tradingview-widget-container iframe{display:block!important;width:100%!important;height:46px!important;margin:0!important;border:0!important;overflow:hidden!important}',
      '.tradingview-widget-container__widget{height:46px!important;width:100%!important;overflow:hidden;background:#1f1f1f}',
      '.tradingview-widget-copyright{height:32px!important;line-height:32px!important;text-align:center!important;font-size:13px!important;font-family:Arial,sans-serif!important;background:#fff!important;color:#2962ff!important}',
      '.tradingview-widget-copyright a,.tradingview-widget-copyright .blue-text{color:#2962ff!important;text-decoration:none!important;font-size:13px!important;font-family:Arial,sans-serif!important}',
      '.tradingview-widget-copyright a:hover{text-decoration:underline!important}',
      '@media (max-width: 767px){.tradingview-widget-container{height:106px!important}.tradingview-widget-container iframe{height:74px!important}.tradingview-widget-container__widget{height:74px!important}}'
    ].join('');
    document.head.appendChild(style);
  }

  function tvSrc(config){
    var locale = encodeURIComponent(config.locale || 'kr');
    var payload = extend(config, {
      width: '100%',
      height: (window.matchMedia && window.matchMedia('(max-width: 767px)').matches) ? 74 : 46,
      utm_source: 'yeouidogold.com',
      utm_medium: 'widget_new',
      utm_campaign: 'ticker-tape',
      'page-uri': 'yeouidogold.com/'
    });
    return 'https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=' + locale + '#' + encodeURIComponent(JSON.stringify(payload));
  }

  function renderOne(script){
    if(!script || script.dataset.ygTradingviewRendered) return;
    script.dataset.ygTradingviewRendered = '1';
    var box = script.closest('.tradingview-widget-container') || script.parentElement;
    if(!box) return;
    var widget = box.querySelector('.tradingview-widget-container__widget');
    if(!widget){
      widget = document.createElement('div');
      widget.className = 'tradingview-widget-container__widget';
      box.insertBefore(widget, box.firstChild);
    }
    widget.innerHTML = '';
    var iframe = document.createElement('iframe');
    iframe.title = 'ticker tape TradingView widget';
    iframe.scrolling = 'no';
    iframe.allowTransparency = true;
    iframe.frameBorder = '0';
    iframe.src = tvSrc(parseConfig(script));
    widget.appendChild(iframe);

    var copyright = box.querySelector('.tradingview-widget-copyright');
    if(copyright){
      copyright.innerHTML = '<a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span class="blue-text">Track all markets on TradingView</span></a>';
    }
  }

  function render(){
    ensureStyle();
    document.querySelectorAll('script[src*="embed-widget-ticker-tape"]').forEach(renderOne);
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
})();
