(()=>{function m(e){document.cookie=`${e}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`}function h(e,c=""){document.cookie=`${e}=${c}; path=/;`}function u(e){console.log(`applying ${e} theme`);let c=e==="__light"?"__dark":"__light",i=`*[class*='${c}']`,l=[...document.querySelectorAll(i)],t=new RegExp(c,"g");l.forEach(n=>{n.className=n.className.replace(t,e)})}function T(){let e=a();u(e?"__dark":"__light")}function d(){let e=document.getElementById("toggleTheme");e!==null&&(e.checked=a())}function a(){return document.cookie.match(/theme=__dark/i)!=null}function g(){let e=a();u(e?"__light":"__dark"),m("theme"),h("theme",e?"__light":"__dark")}(function(){T(),d();let e=document.getElementById("toggleTheme");e!==null&&(e.onchange=g)})();window.onload=function(){let e=document.getElementById("theme-root");e.style.transitionProperty="color, background-color",e.style.transitionDuration="300ms",e.style.transitionTimingFunction="ease"};document.addEventListener("DOMContentLoaded",function(){document.body.style.visibility="visible"});var o=document.getElementById("themeSwitcher"),r=[],s={COLOR:"COLOR",HIGH_CONTRAST:"HIGH_CONTRAST",LOW_CONTRAST:"LOW_CONTRAST"},p=e=>{switch(e){case s.COLOR:o.classList.add("cc-color-contrast"),o.classList.remove("cc-high-contrast"),o.classList.remove("cc-low-contrast");return;case s.HIGH_CONTRAST:o.classList.remove("cc-color-contrast"),o.classList.add("cc-high-contrast"),o.classList.remove("cc-low-contrast");return;case s.LOW_CONTRAST:o.classList.remove("cc-color-contrast"),o.classList.remove("cc-high-contrast"),o.classList.add("cc-low-contrast");return;default:o.classList.remove("cc-color-contrast"),o.classList.remove("cc-high-contrast"),o.classList.remove("cc-low-contrast");return}},L=e=>{let c=e.map(({isIntersecting:t,target:n})=>({isIntersecting:t,sectionType:n.className.includes("cc-color-contrast")?s.COLOR:n.className.includes("cc-high-contrast")?s.HIGH_CONTRAST:n.className.includes("cc-low-contrast")?s.LOW_CONTRAST:null})),i=c.filter(({isIntersecting:t})=>t).map(({sectionType:t})=>t).reverse();c.filter(({isIntersecting:t})=>!t).map(({sectionType:t})=>t).forEach(t=>{r.shift()}),r.unshift(...i),console.table(r),p(r[0])},y=new IntersectionObserver(L,{root:null,threshold:0,rootMargin:`${window.innerHeight}px 0px -40px 0px`}),C=["*[class*='cc-color-contrast']","*[class*='cc-high-contrast']","*[class*='cc-low-contrast']"].join(", "),E=[...document.querySelectorAll(C)];E.forEach(e=>{y.observe(e)});})();
//# sourceMappingURL=theme.js.map
