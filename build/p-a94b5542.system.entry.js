System.register(["./p-1e3134cd.system.js"],(function(e){"use strict";var n,t,l;return{setters:[function(e){n=e.r;t=e.h;l=e.H}],execute:function(){var a=".sc-input-number-float-label-h{display:block}";var u=e("input_number_float_label",function(){function e(e){n(this,e);this.code={basic:'\n\n<any-input-number id="inputNumberFloatLabel" class="in" label="Number" float-label="true"></any-input-number>\n\n',html:'\n\n<div class="full-card flex justify-content-center">\n  <any-input-number id="inputNumberFloatLabel" class="in" label="Number" float-label="true"></any-input-number>\n</div>\n\n',javascript:'\n\nlet inputNumberFloatLabel = document.getElementById("inputNumberFloatLabel");\n\ninputNumberFloatLabel.addEventListener("valueChange", (event) => {\n  console.log("inputNumberFloatLabel changed:", event);\n});\n\n'};this.textId=undefined;this.textTitle=undefined}e.prototype.render=function(){return t(l,null,t("section",{class:"py-4"},t("app-docsectiontext",{textTitle:this.textTitle,textId:this.textId},t("p",null,"A floating label appears on top of the input field when focused.")),t("div",{class:"full-card flex justify-content-center"},t("any-input-number",{class:"in",id:"inputNumberFloatLabel",label:"Number",floatLabel:true})),t("app-code",{code:this.code,selector:"input-number-float-label"})))};return e}());u.style=a}}}));