(()=>{var s=document.querySelector(".cc-request-radio-group"),o=!1,e=Array.from(document.querySelectorAll(".cc-request-radio-group > .c-pill-m__light")),l=Array.from(document.querySelectorAll(".cc-request-radio-group > .c-pill-m__dark")),t=document.querySelector(".cc-request-required-error"),c=()=>{if(t){t.style.display="block";for(let r=0;r<e.length;r++)e[r]?.classList.add("cc-pill-m--error__light");for(let r=0;r<l.length;r++)l[r]?.classList.add("cc-pill-m--error__dark");o=!0}},i=()=>{if(t){o=!1,t.style.display="none";for(let r=0;r<e.length;r++)e[r]?.classList.remove("cc-pill-m--error__light"),e[r]?.classList.remove("cc-pill-m--error__dark"),l[r]?.classList.remove("cc-pill-m--error__light"),l[r]?.classList.remove("cc-pill-m--error__dark");for(let r=0;r<l.length;r++)e[r]?.classList.remove("cc-pill-m--error__light"),e[r]?.classList.remove("cc-pill-m--error__dark"),l[r]?.classList.remove("cc-pill-m--error__light"),l[r]?.classList.remove("cc-pill-m--error__dark")}};})();
//# sourceMappingURL=requestRadioGroup.js.map
