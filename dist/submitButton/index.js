(()=>{var he=Object.create;var re=Object.defineProperty;var Se=Object.getOwnPropertyDescriptor;var qe=Object.getOwnPropertyNames;var Fe=Object.getPrototypeOf,we=Object.prototype.hasOwnProperty;var d=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Ie=(e,t,r,l)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of qe(t))!we.call(e,o)&&o!==r&&re(e,o,{get:()=>t[o],enumerable:!(l=Se(t,o))||l.enumerable});return e};var De=(e,t,r)=>(r=e!=null?he(Fe(e)):{},Ie(t||!e||!e.__esModule?re(r,"default",{value:e,enumerable:!0}):r,e));var b=d((x,O)=>{"use strict";Object.defineProperty(x,"__esModule",{value:!0});x.default=Pe;function M(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?M=function(r){return typeof r}:M=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},M(e)}function Pe(e){var t=typeof e=="string"||e instanceof String;if(!t){var r=M(e);throw e===null?r="null":r==="object"&&(r=e.constructor.name),new TypeError("Expected a string but received a ".concat(r))}}O.exports=x.default;O.exports.default=x.default});var ue=d((_,k)=>{"use strict";Object.defineProperty(_,"__esModule",{value:!0});_.default=$e;var He=Ce(b());function Ce(e){return e&&e.__esModule?e:{default:e}}function T(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?T=function(r){return typeof r}:T=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},T(e)}function $e(e,t){(0,He.default)(e);var r,l;T(t)==="object"?(r=t.min||0,l=t.max):(r=arguments[1],l=arguments[2]);var o=encodeURI(e).split(/%..|./).length-1;return o>=r&&(typeof l>"u"||o<=l)}k.exports=_.default;k.exports.default=_.default});var z=d((v,U)=>{"use strict";Object.defineProperty(v,"__esModule",{value:!0});v.default=Be;function Be(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;for(var r in t)typeof e[r]>"u"&&(e[r]=t[r]);return e}U.exports=v.default;U.exports.default=v.default});var fe=d((E,j)=>{"use strict";Object.defineProperty(E,"__esModule",{value:!0});E.default=ke;var Ne=ce(b()),Ae=ce(z());function ce(e){return e&&e.__esModule?e:{default:e}}var Oe={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_numeric_tld:!1,allow_wildcard:!1,ignore_max_length:!1};function ke(e,t){(0,Ne.default)(e),t=(0,Ae.default)(t,Oe),t.allow_trailing_dot&&e[e.length-1]==="."&&(e=e.substring(0,e.length-1)),t.allow_wildcard===!0&&e.indexOf("*.")===0&&(e=e.substring(2));var r=e.split("."),l=r[r.length-1];return t.require_tld&&(r.length<2||!t.allow_numeric_tld&&!/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(l)||/\s/.test(l))||!t.allow_numeric_tld&&/^\d+$/.test(l)?!1:r.every(function(o){return!(o.length>63&&!t.ignore_max_length||!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(o)||/[\uff01-\uff5e]/.test(o)||/^-|-$/.test(o)||!t.allow_underscores&&/_/.test(o))})}j.exports=E.default;j.exports.default=E.default});var me=d((h,W)=>{"use strict";Object.defineProperty(h,"__esModule",{value:!0});h.default=G;var Ue=ze(b());function ze(e){return e&&e.__esModule?e:{default:e}}var de="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",c="(".concat(de,"[.]){3}").concat(de),je=new RegExp("^".concat(c,"$")),a="(?:[0-9a-fA-F]{1,4})",Ge=new RegExp("^("+"(?:".concat(a,":){7}(?:").concat(a,"|:)|")+"(?:".concat(a,":){6}(?:").concat(c,"|:").concat(a,"|:)|")+"(?:".concat(a,":){5}(?::").concat(c,"|(:").concat(a,"){1,2}|:)|")+"(?:".concat(a,":){4}(?:(:").concat(a,"){0,1}:").concat(c,"|(:").concat(a,"){1,3}|:)|")+"(?:".concat(a,":){3}(?:(:").concat(a,"){0,2}:").concat(c,"|(:").concat(a,"){1,4}|:)|")+"(?:".concat(a,":){2}(?:(:").concat(a,"){0,3}:").concat(c,"|(:").concat(a,"){1,5}|:)|")+"(?:".concat(a,":){1}(?:(:").concat(a,"){0,4}:").concat(c,"|(:").concat(a,"){1,6}|:)|")+"(?::((?::".concat(a,"){0,5}:").concat(c,"|(?::").concat(a,"){1,7}|:))")+")(%[0-9a-zA-Z-.:]{1,})?$");function G(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return(0,Ue.default)(e),t=String(t),t?t==="4"?je.test(e):t==="6"?Ge.test(e):!1:G(e,4)||G(e,6)}W.exports=h.default;W.exports.default=h.default});var ge=d((q,Q)=>{"use strict";Object.defineProperty(q,"__esModule",{value:!0});q.default=at;var We=S(b()),Ye=S(z()),Y=S(ue()),Qe=S(fe()),pe=S(me());function S(e){return e&&e.__esModule?e:{default:e}}var Ve={allow_display_name:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0,blacklisted_chars:"",ignore_max_length:!1,host_blacklist:[],host_whitelist:[]},Xe=/^([^\x00-\x1F\x7F-\x9F\cX]+)</i,Ze=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,Je=/^[a-z\d]+$/,Ke=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,et=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,tt=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,rt=254;function lt(e){var t=e.replace(/^"(.+)"$/,"$1");if(!t.trim())return!1;var r=/[\.";<>]/.test(t);if(r){if(t===e)return!1;var l=t.split('"').length===t.split('\\"').length;if(!l)return!1}return!0}function at(e,t){if((0,We.default)(e),t=(0,Ye.default)(t,Ve),t.require_display_name||t.allow_display_name){var r=e.match(Xe);if(r){var l=r[1];if(e=e.replace(l,"").replace(/(^<|>$)/g,""),l.endsWith(" ")&&(l=l.slice(0,-1)),!lt(l))return!1}else if(t.require_display_name)return!1}if(!t.ignore_max_length&&e.length>rt)return!1;var o=e.split("@"),f=o.pop(),w=f.toLowerCase();if(t.host_blacklist.includes(w)||t.host_whitelist.length>0&&!t.host_whitelist.includes(w))return!1;var s=o.join("@");if(t.domain_specific_validation&&(w==="gmail.com"||w==="googlemail.com")){s=s.toLowerCase();var J=s.split("+")[0];if(!(0,Y.default)(J.replace(/\./g,""),{min:6,max:30}))return!1;for(var K=J.split("."),H=0;H<K.length;H++)if(!Je.test(K[H]))return!1}if(t.ignore_max_length===!1&&(!(0,Y.default)(s,{max:64})||!(0,Y.default)(f,{max:254})))return!1;if(!(0,Qe.default)(f,{require_tld:t.require_tld,ignore_max_length:t.ignore_max_length})){if(!t.allow_ip_domain)return!1;if(!(0,pe.default)(f)){if(!f.startsWith("[")||!f.endsWith("]"))return!1;var ee=f.slice(1,-1);if(ee.length===0||!(0,pe.default)(ee))return!1}}if(s[0]==='"')return s=s.slice(1,s.length-1),t.allow_utf8_local_part?tt.test(s):Ke.test(s);for(var Ee=t.allow_utf8_local_part?et:Ze,te=s.split("."),C=0;C<te.length;C++)if(!Ee.test(te[C]))return!1;return!(t.blacklisted_chars&&s.search(new RegExp("[".concat(t.blacklisted_chars,"]+"),"g"))!==-1)}Q.exports=q.default;Q.exports.default=q.default});var i=document.querySelector(".cc-name-input"),g=!1,$=document.querySelector(".cc-email-input"),B=document.querySelector(".cc-name-required-error"),le=getComputedStyle($),ae=getComputedStyle(B),oe=le.marginTop.substring(0,le.marginTop.length-2),Me=ae.lineHeight.substring(0,ae.lineHeight.length-2);i.style.border="1px solid transparent";i.style.borderBottom="1px solid #7b7b7b";var I=()=>{g||($.style.marginTop=`${Number(oe)-Number(Me)}px`,B.style.display="block",i.style.borderBottom="1px solid #cb0b0b",g=!0)},Te=()=>{i.style.border="1px solid transparent",i.style.borderBottom="1px solid #7b7b7b",$.style.marginTop=`${oe}px`,B.style.display="none",g=!1};i.addEventListener("blur",()=>{i.value===""&&I()});i.addEventListener("input",()=>{i.value===""?I():Te()});var u=document.querySelector(".cc-project-input"),y=!1,N=document.querySelector(".cc-name-input"),A=document.querySelector(".cc-project-required-error"),ne=getComputedStyle(N),ie=getComputedStyle(A),se=ne.marginTop.substring(0,ne.marginTop.length-2),Le=ie.lineHeight.substring(0,ie.lineHeight.length-2);u.style.border="1px solid transparent";u.style.borderBottom="1px solid #7b7b7b";var D=()=>{y||(N.style.marginTop=`${Number(se)-Number(Le)}px`,A.style.display="block",u.style.borderBottom="1px solid #cb0b0b",y=!0)},Re=()=>{u.style.border="1px solid transparent",u.style.borderBottom="1px solid #7b7b7b",N.style.marginTop=`${se}px`,A.style.display="none",y=!1};u.addEventListener("blur",()=>{u.value===""&&D()});u.addEventListener("input",()=>{u.value===""?D():Re()});var ye=De(ge());function L(e,t){return typeof e=="string"&&(0,ye.default)(e,t)}var n=document.querySelector(".cc-email-input"),m=!1,p=!1,V=document.querySelector(".cc-email-required-error"),X=document.querySelector(".cc-email-format-error"),F=document.querySelector(".cc-social-checkbox-group"),xe=getComputedStyle(F),be=getComputedStyle(V),_e=getComputedStyle(X),R=xe.marginTop.substring(0,xe.marginTop.length-2),ot=be.lineHeight.substring(0,be.lineHeight.length-2),nt=_e.lineHeight.substring(0,_e.lineHeight.length-2);n.style.border="1px solid transparent";n.style.borderBottom="1px solid #7b7b7b";var P=()=>{m||(F.style.marginTop=`${Number(R)-Number(ot)}px`,V.style.display="block",n.style.borderBottom="1px solid #cb0b0b",m=!0)},Z=()=>{p||(F.style.marginTop=`${Number(R)-Number(nt)}px`,X.style.display="block",n.style.borderBottom="1px solid #cb0b0b",p=!0)},it=()=>{m&&(n.style.border="1px solid transparent",n.style.borderBottom="1px solid #7b7b7b",F.style.marginTop=`${R}px`,V.style.display="none",m=!1)},ve=()=>{p&&(n.style.border="1px solid transparent",n.style.borderBottom="1px solid #7b7b7b",F.style.marginTop=`${R}px`,X.style.display="none",p=!1)};n.addEventListener("blur",()=>{n.value===""&&P()});n.addEventListener("input",()=>{n.value===""?(ve(),P()):(it(),L(n.value)?ve():Z())});var st=document.querySelector("#submit-button");st.addEventListener("click",e=>{if(n.value===""?P():L(n.value)||Z(),i.value===""&&I(),u.value===""&&D(),y){let l=u.getBoundingClientRect().top+window.pageYOffset-150;e.preventDefault(),window.scrollTo({top:l,behavior:"smooth"});return}if(g){let l=i.getBoundingClientRect().top+window.pageYOffset-150;e.preventDefault(),window.scrollTo({top:l,behavior:"smooth"});return}if(p||m){let l=i.getBoundingClientRect().top+window.pageYOffset-150;e.preventDefault(),window.scrollTo({top:l,behavior:"smooth"});return}});})();
//# sourceMappingURL=index.js.map