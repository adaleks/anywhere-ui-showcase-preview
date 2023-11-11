const e="anywhere-ui";let t,n,l,o=!1,s=!1,i=!1,c=!1;const r=e=>{const t=new URL(e,we.t);return t.origin!==he.location.origin?t.href:t.pathname},f="http://www.w3.org/1999/xlink",u={},a=e=>"object"==(e=typeof e)||"function"===e;function d(e){var t,n,l;return null!==(l=null===(n=null===(t=e.head)||void 0===t?void 0:t.querySelector('meta[name="csp-nonce"]'))||void 0===n?void 0:n.getAttribute("content"))&&void 0!==l?l:void 0}const v=(e,t,...n)=>{let l=null,o=null,s=null,i=!1,c=!1;const r=[],f=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?f(l):null!=l&&"boolean"!=typeof l&&((i="function"!=typeof e&&!a(l))&&(l+=""),i&&c?r[r.length-1].l+=l:r.push(i?p(null,l):l),c=i)};if(f(n),t){t.key&&(o=t.key),t.name&&(s=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,r,$);const u=p(e,null);return u.o=t,r.length>0&&(u.i=r),u.u=o,u.v=s,u},p=(e,t)=>({p:0,$:e,l:t,m:null,i:null,o:null,u:null,v:null}),y={},$={forEach:(e,t)=>e.map(m).forEach(t),map:(e,t)=>e.map(m).map(t).map(h)},m=e=>({vattrs:e.o,vchildren:e.i,vkey:e.u,vname:e.v,vtag:e.$,vtext:e.l}),h=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),v(e.vtag,t,...e.vchildren||[])}const t=p(e.vtag,e.vtext);return t.o=e.vattrs,t.i=e.vchildren,t.u=e.vkey,t.v=e.vname,t},b=e=>ue(e).$hostElement$,w=(e,t,n)=>{const l=b(e);return{emit:e=>k(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},k=(e,t,n)=>{const l=we.ce(t,n);return e.dispatchEvent(l),l},g=new WeakMap,j=e=>"sc-"+e.h,S=(e,t,n,l,o,s)=>{if(n!==l){let i=ve(e,t),c=t.toLowerCase();if("class"===t){const t=e.classList,o=C(n),s=C(l);t.remove(...o.filter((e=>e&&!s.includes(e)))),t.add(...s.filter((e=>e&&!o.includes(e))))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(i||"o"!==t[0]||"n"!==t[1]){const r=a(l);if((i||r&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{const o=null==l?"":l;"list"===t?i=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(e){}let u=!1;c!==(c=c.replace(/^xlink\:?/,""))&&(t=c,u=!0),null==l||!1===l?!1===l&&""!==e.getAttribute(t)||(u?e.removeAttributeNS(f,t):e.removeAttribute(t)):(!i||4&s||o)&&!r&&(l=!0===l?"":l,u?e.setAttributeNS(f,t,l):e.setAttribute(t,l))}else if(t="-"===t[2]?t.slice(3):ve(he,c)?c.slice(2):c[2]+t.slice(3),n||l){const o=t.endsWith(M);t=t.replace(R,""),n&&we.rel(e,t,n,o),l&&we.ael(e,t,l,o)}}},O=/\s/,C=e=>e?e.split(O):[],M="Capture",R=RegExp(M+"$"),x=(e,t,n,l)=>{const o=11===t.m.nodeType&&t.m.host?t.m.host:t.m,s=e&&e.o||u,i=t.o||u;for(l in s)l in i||S(o,l,s[l],void 0,n,t.p);for(l in i)S(o,l,s[l],i[l],n,t.p)},P=(e,s,c,r)=>{var f;const u=s.i[c];let a,d,v,p=0;if(o||(i=!0,"slot"===u.$&&(t&&r.classList.add(t+"-s"),u.p|=u.i?2:1)),null!==u.l)a=u.m=be.createTextNode(u.l);else if(1&u.p)a=u.m=be.createTextNode("");else if(a=u.m=be.createElement(2&u.p?"slot-fb":u.$),x(null,u,!1),null!=t&&a["s-si"]!==t&&a.classList.add(a["s-si"]=t),u.i)for(p=0;p<u.i.length;++p)d=P(e,u,p,a),d&&a.appendChild(d);return a["s-hn"]=l,3&u.p&&(a["s-sr"]=!0,a["s-fs"]=null===(f=u.o)||void 0===f?void 0:f.slot,a["s-cr"]=n,a["s-sn"]=u.v||"",v=e&&e.i&&e.i[c],v&&v.$===u.$&&e.m&&E(e.m,!1)),a},E=(e,t)=>{var n;we.p|=1;const o=e.childNodes;for(let e=o.length-1;e>=0;e--){const s=o[e];s["s-hn"]!==l&&s["s-ol"]&&(W(s).insertBefore(s,U(s)),s["s-ol"].remove(),s["s-ol"]=void 0,s["s-sh"]=void 0,1===s.nodeType&&s.setAttribute("slot",null!==(n=s["s-sn"])&&void 0!==n?n:""),i=!0),t&&E(s,t)}we.p&=-2},L=(e,t,n,o,s,i)=>{let c,r=e["s-cr"]&&e["s-cr"].parentNode||e;for(r.shadowRoot&&r.tagName===l&&(r=r.shadowRoot);s<=i;++s)o[s]&&(c=P(null,n,s,e),c&&(o[s].m=c,r.insertBefore(c,U(t))))},N=(e,t,n)=>{for(let l=t;l<=n;++l){const t=e[l];if(t){const e=t.m;V(t),e&&(s=!0,e["s-ol"]?e["s-ol"].remove():E(e,!0),e.remove())}}},T=(e,t)=>e.$===t.$&&("slot"===e.$?e.v===t.v:e.u===t.u),U=e=>e&&e["s-ol"]||e,W=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,A=(e,t)=>{const n=t.m=e.m,l=e.i,o=t.i,s=t.l;let i;null===s?("slot"===t.$||x(e,t,!1),null!==l&&null!==o?((e,t,n,l)=>{let o,s,i=0,c=0,r=0,f=0,u=t.length-1,a=t[0],d=t[u],v=l.length-1,p=l[0],y=l[v];for(;i<=u&&c<=v;)if(null==a)a=t[++i];else if(null==d)d=t[--u];else if(null==p)p=l[++c];else if(null==y)y=l[--v];else if(T(a,p))A(a,p),a=t[++i],p=l[++c];else if(T(d,y))A(d,y),d=t[--u],y=l[--v];else if(T(a,y))"slot"!==a.$&&"slot"!==y.$||E(a.m.parentNode,!1),A(a,y),e.insertBefore(a.m,d.m.nextSibling),a=t[++i],y=l[--v];else if(T(d,p))"slot"!==a.$&&"slot"!==y.$||E(d.m.parentNode,!1),A(d,p),e.insertBefore(d.m,a.m),d=t[--u],p=l[++c];else{for(r=-1,f=i;f<=u;++f)if(t[f]&&null!==t[f].u&&t[f].u===p.u){r=f;break}r>=0?(s=t[r],s.$!==p.$?o=P(t&&t[c],n,r,e):(A(s,p),t[r]=void 0,o=s.m),p=l[++c]):(o=P(t&&t[c],n,c,e),p=l[++c]),o&&W(a.m).insertBefore(o,U(a.m))}i>u?L(e,null==l[v+1]?null:l[v+1].m,n,l,c,v):c>v&&N(t,i,u)})(n,l,t,o):null!==o?(null!==e.l&&(n.textContent=""),L(n,null,t,o,0,o.length-1)):null!==l&&N(l,0,l.length-1)):(i=n["s-cr"])?i.parentNode.textContent=s:e.l!==s&&(n.data=s)},D=e=>{const t=e.childNodes;for(const e of t)if(1===e.nodeType){if(e["s-sr"]){const n=e["s-sn"];e.hidden=!1;for(const l of t)if(l!==e)if(l["s-hn"]!==e["s-hn"]||""!==n){if(1===l.nodeType&&(n===l.getAttribute("slot")||n===l["s-sn"])){e.hidden=!0;break}}else if(1===l.nodeType||3===l.nodeType&&""!==l.textContent.trim()){e.hidden=!0;break}}D(e)}},F=[],H=e=>{let t,n,l;for(const o of e.childNodes){if(o["s-sr"]&&(t=o["s-cr"])&&t.parentNode){n=t.parentNode.childNodes;const e=o["s-sn"];for(l=n.length-1;l>=0;l--)if(t=n[l],!t["s-cn"]&&!t["s-nr"]&&t["s-hn"]!==o["s-hn"])if(q(t,e)){let n=F.find((e=>e.k===t));s=!0,t["s-sn"]=t["s-sn"]||e,n?(n.k["s-sh"]=o["s-hn"],n.j=o):(t["s-sh"]=o["s-hn"],F.push({j:o,k:t})),t["s-sr"]&&F.map((e=>{q(e.k,t["s-sn"])&&(n=F.find((e=>e.k===t)),n&&!e.j&&(e.j=n.j))}))}else F.some((e=>e.k===t))||F.push({k:t})}1===o.nodeType&&H(o)}},q=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,V=e=>{e.o&&e.o.ref&&e.o.ref(null),e.i&&e.i.map(V)},_=(e,t)=>{t&&!e.S&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.S=t)))},z=(e,t)=>{if(e.p|=16,!(4&e.p))return _(e,e.O),Pe((()=>B(e,t)));e.p|=512},B=(e,t)=>{const n=e.C;let l;return t?(e.p|=256,e.M&&(e.M.map((([e,t])=>Y(n,e,t))),e.M=void 0),l=Y(n,"componentWillLoad")):l=Y(n,"componentWillUpdate"),l=G(l,(()=>Y(n,"componentWillRender"))),G(l,(()=>J(e,n,t)))},G=(e,t)=>I(e)?e.then(t):t(),I=e=>e instanceof Promise||e&&e.then&&"function"==typeof e.then,J=async(e,t,n)=>{var l;const o=e.$hostElement$,s=o["s-rc"];n&&(e=>{const t=e.R,n=e.$hostElement$,l=t.p,o=((e,t)=>{var n;const l=j(t),o=me.get(l);if(e=11===e.nodeType?e:be,o)if("string"==typeof o){let t,s=g.get(e=e.head||e);if(s||g.set(e,s=new Set),!s.has(l)){{t=be.createElement("style"),t.innerHTML=o;const l=null!==(n=we.P)&&void 0!==n?n:d(be);null!=l&&t.setAttribute("nonce",l),e.insertBefore(t,e.querySelector("link"))}s&&s.add(l)}}else e.adoptedStyleSheets.includes(o)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,o]);return l})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"),2&l&&n.classList.add(o+"-s"))})(e);K(e,t,o,n),s&&(s.map((e=>e())),o["s-rc"]=void 0);{const t=null!==(l=o["s-p"])&&void 0!==l?l:[],n=()=>Q(e);0===t.length?n():(Promise.all(t).then(n),e.p|=4,t.length=0)}},K=(e,c,r,f)=>{try{c=c.render(),e.p&=-17,e.p|=2,((e,c,r=!1)=>{var f,u;const a=e.$hostElement$,d=e.R,$=e.L||p(null,null),m=(e=>e&&e.$===y)(c)?c:v(null,null,c);if(l=a.tagName,d.N&&(m.o=m.o||{},d.N.map((([e,t])=>m.o[t]=a[e]))),r&&m.o)for(const e of Object.keys(m.o))a.hasAttribute(e)&&!["key","ref","style","class"].includes(e)&&(m.o[e]=a[e]);if(m.$=null,m.p|=4,e.L=m,m.m=$.m=a.shadowRoot||a,t=a["s-sc"],n=a["s-cr"],o=0!=(1&d.p),s=!1,A($,m),we.p|=1,i){H(m.m);for(const e of F){const t=e.k;if(!t["s-ol"]){const e=be.createTextNode("");e["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=e,t)}}for(const e of F){const t=e.k,n=e.j;if(n){const e=n.parentNode;let l=n.nextSibling;{let n=null===(f=t["s-ol"])||void 0===f?void 0:f.previousSibling;for(;n;){let o=null!==(u=n["s-nr"])&&void 0!==u?u:null;if(o&&o["s-sn"]===t["s-sn"]&&e===o.parentNode&&(o=o.nextSibling,!o||!o["s-nr"])){l=o;break}n=n.previousSibling}}(!l&&e!==t.parentNode||t.nextSibling!==l)&&t!==l&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),e.insertBefore(t,l))}else 1===t.nodeType&&(t.hidden=!0)}}s&&D(m.m),we.p&=-2,F.length=0})(e,c,f)}catch(t){pe(t,e.$hostElement$)}return null},Q=e=>{const t=e.$hostElement$,n=e.C,l=e.O;64&e.p?Y(n,"componentDidUpdate"):(e.p|=64,Z(t),Y(n,"componentDidLoad"),e.T(t),l||X()),e.U(t),e.S&&(e.S(),e.S=void 0),512&e.p&&xe((()=>z(e,!1))),e.p&=-517},X=()=>{Z(be.documentElement),xe((()=>k(he,"appload",{detail:{namespace:e}})))},Y=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){pe(e)}},Z=e=>e.classList.add("hydrated"),ee=(e,t,n)=>{var l;if(t.W){e.watchers&&(t.A=e.watchers);const o=Object.entries(t.W),s=e.prototype;if(o.map((([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(s,e,{get(){return((e,t)=>ue(this).D.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=ue(e),s=o.$hostElement$,i=o.D.get(t),c=o.p,r=o.C;if(n=((e,t)=>null==e||a(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.W[t][0]),(!(8&c)||void 0===i)&&n!==i&&(!Number.isNaN(i)||!Number.isNaN(n))&&(o.D.set(t,n),r)){if(l.A&&128&c){const e=l.A[t];e&&e.map((e=>{try{r[e](n,i,t)}catch(e){pe(e,s)}}))}2==(18&c)&&z(o,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(s,e,{value(...t){const n=ue(this);return n.F.then((()=>n.C[e](...t)))}})})),1&n){const n=new Map;s.attributeChangedCallback=function(e,l,o){we.jmp((()=>{const i=n.get(e);if(this.hasOwnProperty(i))o=this[i],delete this[i];else{if(s.hasOwnProperty(i)&&"number"==typeof this[i]&&this[i]==o)return;if(null==i){const n=ue(this),s=null==n?void 0:n.p;if(!(8&s)&&128&s&&o!==l){const s=n.C,i=t.A[e];null==i||i.forEach((t=>{null!=s[t]&&s[t].call(s,o,l,e)}))}return}}this[i]=(null!==o||"boolean"!=typeof this[i])&&o}))},e.observedAttributes=Array.from(new Set([...Object.keys(null!==(l=t.A)&&void 0!==l?l:{}),...o.filter((([e,t])=>15&t[0])).map((([e,l])=>{const o=l[1]||e;return n.set(o,e),512&l[0]&&t.N.push([e,o]),o}))]))}}return e},te=e=>{Y(e,"connectedCallback")},ne=e=>{Y(e,"disconnectedCallback")},le=(e,t={})=>{var n;const l=[],o=t.exclude||[],s=he.customElements,i=be.head,c=i.querySelector("meta[charset]"),r=be.createElement("style"),f=[];let u,a=!0;Object.assign(we,t),we.t=new URL(t.resourcesUrl||"./",be.baseURI).href,e.map((e=>{e[1].map((t=>{var n;const i={p:t[0],h:t[1],W:t[2],H:t[3]};i.W=t[2],i.H=t[3],i.N=[],i.A=null!==(n=t[4])&&void 0!==n?n:{};const c=i.h,r=class extends HTMLElement{constructor(e){super(e),de(e=this,i),1&i.p&&e.attachShadow({mode:"open"})}connectedCallback(){u&&(clearTimeout(u),u=null),a?f.push(this):we.jmp((()=>(e=>{if(0==(1&we.p)){const t=ue(e),n=t.R,l=()=>{};if(1&t.p)oe(e,t,n.H),(null==t?void 0:t.C)?te(t.C):(null==t?void 0:t.q)&&t.q.then((()=>te(t.C)));else{t.p|=1,12&n.p&&(e=>{const t=e["s-cr"]=be.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)})(e);{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){_(t,t.O=n);break}}n.W&&Object.entries(n.W).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),xe((()=>(async(e,t,n)=>{let l;if(0==(32&t.p)){t.p|=32;{if(l=$e(n),l.then){const e=()=>{};l=await l,e()}l.isProxied||(n.A=l.watchers,ee(l,n,2),l.isProxied=!0);const e=()=>{};t.p|=8;try{new l(t)}catch(e){pe(e)}t.p&=-9,t.p|=128,e(),te(t.C)}if(l.style){let e=l.style;const t=j(n);if(!me.has(t)){const l=()=>{};((e,t,n)=>{let l=me.get(e);je&&n?(l=l||new CSSStyleSheet,"string"==typeof l?l=t:l.replaceSync(t)):l=t,me.set(e,l)})(t,e,!!(1&n.p)),l()}}}const o=t.O,s=()=>z(t,!0);o&&o["s-rc"]?o["s-rc"].push(s):s()})(0,t,n)))}l()}})(this)))}disconnectedCallback(){we.jmp((()=>(async()=>{if(0==(1&we.p)){const e=ue(this);e.V&&(e.V.map((e=>e())),e.V=void 0),(null==e?void 0:e.C)?ne(e.C):(null==e?void 0:e.q)&&e.q.then((()=>ne(e.C)))}})()))}componentOnReady(){return ue(this).q}};i._=e[0],o.includes(c)||s.get(c)||(l.push(c),s.define(c,ee(r,i,1)))}))}));{r.innerHTML=l+"{visibility:hidden}.hydrated{visibility:inherit}",r.setAttribute("data-styles","");const e=null!==(n=we.P)&&void 0!==n?n:d(be);null!=e&&r.setAttribute("nonce",e),i.insertBefore(r,c?c.nextSibling:i.firstChild)}a=!1,f.length?f.map((e=>e.connectedCallback())):we.jmp((()=>u=setTimeout(X,30)))},oe=(e,t,n)=>{n&&n.map((([n,l,o])=>{const s=ie(e,n),i=se(t,o),c=ce(n);we.ael(s,l,i,c),(t.V=t.V||[]).push((()=>we.rel(s,l,i,c)))}))},se=(e,t)=>n=>{try{256&e.p?e.C[t](n):(e.M=e.M||[]).push([t,n])}catch(e){pe(e)}},ie=(e,t)=>4&t?be:8&t?he:e,ce=e=>0!=(2&e),re=e=>we.P=e,fe=new WeakMap,ue=e=>fe.get(e),ae=(e,t)=>fe.set(t.C=e,t),de=(e,t)=>{const n={p:0,$hostElement$:e,R:t,D:new Map};return n.F=new Promise((e=>n.U=e)),n.q=new Promise((e=>n.T=e)),e["s-p"]=[],e["s-rc"]=[],oe(e,n,t.H),fe.set(e,n)},ve=(e,t)=>t in e,pe=(e,t)=>(0,console.error)(e,t),ye=new Map,$e=e=>{const t=e.h.replace(/-/g,"_"),n=e._,l=ye.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(ye.set(n,e),e[t])),pe)
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/},me=new Map,he="undefined"!=typeof window?window:{},be=he.document||{head:{}},we={p:0,t:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},ke=e=>{Object.assign(we,e)},ge=e=>Promise.resolve(e),je=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),Se=[],Oe=[],Ce=(e,t)=>n=>{e.push(n),c||(c=!0,t&&4&we.p?xe(Re):we.raf(Re))},Me=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){pe(e)}e.length=0},Re=()=>{Me(Se),Me(Oe),(c=Se.length>0)&&we.raf(Re)},xe=e=>ge().then(e),Pe=Ce(Oe,!0);export{y as H,e as N,ke as a,le as b,w as c,be as d,r as e,b as g,v as h,ge as p,ae as r,re as s}