var __assign=this&&this.__assign||function(){__assign=Object.assign||function(n){for(var r,t=1,i=arguments.length;t<i;t++){r=arguments[t];for(var e in r)if(Object.prototype.hasOwnProperty.call(r,e))n[e]=r[e]}return n};return __assign.apply(this,arguments)};System.register(["./p-a68f6e99.system.js"],(function(n){"use strict";var r;return{setters:[function(n){r=n.g}],execute:function(){var t={};
/**
            * (c) Iconify
            *
            * For the full copyright and license information, please view the license.txt or license.gpl.txt
            * files at https://github.com/iconify/iconify
            *
            * Licensed under MIT.
            *
            * @license MIT
            * @version 3.1.1
            */(function(n){var r=function(n){var r=Object.freeze({left:0,top:0,width:16,height:16}),t=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),i=Object.freeze(__assign(__assign({},r),t)),e=Object.freeze(__assign(__assign({},i),{body:"",hidden:!1}));function o(n,r){var i=function(n,r){var t={};!n.hFlip!=!r.hFlip&&(t.hFlip=!0),!n.vFlip!=!r.vFlip&&(t.vFlip=!0);var i=((n.rotate||0)+(r.rotate||0))%4;return i&&(t.rotate=i),t}(n,r);for(var o in e)o in t?o in n&&!(o in i)&&(i[o]=t[o]):o in r?i[o]=r[o]:o in n&&(i[o]=n[o]);return i}function a(n,r,t){var i=n.icons,e=n.aliases||Object.create(null);var a={};function u(n){a=o(i[n]||e[n],a)}return u(r),t.forEach(u),o(n,a)}function u(n,r){var t=[];if("object"!=typeof n||"object"!=typeof n.icons)return t;n.not_found instanceof Array&&n.not_found.forEach((function(n){r(n,null),t.push(n)}));var i=function(n,r){var t=n.icons,i=n.aliases||Object.create(null),e=Object.create(null);return(r||Object.keys(t).concat(Object.keys(i))).forEach((function n(r){if(t[r])return e[r]=[];if(!(r in e)){e[r]=null;var o=i[r]&&i[r].parent,a=o&&n(o);a&&(e[r]=[o].concat(a))}return e[r]})),e}(n);for(var e in i){var o=i[e];o&&(r(e,a(n,e,o)),t.push(e))}return t}var f=/^[a-z0-9]+(-[a-z0-9]+)*$/,c=function(n,r,t,i){if(i===void 0){i=""}var e=n.split(":");if("@"===n.slice(0,1)){if(e.length<2||e.length>3)return null;i=e.shift().slice(1)}if(e.length>3||!e.length)return null;if(e.length>1){var o=e.pop(),a=e.pop(),u={provider:e.length>0?e[0]:i,prefix:a,name:o};return r&&!s(u)?null:u}var f=e[0],c=f.split("-");if(c.length>1){var v={provider:i,prefix:c.shift(),name:c.join("-")};return r&&!s(v)?null:v}if(t&&""===i){var l={provider:i,prefix:"",name:f};return r&&!s(l,t)?null:l}return null},s=function(n,r){return!!n&&!(""!==n.provider&&!n.provider.match(f)||!(r&&""===n.prefix||n.prefix.match(f))||!n.name.match(f))},v=__assign({provider:"",aliases:{},not_found:{}},r);function l(n,r){for(var t in r)if(t in n&&typeof n[t]!=typeof r[t])return!1;return!0}function d(n){if("object"!=typeof n||null===n)return null;var r=n;if("string"!=typeof r.prefix||!n.icons||"object"!=typeof n.icons)return null;if(!l(n,v))return null;var t=r.icons;for(var i in t){var o=t[i];if(!i.match(f)||"string"!=typeof o.body||!l(o,e))return null}var a=r.aliases||Object.create(null);for(var u in a){var c=a[u],s=c.parent;if(!u.match(f)||"string"!=typeof s||!t[s]&&!a[s]||!l(c,e))return null}return r}var p=Object.create(null);function g(n,r){var t=p[n]||(p[n]=Object.create(null));return t[r]||(t[r]=function(n,r){return{provider:n,prefix:r,icons:Object.create(null),missing:new Set}}(n,r))}function y(n,r){return d(r)?u(r,(function(r,t){t?n.icons[r]=t:n.missing.add(r)})):[]}function b(n,r){var t=[];return("string"==typeof n?[n]:Object.keys(p)).forEach((function(n){("string"==typeof n&&"string"==typeof r?[r]:Object.keys(p[n]||{})).forEach((function(r){var i=g(n,r);t=t.concat(Object.keys(i.icons).map((function(t){return(""!==n?"@"+n+":":"")+r+":"+t})))}))})),t}var _=!1;function m(n){var r="string"==typeof n?c(n,!0,_):n;if(r){var t=g(r.provider,r.prefix),i=r.name;return t.icons[i]||(t.missing.has(i)?null:void 0)}}function h(n,r){var t=c(n,!0,_);if(!t)return!1;return function(n,r,t){try{if("string"==typeof t.body)return n.icons[r]=__assign({},t),!0}catch(n){}return!1}(g(t.provider,t.prefix),t.name,r)}function w(n,r){if("object"!=typeof n)return!1;if("string"!=typeof r&&(r=n.provider||""),_);var t=n.prefix;if(!s({provider:r,prefix:t,name:"a"}))return!1;return!!y(g(r,t),n)}function j(n){return!!m(n)}function O(n){var r=m(n);return r?__assign(__assign({},i),r):null}var x=Object.freeze({width:null,height:null}),I=Object.freeze(__assign(__assign({},x),t)),k=/(-?[0-9.]*[0-9]+[0-9.]*)/g,S=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function T(n,r,t){if(1===r)return n;if(t=t||100,"number"==typeof n)return Math.ceil(n*r*t)/t;if("string"!=typeof n)return n;var i=n.split(k);if(null===i||!i.length)return n;var e=[];var o=i.shift(),a=S.test(o);for(;;){if(a){var u=parseFloat(o);isNaN(u)?e.push(o):e.push(Math.ceil(u*r*t)/t)}else e.push(o);if(o=i.shift(),void 0===o)return e.join("");a=!a}}var M=function(n){return"unset"===n||"undefined"===n||"none"===n};function A(n,r){var t=__assign(__assign({},i),n),e=__assign(__assign({},I),r),o={left:t.left,top:t.top,width:t.width,height:t.height};var a=t.body;[t,e].forEach((function(n){var r=[],t=n.hFlip,i=n.vFlip;var e,u=n.rotate;switch(t?i?u+=2:(r.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),r.push("scale(-1 1)"),o.top=o.left=0):i&&(r.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),r.push("scale(1 -1)"),o.top=o.left=0),u<0&&(u-=4*Math.floor(u/4)),u%=4,u){case 1:e=o.height/2+o.top,r.unshift("rotate(90 "+e.toString()+" "+e.toString()+")");break;case 2:r.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:e=o.width/2+o.left,r.unshift("rotate(-90 "+e.toString()+" "+e.toString()+")")}u%2==1&&(o.left!==o.top&&(e=o.left,o.left=o.top,o.top=e),o.width!==o.height&&(e=o.width,o.width=o.height,o.height=e)),r.length&&(a='<g transform="'+r.join(" ")+'">'+a+"</g>")}));var u=e.width,f=e.height,c=o.width,s=o.height;var v,l;null===u?(l=null===f?"1em":"auto"===f?s:f,v=T(l,c/s)):(v="auto"===u?c:u,l=null===f?T(v,s/c):"auto"===f?s:f);var d={},p=function(n,r){M(r)||(d[n]=r.toString())};return p("width",v),p("height",l),d.viewBox=o.left.toString()+" "+o.top.toString()+" "+c.toString()+" "+s.toString(),{attributes:d,body:a}}var P=/\sid="(\S+)"/g,C="IconifyId"+Date.now().toString(16)+(16777216*Math.random()|0).toString(16);var D=0;function F(n,r){if(r===void 0){r=C}var t=[];var i;for(;i=P.exec(n);)t.push(i[1]);if(!t.length)return n;var e="suffix"+(16777216*Math.random()|Date.now()).toString(16);return t.forEach((function(t){var i="function"==typeof r?r(t):r+(D++).toString(),o=t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");n=n.replace(new RegExp('([#;"])('+o+')([")]|\\.[a-z])',"g"),"$1"+i+e+"$3")})),n=n.replace(new RegExp(e,"g"),"")}var N={local:!0,session:!0},$={local:new Set,session:new Set};var z=!1;var L="iconify2",E="iconify",R=E+"-count",q=E+"-version",V=36e5,G=168;function H(n,r){try{return n.getItem(r)}catch(n){}}function J(n,r,t){try{return n.setItem(r,t),!0}catch(n){}}function U(n,r){try{n.removeItem(r)}catch(n){}}function Q(n,r){return J(n,R,r.toString())}function B(n){return parseInt(H(n,R))||0}var K="undefined"==typeof window?{}:window;function W(n){var r=n+"Storage";try{if(K&&K[r]&&"number"==typeof K[r].length)return K[r]}catch(n){}N[n]=!1}function X(n,r){var t=W(n);if(!t)return;var i=H(t,q);if(i!==L){if(i){var e=B(t);for(var o=0;o<e;o++)U(t,E+o.toString())}return J(t,q,L),void Q(t,0)}var a=Math.floor(Date.now()/V)-G,u=function(n){var i=E+n.toString(),e=H(t,i);if("string"==typeof e){try{var o=JSON.parse(e);if("object"==typeof o&&"number"==typeof o.cached&&o.cached>a&&"string"==typeof o.provider&&"object"==typeof o.data&&"string"==typeof o.data.prefix&&r(o,n))return!0}catch(n){}U(t,i)}};var f=B(t);for(var c=f-1;c>=0;c--)u(c)||(c===f-1?(f--,Q(t,f)):$[n].add(c))}function Y(){if(!z){z=!0;for(var n in N)X(n,(function(n){var r=n.data,t=g(n.provider,r.prefix);if(!y(t,r).length)return!1;var i=r.lastModified||-1;return t.lastModifiedCached=t.lastModifiedCached?Math.min(t.lastModifiedCached,i):i,!0}))}}function Z(n,r){switch(n){case"local":case"session":N[n]=r;break;case"all":for(var t in N)N[t]=r}}var nn=Object.create(null);function rn(n,r){nn[n]=r}function tn(n){return nn[n]||nn[""]}function en(n){var r;if("string"==typeof n.resources)r=[n.resources];else if(r=n.resources,!(r instanceof Array&&r.length))return null;return{resources:r,path:n.path||"/",maxURL:n.maxURL||500,rotate:n.rotate||750,timeout:n.timeout||5e3,random:!0===n.random,index:n.index||0,dataAfterTimeout:!1!==n.dataAfterTimeout}}var on=Object.create(null),an=["https://api.simplesvg.com","https://api.unisvg.com"],un=[];for(;an.length>0;)1===an.length||Math.random()>.5?un.push(an.shift()):un.push(an.pop());function fn(n,r){var t=en(r);return null!==t&&(on[n]=t,!0)}function cn(n){return on[n]}on[""]=en({resources:["https://api.iconify.design"].concat(un)});var sn=function(){var n;try{if(n=fetch,"function"==typeof n)return n}catch(n){}}();var vn={prepare:function(n,r,t){var i=[],e=function(n,r){var t=cn(n);if(!t)return 0;var i;if(t.maxURL){var e=0;t.resources.forEach((function(n){var r=n;e=Math.max(e,r.length)}));var o=r+".json?icons=";i=t.maxURL-e-t.path.length-o.length}else i=0;return i}(n,r),o="icons";var a={type:o,provider:n,prefix:r,icons:[]},u=0;return t.forEach((function(t,f){u+=t.length+1,u>=e&&f>0&&(i.push(a),a={type:o,provider:n,prefix:r,icons:[]},u=t.length),a.icons.push(t)})),i.push(a),i},send:function(n,r,t){if(!sn)return void t("abort",424);var i=function(n){if("string"==typeof n){var r=cn(n);if(r)return r.path}return"/"}(r.provider);switch(r.type){case"icons":{var e=r.prefix,o=r.icons.join(",");i+=e+".json?"+new URLSearchParams({icons:o}).toString();break}case"custom":{var a=r.uri;i+="/"===a.slice(0,1)?a.slice(1):a;break}default:return void t("abort",400)}var u=503;sn(n+i).then((function(n){var r=n.status;if(200===r)return u=501,n.json();setTimeout((function(){t(function(n){return 404===n}(r)?"abort":"next",r)}))})).then((function(n){"object"==typeof n&&null!==n?setTimeout((function(){t("success",n)})):setTimeout((function(){404===n?t("abort",n):t("next",u)}))})).catch((function(){t("next",u)}))}};function ln(n,r){n.forEach((function(n){var t=n.loaderCallbacks;t&&(n.loaderCallbacks=t.filter((function(n){return n.id!==r})))}))}var dn=0;var pn={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function gn(n,r,t,i){var e=n.resources.length,o=n.random?Math.floor(Math.random()*e):n.index;var a;if(n.random){var u=n.resources.slice(0);for(a=[];u.length>1;){var f=Math.floor(Math.random()*u.length);a.push(u[f]),u=u.slice(0,f).concat(u.slice(f+1))}a=a.concat(u)}else a=n.resources.slice(o).concat(n.resources.slice(0,o));var c=Date.now();var s,v="pending",l=0,d=null,p=[],g=[];function y(){d&&(clearTimeout(d),d=null)}function b(){"pending"===v&&(v="aborted"),y(),p.forEach((function(n){"pending"===n.status&&(n.status="aborted")})),p=[]}function _(n,r){r&&(g=[]),"function"==typeof n&&g.push(n)}function m(){v="failed",g.forEach((function(n){n(void 0,s)}))}function h(){p.forEach((function(n){"pending"===n.status&&(n.status="aborted")})),p=[]}function w(){if("pending"!==v)return;y();var i=a.shift();if(void 0===i)return p.length?void(d=setTimeout((function(){y(),"pending"===v&&(h(),m())}),n.timeout)):void m();var e={status:"pending",resource:i,callback:function(r,t){!function(r,t,i){var e="success"!==t;switch(p=p.filter((function(n){return n!==r})),v){case"pending":break;case"failed":if(e||!n.dataAfterTimeout)return;break;default:return}if("abort"===t)return s=i,void m();if(e)return s=i,void(p.length||(a.length?w():m()));if(y(),h(),!n.random){var o=n.resources.indexOf(r.resource);-1!==o&&o!==n.index&&(n.index=o)}v="completed",g.forEach((function(n){n(i)}))}(e,r,t)}};p.push(e),l++,d=setTimeout(w,n.rotate),t(i,r,e.callback)}return"function"==typeof i&&g.push(i),setTimeout(w),function(){return{startTime:c,payload:r,status:v,queriesSent:l,queriesPending:p.length,subscribe:_,abort:b}}}function yn(n){var r=__assign(__assign({},pn),n);var t=[];function i(){t=t.filter((function(n){return"pending"===n().status}))}var e={query:function(n,e,o){var a=gn(r,n,e,(function(n,r){i(),o&&o(n,r)}));return t.push(a),a},find:function(n){return t.find((function(r){return n(r)}))||null},setIndex:function(n){r.index=n},getIndex:function(){return r.index},cleanup:i};return e}function bn(){}var _n=Object.create(null);function mn(n,r,t){var i,e;if("string"==typeof n){var o=tn(n);if(!o)return t(void 0,424),bn;e=o.send;var a=function(n){if(!_n[n]){var r=cn(n);if(!r)return;var t={config:r,redundancy:yn(r)};_n[n]=t}return _n[n]}(n);a&&(i=a.redundancy)}else{var u=en(n);if(u){i=yn(u);var f=tn(n.resources?n.resources[0]:"");f&&(e=f.send)}}return i&&e?i.query(r,e,t)().abort:(t(void 0,424),bn)}function hn(n,r){function t(t){var i;if(!N[t]||!(i=W(t)))return;var e=$[t];var o;if(e.size)e.delete(o=Array.from(e).shift());else if(o=B(i),!Q(i,o+1))return;var a={cached:Math.floor(Date.now()/V),provider:n.provider,data:r};return J(i,E+o.toString(),JSON.stringify(a))}z||Y(),r.lastModified&&!function(n,r){var t=n.lastModifiedCached;if(t&&t>=r)return t===r;if(n.lastModifiedCached=r,t)for(var i in N)X(i,(function(t){var i=t.data;return t.provider!==n.provider||i.prefix!==n.prefix||i.lastModified===r}));return!0}(n,r.lastModified)||Object.keys(r.icons).length&&(r.not_found&&delete(r=Object.assign({},r)).not_found,t("local")||t("session"))}function wn(){}function jn(n){n.iconsLoaderFlag||(n.iconsLoaderFlag=!0,setTimeout((function(){n.iconsLoaderFlag=!1,function(n){n.pendingCallbacksFlag||(n.pendingCallbacksFlag=!0,setTimeout((function(){n.pendingCallbacksFlag=!1;var r=n.loaderCallbacks?n.loaderCallbacks.slice(0):[];if(!r.length)return;var t=!1;var i=n.provider,e=n.prefix;r.forEach((function(r){var o=r.icons,a=o.pending.length;o.pending=o.pending.filter((function(r){if(r.prefix!==e)return!0;var a=r.name;if(n.icons[a])o.loaded.push({provider:i,prefix:e,name:a});else{if(!n.missing.has(a))return t=!0,!0;o.missing.push({provider:i,prefix:e,name:a})}return!1})),o.pending.length!==a&&(t||ln([n],r.id),r.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),r.abort))}))})))}(n)})))}var On=function(n){var r=g(n.provider,n.prefix).pendingIcons;return!(!r||!r.has(n.name))},xn=function(n,r){var t=function(n){var r={loaded:[],missing:[],pending:[]},t=Object.create(null);n.sort((function(n,r){return n.provider!==r.provider?n.provider.localeCompare(r.provider):n.prefix!==r.prefix?n.prefix.localeCompare(r.prefix):n.name.localeCompare(r.name)}));var i={provider:"",prefix:"",name:""};return n.forEach((function(n){if(i.name===n.name&&i.prefix===n.prefix&&i.provider===n.provider)return;i=n;var e=n.provider,o=n.prefix,a=n.name,u=t[e]||(t[e]=Object.create(null)),f=u[o]||(u[o]=g(e,o));var c;c=a in f.icons?r.loaded:""===o||f.missing.has(a)?r.missing:r.pending;var s={provider:e,prefix:o,name:a};c.push(s)})),r}(function(n,r,t){if(r===void 0){r=!0}if(t===void 0){t=!1}var i=[];return n.forEach((function(n){var e="string"==typeof n?c(n,r,t):n;e&&i.push(e)})),i}(n,!0,_));if(!t.pending.length){var i=!0;return r&&setTimeout((function(){i&&r(t.loaded,t.missing,t.pending,wn)})),function(){i=!1}}var e=Object.create(null),o=[];var a,u;return t.pending.forEach((function(n){var r=n.provider,t=n.prefix;if(t===u&&r===a)return;a=r,u=t,o.push(g(r,t));var i=e[r]||(e[r]=Object.create(null));i[t]||(i[t]=[])})),t.pending.forEach((function(n){var r=n.provider,t=n.prefix,i=n.name,o=g(r,t),a=o.pendingIcons||(o.pendingIcons=new Set);a.has(i)||(a.add(i),e[r][t].push(i))})),o.forEach((function(n){var r=n.provider,t=n.prefix;e[r][t].length&&function(n,r){n.iconsToLoad?n.iconsToLoad=n.iconsToLoad.concat(r).sort():n.iconsToLoad=r,n.iconsQueueFlag||(n.iconsQueueFlag=!0,setTimeout((function(){n.iconsQueueFlag=!1;var r=n.provider,t=n.prefix,i=n.iconsToLoad;var e;delete n.iconsToLoad,i&&(e=tn(r))&&e.prepare(r,t,i).forEach((function(t){mn(r,t,(function(r){if("object"!=typeof r)t.icons.forEach((function(r){n.missing.add(r)}));else try{var i=y(n,r);if(!i.length)return;var e=n.pendingIcons;e&&i.forEach((function(n){e.delete(n)})),hn(n,r)}catch(n){console.error(n)}jn(n)}))}))})))}(n,e[r][t])})),r?function(n,r,t){var i=dn++,e=ln.bind(null,t,i);if(!r.pending.length)return e;var o={id:i,icons:r,callback:n,abort:e};return t.forEach((function(n){(n.loaderCallbacks||(n.loaderCallbacks=[])).push(o)})),e}(r,t,o):wn},In=function(n){return new Promise((function(r,t){var e="string"==typeof n?c(n,!0):n;e?xn([e||n],(function(o){if(o.length&&e){var a=m(e);if(a)return void r(__assign(__assign({},i),a))}t(n)})):t(n)}))};function kn(n,r){var t=__assign({},n);for(var i in r){var e=r[i],o=typeof e;i in x?(null===e||e&&("string"===o||"number"===o))&&(t[i]=e):o===typeof t[i]&&(t[i]="rotate"===i?e%4:e)}return t}var Sn=__assign(__assign({},I),{inline:!1}),Tn="iconify",Mn="iconify-inline",An="iconifyData"+Date.now();var Pn=[];function Cn(n){for(var r=0;r<Pn.length;r++){var t=Pn[r];if(("function"==typeof t.node?t.node():t.node)===n)return t}}function Dn(n,r){if(r===void 0){r=!1}var t=Cn(n);return t?(t.temporary&&(t.temporary=r),t):(t={node:n,temporary:r},Pn.push(t),t)}function Fn(){return Pn}var Nn=null;var $n={childList:!0,subtree:!0,attributes:!0};function zn(n){if(!n.observer)return;var r=n.observer;r.pendingScan||(r.pendingScan=setTimeout((function(){delete r.pendingScan,Nn&&Nn(n)})))}function Ln(n,r){if(!n.observer)return;var t=n.observer;if(!t.pendingScan)for(var i=0;i<r.length;i++){var e=r[i];if(e.addedNodes&&e.addedNodes.length>0||"attributes"===e.type&&void 0!==e.target[An])return void(t.paused||zn(n))}}function En(n,r){n.observer.instance.observe(r,$n)}function Rn(n){var r=n.observer;if(r&&r.instance)return;var t="function"==typeof n.node?n.node():n.node;t&&window&&(r||(r={paused:0},n.observer=r),r.instance=new window.MutationObserver(Ln.bind(null,n)),En(n,t),r.paused||zn(n))}function qn(){Fn().forEach(Rn)}function Vn(n){if(!n.observer)return;var r=n.observer;r.pendingScan&&(clearTimeout(r.pendingScan),delete r.pendingScan),r.instance&&(r.instance.disconnect(),delete r.instance)}function Gn(n){var r=null!==Nn;Nn!==n&&(Nn=n,r&&Fn().forEach(Vn)),r?qn():function(n){var r=document;r.readyState&&"loading"!==r.readyState?n():r.addEventListener("DOMContentLoaded",n)}(qn)}function Hn(n){(n?[n]:Fn()).forEach((function(n){if(!n.observer)return void(n.observer={paused:1});var r=n.observer;if(r.paused++,r.paused>1||!r.instance)return;r.instance.disconnect()}))}function Jn(n){if(n){var r=Cn(n);r&&Hn(r)}else Hn()}function Un(n){(n?[n]:Fn()).forEach((function(n){if(!n.observer)return void Rn(n);var r=n.observer;if(r.paused&&(r.paused--,!r.paused)){var t="function"==typeof n.node?n.node():n.node;if(!t)return;r.instance?En(n,t):Rn(n)}}))}function Qn(n){if(n){var r=Cn(n);r&&Un(r)}else Un()}function Bn(n,r){if(r===void 0){r=!1}var t=Dn(n,r);return Rn(t),t}function Kn(n){var r=Cn(n);r&&(Vn(r),function(n){Pn=Pn.filter((function(r){return n!==r&&n!==("function"==typeof r.node?r.node():r.node)}))}(n))}var Wn=/[\s,]+/;var Xn=["width","height"],Yn=["inline","hFlip","vFlip"];function Zn(n){var r=n.getAttribute("data-icon"),t="string"==typeof r&&c(r,!0);if(!t)return null;var i=__assign(__assign({},Sn),{inline:n.classList&&n.classList.contains(Mn)});Xn.forEach((function(r){var t=n.getAttribute("data-"+r);t&&(i[r]=t)}));var e=n.getAttribute("data-rotate");"string"==typeof e&&(i.rotate=function(n,r){if(r===void 0){r=0}var t=n.replace(/^-?[0-9.]*/,"");function i(n){for(;n<0;)n+=4;return n%4}if(""===t){var e=parseInt(n);return isNaN(e)?0:i(e)}if(t!==n){var o=0;switch(t){case"%":o=25;break;case"deg":o=90}if(o){var a=parseFloat(n.slice(0,n.length-t.length));return isNaN(a)?0:(a/=o,a%1==0?i(a):0)}}return r}(e));var o=n.getAttribute("data-flip");"string"==typeof o&&function(n,r){r.split(Wn).forEach((function(r){switch(r.trim()){case"horizontal":n.hFlip=!0;break;case"vertical":n.vFlip=!0}}))}(i,o),Yn.forEach((function(r){var t="data-"+r,e=function(n,r){return n===r||"true"===n||""!==n&&"false"!==n&&null}(n.getAttribute(t),t);"boolean"==typeof e&&(i[r]=e)}));var a=n.getAttribute("data-mode");return{name:r,icon:t,customisations:i,mode:a}}var nr="svg."+Tn+", i."+Tn+", span."+Tn+", i."+Mn+", span."+Mn;function rr(n,r){var t=-1===n.indexOf("xlink:")?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(var i in r)t+=" "+i+'="'+r[i]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+t+">"+n+"</svg>"}var tr;function ir(n){return void 0===tr&&function(){try{tr=window.trustedTypes.createPolicy("iconify",{createHTML:function(n){return n}})}catch(n){tr=null}}(),tr?tr.createHTML(n):n}function er(n){var r=new Set(["iconify"]);return["provider","prefix"].forEach((function(t){n[t]&&r.add("iconify--"+n[t])})),r}function or(n,r,t,i){var e=n.classList;if(i){var o=i.classList;Array.from(o).forEach((function(n){e.add(n)}))}var a=[];return r.forEach((function(n){e.contains(n)?t.has(n)&&a.push(n):(e.add(n),a.push(n))})),t.forEach((function(n){r.has(n)||e.remove(n)})),a}function ar(n,r,t){var i=n.style;(t||[]).forEach((function(n){i.removeProperty(n)}));var e=[];for(var o in r)i.getPropertyValue(o)||(e.push(o),i.setProperty(o,r[o]));return e}function ur(n,r,t){var i;try{i=document.createElement("span")}catch(r){return n}var e=r.customisations,o=A(t,e),a=n[An],u=rr(F(o.body),__assign({"aria-hidden":"true",role:"img"},o.attributes));i.innerHTML=ir(u);var f=i.childNodes[0],c=n.attributes;for(var s=0;s<c.length;s++){var v=c.item(s),l=v.name;"class"===l||f.hasAttribute(l)||f.setAttribute(l,v.value)}var d=or(f,er(r.icon),new Set(a&&a.addedClasses),n),p=ar(f,e.inline?{"vertical-align":"-0.125em"}:{},a&&a.addedStyles),g=__assign(__assign({},r),{status:"loaded",addedClasses:d,addedStyles:p});return f[An]=g,n.parentNode&&n.parentNode.replaceChild(f,n),f}var fr={display:"inline-block"},cr={"background-color":"currentColor"},sr={"background-color":"transparent"},vr={image:"var(--svg)",repeat:"no-repeat",size:"100% 100%"},lr={"-webkit-mask":cr,mask:cr,background:sr};for(var dr in lr){var pr=lr[dr];for(var gr in vr)pr[dr+"-"+gr]=vr[gr]}function yr(n){return n+(n.match(/^[-0-9.]+$/)?"px":"")}var br=!1;function _r(){br||(br=!0,setTimeout((function(){br&&(br=!1,mr())})))}function mr(n,r){if(r===void 0){r=!1}var t=Object.create(null);function e(n,r){var i=n.provider,e=n.prefix,o=n.name,a=g(i,e),u=a.icons[o];if(u)return{status:"loaded",icon:u};if(a.missing.has(o))return{status:"missing"};if(r&&!On(n)){var f=t[i]||(t[i]=Object.create(null));(f[e]||(f[e]=new Set)).add(o)}return{status:"loading"}}(n?[n]:Fn()).forEach((function(n){var t="function"==typeof n.node?n.node():n.node;if(!t||!t.querySelectorAll)return;var o=!1,a=!1;function u(r,t,e){if(a||(a=!0,Hn(n)),"SVG"!==r.tagName.toUpperCase()){var o=t.mode,u="mask"===o||"bg"!==o&&("style"===o?-1!==e.body.indexOf("currentColor"):null);if("boolean"==typeof u)return void function(n,r,t,i){var e=r.customisations,o=A(t,e),a=o.attributes,u=n[An],f=rr(o.body,__assign(__assign({},a),{width:t.width+"",height:t.height+""})),c=or(n,er(r.icon),new Set(u&&u.addedClasses)),s=__assign(__assign({"--svg":'url("'+(v=f,"data:image/svg+xml,"+function(n){return n.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}(v)+'")'),width:yr(a.width),height:yr(a.height)},fr),i?cr:sr);var v;e.inline&&(s["vertical-align"]="-0.125em");var l=ar(n,s,u&&u.addedStyles),d=__assign(__assign({},r),{status:"loaded",addedClasses:c,addedStyles:l});n[An]=d}(r,t,__assign(__assign({},i),e),u)}ur(r,t,e)}(function(n){var r=[];return n.querySelectorAll(nr).forEach((function(n){var t=n[An]||"svg"!==n.tagName.toLowerCase()?Zn(n):null;t&&r.push({node:n,props:t})})),r})(t).forEach((function(n){var r=n.node,t=n.props;var i=r[An];if(!i){var a=e(t.icon,!0),f=a.status,c=a.icon;return c?void u(r,t,c):(o=o||"loading"===f,void(r[An]=__assign(__assign({},t),{status:f})))}var s;if(function(n,r){if(n.name!==r.name||n.mode!==r.mode)return!0;var t=n.customisations,i=r.customisations;for(var e in Sn)if(t[e]!==i[e])return!0;return!1}(i,t)){if(s=e(t.icon,i.name!==t.name),!s.icon)return o=o||"loading"===s.status,void Object.assign(i,__assign(__assign({},t),{status:s.status}))}else{if("loading"!==i.status)return;if(s=e(t.icon,!1),!s.icon)return void(i.status=s.status)}u(r,t,s.icon)})),n.temporary&&!o?Kn(t):r&&o?Bn(t,!0):a&&n.observer&&Un(n)}));var o=function(n){var r=t[n];var i=function(t){var i=r[t];xn(Array.from(i).map((function(r){return{provider:n,prefix:t,name:r}})),_r)};for(var e in r){i(e)}};for(var a in t){o(a)}}function hr(n,r,t){if(t===void 0){t=!1}var i=m(n);if(!i)return null;var e=c(n),o=kn(Sn,r||{}),a=ur(document.createElement("span"),{name:n,icon:e,customisations:o},i);return t?a.outerHTML:a}function wr(){return"3.1.1"}function jr(n,r){return hr(n,r,!1)}function Or(n,r){return hr(n,r,!0)}function xr(n,r){var t=m(n);if(!t)return null;return A(t,kn(Sn,r||{}))}function Ir(n){n?function(n){var r=Cn(n);r?mr(r):mr({node:n,temporary:!0},!0)}(n):mr()}if("undefined"!=typeof document&&"undefined"!=typeof window){!function(){if(document.documentElement)return Dn(document.documentElement);Pn.push({node:function(){return document.documentElement}})}();var kr=window;if(void 0!==kr.IconifyPreload){var Sr=kr.IconifyPreload,Tr="Invalid IconifyPreload syntax.";"object"==typeof Sr&&null!==Sr&&(Sr instanceof Array?Sr:[Sr]).forEach((function(n){try{("object"!=typeof n||null===n||n instanceof Array||"object"!=typeof n.icons||"string"!=typeof n.prefix||!w(n))&&console.error(Tr)}catch(n){console.error(Tr)}}))}setTimeout((function(){Gn(mr),mr()}))}function Mr(n,r){Z(n,!1!==r)}function Ar(n){Z(n,!0)}if(rn("",vn),"undefined"!=typeof document&&"undefined"!=typeof window){Y();var Pr=window;if(void 0!==Pr.IconifyProviders){var Cr=Pr.IconifyProviders;if("object"==typeof Cr&&null!==Cr)for(var Dr in Cr){var Fr="IconifyProviders["+Dr+"] is invalid.";try{var Nr=Cr[Dr];if("object"!=typeof Nr||!Nr||void 0===Nr.resources)continue;fn(Dr,Nr)||console.error(Fr)}catch(n){console.error(Fr)}}}}var $r={getAPIConfig:cn,setAPIModule:rn,sendAPIQuery:mn,setFetch:function(n){sn=n},getFetch:function(){return sn},listAPIProviders:function(){return Object.keys(on)}},zr={_api:$r,addAPIProvider:fn,loadIcons:xn,loadIcon:In,iconExists:j,getIcon:O,listIcons:b,addIcon:h,addCollection:w,replaceIDs:F,calculateSize:T,buildIcon:A,getVersion:wr,renderSVG:jr,renderHTML:Or,renderIcon:xr,scan:Ir,observe:Bn,stopObserving:Kn,pauseObserver:Jn,resumeObserver:Qn,enableCache:Mr,disableCache:Ar};return n._api=$r,n.addAPIProvider=fn,n.addCollection=w,n.addIcon=h,n.buildIcon=A,n.calculateSize=T,n.default=zr,n.disableCache=Ar,n.enableCache=Mr,n.getIcon=O,n.getVersion=wr,n.iconExists=j,n.listIcons=b,n.loadIcon=In,n.loadIcons=xn,n.observe=Bn,n.pauseObserver=Jn,n.renderHTML=Or,n.renderIcon=xr,n.renderSVG=jr,n.replaceIDs=F,n.resumeObserver=Qn,n.scan=Ir,n.stopObserving=Kn,Object.defineProperty(n,"__esModule",{value:!0}),n}({});try{for(var t in n.__esModule=!0,n.default=r,r)n[t]=r[t]}catch(n){}try{void 0===self.Iconify&&(self.Iconify=r)}catch(n){}})(t);var i=n("I",r(t));var e=n("l",(function(n){return new Promise((function(r,t){i.loadIcons(n,(function(n,i,e){if(e.length){return}if(i.length){t({loaded:n,missing:i})}else{r({loaded:n})}}))}))}))}}}));