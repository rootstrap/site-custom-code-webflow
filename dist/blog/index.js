(()=>{var s=document.getElementById("blog-hero"),o=document.getElementById("blog-header"),l=document.querySelectorAll(".cc-yellow-header"),r=new IntersectionObserver(n,{root:null,threshold:0});function n(t){let{isIntersecting:c}=t[0];c?(o.classList.add("cc-yellow-header"),l.forEach(e=>{e.classList.add("cc-yellow-header")})):(o.classList.remove("cc-yellow-header"),l.forEach(e=>{e.classList.remove("cc-yellow-header")}))}r.observe(s);})();
//# sourceMappingURL=index.js.map