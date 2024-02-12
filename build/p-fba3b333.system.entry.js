System.register(["./p-1e3134cd.system.js"],(function(e){"use strict";var n,u,i;return{setters:[function(e){n=e.r;u=e.h;i=e.H}],execute:function(){var t=".sc-input-number-prefix-and-suffix-h{display:block}";var a=e("input_number_prefix_and_suffix",function(){function e(e){n(this,e);this.code={basic:'\n\n<any-input-number id="inputNumberMile" value="20" label="Mile" a-suffix=" ml"></any-input-number>\n<any-input-number id="inputNumberPercent" value="50" label="Percent" a-prefix="%"></any-input-number>\n<any-input-number id="inputNumberExpiry" value="10" label="Expiry" a-prefix="Expires in " a-suffix=" days"></any-input-number>\n<any-input-number id="inputNumberTemperature" value="20" label="Temperature" a-prefix="↑ " a-suffix="℃" min="0" max="40"></any-input-number>\n\n',html:'\n\n<div class="full-card flex flex-wrap gap-3 any-fluid">\n  <div class="flex-auto">\n    <any-input-number id="inputNumberMile" class="in" value="20" label="Mile" a-suffix=" ml"></any-input-number>\n  </div>\n  <div class="flex-auto">\n    <any-input-number id="inputNumberPercent" class="in" value="50" label="Percent" a-prefix="%"></any-input-number>\n  </div>\n  <div class="flex-auto">\n    <any-input-number id="inputNumberExpiry" class="in" value="10" label="Expiry" a-prefix="Expires in " a-suffix=" days"></any-input-number>\n  </div>\n  <div class="flex-auto">\n    <any-input-number id="inputNumberTemperature" class="in" value="20" label="Temperature" a-prefix="↑ " a-suffix="℃" min="0" max="40"></any-input-number>\n  </div>\n</div>\n\n',javascript:'\n\nlet inputNumberMile = document.getElementById("inputNumberMile");\nlet inputNumberPercent = document.getElementById("inputNumberPercent");\nlet inputNumberExpiry = document.getElementById("inputNumberExpiry");\nlet inputNumberTemperature document.getElementById("inputNumberTemperature");\n\nconst inputStyle = {\n  width: "100%",\n};\ndocument.querySelectorAll(".in").forEach((inputNumberComp: any) => {\n  inputNumberComp.inputWrapperClass = "any-field block";\n  inputNumberComp.inputStyle = inputStyle;\n});\n\ninputNumberMile.addEventListener("valueChange", (event) => {\n  console.log("inputNumberMile changed:", event);\n});\ninputNumberPercent.addEventListener("valueChange", (event) => {\n  console.log("inputNumberPercent changed:", event);\n});\ninputNumberExpiry.addEventListener("valueChange", (event) => {\n  console.log("inputNumberExpiry changed:", event);\n});\ninputNumberTemperature("valueChange", (event) => {\n  console.log("inputNumberTemperature:", event);\n});\n\n'};this.textId=undefined;this.textTitle=undefined}e.prototype.componentDidLoad=function(){var e={width:"100%"};document.querySelectorAll(".in").forEach((function(n){n.inputWrapperClass="any-field block";n.inputStyle=e}))};e.prototype.render=function(){return u(i,null,u("section",{class:"py-4"},u("app-docsectiontext",{textTitle:this.textTitle,textId:this.textId},u("p",null,"Custom texts e.g. units can be placed before or after the input section with the a-prefix and a-suffix properties.")),u("div",{class:"full-card flex flex-wrap gap-3 any-fluid"},u("div",{class:"flex-auto"},u("any-input-number",{class:"in",id:"inputNumberMile",value:20,label:"Mile",aSuffix:" ml"})),u("div",{class:"flex-auto"},u("any-input-number",{class:"in",id:"inputNumberPercent",value:50,label:"Percent",aPrefix:"%"})),u("div",{class:"flex-auto"},u("any-input-number",{class:"in",id:"inputNumberExpiry",value:10,label:"Expiry",aPrefix:"Expires in ",aSuffix:" days"})),u("div",{class:"flex-auto"},u("any-input-number",{class:"in",id:"inputNumberTemperature",value:20,label:"Temperature",aPrefix:"↑ ",aSuffix:"℃",min:0,max:40}))),u("app-code",{code:this.code,selector:"input-number-prefix-and-suffix"})))};return e}());a.style=t}}}));