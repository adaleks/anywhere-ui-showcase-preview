var __awaiter=this&&this.__awaiter||function(t,e,r,a){function n(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,s){function o(t){try{l(a.next(t))}catch(t){s(t)}}function i(t){try{l(a["throw"](t))}catch(t){s(t)}}function l(t){t.done?r(t.value):n(t.value).then(o,i)}l((a=a.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},a,n,s,o;return o={next:i(0),throw:i(1),return:i(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function i(t){return function(e){return l([t,e])}}function l(i){if(a)throw new TypeError("Generator is already executing.");while(o&&(o=0,i[0]&&(r=0)),r)try{if(a=1,n&&(s=i[0]&2?n["return"]:i[0]?n["throw"]||((s=n["return"])&&s.call(n),0):n.next)&&!(s=s.call(n,i[1])).done)return s;if(n=0,s)i=[i[0]&2,s.value];switch(i[0]){case 0:case 1:s=i;break;case 4:r.label++;return{value:i[1],done:false};case 5:r.label++;n=i[1];i=[0];continue;case 7:i=r.ops.pop();r.trys.pop();continue;default:if(!(s=r.trys,s=s.length>0&&s[s.length-1])&&(i[0]===6||i[0]===2)){r=0;continue}if(i[0]===3&&(!s||i[1]>s[0]&&i[1]<s[3])){r.label=i[1];break}if(i[0]===6&&r.label<s[1]){r.label=s[1];s=i;break}if(s&&r.label<s[2]){r.label=s[2];r.ops.push(i);break}if(s[2])r.ops.pop();r.trys.pop();continue}i=e.call(t,r)}catch(t){i=[6,t];n=0}finally{a=s=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:true}}};System.register(["./p-1942b64a.system.js","./p-3a73b8b5.system.js","./p-890b016c.system.js"],(function(t){"use strict";var e,r,a,n,s,o,i,l,c;return{setters:[function(t){e=t.r;r=t.c;a=t.h;n=t.H;s=t.g},function(t){o=t.c},function(t){i=t.g;l=t.u;c=t.s}],execute:function(){var u=o((function(t){(function(e,r){t.exports=r()})("Clusterize",(function(){var t=function(){for(var t=3,e=document.createElement("b"),r=e.all||[];e.innerHTML="\x3c!--[if gt IE "+ ++t+"]><i><![endif]--\x3e",r[0];){}return t>4?t:document.documentMode}(),e=navigator.platform.toLowerCase().indexOf("mac")+1;var r=function(t){if(!(this instanceof r))return new r(t);var o=this;var i={rows_in_block:50,blocks_in_cluster:4,tag:null,show_no_data_row:true,no_data_class:"clusterize-no-data",no_data_text:"No data",keep_parity:true,callbacks:{}};o.options={};var l=["rows_in_block","blocks_in_cluster","show_no_data_row","no_data_class","no_data_text","keep_parity","tag","callbacks"];for(var c=0,u;u=l[c];c++){o.options[u]=typeof t[u]!="undefined"&&t[u]!=null?t[u]:i[u]}var m=["scroll","content"];for(var c=0,f;f=m[c];c++){o[f+"_elem"]=t[f+"Id"]?document.getElementById(t[f+"Id"]):t[f+"Elem"];if(!o[f+"_elem"])throw new Error("Error! Could not find "+f+" element")}if(!o.content_elem.hasAttribute("tabindex"))o.content_elem.setAttribute("tabindex",0);var h=s(t.rows)?t.rows:o.fetchMarkup(),d={},p=o.scroll_elem.scrollTop;o.insertToDOM(h,d);o.scroll_elem.scrollTop=p;var g=false,y=0,w=false,b=function(){if(e){if(!w)o.content_elem.style.pointerEvents="none";w=true;clearTimeout(y);y=setTimeout((function(){o.content_elem.style.pointerEvents="auto";w=false}),50)}if(g!=(g=o.getClusterNum(h)))o.insertToDOM(h,d);if(o.options.callbacks.scrollingProgress)o.options.callbacks.scrollingProgress(o.getScrollProgress())},v=0,k=function(){clearTimeout(v);v=setTimeout(o.refresh,100)};a("scroll",o.scroll_elem,b);a("resize",window,k);o.destroy=function(t){n("scroll",o.scroll_elem,b);n("resize",window,k);o.html((t?o.generateEmptyRow():h).join(""))};o.refresh=function(t){if(o.getRowsHeight(h)||t)o.update(h)};o.update=function(t){h=s(t)?t:[];var e=o.scroll_elem.scrollTop;if(h.length*o.options.item_height<e){o.scroll_elem.scrollTop=0;g=0}o.insertToDOM(h,d);o.scroll_elem.scrollTop=e};o.clear=function(){o.update([])};o.getRowsAmount=function(){return h.length};o.getScrollProgress=function(){return this.options.scroll_top/(h.length*this.options.item_height)*100||0};var _=function(t,e){var r=s(e)?e:[];if(!r.length)return;h=t=="append"?h.concat(r):r.concat(h);o.insertToDOM(h,d)};o.append=function(t){_("append",t)};o.prepend=function(t){_("prepend",t)}};r.prototype={constructor:r,fetchMarkup:function(){var t=[],e=this.getChildNodes(this.content_elem);while(e.length){t.push(e.shift().outerHTML)}return t},exploreEnvironment:function(e,r){var a=this.options;a.content_tag=this.content_elem.tagName.toLowerCase();if(!e.length)return;if(t&&t<=9&&!a.tag)a.tag=e[0].match(/<([^>\s/]*)/)[1].toLowerCase();if(this.content_elem.children.length<=1)r.data=this.html(e[0]+e[0]+e[0]);if(!a.tag)a.tag=this.content_elem.children[0].tagName.toLowerCase();this.getRowsHeight(e)},getRowsHeight:function(t){var e=this.options,r=e.item_height;e.cluster_height=0;if(!t.length)return;var a=this.content_elem.children;if(!a.length)return;var n=a[Math.floor(a.length/2)];e.item_height=n.offsetHeight;if(e.tag=="tr"&&o("borderCollapse",this.content_elem)!="collapse")e.item_height+=parseInt(o("borderSpacing",this.content_elem),10)||0;if(e.tag!="tr"){var s=parseInt(o("marginTop",n),10)||0;var i=parseInt(o("marginBottom",n),10)||0;e.item_height+=Math.max(s,i)}e.block_height=e.item_height*e.rows_in_block;e.rows_in_cluster=e.blocks_in_cluster*e.rows_in_block;e.cluster_height=e.blocks_in_cluster*e.block_height;return r!=e.item_height},getClusterNum:function(t){var e=this.options;e.scroll_top=this.scroll_elem.scrollTop;var r=e.cluster_height-e.block_height;var a=Math.floor(e.scroll_top/r);var n=Math.floor(t.length*e.item_height/r);return Math.min(a,n)},generateEmptyRow:function(){var t=this.options;if(!t.tag||!t.show_no_data_row)return[];var e=document.createElement(t.tag),r=document.createTextNode(t.no_data_text),a;e.className=t.no_data_class;if(t.tag=="tr"){a=document.createElement("td");a.colSpan=100;a.appendChild(r)}e.appendChild(a||r);return[e.outerHTML]},generate:function(t){var e=this.options,r=t.length;if(r<e.rows_in_block){return{top_offset:0,bottom_offset:0,rows_above:0,rows:r?t:this.generateEmptyRow()}}var a=Math.max((e.rows_in_cluster-e.rows_in_block)*this.getClusterNum(t),0),n=a+e.rows_in_cluster,s=Math.max(a*e.item_height,0),o=Math.max((r-n)*e.item_height,0),i=[],l=a;if(s<1){l++}for(var c=a;c<n;c++){t[c]&&i.push(t[c])}return{top_offset:s,bottom_offset:o,rows_above:l,rows:i}},renderExtraTag:function(t,e){var r=document.createElement(this.options.tag),a="clusterize-";r.className=[a+"extra-row",a+t].join(" ");e&&(r.style.height=e+"px");return r.outerHTML},insertToDOM:function(t,e){if(!this.options.cluster_height){this.exploreEnvironment(t,e)}var r=this.generate(t),a=r.rows.join(""),n=this.checkChanges("data",a,e),s=this.checkChanges("top",r.top_offset,e),o=this.checkChanges("bottom",r.bottom_offset,e),i=this.options.callbacks,l=[];if(n||s){if(r.top_offset){this.options.keep_parity&&l.push(this.renderExtraTag("keep-parity"));l.push(this.renderExtraTag("top-space",r.top_offset))}l.push(a);r.bottom_offset&&l.push(this.renderExtraTag("bottom-space",r.bottom_offset));i.clusterWillChange&&i.clusterWillChange();this.html(l.join(""));this.options.content_tag=="ol"&&this.content_elem.setAttribute("start",r.rows_above);this.content_elem.style["counter-increment"]="clusterize-counter "+(r.rows_above-1);i.clusterChanged&&i.clusterChanged()}else if(o){this.content_elem.lastChild.style.height=r.bottom_offset+"px"}},html:function(e){var r=this.content_elem;if(t&&t<=9&&this.options.tag=="tr"){var a=document.createElement("div"),n;a.innerHTML="<table><tbody>"+e+"</tbody></table>";while(n=r.lastChild){r.removeChild(n)}var s=this.getChildNodes(a.firstChild.firstChild);while(s.length){r.appendChild(s.shift())}}else{r.innerHTML=e}},getChildNodes:function(t){var e=t.children,r=[];for(var a=0,n=e.length;a<n;a++){r.push(e[a])}return r},checkChanges:function(t,e,r){var a=e!=r[t];r[t]=e;return a}};function a(t,e,r){return e.addEventListener?e.addEventListener(t,r,false):e.attachEvent("on"+t,r)}function n(t,e,r){return e.removeEventListener?e.removeEventListener(t,r,false):e.detachEvent("on"+t,r)}function s(t){return Object.prototype.toString.call(t)==="[object Array]"}function o(t,e){return window.getComputedStyle?window.getComputedStyle(e)[t]:e.currentStyle[t]}return r}))}));var m=".clusterize-scroll.sc-any-virtual-scroller{max-height:200px;overflow:auto}.clusterize-extra-row.sc-any-virtual-scroller{margin-top:0 !important;margin-bottom:0 !important}.clusterize-extra-row.clusterize-keep-parity.sc-any-virtual-scroller{display:none}.clusterize-content.sc-any-virtual-scroller{outline:0;counter-reset:clusterize-counter}.clusterize-no-data.sc-any-virtual-scroller td.sc-any-virtual-scroller{text-align:center}@-webkit-keyframes growDown{0%{-webkit-transform:scaleY(0);transform:scaleY(0)}80%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}100%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@keyframes growDown{0%{-webkit-transform:scaleY(0);transform:scaleY(0)}80%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}100%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@-webkit-keyframes growUp{0%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}80%{-webkit-transform:scaleY(1);transform:scaleY(1)}100%{-webkit-transform:scaleY(0);transform:scaleY(0)}}@keyframes growUp{0%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}80%{-webkit-transform:scaleY(1);transform:scaleY(1)}100%{-webkit-transform:scaleY(0);transform:scaleY(0)}}@-webkit-keyframes rotateYDown{0%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(0);transform:rotateY(0)}}@keyframes rotateYDown{0%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(0);transform:rotateY(0)}}@-webkit-keyframes rotateYUp{0%{-webkit-transform:rotateY(0);transform:rotateY(0)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}}@keyframes rotateYUp{0%{-webkit-transform:rotateY(0);transform:rotateY(0)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}}@-webkit-keyframes spin{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes fadeIn{0%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes fadeIn{0%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes fadeOut{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}100%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}}@keyframes fadeOut{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}100%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}}@-webkit-keyframes slideDownFadeIn{0%{-webkit-transform:translateY(-10px);transform:translateY(-10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes slideDownFadeIn{0%{-webkit-transform:translateY(-10px);transform:translateY(-10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@-webkit-keyframes slideDownFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}}@keyframes slideDownFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}}@-webkit-keyframes slideUpFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}}@keyframes slideUpFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}}@-webkit-keyframes slideUpFadeIn{0%{-webkit-transform:translateY(10px);transform:translateY(10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes slideUpFadeIn{0%{-webkit-transform:translateY(10px);transform:translateY(10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}*.sc-any-virtual-scroller{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.any-component.sc-any-virtual-scroller,.any-element.sc-any-virtual-scroller,.any-element.sc-any-virtual-scroller *.sc-any-virtual-scroller,.any-component.sc-any-virtual-scroller *.sc-any-virtual-scroller{font-family:var(--fontFamily);font-size:var(--fontSize);text-decoration:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-tap-highlight-color:transparent}.any-component.sc-any-virtual-scroller *.sc-any-virtual-scroller,.any-element.sc-any-virtual-scroller *.sc-any-virtual-scroller,.any-element.sc-any-virtual-scroller *.sc-any-virtual-scroller *.sc-any-virtual-scroller,.any-component.sc-any-virtual-scroller *.sc-any-virtual-scroller *.sc-any-virtual-scroller{-webkit-box-sizing:border-box;box-sizing:border-box}.any-element.any-element-flex.sc-any-virtual-scroller{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}.any-corner-all.sc-any-virtual-scroller{-moz-border-radius:var(--borderRadius);-webkit-border-radius:var(--borderRadius);border-radius:var(--borderRadius)}.any-corner-right.sc-any-virtual-scroller{-moz-border-radius-topright:var(--borderRadius);-webkit-border-top-right-radius:var(--borderRadius);border-top-right-radius:var(--borderRadius);-moz-border-radius-bottomright:var(--borderRadius);-webkit-border-bottom-right-radius:var(--borderRadius);border-bottom-right-radius:var(--borderRadius)}.any-shadow.sc-any-virtual-scroller{-webkit-box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.3);box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.3)}.any-disabled.sc-any-virtual-scroller,.any-disabled.sc-any-virtual-scroller *.sc-any-virtual-scroller{cursor:default !important;pointer-events:none}.any-checkbox-disabled.sc-any-virtual-scroller{cursor:default !important;pointer-events:none}.any-disabled.sc-any-virtual-scroller,.any-component.sc-any-virtual-scroller:disabled{opacity:var(--disabledOpacity)}.iconify.sc-any-virtual-scroller{font-size:var(--anyIconFontSize);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.growDown-animation.sc-any-virtual-scroller{-webkit-animation:growDown 125ms ease-in-out forwards;animation:growDown 125ms ease-in-out forwards}.growUp-animation.sc-any-virtual-scroller{-webkit-animation:growUp 125ms ease-in-out forwards;animation:growUp 125ms ease-in-out forwards}.rotateYDown-animation.sc-any-virtual-scroller{-webkit-animation:rotateYDown 125ms ease-in-out forwards;animation:rotateYDown 125ms ease-in-out forwards}.rotateYUp-animation.sc-any-virtual-scroller{-webkit-animation:rotateYUp 125ms ease-in-out forwards;animation:rotateYUp 125ms ease-in-out forwards}.fadeIn-animation.sc-any-virtual-scroller{-webkit-animation:fadeIn 80ms ease-in-out forwards;animation:fadeIn 80ms ease-in-out forwards}.fadeOut-animation.sc-any-virtual-scroller{-webkit-animation:fadeOut 80ms ease-in-out forwards;animation:fadeOut 80ms ease-in-out forwards}.slideUpFadeOut-animation.direction-up.sc-any-virtual-scroller{-webkit-animation:slideUpFadeOut 200ms ease-in-out forwards;animation:slideUpFadeOut 200ms ease-in-out forwards}.slideUpFadeOut-animation.direction-down.sc-any-virtual-scroller{-webkit-animation:slideDownFadeOut 200ms ease-in-out forwards;animation:slideDownFadeOut 200ms ease-in-out forwards}.slideDownFadeIn-animation.direction-down.sc-any-virtual-scroller{-webkit-animation:slideDownFadeIn 200ms ease-in-out forwards;animation:slideDownFadeIn 200ms ease-in-out forwards}.slideDownFadeIn-animation.direction-up.sc-any-virtual-scroller{-webkit-animation:slideUpFadeIn 200ms ease-in-out forwards;animation:slideUpFadeIn 200ms ease-in-out forwards}.direction-down.sc-any-virtual-scroller{-webkit-transform-origin:top center;transform-origin:top center}.direction-up.sc-any-virtual-scroller{-webkit-transform-origin:bottom center;transform-origin:bottom center}.any-field.sc-any-virtual-scroller>label.sc-any-virtual-scroller{display:inline-block;margin-bottom:0.5rem;margin-right:0.5rem}.any-hidden-accessible.sc-any-virtual-scroller{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.any-spin.sc-any-virtual-scroller{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.any-ml-2.sc-any-virtual-scroller{margin-left:0.5rem !important}.any-mr-2.sc-any-virtual-scroller{margin-right:0.5rem !important}.any-mr-4.sc-any-virtual-scroller{margin-right:1.5rem !important}.any-text-bold.sc-any-virtual-scroller{font-weight:700 !important}.hidden.sc-any-virtual-scroller{display:none !important}.gap-0.sc-any-virtual-scroller{gap:0rem !important}.gap-1.sc-any-virtual-scroller{gap:0.25rem !important}.gap-2.sc-any-virtual-scroller{gap:0.5rem !important}.gap-3.sc-any-virtual-scroller{gap:1rem !important}.gap-4.sc-any-virtual-scroller{gap:1.5rem !important}.gap-5.sc-any-virtual-scroller{gap:2rem !important}.gap-6.sc-any-virtual-scroller{gap:3rem !important}.gap-7.sc-any-virtual-scroller{gap:4rem !important}.gap-8.sc-any-virtual-scroller{gap:5rem !important}.sc-any-virtual-scroller-h .clusterize-scroll.sc-any-virtual-scroller{max-height:100%}.sc-any-virtual-scroller-h .any-virtualscroller.sc-any-virtual-scroller .any-virtualscroller-header.sc-any-virtual-scroller{background:var(--surface-b);color:var(--text-color);border:solid var(--surface-d);border-width:1px 0 0 0;padding:1rem 1rem;font-weight:600}";var f=t("any_virtual_scroller",function(){function t(t){e(this,t);this.scrollingProgress=r(this,"scrollingProgress",7);this.clusterChanged=r(this,"clusterChanged",7);this.clusterWillChange=r(this,"clusterWillChange",7);this.aOnLazyLoad=r(this,"aOnLazyLoad",7);this.aOnItemClick=r(this,"aOnItemClick",7);this.clusterize=null;this.rows=[];this.instanceUuid="";this.rowsInBlock=10;this.blocksInCluster=4;this.first=0;this.firstInitCluster=false;this.items=[];this.scrollerHeight=null;this.itemSize=null;this.lazy=false;this.rowsPerPage=null;this.anyStyle=null;this.styleClass=null;this.itemTag="div";this.contentElemTag="div";this.noDataText="No Data";this.delay=250;this.contentElemClass=null;this.scrollElemClass=null;this.itemElemClass=null}t.prototype.handleWindowResize=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.checkAndLoadIfVisible()];case 1:t.sent();return[2]}}))}))};t.prototype.itemsChanged=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,r,a;return __generator(this,(function(n){switch(n.label){case 0:if(!this.clusterize)return[3,2];t=this.element.querySelector('[slot="item"]').cloneNode(true);e=null;r=null;if(this.lazy){e=this.element.querySelector('[slot="loadingItem"]').cloneNode(true);r=e.outerHTML}a=[];return[4,i(this.itemTag,this.items,this.itemSize,t.outerHTML,null,null,this.itemElemClass,r)];case 1:a=n.sent();this.clusterize.update(a);this.clusterize.refresh(true);n.label=2;case 2:return[2]}}))}))};t.prototype.connectedCallback=function(){this.instanceUuid=l();if(!this.rowsPerPage){this.rowsPerPage=this.rowsInBlock*this.blocksInCluster}else{this.rowsInBlock=this.rowsPerPage/this.blocksInCluster}};t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.hasHeaderSlot=!!this.element.querySelector('[slot="header"]');return[2]}))}))};t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.checkAndLoadIfVisible()];case 1:t.sent();return[2]}}))}))};t.prototype.checkAndLoadIfVisible=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,r,a;var n=this;return __generator(this,(function(s){t=null;e=this.element.querySelector("#any-virtualscroller-content-"+this.instanceUuid);r=function(){return __awaiter(n,void 0,void 0,(function(){var r;var n=this;return __generator(this,(function(s){switch(s.label){case 0:return[4,this.isElementVisible(e)];case 1:r=s.sent();if(r&&this.items.length>0){clearInterval(a);if(t)clearTimeout(t);t=setTimeout((function(){return __awaiter(n,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:if(this.clusterize)this.clusterize.clear();return[4,this.loadVirtual()];case 1:t.sent();return[2]}}))}))}))}return[2]}}))}))};a=setInterval(r,1e3);r();return[2]}))}))};t.prototype.isElementVisible=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return[2,new Promise((function(e){var r={root:null,rootMargin:"0px",threshold:0};var a=new IntersectionObserver((function(t){if(t[0].isIntersecting){a.disconnect();e(true)}}),r);a.observe(t)}))]}))}))};t.prototype.loadVirtual=function(){return __awaiter(this,void 0,void 0,(function(){var t,e,r,a;var n=this;return __generator(this,(function(s){switch(s.label){case 0:t=this.element.querySelector('[slot="item"]').cloneNode(true);if(this.lazy){t=this.element.querySelector('[slot="loadingItem"]').cloneNode(true)}e=this;return[4,i(this.itemTag,this.items,this.itemSize,t.outerHTML,0,this.rowsInBlock*this.blocksInCluster,this.itemElemClass)];case 1:e.rows=s.sent();this.initClusterize();r=this;return[4,i(this.itemTag,this.items,this.itemSize,t.outerHTML,this.rowsInBlock*this.blocksInCluster,null,this.itemElemClass)];case 2:r.rows=s.sent();if(this.clusterize){this.clusterize.append(this.rows);this.clusterize.refresh(true)}a=this.element.querySelector("#any-virtualscroller-scroll-"+this.instanceUuid);c(a,(function(){if(n.lazy){n.aOnLazyLoad.emit({first:n.first,rows:n.rowsPerPage})}}),this.delay);return[2]}}))}))};t.prototype.initClusterize=function(){var t=this;this.clusterize=new u({rows:this.rows,scrollElem:this.element.querySelector("#any-virtualscroller-scroll-"+this.instanceUuid),contentElem:this.element.querySelector("#any-virtualscroller-content-"+this.instanceUuid),rows_in_block:this.rowsInBlock,blocks_in_cluster:this.blocksInCluster,tag:this.itemTag,no_data_text:this.noDataText,callbacks:{clusterChanged:function(){var e=t.element.querySelector("#any-virtualscroller-content-"+t.instanceUuid);var r=e.getElementsByClassName("any-virtual-scroll-item")[0];t.defineVscrollItemClick();if(r)t.first=parseInt(r.getAttribute("data-index"));t.clusterChanged.emit({first:t.first,rows:t.rowsPerPage})},clusterWillChange:function(){var e=t.first+t.rowsPerPage>=t.items.length?t.items.length-1:t.first+t.rowsPerPage;t.clusterWillChange.emit({next:e,rows:t.rowsPerPage});if(!t.firstInitCluster&&t.lazy){t.aOnLazyLoad.emit({first:t.first,rows:t.rowsPerPage})}},scrollingProgress:function(e){t.scrollingProgress.emit({progress:e})}}});this.firstInitCluster=true};t.prototype.defineVscrollItemClick=function(){var t=this;var e=this.element.querySelectorAll(".any-virtual-scroll-item");for(var r=0;r<e.length;r++){var a=e[r];a.onclick=function(e){var r=this;t.aOnItemClick.emit({originalEvent:e,index:parseInt(r.getAttribute("data-index"))})}}};t.prototype.render=function(){return a(n,null,a("div",{class:"any-element"},a("div",{style:{display:"none"}},a("slot",{name:"item"}),a("slot",{name:"loadingItem"})),a("div",{class:"any-component any-virtualscroller"+(this.styleClass?" "+this.styleClass:""),style:this.anyStyle},this.hasHeaderSlot&&a("div",{class:"any-virtualscroller-header"},a("slot",{name:"header"})),a("div",{id:"any-virtualscroller-scroll-"+this.instanceUuid,class:"any-virtualscroller-scroll clusterize-scroll",style:{height:this.scrollerHeight}},a(this.contentElemTag,{id:"any-virtualscroller-content-"+this.instanceUuid,class:"any-virtualscroller-content clusterize-content"+this.contentElemClass?" "+this.contentElemClass:""},a(this.itemTag,{class:"clusterize-no-data",anyStyle:{zIndex:100}}))),a("div",{class:"any-virtualscroller-footer"},a("slot",{name:"footer"})))))};Object.defineProperty(t.prototype,"element",{get:function(){return s(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{items:["itemsChanged"]}},enumerable:false,configurable:true});return t}());f.style=m}}}));