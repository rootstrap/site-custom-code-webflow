(()=>{var e={lightHoverColor:"#ffc83f",darkHoverColor:"#ffc83f",lightSelectedHoverColor:"#FFC83F",darkSelectedHoverColor:"#FFC83F",lightBackgroundColor:"transparent",darkBackgroundColor:"transparent",lightSelectedBackgroundColor:"#1b1b1b",darkSelectedBackgroundColor:"#FFB90A",lightTextColor:"#1b1b1b",lightSelectedTextColor:"#FFFFFF",darkTextColor:"#FFFFFF",darkSelectedTextColor:"#0A0A0A"};var N=document.getElementById("checkbox-pill-staff"),l=document.getElementById("pill-checkbox-staff"),r=document.getElementById("button-hover-staff"),E=document.getElementById("pill-list-label-staff");function V(){return l.className.includes("__light")}var ae=new MutationObserver((o,B)=>{o[0].target.className.includes("__light")?N.checked?(l.style.backgroundColor=e.lightSelectedBackgroundColor,r.style.backgroundColor=e.lightSelectedHoverColor,E.style.color=e.lightSelectedTextColor):(E.style.color=e.lightTextColor,l.style.backgroundColor=e.lightBackgroundColor,r.style.backgroundColor=e.lightHoverColor):N.checked?(l.style.backgroundColor=e.darkSelectedBackgroundColor,r.style.backgroundColor=e.darkSelectedHoverColor,E.style.color=e.darkSelectedTextColor):(l.style.backgroundColor=e.darkBackgroundColor,r.style.backgroundColor=e.darkHoverColor,E.style.color=e.darkTextColor)});ae.observe(l,{attributes:!0});l.addEventListener("click",function(){N.checked?q():ke()});l.addEventListener("mouseover",function(){N.checked?V()?r.style.backgroundColor=e.lightSelectedHoverColor:r.style.backgroundColor=e.darkSelectedHoverColor:V()?r.style.backgroundColor=e.lightHoverColor:r.style.backgroundColor=e.darkHoverColor});var ke=()=>{A(),R(),G(),N.checked=!0,V()?(l.style.backgroundColor=e.lightSelectedBackgroundColor,r.style.backgroundColor=e.lightSelectedHoverColor,E.style.color=e.lightSelectedTextColor):(E.style.color=e.darkSelectedTextColor,l.style.backgroundColor=e.darkSelectedBackgroundColor,r.style.backgroundColor=e.darkSelectedHoverColor)},q=()=>{N.checked&&(N.checked=!1,V()?(l.style.backgroundColor=e.lightBackgroundColor,r.style.backgroundColor=e.lightHoverColor,E.style.color=e.lightTextColor):(l.style.backgroundColor=e.darkBackgroundColor,r.style.backgroundColor=e.darkHoverColor,E.style.color=e.darkTextColor))};var D=document.getElementById("checkbox-pill-software"),t=document.getElementById("pill-checkbox-software"),c=document.getElementById("button-hover-software"),L=document.getElementById("pill-list-label-software");function W(){return t.className.includes("__light")}var ie=new MutationObserver((o,B)=>{o[0].target.className.includes("__light")?D.checked?(t.style.backgroundColor=e.lightSelectedBackgroundColor,c.style.backgroundColor=e.lightSelectedHoverColor,L.style.color=e.lightSelectedTextColor):(L.style.color=e.lightTextColor,t.style.backgroundColor=e.lightBackgroundColor,c.style.backgroundColor=e.lightHoverColor):D.checked?(t.style.backgroundColor=e.darkSelectedBackgroundColor,c.style.backgroundColor=e.darkSelectedHoverColor,L.style.color=e.darkSelectedTextColor):(t.style.backgroundColor=e.darkBackgroundColor,c.style.backgroundColor=e.darkHoverColor,L.style.color=e.darkTextColor)});ie.observe(t,{attributes:!0});t.addEventListener("click",function(){D.checked?G():ue()});t.addEventListener("mouseover",function(){D.checked?W()?c.style.backgroundColor=e.lightSelectedHoverColor:c.style.backgroundColor=e.darkSelectedHoverColor:W()?c.style.backgroundColor=e.lightHoverColor:c.style.backgroundColor=e.darkHoverColor});var ue=()=>{A(),R(),q(),D.checked=!0,W()?(t.style.backgroundColor=e.lightSelectedBackgroundColor,c.style.backgroundColor=e.lightSelectedHoverColor,L.style.color=e.lightSelectedTextColor):(L.style.color=e.darkSelectedTextColor,t.style.backgroundColor=e.darkSelectedBackgroundColor,c.style.backgroundColor=e.darkSelectedHoverColor)},G=()=>{D.checked&&(D.checked=!1,W()?(t.style.backgroundColor=e.lightBackgroundColor,c.style.backgroundColor=e.lightHoverColor,L.style.color=e.lightTextColor):(t.style.backgroundColor=e.darkBackgroundColor,c.style.backgroundColor=e.darkHoverColor,L.style.color=e.darkTextColor))};var $=document.getElementById("checkbox-pill-other"),d=document.getElementById("pill-checkbox-other"),n=document.getElementById("button-hover-other"),M=document.getElementById("pill-list-label-other");function X(){return d.className.includes("__light")}var Ce=new MutationObserver((o,B)=>{o[0].target.className.includes("__light")?$.checked?(d.style.backgroundColor=e.lightSelectedBackgroundColor,n.style.backgroundColor=e.lightSelectedHoverColor,M.style.color=e.lightSelectedTextColor):(M.style.color=e.lightTextColor,d.style.backgroundColor=e.lightBackgroundColor,n.style.backgroundColor=e.lightHoverColor):$.checked?(d.style.backgroundColor=e.darkSelectedBackgroundColor,n.style.backgroundColor=e.darkSelectedHoverColor,M.style.color=e.darkSelectedTextColor):(d.style.backgroundColor=e.darkBackgroundColor,n.style.backgroundColor=e.darkHoverColor,M.style.color=e.darkTextColor)});Ce.observe(d,{attributes:!0});d.addEventListener("click",function(){$.checked?R():ge()});d.addEventListener("mouseover",function(){$.checked?X()?n.style.backgroundColor=e.lightSelectedHoverColor:n.style.backgroundColor=e.darkSelectedHoverColor:X()?n.style.backgroundColor=e.lightHoverColor:n.style.backgroundColor=e.darkHoverColor});var ge=()=>{A(),G(),q(),$.checked=!0,X()?(d.style.backgroundColor=e.lightSelectedBackgroundColor,n.style.backgroundColor=e.lightSelectedHoverColor,M.style.color=e.lightSelectedTextColor):(M.style.color=e.darkSelectedTextColor,d.style.backgroundColor=e.darkSelectedBackgroundColor,n.style.backgroundColor=e.darkSelectedHoverColor)},R=()=>{$.checked&&($.checked=!1,X()?(d.style.backgroundColor=e.lightBackgroundColor,n.style.backgroundColor=e.lightHoverColor,M.style.color=e.lightTextColor):(d.style.backgroundColor=e.darkBackgroundColor,n.style.backgroundColor=e.darkHoverColor,M.style.color=e.darkTextColor))};var j=document.getElementById("checkbox-pill-product"),s=document.getElementById("pill-checkbox-product"),a=document.getElementById("button-hover-product"),I=document.getElementById("pill-list-label-product");function Y(){return s.className.includes("__light")}var he=new MutationObserver((o,B)=>{o[0].target.className.includes("__light")?j.checked?(s.style.backgroundColor=e.lightSelectedBackgroundColor,a.style.backgroundColor=e.lightSelectedHoverColor,I.style.color=e.lightSelectedTextColor):(I.style.color=e.lightTextColor,s.style.backgroundColor=e.lightBackgroundColor,a.style.backgroundColor=e.lightHoverColor):j.checked?(s.style.backgroundColor=e.darkSelectedBackgroundColor,a.style.backgroundColor=e.darkSelectedHoverColor,I.style.color=e.darkSelectedTextColor):(s.style.backgroundColor=e.darkBackgroundColor,a.style.backgroundColor=e.darkHoverColor,I.style.color=e.darkTextColor)});he.observe(s,{attributes:!0});s.addEventListener("click",()=>{j.checked?A():be()});s.addEventListener("mouseover",function(){j.checked?Y()?a.style.backgroundColor=e.lightSelectedHoverColor:a.style.backgroundColor=e.darkSelectedHoverColor:Y()?a.style.backgroundColor=e.lightHoverColor:a.style.backgroundColor=e.darkHoverColor});var be=()=>{q(),G(),R(),j.checked=!0,Y()?(s.style.backgroundColor=e.lightSelectedBackgroundColor,a.style.backgroundColor=e.lightSelectedHoverColor,I.style.color=e.lightSelectedTextColor):(I.style.color=e.darkSelectedTextColor,s.style.backgroundColor=e.darkSelectedBackgroundColor,a.style.backgroundColor=e.darkSelectedHoverColor)},A=()=>{j.checked&&(j.checked=!1,Y()?(s.style.backgroundColor=e.lightBackgroundColor,a.style.backgroundColor=e.lightHoverColor,I.style.color=e.lightTextColor):(s.style.backgroundColor=e.darkBackgroundColor,a.style.backgroundColor=e.darkHoverColor,I.style.color=e.darkTextColor))};var ne=document.querySelector(".cc-socials-checkbox-group"),ye=!1,te=[document.querySelector("#pill-checkbox-google"),document.querySelector("#pill-checkbox-social"),document.querySelector("#pill-checkbox-friend"),document.querySelector("#pill-checkbox-referral"),document.querySelector("#pill-checkbox-other-social")],se=document.querySelector(".cc-socials-required-error"),ce=getComputedStyle(se),de=getComputedStyle(ne),me=de.marginTop.substring(0,de.marginTop.length-2),We=ce.lineHeight.substring(0,ce.lineHeight.length-2);var v=()=>{ye=!1,se.style.display="none";for(let o=0;o<te.length;o++)te[o].style.border="1px solid #9e9e9e";ne.style.marginTop=`${me}px`};var z=document.getElementById("checkbox-pill-referral"),k=document.getElementById("pill-checkbox-referral"),i=document.getElementById("button-hover-referral"),_=document.getElementById("pill-list-label-referral");function Z(){return k.className.includes("__light")}var fe=new MutationObserver((o,B)=>{o[0].target.className.includes("__light")?z.checked?(k.style.backgroundColor=e.lightSelectedBackgroundColor,i.style.backgroundColor=e.lightSelectedHoverColor,_.style.color=e.lightSelectedTextColor):(_.style.color=e.lightTextColor,k.style.backgroundColor=e.lightBackgroundColor,i.style.backgroundColor=e.lightHoverColor):z.checked?(k.style.backgroundColor=e.darkSelectedBackgroundColor,i.style.backgroundColor=e.darkSelectedHoverColor,_.style.color=e.darkSelectedTextColor):(k.style.backgroundColor=e.darkBackgroundColor,i.style.backgroundColor=e.darkHoverColor,_.style.color=e.darkTextColor)});fe.observe(k,{attributes:!0});k.addEventListener("click",function(){v(),z.checked?x():ve()});k.addEventListener("mouseover",function(){z.checked?Z()?i.style.backgroundColor=e.lightSelectedHoverColor:i.style.backgroundColor=e.darkSelectedHoverColor:Z()?i.style.backgroundColor=e.lightHoverColor:i.style.backgroundColor=e.darkHoverColor});var ve=()=>{z.checked=!0,H(),p(),S(),T(),Z()?(k.style.backgroundColor=e.lightSelectedBackgroundColor,i.style.backgroundColor=e.lightSelectedHoverColor,_.style.color=e.lightSelectedTextColor):(_.style.color=e.darkSelectedTextColor,k.style.backgroundColor=e.darkSelectedBackgroundColor,i.style.backgroundColor=e.darkSelectedHoverColor)},x=()=>{z.checked&&(z.checked=!1,Z()?(k.style.backgroundColor=e.lightBackgroundColor,i.style.backgroundColor=e.lightHoverColor,_.style.color=e.lightTextColor):(k.style.backgroundColor=e.darkBackgroundColor,i.style.backgroundColor=e.darkHoverColor,_.style.color=e.darkTextColor))};var J=document.getElementById("checkbox-pill-other-social"),u=document.getElementById("pill-checkbox-other-social"),C=document.getElementById("button-hover-other-social"),w=document.getElementById("pill-list-label-other-social");function ee(){return u.className.includes("__light")}var xe=new MutationObserver((o,B)=>{o[0].target.className.includes("__light")?J.checked?(u.style.backgroundColor=e.lightSelectedBackgroundColor,C.style.backgroundColor=e.lightSelectedHoverColor,w.style.color=e.lightSelectedTextColor):(w.style.color=e.lightTextColor,u.style.backgroundColor=e.lightBackgroundColor,C.style.backgroundColor=e.lightHoverColor):J.checked?(u.style.backgroundColor=e.darkSelectedBackgroundColor,C.style.backgroundColor=e.darkSelectedHoverColor,w.style.color=e.darkSelectedTextColor):(u.style.backgroundColor=e.darkBackgroundColor,C.style.backgroundColor=e.darkHoverColor,w.style.color=e.darkTextColor)});xe.observe(u,{attributes:!0});u.addEventListener("click",function(){v(),J.checked?S():Se()});u.addEventListener("mouseover",function(){J.checked?ee()?C.style.backgroundColor=e.lightSelectedHoverColor:C.style.backgroundColor=e.darkSelectedHoverColor:ee()?C.style.backgroundColor=e.lightHoverColor:C.style.backgroundColor=e.darkHoverColor});var Se=()=>{J.checked=!0,H(),p(),T(),x(),ee()?(u.style.backgroundColor=e.lightSelectedBackgroundColor,C.style.backgroundColor=e.lightSelectedHoverColor,w.style.color=e.lightSelectedTextColor):(w.style.color=e.darkSelectedTextColor,u.style.backgroundColor=e.darkSelectedBackgroundColor,C.style.backgroundColor=e.darkSelectedHoverColor)},S=()=>{J.checked&&(J.checked=!1,ee()?(u.style.backgroundColor=e.lightBackgroundColor,C.style.backgroundColor=e.lightHoverColor,w.style.color=e.lightTextColor):(u.style.backgroundColor=e.darkBackgroundColor,C.style.backgroundColor=e.darkHoverColor,w.style.color=e.darkTextColor))};var K=document.getElementById("checkbox-pill-google"),g=document.getElementById("pill-checkbox-google"),h=document.getElementById("button-hover-google"),O=document.getElementById("pill-list-label-google");function oe(){return g.className.includes("__light")}var He=new MutationObserver((o,B)=>{o[0].target.className.includes("__light")?K.checked?(g.style.backgroundColor=e.lightSelectedBackgroundColor,h.style.backgroundColor=e.lightSelectedHoverColor,O.style.color=e.lightSelectedTextColor):(O.style.color=e.lightTextColor,g.style.backgroundColor=e.lightBackgroundColor,h.style.backgroundColor=e.lightHoverColor):K.checked?(g.style.backgroundColor=e.darkSelectedBackgroundColor,h.style.backgroundColor=e.darkSelectedHoverColor,O.style.color=e.darkSelectedTextColor):(g.style.backgroundColor=e.darkBackgroundColor,h.style.backgroundColor=e.darkHoverColor,O.style.color=e.darkTextColor)});He.observe(g,{attributes:!0});g.addEventListener("click",function(){v(),K.checked?H():pe()});g.addEventListener("mouseover",function(){K.checked?oe()?h.style.backgroundColor=e.lightSelectedHoverColor:h.style.backgroundColor=e.darkSelectedHoverColor:oe()?h.style.backgroundColor=e.lightHoverColor:h.style.backgroundColor=e.darkHoverColor});var pe=()=>{K.checked=!0,p(),S(),T(),x(),oe()?(g.style.backgroundColor=e.lightSelectedBackgroundColor,h.style.backgroundColor=e.lightSelectedHoverColor,O.style.color=e.lightSelectedTextColor):(O.style.color=e.darkSelectedTextColor,g.style.backgroundColor=e.darkSelectedBackgroundColor,h.style.backgroundColor=e.darkSelectedHoverColor)},H=()=>{K.checked&&(K.checked=!1,oe()?(g.style.backgroundColor=e.lightBackgroundColor,h.style.backgroundColor=e.lightHoverColor,O.style.color=e.lightTextColor):(g.style.backgroundColor=e.darkBackgroundColor,h.style.backgroundColor=e.darkHoverColor,O.style.color=e.darkTextColor))};var Q=document.getElementById("checkbox-pill-friend"),b=document.getElementById("pill-checkbox-friend"),y=document.getElementById("button-hover-friend"),F=document.getElementById("pill-list-label-friend");function le(){return b.className.includes("__light")}var Te=new MutationObserver((o,B)=>{o[0].target.className.includes("__light")?Q.checked?(b.style.backgroundColor=e.lightSelectedBackgroundColor,y.style.backgroundColor=e.lightSelectedHoverColor,F.style.color=e.lightSelectedTextColor):(F.style.color=e.lightTextColor,b.style.backgroundColor=e.lightBackgroundColor,y.style.backgroundColor=e.lightHoverColor):Q.checked?(b.style.backgroundColor=e.darkSelectedBackgroundColor,y.style.backgroundColor=e.darkSelectedHoverColor,F.style.color=e.darkSelectedTextColor):(b.style.backgroundColor=e.darkBackgroundColor,y.style.backgroundColor=e.darkHoverColor,F.style.color=e.darkTextColor)});Te.observe(b,{attributes:!0});b.addEventListener("click",function(){v(),Q.checked?p():Be()});b.addEventListener("mouseover",function(){Q.checked?le()?y.style.backgroundColor=e.lightSelectedHoverColor:y.style.backgroundColor=e.darkSelectedHoverColor:le()?y.style.backgroundColor=e.lightHoverColor:y.style.backgroundColor=e.darkHoverColor});var Be=()=>{Q.checked=!0,H(),S(),x(),T(),le()?(b.style.backgroundColor=e.lightSelectedBackgroundColor,y.style.backgroundColor=e.lightSelectedHoverColor,F.style.color=e.lightSelectedTextColor):(F.style.color=e.darkSelectedTextColor,b.style.backgroundColor=e.darkSelectedBackgroundColor,y.style.backgroundColor=e.darkSelectedHoverColor)},p=()=>{Q.checked&&(Q.checked=!1,le()?(b.style.backgroundColor=e.lightBackgroundColor,y.style.backgroundColor=e.lightHoverColor,F.style.color=e.lightTextColor):(b.style.backgroundColor=e.darkBackgroundColor,y.style.backgroundColor=e.darkHoverColor,F.style.color=e.darkTextColor))};var U=document.getElementById("checkbox-pill-social"),m=document.getElementById("pill-checkbox-social"),f=document.getElementById("button-hover-social"),P=document.getElementById("pill-list-label-social");function re(){return m.className.includes("__light")}var Ee=new MutationObserver((o,B)=>{o[0].target.className.includes("__light")?U.checked?(m.style.backgroundColor=e.lightSelectedBackgroundColor,f.style.backgroundColor=e.lightSelectedHoverColor,P.style.color=e.lightSelectedTextColor):(P.style.color=e.lightTextColor,m.style.backgroundColor=e.lightBackgroundColor,f.style.backgroundColor=e.lightHoverColor):U.checked?(m.style.backgroundColor=e.darkSelectedBackgroundColor,f.style.backgroundColor=e.darkSelectedHoverColor,P.style.color=e.darkSelectedTextColor):(m.style.backgroundColor=e.darkBackgroundColor,f.style.backgroundColor=e.darkHoverColor,P.style.color=e.darkTextColor)});Ee.observe(m,{attributes:!0});m.addEventListener("click",function(){v(),U.checked?T():Le()});m.addEventListener("mouseover",function(){U.checked?re()?f.style.backgroundColor=e.lightSelectedHoverColor:f.style.backgroundColor=e.darkSelectedHoverColor:re()?f.style.backgroundColor=e.lightHoverColor:f.style.backgroundColor=e.darkHoverColor});var Le=()=>{U.checked=!0,H(),S(),p(),x(),re()?(m.style.backgroundColor=e.lightSelectedBackgroundColor,f.style.backgroundColor=e.lightSelectedHoverColor,P.style.color=e.lightSelectedTextColor):(P.style.color=e.darkSelectedTextColor,m.style.backgroundColor=e.darkSelectedBackgroundColor,f.style.backgroundColor=e.darkSelectedHoverColor)},T=()=>{U.checked&&(U.checked=!1,re()?(m.style.backgroundColor=e.lightBackgroundColor,f.style.backgroundColor=e.lightHoverColor,P.style.color=e.lightTextColor):(m.style.backgroundColor=e.darkBackgroundColor,f.style.backgroundColor=e.darkHoverColor,P.style.color=e.darkTextColor))};})();
//# sourceMappingURL=index.js.map
