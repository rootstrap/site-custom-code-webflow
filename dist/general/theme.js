(()=>{function l(e){document.cookie=`${e}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`}function m(e,c=""){document.cookie=`${e}=${c}; path=/;`}function h(e){console.log(`applying ${e} theme`);let c=e==="__light"?"__dark":"__light",r=`*[class*='${c}']`;[...document.querySelectorAll(r)].forEach(t=>{t.className=t.className.replace(c,e)})}function T(){let e=a();h(e?"__dark":"__light")}function d(){let e=document.getElementById("toggleTheme");e!==null&&(e.checked=a())}function a(){return document.cookie.match(/theme=__dark/i)!=null}function p(){let e=a();h(e?"__light":"__dark"),l("theme"),m("theme",e?"__light":"__dark")}(function(){T(),d();let e=document.getElementById("toggleTheme");e!==null&&(e.onchange=p)})();window.onload=function(){let e=document.getElementById("theme-root");e.style.transitionProperty="color, background-color",e.style.transitionDuration="300ms",e.style.transitionTimingFunction="ease"};document.addEventListener("DOMContentLoaded",function(){document.body.style.visibility="visible"});var o=document.getElementById("themeSwitcher"),s=[],n={COLOR:"COLOR",HIGH_CONTRAST:"HIGH_CONTRAST",LOW_CONTRAST:"LOW_CONTRAST"},L=e=>{switch(e){case n.COLOR:o.classList.add("cc-color-contrast"),o.classList.remove("cc-high-contrast"),o.classList.remove("cc-low-contrast");return;case n.HIGH_CONTRAST:o.classList.remove("cc-color-contrast"),o.classList.add("cc-high-contrast"),o.classList.remove("cc-low-contrast");return;case n.LOW_CONTRAST:o.classList.remove("cc-color-contrast"),o.classList.remove("cc-high-contrast"),o.classList.add("cc-low-contrast");return;default:o.classList.remove("cc-color-contrast"),o.classList.remove("cc-high-contrast"),o.classList.remove("cc-low-contrast");return}},g=e=>{let c=e.map(({isIntersecting:t,target:i})=>({isIntersecting:t,sectionType:i.className.includes("cc-color-contrast")?n.COLOR:i.className.includes("cc-high-contrast")?n.HIGH_CONTRAST:i.className.includes("cc-low-contrast")?n.LOW_CONTRAST:null})),r=c.filter(({isIntersecting:t})=>t).map(({sectionType:t})=>t).reverse();c.filter(({isIntersecting:t})=>!t).map(({sectionType:t})=>t).forEach(t=>{s.shift()}),s.unshift(...r),console.table(s),L(s[0])},y=new IntersectionObserver(g,{root:null,threshold:0,rootMargin:`${window.innerHeight}px 0px -40px 0px`}),C=["*[class*='cc-color-contrast']","*[class*='cc-high-contrast']","*[class*='cc-low-contrast']"].join(", "),E=[...document.querySelectorAll(C)];E.forEach(e=>{y.observe(e)});})();
//# sourceMappingURL=theme.js.map
