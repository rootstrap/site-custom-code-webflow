(()=>{var e=document.querySelector(".name-input"),n=!1,t=document.querySelector(".name-underline"),r=document.querySelector(".project-input-container"),i=document.querySelector(".cc-email-input"),l=document.querySelector(".cc-name-required-error"),o=getComputedStyle(i),u=getComputedStyle(l),s=o.marginTop.substring(0,o.marginTop.length-2),m=u.lineHeight.substring(0,u.lineHeight.length-2);t.style.maxWidth=`${r.getBoundingClientRect().width}px`;var a=()=>{n||(t.style.width="100%",r.style.marginBottom="0px",i.style.marginTop=`${Number(s)-Number(m)}px`,l.style.display="block",t.style.backgroundColor="#cb0b0b",n=!0)},c=()=>{t.style.backgroundColor="#7b7b7b",i.style.marginTop=`${s}px`,l.style.display="none",n=!1};e.addEventListener("focus",()=>{e.value===""&&(e.placeholder="")});e.addEventListener("blur",()=>{e.value===""&&(e.placeholder="Your name*",t.style.width="100%",a())});e.addEventListener("input",()=>{if(e.value==="")a();else if(c(),Number(t.style.width.substring(0,t.style.width.length-2))<r.getBoundingClientRect().width){let d=Number(getComputedStyle(e).fontSize.substring(0,getComputedStyle(e).fontSize.length-2));t.style.width=`${e.value.length*d*.5}px`}});})();
//# sourceMappingURL=nameInput.js.map
