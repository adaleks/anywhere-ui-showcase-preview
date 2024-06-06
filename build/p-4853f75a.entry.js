import{r as e,h as n,H as a}from"./p-1799da65.js";const i=class{constructor(n){e(this,n),this.code={basic:'\n\n<any-input-number id="inputNumberUserLocale" value="151351" label="User Locale" min-fraction-digits="2"></any-input-number>\n<any-input-number id="inputNumberUnitedStatesLocale" value="115744" label="United States Locale" min-fraction-digits="2" mode="decimal" locale="en-US"></any-input-number>\n<any-input-number id="inputNumberMinGermanLocale" value="635524" label="German Locale" min-fraction-digits="2" mode="decimal" locale="de-DE"></any-input-number>\n<any-input-number id="inputNumberIndianLocale" value="732762" label="Indian Locale" min-fraction-digits="2" mode="decimal" locale="en-IN"></any-input-number>\n\n',html:'\n\n<div class="full-card flex flex-wrap gap-3 any-fluid">\n  <div class="flex-auto">\n    <any-input-number id="inputNumberUserLocale" class="in" value="151351" label="User Locale"></any-input-number>\n  </div>\n  <div class="flex-auto">\n    <any-input-number id="inputNumberUnitedStatesLocale" class="in" value="115744" label="United States Locale" min-fraction-digits="2" mode="decimal" locale="en-US"></any-input-number>\n  </div>\n  <div class="flex-auto">\n    <any-input-number id="inputNumberMinGermanLocale" class="in" value="635524" label="German Locale" min-fraction-digits="2" mode="decimal" locale="de-DE"></any-input-number>\n  </div>\n  <div class="flex-auto">\n    <any-input-number id="inputNumberIndianLocale" class="in" value="732762" label="Indian Locale" min-fraction-digits="2" mode="decimal" locale="en-IN"></any-input-number>\n  </div>\n</div>\n\n',javascript:'\n\nlet inputNumberUserLocale = document.getElementById("inputNumberUserLocale");\nlet inputNumberUnitedStatesLocale = document.getElementById("inputNumberUnitedStatesLocale");\nlet inputNumberMinGermanLocale = document.getElementById("inputNumberMinGermanLocale");\nlet inputNumberIndianLocale document.getElementById("inputNumberIndianLocale");\n\nconst inputStyle = {\n  width: "100%",\n};\ndocument.querySelectorAll(".in").forEach((inputNumberComp: any) => {\n  inputNumberComp.inputWrapperClass = "any-field block";\n  inputNumberComp.inputStyle = inputStyle;\n});\n\ninputNumberUserLocale.addEventListener("valueChange", (event) => {\n  console.log("inputNumberUserLocale changed:", event);\n});\ninputNumberUnitedStatesLocale.addEventListener("valueChange", (event) => {\n  console.log("inputNumberUnitedStatesLocale changed:", event);\n});\ninputNumberMinGermanLocale.addEventListener("valueChange", (event) => {\n  console.log("inputNumberMinGermanLocale changed:", event);\n});\ninputNumberIndianLocale("valueChange", (event) => {\n  console.log("inputNumberIndianLocale:", event);\n});\n\n'},this.textId=void 0,this.textTitle=void 0}componentDidLoad(){const e={width:"100%"};document.querySelectorAll(".in").forEach((n=>{n.inputWrapperClass="any-field block",n.inputStyle=e}))}render(){return n(a,{key:"9b328b60bbe902aea38e5aa618b4573931c03913"},n("section",{key:"53409e5cdbb2f30cb0b8f0ba1b6e3c3ac668648e",class:"py-4"},n("app-docsectiontext",{key:"dcc00be930832366c07bec7aca81f61318c85daa",textTitle:this.textTitle,textId:this.textId},n("p",{key:"aa8f3ac47834346960a937927d4914d369265d95"},"Localization information such as grouping and decimal symbols are defined with the locale property which defaults to the user locale.")),n("div",{key:"285839432a117ed07ad59c5d66e5784109ac5f79",class:"full-card flex flex-wrap gap-3 any-fluid"},n("div",{key:"ca9b49bbfc30485dc6a1bd35604a3b8f7974eef8",class:"flex-auto"},n("any-input-number",{key:"d14ae5257433811fafe1103558f090af18802ac7",class:"in",id:"inputNumberUserLocale",value:151351,label:"User Locale","min-fraction-digits":2})),n("div",{key:"0e5b353e363317f02097687561c9756c204b7f3e",class:"flex-auto"},n("any-input-number",{key:"25b888ce46c58c9e3bd86359e2a05c0a49ea1a18",class:"in",id:"inputNumberUnitedStatesLocale",value:115744,label:"United States Locale","min-fraction-digits":2,mode:"decimal",locale:"en-US"})),n("div",{key:"ee8d28d6ac19ea6cfea1451a947deeafe3727c41",class:"flex-auto"},n("any-input-number",{key:"9cb8dcaa82eb9396ec503c30bc8b2aa67e23b702",class:"in",id:"inputNumberMinGermanLocale",value:635524,label:"German Locale","min-fraction-digits":2,mode:"decimal",locale:"de-DE"})),n("div",{key:"1c32356c1638f9fb37719257af88668ae16fed79",class:"flex-auto"},n("any-input-number",{key:"49704c7361369474a85555d48a445a332fb5ed62",class:"in",id:"inputNumberIndianLocale",value:732762,label:"Indian Locale","min-fraction-digits":2,mode:"decimal",locale:"en-IN"}))),n("app-code",{key:"ec90ca7cabf23de502fed6fb44a3c41954a03fa4",code:this.code,selector:"input-number-locale"})))}};i.style=".sc-input-number-locale-h{display:block}";export{i as input_number_locale}