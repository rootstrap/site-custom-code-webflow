(()=>{var Le=Object.create;var ne=Object.defineProperty;var Re=Object.getOwnPropertyDescriptor;var He=Object.getOwnPropertyNames;var De=Object.getPrototypeOf,$e=Object.prototype.hasOwnProperty;var g=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var ke=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of He(t))!$e.call(e,o)&&o!==r&&ne(e,o,{get:()=>t[o],enumerable:!(n=Re(t,o))||n.enumerable});return e};var Ie=(e,t,r)=>(r=e!=null?Le(De(e)):{},ke(t||!e||!e.__esModule?ne(r,"default",{value:e,enumerable:!0}):r,e));var h=g((y,P)=>{"use strict";Object.defineProperty(y,"__esModule",{value:!0});y.default=ze;function F(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?F=function(r){return typeof r}:F=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},F(e)}function ze(e){var t=typeof e=="string"||e instanceof String;if(!t){var r=F(e);throw e===null?r="null":r==="object"&&(r=e.constructor.name),new TypeError("Expected a string but received a ".concat(r))}}P.exports=y.default;P.exports.default=y.default});var se=g((x,z)=>{"use strict";Object.defineProperty(x,"__esModule",{value:!0});x.default=We;var Ae=Be(h());function Be(e){return e&&e.__esModule?e:{default:e}}function w(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?w=function(r){return typeof r}:w=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},w(e)}function We(e,t){(0,Ae.default)(e);var r,n;w(t)==="object"?(r=t.min||0,n=t.max):(r=arguments[1],n=arguments[2]);var o=encodeURI(e).split(/%..|./).length-1;return o>=r&&(typeof n>"u"||o<=n)}z.exports=x.default;z.exports.default=x.default});var B=g((b,A)=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0});b.default=Ue;function Ue(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;for(var r in t)typeof e[r]>"u"&&(e[r]=t[r]);return e}A.exports=b.default;A.exports.default=b.default});var de=g((_,W)=>{"use strict";Object.defineProperty(_,"__esModule",{value:!0});_.default=Qe;var je=ce(h()),Ge=ce(B());function ce(e){return e&&e.__esModule?e:{default:e}}var Oe={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_numeric_tld:!1,allow_wildcard:!1,ignore_max_length:!1};function Qe(e,t){(0,je.default)(e),t=(0,Ge.default)(t,Oe),t.allow_trailing_dot&&e[e.length-1]==="."&&(e=e.substring(0,e.length-1)),t.allow_wildcard===!0&&e.indexOf("*.")===0&&(e=e.substring(2));var r=e.split("."),n=r[r.length-1];return t.require_tld&&(r.length<2||!t.allow_numeric_tld&&!/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(n)||/\s/.test(n))||!t.allow_numeric_tld&&/^\d+$/.test(n)?!1:r.every(function(o){return!(o.length>63&&!t.ignore_max_length||!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(o)||/[\uff01-\uff5e]/.test(o)||/^-|-$/.test(o)||!t.allow_underscores&&/_/.test(o))})}W.exports=_.default;W.exports.default=_.default});var me=g((S,j)=>{"use strict";Object.defineProperty(S,"__esModule",{value:!0});S.default=U;var Ve=Ye(h());function Ye(e){return e&&e.__esModule?e:{default:e}}var fe="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",f="(".concat(fe,"[.]){3}").concat(fe),Xe=new RegExp("^".concat(f,"$")),l="(?:[0-9a-fA-F]{1,4})",Ze=new RegExp("^("+"(?:".concat(l,":){7}(?:").concat(l,"|:)|")+"(?:".concat(l,":){6}(?:").concat(f,"|:").concat(l,"|:)|")+"(?:".concat(l,":){5}(?::").concat(f,"|(:").concat(l,"){1,2}|:)|")+"(?:".concat(l,":){4}(?:(:").concat(l,"){0,1}:").concat(f,"|(:").concat(l,"){1,3}|:)|")+"(?:".concat(l,":){3}(?:(:").concat(l,"){0,2}:").concat(f,"|(:").concat(l,"){1,4}|:)|")+"(?:".concat(l,":){2}(?:(:").concat(l,"){0,3}:").concat(f,"|(:").concat(l,"){1,5}|:)|")+"(?:".concat(l,":){1}(?:(:").concat(l,"){0,4}:").concat(f,"|(:").concat(l,"){1,6}|:)|")+"(?::((?::".concat(l,"){0,5}:").concat(f,"|(?::").concat(l,"){1,7}|:))")+")(%[0-9a-zA-Z-.:]{1,})?$");function U(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return(0,Ve.default)(e),t=String(t),t?t==="4"?Xe.test(e):t==="6"?Ze.test(e):!1:U(e,4)||U(e,6)}j.exports=S.default;j.exports.default=S.default});var ge=g((E,O)=>{"use strict";Object.defineProperty(E,"__esModule",{value:!0});E.default=ct;var Je=v(h()),Ke=v(B()),G=v(se()),et=v(de()),pe=v(me());function v(e){return e&&e.__esModule?e:{default:e}}var tt={allow_display_name:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0,blacklisted_chars:"",ignore_max_length:!1,host_blacklist:[],host_whitelist:[]},rt=/^([^\x00-\x1F\x7F-\x9F\cX]+)</i,lt=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,nt=/^[a-z\d]+$/,ot=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,it=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,at=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,ut=254;function st(e){var t=e.replace(/^"(.+)"$/,"$1");if(!t.trim())return!1;var r=/[\.";<>]/.test(t);if(r){if(t===e)return!1;var n=t.split('"').length===t.split('\\"').length;if(!n)return!1}return!0}function ct(e,t){if((0,Je.default)(e),t=(0,Ke.default)(t,tt),t.require_display_name||t.allow_display_name){var r=e.match(rt);if(r){var n=r[1];if(e=e.replace(n,"").replace(/(^<|>$)/g,""),n.endsWith(" ")&&(n=n.slice(0,-1)),!st(n))return!1}else if(t.require_display_name)return!1}if(!t.ignore_max_length&&e.length>ut)return!1;var o=e.split("@"),p=o.pop(),C=p.toLowerCase();if(t.host_blacklist.includes(C)||t.host_whitelist.length>0&&!t.host_whitelist.includes(C))return!1;var a=o.join("@");if(t.domain_specific_validation&&(C==="gmail.com"||C==="googlemail.com")){a=a.toLowerCase();var ee=a.split("+")[0];if(!(0,G.default)(ee.replace(/\./g,""),{min:6,max:30}))return!1;for(var te=ee.split("."),H=0;H<te.length;H++)if(!nt.test(te[H]))return!1}if(t.ignore_max_length===!1&&(!(0,G.default)(a,{max:64})||!(0,G.default)(p,{max:254})))return!1;if(!(0,et.default)(p,{require_tld:t.require_tld,ignore_max_length:t.ignore_max_length})){if(!t.allow_ip_domain)return!1;if(!(0,pe.default)(p)){if(!p.startsWith("[")||!p.endsWith("]"))return!1;var re=p.slice(1,-1);if(re.length===0||!(0,pe.default)(re))return!1}}if(a[0]==='"')return a=a.slice(1,a.length-1),t.allow_utf8_local_part?at.test(a):ot.test(a);for(var Te=t.allow_utf8_local_part?it:lt,le=a.split("."),D=0;D<le.length;D++)if(!Te.test(le[D]))return!1;return!(t.blacklisted_chars&&a.search(new RegExp("[".concat(t.blacklisted_chars,"]+"),"g"))!==-1)}O.exports=E.default;O.exports.default=E.default});var u=document.querySelector(".project-input"),d=document.querySelector(".project-underline"),k=document.querySelector(".project-input-container"),$=!1,I=document.querySelector(".cc-name-input"),N=document.querySelector(".cc-project-required-error"),oe=getComputedStyle(I),ie=getComputedStyle(N),ae=oe.marginTop.substring(0,oe.marginTop.length-2),Ne=ie.lineHeight.substring(0,ie.lineHeight.length-2);d.style.maxWidth=`${k.getBoundingClientRect().width}px`;var ue=()=>{$||(d.style.width="100%",k.style.marginBottom="0px",I.style.marginTop=`${Number(ae)-Number(Ne)}px`,N.style.display="block",d.style.backgroundColor="#cb0b0b",$=!0)},Pe=()=>{d.style.backgroundColor="#7b7b7b",I.style.marginTop=`${ae}px`,N.style.display="none",$=!1};u.addEventListener("focus",()=>{u.value===""&&(u.placeholder="")});u.addEventListener("blur",()=>{u.value===""&&(u.placeholder="Tell us about your project*",d.style.width="100%",ue())});u.addEventListener("input",()=>{if(u.value==="")ue();else if(Pe(),Number(d.style.width.substring(0,d.style.width.length-2))<k.getBoundingClientRect().width){let t=Number(getComputedStyle(u).fontSize.substring(0,getComputedStyle(u).fontSize.length-2));d.style.width=`${u.value.length*t*.5}px`}});var ye=Ie(ge());function Q(e,t){return typeof e=="string"&&(0,ye.default)(e,t)}var i=document.querySelector(".email-input"),c=document.querySelector(".email-underline"),L=document.querySelector(".email-input-container"),M=!1,T=!1,V=document.querySelector(".cc-email-required-error"),Y=document.querySelector(".cc-email-format-error"),q=document.querySelector(".cc-social-checkbox-group"),he=getComputedStyle(q),xe=getComputedStyle(V),be=getComputedStyle(Y),R=he.marginTop.substring(0,he.marginTop.length-2),dt=xe.lineHeight.substring(0,xe.lineHeight.length-2),ft=be.lineHeight.substring(0,be.lineHeight.length-2);c.style.maxWidth=`${L.getBoundingClientRect().width}px`;var Se=()=>{M||(c.style.width="100%",L.style.marginBottom="0px",q.style.marginTop=`${Number(R)-Number(dt)}px`,V.style.display="block",c.style.backgroundColor="#cb0b0b",M=!0)},ve=()=>{T||(L.style.marginBottom="0px",q.style.marginTop=`${Number(R)-Number(ft)}px`,Y.style.display="block",c.style.backgroundColor="#cb0b0b",T=!0)},mt=()=>{M&&(c.style.backgroundColor="#7b7b7b",q.style.marginTop=`${R}px`,V.style.display="none",M=!1)},_e=()=>{T&&(c.style.backgroundColor="#7b7b7b",q.style.marginTop=`${R}px`,Y.style.display="none",T=!1)};i.addEventListener("focus",()=>{i.value===""&&(i.placeholder="")});i.addEventListener("blur",()=>{i.value===""?(i.placeholder="Your email*",c.style.width="100%",Se()):Q(i.value)||ve()});i.addEventListener("input",()=>{if(i.value==="")_e(),Se();else{if(mt(),Number(c.style.width.substring(0,c.style.width.length-2))<L.getBoundingClientRect().width){let t=Number(getComputedStyle(i).fontSize.substring(0,getComputedStyle(i).fontSize.length-2));c.style.width=`${i.value.length*t*.55}px`}Q(i.value)?_e():ve()}});var s=document.querySelector(".name-input"),X=!1,m=document.querySelector(".name-underline"),Z=document.querySelector(".project-input-container"),J=document.querySelector(".cc-email-input"),K=document.querySelector(".cc-name-required-error"),Ee=getComputedStyle(J),qe=getComputedStyle(K),Ce=Ee.marginTop.substring(0,Ee.marginTop.length-2),pt=qe.lineHeight.substring(0,qe.lineHeight.length-2);m.style.maxWidth=`${Z.getBoundingClientRect().width}px`;var Fe=()=>{X||(m.style.width="100%",Z.style.marginBottom="0px",J.style.marginTop=`${Number(Ce)-Number(pt)}px`,K.style.display="block",m.style.backgroundColor="#cb0b0b",X=!0)},gt=()=>{m.style.backgroundColor="#7b7b7b",J.style.marginTop=`${Ce}px`,K.style.display="none",X=!1};s.addEventListener("focus",()=>{s.value===""&&(s.placeholder="")});s.addEventListener("blur",()=>{s.value===""&&(s.placeholder="Your name*",m.style.width="100%",Fe())});s.addEventListener("input",()=>{if(s.value==="")Fe();else if(gt(),Number(m.style.width.substring(0,m.style.width.length-2))<Z.getBoundingClientRect().width){let t=Number(getComputedStyle(s).fontSize.substring(0,getComputedStyle(s).fontSize.length-2));m.style.width=`${s.value.length*t*.5}px`}});var yt=document.querySelector(".cc-socials-checkbox-group");var qt=[document.querySelector("#pill-checkbox-google"),document.querySelector("#pill-checkbox-social"),document.querySelector("#pill-checkbox-friend"),document.querySelector("#pill-checkbox-referral"),document.querySelector("#pill-checkbox-other-social")],ht=document.querySelector(".cc-socials-required-error"),we=getComputedStyle(ht),Me=getComputedStyle(yt),Ct=Me.marginTop.substring(0,Me.marginTop.length-2),Ft=we.lineHeight.substring(0,we.lineHeight.length-2);})();
//# sourceMappingURL=index.js.map
