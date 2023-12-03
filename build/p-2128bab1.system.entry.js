System.register(["./p-1e3134cd.system.js"],(function(e){"use strict";var t,n,a;return{setters:[function(e){t=e.r;n=e.h;a=e.H}],execute:function(){var i=".sc-input-textarea-disabled-h{display:block}";var s=e("input_textarea_disabled",function(){function e(e){t(this,e);this.code={basic:'\n\n<any-input-textarea id="inputTextareaDisabled" rows="5" cols="30" disabled="true"></any-input-textarea>\n\n',html:'\n\n<div class="full-card flex justify-content-center">\n    <any-input-textarea id="inputTextareaDisabled" rows="5" cols="30" disabled="true"></any-input-textarea>\n</div>\n\n',javascript:'\n\nlet inputTextareaDisabled = document.getElementById("inputTextareaDisabled");\n\ninputTextareaDisabled.addEventListener("valueChange", (event) => {\n  console.log("InputText changed:", event);\n});\n\n'};this.textId=undefined;this.textTitle=undefined}e.prototype.render=function(){return n(a,null,n("section",{class:"py-4"},n("app-docsectiontext",{textTitle:this.textTitle,textId:this.textId},n("p",null,"When disabled is present, the element cannot be edited and focused.")),n("div",{class:"full-card flex justify-content-center"},n("any-input-textarea",{id:"inputTextareaDisabled",rows:5,cols:30,disabled:true})),n("app-code",{code:this.code,selector:"input-textarea-disabled"})))};return e}());s.style=i}}}));