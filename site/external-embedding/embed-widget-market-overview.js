(function(){
  function render(){
    document.querySelectorAll('script[src*="embed-widget-market-overview"]').forEach(function(script){
      var box=script.closest('.tradingview-widget-container') || script.parentElement;
      if(!box || box.dataset.offlineMarketRendered) return;
      box.dataset.offlineMarketRendered='1';
      var widget=box.querySelector('.tradingview-widget-container__widget') || box;
      widget.innerHTML='<div class="offline-market"><h3>Market overview</h3><div><b>Gold</b><span>4,440.585</span><em>−0.79%</em></div><div><b>Silver</b><span>72.4467</span><em>−2.00%</em></div><p>Offline TradingView-style preview</p></div>';
      if(!document.getElementById('offline-market-style')){var s=document.createElement('style');s.id='offline-market-style';s.textContent='.offline-market{background:#111827;color:#fff;border-radius:8px;padding:24px;font-family:Arial,"Pretendard",sans-serif}.offline-market h3{margin:0 0 16px}.offline-market div{display:flex;justify-content:space-between;border-bottom:1px solid #334155;padding:10px 0}.offline-market em{color:#ff4050;font-style:normal}.offline-market p{color:#94a3b8}';document.head.appendChild(s);}
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',render); else render();
})();
