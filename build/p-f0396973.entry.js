import{r as n,h as e,H as t}from"./p-62a727c0.js";import{C as o}from"./p-f565a318.js";import{C as d}from"./p-e0276e02.js";const r=class{constructor(e){n(this,e),this.cities=o,this.cache=new d,this.citiesFormated=[],this.dropdownWidth={filter:{width:"14rem"}},this.code={basic:'\n\n<any-dropdown id="dropdownFilter" placeholder="Select a City" show-clear="true" filter="true"></any-dropdown>\n\n',html:'\n\n<div class="full-card flex justify-content-center">\n  <any-dropdown id="dropdownFilter" placeholder="Select a City" show-clear="true" filter="true"></any-dropdown>\n</div>\n\n',javascript:'\n\nlet cities = [\n  {\n    label: "New York",\n    value: {\n      id: 1,\n      name: "New York",\n      code: "NY",\n      countryCode: "us",\n      country: "USA",\n    },\n  },\n  {\n    label: "Rome",\n    value: {\n      id: 2,\n      name: "Rome",\n      code: "RM",\n      countryCode: "it",\n      country: "Italy",\n    },\n  },\n  {\n    label: "London",\n    value: {\n      id: 3,\n      name: "London",\n      code: "LDN",\n      countryCode: "gb",\n      country: "England",\n    },\n  },\n  {\n    label: "Istanbul",\n    value: {\n      id: 4,\n      name: "Istanbul",\n      code: "IST",\n      countryCode: "tr",\n      country: "Turkey",\n    },\n  },\n  {\n    label: "Paris",\n    value: {\n      id: 5,\n      name: "Paris",\n      code: "PRS",\n      countryCode: "fr",\n      country: "France",\n    },\n  },\n  {\n    label: "Belgrade",\n    value: {\n      id: 6,\n      name: "Belgrade",\n      code: "BGD",\n      countryCode: "rs",\n      country: "Serbia",\n    },\n  },\n  {\n    label: "Tokyo",\n    value: {\n      id: 7,\n      name: "Tokyo",\n      code: "TOK",\n      countryCode: "jp",\n      country: "Japan",\n    },\n  },\n  {\n    label: "Madrid",\n    value: {\n      id: 8,\n      name: "Madrid",\n      code: "MAD",\n      countryCode: "es",\n      country: "Spain",\n    },\n  },\n];\n\nlet dropdownFilter = document.getElementById("dropdownFilter");\n\ndropdownFilter.options = cities;\ndropdownFilter.anyStyle = {\n  width: "14rem"\n};\n\ndropdownFilter.addEventListener("valueChange", (event) => {\n  console.log(event.detail.value);\n});\n\n'},this.textId=void 0,this.textTitle=void 0}componentWillLoad(){let n=[];this.cache.get("dropdownCitiesItems")?.length||(n=this.cities.map((n=>(n.value.countryCode&&(n.value.countryCode=n.value.countryCode.toLowerCase()),n))),this.cache.set("dropdownCitiesItems",n)),this.citiesFormated=this.cache.get("dropdownCitiesItems")}render(){return e(t,null,e("section",{class:"py-4"},e("app-docsectiontext",{textTitle:this.textTitle,textId:this.textId},e("p",null,"Dropdown provides built-in filtering that is enabled by adding the filter property.")),e("div",{class:"full-card flex justify-content-center"},e("any-dropdown",{anyStyle:this.dropdownWidth.filter,options:this.citiesFormated,id:"dropdownFilter",placeholder:"Select a City","show-clear":!0,filter:!0})),e("app-code",{code:this.code,selector:"dropdown-filter"})))}};r.style=".sc-dropdown-filter-h{display:block}";export{r as dropdown_filter}