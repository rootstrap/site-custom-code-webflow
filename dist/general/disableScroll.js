(()=>{var t=t||[],s="480px",a="768px",r="992px",h=window.matchMedia(`(max-width: ${s})`),w=window.matchMedia(`(min-width: ${s})`),p=window.matchMedia(`(min-width: ${a})`),c=window.matchMedia(`(min-width: ${r})`);function d(){let i=$(document.body),e=0;i.css("overflow")!="hidden"&&(e=window.pageYOffset),i.css("overflow",""),i.css("position",""),i.css("top",""),i.width(""),$(window).scrollTop(e)}function f(){let i=$(document.body),e=0,l=i.innerWidth();e=window.pageYOffset,i.css("overflow","hidden"),i.css("position","fixed"),i.css("top",`-${e}px`),i.width(l)}function n(){d(),o("auto")}function o(i){let e=$(".c-theme-switcher-container__light , .c-theme-switcher-container__dark");i==="auto"&&(c.matches?e.css("display","block"):e.css("display","none")),i==="visible"&&e.css("display","block")}h.addEventListener("change",n);w.addEventListener("change",n);p.addEventListener("change",n);c.addEventListener("change",n);t.push(function(){$('[menu="open"]').on("click",function(){f(),o("visible")}),$('[menu="close"]').on("click",function(){d(),o("auto")})});})();
//# sourceMappingURL=disableScroll.js.map
