import{r as t,h as e,H as n}from"./p-7fa45820.js";const l=class{constructor(e){t(this,e),this.code={basic:'\n\n<any-input-text id="inputTextFloatLabel" label="Username" float-label="true"></any-input-text>\n\n',html:'\n\n<div class="full-card flex justify-content-center">\n    <any-input-text id="inputTextFloatLabel" label="Username" float-label="true"></any-input-text>\n</div>\n\n',javascript:'\n\nlet inputTextFloatLabel = document.getElementById("inputTextFloatLabel");\n\ninputTextFloatLabel.addEventListener("valueChange", (event) => {\n  console.log("InputText changed:", event);\n});\n\n'},this.textId=void 0,this.textTitle=void 0}render(){return e(n,null,e("section",{class:"py-4"},e("app-docsectiontext",{textTitle:this.textTitle,textId:this.textId},e("p",null,"A floating label appears on top of the input field when focused.")),e("div",{class:"full-card flex justify-content-center"},e("any-input-text",{id:"inputTextFloatLabel",label:"Username",floatLabel:!0})),e("app-code",{code:this.code,selector:"input-text-float-label"})))}};l.style=".sc-input-text-float-label-h{display:block}";export{l as input_text_float_label}