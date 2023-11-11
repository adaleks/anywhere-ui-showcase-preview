System.register(["./p-04d9449b.system.js","./p-138bab61.system.js","./p-1022009a.system.js"],(function(n){"use strict";var e,t,o,d,i;return{setters:[function(n){e=n.r;t=n.h;o=n.H},function(n){d=n.C},function(n){i=n.C}],execute:function(){var r=".sc-dropdown-filter-h{display:block}";var l=n("dropdown_filter",function(){function n(n){e(this,n);this.cities=d;this.cache=new i;this.citiesFormated=[];this.dropdownWidth={filter:{width:"14rem"}};this.code={basic:'\n\n<any-dropdown id="dropdownFilter" placeholder="Select a City" show-clear="true" filter="true"></any-dropdown>\n\n',html:'\n\n<div class="full-card flex justify-content-center">\n  <any-dropdown id="dropdownFilter" placeholder="Select a City" show-clear="true" filter="true"></any-dropdown>\n</div>\n\n',javascript:'\n\nlet cities = [\n  {\n    label: "New York",\n    value: {\n      id: 1,\n      name: "New York",\n      code: "NY",\n      countryCode: "us",\n      country: "USA",\n    },\n  },\n  {\n    label: "Rome",\n    value: {\n      id: 2,\n      name: "Rome",\n      code: "RM",\n      countryCode: "it",\n      country: "Italy",\n    },\n  },\n  {\n    label: "London",\n    value: {\n      id: 3,\n      name: "London",\n      code: "LDN",\n      countryCode: "gb",\n      country: "England",\n    },\n  },\n  {\n    label: "Istanbul",\n    value: {\n      id: 4,\n      name: "Istanbul",\n      code: "IST",\n      countryCode: "tr",\n      country: "Turkey",\n    },\n  },\n  {\n    label: "Paris",\n    value: {\n      id: 5,\n      name: "Paris",\n      code: "PRS",\n      countryCode: "fr",\n      country: "France",\n    },\n  },\n  {\n    label: "Belgrade",\n    value: {\n      id: 6,\n      name: "Belgrade",\n      code: "BGD",\n      countryCode: "rs",\n      country: "Serbia",\n    },\n  },\n  {\n    label: "Tokyo",\n    value: {\n      id: 7,\n      name: "Tokyo",\n      code: "TOK",\n      countryCode: "jp",\n      country: "Japan",\n    },\n  },\n  {\n    label: "Madrid",\n    value: {\n      id: 8,\n      name: "Madrid",\n      code: "MAD",\n      countryCode: "es",\n      country: "Spain",\n    },\n  },\n];\n\nlet dropdownFilter = document.getElementById("dropdownFilter");\n\ndropdownFilter.options = cities;\ndropdownFilter.anyStyle = {\n  width: "14rem"\n};\n\ndropdownFilter.addEventListener("valueChange", (event) => {\n  console.log(event.detail.value);\n});\n\n'};this.textId=undefined;this.textTitle=undefined}n.prototype.componentWillLoad=function(){var n;var e=[];if(!((n=this.cache.get("dropdownCitiesItems"))===null||n===void 0?void 0:n.length)){e=this.cities.map((function(n){if(n.value.countryCode){n.value.countryCode=n.value.countryCode.toLowerCase()}return n}));this.cache.set("dropdownCitiesItems",e)}this.citiesFormated=this.cache.get("dropdownCitiesItems")};n.prototype.render=function(){return t(o,null,t("section",{class:"py-4"},t("app-docsectiontext",{textTitle:this.textTitle,textId:this.textId},t("p",null,"Dropdown provides built-in filtering that is enabled by adding the filter property.")),t("div",{class:"full-card flex justify-content-center"},t("any-dropdown",{anyStyle:this.dropdownWidth.filter,options:this.citiesFormated,id:"dropdownFilter",placeholder:"Select a City","show-clear":true,filter:true})),t("app-code",{code:this.code,selector:"dropdown-filter"})))};return n}());l.style=r}}}));