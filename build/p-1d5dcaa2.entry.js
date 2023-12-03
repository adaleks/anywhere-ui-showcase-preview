import{r as t,h as i,H as n}from"./p-7fa45820.js";const e=class{constructor(i){t(this,i),this.code={basic:'\n\n<any-input-switch id="inputSwitchDisabled" disabled="true"></any-input-switch>\n\n',html:'\n\n<div class="full-card flex justify-content-center">\n    <any-input-switch id="inputSwitchDisabled" disabled="true"></any-input-switch>\n</div>\n\n',javascript:'\n\nlet inputSwitchDisabled = document.getElementById("inputSwitchDisabled");\n\ninputSwitchDisabled.addEventListener("valueChange", (event) => {\n  console.log("InputSwitch changed:", event);\n});\n\n'},this.textId=void 0,this.textTitle=void 0}render(){return i(n,null,i("section",{class:"py-4"},i("app-docsectiontext",{textTitle:this.textTitle,textId:this.textId},i("p",null,"When disabled is present, the element cannot be edited and focused.")),i("div",{class:"full-card flex justify-content-center"},i("any-input-switch",{id:"inputSwitchDisabled",disabled:!0})),i("app-code",{code:this.code,selector:"input-switch-disabled"})))}};e.style=".sc-input-switch-disabled-h{display:block}";export{e as input_switch_disabled}