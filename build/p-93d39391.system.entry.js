System.register(["./p-1e3134cd.system.js"],(function(n){"use strict";var e,u,r;return{setters:[function(n){e=n.r;u=n.h;r=n.H}],execute:function(){var a=".sc-input-number-currency-h{display:block}";var t=n("input_number_currency",function(){function n(n){e(this,n);this.code={basic:'\n\n<any-input-number id="inputNumberCurrencyUnitedStates" value="1500" label="United States" mode="currency" currency="USD" locale="en-US"></any-input-number>\n<any-input-number id="inputNumberCurremcyGermany" value="2500" label="Germany" mode="currency" currency="USD" locale="de-DE"></any-input-number>\n<any-input-number id="inputNumberCurremcyIndia" value="4250" label="India" mode="currency" currency="INR" currency-display="code" locale="en-IN"></any-input-number>\n<any-input-number id="inputNumberCurremcyJapan" value="5002" label="Japan" mode="currency" currency="JPY" locale="jp-JP"></any-input-number>\n\n',html:'\n\n<div class="full-card flex flex-wrap gap-3 any-fluid">\n  <div class="flex-auto">\n    <any-input-number id="inputNumberCurrencyUnitedStates" class="in" value="1500" label="United States" mode="currency" currency="USD" locale="en-US"></any-input-number>\n  </div>\n  <div class="flex-auto">\n    <any-input-number id="inputNumberCurremcyGermany" class="in" value="2500" label="Germany" mode="currency" currency="USD" locale="de-DE"></any-input-number>\n  </div>\n  <div class="flex-auto">\n    <any-input-number id="inputNumberCurremcyIndia" class="in" value="4250" label="India" mode="currency" currency="INR" currency-display="code" locale="en-IN"></any-input-number>\n  </div>\n  <div class="flex-auto">\n    <any-input-number id="inputNumberCurremcyJapan" class="in" value="5002" label="Japan" mode="currency" currency="JPY" locale="jp-JP"></any-input-number>\n  </div>\n</div>\n\n',javascript:'\n\nlet inputNumberCurrencyUnitedStates = document.getElementById("inputNumberCurrencyUnitedStates");\nlet inputNumberCurremcyGermany = document.getElementById("inputNumberCurremcyGermany");\nlet inputNumberCurrencyIndia = document.getElementById("inputNumberCurrencyIndia");\nlet inputNumberCurremcyJapan document.getElementById("inputNumberCurremcyJapan");\n\nconst inputStyle = {\n  width: "100%",\n};\ndocument.querySelectorAll(".in").forEach((inputNumberComp: any) => {\n  inputNumberComp.inputWrapperClass = "any-field block";\n  inputNumberComp.inputStyle = inputStyle;\n});\n\ninputNumberCurrencyUnitedStates.addEventListener("valueChange", (event) => {\n  console.log("inputNumberCurrencyUnitedStates changed:", event);\n});\ninputNumberCurremcyGermany.addEventListener("valueChange", (event) => {\n  console.log("inputNumberCurremcyGermany changed:", event);\n});\ninputNumberCurrencyIndia.addEventListener("valueChange", (event) => {\n  console.log("inputNumberCurrencyIndia changed:", event);\n});\ninputNumberCurremcyJapan("valueChange", (event) => {\n  console.log("inputNumberCurremcyJapan:", event);\n});\n\n'};this.textId=undefined;this.textTitle=undefined}n.prototype.componentDidLoad=function(){var n={width:"100%"};document.querySelectorAll(".in").forEach((function(e){e.inputWrapperClass="any-field block";e.inputStyle=n}))};n.prototype.render=function(){return u(r,null,u("section",{class:"py-4"},u("app-docsectiontext",{textTitle:this.textTitle,textId:this.textId},u("p",null,'Currency formatting is specified by setting the mode option to currency and currency property. In addition currencyDisplay option allows how the currency is displayed, valid values are "symbol" (default) or "code".')),u("div",{class:"full-card flex flex-wrap gap-3 any-fluid"},u("div",{class:"flex-auto"},u("any-input-number",{class:"in",id:"inputNumberCurrencyUnitedStates",value:1500,mode:"currency",currency:"USD",locale:"en-US",label:"United Stated"})),u("div",{class:"flex-auto"},u("any-input-number",{class:"in",id:"inputNumberCurremcyGermany",value:2500,mode:"currency",currency:"EUR",locale:"de-DE",label:"Germany"})),u("div",{class:"flex-auto"},u("any-input-number",{class:"in",id:"inputNumberCurrencyIndia",value:4250,mode:"currency",currencyDisplay:"code",currency:"INR",locale:"en-IN",label:"India"})),u("div",{class:"flex-auto"},u("any-input-number",{class:"in",id:"inputNumberCurremcyJapan",value:5002,mode:"currency",currency:"JPY",locale:"jp-JP",label:"Japan"}))),u("app-code",{code:this.code,selector:"input-number-currency"})))};return n}());t.style=a}}}));