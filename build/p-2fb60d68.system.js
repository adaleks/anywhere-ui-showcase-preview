System.register([],(function(t){"use strict";return{execute:function(){var n=function(){function t(){}t.addClass=function(t,n){if(t.classList)t.classList.add(n);else t.className+=" "+n};t.addMultipleClasses=function(t,n){if(t.classList){var e=n.trim().split(" ");for(var r=0;r<e.length;r++){t.classList.add(e[r])}}else{var e=n.split(" ");for(var r=0;r<e.length;r++){t.className+=" "+e[r]}}};t.removeClass=function(t,n){if(t.classList)t.classList.remove(n);else t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};t.hasClass=function(t,n){if(t.classList)return t.classList.contains(n);else return new RegExp("(^| )"+n+"( |$)","gi").test(t.className)};t.siblings=function(t){return Array.prototype.filter.call(t.parentNode.children,(function(n){return n!==t}))};t.find=function(t,n){return Array.from(t.querySelectorAll(n))};t.findSingle=function(t,n){if(t){return t.querySelector(n)}return null};t.index=function(t){var n=t.parentNode.childNodes;var e=0;for(var r=0;r<n.length;r++){if(n[r]==t)return e;if(n[r].nodeType==1)e++}return-1};t.indexWithinGroup=function(t,n){var e=t.parentNode?t.parentNode.childNodes:[];var r=0;for(var o=0;o<e.length;o++){if(e[o]==t)return r;if(e[o].attributes&&e[o].attributes[n]&&e[o].nodeType==1)r++}return-1};t.relativePosition=function(t,n){var e=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t);var r=n.offsetHeight;var o=n.getBoundingClientRect();var i=this.getViewport();var a,u;if(o.top+r+e.height>i.height){a=-1*e.height;t.style.transformOrigin="bottom";if(o.top+a<0){a=-1*o.top}}else{a=r;t.style.transformOrigin="top"}if(e.width>i.width){u=o.left*-1}else if(o.left+e.width>i.width){u=(o.left+e.width-i.width)*-1}else{u=0}t.style.top=a+"px";t.style.left=u+"px"};t.absolutePosition=function(t,n){var e=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t);var r=e.height;var o=e.width;var i=n.offsetHeight;var a=n.offsetWidth;var u=n.getBoundingClientRect();var l=this.getWindowScrollTop();var f=this.getWindowScrollLeft();var d=this.getViewport();var s,v;if(u.top+i+r>d.height){s=u.top+l-r;t.style.transformOrigin="bottom";if(s<0){s=l}}else{s=i+u.top+l;t.style.transformOrigin="top"}if(u.left+o>d.width)v=Math.max(0,u.left+f+a-o);else v=u.left+f;t.style.top=s+"px";t.style.left=v+"px"};t.getParents=function(t,n){if(n===void 0){n=[]}return t["parentNode"]===null?n:this.getParents(t.parentNode,n.concat([t.parentNode]))};t.getScrollableParents=function(t){var n=[];if(t){var e=this.getParents(t);var r=/(auto|scroll)/;var o=function(t){var n=window["getComputedStyle"](t,null);return r.test(n.getPropertyValue("overflow"))||r.test(n.getPropertyValue("overflowX"))||r.test(n.getPropertyValue("overflowY"))};for(var i=0,a=e;i<a.length;i++){var u=a[i];var l=u.nodeType===1&&u.dataset["scrollselectors"];if(l){var f=l.split(",");for(var d=0,s=f;d<s.length;d++){var v=s[d];var c=this.findSingle(u,v);if(c&&o(c)){n.push(c)}}}if(u.nodeType!==9&&o(u)){n.push(u)}}}return n};t.getHiddenElementOuterHeight=function(t){t.style.visibility="hidden";t.style.display="block";var n=t.offsetHeight;t.style.display="none";t.style.visibility="visible";return n};t.getHiddenElementOuterWidth=function(t){t.style.visibility="hidden";t.style.display="block";var n=t.offsetWidth;t.style.display="none";t.style.visibility="visible";return n};t.getHiddenElementDimensions=function(t){var n={};t.style.visibility="hidden";t.style.display="block";n.width=t.offsetWidth;n.height=t.offsetHeight;t.style.display="none";t.style.visibility="visible";return n};t.scrollInView=function(t,n){var e=getComputedStyle(t).getPropertyValue("borderTopWidth");var r=e?parseFloat(e):0;var o=getComputedStyle(t).getPropertyValue("paddingTop");var i=o?parseFloat(o):0;var a=t.getBoundingClientRect();var u=n.getBoundingClientRect();var l=u.top+document.body.scrollTop-(a.top+document.body.scrollTop)-r-i;var f=t.scrollTop;var d=t.clientHeight;var s=this.getOuterHeight(n);if(l<0){t.scrollTop=f+l}else if(l+s>d){t.scrollTop=f+l-d+s}};t.fadeIn=function(t,n){t.style.opacity=0;var e=+new Date;var r=0;var o=function(){r=+t.style.opacity.replace(",",".")+((new Date).getTime()-e)/n;t.style.opacity=r;e=+new Date;if(+r<1){window.requestAnimationFrame&&requestAnimationFrame(o)||setTimeout(o,16)}};o()};t.fadeOut=function(t,n){var e=1,r=50,o=n,i=r/o;var a=setInterval((function(){e=e-i;if(e<=0){e=0;clearInterval(a)}t.style.opacity=e}),r)};t.getWindowScrollTop=function(){var t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)};t.getWindowScrollLeft=function(){var t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)};t.matches=function(t,n){var e=Element.prototype;var r=e["matches"]||e.webkitMatchesSelector||e["mozMatchesSelector"]||e["msMatchesSelector"]||function(t){return[].indexOf.call(document.querySelectorAll(t),this)!==-1};return r.call(t,n)};t.getOuterWidth=function(t,n){var e=t===null||t===void 0?void 0:t.offsetWidth;if(n){var r=getComputedStyle(t);e+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return e};t.getHorizontalPadding=function(t){var n=getComputedStyle(t);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)};t.getHorizontalMargin=function(t){var n=getComputedStyle(t);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)};t.innerWidth=function(t){var n=t.offsetWidth;var e=getComputedStyle(t);n+=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight);return n};t.width=function(t){var n=t.offsetWidth;var e=getComputedStyle(t);n-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight);return n};t.getInnerHeight=function(t){var n=t.offsetHeight;var e=getComputedStyle(t);n+=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom);return n};t.getOuterHeight=function(t,n){var e=t===null||t===void 0?void 0:t.offsetHeight;if(n){var r=getComputedStyle(t);e+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return e};t.getHeight=function(t){var n=t.offsetHeight;var e=getComputedStyle(t);n-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth);return n};t.getWidth=function(t){var n=t.offsetWidth;var e=getComputedStyle(t);n-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth);return n};t.getViewport=function(){var t=window,n=document,e=n.documentElement,r=n.getElementsByTagName("body")[0],o=t.innerWidth||e.clientWidth||r.clientWidth,i=t.innerHeight||e.clientHeight||r.clientHeight;return{width:o,height:i}};t.getOffset=function(t){var n=t.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}};t.replaceElementWith=function(t,n){var e=t.parentNode;if(!e)throw"Can't replace element";return e.replaceChild(n,t)};t.getUserAgent=function(){return navigator.userAgent};t.isIE=function(){var t=window.navigator.userAgent;var n=t.indexOf("MSIE ");if(n>0){return true}var e=t.indexOf("Trident/");if(e>0){return true}var r=t.indexOf("Edge/");if(r>0){return true}return false};t.isIOS=function(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window["MSStream"]};t.isAndroid=function(){return/(android)/i.test(navigator.userAgent)};t.isTouchDevice=function(){return"ontouchstart"in window||navigator.maxTouchPoints>0};t.appendChild=function(t,n){if(this.isElement(n))n.appendChild(t);else if(n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(t);else throw"Cannot append "+n+" to "+t};t.removeChild=function(t,n){if(this.isElement(n))n.removeChild(t);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+n};t.removeElement=function(t){if(!("remove"in Element.prototype))t.parentNode.removeChild(t);else t.remove()};t.isElement=function(t){return typeof HTMLElement==="object"?t instanceof HTMLElement:t&&typeof t==="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName==="string"};t.calculateScrollbarWidth=function(t){if(t){var n=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;var e=document.createElement("div");e.className="any-scrollbar-measure";document.body.appendChild(e);var r=e.offsetWidth-e.clientWidth;document.body.removeChild(e);this.calculatedScrollbarWidth=r;return r}};t.calculateScrollbarHeight=function(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;var t=document.createElement("div");t.className="any-scrollbar-measure";document.body.appendChild(t);var n=t.offsetHeight-t.clientHeight;document.body.removeChild(t);this.calculatedScrollbarWidth=n;return n};t.invokeElementMethod=function(t,n,e){t[n].apply(t,e)};t.clearSelection=function(){if(window.getSelection){if(window.getSelection().empty){window.getSelection().empty()}else if(window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0){window.getSelection().removeAllRanges()}}else if(document["selection"]&&document["selection"].empty){try{document["selection"].empty()}catch(t){}}};t.getBrowser=function(){if(!this.browser){var t=this.resolveUserAgent();this.browser={};if(t.browser){this.browser[t.browser]=true;this.browser["version"]=t.version}if(this.browser["chrome"]){this.browser["webkit"]=true}else if(this.browser["webkit"]){this.browser["safari"]=true}}return this.browser};t.resolveUserAgent=function(){var t=navigator.userAgent.toLowerCase();var n=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:n[1]||"",version:n[2]||"0"}};t.isInteger=function(t){if(Number.isInteger){return Number.isInteger(t)}else{return typeof t==="number"&&isFinite(t)&&Math.floor(t)===t}};t.isHidden=function(t){return t.offsetParent===null};t.isVisible=function(t){return t&&t.offsetParent!=null};t.getFocusableElements=function(n){var e=t.find(n,'button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),\n                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),\n                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),\n                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]), [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]),\n                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden]:not(.any-disabled))');var r=[];for(var o=0,i=e;o<i.length;o++){var a=i[o];if(getComputedStyle(a).display!="none"&&getComputedStyle(a).visibility!="hidden")r.push(a)}return r};t.generateZIndex=function(){this.zindex=this.zindex||999;return++this.zindex};return t}();t("D",n);n.zindex=1e3;n.calculatedScrollbarWidth=null;n.calculatedScrollbarHeight=null}}}));