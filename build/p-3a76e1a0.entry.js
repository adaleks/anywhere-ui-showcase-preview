import{r as e,c,h as s,H as a}from"./p-7fa45820.js";const l=class{constructor(s){e(this,s),this.valueChange=c(this,"valueChange",7),this.label="Disabled",this.code={basic:'\n\n<any-checkbox id="checkboxDisabled" disabled="true" label="Disabled"></any-checkbox>\n\n',html:'\n\n<div class="full-card flex justify-content-center ">\n    <any-checkbox id="checkboxDisabled" disabled="true" label="Disabled"></any-checkbox>\n</div>\n\n',javascript:'\n\nlet checkboxDisabled = document.getElementById("checkboxDisabled");\ncheckboxDisabled.checked = false;\n\n    '},this.textId=void 0,this.textTitle=void 0}handleValueChange(e){}render(){return s(a,null,s("section",{class:"py-4"},s("app-docsectiontext",{textTitle:this.textTitle,textId:this.textId},s("p",null,"When disabled is present, the element cannot be edited and focused.")),s("div",{class:"full-card flex justify-content-center"},s("any-checkbox",{id:"checkboxDisabled",label:this.label,disabled:!0})),s("app-code",{code:this.code,selector:"checkbox-disabled"})))}};l.style=".sc-checkbox-disabled-h{display:block}";export{l as checkbox_disabled}