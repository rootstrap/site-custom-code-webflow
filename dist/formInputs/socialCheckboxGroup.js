(()=>{var r=document.querySelector(".cc-socials-checkbox-group"),s=!1,o=[document.querySelector("#pill-checkbox-google"),document.querySelector("#pill-checkbox-social"),document.querySelector("#pill-checkbox-friend"),document.querySelector("#pill-checkbox-referral"),document.querySelector("#pill-checkbox-other-social")],l=document.querySelector(".cc-socials-required-error"),t=getComputedStyle(l),c=getComputedStyle(r),i=c.marginTop.substring(0,c.marginTop.length-2),n=t.lineHeight.substring(0,t.lineHeight.length-2),a=()=>{r.style.marginTop=`${Number(i)-Number(n)}px`,l.style.display="block";for(let e=0;e<o.length;e++)o[e].style.border="1px solid #cb0b0b";s=!0},p=()=>{s=!1,l.style.display="none";for(let e=0;e<o.length;e++)o[e].style.border="1px solid #9e9e9e";r.style.marginTop=`${i}px`};})();
//# sourceMappingURL=socialCheckboxGroup.js.map
