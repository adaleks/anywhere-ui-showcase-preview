System.register(["./p-04d9449b.system.js"],(function(t){"use strict";var e,n,l;return{setters:[function(t){e=t.r;n=t.h;l=t.H}],execute:function(){var a=".sc-input-text-float-label-h{display:block}";var i=t("input_text_float_label",function(){function t(t){e(this,t);this.code={basic:'\n\n<any-input-text id="inputTextFloatLabel" label="Username" float-label="true"></any-input-text>\n\n',html:'\n\n<div class="full-card flex justify-content-center">\n    <any-input-text id="inputTextFloatLabel" label="Username" float-label="true"></any-input-text>\n</div>\n\n',javascript:'\n\nlet inputTextFloatLabel = document.getElementById("inputTextFloatLabel");\n\ninputTextFloatLabel.addEventListener("valueChange", (event) => {\n  console.log("InputText changed:", event);\n});\n\n'};this.textId=undefined;this.textTitle=undefined}t.prototype.render=function(){return n(l,null,n("section",{class:"py-4"},n("app-docsectiontext",{textTitle:this.textTitle,textId:this.textId},n("p",null,"A floating label appears on top of the input field when focused.")),n("div",{class:"full-card flex justify-content-center"},n("any-input-text",{id:"inputTextFloatLabel",label:"Username",floatLabel:true})),n("app-code",{code:this.code,selector:"input-text-float-label"})))};return t}());i.style=a}}}));