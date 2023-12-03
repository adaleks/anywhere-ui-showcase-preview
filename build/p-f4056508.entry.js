import{r as e,c as a,h as t,H as o}from"./p-7fa45820.js";const r=class{constructor(t){e(this,t),this.valueChange=a(this,"valueChange",7),this.label1="Value 1",this.label2="Value 2",this.binary=!0,this.code={basic:'\n\n<any-checkbox name="groupname" value="val1" label="Value 1"></any-checkbox>\n<any-checkbox name="groupname" value="val2" label="Value 2"></any-checkbox>\n\n',html:'\n\n<div class="full-card flex justify-content-center gap-3">\n    <any-checkbox name="groupname" value="val1" label="Value 1"></any-checkbox>\n    <any-checkbox name="groupname" value="val2" label="Value 2"></any-checkbox>\n</div>\n\n',javascript:'\n\nconst checkboxes = document.getElementsByName("groupname");\nconst selectedValues = [];\n\ncheckboxes.forEach((checkbox) => {\n  checkbox.addEventListener("valueChange", (event) => {\n    if (event.detail.checked) {\n      selectedValues.push(event.detail.value);\n    } else {\n      const index = selectedValues.indexOf(event.detail.value);\n      if (index !== -1) {\n        selectedValues.splice(index, 1);\n      }\n    }\n  });\n});\n\n'},this.textId=void 0,this.textTitle=void 0}handleValueChange(e){}render(){return t(o,null,t("section",{class:"py-4"},t("app-docsectiontext",{textTitle:this.textTitle,textId:this.textId},t("p",null,"The label attribute provides a label text for the checkbox. This label is also clickable and toggles the checked state.")),t("div",{class:"full-card flex justify-content-center gap-3"},t("any-checkbox",{id:"cb1",label:this.label1}),t("any-checkbox",{id:"cb2",label:this.label2})),t("app-code",{code:this.code,selector:"checkbox-label"})))}};r.style="@-webkit-keyframes growDown{0%{-webkit-transform:scaleY(0);transform:scaleY(0)}80%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}100%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@keyframes growDown{0%{-webkit-transform:scaleY(0);transform:scaleY(0)}80%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}100%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@-webkit-keyframes growUp{0%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}80%{-webkit-transform:scaleY(1);transform:scaleY(1)}100%{-webkit-transform:scaleY(0);transform:scaleY(0)}}@keyframes growUp{0%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}80%{-webkit-transform:scaleY(1);transform:scaleY(1)}100%{-webkit-transform:scaleY(0);transform:scaleY(0)}}@-webkit-keyframes rotateYDown{0%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(0);transform:rotateY(0)}}@keyframes rotateYDown{0%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(0);transform:rotateY(0)}}@-webkit-keyframes rotateYUp{0%{-webkit-transform:rotateY(0);transform:rotateY(0)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}}@keyframes rotateYUp{0%{-webkit-transform:rotateY(0);transform:rotateY(0)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}}@-webkit-keyframes spin{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes fadeIn{0%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes fadeIn{0%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes fadeOut{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}100%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}}@keyframes fadeOut{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}100%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}}@-webkit-keyframes slideDownFadeIn{0%{-webkit-transform:translateY(-10px);transform:translateY(-10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes slideDownFadeIn{0%{-webkit-transform:translateY(-10px);transform:translateY(-10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@-webkit-keyframes slideDownFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}}@keyframes slideDownFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}}@-webkit-keyframes slideUpFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}}@keyframes slideUpFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}}@-webkit-keyframes slideUpFadeIn{0%{-webkit-transform:translateY(10px);transform:translateY(10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes slideUpFadeIn{0%{-webkit-transform:translateY(10px);transform:translateY(10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}*.sc-checkbox-label{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.any-component.sc-checkbox-label,.any-element.sc-checkbox-label,.any-element.sc-checkbox-label *.sc-checkbox-label,.any-component.sc-checkbox-label *.sc-checkbox-label{font-family:var(--fontFamily);font-size:var(--fontSize);text-decoration:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-tap-highlight-color:transparent}.any-component.sc-checkbox-label *.sc-checkbox-label,.any-element.sc-checkbox-label *.sc-checkbox-label,.any-element.sc-checkbox-label *.sc-checkbox-label *.sc-checkbox-label,.any-component.sc-checkbox-label *.sc-checkbox-label *.sc-checkbox-label{-webkit-box-sizing:border-box;box-sizing:border-box}.any-element.any-element-flex.sc-checkbox-label{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}.any-corner-all.sc-checkbox-label{-moz-border-radius:var(--borderRadius);-webkit-border-radius:var(--borderRadius);border-radius:var(--borderRadius)}.any-corner-right.sc-checkbox-label{-moz-border-radius-topright:var(--borderRadius);-webkit-border-top-right-radius:var(--borderRadius);border-top-right-radius:var(--borderRadius);-moz-border-radius-bottomright:var(--borderRadius);-webkit-border-bottom-right-radius:var(--borderRadius);border-bottom-right-radius:var(--borderRadius)}.any-shadow.sc-checkbox-label{-webkit-box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.3);box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.3)}.any-disabled.sc-checkbox-label,.any-disabled.sc-checkbox-label *.sc-checkbox-label{cursor:default !important;pointer-events:none}.any-checkbox-disabled.sc-checkbox-label{cursor:default !important;pointer-events:none}.any-disabled.sc-checkbox-label,.any-component.sc-checkbox-label:disabled{opacity:var(--disabledOpacity)}.iconify.sc-checkbox-label{font-size:var(--anyIconFontSize);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.growDown-animation.sc-checkbox-label{-webkit-animation:growDown 125ms ease-in-out forwards;animation:growDown 125ms ease-in-out forwards}.growUp-animation.sc-checkbox-label{-webkit-animation:growUp 125ms ease-in-out forwards;animation:growUp 125ms ease-in-out forwards}.rotateYDown-animation.sc-checkbox-label{-webkit-animation:rotateYDown 125ms ease-in-out forwards;animation:rotateYDown 125ms ease-in-out forwards}.rotateYUp-animation.sc-checkbox-label{-webkit-animation:rotateYUp 125ms ease-in-out forwards;animation:rotateYUp 125ms ease-in-out forwards}.fadeIn-animation.sc-checkbox-label{-webkit-animation:fadeIn 80ms ease-in-out forwards;animation:fadeIn 80ms ease-in-out forwards}.fadeOut-animation.sc-checkbox-label{-webkit-animation:fadeOut 80ms ease-in-out forwards;animation:fadeOut 80ms ease-in-out forwards}.slideUpFadeOut-animation.direction-up.sc-checkbox-label{-webkit-animation:slideUpFadeOut 200ms ease-in-out forwards;animation:slideUpFadeOut 200ms ease-in-out forwards}.slideUpFadeOut-animation.direction-down.sc-checkbox-label{-webkit-animation:slideDownFadeOut 200ms ease-in-out forwards;animation:slideDownFadeOut 200ms ease-in-out forwards}.slideDownFadeIn-animation.direction-down.sc-checkbox-label{-webkit-animation:slideDownFadeIn 200ms ease-in-out forwards;animation:slideDownFadeIn 200ms ease-in-out forwards}.slideDownFadeIn-animation.direction-up.sc-checkbox-label{-webkit-animation:slideUpFadeIn 200ms ease-in-out forwards;animation:slideUpFadeIn 200ms ease-in-out forwards}.direction-down.sc-checkbox-label{-webkit-transform-origin:top center;transform-origin:top center}.direction-up.sc-checkbox-label{-webkit-transform-origin:bottom center;transform-origin:bottom center}.any-field.sc-checkbox-label>label.sc-checkbox-label{display:inline-block;margin-bottom:0.5rem;margin-right:0.5rem}.any-hidden-accessible.sc-checkbox-label{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.any-spin.sc-checkbox-label{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.any-ml-2.sc-checkbox-label{margin-left:0.5rem !important}.any-mr-2.sc-checkbox-label{margin-right:0.5rem !important}.any-mr-4.sc-checkbox-label{margin-right:1.5rem !important}.any-text-bold.sc-checkbox-label{font-weight:700 !important}.hidden.sc-checkbox-label{display:none !important}.gap-0.sc-checkbox-label{gap:0rem !important}.gap-1.sc-checkbox-label{gap:0.25rem !important}.gap-2.sc-checkbox-label{gap:0.5rem !important}.gap-3.sc-checkbox-label{gap:1rem !important}.gap-4.sc-checkbox-label{gap:1.5rem !important}.gap-5.sc-checkbox-label{gap:2rem !important}.gap-6.sc-checkbox-label{gap:3rem !important}.gap-7.sc-checkbox-label{gap:4rem !important}.gap-8.sc-checkbox-label{gap:5rem !important}.sc-checkbox-label-h{display:block}.sc-checkbox-label-h .doc-component.sc-checkbox-label .doc-component-top.sc-checkbox-label{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;margin:0 17rem 0 0;border-bottom:1px solid var(--surface-border);margin-bottom:2rem}.sc-checkbox-label-h .doc-component.sc-checkbox-label .doc-component-top.sc-checkbox-label .app-demoactions.sc-checkbox-label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-top:1em}.sc-checkbox-label-h .doc-tabmenu.sc-checkbox-label{list-style:none;padding:0;display:-ms-flexbox;display:flex;margin-bottom:0}.sc-checkbox-label-h .doc-tabmenu.sc-checkbox-label li.sc-checkbox-label{margin-bottom:-1px}.sc-checkbox-label-h .doc-tabmenu.sc-checkbox-label li.sc-checkbox-label button.sc-checkbox-label{background-color:transparent;border:0 none;display:block;padding:1rem 0;min-width:12rem;text-align:center;color:var(--text-color-secondary);font-size:1.125rem;letter-spacing:2px;cursor:pointer;margin:0;-webkit-transition:all 0.3s;transition:all 0.3s;border-bottom:1px solid transparent;border-top-right-radius:var(--border-round);border-top-left-radius:var(--border-round)}.sc-checkbox-label-h .doc-tabmenu.sc-checkbox-label li.sc-checkbox-label button.sc-checkbox-label:hover{border-bottom-color:var(--text-color)}.sc-checkbox-label-h .doc-tabmenu.sc-checkbox-label li.sc-checkbox-label button.sc-checkbox-label:focus{outline:0 none}.sc-checkbox-label-h .doc-tabmenu.sc-checkbox-label li.doc-tabmenu-active.sc-checkbox-label button.sc-checkbox-label{color:var(--primary-color);border-bottom-color:var(--primary-color)}.sc-checkbox-label-h .doc-tabpanel.sc-checkbox-label,.sc-checkbox-label-h .doc.sc-checkbox-label{display:-ms-flexbox;display:flex}.sc-checkbox-label-h .doc-main.sc-checkbox-label{-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;-ms-flex-preferred-size:0;flex-basis:0;min-width:0}.sc-checkbox-label-h .doc-intro.sc-checkbox-label{margin-bottom:2rem}.sc-checkbox-label-h .doc-intro.sc-checkbox-label p.sc-checkbox-label{font-size:1.25rem;color:var(--surface-800)}.sc-checkbox-label-h .layout-wrapper-light.sc-checkbox-label .doc-section-description.sc-checkbox-label>p.sc-checkbox-label i.sc-checkbox-label{background-color:var(--primary-100);color:var(--primary-900)}.sc-checkbox-label-h .layout-wrapper-dark.sc-checkbox-label .doc-section-description.sc-checkbox-label>p.sc-checkbox-label i.sc-checkbox-label{background-color:var(--highlight-bg);color:var(--highlight-text-color)}.sc-checkbox-label-h .doc-section-code-tooltip.sc-checkbox-label .any-tooltip-text.sc-checkbox-label{padding:0.5rem;font-size:11px}.sc-checkbox-label-h{display:block}";export{r as checkbox_label}