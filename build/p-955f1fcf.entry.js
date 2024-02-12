import{r as e,c,h as n,H as a}from"./p-3aa34bdb.js";const s=class{constructor(n){e(this,n),this.valueChange=c(this,"valueChange",7),this.label1="New York",this.label2="San Francisco",this.label3="Los Angeles",this.binary=!0,this.code={basic:'\n\n<any-checkbox name="group1" value="New York" label="New York" inputId="ny"></any-checkbox>\n<any-checkbox name="group1" value="San Francisco" label="San Francisco" inputId="sf"></any-checkbox>\n<any-checkbox name="group1" value="Los Angeles" label="Los Angeles" inputId="la"></any-checkbox>\n\n',html:'\n\n<div class="full-card flex justify-content-center gap-3">\n    <any-checkbox name="group1" value="New York" label="New York" inputId="ny"></any-checkbox>\n    <any-checkbox name="group1" value="San Francisco" label="San Francisco" inputId="sf"></any-checkbox>\n    <any-checkbox name="group1" value="Los Angeles" label="Los Angeles" inputId="la"></any-checkbox>\n</div>\n\n',javascript:'\n\nconst checkboxes = document.getElementsByName("group1");\nconst selectedCities = [];\n\ncheckboxes.forEach((checkbox) => {\n  checkbox.addEventListener("valueChange", (event) => {\n    if (event.detail.checked) {\n      selectedCities.push(event.detail.value);\n    } else {\n      const index = selectedCities.indexOf(event.detail.value);\n      if (index !== -1) {\n        selectedCities.splice(index, 1);\n      }\n    }\n  });\n});\n\n'},this.textId=void 0,this.textTitle=void 0}handleValueChange(e){}render(){return n(a,{key:"24383ee36299fdeb55e153f44f8a3d6820bc941b"},n("section",{key:"079245ca3fef08a0476b885d2fb5003de99202de",class:"py-4"},n("app-docsectiontext",{key:"f1679ea787118b7e4ad625259348c27128663925",textTitle:this.textTitle,textId:this.textId},n("p",{key:"7ef27a32db25cb45c70d96e70315b904107bb172"},"Multiple checkboxes can be grouped together.")),n("div",{key:"e72914784088e5d357ab93ecb41b1b04aed30720",class:"full-card flex justify-content-center gap-3"},n("any-checkbox",{key:"eec8354f16f4477f9e2a06d2b78a4b765954a64d",id:"cb1",label:this.label1,name:"group1"}),n("any-checkbox",{key:"a663912db53ecab715c57c7510bbd8c6fa845628",id:"cb2",label:this.label2,name:"group1"}),n("any-checkbox",{key:"a0611cdc2d40d372d953d7563e56f0ac21fe7216",id:"cb3",label:this.label3,name:"group1"})),n("app-code",{key:"72dec2f4e33c807481388330df810aa8d1a14308",code:this.code,selector:"checkboxgroup"})))}};s.style=".sc-checkbox-group-h{display:block}";export{s as checkbox_group}