import{r as a,h as t,g as o}from"./p-23ac7a3b.js";import{D as e}from"./p-3a178cc4.js";import{O as n}from"./p-b152c809.js";const s=class{constructor(t){a(this,t),this.currentDocIndex=-1,this.docs=void 0,this.apiDocs=void 0}componentDidLoad(){}loadComponents(){if(this.docs&&this.docs.length)for(let a=0;a<this.docs.length;a++)this.loadComponent(a);if(this.apiDocs&&this.apiDocs.length)for(let a=0;a<this.apiDocs.length;a++)this.loadApiDocComponent(a)}loadComponent(a){this.currentDocIndex=a;const t=this.docs[this.currentDocIndex],o=document.createElement(t.component);if(o.textId=t.id,o.textTitle=t.label,!t.component&&t.children)for(let a=0;a<t.children.length;a++){const o=t.children[a],e=document.createElement(o.component);e.textId=o.id,e.textTitle=o.label,e.docsectiontext&&0===a&&(e.docsectiontext.parentTitle=t.label,e.docsectiontext.parentId=t.id),this.element.appendChild(e)}this.element.appendChild(o)}loadApiDocComponent(a){this.currentDocIndex=a;const t=this.apiDocs[this.currentDocIndex];if(t&&t.children)for(let a=0;a<t.children.length;a++){const o=t.children[a];if(o.data&&o.data.length){const e=document.createElement(o.component);e.textId=o.id,e.anyId=o.id,e.description=o.description,e.data=o.data,e.label=o.label,e.relatedProp=o.relatedProp,0===a&&t.description&&(e.parentTitle=t.label,e.parentDescription=t.description,e.parentId=t.id),this.element.appendChild(e)}}}render(){return t("div",null,this.docs&&this.docs.length>0&&this.docs.map(((a,t)=>this.loadComponent(t))),this.apiDocs&&this.apiDocs.length>0&&this.apiDocs.map(((a,t)=>this.loadApiDocComponent(t))))}get element(){return o(this)}static get watchers(){return{docs:["loadComponents"],apiDocs:["loadComponents"]}}};s.style="@-webkit-keyframes growDown{0%{-webkit-transform:scaleY(0);transform:scaleY(0)}80%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}100%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@keyframes growDown{0%{-webkit-transform:scaleY(0);transform:scaleY(0)}80%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}100%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@-webkit-keyframes growUp{0%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}80%{-webkit-transform:scaleY(1);transform:scaleY(1)}100%{-webkit-transform:scaleY(0);transform:scaleY(0)}}@keyframes growUp{0%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}80%{-webkit-transform:scaleY(1);transform:scaleY(1)}100%{-webkit-transform:scaleY(0);transform:scaleY(0)}}@-webkit-keyframes rotateYDown{0%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(0);transform:rotateY(0)}}@keyframes rotateYDown{0%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(0);transform:rotateY(0)}}@-webkit-keyframes rotateYUp{0%{-webkit-transform:rotateY(0);transform:rotateY(0)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}}@keyframes rotateYUp{0%{-webkit-transform:rotateY(0);transform:rotateY(0)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}}@-webkit-keyframes spin{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes fadeIn{0%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes fadeIn{0%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes fadeOut{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}100%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}}@keyframes fadeOut{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}100%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}}@-webkit-keyframes slideDownFadeIn{0%{-webkit-transform:translateY(-10px);transform:translateY(-10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes slideDownFadeIn{0%{-webkit-transform:translateY(-10px);transform:translateY(-10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@-webkit-keyframes slideDownFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}}@keyframes slideDownFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}}@-webkit-keyframes slideUpFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}}@keyframes slideUpFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}}@-webkit-keyframes slideUpFadeIn{0%{-webkit-transform:translateY(10px);transform:translateY(10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes slideUpFadeIn{0%{-webkit-transform:translateY(10px);transform:translateY(10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}*.sc-app-docsection{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.any-component.sc-app-docsection,.any-element.sc-app-docsection,.any-element.sc-app-docsection *.sc-app-docsection,.any-component.sc-app-docsection *.sc-app-docsection{font-family:var(--fontFamily);font-size:var(--fontSize);text-decoration:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-tap-highlight-color:transparent}.any-component.sc-app-docsection *.sc-app-docsection,.any-element.sc-app-docsection *.sc-app-docsection,.any-element.sc-app-docsection *.sc-app-docsection *.sc-app-docsection,.any-component.sc-app-docsection *.sc-app-docsection *.sc-app-docsection{-webkit-box-sizing:border-box;box-sizing:border-box}.any-element.any-element-flex.sc-app-docsection{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}.any-corner-all.sc-app-docsection{-moz-border-radius:var(--borderRadius);-webkit-border-radius:var(--borderRadius);border-radius:var(--borderRadius)}.any-corner-right.sc-app-docsection{-moz-border-radius-topright:var(--borderRadius);-webkit-border-top-right-radius:var(--borderRadius);border-top-right-radius:var(--borderRadius);-moz-border-radius-bottomright:var(--borderRadius);-webkit-border-bottom-right-radius:var(--borderRadius);border-bottom-right-radius:var(--borderRadius)}.any-shadow.sc-app-docsection{-webkit-box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.3);box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.3)}.any-disabled.sc-app-docsection,.any-disabled.sc-app-docsection *.sc-app-docsection{cursor:default !important;pointer-events:none}.any-checkbox-disabled.sc-app-docsection{cursor:default !important;pointer-events:none}.any-disabled.sc-app-docsection,.any-component.sc-app-docsection:disabled{opacity:var(--disabledOpacity)}.iconify.sc-app-docsection{font-size:var(--anyIconFontSize);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.growDown-animation.sc-app-docsection{-webkit-animation:growDown 125ms ease-in-out forwards;animation:growDown 125ms ease-in-out forwards}.growUp-animation.sc-app-docsection{-webkit-animation:growUp 125ms ease-in-out forwards;animation:growUp 125ms ease-in-out forwards}.rotateYDown-animation.sc-app-docsection{-webkit-animation:rotateYDown 125ms ease-in-out forwards;animation:rotateYDown 125ms ease-in-out forwards}.rotateYUp-animation.sc-app-docsection{-webkit-animation:rotateYUp 125ms ease-in-out forwards;animation:rotateYUp 125ms ease-in-out forwards}.fadeIn-animation.sc-app-docsection{-webkit-animation:fadeIn 80ms ease-in-out forwards;animation:fadeIn 80ms ease-in-out forwards}.fadeOut-animation.sc-app-docsection{-webkit-animation:fadeOut 80ms ease-in-out forwards;animation:fadeOut 80ms ease-in-out forwards}.slideUpFadeOut-animation.direction-up.sc-app-docsection{-webkit-animation:slideUpFadeOut 200ms ease-in-out forwards;animation:slideUpFadeOut 200ms ease-in-out forwards}.slideUpFadeOut-animation.direction-down.sc-app-docsection{-webkit-animation:slideDownFadeOut 200ms ease-in-out forwards;animation:slideDownFadeOut 200ms ease-in-out forwards}.slideDownFadeIn-animation.direction-down.sc-app-docsection{-webkit-animation:slideDownFadeIn 200ms ease-in-out forwards;animation:slideDownFadeIn 200ms ease-in-out forwards}.slideDownFadeIn-animation.direction-up.sc-app-docsection{-webkit-animation:slideUpFadeIn 200ms ease-in-out forwards;animation:slideUpFadeIn 200ms ease-in-out forwards}.direction-down.sc-app-docsection{-webkit-transform-origin:top center;transform-origin:top center}.direction-up.sc-app-docsection{-webkit-transform-origin:bottom center;transform-origin:bottom center}.any-field.sc-app-docsection>label.sc-app-docsection{display:inline-block;margin-bottom:0.5rem;margin-right:0.5rem}.any-hidden-accessible.sc-app-docsection{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.any-spin.sc-app-docsection{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.any-ml-2.sc-app-docsection{margin-left:0.5rem !important}.any-mr-2.sc-app-docsection{margin-right:0.5rem !important}.any-mr-4.sc-app-docsection{margin-right:1.5rem !important}.any-text-bold.sc-app-docsection{font-weight:700 !important}.hidden.sc-app-docsection{display:none !important}.gap-0.sc-app-docsection{gap:0rem !important}.gap-1.sc-app-docsection{gap:0.25rem !important}.gap-2.sc-app-docsection{gap:0.5rem !important}.gap-3.sc-app-docsection{gap:1rem !important}.gap-4.sc-app-docsection{gap:1.5rem !important}.gap-5.sc-app-docsection{gap:2rem !important}.gap-6.sc-app-docsection{gap:3rem !important}.gap-7.sc-app-docsection{gap:4rem !important}.gap-8.sc-app-docsection{gap:5rem !important}.sc-app-docsection-h{display:block}.sc-app-docsection-h .doc-component.sc-app-docsection .doc-component-top.sc-app-docsection{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;margin:0 17rem 0 0;border-bottom:1px solid var(--surface-border);margin-bottom:2rem}.sc-app-docsection-h .doc-component.sc-app-docsection .doc-component-top.sc-app-docsection .app-demoactions.sc-app-docsection{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-top:1em}.sc-app-docsection-h .doc-tabmenu.sc-app-docsection{list-style:none;padding:0;display:-ms-flexbox;display:flex;margin-bottom:0}.sc-app-docsection-h .doc-tabmenu.sc-app-docsection li.sc-app-docsection{margin-bottom:-1px}.sc-app-docsection-h .doc-tabmenu.sc-app-docsection li.sc-app-docsection button.sc-app-docsection{background-color:transparent;border:0 none;display:block;padding:1rem 0;min-width:12rem;text-align:center;color:var(--text-color-secondary);font-size:1.125rem;letter-spacing:2px;cursor:pointer;margin:0;-webkit-transition:all 0.3s;transition:all 0.3s;border-bottom:1px solid transparent;border-top-right-radius:var(--border-round);border-top-left-radius:var(--border-round)}.sc-app-docsection-h .doc-tabmenu.sc-app-docsection li.sc-app-docsection button.sc-app-docsection:hover{border-bottom-color:var(--text-color)}.sc-app-docsection-h .doc-tabmenu.sc-app-docsection li.sc-app-docsection button.sc-app-docsection:focus{outline:0 none}.sc-app-docsection-h .doc-tabmenu.sc-app-docsection li.doc-tabmenu-active.sc-app-docsection button.sc-app-docsection{color:var(--primary-color);border-bottom-color:var(--primary-color)}.sc-app-docsection-h .doc-tabpanel.sc-app-docsection,.sc-app-docsection-h .doc.sc-app-docsection{display:-ms-flexbox;display:flex}.sc-app-docsection-h .doc-main.sc-app-docsection{-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;-ms-flex-preferred-size:0;flex-basis:0;min-width:0}.sc-app-docsection-h .doc-intro.sc-app-docsection{margin-bottom:2rem}.sc-app-docsection-h .doc-intro.sc-app-docsection p.sc-app-docsection{font-size:1.25rem;color:var(--surface-800)}.sc-app-docsection-h .layout-wrapper-light.sc-app-docsection .doc-section-description.sc-app-docsection>p.sc-app-docsection i.sc-app-docsection{background-color:var(--primary-100);color:var(--primary-900)}.sc-app-docsection-h .layout-wrapper-dark.sc-app-docsection .doc-section-description.sc-app-docsection>p.sc-app-docsection i.sc-app-docsection{background-color:var(--highlight-bg);color:var(--highlight-text-color)}.sc-app-docsection-h .doc-section-code-tooltip.sc-app-docsection .any-tooltip-text.sc-app-docsection{padding:0.5rem;font-size:11px}.sc-app-docsection-h{display:block}";const r=class{constructor(t){a(this,t),this.isScrollBlocked=!1,this.topbarHeight=0,this.docs=void 0,this.activeId=void 0}componentwillLoad(){clearTimeout(this.scrollInitTimer),this.scrollInitTimer=setTimeout((()=>{this.handleNavigation()}),500)}componentDidLoad(){clearTimeout(this.scrollInitTimer),this.scrollInitTimer=setTimeout((()=>{this.initScrollListener()}),500)}initScrollListener(){this.activeId=this.getCurrentHash(),this.scrollToLabelById(this.activeId)}removeFirstPartOfHash(a){var t=a.split("/");return t.length>=2?t[2]:a}getCurrentHash(){if("undefined"!=typeof window){const a=this.removeFirstPartOfHash(window.location.hash.substring(1));return n.isNotEmpty(a)?a:""}return""}handleNavigation(){this.getCurrentHash()&&this.initScrollListener()}onScroll(){if(!this.isScrollBlocked){const a=[...Array.from(document.querySelectorAll(":is(h1,h2,h3).doc-section-label"))].filter((a=>e.isVisible(a))),t=e.getWindowScrollTop();a.forEach((a=>{const{top:o}=e.getOffset(a);if(o-this.getThreshold(a)<=t){const t=e.findSingle(a,"a");this.activeId=t.id}}))}clearTimeout(this.scrollEndTimer),this.scrollEndTimer=setTimeout((()=>{this.isScrollBlocked=!1;const a=e.findSingle(this.element,".active-navbar-item");a&&a.scrollIntoView({block:"nearest",inline:"start"})}),50)}onChildButtonClick(a,t,o){this.onButtonClick(t?a:o)}onButtonClick(a){this.activeId=a.id,setTimeout((()=>{this.scrollToLabelById(a.id),this.isScrollBlocked=!0}),1)}getThreshold(a){if(!this.topbarHeight){const a=e.findSingle(document.body,".layout-topbar");this.topbarHeight=a?e.getHeight(a):0}return this.topbarHeight+3.5*e.getHeight(a)}scrollToLabelById(a){const t=document.getElementById(a);if(t){const o=t.parentElement,e=window.location.hash.split("/");e[2]?(e.splice(2),e.push(a),window.location.hash=e.join("/")):window.location.hash=window.location.hash+"/"+a,o&&o.scrollIntoView({block:"start",behavior:"smooth"})}}isActiveChildId(a,t,o,e){return this.getActiveChildId(t,a?e:o)}getActiveChildId(a,t){return!!a&&a.toLowerCase()===t.toLowerCase()}disconnectedCallback(){window.removeEventListener("scroll",this.scrollListener,!0)}render(){return t("ul",{class:"doc-section-nav"},this.docs&&this.docs.length>0&&this.docs.map((a=>this.renderNavItems(a))))}renderNavItems(a){if(!a.isInterface)return t("li",{class:{"navbar-item":!0,"active-navbar-item":this.activeId===a.id}},t("div",{class:"navbar-item-content"},t("button",{class:"any-link",onClick:()=>this.onButtonClick(a)},a.label)),a.children&&this.renderChildNavItems(a.children,a.id))}renderChildNavItems(a,o){return t("ul",null,a.map(((e,n)=>t("li",{class:{"navbar-item":!0,"active-navbar-item":this.isActiveChildId(0===n,this.activeId,e.id,o)}},t("div",{class:"navbar-item-content"},t("button",{class:"any-link",onClick:()=>this.onChildButtonClick(a[0],0===n,e)},e.label))))))}get element(){return o(this)}};r.style="@-webkit-keyframes growDown{0%{-webkit-transform:scaleY(0);transform:scaleY(0)}80%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}100%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@keyframes growDown{0%{-webkit-transform:scaleY(0);transform:scaleY(0)}80%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}100%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@-webkit-keyframes growUp{0%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}80%{-webkit-transform:scaleY(1);transform:scaleY(1)}100%{-webkit-transform:scaleY(0);transform:scaleY(0)}}@keyframes growUp{0%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}80%{-webkit-transform:scaleY(1);transform:scaleY(1)}100%{-webkit-transform:scaleY(0);transform:scaleY(0)}}@-webkit-keyframes rotateYDown{0%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(0);transform:rotateY(0)}}@keyframes rotateYDown{0%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(0);transform:rotateY(0)}}@-webkit-keyframes rotateYUp{0%{-webkit-transform:rotateY(0);transform:rotateY(0)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}}@keyframes rotateYUp{0%{-webkit-transform:rotateY(0);transform:rotateY(0)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}}@-webkit-keyframes spin{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes fadeIn{0%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes fadeIn{0%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes fadeOut{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}100%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}}@keyframes fadeOut{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}100%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}}@-webkit-keyframes slideDownFadeIn{0%{-webkit-transform:translateY(-10px);transform:translateY(-10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes slideDownFadeIn{0%{-webkit-transform:translateY(-10px);transform:translateY(-10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@-webkit-keyframes slideDownFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}}@keyframes slideDownFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}}@-webkit-keyframes slideUpFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}}@keyframes slideUpFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}}@-webkit-keyframes slideUpFadeIn{0%{-webkit-transform:translateY(10px);transform:translateY(10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes slideUpFadeIn{0%{-webkit-transform:translateY(10px);transform:translateY(10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}*.sc-app-docsection-nav{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.any-component.sc-app-docsection-nav,.any-element.sc-app-docsection-nav,.any-element.sc-app-docsection-nav *.sc-app-docsection-nav,.any-component.sc-app-docsection-nav *.sc-app-docsection-nav{font-family:var(--fontFamily);font-size:var(--fontSize);text-decoration:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-tap-highlight-color:transparent}.any-component.sc-app-docsection-nav *.sc-app-docsection-nav,.any-element.sc-app-docsection-nav *.sc-app-docsection-nav,.any-element.sc-app-docsection-nav *.sc-app-docsection-nav *.sc-app-docsection-nav,.any-component.sc-app-docsection-nav *.sc-app-docsection-nav *.sc-app-docsection-nav{-webkit-box-sizing:border-box;box-sizing:border-box}.any-element.any-element-flex.sc-app-docsection-nav{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}.any-corner-all.sc-app-docsection-nav{-moz-border-radius:var(--borderRadius);-webkit-border-radius:var(--borderRadius);border-radius:var(--borderRadius)}.any-corner-right.sc-app-docsection-nav{-moz-border-radius-topright:var(--borderRadius);-webkit-border-top-right-radius:var(--borderRadius);border-top-right-radius:var(--borderRadius);-moz-border-radius-bottomright:var(--borderRadius);-webkit-border-bottom-right-radius:var(--borderRadius);border-bottom-right-radius:var(--borderRadius)}.any-shadow.sc-app-docsection-nav{-webkit-box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.3);box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.3)}.any-disabled.sc-app-docsection-nav,.any-disabled.sc-app-docsection-nav *.sc-app-docsection-nav{cursor:default !important;pointer-events:none}.any-checkbox-disabled.sc-app-docsection-nav{cursor:default !important;pointer-events:none}.any-disabled.sc-app-docsection-nav,.any-component.sc-app-docsection-nav:disabled{opacity:var(--disabledOpacity)}.iconify.sc-app-docsection-nav{font-size:var(--anyIconFontSize);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.growDown-animation.sc-app-docsection-nav{-webkit-animation:growDown 125ms ease-in-out forwards;animation:growDown 125ms ease-in-out forwards}.growUp-animation.sc-app-docsection-nav{-webkit-animation:growUp 125ms ease-in-out forwards;animation:growUp 125ms ease-in-out forwards}.rotateYDown-animation.sc-app-docsection-nav{-webkit-animation:rotateYDown 125ms ease-in-out forwards;animation:rotateYDown 125ms ease-in-out forwards}.rotateYUp-animation.sc-app-docsection-nav{-webkit-animation:rotateYUp 125ms ease-in-out forwards;animation:rotateYUp 125ms ease-in-out forwards}.fadeIn-animation.sc-app-docsection-nav{-webkit-animation:fadeIn 80ms ease-in-out forwards;animation:fadeIn 80ms ease-in-out forwards}.fadeOut-animation.sc-app-docsection-nav{-webkit-animation:fadeOut 80ms ease-in-out forwards;animation:fadeOut 80ms ease-in-out forwards}.slideUpFadeOut-animation.direction-up.sc-app-docsection-nav{-webkit-animation:slideUpFadeOut 200ms ease-in-out forwards;animation:slideUpFadeOut 200ms ease-in-out forwards}.slideUpFadeOut-animation.direction-down.sc-app-docsection-nav{-webkit-animation:slideDownFadeOut 200ms ease-in-out forwards;animation:slideDownFadeOut 200ms ease-in-out forwards}.slideDownFadeIn-animation.direction-down.sc-app-docsection-nav{-webkit-animation:slideDownFadeIn 200ms ease-in-out forwards;animation:slideDownFadeIn 200ms ease-in-out forwards}.slideDownFadeIn-animation.direction-up.sc-app-docsection-nav{-webkit-animation:slideUpFadeIn 200ms ease-in-out forwards;animation:slideUpFadeIn 200ms ease-in-out forwards}.direction-down.sc-app-docsection-nav{-webkit-transform-origin:top center;transform-origin:top center}.direction-up.sc-app-docsection-nav{-webkit-transform-origin:bottom center;transform-origin:bottom center}.any-field.sc-app-docsection-nav>label.sc-app-docsection-nav{display:inline-block;margin-bottom:0.5rem;margin-right:0.5rem}.any-hidden-accessible.sc-app-docsection-nav{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.any-spin.sc-app-docsection-nav{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.any-ml-2.sc-app-docsection-nav{margin-left:0.5rem !important}.any-mr-2.sc-app-docsection-nav{margin-right:0.5rem !important}.any-mr-4.sc-app-docsection-nav{margin-right:1.5rem !important}.any-text-bold.sc-app-docsection-nav{font-weight:700 !important}.hidden.sc-app-docsection-nav{display:none !important}.gap-0.sc-app-docsection-nav{gap:0rem !important}.gap-1.sc-app-docsection-nav{gap:0.25rem !important}.gap-2.sc-app-docsection-nav{gap:0.5rem !important}.gap-3.sc-app-docsection-nav{gap:1rem !important}.gap-4.sc-app-docsection-nav{gap:1.5rem !important}.gap-5.sc-app-docsection-nav{gap:2rem !important}.gap-6.sc-app-docsection-nav{gap:3rem !important}.gap-7.sc-app-docsection-nav{gap:4rem !important}.gap-8.sc-app-docsection-nav{gap:5rem !important}.sc-app-docsection-nav-h{display:block}.sc-app-docsection-nav-h .doc-component.sc-app-docsection-nav .doc-component-top.sc-app-docsection-nav{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;margin:0 17rem 0 0;border-bottom:1px solid var(--surface-border);margin-bottom:2rem}.sc-app-docsection-nav-h .doc-component.sc-app-docsection-nav .doc-component-top.sc-app-docsection-nav .app-demoactions.sc-app-docsection-nav{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-top:1em}.sc-app-docsection-nav-h .doc-tabmenu.sc-app-docsection-nav{list-style:none;padding:0;display:-ms-flexbox;display:flex;margin-bottom:0}.sc-app-docsection-nav-h .doc-tabmenu.sc-app-docsection-nav li.sc-app-docsection-nav{margin-bottom:-1px}.sc-app-docsection-nav-h .doc-tabmenu.sc-app-docsection-nav li.sc-app-docsection-nav button.sc-app-docsection-nav{background-color:transparent;border:0 none;display:block;padding:1rem 0;min-width:12rem;text-align:center;color:var(--text-color-secondary);font-size:1.125rem;letter-spacing:2px;cursor:pointer;margin:0;-webkit-transition:all 0.3s;transition:all 0.3s;border-bottom:1px solid transparent;border-top-right-radius:var(--border-round);border-top-left-radius:var(--border-round)}.sc-app-docsection-nav-h .doc-tabmenu.sc-app-docsection-nav li.sc-app-docsection-nav button.sc-app-docsection-nav:hover{border-bottom-color:var(--text-color)}.sc-app-docsection-nav-h .doc-tabmenu.sc-app-docsection-nav li.sc-app-docsection-nav button.sc-app-docsection-nav:focus{outline:0 none}.sc-app-docsection-nav-h .doc-tabmenu.sc-app-docsection-nav li.doc-tabmenu-active.sc-app-docsection-nav button.sc-app-docsection-nav{color:var(--primary-color);border-bottom-color:var(--primary-color)}.sc-app-docsection-nav-h .doc-tabpanel.sc-app-docsection-nav,.sc-app-docsection-nav-h .doc.sc-app-docsection-nav{display:-ms-flexbox;display:flex}.sc-app-docsection-nav-h .doc-main.sc-app-docsection-nav{-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;-ms-flex-preferred-size:0;flex-basis:0;min-width:0}.sc-app-docsection-nav-h .doc-intro.sc-app-docsection-nav{margin-bottom:2rem}.sc-app-docsection-nav-h .doc-intro.sc-app-docsection-nav p.sc-app-docsection-nav{font-size:1.25rem;color:var(--surface-800)}.sc-app-docsection-nav-h .layout-wrapper-light.sc-app-docsection-nav .doc-section-description.sc-app-docsection-nav>p.sc-app-docsection-nav i.sc-app-docsection-nav{background-color:var(--primary-100);color:var(--primary-900)}.sc-app-docsection-nav-h .layout-wrapper-dark.sc-app-docsection-nav .doc-section-description.sc-app-docsection-nav>p.sc-app-docsection-nav i.sc-app-docsection-nav{background-color:var(--highlight-bg);color:var(--highlight-text-color)}.sc-app-docsection-nav-h .doc-section-code-tooltip.sc-app-docsection-nav .any-tooltip-text.sc-app-docsection-nav{padding:0.5rem;font-size:11px}.sc-app-docsection-nav-h{display:block}.sc-app-docsection-nav-h .doc-section-nav.sc-app-docsection-nav{position:-webkit-sticky;position:sticky;top:7rem;right:0;width:14rem;max-height:calc(100vh - 15rem);list-style:none;margin:0;padding:0.25rem 0;margin-left:4rem;overflow-y:auto;overflow-x:hidden;-ms-flex-item-align:start;align-self:flex-start}.sc-app-docsection-nav-h .doc-section-nav.sc-app-docsection-nav>.navbar-item.sc-app-docsection-nav .navbar-item-content.sc-app-docsection-nav{border-left:1px solid var(--surface-border);padding-left:0.25rem}.sc-app-docsection-nav-h .doc-section-nav.sc-app-docsection-nav .navbar-item.sc-app-docsection-nav>.navbar-item-content.sc-app-docsection-nav{display:-ms-flexbox;display:flex}.sc-app-docsection-nav-h .doc-section-nav.sc-app-docsection-nav .navbar-item.sc-app-docsection-nav>.navbar-item-content.sc-app-docsection-nav .any-link.sc-app-docsection-nav{padding:0.25rem 1rem 0.25rem 1rem;color:var(--text-color);white-space:nowrap;min-width:0;overflow:hidden;text-overflow:ellipsis}.sc-app-docsection-nav-h .doc-section-nav.sc-app-docsection-nav .navbar-item.sc-app-docsection-nav>.navbar-item-content.sc-app-docsection-nav .any-link.sc-app-docsection-nav:hover{color:var(--primary-color)}.sc-app-docsection-nav-h .doc-section-nav.sc-app-docsection-nav .navbar-item.active-navbar-item.sc-app-docsection-nav>.navbar-item-content.sc-app-docsection-nav{border-color:var(--primary-color)}.sc-app-docsection-nav-h .doc-section-nav.sc-app-docsection-nav .navbar-item.active-navbar-item.sc-app-docsection-nav>.navbar-item-content.sc-app-docsection-nav .any-link.sc-app-docsection-nav{font-weight:700;color:var(--primary-color) !important}.sc-app-docsection-nav-h .doc-section-nav.sc-app-docsection-nav .navbar-item.sc-app-docsection-nav ul.sc-app-docsection-nav{list-style:none;margin:0;padding:0}.sc-app-docsection-nav-h .doc-section-nav.sc-app-docsection-nav .navbar-item.sc-app-docsection-nav ul.sc-app-docsection-nav .navbar-item.sc-app-docsection-nav .navbar-item-content.sc-app-docsection-nav{padding-left:1rem}";export{s as app_docsection,r as app_docsection_nav}