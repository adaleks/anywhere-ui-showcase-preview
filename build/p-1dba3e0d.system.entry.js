System.register(["./p-1942b64a.system.js"],(function(e){"use strict";var n,c,t,a;return{setters:[function(e){n=e.r;c=e.c;t=e.h;a=e.H}],execute:function(){var l=".sc-checkbox-group-h{display:block}";var o=e("checkbox_group",function(){function e(e){n(this,e);this.valueChange=c(this,"valueChange",7);this.label1="New York";this.label2="San Francisco";this.label3="Los Angeles";this.binary=true;this.code={basic:'\n\n<any-checkbox name="group1" value="New York" label="New York" inputId="ny"></any-checkbox>\n<any-checkbox name="group1" value="San Francisco" label="San Francisco" inputId="sf"></any-checkbox>\n<any-checkbox name="group1" value="Los Angeles" label="Los Angeles" inputId="la"></any-checkbox>\n\n',html:'\n\n<div class="full-card flex justify-content-center gap-3">\n    <any-checkbox name="group1" value="New York" label="New York" inputId="ny"></any-checkbox>\n    <any-checkbox name="group1" value="San Francisco" label="San Francisco" inputId="sf"></any-checkbox>\n    <any-checkbox name="group1" value="Los Angeles" label="Los Angeles" inputId="la"></any-checkbox>\n</div>\n\n',javascript:'\n\nconst checkboxes = document.getElementsByName("group1");\nconst selectedCities = [];\n\ncheckboxes.forEach((checkbox) => {\n  checkbox.addEventListener("valueChange", (event) => {\n    if (event.detail.checked) {\n      selectedCities.push(event.detail.value);\n    } else {\n      const index = selectedCities.indexOf(event.detail.value);\n      if (index !== -1) {\n        selectedCities.splice(index, 1);\n      }\n    }\n  });\n});\n\n'};this.textId=undefined;this.textTitle=undefined}e.prototype.handleValueChange=function(e){};e.prototype.render=function(){return t(a,null,t("section",null,t("app-docsectiontext",{textTitle:this.textTitle,textId:this.textId},t("p",null,"Multiple checkboxes can be grouped together.")),t("div",{class:"full-card flex justify-content-center gap-3"},t("any-checkbox",{id:"cb1",label:this.label1,name:"group1"}),t("any-checkbox",{id:"cb2",label:this.label2,name:"group1"}),t("any-checkbox",{id:"cb3",label:this.label3,name:"group1"})),t("app-code",{code:this.code,selector:"checkboxgroup"})))};return e}());o.style=l}}}));