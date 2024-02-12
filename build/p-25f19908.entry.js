import{r as t,h as e,g as a}from"./p-3aa34bdb.js";const o=class{constructor(e){t(this,e),this.code=void 0,this.service=void 0,this.selector=void 0,this.extFiles=[],this.routeFiles=[],this.hideToggleCode=!1,this.hideCodeSandbox=!1,this.hideStackBlitz=!1,this.fullCodeVisible=!1,this.lang=void 0}componentWillLoad(){this.lang=this.getInitialLang()}componentDidLoad(){this.initHighlight()}initHighlight(){"undefined"!=typeof window&&window.Prism&&this.codeElement&&!this.codeElement.classList.contains("prism")&&(window.Prism.highlightElement(this.codeElement),this.codeElement.classList.add("prism"))}getInitialLang(){return this.code?Object.keys(this.code)[0]:""}async copyCode(){await navigator.clipboard.writeText(this.code[this.lang])}getCode(t="basic"){return this.code?this.fullCodeVisible||this.hideToggleCode?this.code[t]:this.code.basic:""}changeLang(t){this.lang=t,this.codeElement.textContent=this.code[this.lang],this.rerunCodeHighlight(t)}toggleCode(){this.fullCodeVisible=!this.fullCodeVisible,this.fullCodeVisible&&(this.lang="html"),!this.fullCodeVisible&&(this.lang="basic"),this.codeElement.textContent=this.code[this.lang],this.rerunCodeHighlight(this.lang)}rerunCodeHighlight(t){this.codeElement.classList.remove("prism"),this.codeElement.classList.remove("language-javascript"),this.codeElement.classList.remove("language-json"),"basic"===t||"html"===t?this.codeElement.classList.add("language-markup"):(this.codeElement.classList.remove("language-markup"),this.codeElement.classList.add("language-"+t)),this.initHighlight()}openStackBlitz(){}openCodeSandbox(){}render(){return e("div",{key:"f13f74a7a34f60feea12fc3b8e9712a1c4304478",class:"relative doc-section-code"},e("div",{key:"8926d28bf7afaa1ec71b9049dc6783e7db628ff0",class:"flex surface-card align-items-center justify-content-end absolute z-2",style:{right:".75rem",top:".75rem",gap:".75rem"}},this.fullCodeVisible&&e("div",{class:"flex align-items-center gap-2"},this.code.html&&e("any-button",{label:"HTML",onAOnClick:()=>this.changeLang("html"),styleClass:"\n                    any-button-rounded \n                    w-3rem \n                    any-button-text \n                    any-button-sm \n                    any-0 \n                    inline-flex \n                    align-items-center \n                    justify-content-center \n                    "+("html"===this.lang?"":"any-button-plain")}),this.code.javascript&&e("any-button",{label:"JavaScript",onAOnClick:()=>this.changeLang("javascript"),styleClass:"\n                    any-button-rounded \n                    w-3rem \n                    any-button-text \n                    any-button-sm \n                    any-0 \n                    inline-flex \n                    align-items-center \n                    justify-content-center \n                    "+("javascript"===this.lang?"":"any-button-plain")})),e("any-button",{key:"c53e7d1924968eb6ee1d06bed65e04600acd604e",icon:"fa-solid:code",title:"Toggle Full Code",onAOnClick:()=>this.toggleCode(),styleClass:"\n              any-button-rounded \n              any-button-text \n              text-sm \n              any-button-plain  \n              any-button-sm\n              any-0  \n              w-2rem  \n              h-2rem  \n              inline-flex  \n              align-items-center  \n              justify-content-center"}),!this.hideStackBlitz&&!this.hideToggleCode&&e("any-button",{icon:"simple-icons:stackblitz",title:"Edit in StackBlitz",onAOnClick:()=>this.openStackBlitz(),styleClass:"\n              any-button-rounded \n              any-button-text \n              text-sm \n              any-button-plain  \n              any-button-sm\n              any-0  \n              w-2rem  \n              h-2rem  \n              inline-flex  \n              align-items-center  \n              justify-content-center"}),e("any-button",{key:"2673454fc75ec94a30133fbd438f924378fd4806",icon:"fa-solid:copy",title:"Copy Code",onAOnClick:()=>this.copyCode(),styleClass:"\n              any-button-rounded \n              any-button-text \n              text-sm \n              any-button-plain  \n              any-button-sm\n              any-0  \n              w-2rem  \n              h-2rem  \n              inline-flex  \n              align-items-center  \n              justify-content-center"})),this.code&&e("pre",{class:"language-markup"},e("code",{ref:t=>this.codeElement=t},this.getCode(this.lang))))}};o.style="@-webkit-keyframes growDown{0%{-webkit-transform:scaleY(0);transform:scaleY(0)}80%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}100%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@keyframes growDown{0%{-webkit-transform:scaleY(0);transform:scaleY(0)}80%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}100%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@-webkit-keyframes growUp{0%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}80%{-webkit-transform:scaleY(1);transform:scaleY(1)}100%{-webkit-transform:scaleY(0);transform:scaleY(0)}}@keyframes growUp{0%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}80%{-webkit-transform:scaleY(1);transform:scaleY(1)}100%{-webkit-transform:scaleY(0);transform:scaleY(0)}}@-webkit-keyframes rotateYDown{0%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(0);transform:rotateY(0)}}@keyframes rotateYDown{0%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(0);transform:rotateY(0)}}@-webkit-keyframes rotateYUp{0%{-webkit-transform:rotateY(0);transform:rotateY(0)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}}@keyframes rotateYUp{0%{-webkit-transform:rotateY(0);transform:rotateY(0)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}}@-webkit-keyframes spin{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes fadeIn{0%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes fadeIn{0%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes fadeOut{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}100%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}}@keyframes fadeOut{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}100%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}}@-webkit-keyframes slideDownFadeIn{0%{-webkit-transform:translateY(-10px);transform:translateY(-10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes slideDownFadeIn{0%{-webkit-transform:translateY(-10px);transform:translateY(-10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@-webkit-keyframes slideDownFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}}@keyframes slideDownFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}}@-webkit-keyframes slideUpFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}}@keyframes slideUpFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}}@-webkit-keyframes slideUpFadeIn{0%{-webkit-transform:translateY(10px);transform:translateY(10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes slideUpFadeIn{0%{-webkit-transform:translateY(10px);transform:translateY(10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}*.sc-app-code{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.any-component.sc-app-code,.any-element.sc-app-code,.any-element.sc-app-code *.sc-app-code,.any-component.sc-app-code *.sc-app-code{font-family:var(--fontFamily);font-size:var(--fontSize);text-decoration:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-tap-highlight-color:transparent}.any-component.sc-app-code *.sc-app-code,.any-element.sc-app-code *.sc-app-code,.any-element.sc-app-code *.sc-app-code *.sc-app-code,.any-component.sc-app-code *.sc-app-code *.sc-app-code{-webkit-box-sizing:border-box;box-sizing:border-box}.any-element.any-element-flex.sc-app-code{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}.any-corner-all.sc-app-code{-moz-border-radius:var(--borderRadius);-webkit-border-radius:var(--borderRadius);border-radius:var(--borderRadius)}.any-corner-right.sc-app-code{-moz-border-radius-topright:var(--borderRadius);-webkit-border-top-right-radius:var(--borderRadius);border-top-right-radius:var(--borderRadius);-moz-border-radius-bottomright:var(--borderRadius);-webkit-border-bottom-right-radius:var(--borderRadius);border-bottom-right-radius:var(--borderRadius)}.any-shadow.sc-app-code{-webkit-box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.3);box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.3)}.any-disabled.sc-app-code,.any-disabled.sc-app-code *.sc-app-code{cursor:default !important;pointer-events:none}.any-checkbox-disabled.sc-app-code{cursor:default !important;pointer-events:none}.any-disabled.sc-app-code,.any-component.sc-app-code:disabled{opacity:var(--disabledOpacity)}.iconify.sc-app-code{font-size:var(--anyIconFontSize);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.growDown-animation.sc-app-code{-webkit-animation:growDown 125ms ease-in-out forwards;animation:growDown 125ms ease-in-out forwards}.growUp-animation.sc-app-code{-webkit-animation:growUp 125ms ease-in-out forwards;animation:growUp 125ms ease-in-out forwards}.rotateYDown-animation.sc-app-code{-webkit-animation:rotateYDown 125ms ease-in-out forwards;animation:rotateYDown 125ms ease-in-out forwards}.rotateYUp-animation.sc-app-code{-webkit-animation:rotateYUp 125ms ease-in-out forwards;animation:rotateYUp 125ms ease-in-out forwards}.fadeIn-animation.sc-app-code{-webkit-animation:fadeIn 80ms ease-in-out forwards;animation:fadeIn 80ms ease-in-out forwards}.fadeOut-animation.sc-app-code{-webkit-animation:fadeOut 80ms ease-in-out forwards;animation:fadeOut 80ms ease-in-out forwards}.slideUpFadeOut-animation.direction-up.sc-app-code{-webkit-animation:slideUpFadeOut 200ms ease-in-out forwards;animation:slideUpFadeOut 200ms ease-in-out forwards}.slideUpFadeOut-animation.direction-down.sc-app-code{-webkit-animation:slideDownFadeOut 200ms ease-in-out forwards;animation:slideDownFadeOut 200ms ease-in-out forwards}.slideDownFadeIn-animation.direction-down.sc-app-code{-webkit-animation:slideDownFadeIn 200ms ease-in-out forwards;animation:slideDownFadeIn 200ms ease-in-out forwards}.slideDownFadeIn-animation.direction-up.sc-app-code{-webkit-animation:slideUpFadeIn 200ms ease-in-out forwards;animation:slideUpFadeIn 200ms ease-in-out forwards}.direction-down.sc-app-code{-webkit-transform-origin:top center;transform-origin:top center}.direction-up.sc-app-code{-webkit-transform-origin:bottom center;transform-origin:bottom center}.any-field.sc-app-code>label.sc-app-code{display:inline-block;margin-bottom:0.5rem;margin-right:0.5rem}.any-hidden-accessible.sc-app-code{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.any-spin.sc-app-code{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.any-ml-2.sc-app-code{margin-left:0.5rem !important}.any-mr-2.sc-app-code{margin-right:0.5rem !important}.any-mr-4.sc-app-code{margin-right:1.5rem !important}.any-text-bold.sc-app-code{font-weight:700 !important}.hidden.sc-app-code{display:none !important}.gap-0.sc-app-code{gap:0rem !important}.gap-1.sc-app-code{gap:0.25rem !important}.gap-2.sc-app-code{gap:0.5rem !important}.gap-3.sc-app-code{gap:1rem !important}.gap-4.sc-app-code{gap:1.5rem !important}.gap-5.sc-app-code{gap:2rem !important}.gap-6.sc-app-code{gap:3rem !important}.gap-7.sc-app-code{gap:4rem !important}.gap-8.sc-app-code{gap:5rem !important}.sc-app-code-h{display:block}.sc-app-code-h .doc-component.sc-app-code .doc-component-top.sc-app-code{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;margin:0 17rem 0 0;border-bottom:1px solid var(--surface-border);margin-bottom:2rem}.sc-app-code-h .doc-component.sc-app-code .doc-component-top.sc-app-code .app-demoactions.sc-app-code{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-top:1em}.sc-app-code-h .doc-tabmenu.sc-app-code{list-style:none;padding:0;display:-ms-flexbox;display:flex;margin-bottom:0}.sc-app-code-h .doc-tabmenu.sc-app-code li.sc-app-code{margin-bottom:-1px}.sc-app-code-h .doc-tabmenu.sc-app-code li.sc-app-code button.sc-app-code{background-color:transparent;border:0 none;display:block;padding:1rem 0;min-width:12rem;text-align:center;color:var(--text-color-secondary);font-size:1.125rem;letter-spacing:2px;cursor:pointer;margin:0;-webkit-transition:all 0.3s;transition:all 0.3s;border-bottom:1px solid transparent;border-top-right-radius:var(--border-round);border-top-left-radius:var(--border-round)}.sc-app-code-h .doc-tabmenu.sc-app-code li.sc-app-code button.sc-app-code:hover{border-bottom-color:var(--text-color)}.sc-app-code-h .doc-tabmenu.sc-app-code li.sc-app-code button.sc-app-code:focus{outline:0 none}.sc-app-code-h .doc-tabmenu.sc-app-code li.doc-tabmenu-active.sc-app-code button.sc-app-code{color:var(--primary-color);border-bottom-color:var(--primary-color)}.sc-app-code-h .doc-tabpanel.sc-app-code,.sc-app-code-h .doc.sc-app-code{display:-ms-flexbox;display:flex}.sc-app-code-h .doc-main.sc-app-code{-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;-ms-flex-preferred-size:0;flex-basis:0;min-width:0}.sc-app-code-h .doc-intro.sc-app-code{margin-bottom:2rem}.sc-app-code-h .doc-intro.sc-app-code p.sc-app-code{font-size:1.25rem;color:var(--surface-800)}.sc-app-code-h .layout-wrapper-light.sc-app-code .doc-section-description.sc-app-code>p.sc-app-code i.sc-app-code{background-color:var(--primary-100);color:var(--primary-900)}.sc-app-code-h .layout-wrapper-dark.sc-app-code .doc-section-description.sc-app-code>p.sc-app-code i.sc-app-code{background-color:var(--highlight-bg);color:var(--highlight-text-color)}.sc-app-code-h .doc-section-code-tooltip.sc-app-code .any-tooltip-text.sc-app-code{padding:0.5rem;font-size:11px}.sc-app-code-h{display:block}.sc-app-code-h .doc-section-code.sc-app-code div.sc-app-code::-webkit-scrollbar{width:5px}.sc-app-code-h .doc-section-code.sc-app-code .any-button-label.sc-app-code{font-weight:normal;font-size:0.875rem}.sc-app-code-h .doc-section-code.sc-app-code .doc-section-code-active.sc-app-code .any-button-label.sc-app-code{font-weight:bold}.sc-app-code-h .doc-section-code.sc-app-code pre.sc-app-code{margin:0 0 1.5rem 0}";const s=class{constructor(e){t(this,e),this.textTitle=void 0,this.textId=void 0,this.level=2,this.label=void 0,this.parentTitle=void 0,this.parentDescription=void 0,this.parentId=void 0}navigate(t){if(t.preventDefault(),"undefined"!=typeof window){const e=this.textId||this.parentId,a=window.location.hash.split("/");a[2]?(a.splice(2),a.push(e),window.location.hash=a.join("/")):window.location.hash=window.location.hash+"/"+e;const o=t.target.closest(".doc-section-label");o&&o.scrollIntoView({block:"start",behavior:"smooth"})}}render(){return e("div",{key:"0a075228e6355ff46f1909d140af84ab41aaf524"},this.parentTitle?e("div",null,e("h2",{class:"doc-section-label"},this.parentTitle,e("a",{onClick:t=>this.navigate(t),class:"cursor-pointer",id:this.parentId},"#")),e("div",{class:"doc-section-description"},e("p",{class:"mt-3"},this.parentDescription||null))):e("div",null,e(2===this.level?"h2":"h3",{class:"doc-section-label"},this.textTitle,e("a",{onClick:t=>this.navigate(t),class:"cursor-pointer",id:this.textId},"#")),e("div",{class:"doc-section-description"},e("slot",null))))}get element(){return a(this)}};s.style="@-webkit-keyframes growDown{0%{-webkit-transform:scaleY(0);transform:scaleY(0)}80%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}100%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@keyframes growDown{0%{-webkit-transform:scaleY(0);transform:scaleY(0)}80%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}100%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@-webkit-keyframes growUp{0%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}80%{-webkit-transform:scaleY(1);transform:scaleY(1)}100%{-webkit-transform:scaleY(0);transform:scaleY(0)}}@keyframes growUp{0%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}80%{-webkit-transform:scaleY(1);transform:scaleY(1)}100%{-webkit-transform:scaleY(0);transform:scaleY(0)}}@-webkit-keyframes rotateYDown{0%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(0);transform:rotateY(0)}}@keyframes rotateYDown{0%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(0);transform:rotateY(0)}}@-webkit-keyframes rotateYUp{0%{-webkit-transform:rotateY(0);transform:rotateY(0)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}}@keyframes rotateYUp{0%{-webkit-transform:rotateY(0);transform:rotateY(0)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}}@-webkit-keyframes spin{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes fadeIn{0%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes fadeIn{0%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes fadeOut{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}100%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}}@keyframes fadeOut{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}100%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}}@-webkit-keyframes slideDownFadeIn{0%{-webkit-transform:translateY(-10px);transform:translateY(-10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes slideDownFadeIn{0%{-webkit-transform:translateY(-10px);transform:translateY(-10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@-webkit-keyframes slideDownFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}}@keyframes slideDownFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}}@-webkit-keyframes slideUpFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}}@keyframes slideUpFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}}@-webkit-keyframes slideUpFadeIn{0%{-webkit-transform:translateY(10px);transform:translateY(10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes slideUpFadeIn{0%{-webkit-transform:translateY(10px);transform:translateY(10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}*.sc-app-docsectiontext{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.any-component.sc-app-docsectiontext,.any-element.sc-app-docsectiontext,.any-element.sc-app-docsectiontext *.sc-app-docsectiontext,.any-component.sc-app-docsectiontext *.sc-app-docsectiontext{font-family:var(--fontFamily);font-size:var(--fontSize);text-decoration:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-tap-highlight-color:transparent}.any-component.sc-app-docsectiontext *.sc-app-docsectiontext,.any-element.sc-app-docsectiontext *.sc-app-docsectiontext,.any-element.sc-app-docsectiontext *.sc-app-docsectiontext *.sc-app-docsectiontext,.any-component.sc-app-docsectiontext *.sc-app-docsectiontext *.sc-app-docsectiontext{-webkit-box-sizing:border-box;box-sizing:border-box}.any-element.any-element-flex.sc-app-docsectiontext{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}.any-corner-all.sc-app-docsectiontext{-moz-border-radius:var(--borderRadius);-webkit-border-radius:var(--borderRadius);border-radius:var(--borderRadius)}.any-corner-right.sc-app-docsectiontext{-moz-border-radius-topright:var(--borderRadius);-webkit-border-top-right-radius:var(--borderRadius);border-top-right-radius:var(--borderRadius);-moz-border-radius-bottomright:var(--borderRadius);-webkit-border-bottom-right-radius:var(--borderRadius);border-bottom-right-radius:var(--borderRadius)}.any-shadow.sc-app-docsectiontext{-webkit-box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.3);box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.3)}.any-disabled.sc-app-docsectiontext,.any-disabled.sc-app-docsectiontext *.sc-app-docsectiontext{cursor:default !important;pointer-events:none}.any-checkbox-disabled.sc-app-docsectiontext{cursor:default !important;pointer-events:none}.any-disabled.sc-app-docsectiontext,.any-component.sc-app-docsectiontext:disabled{opacity:var(--disabledOpacity)}.iconify.sc-app-docsectiontext{font-size:var(--anyIconFontSize);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.growDown-animation.sc-app-docsectiontext{-webkit-animation:growDown 125ms ease-in-out forwards;animation:growDown 125ms ease-in-out forwards}.growUp-animation.sc-app-docsectiontext{-webkit-animation:growUp 125ms ease-in-out forwards;animation:growUp 125ms ease-in-out forwards}.rotateYDown-animation.sc-app-docsectiontext{-webkit-animation:rotateYDown 125ms ease-in-out forwards;animation:rotateYDown 125ms ease-in-out forwards}.rotateYUp-animation.sc-app-docsectiontext{-webkit-animation:rotateYUp 125ms ease-in-out forwards;animation:rotateYUp 125ms ease-in-out forwards}.fadeIn-animation.sc-app-docsectiontext{-webkit-animation:fadeIn 80ms ease-in-out forwards;animation:fadeIn 80ms ease-in-out forwards}.fadeOut-animation.sc-app-docsectiontext{-webkit-animation:fadeOut 80ms ease-in-out forwards;animation:fadeOut 80ms ease-in-out forwards}.slideUpFadeOut-animation.direction-up.sc-app-docsectiontext{-webkit-animation:slideUpFadeOut 200ms ease-in-out forwards;animation:slideUpFadeOut 200ms ease-in-out forwards}.slideUpFadeOut-animation.direction-down.sc-app-docsectiontext{-webkit-animation:slideDownFadeOut 200ms ease-in-out forwards;animation:slideDownFadeOut 200ms ease-in-out forwards}.slideDownFadeIn-animation.direction-down.sc-app-docsectiontext{-webkit-animation:slideDownFadeIn 200ms ease-in-out forwards;animation:slideDownFadeIn 200ms ease-in-out forwards}.slideDownFadeIn-animation.direction-up.sc-app-docsectiontext{-webkit-animation:slideUpFadeIn 200ms ease-in-out forwards;animation:slideUpFadeIn 200ms ease-in-out forwards}.direction-down.sc-app-docsectiontext{-webkit-transform-origin:top center;transform-origin:top center}.direction-up.sc-app-docsectiontext{-webkit-transform-origin:bottom center;transform-origin:bottom center}.any-field.sc-app-docsectiontext>label.sc-app-docsectiontext{display:inline-block;margin-bottom:0.5rem;margin-right:0.5rem}.any-hidden-accessible.sc-app-docsectiontext{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.any-spin.sc-app-docsectiontext{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.any-ml-2.sc-app-docsectiontext{margin-left:0.5rem !important}.any-mr-2.sc-app-docsectiontext{margin-right:0.5rem !important}.any-mr-4.sc-app-docsectiontext{margin-right:1.5rem !important}.any-text-bold.sc-app-docsectiontext{font-weight:700 !important}.hidden.sc-app-docsectiontext{display:none !important}.gap-0.sc-app-docsectiontext{gap:0rem !important}.gap-1.sc-app-docsectiontext{gap:0.25rem !important}.gap-2.sc-app-docsectiontext{gap:0.5rem !important}.gap-3.sc-app-docsectiontext{gap:1rem !important}.gap-4.sc-app-docsectiontext{gap:1.5rem !important}.gap-5.sc-app-docsectiontext{gap:2rem !important}.gap-6.sc-app-docsectiontext{gap:3rem !important}.gap-7.sc-app-docsectiontext{gap:4rem !important}.gap-8.sc-app-docsectiontext{gap:5rem !important}.sc-app-docsectiontext-h{display:block}.sc-app-docsectiontext-h .doc-component.sc-app-docsectiontext .doc-component-top.sc-app-docsectiontext{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;margin:0 17rem 0 0;border-bottom:1px solid var(--surface-border);margin-bottom:2rem}.sc-app-docsectiontext-h .doc-component.sc-app-docsectiontext .doc-component-top.sc-app-docsectiontext .app-demoactions.sc-app-docsectiontext{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-top:1em}.sc-app-docsectiontext-h .doc-tabmenu.sc-app-docsectiontext{list-style:none;padding:0;display:-ms-flexbox;display:flex;margin-bottom:0}.sc-app-docsectiontext-h .doc-tabmenu.sc-app-docsectiontext li.sc-app-docsectiontext{margin-bottom:-1px}.sc-app-docsectiontext-h .doc-tabmenu.sc-app-docsectiontext li.sc-app-docsectiontext button.sc-app-docsectiontext{background-color:transparent;border:0 none;display:block;padding:1rem 0;min-width:12rem;text-align:center;color:var(--text-color-secondary);font-size:1.125rem;letter-spacing:2px;cursor:pointer;margin:0;-webkit-transition:all 0.3s;transition:all 0.3s;border-bottom:1px solid transparent;border-top-right-radius:var(--border-round);border-top-left-radius:var(--border-round)}.sc-app-docsectiontext-h .doc-tabmenu.sc-app-docsectiontext li.sc-app-docsectiontext button.sc-app-docsectiontext:hover{border-bottom-color:var(--text-color)}.sc-app-docsectiontext-h .doc-tabmenu.sc-app-docsectiontext li.sc-app-docsectiontext button.sc-app-docsectiontext:focus{outline:0 none}.sc-app-docsectiontext-h .doc-tabmenu.sc-app-docsectiontext li.doc-tabmenu-active.sc-app-docsectiontext button.sc-app-docsectiontext{color:var(--primary-color);border-bottom-color:var(--primary-color)}.sc-app-docsectiontext-h .doc-tabpanel.sc-app-docsectiontext,.sc-app-docsectiontext-h .doc.sc-app-docsectiontext{display:-ms-flexbox;display:flex}.sc-app-docsectiontext-h .doc-main.sc-app-docsectiontext{-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;-ms-flex-preferred-size:0;flex-basis:0;min-width:0}.sc-app-docsectiontext-h .doc-intro.sc-app-docsectiontext{margin-bottom:2rem}.sc-app-docsectiontext-h .doc-intro.sc-app-docsectiontext p.sc-app-docsectiontext{font-size:1.25rem;color:var(--surface-800)}.sc-app-docsectiontext-h .layout-wrapper-light.sc-app-docsectiontext .doc-section-description.sc-app-docsectiontext>p.sc-app-docsectiontext i.sc-app-docsectiontext{background-color:var(--primary-100);color:var(--primary-900)}.sc-app-docsectiontext-h .layout-wrapper-dark.sc-app-docsectiontext .doc-section-description.sc-app-docsectiontext>p.sc-app-docsectiontext i.sc-app-docsectiontext{background-color:var(--highlight-bg);color:var(--highlight-text-color)}.sc-app-docsectiontext-h .doc-section-code-tooltip.sc-app-docsectiontext .any-tooltip-text.sc-app-docsectiontext{padding:0.5rem;font-size:11px}.sc-app-docsectiontext-h{display:block}.sc-app-docsectiontext-h .doc-section-label.sc-app-docsectiontext{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;scroll-margin-top:6.5rem}.sc-app-docsectiontext-h .doc-section-label.sc-app-docsectiontext>a.sc-app-docsectiontext{color:var(--primary-color);opacity:0.7;margin-left:1rem;display:none;-webkit-transition:opacity 0.3s, colors 0.3s;transition:opacity 0.3s, colors 0.3s}.sc-app-docsectiontext-h .doc-section-label.sc-app-docsectiontext:hover>a.sc-app-docsectiontext{display:block}.sc-app-docsectiontext-h .doc-section-label.sc-app-docsectiontext:hover>a.sc-app-docsectiontext:hover{opacity:1}.sc-app-docsectiontext-h .doc-section-description.sc-app-docsectiontext>p.sc-app-docsectiontext{font-size:1.125rem;color:var(--surface-800)}.sc-app-docsectiontext-h .doc-section-description.sc-app-docsectiontext>p.sc-app-docsectiontext i.sc-app-docsectiontext{border-radius:6px;padding:2px 6px;font-size:0.875rem;font-weight:600;font-style:normal}.sc-app-docsectiontext-h .doc-section-description.sc-app-docsectiontext>p.sc-app-docsectiontext a.sc-app-docsectiontext{color:var(--primary-color);font-weight:600}.sc-app-docsectiontext-h .doc-section-description.sc-app-docsectiontext>p.sc-app-docsectiontext a.sc-app-docsectiontext:hover{text-decoration:underline}";export{o as app_code,s as app_docsectiontext}