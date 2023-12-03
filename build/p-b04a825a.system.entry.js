System.register(["./p-1e3134cd.system.js"],(function(e){"use strict";var n,a,i;return{setters:[function(e){n=e.r;a=e.h;i=e.H}],execute:function(){var t=".sc-input-number-locale-h{display:block}";var l=e("input_number_locale",function(){function e(e){n(this,e);this.code={basic:'\n\n<any-input-number id="inputNumberUserLocale" value="151351" label="User Locale" min-fraction-digits="2"></any-input-number>\n<any-input-number id="inputNumberUnitedStatesLocale" value="115744" label="United States Locale" min-fraction-digits="2" mode="decimal" locale="en-US"></any-input-number>\n<any-input-number id="inputNumberMinGermanLocale" value="635524" label="German Locale" min-fraction-digits="2" mode="decimal" locale="de-DE"></any-input-number>\n<any-input-number id="inputNumberIndianLocale" value="732762" label="Indian Locale" min-fraction-digits="2" mode="decimal" locale="en-IN"></any-input-number>\n\n',html:'\n\n<div class="full-card flex flex-wrap gap-3 any-fluid">\n  <div class="flex-auto">\n    <any-input-number id="inputNumberUserLocale" class="in" value="151351" label="User Locale"></any-input-number>\n  </div>\n  <div class="flex-auto">\n    <any-input-number id="inputNumberUnitedStatesLocale" class="in" value="115744" label="United States Locale" min-fraction-digits="2" mode="decimal" locale="en-US"></any-input-number>\n  </div>\n  <div class="flex-auto">\n    <any-input-number id="inputNumberMinGermanLocale" class="in" value="635524" label="German Locale" min-fraction-digits="2" mode="decimal" locale="de-DE"></any-input-number>\n  </div>\n  <div class="flex-auto">\n    <any-input-number id="inputNumberIndianLocale" class="in" value="732762" label="Indian Locale" min-fraction-digits="2" mode="decimal" locale="en-IN"></any-input-number>\n  </div>\n</div>\n\n',javascript:'\n\nlet inputNumberUserLocale = document.getElementById("inputNumberUserLocale");\nlet inputNumberUnitedStatesLocale = document.getElementById("inputNumberUnitedStatesLocale");\nlet inputNumberMinGermanLocale = document.getElementById("inputNumberMinGermanLocale");\nlet inputNumberIndianLocale document.getElementById("inputNumberIndianLocale");\n\nconst inputStyle = {\n  width: "100%",\n};\ndocument.querySelectorAll(".in").forEach((inputNumberComp: any) => {\n  inputNumberComp.inputWrapperClass = "any-field block";\n  inputNumberComp.inputStyle = inputStyle;\n});\n\ninputNumberUserLocale.addEventListener("valueChange", (event) => {\n  console.log("inputNumberUserLocale changed:", event);\n});\ninputNumberUnitedStatesLocale.addEventListener("valueChange", (event) => {\n  console.log("inputNumberUnitedStatesLocale changed:", event);\n});\ninputNumberMinGermanLocale.addEventListener("valueChange", (event) => {\n  console.log("inputNumberMinGermanLocale changed:", event);\n});\ninputNumberIndianLocale("valueChange", (event) => {\n  console.log("inputNumberIndianLocale:", event);\n});\n\n'};this.textId=undefined;this.textTitle=undefined}e.prototype.componentDidLoad=function(){var e={width:"100%"};document.querySelectorAll(".in").forEach((function(n){n.inputWrapperClass="any-field block";n.inputStyle=e}))};e.prototype.render=function(){return a(i,null,a("section",{class:"py-4"},a("app-docsectiontext",{textTitle:this.textTitle,textId:this.textId},a("p",null,"Localization information such as grouping and decimal symbols are defined with the locale property which defaults to the user locale.")),a("div",{class:"full-card flex flex-wrap gap-3 any-fluid"},a("div",{class:"flex-auto"},a("any-input-number",{class:"in",id:"inputNumberUserLocale",value:151351,label:"User Locale","min-fraction-digits":2})),a("div",{class:"flex-auto"},a("any-input-number",{class:"in",id:"inputNumberUnitedStatesLocale",value:115744,label:"United States Locale","min-fraction-digits":2,mode:"decimal",locale:"en-US"})),a("div",{class:"flex-auto"},a("any-input-number",{class:"in",id:"inputNumberMinGermanLocale",value:635524,label:"German Locale","min-fraction-digits":2,mode:"decimal",locale:"de-DE"})),a("div",{class:"flex-auto"},a("any-input-number",{class:"in",id:"inputNumberIndianLocale",value:732762,label:"Indian Locale","min-fraction-digits":2,mode:"decimal",locale:"en-IN"}))),a("app-code",{code:this.code,selector:"input-number-locale"})))};return e}());l.style=t}}}));