(()=>{function a(){return document.cookie.match(/theme=__dark/i)!=null}function d(n){return a()?`<span class="c-underlined-text__dark">${n}</span>`:`<span class="c-underlined-text__light">${n}</span>`}function h(n){return a()?`<span class="c-highlighted-text__dark">${n}</span>`:`<span class="c-highlighted-text__light">${n}</span>`}function c(){document.querySelectorAll("h1, h2, h3, h4, h5").forEach(t=>{let r=t.innerHTML.replace(/__(.*?)__/gi,(p,i)=>d(i)).replace(/%%(.*?)%%/gi,(p,i)=>h(i)).replace(/&lt;br&gt;/gi,()=>"<br >");t.innerHTML=r})}var g="<columns>",o="</columns>",m="<col>",s="</col>";function C(n){let t=Array.from($(n).nextUntil(`p:contains('${o}')`)),e=document.createElement("div");e.classList.add("c-grid-2-cols"),t.forEach(r=>e.appendChild(r)),n.replaceWith(e)}function u(){$(`p:contains('${m}')`).each(function(){let t=Array.from($(this).nextUntil(`p:contains('${s}')`)),e=document.createElement("div");e.classList.add("c-grid-col"),t.forEach(r=>e.appendChild(r)),this.replaceWith(e)})}function l(){$(`p:contains('${g}')`).each(function(){C(this),u()}),$(`p:contains('${s}')`).remove(),$(`p:contains('${o}')`).remove()}document.addEventListener("DOMContentLoaded",()=>{c(),l()});})();
//# sourceMappingURL=index.js.map
