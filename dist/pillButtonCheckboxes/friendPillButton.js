(()=>{var e={lightHoverColor:"#ffc83f",darkHoverColor:"#ffc83f",lightSelectedHoverColor:"#FFC83F",darkSelectedHoverColor:"#FFC83F",lightBackgroundColor:"transparent",darkBackgroundColor:"transparent",lightSelectedBackgroundColor:"#1b1b1b",darkSelectedBackgroundColor:"#FFB90A",lightTextColor:"#1b1b1b",lightSelectedTextColor:"#FFFFFF",darkTextColor:"#FFFFFF",darkSelectedTextColor:"#0A0A0A"};var t=document.getElementById("checkbox-pill-friend"),l=document.getElementById("pill-checkbox-friend"),o=document.getElementById("button-hover-friend"),r=document.getElementById("pill-list-label-friend");function d(){return l.className.includes("__light")}var n=new MutationObserver((c,a)=>{c[0].target.className.includes("__light")?t.checked?(l.style.backgroundColor=e.lightSelectedBackgroundColor,o.style.backgroundColor=e.lightSelectedHoverColor,r.style.color=e.lightSelectedTextColor):(r.style.color=e.lightTextColor,l.style.backgroundColor=e.lightBackgroundColor,o.style.backgroundColor=e.lightHoverColor):t.checked?(l.style.backgroundColor=e.darkSelectedBackgroundColor,o.style.backgroundColor=e.darkSelectedHoverColor,r.style.color=e.darkSelectedTextColor):(l.style.backgroundColor=e.darkBackgroundColor,o.style.backgroundColor=e.darkHoverColor,r.style.color=e.darkTextColor)});n.observe(l,{attributes:!0});t.addEventListener("change",function(){this.checked?d()?(l.style.backgroundColor=e.lightSelectedBackgroundColor,o.style.backgroundColor=e.lightSelectedHoverColor,r.style.color=e.lightSelectedTextColor):(r.style.color=e.darkSelectedTextColor,l.style.backgroundColor=e.darkSelectedBackgroundColor,o.style.backgroundColor=e.darkSelectedHoverColor):d()?(l.style.backgroundColor=e.lightBackgroundColor,o.style.backgroundColor=e.lightHoverColor,r.style.color=e.lightTextColor):(l.style.backgroundColor=e.darkBackgroundColor,o.style.backgroundColor=e.darkHoverColor,r.style.color=e.darkTextColor)});l.addEventListener("mouseover",function(){t.checked?d()?o.style.backgroundColor=e.lightSelectedHoverColor:o.style.backgroundColor=e.darkSelectedHoverColor:d()?o.style.backgroundColor=e.lightHoverColor:o.style.backgroundColor=e.darkHoverColor});})();
//# sourceMappingURL=friendPillButton.js.map
