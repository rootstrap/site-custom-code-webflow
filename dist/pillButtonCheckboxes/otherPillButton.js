(()=>{var o={lightHoverColor:"#ffc83f",darkHoverColor:"#ffc83f",lightSelectedHoverColor:"#FFC83F",darkSelectedHoverColor:"#FFC83F",lightBackgroundColor:"transparent",darkBackgroundColor:"transparent",lightSelectedBackgroundColor:"#1b1b1b",darkSelectedBackgroundColor:"#FFB90A",lightTextColor:"#1b1b1b",lightSelectedTextColor:"#FFFFFF",darkTextColor:"#FFFFFF",darkSelectedTextColor:"#0A0A0A"};var t=document.getElementById("checkbox-pill-other"),l=document.getElementById("pill-checkbox-other"),e=document.getElementById("button-hover-other"),r=document.getElementById("pill-list-label-other");function c(){return l.className.includes("__light")}var n=new MutationObserver((d,a)=>{d[0].target.className.includes("__light")?t.checked?(l.style.backgroundColor=o.lightSelectedBackgroundColor,e.style.backgroundColor=o.lightSelectedHoverColor,r.style.color=o.lightSelectedTextColor):(r.style.color=o.lightTextColor,l.style.backgroundColor=o.lightBackgroundColor,e.style.backgroundColor=o.lightHoverColor):t.checked?(l.style.backgroundColor=o.darkSelectedBackgroundColor,e.style.backgroundColor=o.darkSelectedHoverColor,r.style.color=o.darkSelectedTextColor):(l.style.backgroundColor=o.darkBackgroundColor,e.style.backgroundColor=o.darkHoverColor,r.style.color=o.darkTextColor)});n.observe(l,{attributes:!0});t.addEventListener("change",function(){this.checked?c()?(l.style.backgroundColor=o.lightSelectedBackgroundColor,e.style.backgroundColor=o.lightSelectedHoverColor,r.style.color=o.lightSelectedTextColor):(r.style.color=o.darkSelectedTextColor,l.style.backgroundColor=o.darkSelectedBackgroundColor,e.style.backgroundColor=o.darkSelectedHoverColor):c()?(l.style.backgroundColor=o.lightBackgroundColor,e.style.backgroundColor=o.lightHoverColor,r.style.color=o.lightTextColor):(l.style.backgroundColor=o.darkBackgroundColor,e.style.backgroundColor=o.darkHoverColor,r.style.color=o.darkTextColor)});l.addEventListener("mouseover",function(){t.checked?c()?e.style.backgroundColor=o.lightSelectedHoverColor:e.style.backgroundColor=o.darkSelectedHoverColor:c()?e.style.backgroundColor=o.lightHoverColor:e.style.backgroundColor=o.darkHoverColor});})();
//# sourceMappingURL=otherPillButton.js.map
