(()=>{var ot=Object.create;var qe=Object.defineProperty;var it=Object.getOwnPropertyDescriptor;var nt=Object.getOwnPropertyNames;var lt=Object.getPrototypeOf,at=Object.prototype.hasOwnProperty;var y=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var ut=(e,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let l of nt(t))!at.call(e,l)&&l!==r&&qe(e,l,{get:()=>t[l],enumerable:!(o=it(t,l))||o.enumerable});return e};var st=(e,t,r)=>(r=e!=null?ot(lt(e)):{},ut(t||!e||!e.__esModule?qe(r,"default",{value:e,enumerable:!0}):r,e));var x=y((v,ie)=>{"use strict";Object.defineProperty(v,"__esModule",{value:!0});v.default=pt;function B(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?B=function(r){return typeof r}:B=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},B(e)}function pt(e){var t=typeof e=="string"||e instanceof String;if(!t){var r=B(e);throw e===null?r="null":r==="object"&&(r=e.constructor.name),new TypeError("Expected a string but received a ".concat(r))}}ie.exports=v.default;ie.exports.default=v.default});var Fe=y((q,ne)=>{"use strict";Object.defineProperty(q,"__esModule",{value:!0});q.default=ht;var gt=yt(x());function yt(e){return e&&e.__esModule?e:{default:e}}function W(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?W=function(r){return typeof r}:W=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},W(e)}function ht(e,t){(0,gt.default)(e);var r,o;W(t)==="object"?(r=t.min||0,o=t.max):(r=arguments[1],o=arguments[2]);var l=encodeURI(e).split(/%..|./).length-1;return l>=r&&(typeof o>"u"||l<=o)}ne.exports=q.default;ne.exports.default=q.default});var ae=y((S,le)=>{"use strict";Object.defineProperty(S,"__esModule",{value:!0});S.default=bt;function bt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;for(var r in t)typeof e[r]>"u"&&(e[r]=t[r]);return e}le.exports=S.default;le.exports.default=S.default});var He=y((w,ue)=>{"use strict";Object.defineProperty(w,"__esModule",{value:!0});w.default=xt;var Et=Me(x()),_t=Me(ae());function Me(e){return e&&e.__esModule?e:{default:e}}var vt={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1,allow_numeric_tld:!1,allow_wildcard:!1,ignore_max_length:!1};function xt(e,t){(0,Et.default)(e),t=(0,_t.default)(t,vt),t.allow_trailing_dot&&e[e.length-1]==="."&&(e=e.substring(0,e.length-1)),t.allow_wildcard===!0&&e.indexOf("*.")===0&&(e=e.substring(2));var r=e.split("."),o=r[r.length-1];return t.require_tld&&(r.length<2||!t.allow_numeric_tld&&!/^([a-z\u00A1-\u00A8\u00AA-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}|xn[a-z0-9-]{2,})$/i.test(o)||/\s/.test(o))||!t.allow_numeric_tld&&/^\d+$/.test(o)?!1:r.every(function(l){return!(l.length>63&&!t.ignore_max_length||!/^[a-z_\u00a1-\uffff0-9-]+$/i.test(l)||/[\uff01-\uff5e]/.test(l)||/^-|-$/.test(l)||!t.allow_underscores&&/_/.test(l))})}ue.exports=w.default;ue.exports.default=w.default});var Pe=y((C,ce)=>{"use strict";Object.defineProperty(C,"__esModule",{value:!0});C.default=se;var qt=St(x());function St(e){return e&&e.__esModule?e:{default:e}}var De="(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])",m="(".concat(De,"[.]){3}").concat(De),wt=new RegExp("^".concat(m,"$")),i="(?:[0-9a-fA-F]{1,4})",Ct=new RegExp("^("+"(?:".concat(i,":){7}(?:").concat(i,"|:)|")+"(?:".concat(i,":){6}(?:").concat(m,"|:").concat(i,"|:)|")+"(?:".concat(i,":){5}(?::").concat(m,"|(:").concat(i,"){1,2}|:)|")+"(?:".concat(i,":){4}(?:(:").concat(i,"){0,1}:").concat(m,"|(:").concat(i,"){1,3}|:)|")+"(?:".concat(i,":){3}(?:(:").concat(i,"){0,2}:").concat(m,"|(:").concat(i,"){1,4}|:)|")+"(?:".concat(i,":){2}(?:(:").concat(i,"){0,3}:").concat(m,"|(:").concat(i,"){1,5}|:)|")+"(?:".concat(i,":){1}(?:(:").concat(i,"){0,4}:").concat(m,"|(:").concat(i,"){1,6}|:)|")+"(?::((?::".concat(i,"){0,5}:").concat(m,"|(?::").concat(i,"){1,7}|:))")+")(%[0-9a-zA-Z-.:]{1,})?$");function se(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return(0,qt.default)(e),t=String(t),t?t==="4"?wt.test(e):t==="6"?Ct.test(e):!1:se(e,4)||se(e,6)}ce.exports=C.default;ce.exports.default=C.default});var ke=y((R,fe)=>{"use strict";Object.defineProperty(R,"__esModule",{value:!0});R.default=Bt;var Lt=L(x()),Rt=L(ae()),de=L(Fe()),Tt=L(He()),Ie=L(Pe());function L(e){return e&&e.__esModule?e:{default:e}}var Ft={allow_display_name:!1,require_display_name:!1,allow_utf8_local_part:!0,require_tld:!0,blacklisted_chars:"",ignore_max_length:!1,host_blacklist:[],host_whitelist:[]},Mt=/^([^\x00-\x1F\x7F-\x9F\cX]+)</i,Ht=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,Dt=/^[a-z\d]+$/,Pt=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,It=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,kt=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i,$t=254;function At(e){var t=e.replace(/^"(.+)"$/,"$1");if(!t.trim())return!1;var r=/[\.";<>]/.test(t);if(r){if(t===e)return!1;var o=t.split('"').length===t.split('\\"').length;if(!o)return!1}return!0}function Bt(e,t){if((0,Lt.default)(e),t=(0,Rt.default)(t,Ft),t.require_display_name||t.allow_display_name){var r=e.match(Mt);if(r){var o=r[1];if(e=e.replace(o,"").replace(/(^<|>$)/g,""),o.endsWith(" ")&&(o=o.slice(0,-1)),!At(o))return!1}else if(t.require_display_name)return!1}if(!t.ignore_max_length&&e.length>$t)return!1;var l=e.split("@"),p=l.pop(),k=p.toLowerCase();if(t.host_blacklist.includes(k)||t.host_whitelist.length>0&&!t.host_whitelist.includes(k))return!1;var s=l.join("@");if(t.domain_specific_validation&&(k==="gmail.com"||k==="googlemail.com")){s=s.toLowerCase();var Ee=s.split("+")[0];if(!(0,de.default)(Ee.replace(/\./g,""),{min:6,max:30}))return!1;for(var _e=Ee.split("."),X=0;X<_e.length;X++)if(!Dt.test(_e[X]))return!1}if(t.ignore_max_length===!1&&(!(0,de.default)(s,{max:64})||!(0,de.default)(p,{max:254})))return!1;if(!(0,Tt.default)(p,{require_tld:t.require_tld,ignore_max_length:t.ignore_max_length})){if(!t.allow_ip_domain)return!1;if(!(0,Ie.default)(p)){if(!p.startsWith("[")||!p.endsWith("]"))return!1;var ve=p.slice(1,-1);if(ve.length===0||!(0,Ie.default)(ve))return!1}}if(s[0]==='"')return s=s.slice(1,s.length-1),t.allow_utf8_local_part?kt.test(s):Pt.test(s);for(var rt=t.allow_utf8_local_part?It:Ht,xe=s.split("."),Z=0;Z<xe.length;Z++)if(!rt.test(xe[Z]))return!1;return!(t.blacklisted_chars&&s.search(new RegExp("[".concat(t.blacklisted_chars,"]+"),"g"))!==-1)}fe.exports=R.default;fe.exports.default=R.default});var a=document.querySelector(".name-input"),E=!1,d=document.querySelector(".name-underline"),J=document.querySelector(".project-input-container"),K=document.querySelector(".cc-email-input"),ee=document.querySelector(".cc-name-required-error"),Se=getComputedStyle(K),we=getComputedStyle(ee),Ce=Se.marginTop.substring(0,Se.marginTop.length-2),ct=we.lineHeight.substring(0,we.lineHeight.length-2);d.style.maxWidth=`${J.getBoundingClientRect().width}px`;var $=()=>{E||(d.style.width="100%",J.style.marginBottom="0px",K.style.marginTop=`${Number(Ce)-Number(ct)}px`,ee.style.display="block",d.style.backgroundColor="#cb0b0b",E=!0)},dt=()=>{d.style.backgroundColor="#7b7b7b",K.style.marginTop=`${Ce}px`,ee.style.display="none",E=!1};a.addEventListener("focus",()=>{a.value===""&&(a.placeholder="")});a.addEventListener("blur",()=>{a.value===""&&(a.placeholder="Your name*",d.style.width="100%",$())});a.addEventListener("input",()=>{if(a.value==="")$();else if(dt(),Number(d.style.width.substring(0,d.style.width.length-2))<J.getBoundingClientRect().width){let t=document.createElement("span");t.style.fontSize=getComputedStyle(a).fontSize,t.style.lineHeight=getComputedStyle(a).lineHeight,t.style.fontFamily=getComputedStyle(a).fontFamily,t.style.fontWeight=getComputedStyle(a).fontWeight,t.innerText=a.value,document.body.appendChild(t);let r=t.offsetWidth;document.body.removeChild(t),d.style.width=`${r}px`}});var u=document.querySelector(".project-input"),f=document.querySelector(".project-underline"),te=document.querySelector(".project-input-container"),_=!1,re=document.querySelector(".cc-name-input"),oe=document.querySelector(".cc-project-required-error"),Le=getComputedStyle(re),Re=getComputedStyle(oe),Te=Le.marginTop.substring(0,Le.marginTop.length-2),ft=Re.lineHeight.substring(0,Re.lineHeight.length-2);f.style.maxWidth=`${te.getBoundingClientRect().width}px`;var A=()=>{_||(f.style.width="100%",te.style.marginBottom="0px",re.style.marginTop=`${Number(Te)-Number(ft)}px`,oe.style.display="block",f.style.backgroundColor="#cb0b0b",_=!0)},mt=()=>{f.style.backgroundColor="#7b7b7b",re.style.marginTop=`${Te}px`,oe.style.display="none",_=!1};u.addEventListener("focus",()=>{u.value===""&&(u.placeholder="")});u.addEventListener("blur",()=>{u.value===""&&(u.placeholder="Tell us about your project*",f.style.width="100%",A())});u.addEventListener("input",()=>{if(u.value==="")A();else if(mt(),Number(f.style.width.substring(0,f.style.width.length-2))<te.getBoundingClientRect().width){let t=document.createElement("span");t.style.fontSize=getComputedStyle(u).fontSize,t.style.lineHeight=getComputedStyle(u).lineHeight,t.style.fontFamily=getComputedStyle(u).fontFamily,t.style.fontWeight=getComputedStyle(u).fontWeight,t.innerText=u.value,document.body.appendChild(t);let r=t.offsetWidth;document.body.removeChild(t),f.style.width=`${r}px`}});var $e=st(ke());function T(e,t){return typeof e=="string"&&(0,$e.default)(e,t)}var n=document.querySelector(".email-input"),c=document.querySelector(".email-underline"),N=document.querySelector(".email-input-container"),h=!1,b=!1,me=document.querySelector(".cc-email-required-error"),pe=document.querySelector(".cc-email-format-error"),F=document.querySelector(".cc-social-checkbox-group"),Ae=getComputedStyle(F),Be=getComputedStyle(me),We=getComputedStyle(pe),O=Ae.marginTop.substring(0,Ae.marginTop.length-2),Wt=Be.lineHeight.substring(0,Be.lineHeight.length-2),Nt=We.lineHeight.substring(0,We.lineHeight.length-2);c.style.maxWidth=`${N.getBoundingClientRect().width}px`;var j=()=>{h||(c.style.width="100%",N.style.marginBottom="0px",F.style.marginTop=`${Number(O)-Number(Wt)}px`,me.style.display="block",c.style.backgroundColor="#cb0b0b",h=!0)},z=()=>{b||(N.style.marginBottom="0px",F.style.marginTop=`${Number(O)-Number(Nt)}px`,pe.style.display="block",c.style.backgroundColor="#cb0b0b",b=!0)},Ot=()=>{h&&(c.style.backgroundColor="#7b7b7b",F.style.marginTop=`${O}px`,me.style.display="none",h=!1)},Ne=()=>{b&&(c.style.backgroundColor="#7b7b7b",F.style.marginTop=`${O}px`,pe.style.display="none",b=!1)};n.addEventListener("focus",()=>{n.value===""&&(n.placeholder="")});n.addEventListener("blur",()=>{n.value===""?(n.placeholder="Your email*",c.style.width="100%",j()):T(n.value)||z()});n.addEventListener("input",()=>{if(n.value==="")Ne(),j();else{if(Ot(),Number(c.style.width.substring(0,c.style.width.length-2))<N.getBoundingClientRect().width){let t=document.createElement("span");t.style.fontSize=getComputedStyle(n).fontSize,t.style.lineHeight=getComputedStyle(n).lineHeight,t.style.fontFamily=getComputedStyle(n).fontFamily,t.style.fontWeight=getComputedStyle(n).fontWeight,t.innerText=n.value,document.body.appendChild(t);let r=t.offsetWidth;document.body.removeChild(t),c.style.width=`${r}px`}T(n.value)?Ne():z()}});var Oe=document.querySelector(".cc-attribution-radio-group"),U=!1,M=Array.from(document.querySelectorAll(".cc-attribution-radio-group > .c-pill-m__light")),H=Array.from(document.querySelectorAll(".cc-attribution-radio-group > .c-pill-m__dark")),G=document.querySelector(".cc-attribution-required-error"),je=()=>{if(G){G.style.display="block";for(let e=0;e<M.length;e++)M[e].classList.add("cc-pill-m--error__light");for(let e=0;e<H.length;e++)H[e].classList.add("cc-pill-m--error__dark");U=!0}},ge=()=>{if(G){U=!1,G.style.display="none";for(let e=0;e<M.length;e++)M[e]?.classList.remove("cc-pill-m--error__light"),H[e]?.classList.remove("cc-pill-m--error__dark");for(let e=0;e<H.length;e++)M[e]?.classList.remove("cc-pill-m--error__light"),H[e]?.classList.remove("cc-pill-m--error__dark")}};var ze=document.querySelector(".cc-request-radio-group"),Q=!1,D=Array.from(document.querySelectorAll(".cc-request-radio-group > .c-pill-m__light")),P=Array.from(document.querySelectorAll(".cc-request-radio-group > .c-pill-m__dark")),Y=document.querySelector(".cc-request-required-error"),Ge=()=>{if(Y){Y.style.display="block";for(let e=0;e<D.length;e++)D[e].classList.add("cc-pill-m--error__light");for(let e=0;e<P.length;e++)P[e].classList.add("cc-pill-m--error__dark");Q=!0}},ye=()=>{if(Y){Q=!1,Y.style.display="none";for(let e=0;e<D.length;e++)D[e]?.classList.remove("cc-pill-m--error__light"),P[e]?.classList.remove("cc-pill-m--error__dark");for(let e=0;e<P.length;e++)D[e]?.classList.remove("cc-pill-m--error__light"),P[e]?.classList.remove("cc-pill-m--error__dark")}};var he=document.querySelector(".cc-captcha-required-error"),Qe=document.querySelector(".c-captcha-wrapper"),be=document.querySelector("#submit-button"),I=!1,Ue=getComputedStyle(be),Ve=Number(Ue.marginTop.substring(0,Ue.marginTop.length-2)),Ye=getComputedStyle(he),jt=Number(Ye.lineHeight.substring(0,Ye.lineHeight.length-2)),Xe=()=>{I||(Qe.style.borderColor="#cb0b0b",he.style.display="block",be.style.marginTop=`${Ve-jt}px`,I=!0)},Ze=()=>{Qe.style.borderColor="transparent",he.style.display="none",be.style.marginTop=`${Ve}px`,I=!1};var zt=document.querySelector(".c-captcha-wrapper"),V=document.createElement("script");V.src="https://www.google.com/recaptcha/api.js";V.async=!0;V.defer=!0;document.body.appendChild(V);var Gt=document.querySelector("#submit-button"),g=document.querySelector("#submit-button-label"),Je=g?.innerHTML,Ke=Array.from(document.querySelectorAll('.cc-request-radio-group input[type="radio"]')),et=Array.from(document.querySelectorAll('.cc-attribution-radio-group input[type="radio"]'));Ke.forEach(e=>{e.addEventListener("change",ye)});et.forEach(e=>{e.addEventListener("change",ge)});Gt?.addEventListener("click",async e=>{if(window.grecaptcha.getResponse()||(Xe(),setTimeout(()=>{Ze()},4e3)),n.value===""?j():T(n.value)||z(),a.value||$(),u.value||A(),Ke.every(r=>!r.checked)?Ge():ye(),et.every(r=>!r.checked)?je():ge(),Q){let o=(ze?.getBoundingClientRect().top||0)+window.pageYOffset-150;return e.preventDefault(),window.scrollTo({top:o,behavior:"smooth"}),!1}if(_){let o=u.getBoundingClientRect().top+window.pageYOffset-150;return e.preventDefault(),window.scrollTo({top:o,behavior:"smooth"}),!1}if(E){let o=a.getBoundingClientRect().top+window.pageYOffset-150;return e.preventDefault(),window.scrollTo({top:o,behavior:"smooth"}),!1}if(b||h){let o=a.getBoundingClientRect().top+window.pageYOffset-150;return e.preventDefault(),window.scrollTo({top:o,behavior:"smooth"}),!1}if(U){let o=(Oe?.getBoundingClientRect().top||0)+window.pageYOffset-150;return e.preventDefault(),window.scrollTo({top:o,behavior:"smooth"}),!1}if(I){let o=(zt?.getBoundingClientRect().top||0)+window.pageYOffset-150;return e.preventDefault(),window.scrollTo({top:o,behavior:"smooth"}),!1}g&&(g.innerHTML="Please wait...")});var tt=document.getElementById("contact-form");tt?.addEventListener("success",function(e){g&&(g.innerHTML=Je||"")});tt?.addEventListener("error",function(e){g&&(g.innerHTML=Je||"")});})();
//# sourceMappingURL=formSubmitButton.js.map
