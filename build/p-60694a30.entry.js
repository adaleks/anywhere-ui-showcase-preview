import{r as e,h as t,H as n}from"./p-62a727c0.js";const a=class{constructor(t){e(this,t),this.code={basic:'\n\n<any-input-textarea id="inputTextareaDisabled" rows="5" cols="30" disabled="true"></any-input-textarea>\n\n',html:'\n\n<div class="full-card flex justify-content-center">\n    <any-input-textarea id="inputTextareaDisabled" rows="5" cols="30" disabled="true"></any-input-textarea>\n</div>\n\n',javascript:'\n\nlet inputTextareaDisabled = document.getElementById("inputTextareaDisabled");\n\ninputTextareaDisabled.addEventListener("valueChange", (event) => {\n  console.log("InputText changed:", event);\n});\n\n'},this.textId=void 0,this.textTitle=void 0}render(){return t(n,null,t("section",{class:"py-4"},t("app-docsectiontext",{textTitle:this.textTitle,textId:this.textId},t("p",null,"When disabled is present, the element cannot be edited and focused.")),t("div",{class:"full-card flex justify-content-center"},t("any-input-textarea",{id:"inputTextareaDisabled",rows:5,cols:30,disabled:!0})),t("app-code",{code:this.code,selector:"input-text-basic"})))}};a.style=".sc-input-textarea-disabled-h{display:block}";export{a as input_textarea_disabled}