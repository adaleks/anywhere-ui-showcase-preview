System.register(["./p-dbcd7146.system.js"],(function(e){"use strict";var t,a,n;return{setters:[function(e){t=e.r;a=e.h;n=e.H}],execute:function(){var l=".sc-input-textarea-float-label-h{display:block}";var c=l;var i=e("input_textarea_float_label",function(){function e(e){t(this,e);this.code={basic:'\n\n<any-input-textarea id="inputTextareaFloatlabel" rows="5" cols="30" float-label="true" label="Summary"></any-input-textarea>\n\n',html:'\n\n<div class="full-card flex justify-content-center">\n    <any-input-textarea id="inputTextareaFloatlabel" rows="5" cols="30" float-label="true" label="Summary"></any-input-textarea>\n</div>\n\n',javascript:'\n\nlet inputTextareaFloatlabel = document.getElementById("inputTextareaFloatlabel");\n\ninputTextareaFloatlabel.addEventListener("valueChange", (event) => {\n  console.log("InputText changed:", event);\n});\n\n'};this.textId=undefined;this.textTitle=undefined}e.prototype.render=function(){return a(n,{key:"1945f5f22ea400bfda7f6890067b857e916ecd5b"},a("section",{key:"4c03e2d175b38ba71334186c321fe7b0e1858030",class:"py-4"},a("app-docsectiontext",{key:"6e8cf9cc387566fba5cf8c0e7e2d491669261d8b",textTitle:this.textTitle,textId:this.textId},a("p",{key:"a0e785e986584449547560c0637d889d2dc4cee8"},"A floating label appears on top of the input field when focused.")),a("div",{key:"b3d52618ee77055e3618932c088141fc88f2aaf6",class:"full-card flex justify-content-center"},a("any-input-textarea",{key:"00c8a87d3a742735365451d200c9e419e1d4e15c",id:"inputTextareaFloatlabel",rows:5,cols:30,label:"Summary",floatLabel:true})),a("app-code",{key:"cdbfaffd41afe68903ea4de89c48149dcbfbf36e",code:this.code,selector:"input-textarea-float-label"})))};return e}());i.style=c}}}));