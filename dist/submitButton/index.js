(()=>{var De=Object.create;var ie=Object.defineProperty;var Me=Object.getOwnPropertyDescriptor;var Ie=Object.getOwnPropertyNames;var Le=Object.getPrototypeOf,Re=Object.prototype.hasOwnProperty;var f=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var He=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Ie(t))!Re.call(e,i)&&i!==r&&ie(e,i,{get:()=>t[i],enumerable:!(o=Me(t,i))||o.enumerable});return e};var Pe=(e,t,r)=>(r=e!=null?De(Le(e)):{},He(t||!e||!e.__esModule?ie(r,"default",{value:e,enumerable:!0}):r,e));var b=f((x,z)=>{"use strict";Object.defineProperty(x,"__esModule",{value:!0});x.default=Oe;function D(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?D=function(r){return typeof r}:D=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},D(e)}function Oe(e){var t=typeof e=="string"||e instanceof String;if(!t){var r=D(e);throw e===null?r="null":r==="object"&&(r=e.constructor.name),new TypeError("Expected a string but received a ".concat(r))}}z.exports=x.default;z.exports.default=x.default});var fe=f((h,G)=>{"use strict";Object.defineProperty(h,"__esModule",{value:!0});h.default=ze;var Ae=Ue(b());function Ue(e){return e&&e.__esModule?e:{default:e}}function M(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?M=function(r){return typeof r}:M=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},M(e)}function ze(e,t){(0,Ae.default)(e);var r,o;M(t)==="object"?(r=t.min||0,o=t.max):(r=arguments[1],o=arguments[2]);var i=encodeURI(e).split(/%..|./).length-1;return i>=r&&(typeof o>"u"||i<=o)}G.exports=h.default;G.exports.default=h.default});var Y=f((_,j)=>{"use strict";Object.defineProperty(_,"__esModule",{value:!0});_.default=Ge;function Ge(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;for(var r in t)typeof e[r]>"u"&&(e[r]=t[r]);return e}j.exports=_.default;j.exports.default=_.default});var me=f((v,W)=>{"use strict";Object.defineProperty(v,"__esModule",{value:!0});v.default=Qe;var je=pe(b()),Ye=pe(Y());function pe(e){return e&&e.__esModule?e:{default:e}}var We={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_numeric_tld:!1,allow_wildcard:!1,ignore_max_length:!1};function Qe(e,t){(0,je.default)(e),t=(0,Ye.default)(t,We),t.allow_trailing_dot&&e[e.length-1]==="."&&(e=e.substring(0,e.length-1)),t.allow_wildcard===!0&&e.indexOf("*.")===0&&(e=e.substring(2));var r=e.split("."),o=r[r.length-1];return t.require_tld&&(r.length<2||!t.allow_numeric_tld&&!/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(o)||/\s/.test(o))||!t.allow_numeric_tld&&/^\d+$/.test(o)?!1:r.every(function(i){return!(i.length>63&&!t.ignore_max_length||!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(i)||/[\uff01-\uff5e]/.test(i)||/^-|-$/.test(i)||!t.allow_underscores&&/_/.test(i))})}W.exports=v.default;W.exports.default=v.default});var ye=f((E,V)=>{"use strict";Object.defineProperty(E,"__esModule",{value:!0});E.default=Q;var Ve=Xe(b());function Xe(e){return e&&e.__esModule?e:{default:e}}var ge="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",c="(".concat(ge,"[.]){3}").concat(ge),Ze=new RegExp("^".concat(c,"$")),l="(?:[0-9a-fA-F]{1,4})",Je=new RegExp("^("+"(?:".concat(l,":){7}(?:").concat(l,"|:)|")+"(?:".concat(l,":){6}(?:").concat(c,"|:").concat(l,"|:)|")+"(?:".concat(l,":){5}(?::").concat(c,"|(:").concat(l,"){1,2}|:)|")+"(?:".concat(l,":){4}(?:(:").concat(l,"){0,1}:").concat(c,"|(:").concat(l,"){1,3}|:)|")+"(?:".concat(l,":){3}(?:(:").concat(l,"){0,2}:").concat(c,"|(:").concat(l,"){1,4}|:)|")+"(?:".concat(l,":){2}(?:(:").concat(l,"){0,3}:").concat(c,"|(:").concat(l,"){1,5}|:)|")+"(?:".concat(l,":){1}(?:(:").concat(l,"){0,4}:").concat(c,"|(:").concat(l,"){1,6}|:)|")+"(?::((?::".concat(l,"){0,5}:").concat(c,"|(?::").concat(l,"){1,7}|:))")+")(%[0-9a-zA-Z-.:]{1,})?$");function Q(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return(0,Ve.default)(e),t=String(t),t?t==="4"?Ze.test(e):t==="6"?Je.test(e):!1:Q(e,4)||Q(e,6)}V.exports=E.default;V.exports.default=E.default});var be=f((q,Z)=>{"use strict";Object.defineProperty(q,"__esModule",{value:!0});q.default=dt;var Ke=S(b()),et=S(Y()),X=S(fe()),tt=S(me()),xe=S(ye());function S(e){return e&&e.__esModule?e:{default:e}}var rt={allow_display_name:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0,blacklisted_chars:"",ignore_max_length:!1,host_blacklist:[],host_whitelist:[]},ot=/^([^\x00-\x1F\x7F-\x9F\cX]+)</i,lt=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,it=/^[a-z\d]+$/,nt=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,at=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,st=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,ut=254;function ct(e){var t=e.replace(/^"(.+)"$/,"$1");if(!t.trim())return!1;var r=/[\.";<>]/.test(t);if(r){if(t===e)return!1;var o=t.split('"').length===t.split('\\"').length;if(!o)return!1}return!0}function dt(e,t){if((0,Ke.default)(e),t=(0,et.default)(t,rt),t.require_display_name||t.allow_display_name){var r=e.match(ot);if(r){var o=r[1];if(e=e.replace(o,"").replace(/(^<|>$)/g,""),o.endsWith(" ")&&(o=o.slice(0,-1)),!ct(o))return!1}else if(t.require_display_name)return!1}if(!t.ignore_max_length&&e.length>ut)return!1;var i=e.split("@"),d=i.pop(),w=d.toLowerCase();if(t.host_blacklist.includes(w)||t.host_whitelist.length>0&&!t.host_whitelist.includes(w))return!1;var s=i.join("@");if(t.domain_specific_validation&&(w==="gmail.com"||w==="googlemail.com")){s=s.toLowerCase();var te=s.split("+")[0];if(!(0,X.default)(te.replace(/\./g,""),{min:6,max:30}))return!1;for(var re=te.split("."),$=0;$<re.length;$++)if(!it.test(re[$]))return!1}if(t.ignore_max_length===!1&&(!(0,X.default)(s,{max:64})||!(0,X.default)(d,{max:254})))return!1;if(!(0,tt.default)(d,{require_tld:t.require_tld,ignore_max_length:t.ignore_max_length})){if(!t.allow_ip_domain)return!1;if(!(0,xe.default)(d)){if(!d.startsWith("[")||!d.endsWith("]"))return!1;var oe=d.slice(1,-1);if(oe.length===0||!(0,xe.default)(oe))return!1}}if(s[0]==='"')return s=s.slice(1,s.length-1),t.allow_utf8_local_part?st.test(s):nt.test(s);for(var Ce=t.allow_utf8_local_part?at:lt,le=s.split("."),B=0;B<le.length;B++)if(!Ce.test(le[B]))return!1;return!(t.blacklisted_chars&&s.search(new RegExp("[".concat(t.blacklisted_chars,"]+"),"g"))!==-1)}Z.exports=q.default;Z.exports.default=q.default});var a=document.querySelector(".cc-name-input"),g=!1,N=document.querySelector(".cc-email-input"),O=document.querySelector(".cc-name-required-error"),ne=getComputedStyle(N),ae=getComputedStyle(O),se=ne.marginTop.substring(0,ne.marginTop.length-2),ke=ae.lineHeight.substring(0,ae.lineHeight.length-2);a.style.border="1px solid transparent";a.style.borderBottom="1px solid #7b7b7b";var T=()=>{g||(N.style.marginTop=`${Number(se)-Number(ke)}px`,O.style.display="block",a.style.borderBottom="1px solid #cb0b0b",g=!0)},$e=()=>{a.style.border="1px solid transparent",a.style.borderBottom="1px solid #7b7b7b",N.style.marginTop=`${se}px`,O.style.display="none",g=!1};a.addEventListener("blur",()=>{a.value===""&&T()});a.addEventListener("input",()=>{a.value===""?T():$e()});var u=document.querySelector(".cc-project-input"),y=!1,A=document.querySelector(".cc-name-input"),U=document.querySelector(".cc-project-required-error"),ue=getComputedStyle(A),ce=getComputedStyle(U),de=ue.marginTop.substring(0,ue.marginTop.length-2),Be=ce.lineHeight.substring(0,ce.lineHeight.length-2);u.style.border="1px solid transparent";u.style.borderBottom="1px solid #7b7b7b";var C=()=>{y||(A.style.marginTop=`${Number(de)-Number(Be)}px`,U.style.display="block",u.style.borderBottom="1px solid #cb0b0b",y=!0)},Ne=()=>{u.style.border="1px solid transparent",u.style.borderBottom="1px solid #7b7b7b",A.style.marginTop=`${de}px`,U.style.display="none",y=!1};u.addEventListener("blur",()=>{u.value===""&&C()});u.addEventListener("input",()=>{u.value===""?C():Ne()});var he=Pe(be());function I(e,t){return typeof e=="string"&&(0,he.default)(e,t)}var n=document.querySelector(".cc-email-input"),p=!1,m=!1,J=document.querySelector(".cc-email-required-error"),K=document.querySelector(".cc-email-format-error"),F=document.querySelector(".cc-social-checkbox-group"),_e=getComputedStyle(F),ve=getComputedStyle(J),Ee=getComputedStyle(K),L=_e.marginTop.substring(0,_e.marginTop.length-2),ft=ve.lineHeight.substring(0,ve.lineHeight.length-2),pt=Ee.lineHeight.substring(0,Ee.lineHeight.length-2);n.style.border="1px solid transparent";n.style.borderBottom="1px solid #7b7b7b";var R=()=>{p||(F.style.marginTop=`${Number(L)-Number(ft)}px`,J.style.display="block",n.style.borderBottom="1px solid #cb0b0b",p=!0)},ee=()=>{m||(F.style.marginTop=`${Number(L)-Number(pt)}px`,K.style.display="block",n.style.borderBottom="1px solid #cb0b0b",m=!0)},mt=()=>{p&&(n.style.border="1px solid transparent",n.style.borderBottom="1px solid #7b7b7b",F.style.marginTop=`${L}px`,J.style.display="none",p=!1)},Se=()=>{m&&(n.style.border="1px solid transparent",n.style.borderBottom="1px solid #7b7b7b",F.style.marginTop=`${L}px`,K.style.display="none",m=!1)};n.addEventListener("blur",()=>{n.value===""&&R()});n.addEventListener("input",()=>{n.value===""?(Se(),R()):(mt(),I(n.value)?Se():ee())});var k=document.querySelector(".cc-socials-checkbox-group"),H=!1,P=[document.querySelector("#pill-checkbox-google"),document.querySelector("#pill-checkbox-social"),document.querySelector("#pill-checkbox-friend"),document.querySelector("#pill-checkbox-referal"),document.querySelector("#pill-checkbox-other-social")],we=document.querySelector(".cc-socials-required-error"),qe=getComputedStyle(we),Fe=getComputedStyle(k),gt=Fe.marginTop.substring(0,Fe.marginTop.length-2),yt=qe.lineHeight.substring(0,qe.lineHeight.length-2),Te=()=>{if(!H){k.style.marginTop=`${Number(gt)-Number(yt)}px`,we.style.display="block";for(let e=0;e<P.length;e++)P[e].style.border="1px solid #cb0b0b";H=!0}};var xt=document.querySelector("#submit-button");xt.addEventListener("click",e=>{if(n.value===""?R():I(n.value)||ee(),a.value===""&&T(),u.value===""&&C(),P.every(r=>!r.checked)&&Te(),y){let o=u.getBoundingClientRect().top+window.pageYOffset-150;e.preventDefault(),window.scrollTo({top:o,behavior:"smooth"});return}if(g){let o=a.getBoundingClientRect().top+window.pageYOffset-150;e.preventDefault(),window.scrollTo({top:o,behavior:"smooth"});return}if(m||p){let o=a.getBoundingClientRect().top+window.pageYOffset-150;e.preventDefault(),window.scrollTo({top:o,behavior:"smooth"});return}if(H){let o=k.getBoundingClientRect().top+window.pageYOffset-150;e.preventDefault(),window.scrollTo({top:o,behavior:"smooth"});return}});})();
//# sourceMappingURL=index.js.map
