var __awaiter=this&&this.__awaiter||function(t,r,a,e){function n(t){return t instanceof a?t:new a((function(r){r(t)}))}return new(a||(a=Promise))((function(a,i){function s(t){try{l(e.next(t))}catch(t){i(t)}}function o(t){try{l(e["throw"](t))}catch(t){i(t)}}function l(t){t.done?a(t.value):n(t.value).then(s,o)}l((e=e.apply(t,r||[])).next())}))};var __generator=this&&this.__generator||function(t,r){var a={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},e,n,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(t){return function(r){return l([t,r])}}function l(o){if(e)throw new TypeError("Generator is already executing.");while(s&&(s=0,o[0]&&(a=0)),a)try{if(e=1,n&&(i=o[0]&2?n["return"]:o[0]?n["throw"]||((i=n["return"])&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;if(n=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:a.label++;return{value:o[1],done:false};case 5:a.label++;n=o[1];o=[0];continue;case 7:o=a.ops.pop();a.trys.pop();continue;default:if(!(i=a.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){a=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(o[0]===6&&a.label<i[1]){a.label=i[1];i=o;break}if(i&&a.label<i[2]){a.label=i[2];a.ops.push(o);break}if(i[2])a.ops.pop();a.trys.pop();continue}o=r.call(t,a)}catch(t){o=[6,t];n=0}finally{e=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-1e3134cd.system.js","./p-3a73b8b5.system.js","./p-b2a1d771.system.js"],(function(t){"use strict";var r,a,e,n,i,s,o,l,c;return{setters:[function(t){r=t.r;a=t.c;e=t.h;n=t.H;i=t.g},function(t){s=t.c},function(t){o=t.g;l=t.u;c=t.s}],execute:function(){var u=s((function(t){(function(r,a){t.exports=a()})("Clusterize",(function(){var t=function(){for(var t=3,r=document.createElement("b"),a=r.all||[];r.innerHTML="\x3c!--[if gt IE "+ ++t+"]><i><![endif]--\x3e",a[0];){}return t>4?t:document.documentMode}(),r=navigator.platform.toLowerCase().indexOf("mac")+1;var a=function(t){if(!(this instanceof a))return new a(t);var s=this;var o={rows_in_block:50,blocks_in_cluster:4,tag:null,show_no_data_row:true,no_data_class:"clusterize-no-data",no_data_text:"No data",keep_parity:true,callbacks:{}};s.options={};var l=["rows_in_block","blocks_in_cluster","show_no_data_row","no_data_class","no_data_text","keep_parity","tag","callbacks"];for(var c=0,u;u=l[c];c++){s.options[u]=typeof t[u]!="undefined"&&t[u]!=null?t[u]:o[u]}var f=["scroll","content"];for(var c=0,m;m=f[c];c++){s[m+"_elem"]=t[m+"Id"]?document.getElementById(t[m+"Id"]):t[m+"Elem"];if(!s[m+"_elem"])throw new Error("Error! Could not find "+m+" element")}if(!s.content_elem.hasAttribute("tabindex"))s.content_elem.setAttribute("tabindex",0);var d=i(t.rows)?t.rows:s.fetchMarkup(),h={},w=s.scroll_elem.scrollTop;s.insertToDOM(d,h);s.scroll_elem.scrollTop=w;var v=false,y=0,b=false,p=function(){if(r){if(!b)s.content_elem.style.pointerEvents="none";b=true;clearTimeout(y);y=setTimeout((function(){s.content_elem.style.pointerEvents="auto";b=false}),50)}if(v!=(v=s.getClusterNum(d)))s.insertToDOM(d,h);if(s.options.callbacks.scrollingProgress)s.options.callbacks.scrollingProgress(s.getScrollProgress())},g=0,k=function(){clearTimeout(g);g=setTimeout(s.refresh,100)};e("scroll",s.scroll_elem,p);e("resize",window,k);s.destroy=function(t){n("scroll",s.scroll_elem,p);n("resize",window,k);s.html((t?s.generateEmptyRow():d).join(""))};s.refresh=function(t){if(s.getRowsHeight(d)||t)s.update(d)};s.update=function(t){d=i(t)?t:[];var r=s.scroll_elem.scrollTop;if(d.length*s.options.item_height<r){s.scroll_elem.scrollTop=0;v=0}s.insertToDOM(d,h);s.scroll_elem.scrollTop=r};s.clear=function(){s.update([])};s.getRowsAmount=function(){return d.length};s.getScrollProgress=function(){return this.options.scroll_top/(d.length*this.options.item_height)*100||0};var Y=function(t,r){var a=i(r)?r:[];if(!a.length)return;d=t=="append"?d.concat(a):a.concat(d);s.insertToDOM(d,h)};s.append=function(t){Y("append",t)};s.prepend=function(t){Y("prepend",t)}};a.prototype={constructor:a,fetchMarkup:function(){var t=[],r=this.getChildNodes(this.content_elem);while(r.length){t.push(r.shift().outerHTML)}return t},exploreEnvironment:function(r,a){var e=this.options;e.content_tag=this.content_elem.tagName.toLowerCase();if(!r.length)return;if(t&&t<=9&&!e.tag)e.tag=r[0].match(/<([^>\s/]*)/)[1].toLowerCase();if(this.content_elem.children.length<=1)a.data=this.html(r[0]+r[0]+r[0]);if(!e.tag)e.tag=this.content_elem.children[0].tagName.toLowerCase();this.getRowsHeight(r)},getRowsHeight:function(t){var r=this.options,a=r.item_height;r.cluster_height=0;if(!t.length)return;var e=this.content_elem.children;if(!e.length)return;var n=e[Math.floor(e.length/2)];r.item_height=n.offsetHeight;if(r.tag=="tr"&&s("borderCollapse",this.content_elem)!="collapse")r.item_height+=parseInt(s("borderSpacing",this.content_elem),10)||0;if(r.tag!="tr"){var i=parseInt(s("marginTop",n),10)||0;var o=parseInt(s("marginBottom",n),10)||0;r.item_height+=Math.max(i,o)}r.block_height=r.item_height*r.rows_in_block;r.rows_in_cluster=r.blocks_in_cluster*r.rows_in_block;r.cluster_height=r.blocks_in_cluster*r.block_height;return a!=r.item_height},getClusterNum:function(t){var r=this.options;r.scroll_top=this.scroll_elem.scrollTop;var a=r.cluster_height-r.block_height;var e=Math.floor(r.scroll_top/a);var n=Math.floor(t.length*r.item_height/a);return Math.min(e,n)},generateEmptyRow:function(){var t=this.options;if(!t.tag||!t.show_no_data_row)return[];var r=document.createElement(t.tag),a=document.createTextNode(t.no_data_text),e;r.className=t.no_data_class;if(t.tag=="tr"){e=document.createElement("td");e.colSpan=100;e.appendChild(a)}r.appendChild(e||a);return[r.outerHTML]},generate:function(t){var r=this.options,a=t.length;if(a<r.rows_in_block){return{top_offset:0,bottom_offset:0,rows_above:0,rows:a?t:this.generateEmptyRow()}}var e=Math.max((r.rows_in_cluster-r.rows_in_block)*this.getClusterNum(t),0),n=e+r.rows_in_cluster,i=Math.max(e*r.item_height,0),s=Math.max((a-n)*r.item_height,0),o=[],l=e;if(i<1){l++}for(var c=e;c<n;c++){t[c]&&o.push(t[c])}return{top_offset:i,bottom_offset:s,rows_above:l,rows:o}},renderExtraTag:function(t,r){var a=document.createElement(this.options.tag),e="clusterize-";a.className=[e+"extra-row",e+t].join(" ");r&&(a.style.height=r+"px");return a.outerHTML},insertToDOM:function(t,r){if(!this.options.cluster_height){this.exploreEnvironment(t,r)}var a=this.generate(t),e=a.rows.join(""),n=this.checkChanges("data",e,r),i=this.checkChanges("top",a.top_offset,r),s=this.checkChanges("bottom",a.bottom_offset,r),o=this.options.callbacks,l=[];if(n||i){if(a.top_offset){this.options.keep_parity&&l.push(this.renderExtraTag("keep-parity"));l.push(this.renderExtraTag("top-space",a.top_offset))}l.push(e);a.bottom_offset&&l.push(this.renderExtraTag("bottom-space",a.bottom_offset));o.clusterWillChange&&o.clusterWillChange();this.html(l.join(""));this.options.content_tag=="ol"&&this.content_elem.setAttribute("start",a.rows_above);this.content_elem.style["counter-increment"]="clusterize-counter "+(a.rows_above-1);o.clusterChanged&&o.clusterChanged()}else if(s){this.content_elem.lastChild.style.height=a.bottom_offset+"px"}},html:function(r){var a=this.content_elem;if(t&&t<=9&&this.options.tag=="tr"){var e=document.createElement("div"),n;e.innerHTML="<table><tbody>"+r+"</tbody></table>";while(n=a.lastChild){a.removeChild(n)}var i=this.getChildNodes(e.firstChild.firstChild);while(i.length){a.appendChild(i.shift())}}else{a.innerHTML=r}},getChildNodes:function(t){var r=t.children,a=[];for(var e=0,n=r.length;e<n;e++){a.push(r[e])}return a},checkChanges:function(t,r,a){var e=r!=a[t];a[t]=r;return e}};function e(t,r,a){return r.addEventListener?r.addEventListener(t,a,false):r.attachEvent("on"+t,a)}function n(t,r,a){return r.removeEventListener?r.removeEventListener(t,a,false):r.detachEvent("on"+t,a)}function i(t){return Object.prototype.toString.call(t)==="[object Array]"}function s(t,r){return window.getComputedStyle?window.getComputedStyle(r)[t]:r.currentStyle[t]}return a}))}));var f=".clusterize-scroll.sc-any-virtual-scroller{max-height:200px;overflow:auto}.clusterize-extra-row.sc-any-virtual-scroller{margin-top:0 !important;margin-bottom:0 !important}.clusterize-extra-row.clusterize-keep-parity.sc-any-virtual-scroller{display:none}.clusterize-content.sc-any-virtual-scroller{outline:0;counter-reset:clusterize-counter}.clusterize-no-data.sc-any-virtual-scroller td.sc-any-virtual-scroller{text-align:center}@-webkit-keyframes growDown{0%{-webkit-transform:scaleY(0);transform:scaleY(0)}80%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}100%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@keyframes growDown{0%{-webkit-transform:scaleY(0);transform:scaleY(0)}80%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}100%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@-webkit-keyframes growUp{0%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}80%{-webkit-transform:scaleY(1);transform:scaleY(1)}100%{-webkit-transform:scaleY(0);transform:scaleY(0)}}@keyframes growUp{0%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}80%{-webkit-transform:scaleY(1);transform:scaleY(1)}100%{-webkit-transform:scaleY(0);transform:scaleY(0)}}@-webkit-keyframes rotateYDown{0%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(0);transform:rotateY(0)}}@keyframes rotateYDown{0%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(0);transform:rotateY(0)}}@-webkit-keyframes rotateYUp{0%{-webkit-transform:rotateY(0);transform:rotateY(0)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}}@keyframes rotateYUp{0%{-webkit-transform:rotateY(0);transform:rotateY(0)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}}@-webkit-keyframes spin{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes fadeIn{0%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes fadeIn{0%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes fadeOut{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}100%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}}@keyframes fadeOut{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}100%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}}@-webkit-keyframes slideDownFadeIn{0%{-webkit-transform:translateY(-10px);transform:translateY(-10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes slideDownFadeIn{0%{-webkit-transform:translateY(-10px);transform:translateY(-10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@-webkit-keyframes slideDownFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}}@keyframes slideDownFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}}@-webkit-keyframes slideUpFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}}@keyframes slideUpFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}}@-webkit-keyframes slideUpFadeIn{0%{-webkit-transform:translateY(10px);transform:translateY(10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes slideUpFadeIn{0%{-webkit-transform:translateY(10px);transform:translateY(10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}*.sc-any-virtual-scroller{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.any-component.sc-any-virtual-scroller,.any-element.sc-any-virtual-scroller,.any-element.sc-any-virtual-scroller *.sc-any-virtual-scroller,.any-component.sc-any-virtual-scroller *.sc-any-virtual-scroller{font-family:var(--fontFamily);font-size:var(--fontSize);text-decoration:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-tap-highlight-color:transparent}.any-component.sc-any-virtual-scroller *.sc-any-virtual-scroller,.any-element.sc-any-virtual-scroller *.sc-any-virtual-scroller,.any-element.sc-any-virtual-scroller *.sc-any-virtual-scroller *.sc-any-virtual-scroller,.any-component.sc-any-virtual-scroller *.sc-any-virtual-scroller *.sc-any-virtual-scroller{-webkit-box-sizing:border-box;box-sizing:border-box}.any-element.any-element-flex.sc-any-virtual-scroller{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}.any-corner-all.sc-any-virtual-scroller{-moz-border-radius:var(--borderRadius);-webkit-border-radius:var(--borderRadius);border-radius:var(--borderRadius)}.any-corner-right.sc-any-virtual-scroller{-moz-border-radius-topright:var(--borderRadius);-webkit-border-top-right-radius:var(--borderRadius);border-top-right-radius:var(--borderRadius);-moz-border-radius-bottomright:var(--borderRadius);-webkit-border-bottom-right-radius:var(--borderRadius);border-bottom-right-radius:var(--borderRadius)}.any-shadow.sc-any-virtual-scroller{-webkit-box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.3);box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.3)}.any-disabled.sc-any-virtual-scroller,.any-disabled.sc-any-virtual-scroller *.sc-any-virtual-scroller{cursor:default !important;pointer-events:none}.any-checkbox-disabled.sc-any-virtual-scroller{cursor:default !important;pointer-events:none}.any-disabled.sc-any-virtual-scroller,.any-component.sc-any-virtual-scroller:disabled{opacity:var(--disabledOpacity)}.iconify.sc-any-virtual-scroller{font-size:var(--anyIconFontSize);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.growDown-animation.sc-any-virtual-scroller{-webkit-animation:growDown 125ms ease-in-out forwards;animation:growDown 125ms ease-in-out forwards}.growUp-animation.sc-any-virtual-scroller{-webkit-animation:growUp 125ms ease-in-out forwards;animation:growUp 125ms ease-in-out forwards}.rotateYDown-animation.sc-any-virtual-scroller{-webkit-animation:rotateYDown 125ms ease-in-out forwards;animation:rotateYDown 125ms ease-in-out forwards}.rotateYUp-animation.sc-any-virtual-scroller{-webkit-animation:rotateYUp 125ms ease-in-out forwards;animation:rotateYUp 125ms ease-in-out forwards}.fadeIn-animation.sc-any-virtual-scroller{-webkit-animation:fadeIn 80ms ease-in-out forwards;animation:fadeIn 80ms ease-in-out forwards}.fadeOut-animation.sc-any-virtual-scroller{-webkit-animation:fadeOut 80ms ease-in-out forwards;animation:fadeOut 80ms ease-in-out forwards}.slideUpFadeOut-animation.direction-up.sc-any-virtual-scroller{-webkit-animation:slideUpFadeOut 200ms ease-in-out forwards;animation:slideUpFadeOut 200ms ease-in-out forwards}.slideUpFadeOut-animation.direction-down.sc-any-virtual-scroller{-webkit-animation:slideDownFadeOut 200ms ease-in-out forwards;animation:slideDownFadeOut 200ms ease-in-out forwards}.slideDownFadeIn-animation.direction-down.sc-any-virtual-scroller{-webkit-animation:slideDownFadeIn 200ms ease-in-out forwards;animation:slideDownFadeIn 200ms ease-in-out forwards}.slideDownFadeIn-animation.direction-up.sc-any-virtual-scroller{-webkit-animation:slideUpFadeIn 200ms ease-in-out forwards;animation:slideUpFadeIn 200ms ease-in-out forwards}.direction-down.sc-any-virtual-scroller{-webkit-transform-origin:top center;transform-origin:top center}.direction-up.sc-any-virtual-scroller{-webkit-transform-origin:bottom center;transform-origin:bottom center}.any-field.sc-any-virtual-scroller>label.sc-any-virtual-scroller{display:inline-block;margin-bottom:0.5rem;margin-right:0.5rem}.any-hidden-accessible.sc-any-virtual-scroller{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.any-spin.sc-any-virtual-scroller{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.any-ml-2.sc-any-virtual-scroller{margin-left:0.5rem !important}.any-mr-2.sc-any-virtual-scroller{margin-right:0.5rem !important}.any-mr-4.sc-any-virtual-scroller{margin-right:1.5rem !important}.any-text-bold.sc-any-virtual-scroller{font-weight:700 !important}.hidden.sc-any-virtual-scroller{display:none !important}.gap-0.sc-any-virtual-scroller{gap:0rem !important}.gap-1.sc-any-virtual-scroller{gap:0.25rem !important}.gap-2.sc-any-virtual-scroller{gap:0.5rem !important}.gap-3.sc-any-virtual-scroller{gap:1rem !important}.gap-4.sc-any-virtual-scroller{gap:1.5rem !important}.gap-5.sc-any-virtual-scroller{gap:2rem !important}.gap-6.sc-any-virtual-scroller{gap:3rem !important}.gap-7.sc-any-virtual-scroller{gap:4rem !important}.gap-8.sc-any-virtual-scroller{gap:5rem !important}.sc-any-virtual-scroller-h .clusterize-scroll.sc-any-virtual-scroller{max-height:100%}.sc-any-virtual-scroller-h .any-virtualscroller.sc-any-virtual-scroller .any-virtualscroller-header.sc-any-virtual-scroller{background:var(--surface-b);color:var(--text-color);border:solid var(--surface-d);border-width:1px 0 0 0;padding:1rem 1rem;font-weight:600}";var m=t("any_virtual_scroller",function(){function t(t){r(this,t);this.scrollingProgress=a(this,"scrollingProgress",7);this.clusterChanged=a(this,"clusterChanged",7);this.clusterWillChange=a(this,"clusterWillChange",7);this.aOnLazyLoad=a(this,"aOnLazyLoad",7);this.aOnItemClick=a(this,"aOnItemClick",7);this.clusterize=null;this.rows=[];this.instanceUuid="";this.rowsInBlock=10;this.blocksInCluster=4;this.first=0;this.firstInitCluster=false;this.items=[];this.scrollerHeight=null;this.itemSize=null;this.lazy=false;this.rowsPerPage=null;this.anyStyle=null;this.styleClass=null;this.itemTag="div";this.contentElemTag="div";this.noDataText="No Data";this.delay=250;this.contentElemClass=null;this.scrollElemClass=null;this.itemElemClass=null}t.prototype.handleWindowResize=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.checkAndLoadIfVisible()];case 1:t.sent();return[2]}}))}))};t.prototype.itemsChanged=function(){return __awaiter(this,void 0,void 0,(function(){var t,r,a,e;return __generator(this,(function(n){switch(n.label){case 0:if(!this.clusterize)return[3,2];t=this.element.querySelector('[slot="item"]').cloneNode(true);r=null;a=null;if(this.lazy){r=this.element.querySelector('[slot="loadingItem"]').cloneNode(true);a=r.outerHTML}e=[];return[4,o(this.itemTag,this.items,this.itemSize,t.outerHTML,null,null,this.itemElemClass,a)];case 1:e=n.sent();this.clusterize.update(e);this.clusterize.refresh(true);n.label=2;case 2:return[2]}}))}))};t.prototype.connectedCallback=function(){this.instanceUuid=l();if(!this.rowsPerPage){this.rowsPerPage=this.rowsInBlock*this.blocksInCluster}else{this.rowsInBlock=this.rowsPerPage/this.blocksInCluster}};t.prototype.componentWillLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.hasHeaderSlot=!!this.element.querySelector('[slot="header"]');return[2]}))}))};t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.checkAndLoadIfVisible()];case 1:t.sent();return[2]}}))}))};t.prototype.checkAndLoadIfVisible=function(){return __awaiter(this,void 0,void 0,(function(){var t,r,a,e;var n=this;return __generator(this,(function(i){t=null;r=this.element.querySelector("#any-virtualscroller-content-"+this.instanceUuid);a=function(){return __awaiter(n,void 0,void 0,(function(){var a;var n=this;return __generator(this,(function(i){switch(i.label){case 0:return[4,this.isElementVisible(r)];case 1:a=i.sent();if(a&&this.items.length>0){clearInterval(e);if(t)clearTimeout(t);t=setTimeout((function(){return __awaiter(n,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:if(this.clusterize)this.clusterize.clear();return[4,this.loadVirtual()];case 1:t.sent();return[2]}}))}))}))}return[2]}}))}))};e=setInterval(a,1e3);a();return[2]}))}))};t.prototype.isElementVisible=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(r){return[2,new Promise((function(r){var a={root:null,rootMargin:"0px",threshold:0};var e=new IntersectionObserver((function(t){if(t[0].isIntersecting){e.disconnect();r(true)}}),a);e.observe(t)}))]}))}))};t.prototype.loadVirtual=function(){return __awaiter(this,void 0,void 0,(function(){var t,r,a,e;var n=this;return __generator(this,(function(i){switch(i.label){case 0:t=this.element.querySelector('[slot="item"]').cloneNode(true);if(this.lazy){t=this.element.querySelector('[slot="loadingItem"]').cloneNode(true)}r=this;return[4,o(this.itemTag,this.items,this.itemSize,t.outerHTML,0,this.rowsInBlock*this.blocksInCluster,this.itemElemClass)];case 1:r.rows=i.sent();this.initClusterize();a=this;return[4,o(this.itemTag,this.items,this.itemSize,t.outerHTML,this.rowsInBlock*this.blocksInCluster,null,this.itemElemClass)];case 2:a.rows=i.sent();if(this.clusterize){this.clusterize.append(this.rows);this.clusterize.refresh(true)}e=this.element.querySelector("#any-virtualscroller-scroll-"+this.instanceUuid);c(e,(function(){if(n.lazy){n.aOnLazyLoad.emit({first:n.first,rows:n.rowsPerPage})}}),this.delay);return[2]}}))}))};t.prototype.initClusterize=function(){var t=this;this.clusterize=new u({rows:this.rows,scrollElem:this.element.querySelector("#any-virtualscroller-scroll-"+this.instanceUuid),contentElem:this.element.querySelector("#any-virtualscroller-content-"+this.instanceUuid),rows_in_block:this.rowsInBlock,blocks_in_cluster:this.blocksInCluster,tag:this.itemTag,no_data_text:this.noDataText,callbacks:{clusterChanged:function(){var r=t.element.querySelector("#any-virtualscroller-content-"+t.instanceUuid);var a=r.getElementsByClassName("any-virtual-scroll-item")[0];t.defineVscrollItemClick();if(a)t.first=parseInt(a.getAttribute("data-index"));t.clusterChanged.emit({first:t.first,rows:t.rowsPerPage})},clusterWillChange:function(){var r=t.first+t.rowsPerPage>=t.items.length?t.items.length-1:t.first+t.rowsPerPage;t.clusterWillChange.emit({next:r,rows:t.rowsPerPage});if(!t.firstInitCluster&&t.lazy){t.aOnLazyLoad.emit({first:t.first,rows:t.rowsPerPage})}},scrollingProgress:function(r){t.scrollingProgress.emit({progress:r})}}});this.firstInitCluster=true};t.prototype.defineVscrollItemClick=function(){var t=this;var r=this.element.querySelectorAll(".any-virtual-scroll-item");for(var a=0;a<r.length;a++){var e=r[a];e.onclick=function(r){var a=this;t.aOnItemClick.emit({originalEvent:r,index:parseInt(a.getAttribute("data-index"))})}}};t.prototype.render=function(){return e(n,null,e("div",{class:"any-element"},e("div",{style:{display:"none"}},e("slot",{name:"item"}),e("slot",{name:"loadingItem"})),e("div",{class:"any-component any-virtualscroller"+(this.styleClass?" "+this.styleClass:""),style:this.anyStyle},this.hasHeaderSlot&&e("div",{class:"any-virtualscroller-header"},e("slot",{name:"header"})),e("div",{id:"any-virtualscroller-scroll-"+this.instanceUuid,class:"any-virtualscroller-scroll clusterize-scroll",style:{height:this.scrollerHeight}},e(this.contentElemTag,{id:"any-virtualscroller-content-"+this.instanceUuid,class:"any-virtualscroller-content clusterize-content"+this.contentElemClass?" "+this.contentElemClass:""},e(this.itemTag,{class:"clusterize-no-data",anyStyle:{zIndex:100}}))),e("div",{class:"any-virtualscroller-footer"},e("slot",{name:"footer"})))))};Object.defineProperty(t.prototype,"element",{get:function(){return i(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{items:["itemsChanged"]}},enumerable:false,configurable:true});return t}());m.style=f}}}));