import{r as e,c as n,h as c,H as t}from"./p-23ac7a3b.js";const a=class{constructor(c){e(this,c),this.valueChange=n(this,"valueChange",7),this.label="Readonly",this.code={basic:'\n\n<any-checkbox id="cb1" readonly="true" label="Readonly"></any-checkbox>\n\n',html:'\n\n<div class="full-card flex justify-content-center ">\n    <any-checkbox id="cb1" readonly="true" label="Readonly"></any-checkbox>\n</div>\n\n',javascript:'\n\nlet cb1 = document.getElementById("cb1");\ncb1.checked = false;\n\n    '},this.textId=void 0,this.textTitle=void 0}handleValueChange(e){}render(){return c(t,null,c("section",{class:"py-4"},c("app-docsectiontext",{textTitle:this.textTitle,textId:this.textId},c("p",null,"When disabled is present, the element cannot be edited and focused.")),c("div",{class:"full-card flex justify-content-center"},c("any-checkbox",{id:"cb1",label:this.label,readonly:!0})),c("app-code",{code:this.code,selector:"checkbox-disabled"})))}};a.style=":host{display:block}";export{a as checkbox_readonly}