(()=>{var a=document.querySelector(".cc-socials-checkbox-group"),k=!1,n=[document.querySelector("#pill-checkbox-google"),document.querySelector("#pill-checkbox-social"),document.querySelector("#pill-checkbox-friend"),document.querySelector("#pill-checkbox-referral"),document.querySelector("#pill-checkbox-other-social")],g=document.querySelector(".cc-socials-required-error"),d=getComputedStyle(g),i=getComputedStyle(a),C=i.marginTop.substring(0,i.marginTop.length-2),y=d.lineHeight.substring(0,d.lineHeight.length-2);var u=()=>{g.style.display="none";for(let c=0;c<n.length;c++)n[c].style.border="1px solid #9e9e9e";a.style.marginTop=`${C}px`,k=!1};var e={lightHoverColor:"#ffc83f",darkHoverColor:"#ffc83f",lightSelectedHoverColor:"#FFC83F",darkSelectedHoverColor:"#FFC83F",lightBackgroundColor:"transparent",darkBackgroundColor:"transparent",lightSelectedBackgroundColor:"#1b1b1b",darkSelectedBackgroundColor:"#FFB90A",lightTextColor:"#1b1b1b",lightSelectedTextColor:"#FFFFFF",darkTextColor:"#FFFFFF",darkSelectedTextColor:"#0A0A0A"};var t=document.getElementById("checkbox-pill-google"),o=document.getElementById("pill-checkbox-google"),l=document.getElementById("button-hover-google"),r=document.getElementById("pill-list-label-google");function s(){return o.className.includes("__light")}var b=new MutationObserver((c,h)=>{c[0].target.className.includes("__light")?t.checked?(o.style.backgroundColor=e.lightSelectedBackgroundColor,l.style.backgroundColor=e.lightSelectedHoverColor,r.style.color=e.lightSelectedTextColor):(r.style.color=e.lightTextColor,o.style.backgroundColor=e.lightBackgroundColor,l.style.backgroundColor=e.lightHoverColor):t.checked?(o.style.backgroundColor=e.darkSelectedBackgroundColor,l.style.backgroundColor=e.darkSelectedHoverColor,r.style.color=e.darkSelectedTextColor):(o.style.backgroundColor=e.darkBackgroundColor,l.style.backgroundColor=e.darkHoverColor,r.style.color=e.darkTextColor)});b.observe(o,{attributes:!0});o.addEventListener("click",function(){t.checked=!t.checked,u(),t.checked?s()?(o.style.backgroundColor=e.lightSelectedBackgroundColor,l.style.backgroundColor=e.lightSelectedHoverColor,r.style.color=e.lightSelectedTextColor):(r.style.color=e.darkSelectedTextColor,o.style.backgroundColor=e.darkSelectedBackgroundColor,l.style.backgroundColor=e.darkSelectedHoverColor):s()?(o.style.backgroundColor=e.lightBackgroundColor,l.style.backgroundColor=e.lightHoverColor,r.style.color=e.lightTextColor):(o.style.backgroundColor=e.darkBackgroundColor,l.style.backgroundColor=e.darkHoverColor,r.style.color=e.darkTextColor)});o.addEventListener("mouseover",function(){t.checked?s()?l.style.backgroundColor=e.lightSelectedHoverColor:l.style.backgroundColor=e.darkSelectedHoverColor:s()?l.style.backgroundColor=e.lightHoverColor:l.style.backgroundColor=e.darkHoverColor});})();
//# sourceMappingURL=googlePillButton.js.map
