(()=>{var a=document.querySelector(".cc-socials-checkbox-group"),k=!1,n=[document.querySelector("#pill-checkbox-google"),document.querySelector("#pill-checkbox-social"),document.querySelector("#pill-checkbox-friend"),document.querySelector("#pill-checkbox-referal"),document.querySelector("#pill-checkbox-other-social")],g=document.querySelector(".cc-socials-required-error"),d=getComputedStyle(g),i=getComputedStyle(a),C=i.marginTop.substring(0,i.marginTop.length-2),y=d.lineHeight.substring(0,d.lineHeight.length-2);var u=()=>{g.style.display="none";for(let t=0;t<n.length;t++)n[t].style.border="1px solid #9e9e9e";a.style.marginTop=`${C}px`,k=!1};var e={lightHoverColor:"#ffc83f",darkHoverColor:"#ffc83f",lightSelectedHoverColor:"#FFC83F",darkSelectedHoverColor:"#FFC83F",lightBackgroundColor:"transparent",darkBackgroundColor:"transparent",lightSelectedBackgroundColor:"#1b1b1b",darkSelectedBackgroundColor:"#FFB90A",lightTextColor:"#1b1b1b",lightSelectedTextColor:"#FFFFFF",darkTextColor:"#FFFFFF",darkSelectedTextColor:"#0A0A0A"};var c=document.getElementById("checkbox-pill-google"),l=document.getElementById("pill-checkbox-google"),o=document.getElementById("button-hover-google"),r=document.getElementById("pill-list-label-google");function s(){return l.className.includes("__light")}var b=new MutationObserver((t,h)=>{t[0].target.className.includes("__light")?c.checked?(l.style.backgroundColor=e.lightSelectedBackgroundColor,o.style.backgroundColor=e.lightSelectedHoverColor,r.style.color=e.lightSelectedTextColor):(r.style.color=e.lightTextColor,l.style.backgroundColor=e.lightBackgroundColor,o.style.backgroundColor=e.lightHoverColor):c.checked?(l.style.backgroundColor=e.darkSelectedBackgroundColor,o.style.backgroundColor=e.darkSelectedHoverColor,r.style.color=e.darkSelectedTextColor):(l.style.backgroundColor=e.darkBackgroundColor,o.style.backgroundColor=e.darkHoverColor,r.style.color=e.darkTextColor)});b.observe(l,{attributes:!0});c.addEventListener("change",function(){u(),this.checked?s()?(l.style.backgroundColor=e.lightSelectedBackgroundColor,o.style.backgroundColor=e.lightSelectedHoverColor,r.style.color=e.lightSelectedTextColor):(r.style.color=e.darkSelectedTextColor,l.style.backgroundColor=e.darkSelectedBackgroundColor,o.style.backgroundColor=e.darkSelectedHoverColor):s()?(l.style.backgroundColor=e.lightBackgroundColor,o.style.backgroundColor=e.lightHoverColor,r.style.color=e.lightTextColor):(l.style.backgroundColor=e.darkBackgroundColor,o.style.backgroundColor=e.darkHoverColor,r.style.color=e.darkTextColor)});l.addEventListener("mouseover",function(){c.checked?s()?o.style.backgroundColor=e.lightSelectedHoverColor:o.style.backgroundColor=e.darkSelectedHoverColor:s()?o.style.backgroundColor=e.lightHoverColor:o.style.backgroundColor=e.darkHoverColor});})();
//# sourceMappingURL=googlePillButton.js.map
