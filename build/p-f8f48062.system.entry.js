System.register(["./p-1e3134cd.system.js"],(function(n){"use strict";var t,i,e;return{setters:[function(n){t=n.r;i=n.h;e=n.H}],execute:function(){var s=".sc-input-text-icons-h{display:block}";var a=n("input_text_icons",function(){function n(n){t(this,n);this.code={basic:'\n\n<span>\n    <any-input-text id="inputTextIconsLeft">\n        <i slot="iconLeft"\n          class="iconify"\n          data-icon="fa-solid:search"\n        ></i>\n    </any-input-text>\n</span>\n<span>\n    <any-input-text id="inputTextIconsRight">\n        <i slot="iconRight"\n            class="iconify"\n            data-icon="fa-solid:spinner"\n        ></i>\n    </any-input-text>\n</span>\n\n',html:'\n\n<div class="full-card flex justify-content-center gap-3">\n    <span>\n        <any-input-text id="inputTextIconsLeft">\n            <i slot="iconLeft"\n               class="iconify"\n               data-icon="fa-solid:search"\n            ></i>\n        </any-input-text>\n    </span>\n    <span>\n        <any-input-text id="inputTextIconsRight">\n            <i slot="iconRight"\n               class="iconify"\n               data-icon="fa-solid:spinner"\n            ></i>\n        </any-input-text>\n    </span>\n</div>\n\n',javascript:'\n\nlet inputTextIconsLeft = document.getElementById("inputTextIconsLeft");\ninputTextIconsLeft.inputWrapperClass = "any-input-icon-left";\ninputTextIconsLeft.placeholder = "Search";\n\nlet inputTextIconsRight = document.getElementById("inputTextIconsRight");\ninputTextIconsRight.inputWrapperClass = "any-input-icon-right";\ninputTextIconsRight.placeholder = "Loading...";\ninputTextIconsRight.rightIconClass = "any-spin";\n\ninputTextIconsLeft.addEventListener("valueChange", (event) => {\n  console.log("InputTextLeft changed:", event);\n});\ninputTextIconsRight.addEventListener("valueChange", (event) => {\n  console.log("InputTextRight changed:", event);\n});\n\n'};this.textId=undefined;this.textTitle=undefined}n.prototype.render=function(){return i(e,null,i("section",{class:"py-4"},i("app-docsectiontext",{textTitle:this.textTitle,textId:this.textId},i("p",null,"Icons can be placed inside an input element by wrapping both the input and the icon with an element that has either .any-input-icon-left or .any-input-icon-right class.")),i("div",{class:"full-card flex justify-content-center gap-3"},i("span",null,i("any-input-text",{id:"inputTextIconsLeft",inputWrapperClass:"any-input-icon-left",placeholder:"Search"},i("i",{slot:"iconLeft",class:"iconify","data-icon":"fa-solid:search"}))),i("span",null,i("any-input-text",{id:"inputTextIconsRight",inputWrapperClass:"any-input-icon-right",rightIconClass:"any-spin",placeholder:"Loading..."},i("i",{slot:"iconRight",class:"iconify","data-icon":"fa-solid:spinner"})))),i("app-code",{code:this.code,selector:"input-text-icons"})))};return n}());a.style=s}}}));