System.register(["./p-25531587.system.js"],(function(e){"use strict";var c,n,t,s;return{setters:[function(e){c=e.r;n=e.c;t=e.h;s=e.H}],execute:function(){var i=".sc-checkbox-disabled-h{display:block}";var d=e("checkbox_disabled",function(){function e(e){c(this,e);this.valueChange=n(this,"valueChange",7);this.label="Disabled";this.code={basic:'\n\n<any-checkbox id="checkboxDisabled" disabled="true" label="Disabled"></any-checkbox>\n\n',html:'\n\n<div class="full-card flex justify-content-center ">\n    <any-checkbox id="checkboxDisabled" disabled="true" label="Disabled"></any-checkbox>\n</div>\n\n',javascript:'\n\nlet checkboxDisabled = document.getElementById("checkboxDisabled");\ncheckboxDisabled.checked = false;\n\n    '};this.textId=undefined;this.textTitle=undefined}e.prototype.handleValueChange=function(e){};e.prototype.render=function(){return t(s,null,t("section",{class:"py-4"},t("app-docsectiontext",{textTitle:this.textTitle,textId:this.textId},t("p",null,"When disabled is present, the element cannot be edited and focused.")),t("div",{class:"full-card flex justify-content-center"},t("any-checkbox",{id:"checkboxDisabled",label:this.label,disabled:true})),t("app-code",{code:this.code,selector:"checkbox-disabled"})))};return e}());d.style=i}}}));