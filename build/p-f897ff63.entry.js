import{r as t,h as e,H as n}from"./p-1799da65.js";const a=class{constructor(e){t(this,e),this.code={basic:'\n\n<any-input-number id="inputNumberVertical" class="in" value="24" label="Vertical" show-buttons="true" spinner-mode="vertical" button-layout="vertical"\n  increment-button-icon="fa-solid:plus" decrement-button-icon="fa-solid:minus" decrement-button-class="any-button-secondary" increment-button-class="any-button-secondary">\n\n',html:'\n\n<div class="full-card flex justify-content-center">\n  <any-input-number id="inputNumberVertical" class="in" value="24" show-buttons="true" spinner-mode="vertical" button-layout="vertical"\n     increment-button-icon="fa-solid:plus" decrement-button-icon="fa-solid:minus" decrement-button-class="any-button-secondary" increment-button-class="any-button-secondary">\n</div>\n\n',javascript:'\n\nlet inputNumberVertical = document.getElementById("inputNumberVertical");\n\ninputNumberVertical.addEventListener("valueChange", (event) => {\n  console.log("inputNumberVertical changed:", event);\n});\n\n'},this.textId=void 0,this.textTitle=void 0}render(){return e(n,{key:"dabb279877b2ef097085dbe65179fb4ece47e58c"},e("section",{key:"e8cc648738e33551bf07867e8cbddd9946c755ff",class:"py-4"},e("app-docsectiontext",{key:"d45ec1e70f2e35049ff60270845755f0277e90c7",textTitle:this.textTitle,textId:this.textId},e("p",{key:"d7ece0973f609b13d38bcde6911c1fa2b9a2badf"},"Buttons can also placed vertically by setting buttonLayout as vertical.")),e("div",{key:"1d3a0450f25bb977154040e9ab23672231a4bd5e",class:"full-card flex justify-content-center"},e("any-input-number",{key:"9d0109766dd6de89b03620f8f5a33e2482dc124c",class:"in",id:"inputNumberHorizontalWithStep",value:24,showButtons:!0,buttonLayout:"vertical",incrementButtonIcon:"fa-solid:plus",decrementButtonIcon:"fa-solid:minus",decrementButtonClass:"any-button-secondary",incrementButtonClass:"any-button-secondary",anyStyle:{width:"4rem"}})),e("app-code",{key:"0740373799b1762abd07beaa2a74a690630673c4",code:this.code,selector:"input-number-vertical"})))}};a.style=".sc-input-number-vertical-h{display:block}";export{a as input_number_vertical}