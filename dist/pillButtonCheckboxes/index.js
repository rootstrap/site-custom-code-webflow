(()=>{var o={lightHoverColor:"#ffc83f",darkHoverColor:"#ffc83f",lightSelectedHoverColor:"#FFC83F",darkSelectedHoverColor:"#FFC83F",lightBackgroundColor:"transparent",darkBackgroundColor:"transparent",lightSelectedBackgroundColor:"#1b1b1b",darkSelectedBackgroundColor:"#FFB90A",lightTextColor:"#1b1b1b",lightSelectedTextColor:"#FFFFFF",darkTextColor:"#FFFFFF",darkSelectedTextColor:"#0A0A0A"};var J=document.getElementById("checkbox-pill-product"),m=document.getElementById("pill-checkbox-product"),v=document.getElementById("button-hover-product"),O=document.getElementById("pill-list-label-product");function Q(){return m.className.includes("__light")}var oo=new MutationObserver((e,y)=>{e[0].target.className.includes("__light")?J.checked?(m.style.backgroundColor=o.lightSelectedBackgroundColor,v.style.backgroundColor=o.lightSelectedHoverColor,O.style.color=o.lightSelectedTextColor):(O.style.color=o.lightTextColor,m.style.backgroundColor=o.lightBackgroundColor,v.style.backgroundColor=o.lightHoverColor):J.checked?(m.style.backgroundColor=o.darkSelectedBackgroundColor,v.style.backgroundColor=o.darkSelectedHoverColor,O.style.color=o.darkSelectedTextColor):(m.style.backgroundColor=o.darkBackgroundColor,v.style.backgroundColor=o.darkHoverColor,O.style.color=o.darkTextColor)});oo.observe(m,{attributes:!0});m.addEventListener("click",()=>{});m.addEventListener("mouseover",function(){J.checked?Q()?v.style.backgroundColor=o.lightSelectedHoverColor:v.style.backgroundColor=o.darkSelectedHoverColor:Q()?v.style.backgroundColor=o.lightHoverColor:v.style.backgroundColor=o.darkHoverColor});var I=document.getElementById("checkbox-pill-software"),l=document.getElementById("pill-checkbox-software"),r=document.getElementById("button-hover-software"),f=document.getElementById("pill-list-label-software");function q(){return l.className.includes("__light")}var eo=new MutationObserver((e,y)=>{e[0].target.className.includes("__light")?I.checked?(l.style.backgroundColor=o.lightSelectedBackgroundColor,r.style.backgroundColor=o.lightSelectedHoverColor,f.style.color=o.lightSelectedTextColor):(f.style.color=o.lightTextColor,l.style.backgroundColor=o.lightBackgroundColor,r.style.backgroundColor=o.lightHoverColor):I.checked?(l.style.backgroundColor=o.darkSelectedBackgroundColor,r.style.backgroundColor=o.darkSelectedHoverColor,f.style.color=o.darkSelectedTextColor):(l.style.backgroundColor=o.darkBackgroundColor,r.style.backgroundColor=o.darkHoverColor,f.style.color=o.darkTextColor)});eo.observe(l,{attributes:!0});l.addEventListener("click",function(){I.checked=!I.checked,I.checked?q()?(l.style.backgroundColor=o.lightSelectedBackgroundColor,r.style.backgroundColor=o.lightSelectedHoverColor,f.style.color=o.lightSelectedTextColor):(f.style.color=o.darkSelectedTextColor,l.style.backgroundColor=o.darkSelectedBackgroundColor,r.style.backgroundColor=o.darkSelectedHoverColor):q()?(l.style.backgroundColor=o.lightBackgroundColor,r.style.backgroundColor=o.lightHoverColor,f.style.color=o.lightTextColor):(l.style.backgroundColor=o.darkBackgroundColor,r.style.backgroundColor=o.darkHoverColor,f.style.color=o.darkTextColor)});l.addEventListener("mouseover",function(){I.checked?q()?r.style.backgroundColor=o.lightSelectedHoverColor:r.style.backgroundColor=o.darkSelectedHoverColor:q()?r.style.backgroundColor=o.lightHoverColor:r.style.backgroundColor=o.darkHoverColor});var _=document.getElementById("checkbox-pill-staff"),t=document.getElementById("pill-checkbox-staff"),c=document.getElementById("button-hover-staff"),H=document.getElementById("pill-list-label-staff");function A(){return t.className.includes("__light")}var lo=new MutationObserver((e,y)=>{e[0].target.className.includes("__light")?_.checked?(t.style.backgroundColor=o.lightSelectedBackgroundColor,c.style.backgroundColor=o.lightSelectedHoverColor,H.style.color=o.lightSelectedTextColor):(H.style.color=o.lightTextColor,t.style.backgroundColor=o.lightBackgroundColor,c.style.backgroundColor=o.lightHoverColor):_.checked?(t.style.backgroundColor=o.darkSelectedBackgroundColor,c.style.backgroundColor=o.darkSelectedHoverColor,H.style.color=o.darkSelectedTextColor):(t.style.backgroundColor=o.darkBackgroundColor,c.style.backgroundColor=o.darkHoverColor,H.style.color=o.darkTextColor)});lo.observe(t,{attributes:!0});t.addEventListener("click",function(){_.checked=!_.checked,_.checked?A()?(t.style.backgroundColor=o.lightSelectedBackgroundColor,c.style.backgroundColor=o.lightSelectedHoverColor,H.style.color=o.lightSelectedTextColor):(H.style.color=o.darkSelectedTextColor,t.style.backgroundColor=o.darkSelectedBackgroundColor,c.style.backgroundColor=o.darkSelectedHoverColor):A()?(t.style.backgroundColor=o.lightBackgroundColor,c.style.backgroundColor=o.lightHoverColor,H.style.color=o.lightTextColor):(t.style.backgroundColor=o.darkBackgroundColor,c.style.backgroundColor=o.darkHoverColor,H.style.color=o.darkTextColor)});t.addEventListener("mouseover",function(){_.checked?A()?c.style.backgroundColor=o.lightSelectedHoverColor:c.style.backgroundColor=o.darkSelectedHoverColor:A()?c.style.backgroundColor=o.lightHoverColor:c.style.backgroundColor=o.darkHoverColor});var w=document.getElementById("checkbox-pill-other"),d=document.getElementById("pill-checkbox-other"),n=document.getElementById("button-hover-other"),S=document.getElementById("pill-list-label-other");function R(){return d.className.includes("__light")}var ro=new MutationObserver((e,y)=>{e[0].target.className.includes("__light")?w.checked?(d.style.backgroundColor=o.lightSelectedBackgroundColor,n.style.backgroundColor=o.lightSelectedHoverColor,S.style.color=o.lightSelectedTextColor):(S.style.color=o.lightTextColor,d.style.backgroundColor=o.lightBackgroundColor,n.style.backgroundColor=o.lightHoverColor):w.checked?(d.style.backgroundColor=o.darkSelectedBackgroundColor,n.style.backgroundColor=o.darkSelectedHoverColor,S.style.color=o.darkSelectedTextColor):(d.style.backgroundColor=o.darkBackgroundColor,n.style.backgroundColor=o.darkHoverColor,S.style.color=o.darkTextColor)});ro.observe(d,{attributes:!0});d.addEventListener("click",function(){w.checked=!w.checked,w.checked?R()?(d.style.backgroundColor=o.lightSelectedBackgroundColor,n.style.backgroundColor=o.lightSelectedHoverColor,S.style.color=o.lightSelectedTextColor):(S.style.color=o.darkSelectedTextColor,d.style.backgroundColor=o.darkSelectedBackgroundColor,n.style.backgroundColor=o.darkSelectedHoverColor):R()?(d.style.backgroundColor=o.lightBackgroundColor,n.style.backgroundColor=o.lightHoverColor,S.style.color=o.lightTextColor):(d.style.backgroundColor=o.darkBackgroundColor,n.style.backgroundColor=o.darkHoverColor,S.style.color=o.darkTextColor)});d.addEventListener("mouseover",function(){w.checked?R()?n.style.backgroundColor=o.lightSelectedHoverColor:n.style.backgroundColor=o.darkSelectedHoverColor:R()?n.style.backgroundColor=o.lightHoverColor:n.style.backgroundColor=o.darkHoverColor});var X=document.querySelector(".cc-socials-checkbox-group"),to=!1,U=[document.querySelector("#pill-checkbox-google"),document.querySelector("#pill-checkbox-social"),document.querySelector("#pill-checkbox-friend"),document.querySelector("#pill-checkbox-referral"),document.querySelector("#pill-checkbox-other-social")],Y=document.querySelector(".cc-socials-required-error"),V=getComputedStyle(Y),W=getComputedStyle(X),co=W.marginTop.substring(0,W.marginTop.length-2),mo=V.lineHeight.substring(0,V.lineHeight.length-2);var b=()=>{Y.style.display="none";for(let e=0;e<U.length;e++)U[e].style.border="1px solid #9e9e9e";X.style.marginTop=`${co}px`,to=!1};var M=document.getElementById("checkbox-pill-social"),s=document.getElementById("pill-checkbox-social"),a=document.getElementById("button-hover-social"),T=document.getElementById("pill-list-label-social");function D(){return s.className.includes("__light")}var no=new MutationObserver((e,y)=>{e[0].target.className.includes("__light")?M.checked?(s.style.backgroundColor=o.lightSelectedBackgroundColor,a.style.backgroundColor=o.lightSelectedHoverColor,T.style.color=o.lightSelectedTextColor):(T.style.color=o.lightTextColor,s.style.backgroundColor=o.lightBackgroundColor,a.style.backgroundColor=o.lightHoverColor):M.checked?(s.style.backgroundColor=o.darkSelectedBackgroundColor,a.style.backgroundColor=o.darkSelectedHoverColor,T.style.color=o.darkSelectedTextColor):(s.style.backgroundColor=o.darkBackgroundColor,a.style.backgroundColor=o.darkHoverColor,T.style.color=o.darkTextColor)});no.observe(s,{attributes:!0});s.addEventListener("click",function(){console.log(M.checked),M.checked=!M.checked,b(),M.checked?D()?(s.style.backgroundColor=o.lightSelectedBackgroundColor,a.style.backgroundColor=o.lightSelectedHoverColor,T.style.color=o.lightSelectedTextColor):(T.style.color=o.darkSelectedTextColor,s.style.backgroundColor=o.darkSelectedBackgroundColor,a.style.backgroundColor=o.darkSelectedHoverColor):D()?(s.style.backgroundColor=o.lightBackgroundColor,a.style.backgroundColor=o.lightHoverColor,T.style.color=o.lightTextColor):(s.style.backgroundColor=o.darkBackgroundColor,a.style.backgroundColor=o.darkHoverColor,T.style.color=o.darkTextColor)});s.addEventListener("mouseover",function(){M.checked?D()?a.style.backgroundColor=o.lightSelectedHoverColor:a.style.backgroundColor=o.darkSelectedHoverColor:D()?a.style.backgroundColor=o.lightHoverColor:a.style.backgroundColor=o.darkHoverColor});var F=document.getElementById("checkbox-pill-google"),k=document.getElementById("pill-checkbox-google"),g=document.getElementById("button-hover-google"),x=document.getElementById("pill-list-label-google");function G(){return k.className.includes("__light")}var so=new MutationObserver((e,y)=>{e[0].target.className.includes("__light")?F.checked?(k.style.backgroundColor=o.lightSelectedBackgroundColor,g.style.backgroundColor=o.lightSelectedHoverColor,x.style.color=o.lightSelectedTextColor):(x.style.color=o.lightTextColor,k.style.backgroundColor=o.lightBackgroundColor,g.style.backgroundColor=o.lightHoverColor):F.checked?(k.style.backgroundColor=o.darkSelectedBackgroundColor,g.style.backgroundColor=o.darkSelectedHoverColor,x.style.color=o.darkSelectedTextColor):(k.style.backgroundColor=o.darkBackgroundColor,g.style.backgroundColor=o.darkHoverColor,x.style.color=o.darkTextColor)});so.observe(k,{attributes:!0});k.addEventListener("click",function(){F.checked=!F.checked,b(),F.checked?G()?(k.style.backgroundColor=o.lightSelectedBackgroundColor,g.style.backgroundColor=o.lightSelectedHoverColor,x.style.color=o.lightSelectedTextColor):(x.style.color=o.darkSelectedTextColor,k.style.backgroundColor=o.darkSelectedBackgroundColor,g.style.backgroundColor=o.darkSelectedHoverColor):G()?(k.style.backgroundColor=o.lightBackgroundColor,g.style.backgroundColor=o.lightHoverColor,x.style.color=o.lightTextColor):(k.style.backgroundColor=o.darkBackgroundColor,g.style.backgroundColor=o.darkHoverColor,x.style.color=o.darkTextColor)});k.addEventListener("mouseover",function(){F.checked?G()?g.style.backgroundColor=o.lightSelectedHoverColor:g.style.backgroundColor=o.darkSelectedHoverColor:G()?g.style.backgroundColor=o.lightHoverColor:g.style.backgroundColor=o.darkHoverColor});var K=document.getElementById("checkbox-pill-referral"),B=document.getElementById("pill-checkbox-referral"),E=document.getElementById("button-hover-referral"),$=document.getElementById("pill-list-label-referral");function Z(){return B.className.includes("__light")}var ao=new MutationObserver((e,y)=>{e[0].target.className.includes("__light")?K.checked?(B.style.backgroundColor=o.lightSelectedBackgroundColor,E.style.backgroundColor=o.lightSelectedHoverColor,$.style.color=o.lightSelectedTextColor):($.style.color=o.lightTextColor,B.style.backgroundColor=o.lightBackgroundColor,E.style.backgroundColor=o.lightHoverColor):K.checked?(B.style.backgroundColor=o.darkSelectedBackgroundColor,E.style.backgroundColor=o.darkSelectedHoverColor,$.style.color=o.darkSelectedTextColor):(B.style.backgroundColor=o.darkBackgroundColor,E.style.backgroundColor=o.darkHoverColor,$.style.color=o.darkTextColor)});ao.observe(B,{attributes:!0});B.addEventListener("click",function(){});B.addEventListener("mouseover",function(){K.checked?Z()?E.style.backgroundColor=o.lightSelectedHoverColor:E.style.backgroundColor=o.darkSelectedHoverColor:Z()?E.style.backgroundColor=o.lightHoverColor:E.style.backgroundColor=o.darkHoverColor});var N=document.getElementById("checkbox-pill-friend"),i=document.getElementById("pill-checkbox-friend"),C=document.getElementById("button-hover-friend"),p=document.getElementById("pill-list-label-friend");function j(){return i.className.includes("__light")}var ko=new MutationObserver((e,y)=>{e[0].target.className.includes("__light")?N.checked?(i.style.backgroundColor=o.lightSelectedBackgroundColor,C.style.backgroundColor=o.lightSelectedHoverColor,p.style.color=o.lightSelectedTextColor):(p.style.color=o.lightTextColor,i.style.backgroundColor=o.lightBackgroundColor,C.style.backgroundColor=o.lightHoverColor):N.checked?(i.style.backgroundColor=o.darkSelectedBackgroundColor,C.style.backgroundColor=o.darkSelectedHoverColor,p.style.color=o.darkSelectedTextColor):(i.style.backgroundColor=o.darkBackgroundColor,C.style.backgroundColor=o.darkHoverColor,p.style.color=o.darkTextColor)});ko.observe(i,{attributes:!0});i.addEventListener("click",function(){N.checked=!N.checked,b(),N.checked?j()?(i.style.backgroundColor=o.lightSelectedBackgroundColor,C.style.backgroundColor=o.lightSelectedHoverColor,p.style.color=o.lightSelectedTextColor):(p.style.color=o.darkSelectedTextColor,i.style.backgroundColor=o.darkSelectedBackgroundColor,C.style.backgroundColor=o.darkSelectedHoverColor):j()?(i.style.backgroundColor=o.lightBackgroundColor,C.style.backgroundColor=o.lightHoverColor,p.style.color=o.lightTextColor):(i.style.backgroundColor=o.darkBackgroundColor,C.style.backgroundColor=o.darkHoverColor,p.style.color=o.darkTextColor)});i.addEventListener("mouseover",function(){N.checked?j()?C.style.backgroundColor=o.lightSelectedHoverColor:C.style.backgroundColor=o.darkSelectedHoverColor:j()?C.style.backgroundColor=o.lightHoverColor:C.style.backgroundColor=o.darkHoverColor});var P=document.getElementById("checkbox-pill-other-social"),u=document.getElementById("pill-checkbox-other-social"),h=document.getElementById("button-hover-other-social"),L=document.getElementById("pill-list-label-other-social");function z(){return u.className.includes("__light")}var go=new MutationObserver((e,y)=>{e[0].target.className.includes("__light")?P.checked?(u.style.backgroundColor=o.lightSelectedBackgroundColor,h.style.backgroundColor=o.lightSelectedHoverColor,L.style.color=o.lightSelectedTextColor):(L.style.color=o.lightTextColor,u.style.backgroundColor=o.lightBackgroundColor,h.style.backgroundColor=o.lightHoverColor):P.checked?(u.style.backgroundColor=o.darkSelectedBackgroundColor,h.style.backgroundColor=o.darkSelectedHoverColor,L.style.color=o.darkSelectedTextColor):(u.style.backgroundColor=o.darkBackgroundColor,h.style.backgroundColor=o.darkHoverColor,L.style.color=o.darkTextColor)});go.observe(u,{attributes:!0});u.addEventListener("click",function(){P.checked=!P.checked,b(),P.checked?z()?(u.style.backgroundColor=o.lightSelectedBackgroundColor,h.style.backgroundColor=o.lightSelectedHoverColor,L.style.color=o.lightSelectedTextColor):(L.style.color=o.darkSelectedTextColor,u.style.backgroundColor=o.darkSelectedBackgroundColor,h.style.backgroundColor=o.darkSelectedHoverColor):z()?(u.style.backgroundColor=o.lightBackgroundColor,h.style.backgroundColor=o.lightHoverColor,L.style.color=o.lightTextColor):(u.style.backgroundColor=o.darkBackgroundColor,h.style.backgroundColor=o.darkHoverColor,L.style.color=o.darkTextColor)});u.addEventListener("mouseover",function(){P.checked?z()?h.style.backgroundColor=o.lightSelectedHoverColor:h.style.backgroundColor=o.darkSelectedHoverColor:z()?h.style.backgroundColor=o.lightHoverColor:h.style.backgroundColor=o.darkHoverColor});})();
//# sourceMappingURL=index.js.map
