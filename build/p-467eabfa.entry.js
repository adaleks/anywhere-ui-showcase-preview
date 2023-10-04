import{r as a,h as t,H as o}from"./p-e0726338.js";const r=class{constructor(t){a(this,t),this.docs=void 0,this.apiDocs=void 0,this.docTitle=void 0,this.header=void 0,this.description=void 0,this.githubPage=void 0,this.activeTab=0}componentWillLoad(){const a=window.location.href;this.activeTab=a.includes("/api")?1:0}activateTab(a){this.activeTab=a}goOnGithubPage(){window.open(this.githubPage,"_blank")}render(){return t(o,null,t("div",{class:"doc-component"},t("div",{class:"doc-component-top"},t("ul",{class:"doc-tabmenu"},t("li",{class:0===this.activeTab?"doc-tabmenu-active":""},t("button",{type:"button",onClick:()=>this.activateTab(0)},"FEATURES")),this.apiDocs&&t("li",{class:1===this.activeTab?"doc-tabmenu-active":""},t("button",{type:"button",onClick:()=>this.activateTab(1)},"API"))),t("div",{class:"app-demoactions"},t("div",{class:"any-d-flex any-ai-end any-jc-end any-mt-3"},t("any-button",{title:"How on Github Repository",id:"view_on_github",icon:"fa-brands:github","style-class":"any-button-rounded any-button-text any-button-lg any-button-plain",onClick:()=>this.goOnGithubPage()})))),t("div",{class:"doc-tabpanels"},t("div",{class:"doc-tabpanel "+(1===this.activeTab?"hidden":"")},t("div",{class:"doc-main"},t("div",{class:"doc-intro"},t("h1",null,this.header),t("p",null,this.description)),t("app-docsection",{docs:this.docs})),t("app-docsection-nav",{docs:this.docs})),t("div",{class:0===this.activeTab?"hidden":""},t("app-docapisection",{docs:this.apiDocs,header:this.header})))))}};r.style="@-webkit-keyframes growDown{0%{-webkit-transform:scaleY(0);transform:scaleY(0)}80%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}100%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@keyframes growDown{0%{-webkit-transform:scaleY(0);transform:scaleY(0)}80%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}100%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@-webkit-keyframes growUp{0%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}80%{-webkit-transform:scaleY(1);transform:scaleY(1)}100%{-webkit-transform:scaleY(0);transform:scaleY(0)}}@keyframes growUp{0%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}80%{-webkit-transform:scaleY(1);transform:scaleY(1)}100%{-webkit-transform:scaleY(0);transform:scaleY(0)}}@-webkit-keyframes rotateYDown{0%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(0);transform:rotateY(0)}}@keyframes rotateYDown{0%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(0);transform:rotateY(0)}}@-webkit-keyframes rotateYUp{0%{-webkit-transform:rotateY(0);transform:rotateY(0)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}}@keyframes rotateYUp{0%{-webkit-transform:rotateY(0);transform:rotateY(0)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}}@-webkit-keyframes spin{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes fadeIn{0%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes fadeIn{0%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes fadeOut{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}100%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}}@keyframes fadeOut{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}100%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}}@-webkit-keyframes slideDownFadeIn{0%{-webkit-transform:translateY(-10px);transform:translateY(-10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes slideDownFadeIn{0%{-webkit-transform:translateY(-10px);transform:translateY(-10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@-webkit-keyframes slideDownFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}}@keyframes slideDownFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}}@-webkit-keyframes slideUpFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}}@keyframes slideUpFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}}@-webkit-keyframes slideUpFadeIn{0%{-webkit-transform:translateY(10px);transform:translateY(10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes slideUpFadeIn{0%{-webkit-transform:translateY(10px);transform:translateY(10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}*.sc-app-doc{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.any-component.sc-app-doc,.any-element.sc-app-doc,.any-element.sc-app-doc *.sc-app-doc,.any-component.sc-app-doc *.sc-app-doc{font-family:var(--fontFamily);font-size:var(--fontSize);text-decoration:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-tap-highlight-color:transparent}.any-component.sc-app-doc *.sc-app-doc,.any-element.sc-app-doc *.sc-app-doc,.any-element.sc-app-doc *.sc-app-doc *.sc-app-doc,.any-component.sc-app-doc *.sc-app-doc *.sc-app-doc{-webkit-box-sizing:border-box;box-sizing:border-box}.any-element.any-element-flex.sc-app-doc{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}.any-corner-all.sc-app-doc{-moz-border-radius:var(--borderRadius);-webkit-border-radius:var(--borderRadius);border-radius:var(--borderRadius)}.any-corner-right.sc-app-doc{-moz-border-radius-topright:var(--borderRadius);-webkit-border-top-right-radius:var(--borderRadius);border-top-right-radius:var(--borderRadius);-moz-border-radius-bottomright:var(--borderRadius);-webkit-border-bottom-right-radius:var(--borderRadius);border-bottom-right-radius:var(--borderRadius)}.any-shadow.sc-app-doc{-webkit-box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.3);box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.3)}.any-disabled.sc-app-doc,.any-disabled.sc-app-doc *.sc-app-doc{cursor:default !important;pointer-events:none}.any-checkbox-disabled.sc-app-doc{cursor:default !important;pointer-events:none}.any-disabled.sc-app-doc,.any-component.sc-app-doc:disabled{opacity:var(--disabledOpacity)}.iconify.sc-app-doc{font-size:var(--anyIconFontSize);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.growDown-animation.sc-app-doc{-webkit-animation:growDown 125ms ease-in-out forwards;animation:growDown 125ms ease-in-out forwards}.growUp-animation.sc-app-doc{-webkit-animation:growUp 125ms ease-in-out forwards;animation:growUp 125ms ease-in-out forwards}.rotateYDown-animation.sc-app-doc{-webkit-animation:rotateYDown 125ms ease-in-out forwards;animation:rotateYDown 125ms ease-in-out forwards}.rotateYUp-animation.sc-app-doc{-webkit-animation:rotateYUp 125ms ease-in-out forwards;animation:rotateYUp 125ms ease-in-out forwards}.fadeIn-animation.sc-app-doc{-webkit-animation:fadeIn 80ms ease-in-out forwards;animation:fadeIn 80ms ease-in-out forwards}.fadeOut-animation.sc-app-doc{-webkit-animation:fadeOut 80ms ease-in-out forwards;animation:fadeOut 80ms ease-in-out forwards}.slideUpFadeOut-animation.direction-up.sc-app-doc{-webkit-animation:slideUpFadeOut 200ms ease-in-out forwards;animation:slideUpFadeOut 200ms ease-in-out forwards}.slideUpFadeOut-animation.direction-down.sc-app-doc{-webkit-animation:slideDownFadeOut 200ms ease-in-out forwards;animation:slideDownFadeOut 200ms ease-in-out forwards}.slideDownFadeIn-animation.direction-down.sc-app-doc{-webkit-animation:slideDownFadeIn 200ms ease-in-out forwards;animation:slideDownFadeIn 200ms ease-in-out forwards}.slideDownFadeIn-animation.direction-up.sc-app-doc{-webkit-animation:slideUpFadeIn 200ms ease-in-out forwards;animation:slideUpFadeIn 200ms ease-in-out forwards}.direction-down.sc-app-doc{-webkit-transform-origin:top center;transform-origin:top center}.direction-up.sc-app-doc{-webkit-transform-origin:bottom center;transform-origin:bottom center}.any-field.sc-app-doc>label.sc-app-doc{display:inline-block;margin-bottom:0.5rem;margin-right:0.5rem}.any-hidden-accessible.sc-app-doc{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.any-spin.sc-app-doc{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.any-ml-2.sc-app-doc{margin-left:0.5rem !important}.any-mr-2.sc-app-doc{margin-right:0.5rem !important}.any-mr-4.sc-app-doc{margin-right:1.5rem !important}.any-text-bold.sc-app-doc{font-weight:700 !important}.hidden.sc-app-doc{display:none !important}.gap-0.sc-app-doc{gap:0rem !important}.gap-1.sc-app-doc{gap:0.25rem !important}.gap-2.sc-app-doc{gap:0.5rem !important}.gap-3.sc-app-doc{gap:1rem !important}.gap-4.sc-app-doc{gap:1.5rem !important}.gap-5.sc-app-doc{gap:2rem !important}.gap-6.sc-app-doc{gap:3rem !important}.gap-7.sc-app-doc{gap:4rem !important}.gap-8.sc-app-doc{gap:5rem !important}.sc-app-doc-h{display:block}.sc-app-doc-h .doc-component.sc-app-doc .doc-component-top.sc-app-doc{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;margin:0 17rem 0 0;border-bottom:1px solid var(--surface-border);margin-bottom:2rem}.sc-app-doc-h .doc-component.sc-app-doc .doc-component-top.sc-app-doc .app-demoactions.sc-app-doc{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-top:1em}.sc-app-doc-h .doc-tabmenu.sc-app-doc{list-style:none;padding:0;display:-ms-flexbox;display:flex;margin-bottom:0}.sc-app-doc-h .doc-tabmenu.sc-app-doc li.sc-app-doc{margin-bottom:-1px}.sc-app-doc-h .doc-tabmenu.sc-app-doc li.sc-app-doc button.sc-app-doc{background-color:transparent;border:0 none;display:block;padding:1rem 0;min-width:12rem;text-align:center;color:var(--text-color-secondary);font-size:1.125rem;letter-spacing:2px;cursor:pointer;margin:0;-webkit-transition:all 0.3s;transition:all 0.3s;border-bottom:1px solid transparent;border-top-right-radius:var(--border-round);border-top-left-radius:var(--border-round)}.sc-app-doc-h .doc-tabmenu.sc-app-doc li.sc-app-doc button.sc-app-doc:hover{border-bottom-color:var(--text-color)}.sc-app-doc-h .doc-tabmenu.sc-app-doc li.sc-app-doc button.sc-app-doc:focus{outline:0 none}.sc-app-doc-h .doc-tabmenu.sc-app-doc li.doc-tabmenu-active.sc-app-doc button.sc-app-doc{color:var(--primary-color);border-bottom-color:var(--primary-color)}.sc-app-doc-h .doc-tabpanel.sc-app-doc,.sc-app-doc-h .doc.sc-app-doc{display:-ms-flexbox;display:flex}.sc-app-doc-h .doc-main.sc-app-doc{-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;-ms-flex-preferred-size:0;flex-basis:0;min-width:0}.sc-app-doc-h .doc-intro.sc-app-doc{margin-bottom:2rem}.sc-app-doc-h .doc-intro.sc-app-doc p.sc-app-doc{font-size:1.25rem;color:var(--surface-800)}.sc-app-doc-h .layout-wrapper-light.sc-app-doc .doc-section-description.sc-app-doc>p.sc-app-doc i.sc-app-doc{background-color:var(--primary-100);color:var(--primary-900)}.sc-app-doc-h .layout-wrapper-dark.sc-app-doc .doc-section-description.sc-app-doc>p.sc-app-doc i.sc-app-doc{background-color:var(--highlight-bg);color:var(--highlight-text-color)}.sc-app-doc-h .doc-section-code-tooltip.sc-app-doc .any-tooltip-text.sc-app-doc{padding:0.5rem;font-size:11px}";export{r as app_doc}