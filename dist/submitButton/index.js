(()=>{var he=Object.create;var te=Object.defineProperty;var Se=Object.getOwnPropertyDescriptor;var qe=Object.getOwnPropertyNames;var Fe=Object.getPrototypeOf,Me=Object.prototype.hasOwnProperty;var f=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Le=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of qe(t))!Me.call(e,n)&&n!==r&&te(e,n,{get:()=>t[n],enumerable:!(a=Se(t,n))||a.enumerable});return e};var De=(e,t,r)=>(r=e!=null?he(Fe(e)):{},Le(t||!e||!e.__esModule?te(r,"default",{value:e,enumerable:!0}):r,e));var b=f((x,A)=>{"use strict";Object.defineProperty(x,"__esModule",{value:!0});x.default=Re;function I(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?I=function(r){return typeof r}:I=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},I(e)}function Re(e){var t=typeof e=="string"||e instanceof String;if(!t){var r=I(e);throw e===null?r="null":r==="object"&&(r=e.constructor.name),new TypeError("Expected a string but received a ".concat(r))}}A.exports=x.default;A.exports.default=x.default});var ue=f((_,k)=>{"use strict";Object.defineProperty(_,"__esModule",{value:!0});_.default=Pe;var $e=Ce(b());function Ce(e){return e&&e.__esModule?e:{default:e}}function T(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?T=function(r){return typeof r}:T=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},T(e)}function Pe(e,t){(0,$e.default)(e);var r,a;T(t)==="object"?(r=t.min||0,a=t.max):(r=arguments[1],a=arguments[2]);var n=encodeURI(e).split(/%..|./).length-1;return n>=r&&(typeof a>"u"||n<=a)}k.exports=_.default;k.exports.default=_.default});var z=f((v,U)=>{"use strict";Object.defineProperty(v,"__esModule",{value:!0});v.default=Ne;function Ne(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;for(var r in t)typeof e[r]>"u"&&(e[r]=t[r]);return e}U.exports=v.default;U.exports.default=v.default});var ce=f((E,O)=>{"use strict";Object.defineProperty(E,"__esModule",{value:!0});E.default=Ue;var Be=se(b()),Ae=se(z());function se(e){return e&&e.__esModule?e:{default:e}}var ke={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_numeric_tld:!1,allow_wildcard:!1,ignore_max_length:!1};function Ue(e,t){(0,Be.default)(e),t=(0,Ae.default)(t,ke),t.allow_trailing_dot&&e[e.length-1]==="."&&(e=e.substring(0,e.length-1)),t.allow_wildcard===!0&&e.indexOf("*.")===0&&(e=e.substring(2));var r=e.split("."),a=r[r.length-1];return t.require_tld&&(r.length<2||!t.allow_numeric_tld&&!/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(a)||/\s/.test(a))||!t.allow_numeric_tld&&/^\d+$/.test(a)?!1:r.every(function(n){return!(n.length>63&&!t.ignore_max_length||!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(n)||/[\uff01-\uff5e]/.test(n)||/^-|-$/.test(n)||!t.allow_underscores&&/_/.test(n))})}O.exports=E.default;O.exports.default=E.default});var fe=f((h,G)=>{"use strict";Object.defineProperty(h,"__esModule",{value:!0});h.default=j;var ze=Oe(b());function Oe(e){return e&&e.__esModule?e:{default:e}}var de="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",c="(".concat(de,"[.]){3}").concat(de),je=new RegExp("^".concat(c,"$")),l="(?:[0-9a-fA-F]{1,4})",Ge=new RegExp("^("+"(?:".concat(l,":){7}(?:").concat(l,"|:)|")+"(?:".concat(l,":){6}(?:").concat(c,"|:").concat(l,"|:)|")+"(?:".concat(l,":){5}(?::").concat(c,"|(:").concat(l,"){1,2}|:)|")+"(?:".concat(l,":){4}(?:(:").concat(l,"){0,1}:").concat(c,"|(:").concat(l,"){1,3}|:)|")+"(?:".concat(l,":){3}(?:(:").concat(l,"){0,2}:").concat(c,"|(:").concat(l,"){1,4}|:)|")+"(?:".concat(l,":){2}(?:(:").concat(l,"){0,3}:").concat(c,"|(:").concat(l,"){1,5}|:)|")+"(?:".concat(l,":){1}(?:(:").concat(l,"){0,4}:").concat(c,"|(:").concat(l,"){1,6}|:)|")+"(?::((?::".concat(l,"){0,5}:").concat(c,"|(?::").concat(l,"){1,7}|:))")+")(%[0-9a-zA-Z-.:]{1,})?$");function j(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return(0,ze.default)(e),t=String(t),t?t==="4"?je.test(e):t==="6"?Ge.test(e):!1:j(e,4)||j(e,6)}G.exports=h.default;G.exports.default=h.default});var pe=f((q,W)=>{"use strict";Object.defineProperty(q,"__esModule",{value:!0});q.default=at;var Ve=S(b()),We=S(z()),V=S(ue()),Qe=S(ce()),me=S(fe());function S(e){return e&&e.__esModule?e:{default:e}}var Xe={allow_display_name:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0,blacklisted_chars:"",ignore_max_length:!1,host_blacklist:[],host_whitelist:[]},Ze=/^([^\x00-\x1F\x7F-\x9F\cX]+)</i,Je=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,Ke=/^[a-z\d]+$/,Ye=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,et=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,tt=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,rt=254;function lt(e){var t=e.replace(/^"(.+)"$/,"$1");if(!t.trim())return!1;var r=/[\.";<>]/.test(t);if(r){if(t===e)return!1;var a=t.split('"').length===t.split('\\"').length;if(!a)return!1}return!0}function at(e,t){if((0,Ve.default)(e),t=(0,We.default)(t,Xe),t.require_display_name||t.allow_display_name){var r=e.match(Ze);if(r){var a=r[1];if(e=e.replace(a,"").replace(/(^<|>$)/g,""),a.endsWith(" ")&&(a=a.slice(0,-1)),!lt(a))return!1}else if(t.require_display_name)return!1}if(!t.ignore_max_length&&e.length>rt)return!1;var n=e.split("@"),d=n.pop(),M=d.toLowerCase();if(t.host_blacklist.includes(M)||t.host_whitelist.length>0&&!t.host_whitelist.includes(M))return!1;var i=n.join("@");if(t.domain_specific_validation&&(M==="gmail.com"||M==="googlemail.com")){i=i.toLowerCase();var J=i.split("+")[0];if(!(0,V.default)(J.replace(/\./g,""),{min:6,max:30}))return!1;for(var K=J.split("."),R=0;R<K.length;R++)if(!Ke.test(K[R]))return!1}if(t.ignore_max_length===!1&&(!(0,V.default)(i,{max:64})||!(0,V.default)(d,{max:254})))return!1;if(!(0,Qe.default)(d,{require_tld:t.require_tld,ignore_max_length:t.ignore_max_length})){if(!t.allow_ip_domain)return!1;if(!(0,me.default)(d)){if(!d.startsWith("[")||!d.endsWith("]"))return!1;var Y=d.slice(1,-1);if(Y.length===0||!(0,me.default)(Y))return!1}}if(i[0]==='"')return i=i.slice(1,i.length-1),t.allow_utf8_local_part?tt.test(i):Ye.test(i);for(var Ee=t.allow_utf8_local_part?et:Je,ee=i.split("."),$=0;$<ee.length;$++)if(!Ee.test(ee[$]))return!1;return!(t.blacklisted_chars&&i.search(new RegExp("[".concat(t.blacklisted_chars,"]+"),"g"))!==-1)}W.exports=q.default;W.exports.default=q.default});var u=document.querySelector(".cc-name-input"),g=!1,C=document.querySelector(".cc-email-input"),P=document.querySelector(".cc-name-required-error"),re=getComputedStyle(C),le=getComputedStyle(P),ae=re.marginTop.substring(0,re.marginTop.length-2),Ie=le.lineHeight.substring(0,le.lineHeight.length-2);u.style.border="1px solid transparent";u.style.borderBottom="1px solid #7b7b7b";var L=()=>{g||(C.style.marginTop=`${Number(ae)-Number(Ie)}px`,P.style.display="block",u.style.borderBottom="1px solid #cb0b0b",g=!0)},Te=()=>{u.style.border="1px solid transparent",u.style.borderBottom="1px solid #7b7b7b",C.style.marginTop=`${ae}px`,P.style.display="none",g=!1};u.addEventListener("blur",()=>{u.value===""&&L()});u.addEventListener("input",()=>{u.value===""?L():Te()});var s=document.querySelector(".cc-project-input"),y=!1,N=document.querySelector(".cc-name-input"),B=document.querySelector(".cc-project-required-error"),ne=getComputedStyle(N),oe=getComputedStyle(B),ie=ne.marginTop.substring(0,ne.marginTop.length-2),we=oe.lineHeight.substring(0,oe.lineHeight.length-2);s.style.border="1px solid transparent";s.style.borderBottom="1px solid #7b7b7b";var D=()=>{y||(N.style.marginTop=`${Number(ie)-Number(we)}px`,B.style.display="block",s.style.borderBottom="1px solid #cb0b0b",y=!0)},He=()=>{s.style.border="1px solid transparent",s.style.borderBottom="1px solid #7b7b7b",N.style.marginTop=`${ie}px`,B.style.display="none",y=!1};s.addEventListener("blur",()=>{s.value===""&&D()});s.addEventListener("input",()=>{s.value===""?D():He()});var ge=De(pe());function ye(e,t){return typeof e=="string"&&(0,ge.default)(e,t)}var o=document.querySelector(".cc-email-input"),m=!1,p=!1,Q=document.querySelector(".cc-email-required-error"),X=document.querySelector(".cc-email-format-error"),F=document.querySelector(".cc-social-checkbox-group"),xe=getComputedStyle(F),be=getComputedStyle(Q),_e=getComputedStyle(X),w=xe.marginTop.substring(0,xe.marginTop.length-2),nt=be.lineHeight.substring(0,be.lineHeight.length-2),ot=_e.lineHeight.substring(0,_e.lineHeight.length-2);o.style.border="1px solid transparent";o.style.borderBottom="1px solid #7b7b7b";var H=()=>{m||(F.style.marginTop=`${Number(w)-Number(nt)}px`,Q.style.display="block",o.style.borderBottom="1px solid #cb0b0b",m=!0)},Z=()=>{p||(F.style.marginTop=`${Number(w)-Number(ot)}px`,X.style.display="block",o.style.borderBottom="1px solid #cb0b0b",p=!0)},it=()=>{m&&(o.style.border="1px solid transparent",o.style.borderBottom="1px solid #7b7b7b",F.style.marginTop=`${w}px`,Q.style.display="none",m=!1)},ve=()=>{p&&(o.style.border="1px solid transparent",o.style.borderBottom="1px solid #7b7b7b",F.style.marginTop=`${w}px`,X.style.display="none",p=!1)};o.addEventListener("blur",()=>{o.value===""&&H()});o.addEventListener("input",()=>{o.value===""?(ve(),H()):(it(),ye(o.value)?ve():Z())});var ut=document.querySelector("#what-to-do-checkbox-group"),_t=document.querySelector(".c-contact-form"),st=document.querySelector("#submit-button");st.addEventListener("click",e=>{o.value===""&&H(),o.value===""&&Z,u.value===""&&L(),s.value===""&&D(),!g&&!m&&!y&&!p&&ut.scrollIntoView()});})();
//# sourceMappingURL=index.js.map
