(()=>{var a=document.querySelector(".cc-socials-checkbox-group"),k=!1,d=[document.querySelector("#pill-checkbox-google"),document.querySelector("#pill-checkbox-social"),document.querySelector("#pill-checkbox-friend"),document.querySelector("#pill-checkbox-referal"),document.querySelector("#pill-checkbox-other-social")],g=document.querySelector(".cc-socials-required-error"),s=getComputedStyle(g),i=getComputedStyle(a),C=i.marginTop.substring(0,i.marginTop.length-2),y=s.lineHeight.substring(0,s.lineHeight.length-2);var u=()=>{g.style.display="none";for(let t=0;t<d.length;t++)d[t].style.border="1px solid #9e9e9e";a.style.marginTop=`${C}px`,k=!1};var e={lightHoverColor:"#ffc83f",darkHoverColor:"#ffc83f",lightSelectedHoverColor:"#FFC83F",darkSelectedHoverColor:"#FFC83F",lightBackgroundColor:"transparent",darkBackgroundColor:"transparent",lightSelectedBackgroundColor:"#1b1b1b",darkSelectedBackgroundColor:"#FFB90A",lightTextColor:"#1b1b1b",lightSelectedTextColor:"#FFFFFF",darkTextColor:"#FFFFFF",darkSelectedTextColor:"#0A0A0A"};var c=document.getElementById("checkbox-pill-friend"),r=document.getElementById("pill-checkbox-friend"),o=document.getElementById("button-hover-friend"),l=document.getElementById("pill-list-label-friend");function n(){return r.className.includes("__light")}var b=new MutationObserver((t,h)=>{t[0].target.className.includes("__light")?c.checked?(r.style.backgroundColor=e.lightSelectedBackgroundColor,o.style.backgroundColor=e.lightSelectedHoverColor,l.style.color=e.lightSelectedTextColor):(l.style.color=e.lightTextColor,r.style.backgroundColor=e.lightBackgroundColor,o.style.backgroundColor=e.lightHoverColor):c.checked?(r.style.backgroundColor=e.darkSelectedBackgroundColor,o.style.backgroundColor=e.darkSelectedHoverColor,l.style.color=e.darkSelectedTextColor):(r.style.backgroundColor=e.darkBackgroundColor,o.style.backgroundColor=e.darkHoverColor,l.style.color=e.darkTextColor)});b.observe(r,{attributes:!0});c.addEventListener("change",function(){u(),this.checked?n()?(r.style.backgroundColor=e.lightSelectedBackgroundColor,o.style.backgroundColor=e.lightSelectedHoverColor,l.style.color=e.lightSelectedTextColor):(l.style.color=e.darkSelectedTextColor,r.style.backgroundColor=e.darkSelectedBackgroundColor,o.style.backgroundColor=e.darkSelectedHoverColor):n()?(r.style.backgroundColor=e.lightBackgroundColor,o.style.backgroundColor=e.lightHoverColor,l.style.color=e.lightTextColor):(r.style.backgroundColor=e.darkBackgroundColor,o.style.backgroundColor=e.darkHoverColor,l.style.color=e.darkTextColor)});r.addEventListener("mouseover",function(){c.checked?n()?o.style.backgroundColor=e.lightSelectedHoverColor:o.style.backgroundColor=e.darkSelectedHoverColor:n()?o.style.backgroundColor=e.lightHoverColor:o.style.backgroundColor=e.darkHoverColor});})();
//# sourceMappingURL=friendPillButton.js.map
