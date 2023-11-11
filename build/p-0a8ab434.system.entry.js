System.register(["./p-04d9449b.system.js"],(function(t){"use strict";var e,n,i;return{setters:[function(t){e=t.r;n=t.h;i=t.H}],execute:function(){var s=".sc-input-text-disabled-h{display:block}";var d=t("input_text_disabled",function(){function t(t){e(this,t);this.code={basic:'\n\n<any-input-text id="inputTextDisabled" disabled="true"></any-input-text>\n\n',html:'\n\n<div class="full-card flex justify-content-center">\n    <any-input-text id="inputTextDisabled" disabled="true"></any-input-text>\n</div>\n\n',javascript:'\n\nlet inputTextDisabled = document.getElementById("inputTextDisabled");\n\ninputTextDisabled.addEventListener("valueChange", (event) => {\n  console.log("InputText changed:", event);\n});\n\n'};this.textId=undefined;this.textTitle=undefined}t.prototype.render=function(){return n(i,null,n("section",{class:"py-4"},n("app-docsectiontext",{textTitle:this.textTitle,textId:this.textId},n("p",null,"When disabled is present, the element cannot be edited and focused.")),n("div",{class:"full-card flex justify-content-center"},n("any-input-text",{id:"inputTextDisabled",disabled:true})),n("app-code",{code:this.code,selector:"input-text-disabled"})))};return t}());d.style=s}}}));