System.register(["./p-dbcd7146.system.js"],(function(t){"use strict";var e,n,c;return{setters:[function(t){e=t.r;n=t.h;c=t.H}],execute:function(){var a=".sc-input-text-basic-h{display:block}";var i=a;var d=t("input_text_basic",function(){function t(t){e(this,t);this.code={basic:'\n\n<any-input-text id="inputTextBasic"></any-input-text>\n\n',html:'\n\n<div class="full-card flex justify-content-center">\n    <any-input-text id="inputTextBasic"></any-input-text>\n</div>\n\n',javascript:'\n\nlet inputTextBasic = document.getElementById("inputTextBasic");\n\ninputTextBasic.addEventListener("valueChange", (event) => {\n  console.log("InputText changed:", event);\n});\n\n'};this.textId=undefined;this.textTitle=undefined}t.prototype.render=function(){return n(c,{key:"2cfcbf886e7df81d111424950a3306b708f5e642"},n("section",{key:"b41c90aad4acd54565d87f3a221fbf1121678dc2",class:"py-4"},n("app-docsectiontext",{key:"80e777f230266fb7714b0ca99d69425da234aa36",textTitle:this.textTitle,textId:this.textId},n("p",{key:"9d43a5b3c96a699545a263ac784dc00590ec59fd"},"InputText renders a text field to enter data.")),n("div",{key:"6faed7b2230b5b69190f166db81cba8e8281f7b6",class:"full-card flex justify-content-center"},n("any-input-text",{key:"fbce1cf3ae90c8dae2b7cda35b09308d3c9ea228",id:"inputTextBasic"})),n("app-code",{key:"27e2fbf4dbee498d51f85eecd25280c9d8125ba3",code:this.code,selector:"input-text-basic"})))};return t}());d.style=i}}}));