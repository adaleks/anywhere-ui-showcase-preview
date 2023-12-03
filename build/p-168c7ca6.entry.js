import{r as a,h as t}from"./p-7fa45820.js";import{l as o,I as e}from"./p-4c8acd70.js";import"./p-3e8ff66b.js";const p=class{constructor(t){a(this,t),this.anyId=void 0,this.label=void 0,this.data=void 0,this.description=void 0,this.relatedProp=void 0,this.parentTitle=void 0,this.parentDescription=void 0,this.parentId=void 0,this.level=void 0,this.isInterface=!1}componentWillLoad(){this.loadIcons()}async loadIcons(){await o(["fa6-solid:link"]).catch((a=>{console.error("Failed to load icons:",a.missing)})),document.querySelectorAll(".link-icon").forEach((a=>{a.innerHTML=e.renderHTML("fa6-solid:link",{})}))}navigate(a,t){if("undefined"!=typeof window){const o=a.currentTarget.parentElement,e=window.location.hash.split("/");e[2]?(e.splice(2),e.push(this.anyId),window.location.hash=e.join("/")+"."+t):window.location.hash=window.location.hash+"/"+e.push(this.anyId)+"."+t,setTimeout((()=>{o.scrollIntoView({block:"nearest",behavior:"smooth"})}),1),a.preventDefault()}}getKeys(a){return Object.keys(a)}getEntries(a){return Object.entries(a)}getType(a){return"Templates"===this.label?a?.split("|"):"Methods"!==this.label||a?a?.split("|").map((a=>a.replace(/(\[|\]|<|>).*$/gm,"").trim())):["-"]}isLinkType(a){return"Templates"!==this.label&&(a.toLowerCase().includes(this.anyId.split(".")[1].toLowerCase())||["confirmationoptions","toastmessageoptions"].includes(a.toLowerCase()))}setLinkPath(a,t){const o=window.location.pathname;let e=this.anyId.split(".")[1],p=t||(a.includes("Type")?"types":a.includes("Event")?"events":["menuitem","confirmationoptions"].includes(a.toLowerCase())?"options":"interfaces");return e.includes("toast")&&(e="toast"),"options"===p?`/${o}/#api.${p}.${a}`:`/${o}/#api.${e}.${p}.${a}`}scrollToLinkedElement(a,t){if(document&&document.createElement){const o="Emitters"===this.label?"Events":this.label,e=`api.${this.anyId.split(".")[1].toLowerCase()}.${o.toLowerCase()}.${t}`;setTimeout((()=>{this.scrollToLabelById(e)}),1),a.preventDefault()}}scrollToLabelById(a){if("undefined"!=typeof document){const t=document.getElementById(a);window.location.hash=a,t&&t.parentElement.scrollIntoView({block:"start",behavior:"smooth"})}}render(){return t("div",null,this.data?t("div",null,this.parentId?t("div",{class:"my-3 pt-3"},t("app-docsectiontext",{"parent-id":this.parentId,"parent-title":this.parentTitle,"parent-description":this.parentDescription,level:2})):null,t("app-docsectiontext",{textId:this.anyId,textTitle:this.label,level:3},t("p",null,this.description||null)),t("div",{class:"doc-tablewrapper full-card mt-3",style:{display:this.data[0].data?"none":"block"}},t("table",{class:"doc-table"},t("thead",null,t("tr",null,this.getKeys(this.data[0]).map((a=>t("th",null,"readonly"!==a&&"optional"!==a&&"deprecated"!==a?a:null))))),t("tbody",null,this.data.map((a=>t("tr",null,this.getEntries(a).map((o=>t("td",{class:{"doc-option-type":"type"===o[0],"doc-option-attr":"attribute"===o[0],"doc-option-default":"default"===o[0]}},"readonly"!==o[0]&&"optional"!==o[0]&&"deprecated"!==o[0]?t("span",null,"name"===o[0]?t("span",{id:this.anyId+"."+o[1],class:{"doc-option-name":!0,"line-through cursor-pointer":!!a.deprecated},title:a.deprecated},o[1]||"-",t("a",{onClick:a=>this.navigate(a,o[1]),class:"doc-option-link"},t("i",{class:"link-icon iconify"}))):null,"type"===o[0]?o[1]||"-":null,"parameters"===o[0]?t("span",null,o[1].name?t("span",{class:{"parameter-bold":"Templates"===this.label}},o[1].name," :"):t("span",null,"-"),o[1].type.split("|").map(((a,o)=>t("span",null,0!==o?" |":" ",this.isLinkType(a)?t("a",{onClick:t=>this.scrollToLinkedElement(t,a)},a||"-"):t("span",null,a))))):null,"name"!==o[0]&&"type"!==o[0]&&"parameters"!==o[0]?t("span",{id:this.anyId+"."+o[0]},o[1]):null):null))))))))),this.data[0].data&&this.data[0].data.length>0?t("div",null,this.data.map((a=>t("app-docapitable",{anyId:a.id,data:a.data,label:a.label,description:a.description,relatedProp:a.relatedProp})))):null):null)}};p.style='@-webkit-keyframes growDown{0%{-webkit-transform:scaleY(0);transform:scaleY(0)}80%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}100%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@keyframes growDown{0%{-webkit-transform:scaleY(0);transform:scaleY(0)}80%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}100%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@-webkit-keyframes growUp{0%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}80%{-webkit-transform:scaleY(1);transform:scaleY(1)}100%{-webkit-transform:scaleY(0);transform:scaleY(0)}}@keyframes growUp{0%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}80%{-webkit-transform:scaleY(1);transform:scaleY(1)}100%{-webkit-transform:scaleY(0);transform:scaleY(0)}}@-webkit-keyframes rotateYDown{0%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(0);transform:rotateY(0)}}@keyframes rotateYDown{0%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(0);transform:rotateY(0)}}@-webkit-keyframes rotateYUp{0%{-webkit-transform:rotateY(0);transform:rotateY(0)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}}@keyframes rotateYUp{0%{-webkit-transform:rotateY(0);transform:rotateY(0)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}}@-webkit-keyframes spin{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes fadeIn{0%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes fadeIn{0%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes fadeOut{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}100%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}}@keyframes fadeOut{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}100%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}}@-webkit-keyframes slideDownFadeIn{0%{-webkit-transform:translateY(-10px);transform:translateY(-10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes slideDownFadeIn{0%{-webkit-transform:translateY(-10px);transform:translateY(-10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@-webkit-keyframes slideDownFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}}@keyframes slideDownFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}}@-webkit-keyframes slideUpFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}}@keyframes slideUpFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}}@-webkit-keyframes slideUpFadeIn{0%{-webkit-transform:translateY(10px);transform:translateY(10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes slideUpFadeIn{0%{-webkit-transform:translateY(10px);transform:translateY(10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}*.sc-app-docapitable{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.any-component.sc-app-docapitable,.any-element.sc-app-docapitable,.any-element.sc-app-docapitable *.sc-app-docapitable,.any-component.sc-app-docapitable *.sc-app-docapitable{font-family:var(--fontFamily);font-size:var(--fontSize);text-decoration:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-tap-highlight-color:transparent}.any-component.sc-app-docapitable *.sc-app-docapitable,.any-element.sc-app-docapitable *.sc-app-docapitable,.any-element.sc-app-docapitable *.sc-app-docapitable *.sc-app-docapitable,.any-component.sc-app-docapitable *.sc-app-docapitable *.sc-app-docapitable{-webkit-box-sizing:border-box;box-sizing:border-box}.any-element.any-element-flex.sc-app-docapitable{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}.any-corner-all.sc-app-docapitable{-moz-border-radius:var(--borderRadius);-webkit-border-radius:var(--borderRadius);border-radius:var(--borderRadius)}.any-corner-right.sc-app-docapitable{-moz-border-radius-topright:var(--borderRadius);-webkit-border-top-right-radius:var(--borderRadius);border-top-right-radius:var(--borderRadius);-moz-border-radius-bottomright:var(--borderRadius);-webkit-border-bottom-right-radius:var(--borderRadius);border-bottom-right-radius:var(--borderRadius)}.any-shadow.sc-app-docapitable{-webkit-box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.3);box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.3)}.any-disabled.sc-app-docapitable,.any-disabled.sc-app-docapitable *.sc-app-docapitable{cursor:default !important;pointer-events:none}.any-checkbox-disabled.sc-app-docapitable{cursor:default !important;pointer-events:none}.any-disabled.sc-app-docapitable,.any-component.sc-app-docapitable:disabled{opacity:var(--disabledOpacity)}.iconify.sc-app-docapitable{font-size:var(--anyIconFontSize);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.growDown-animation.sc-app-docapitable{-webkit-animation:growDown 125ms ease-in-out forwards;animation:growDown 125ms ease-in-out forwards}.growUp-animation.sc-app-docapitable{-webkit-animation:growUp 125ms ease-in-out forwards;animation:growUp 125ms ease-in-out forwards}.rotateYDown-animation.sc-app-docapitable{-webkit-animation:rotateYDown 125ms ease-in-out forwards;animation:rotateYDown 125ms ease-in-out forwards}.rotateYUp-animation.sc-app-docapitable{-webkit-animation:rotateYUp 125ms ease-in-out forwards;animation:rotateYUp 125ms ease-in-out forwards}.fadeIn-animation.sc-app-docapitable{-webkit-animation:fadeIn 80ms ease-in-out forwards;animation:fadeIn 80ms ease-in-out forwards}.fadeOut-animation.sc-app-docapitable{-webkit-animation:fadeOut 80ms ease-in-out forwards;animation:fadeOut 80ms ease-in-out forwards}.slideUpFadeOut-animation.direction-up.sc-app-docapitable{-webkit-animation:slideUpFadeOut 200ms ease-in-out forwards;animation:slideUpFadeOut 200ms ease-in-out forwards}.slideUpFadeOut-animation.direction-down.sc-app-docapitable{-webkit-animation:slideDownFadeOut 200ms ease-in-out forwards;animation:slideDownFadeOut 200ms ease-in-out forwards}.slideDownFadeIn-animation.direction-down.sc-app-docapitable{-webkit-animation:slideDownFadeIn 200ms ease-in-out forwards;animation:slideDownFadeIn 200ms ease-in-out forwards}.slideDownFadeIn-animation.direction-up.sc-app-docapitable{-webkit-animation:slideUpFadeIn 200ms ease-in-out forwards;animation:slideUpFadeIn 200ms ease-in-out forwards}.direction-down.sc-app-docapitable{-webkit-transform-origin:top center;transform-origin:top center}.direction-up.sc-app-docapitable{-webkit-transform-origin:bottom center;transform-origin:bottom center}.any-field.sc-app-docapitable>label.sc-app-docapitable{display:inline-block;margin-bottom:0.5rem;margin-right:0.5rem}.any-hidden-accessible.sc-app-docapitable{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.any-spin.sc-app-docapitable{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.any-ml-2.sc-app-docapitable{margin-left:0.5rem !important}.any-mr-2.sc-app-docapitable{margin-right:0.5rem !important}.any-mr-4.sc-app-docapitable{margin-right:1.5rem !important}.any-text-bold.sc-app-docapitable{font-weight:700 !important}.hidden.sc-app-docapitable{display:none !important}.gap-0.sc-app-docapitable{gap:0rem !important}.gap-1.sc-app-docapitable{gap:0.25rem !important}.gap-2.sc-app-docapitable{gap:0.5rem !important}.gap-3.sc-app-docapitable{gap:1rem !important}.gap-4.sc-app-docapitable{gap:1.5rem !important}.gap-5.sc-app-docapitable{gap:2rem !important}.gap-6.sc-app-docapitable{gap:3rem !important}.gap-7.sc-app-docapitable{gap:4rem !important}.gap-8.sc-app-docapitable{gap:5rem !important}.sc-app-docapitable-h{display:block}.sc-app-docapitable-h .doc-component.sc-app-docapitable .doc-component-top.sc-app-docapitable{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;margin:0 17rem 0 0;border-bottom:1px solid var(--surface-border);margin-bottom:2rem}.sc-app-docapitable-h .doc-component.sc-app-docapitable .doc-component-top.sc-app-docapitable .app-demoactions.sc-app-docapitable{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-top:1em}.sc-app-docapitable-h .doc-tabmenu.sc-app-docapitable{list-style:none;padding:0;display:-ms-flexbox;display:flex;margin-bottom:0}.sc-app-docapitable-h .doc-tabmenu.sc-app-docapitable li.sc-app-docapitable{margin-bottom:-1px}.sc-app-docapitable-h .doc-tabmenu.sc-app-docapitable li.sc-app-docapitable button.sc-app-docapitable{background-color:transparent;border:0 none;display:block;padding:1rem 0;min-width:12rem;text-align:center;color:var(--text-color-secondary);font-size:1.125rem;letter-spacing:2px;cursor:pointer;margin:0;-webkit-transition:all 0.3s;transition:all 0.3s;border-bottom:1px solid transparent;border-top-right-radius:var(--border-round);border-top-left-radius:var(--border-round)}.sc-app-docapitable-h .doc-tabmenu.sc-app-docapitable li.sc-app-docapitable button.sc-app-docapitable:hover{border-bottom-color:var(--text-color)}.sc-app-docapitable-h .doc-tabmenu.sc-app-docapitable li.sc-app-docapitable button.sc-app-docapitable:focus{outline:0 none}.sc-app-docapitable-h .doc-tabmenu.sc-app-docapitable li.doc-tabmenu-active.sc-app-docapitable button.sc-app-docapitable{color:var(--primary-color);border-bottom-color:var(--primary-color)}.sc-app-docapitable-h .doc-tabpanel.sc-app-docapitable,.sc-app-docapitable-h .doc.sc-app-docapitable{display:-ms-flexbox;display:flex}.sc-app-docapitable-h .doc-main.sc-app-docapitable{-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;-ms-flex-preferred-size:0;flex-basis:0;min-width:0}.sc-app-docapitable-h .doc-intro.sc-app-docapitable{margin-bottom:2rem}.sc-app-docapitable-h .doc-intro.sc-app-docapitable p.sc-app-docapitable{font-size:1.25rem;color:var(--surface-800)}.sc-app-docapitable-h .layout-wrapper-light.sc-app-docapitable .doc-section-description.sc-app-docapitable>p.sc-app-docapitable i.sc-app-docapitable{background-color:var(--primary-100);color:var(--primary-900)}.sc-app-docapitable-h .layout-wrapper-dark.sc-app-docapitable .doc-section-description.sc-app-docapitable>p.sc-app-docapitable i.sc-app-docapitable{background-color:var(--highlight-bg);color:var(--highlight-text-color)}.sc-app-docapitable-h .doc-section-code-tooltip.sc-app-docapitable .any-tooltip-text.sc-app-docapitable{padding:0.5rem;font-size:11px}.sc-app-docapitable-h .parameter-bold.sc-app-docapitable{font-weight:bold}.sc-app-docapitable-h .doc-tablewrapper.sc-app-docapitable{overflow:auto}.sc-app-docapitable-h .doc-table.sc-app-docapitable{border-collapse:collapse;width:100%;min-width:960px;background-color:var(--surface-card);margin-bottom:1.5rem}.sc-app-docapitable-h .doc-table.sc-app-docapitable th.sc-app-docapitable{border-bottom:1px solid var(--surface-border);padding:1rem;text-align:left;text-transform:capitalize}.sc-app-docapitable-h .doc-table.sc-app-docapitable tbody.sc-app-docapitable tr.sc-app-docapitable:hover{background:var(--surface-hover)}.sc-app-docapitable-h .doc-table.sc-app-docapitable tbody.sc-app-docapitable td.sc-app-docapitable{padding:1rem;border-bottom:1px solid var(--surface-border);white-space:pre-wrap;line-height:1.5}.sc-app-docapitable-h .doc-table.sc-app-docapitable tbody.sc-app-docapitable td.doc-option-type.sc-app-docapitable,.sc-app-docapitable-h .doc-table.sc-app-docapitable tbody.sc-app-docapitable td.doc-option-attr.sc-app-docapitable{font-family:ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, Liberation Mono, monospace;color:var(--primary-color)}.sc-app-docapitable-h .doc-table.sc-app-docapitable tbody.sc-app-docapitable td.doc-option-type.sc-app-docapitable>a.sc-app-docapitable,.sc-app-docapitable-h .doc-table.sc-app-docapitable tbody.sc-app-docapitable td.doc-option-attr.sc-app-docapitable>a.sc-app-docapitable{color:var(--primary-color)}.sc-app-docapitable-h .doc-table.sc-app-docapitable tbody.sc-app-docapitable td.doc-option-type.sc-app-docapitable>a.sc-app-docapitable:hover,.sc-app-docapitable-h .doc-table.sc-app-docapitable tbody.sc-app-docapitable td.doc-option-attr.sc-app-docapitable>a.sc-app-docapitable:hover{text-decoration:underline}.sc-app-docapitable-h .doc-table.sc-app-docapitable tbody.sc-app-docapitable td.doc-option-default.sc-app-docapitable{font-family:ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, Liberation Mono, monospace;color:var(--primary-color)}.sc-app-docapitable-h .doc-table.sc-app-docapitable tbody.sc-app-docapitable td.sc-app-docapitable:first-child{color:var(--primary-color);font-weight:700;font-family:ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, Liberation Mono, monospace}.sc-app-docapitable-h .doc-table.sc-app-docapitable tbody.sc-app-docapitable td.sc-app-docapitable .doc-option-name.sc-app-docapitable,.sc-app-docapitable-h .doc-table.sc-app-docapitable tbody.sc-app-docapitable td.sc-app-docapitable>i.sc-app-docapitable{font-family:ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, Liberation Mono, monospace;position:relative;scroll-margin-top:6.5rem;background-color:var(--highlight-bg);color:var(--highlight-text-color);border-radius:6px;padding:2px 6px;font-weight:600;font-style:normal}.sc-app-docapitable-h .doc-table.sc-app-docapitable tbody.sc-app-docapitable td.sc-app-docapitable .doc-option-name.sc-app-docapitable .doc-option-link.sc-app-docapitable,.sc-app-docapitable-h .doc-table.sc-app-docapitable tbody.sc-app-docapitable td.sc-app-docapitable>i.sc-app-docapitable .doc-option-link.sc-app-docapitable{position:absolute;top:0;right:-1.5rem;color:var(--primary-color);opacity:0.7;display:none;-webkit-transition:opacity 0.3s, colors 0.3s;transition:opacity 0.3s, colors 0.3s}.sc-app-docapitable-h .doc-table.sc-app-docapitable tbody.sc-app-docapitable td.sc-app-docapitable:hover .doc-option-name.sc-app-docapitable .doc-option-link.sc-app-docapitable{display:inline}.sc-app-docapitable-h .doc-table.sc-app-docapitable tbody.sc-app-docapitable td.sc-app-docapitable:hover .doc-option-name.sc-app-docapitable .doc-option-link.sc-app-docapitable:hover{opacity:1}';export{p as app_docapitable}