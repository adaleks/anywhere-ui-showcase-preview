import{r as t,h as i,H as c}from"./p-3aa34bdb.js";const e=class{constructor(i){t(this,i),this.code={basic:'\n\n<any-input-switch id="inputSwitchBasic"></any-input-switch>\n\n',html:'\n\n<div class="full-card flex justify-content-center">\n    <any-input-switch id="inputSwitchBasic"></any-input-switch>\n</div>\n\n',javascript:'\n\nlet inputSwitchBasic = document.getElementById("inputSwitchBasic");\n\ninputSwitchBasic.checked = false;\ninputSwitchBasic.addEventListener("valueChange", (event) => {\n  console.log("InputSwitch changed:", event);\n});\n\n'},this.textId=void 0,this.textTitle=void 0}render(){return i(c,{key:"a63411e9815a898d7347005c04bf3ef4715c639d"},i("section",{key:"4bfe9f6776ccf4357b6135914c2e38e9f4859043",class:"py-4"},i("app-docsectiontext",{key:"c1b289728de050e8db5f5239f868f08e204dda01",textTitle:this.textTitle,textId:this.textId},i("p",{key:"2f3bea10d90a461d21a9a19a0b54f7f3e014145f"},"Two-way value binding is defined using value property")),i("div",{key:"8fda54044a9f4391336f72f631280bfa9e3f020e",class:"full-card flex justify-content-center"},i("any-input-switch",{key:"9881e52cc77ca99b4739b241941db8c102504a09",id:"inputSwitchBasic"})),i("app-code",{key:"d12ec4f6e0c9b4448c6afa7ff0bcfcfda13f26eb",code:this.code,selector:"input-switch-basic"})))}};e.style=".sc-input-switch-basic-h{display:block}";export{e as input_switch_basic}