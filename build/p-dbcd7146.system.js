var __extends=this&&this.__extends||function(){var r=function(e,n){r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,e){r.__proto__=e}||function(r,e){for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n))r[n]=e[n]};return r(e,n)};return function(e,n){if(typeof n!=="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");r(e,n);function t(){this.constructor=e}e.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}}();var __assign=this&&this.__assign||function(){__assign=Object.assign||function(r){for(var e,n=1,t=arguments.length;n<t;n++){e=arguments[n];for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i))r[i]=e[i]}return r};return __assign.apply(this,arguments)};var __awaiter=this&&this.__awaiter||function(r,e,n,t){function i(r){return r instanceof n?r:new n((function(e){e(r)}))}return new(n||(n=Promise))((function(n,a){function u(r){try{o(t.next(r))}catch(r){a(r)}}function f(r){try{o(t["throw"](r))}catch(r){a(r)}}function o(r){r.done?n(r.value):i(r.value).then(u,f)}o((t=t.apply(r,e||[])).next())}))};var __generator=this&&this.__generator||function(r,e){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},t,i,a,u;return u={next:f(0),throw:f(1),return:f(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function f(r){return function(e){return o([r,e])}}function o(f){if(t)throw new TypeError("Generator is already executing.");while(u&&(u=0,f[0]&&(n=0)),n)try{if(t=1,i&&(a=f[0]&2?i["return"]:f[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,f[1])).done)return a;if(i=0,a)f=[f[0]&2,a.value];switch(f[0]){case 0:case 1:a=f;break;case 4:n.label++;return{value:f[1],done:false};case 5:n.label++;i=f[1];f=[0];continue;case 7:f=n.ops.pop();n.trys.pop();continue;default:if(!(a=n.trys,a=a.length>0&&a[a.length-1])&&(f[0]===6||f[0]===2)){n=0;continue}if(f[0]===3&&(!a||f[1]>a[0]&&f[1]<a[3])){n.label=f[1];break}if(f[0]===6&&n.label<a[1]){n.label=a[1];a=f;break}if(a&&n.label<a[2]){n.label=a[2];n.ops.push(f);break}if(a[2])n.ops.pop();n.trys.pop();continue}f=e.call(r,n)}catch(r){f=[6,r];i=0}finally{t=a=0}if(f[0]&5)throw f[1];return{value:f[0]?f[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(r,e,n){if(n||arguments.length===2)for(var t=0,i=e.length,a;t<i;t++){if(a||!(t in e)){if(!a)a=Array.prototype.slice.call(e,0,t);a[t]=e[t]}}return r.concat(a||Array.prototype.slice.call(e))};System.register([],(function(r,e){"use strict";return{execute:function(){var n=this;var t=r("N","anywhere-ui");var i={allRenderFn:true,appendChildSlotFix:false,asyncLoading:true,asyncQueue:false,attachStyles:true,cloneNodeFix:false,cmpDidLoad:true,cmpDidRender:false,cmpDidUnload:false,cmpDidUpdate:true,cmpShouldUpdate:false,cmpWillLoad:true,cmpWillRender:true,cmpWillUpdate:true,connectedCallback:true,constructableCSS:true,cssAnnotations:true,devTools:false,disconnectedCallback:true,element:false,event:true,experimentalScopedSlotChanges:false,experimentalSlotFixes:false,formAssociated:false,hasRenderFn:true,hostListener:true,hostListenerTarget:true,hostListenerTargetBody:false,hostListenerTargetDocument:true,hostListenerTargetParent:false,hostListenerTargetWindow:true,hotModuleReplacement:false,hydrateClientSide:false,hydrateServerSide:false,hydratedAttribute:false,hydratedClass:true,hydratedSelectorName:"hydrated",initializeNextTick:true,invisiblePrehydration:true,isDebug:false,isDev:false,isTesting:false,lazyLoad:true,lifecycle:true,lifecycleDOMEvents:false,member:true,method:true,mode:false,observeAttribute:true,profile:false,prop:true,propBoolean:true,propMutable:true,propNumber:true,propString:true,reflect:true,scoped:true,scopedSlotTextContentFix:false,scriptDataOpts:true,shadowDelegatesFocus:false,shadowDom:true,slot:true,slotChildNodesFix:false,slotRelocation:true,state:true,style:true,svg:false,taskQueue:true,transformTagName:false,updatable:true,vdomAttribute:true,vdomClass:true,vdomFunctional:true,vdomKey:true,vdomListener:true,vdomPropOrAttr:true,vdomRef:true,vdomRender:true,vdomStyle:true,vdomText:true,vdomXlink:true,watchCallback:true};var a=Object.defineProperty;var u=function(r,e){for(var n in e)a(r,n,{get:e[n],enumerable:true})};var f=r("e",(function(r){var e=new URL(r,re.t);return e.origin!==Yr.location.origin?e.href:e.pathname}));var o={};var l=function(r){return r!=null};var v=function(r){r=typeof r;return r==="object"||r==="function"};function s(r){var e,n,t;return(t=(n=(e=r.head)==null?void 0:e.querySelector('meta[name="csp-nonce"]'))==null?void 0:n.getAttribute("content"))!=null?t:void 0}var c={};u(c,{err:function(){return h},map:function(){return p},ok:function(){return d},unwrap:function(){return m},unwrapErr:function(){return y}});var d=function(r){return{isOk:true,isErr:false,value:r}};var h=function(r){return{isOk:false,isErr:true,value:r}};function p(r,e){if(r.isOk){var n=e(r.value);if(n instanceof Promise){return n.then((function(r){return d(r)}))}else{return d(n)}}if(r.isErr){var t=r.value;return h(t)}throw"should never get here"}var m=function(r){if(r.isOk){return r.value}else{throw r.value}};var y=function(r){if(r.isErr){return r.value}else{throw r.value}};var w=function(r,e){if(e===void 0){e=""}{return function(){return}}};var b=function(r,e){{return function(){return}}};var _="{visibility:hidden}.hydrated{visibility:inherit}";var g="slot-fb{display:contents}slot-fb[hidden]{display:none}";var S="http://www.w3.org/1999/xlink";var $=r("h",(function(r,e){var n=[];for(var t=2;t<arguments.length;t++){n[t-2]=arguments[t]}var i=null;var a=null;var u=null;var f=false;var o=false;var l=[];var s=function(e){for(var n=0;n<e.length;n++){i=e[n];if(Array.isArray(i)){s(i)}else if(i!=null&&typeof i!=="boolean"){if(f=typeof r!=="function"&&!v(i)){i=String(i)}if(f&&o){l[l.length-1].i+=i}else{l.push(f?k(null,i):i)}o=f}}};s(n);if(e){if(e.key){a=e.key}if(e.name){u=e.name}{var c=e.className||e.class;if(c){e.class=typeof c!=="object"?c:Object.keys(c).filter((function(r){return c[r]})).join(" ")}}}if(typeof r==="function"){return r(e===null?{}:e,l,x)}var d=k(r,null);d.u=e;if(l.length>0){d.o=l}{d.l=a}{d.v=u}return d}));var k=function(r,e){var n={h:0,p:r,i:e,m:null,o:null};{n.u=null}{n.l=null}{n.v=null}return n};var A=r("H",{});var j=function(r){return r&&r.p===A};var x={forEach:function(r,e){return r.map(C).forEach(e)},map:function(r,e){return r.map(C).map(e).map(O)}};var C=function(r){return{vattrs:r.u,vchildren:r.o,vkey:r.l,vname:r.v,vtag:r.p,vtext:r.i}};var O=function(r){if(typeof r.vtag==="function"){var e=__assign({},r.vattrs);if(r.vkey){e.key=r.vkey}if(r.vname){e.name=r.vname}return $.apply(void 0,__spreadArray([r.vtag,e],r.vchildren||[],false))}var n=k(r.vtag,r.vtext);n.u=r.vattrs;n.o=r.vchildren;n.l=r.vkey;n.v=r.vname;return n};var T=function(r,e){if(r!=null&&!v(r)){if(e&4){return r==="false"?false:r===""||!!r}if(e&2){return parseFloat(r)}if(e&1){return String(r)}return r}return r};var L=r("g",(function(r){return Gr(r).$hostElement$}));var R=r("c",(function(r,e,n){var t=L(r);return{emit:function(r){return E(t,e,{bubbles:!!(n&4),composed:!!(n&2),cancelable:!!(n&1),detail:r})}}}));var E=function(r,e,n){var t=re.ce(e,n);r.dispatchEvent(t);return t};var D=new WeakMap;var F=function(r,e,n){var t=Jr.get(r);if(ie&&n){t=t||new CSSStyleSheet;if(typeof t==="string"){t=e}else{t.replaceSync(e)}}else{t=e}Jr.set(r,t)};var M=function(r,e,n){var t;var i=N(e);var a=Jr.get(i);r=r.nodeType===11?r:Zr;if(a){if(typeof a==="string"){r=r.head||r;var u=D.get(r);var f=void 0;if(!u){D.set(r,u=new Set)}if(!u.has(i)){{f=Zr.createElement("style");f.innerHTML=a;var o=(t=re._)!=null?t:s(Zr);if(o!=null){f.setAttribute("nonce",o)}r.insertBefore(f,r.querySelector("link"))}if(e.h&4){f.innerHTML+=g}if(u){u.add(i)}}}else if(!r.adoptedStyleSheets.includes(a)){r.adoptedStyleSheets=__spreadArray(__spreadArray([],r.adoptedStyleSheets,true),[a],false)}}return i};var P=function(r){var e=r.S;var n=r.$hostElement$;var t=e.h;var i=w("attachStyles",e.$);var a=M(n.shadowRoot?n.shadowRoot:n.getRootNode(),e);if(t&10){n["s-sc"]=a;n.classList.add(a+"-h");if(t&2){n.classList.add(a+"-s")}}i()};var N=function(r,e){return"sc-"+r.$};var U=function(r,e,n,t,i,a){if(n!==t){var u=Ir(r,e);var f=e.toLowerCase();if(e==="class"){var o=r.classList;var l=B(n);var s=B(t);o.remove.apply(o,l.filter((function(r){return r&&!s.includes(r)})));o.add.apply(o,s.filter((function(r){return r&&!l.includes(r)})))}else if(e==="style"){{for(var c in n){if(!t||t[c]==null){if(c.includes("-")){r.style.removeProperty(c)}else{r.style[c]=""}}}}for(var c in t){if(!n||t[c]!==n[c]){if(c.includes("-")){r.style.setProperty(c,t[c])}else{r.style[c]=t[c]}}}}else if(e==="key");else if(e==="ref"){if(t){t(r)}}else if(!u&&e[0]==="o"&&e[1]==="n"){if(e[2]==="-"){e=e.slice(3)}else if(Ir(Yr,f)){e=f.slice(2)}else{e=f[2]+e.slice(3)}if(n||t){var d=e.endsWith(H);e=e.replace(z,"");if(n){re.rel(r,e,n,d)}if(t){re.ael(r,e,t,d)}}}else{var h=v(t);if((u||h&&t!==null)&&!i){try{if(!r.tagName.includes("-")){var p=t==null?"":t;if(e==="list"){u=false}else if(n==null||r[e]!=p){r[e]=p}}else{r[e]=t}}catch(r){}}var m=false;{if(f!==(f=f.replace(/^xlink\:?/,""))){e=f;m=true}}if(t==null||t===false){if(t!==false||r.getAttribute(e)===""){if(m){r.removeAttributeNS(S,e)}else{r.removeAttribute(e)}}}else if((!u||a&4||i)&&!h){t=t===true?"":t;if(m){r.setAttributeNS(S,e,t)}else{r.setAttribute(e,t)}}}}};var W=/\s/;var B=function(r){return!r?[]:r.split(W)};var H="Capture";var z=new RegExp(H+"$");var G=function(r,e,n){var t=e.m.nodeType===11&&e.m.host?e.m.host:e.m;var i=r&&r.u||o;var a=e.u||o;{for(var u=0,f=Q(Object.keys(i));u<f.length;u++){var l=f[u];if(!(l in a)){U(t,l,i[l],void 0,n,e.h)}}}for(var v=0,s=Q(Object.keys(a));v<s.length;v++){var l=s[v];U(t,l,i[l],a[l],n,e.h)}};function Q(r){return r.includes("ref")?__spreadArray(__spreadArray([],r.filter((function(r){return r!=="ref"})),true),["ref"],false):r}var q;var I;var K;var V=false;var X=false;var J=false;var Y=false;var Z=function(r,e,n,t){var i;var a=e.o[n];var u=0;var f;var o;var v;if(!V){J=true;if(a.p==="slot"){if(q){t.classList.add(q+"-s")}a.h|=a.o?2:1}}if(a.i!==null){f=a.m=Zr.createTextNode(a.i)}else if(a.h&1){f=a.m=Zr.createTextNode("")}else{f=a.m=Zr.createElement(a.h&2?"slot-fb":a.p);{G(null,a,Y)}if(l(q)&&f["s-si"]!==q){f.classList.add(f["s-si"]=q)}{pr(f,t)}if(a.o){for(u=0;u<a.o.length;++u){o=Z(r,a,u,f);if(o){f.appendChild(o)}}}}f["s-hn"]=K;{if(a.h&(2|1)){f["s-sr"]=true;f["s-cr"]=I;f["s-sn"]=a.v||"";f["s-rf"]=(i=a.u)==null?void 0:i.ref;v=r&&r.o&&r.o[n];if(v&&v.p===a.p&&r.m){{rr(r.m,false)}}}}return f};var rr=function(r,e){re.h|=1;var n=Array.from(r.childNodes);if(r["s-sr"]&&i.experimentalSlotFixes){var t=r;while(t=t.nextSibling){if(t&&t["s-sn"]===r["s-sn"]&&t["s-sh"]===K){n.push(t)}}}for(var a=n.length-1;a>=0;a--){var u=n[a];if(u["s-hn"]!==K&&u["s-ol"]){dr(ur(u),u,ar(u));u["s-ol"].remove();u["s-ol"]=void 0;u["s-sh"]=void 0;J=true}if(e){rr(u,e)}}re.h&=~1};var er=function(r,e,n,t,i,a){var u=r["s-cr"]&&r["s-cr"].parentNode||r;var f;if(u.shadowRoot&&u.tagName===K){u=u.shadowRoot}for(;i<=a;++i){if(t[i]){f=Z(null,n,i,r);if(f){t[i].m=f;dr(u,f,ar(e))}}}};var nr=function(r,e,n){for(var t=e;t<=n;++t){var i=r[t];if(i){var a=i.m;cr(i);if(a){{X=true;if(a["s-ol"]){a["s-ol"].remove()}else{rr(a,true)}}a.remove()}}}};var tr=function(r,e,n,t,i){if(i===void 0){i=false}var a=0;var u=0;var f=0;var o=0;var l=e.length-1;var v=e[0];var s=e[l];var c=t.length-1;var d=t[0];var h=t[c];var p;var m;while(a<=l&&u<=c){if(v==null){v=e[++a]}else if(s==null){s=e[--l]}else if(d==null){d=t[++u]}else if(h==null){h=t[--c]}else if(ir(v,d,i)){fr(v,d,i);v=e[++a];d=t[++u]}else if(ir(s,h,i)){fr(s,h,i);s=e[--l];h=t[--c]}else if(ir(v,h,i)){if(v.p==="slot"||h.p==="slot"){rr(v.m.parentNode,false)}fr(v,h,i);dr(r,v.m,s.m.nextSibling);v=e[++a];h=t[--c]}else if(ir(s,d,i)){if(v.p==="slot"||h.p==="slot"){rr(s.m.parentNode,false)}fr(s,d,i);dr(r,s.m,v.m);s=e[--l];d=t[++u]}else{f=-1;{for(o=a;o<=l;++o){if(e[o]&&e[o].l!==null&&e[o].l===d.l){f=o;break}}}if(f>=0){m=e[f];if(m.p!==d.p){p=Z(e&&e[u],n,f,r)}else{fr(m,d,i);e[f]=void 0;p=m.m}d=t[++u]}else{p=Z(e&&e[u],n,u,r);d=t[++u]}if(p){{dr(ur(v.m),p,ar(v.m))}}}}if(a>l){er(r,t[c+1]==null?null:t[c+1].m,n,t,u,c)}else if(u>c){nr(e,a,l)}};var ir=function(r,e,n){if(n===void 0){n=false}if(r.p===e.p){if(r.p==="slot"){return r.v===e.v}if(!n){return r.l===e.l}return true}return false};var ar=function(r){return r&&r["s-ol"]||r};var ur=function(r){return(r["s-ol"]?r["s-ol"]:r).parentNode};var fr=function(r,e,n){if(n===void 0){n=false}var t=e.m=r.m;var i=r.o;var a=e.o;var u=e.p;var f=e.i;var o;if(f===null){{if(u==="slot"&&!V);else{G(r,e,Y)}}if(i!==null&&a!==null){tr(t,i,e,a,n)}else if(a!==null){if(r.i!==null){t.textContent=""}er(t,null,e,a,0,a.length-1)}else if(i!==null){nr(i,0,i.length-1)}}else if(o=t["s-cr"]){o.parentNode.textContent=f}else if(r.i!==f){t.data=f}};var or=function(r){var e=r.childNodes;for(var n=0,t=e;n<t.length;n++){var i=t[n];if(i.nodeType===1){if(i["s-sr"]){var a=i["s-sn"];i.hidden=false;for(var u=0,f=e;u<f.length;u++){var o=f[u];if(o!==i){if(o["s-hn"]!==i["s-hn"]||a!==""){if(o.nodeType===1&&(a===o.getAttribute("slot")||a===o["s-sn"])||o.nodeType===3&&a===o["s-sn"]){i.hidden=true;break}}else{if(o.nodeType===1||o.nodeType===3&&o.textContent.trim()!==""){i.hidden=true;break}}}}}or(i)}}};var lr=[];var vr=function(r){var e;var n;var t;for(var a=0,u=r.childNodes;a<u.length;a++){var f=u[a];if(f["s-sr"]&&(e=f["s-cr"])&&e.parentNode){n=e.parentNode.childNodes;var o=f["s-sn"];var l=function(){e=n[t];if(!e["s-cn"]&&!e["s-nr"]&&e["s-hn"]!==f["s-hn"]&&!i.experimentalSlotFixes){if(sr(e,o)){var r=lr.find((function(r){return r.k===e}));X=true;e["s-sn"]=e["s-sn"]||o;if(r){r.k["s-sh"]=f["s-hn"];r.A=f}else{e["s-sh"]=f["s-hn"];lr.push({A:f,k:e})}if(e["s-sr"]){lr.map((function(n){if(sr(n.k,e["s-sn"])){r=lr.find((function(r){return r.k===e}));if(r&&!n.A){n.A=r.A}}}))}}else if(!lr.some((function(r){return r.k===e}))){lr.push({k:e})}}};for(t=n.length-1;t>=0;t--){l()}}if(f.nodeType===1){vr(f)}}};var sr=function(r,e){if(r.nodeType===1){if(r.getAttribute("slot")===null&&e===""){return true}if(r.getAttribute("slot")===e){return true}return false}if(r["s-sn"]===e){return true}return e===""};var cr=function(r){{r.u&&r.u.ref&&r.u.ref(null);r.o&&r.o.map(cr)}};var dr=function(r,e,n){var t=r==null?void 0:r.insertBefore(e,n);{pr(e,r)}return t};var hr=function(r){var e=[];if(r){e.push.apply(e,__spreadArray(__spreadArray(__spreadArray([],r["s-scs"]||[],false),[r["s-si"],r["s-sc"]],false),hr(r.parentElement),false))}return e};var pr=function(r,e,n){if(n===void 0){n=false}var t;if(r&&e&&r.nodeType===1){var i=new Set(hr(e).filter(Boolean));if(i.size){(t=r.classList)==null?void 0:t.add.apply(t,r["s-scs"]=__spreadArray([],i,true));if(r["s-ol"]||n){for(var a=0,u=Array.from(r.childNodes);a<u.length;a++){var f=u[a];pr(f,r,true)}}}}};var mr=function(r,e,n){if(n===void 0){n=false}var t,i,a,u;var f=r.$hostElement$;var o=r.S;var l=r.j||k(null,null);var v=j(e)?e:$(null,null,e);K=f.tagName;if(o.C){v.u=v.u||{};o.C.map((function(r){var e=r[0],n=r[1];return v.u[n]=f[e]}))}if(n&&v.u){for(var s=0,c=Object.keys(v.u);s<c.length;s++){var d=c[s];if(f.hasAttribute(d)&&!["key","ref","style","class"].includes(d)){v.u[d]=f[d]}}}v.p=null;v.h|=4;r.j=v;v.m=l.m=f.shadowRoot||f;{q=f["s-sc"]}V=(o.h&1)!==0;{I=f["s-cr"];X=false}fr(l,v,n);{re.h|=1;if(J){vr(v.m);for(var h=0,p=lr;h<p.length;h++){var m=p[h];var y=m.k;if(!y["s-ol"]){var w=Zr.createTextNode("");w["s-nr"]=y;dr(y.parentNode,y["s-ol"]=w,y)}}for(var b=0,_=lr;b<_.length;b++){var m=_[b];var y=m.k;var g=m.A;if(g){var S=g.parentNode;var A=g.nextSibling;{var w=(t=y["s-ol"])==null?void 0:t.previousSibling;while(w){var x=(i=w["s-nr"])!=null?i:null;if(x&&x["s-sn"]===y["s-sn"]&&S===x.parentNode){x=x.nextSibling;while(x===y||(x==null?void 0:x["s-sr"])){x=x==null?void 0:x.nextSibling}if(!x||!x["s-nr"]){A=x;break}}w=w.previousSibling}}if(!A&&S!==y.parentNode||y.nextSibling!==A){if(y!==A){if(!y["s-hn"]&&y["s-ol"]){y["s-hn"]=y["s-ol"].parentNode.nodeName}dr(S,y,A);if(y.nodeType===1){y.hidden=(a=y["s-ih"])!=null?a:false}}}y&&typeof g["s-rf"]==="function"&&g["s-rf"](y)}else{if(y.nodeType===1){if(n){y["s-ih"]=(u=y.hidden)!=null?u:false}y.hidden=true}}}}if(X){or(v.m)}re.h&=~1;lr.length=0}I=void 0};var yr=function(r,e){if(e&&!r.O&&e["s-p"]){e["s-p"].push(new Promise((function(e){return r.O=e})))}};var wr=function(r,e){{r.h|=16}if(r.h&4){r.h|=512;return}yr(r,r.T);var n=function(){return br(r,e)};return ce(n)};var br=function(r,e){var n=r.$hostElement$;var t=w("scheduleUpdate",r.S.$);var i=r.L;if(!i){throw new Error("Can't render component <".concat(n.tagName.toLowerCase()," /> with invalid Stencil runtime! Make sure this imported component is compiled with a `externalRuntime: true` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime"))}var a;if(e){{r.h|=256;if(r.R){r.R.map((function(r){var e=r[0],n=r[1];return jr(i,e,n)}));r.R=void 0}}{a=jr(i,"componentWillLoad")}}else{{a=jr(i,"componentWillUpdate")}}{a=_r(a,(function(){return jr(i,"componentWillRender")}))}t();return _r(a,(function(){return Sr(r,i,e)}))};var _r=function(r,e){return gr(r)?r.then(e):e()};var gr=function(r){return r instanceof Promise||r&&r.then&&typeof r.then==="function"};var Sr=function(r,e,t){return __awaiter(n,void 0,void 0,(function(){var n,i,a,u,f,o,l;return __generator(this,(function(v){i=r.$hostElement$;a=w("update",r.S.$);u=i["s-rc"];if(t){P(r)}f=w("render",r.S.$);{$r(r,e,i,t)}if(u){u.map((function(r){return r()}));i["s-rc"]=void 0}f();a();{o=(n=i["s-p"])!=null?n:[];l=function(){return kr(r)};if(o.length===0){l()}else{Promise.all(o).then(l);r.h|=4;o.length=0}}return[2]}))}))};var $r=function(r,e,n,t){try{e=e.render();{r.h&=~16}{r.h|=2}{{{mr(r,e,t)}}}}catch(e){Kr(e,r.$hostElement$)}return null};var kr=function(r){var e=r.S.$;var n=r.$hostElement$;var t=w("postUpdate",e);var i=r.L;var a=r.T;if(!(r.h&64)){r.h|=64;{xr(n)}{jr(i,"componentDidLoad")}t();{r.D(n);if(!a){Ar()}}}else{{jr(i,"componentDidUpdate")}t()}{r.F(n)}{if(r.O){r.O();r.O=void 0}if(r.h&512){se((function(){return wr(r,false)}))}r.h&=~(4|512)}};var Ar=function(r){{xr(Zr.documentElement)}se((function(){return E(Yr,"appload",{detail:{namespace:t}})}))};var jr=function(r,e,n){if(r&&r[e]){try{return r[e](n)}catch(r){Kr(r)}}return void 0};var xr=function(r){var e;return r.classList.add((e=i.hydratedSelectorName)!=null?e:"hydrated")};var Cr=function(r,e){return Gr(r).M.get(e)};var Or=function(r,e,n,t){var i=Gr(r);if(!i){throw new Error("Couldn't find host element for \"".concat(t.$,'" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/ionic-team/stencil/issues/5457).'))}var a=i.$hostElement$;var u=i.M.get(e);var f=i.h;var o=i.L;n=T(n,t.P[e][0]);var l=Number.isNaN(u)&&Number.isNaN(n);var v=n!==u&&!l;if((!(f&8)||u===void 0)&&v){i.M.set(e,n);if(o){if(t.N&&f&128){var s=t.N[e];if(s){s.map((function(r){try{o[r](n,u,e)}catch(r){Kr(r,a)}}))}}if((f&(2|16))===2){wr(i,false)}}}};var Tr=function(r,e,n){var t;var i=r.prototype;if(e.P){if(r.watchers){e.N=r.watchers}var a=Object.entries(e.P);a.map((function(r){var t=r[0],a=r[1][0];if(a&31||n&2&&a&32){Object.defineProperty(i,t,{get:function(){return Cr(this,t)},set:function(r){Or(this,t,r,e)},configurable:true,enumerable:true})}else if(n&1&&a&64){Object.defineProperty(i,t,{value:function(){var r=[];for(var e=0;e<arguments.length;e++){r[e]=arguments[e]}var n;var i=Gr(this);return(n=i==null?void 0:i.U)==null?void 0:n.then((function(){var e;return(e=i.L)==null?void 0:e[t].apply(e,r)}))}})}}));if(n&1){var u=new Map;i.attributeChangedCallback=function(r,n,t){var a=this;re.jmp((function(){var f;var o=u.get(r);if(a.hasOwnProperty(o)){t=a[o];delete a[o]}else if(i.hasOwnProperty(o)&&typeof a[o]==="number"&&a[o]==t){return}else if(o==null){var l=Gr(a);var v=l==null?void 0:l.h;if(v&&!(v&8)&&v&128&&t!==n){var s=l.L;var c=(f=e.N)==null?void 0:f[r];c==null?void 0:c.forEach((function(e){if(s[e]!=null){s[e].call(s,t,n,r)}}))}return}a[o]=t===null&&typeof a[o]==="boolean"?false:t}))};r.observedAttributes=Array.from(new Set(__spreadArray(__spreadArray([],Object.keys((t=e.N)!=null?t:{}),true),a.filter((function(r){var e=r[0],n=r[1];return n[0]&15})).map((function(r){var n=r[0],t=r[1];var i;var a=t[1]||n;u.set(a,n);if(t[0]&512){(i=e.C)==null?void 0:i.push([n,a])}return a})),true)))}}return r};var Lr=function(r,e,t,i){return __awaiter(n,void 0,void 0,(function(){var n,i,a,u,f,o,l,v,s,c,d;return __generator(this,(function(h){switch(h.label){case 0:if(!((e.h&32)===0))return[3,6];e.h|=32;i=t.W;if(!i)return[3,4];a=Xr(t);if(!(a&&"then"in a))return[3,2];u=b();return[4,a];case 1:n=h.sent();u();return[3,3];case 2:n=a;h.label=3;case 3:if(!n){throw new Error('Constructor for "'.concat(t.$,"#").concat(e.B,'" was not found'))}if(!n.isProxied){{t.N=n.watchers}Tr(n,t,2);n.isProxied=true}f=w("createInstance",t.$);{e.h|=8}try{new n(e)}catch(r){Kr(r)}{e.h&=~8}{e.h|=128}f();Rr(e.L);return[3,5];case 4:n=r.constructor;o=r.localName;customElements.whenDefined(o).then((function(){return e.h|=128}));h.label=5;case 5:if(n&&n.style){l=n.style;v=N(t);if(!Jr.has(v)){s=w("registerStyles",t.$);F(v,l,!!(t.h&1));s()}}h.label=6;case 6:c=e.T;d=function(){return wr(e,true)};if(c&&c["s-rc"]){c["s-rc"].push(d)}else{d()}return[2]}}))}))};var Rr=function(r){{jr(r,"connectedCallback")}};var Er=function(r){if((re.h&1)===0){var e=Gr(r);var n=e.S;var t=w("connectedCallback",n.$);if(!(e.h&1)){e.h|=1;{if(n.h&(4|8)){Dr(r)}}{var i=r;while(i=i.parentNode||i.host){if(i["s-p"]){yr(e,e.T=i);break}}}if(n.P){Object.entries(n.P).map((function(e){var n=e[0],t=e[1][0];if(t&31&&r.hasOwnProperty(n)){var i=r[n];delete r[n];r[n]=i}}))}{se((function(){return Lr(r,e,n)}))}}else{Nr(r,e,n.H);if(e==null?void 0:e.L){Rr(e.L)}else if(e==null?void 0:e.G){e.G.then((function(){return Rr(e.L)}))}}t()}};var Dr=function(r){var e=r["s-cr"]=Zr.createComment("");e["s-cn"]=true;dr(r,e,r.firstChild)};var Fr=function(r){{jr(r,"disconnectedCallback")}};var Mr=function(r){return __awaiter(n,void 0,void 0,(function(){var e;return __generator(this,(function(n){if((re.h&1)===0){e=Gr(r);{if(e.q){e.q.map((function(r){return r()}));e.q=void 0}}if(e==null?void 0:e.L){Fr(e.L)}else if(e==null?void 0:e.G){e.G.then((function(){return Fr(e.L)}))}}return[2]}))}))};var Pr=r("b",(function(r,e){if(e===void 0){e={}}var n;var t=w();var i=[];var a=e.exclude||[];var u=Yr.customElements;var f=Zr.head;var o=f.querySelector("meta[charset]");var l=Zr.createElement("style");var v=[];var c;var d=true;Object.assign(re,e);re.t=new URL(e.resourcesUrl||"./",Zr.baseURI).href;var h=false;r.map((function(r){r[1].map((function(e){var n;var t={h:e[0],$:e[1],P:e[2],H:e[3]};if(t.h&4){h=true}{t.P=e[2]}{t.H=e[3]}{t.C=[]}{t.N=(n=e[4])!=null?n:{}}var f=t.$;var o=function(r){__extends(e,r);function e(e){var n=r.call(this,e)||this;e=n;qr(e,t);if(t.h&1){{{e.attachShadow({mode:"open"})}}}return n}e.prototype.connectedCallback=function(){var r=this;if(c){clearTimeout(c);c=null}if(d){v.push(this)}else{re.jmp((function(){return Er(r)}))}};e.prototype.disconnectedCallback=function(){var r=this;re.jmp((function(){return Mr(r)}))};e.prototype.componentOnReady=function(){return Gr(this).G};return e}(HTMLElement);t.W=r[0];if(!a.includes(f)&&!u.get(f)){i.push(f);u.define(f,Tr(o,t,1))}}))}));if(i.length>0){if(h){l.textContent+=g}{l.textContent+=i+_}if(l.innerHTML.length){l.setAttribute("data-styles","");var p=(n=re._)!=null?n:s(Zr);if(p!=null){l.setAttribute("nonce",p)}f.insertBefore(l,o?o.nextSibling:f.firstChild)}}d=false;if(v.length){v.map((function(r){return r.connectedCallback()}))}else{{re.jmp((function(){return c=setTimeout(Ar,30)}))}}t()}));var Nr=function(r,e,n,t){if(n){n.map((function(n){var t=n[0],i=n[1],a=n[2];var u=Wr(r,t);var f=Ur(e,a);var o=Br(t);re.ael(u,i,f,o);(e.q=e.q||[]).push((function(){return re.rel(u,i,f,o)}))}))}};var Ur=function(r,e){return function(n){var t;try{{if(r.h&256){(t=r.L)==null?void 0:t[e](n)}else{(r.R=r.R||[]).push([e,n])}}}catch(r){Kr(r)}}};var Wr=function(r,e){if(e&4)return Zr;if(e&8)return Yr;return r};var Br=function(r){return ne?{passive:(r&1)!==0,capture:(r&2)!==0}:(r&2)!==0};var Hr=r("s",(function(r){return re._=r}));var zr=new WeakMap;var Gr=function(r){return zr.get(r)};var Qr=r("r",(function(r,e){return zr.set(e.L=r,e)}));var qr=function(r,e){var n={h:0,$hostElement$:r,S:e,M:new Map};{n.U=new Promise((function(r){return n.F=r}))}{n.G=new Promise((function(r){return n.D=r}));r["s-p"]=[];r["s-rc"]=[]}Nr(r,n,e.H);return zr.set(r,n)};var Ir=function(r,e){return e in r};var Kr=function(r,e){return(0,console.error)(r,e)};var Vr=new Map;var Xr=function(r,n,t){var i=r.$.replace(/-/g,"_");var a=r.W;if(!a){return void 0}var u=Vr.get(a);if(u){return u[i]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return e.import("./".concat(a,".entry.js").concat("")).then((function(r){{Vr.set(a,r)}return r[i]}),Kr)};var Jr=new Map;var Yr=typeof window!=="undefined"?window:{};var Zr=r("d",Yr.document||{head:{}});var re={h:0,t:"",jmp:function(r){return r()},raf:function(r){return requestAnimationFrame(r)},ael:function(r,e,n,t){return r.addEventListener(e,n,t)},rel:function(r,e,n,t){return r.removeEventListener(e,n,t)},ce:function(r,e){return new CustomEvent(r,e)}};var ee=r("a",(function(r){Object.assign(re,r)}));var ne=function(){var r=false;try{Zr.addEventListener("e",null,Object.defineProperty({},"passive",{get:function(){r=true}}))}catch(r){}return r}();var te=r("p",(function(r){return Promise.resolve(r)}));var ie=function(){try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(r){}return false}();var ae=false;var ue=[];var fe=[];var oe=function(r,e){return function(n){r.push(n);if(!ae){ae=true;if(e&&re.h&4){se(ve)}else{re.raf(ve)}}}};var le=function(r){for(var e=0;e<r.length;e++){try{r[e](performance.now())}catch(r){Kr(r)}}r.length=0};var ve=function(){le(ue);{le(fe);if(ae=ue.length>0){re.raf(ve)}}};var se=function(r){return te().then(r)};var ce=oe(fe,true)}}}));