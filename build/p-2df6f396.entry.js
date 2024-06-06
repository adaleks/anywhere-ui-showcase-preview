import{r as e,c as a,h as t,H as r,g as o}from"./p-1799da65.js";import{l as n,I as i}from"./p-f97b1cf0.js";import{r as s}from"./p-bef16317.js";import"./p-0462f723.js";const c=class{constructor(t){e(this,t),this.valueChange=a(this,"valueChange",5),this.aOnFocus=a(this,"aOnFocus",7),this.aOnBlur=a(this,"aOnBlur",7),this.checkbox=null,this.focused=!1,this.anyStyle=null,this.anyTabIndex=0,this.binary=!1,this.checked=!1,this.checkboxIcon="fa-solid:check",this.disabled=!1,this.inputId="any-cb-"+m++,this.label=null,this.labelStyleClass=null,this.name=this.inputId,this.readonly=!1,this.styleClass=null,this.value="on"}checkedChanged(e){let a=this.value;this.binary&&(a=e,this.value=e),this.valueChange.emit({checked:e,value:a})}componentWillLoad(){this.loadIcons()}componentDidLoad(){this.checkbox=this.element.shadowRoot.querySelector("input[type='checkbox']")}async loadIcons(){await n([this.checkboxIcon]).catch((e=>{console.error("Failed to load icons:",e.missing)})),this.element.shadowRoot.querySelector(".any-checkbox-icon").innerHTML=i.renderHTML(this.checkboxIcon,{})}onClick(e,a){e.preventDefault(),this.disabled||this.readonly||(this.checked=!this.checked,a&&this.checkbox.focus())}onFocus(){this.focused=!0,this.aOnFocus.emit()}onBlur(){this.focused=!1,this.aOnBlur.emit()}handleChange(e){this.readonly||(this.checked=e.target.checked)}async inputFocus(){this.checkbox.focus()}render(){const{checked:e,disabled:a,element:o,name:n,value:i}=this;return s(!0,o,n,e?i:"",a),t(r,{key:"ebec2a2932d0b5eaeee29a0026e828dbb0c70c01"},t("div",{key:"1e0e84f9e6f90f499fddded37243f31b1e892cdd",class:"any-element any-element-flex"},t("div",{key:"b6da40673e0be4d4db2c1a1c4329bc40987b5a5a",class:"any-checkbox any-component"+(this.styleClass?" "+this.styleClass:"")+(e?" any-checkbox-checked":"")+(this.focused?" any-checkbox-focused":"")+(a?" any-checkbox-disabled":""),style:this.anyStyle},t("div",{key:"d50ae40d632b206c57c93bff6d1ca8b0abeb64f0",class:"any-hidden-accessible"},t("input",{key:"33924aee4b7960cfacf6c71b92f852c3a2a853df",type:"checkbox",id:this.inputId,name:this.name,checked:e,value:this.value,"aria-checked":`${e}`,tabindex:this.anyTabIndex,onFocus:()=>{this.onFocus()},onBlur:()=>{this.onBlur()},onChange:e=>{this.handleChange(e)}}),t("slot",{key:"370756e1f9e07045f4afece547cde493dec66bb3",name:"label"})),t("div",{key:"0c85f66881ac6a355dacc3bc2d704160ece4aec2",part:e?"any-checkbox-box-highlight":"any-checkbox-box",class:"any-checkbox-box"+(e?" any-highlight":"")+(this.focused?" any-focus":"")+(a?" any-disabled":""),onClick:e=>{this.onClick(e,!0)}},t("span",{key:"dc6ee074cda1e45d44203468320a70877b4e1f2d",class:"any-checkbox-icon iconify",style:{visibility:e?"visible":"hidden"}}))),this.label&&t("label",{key:"1e6f795d462de6d873859c62be11bf2133bcb39d",onClick:e=>{this.onClick(e,!0)},htmlFor:this.inputId,class:"any-checkbox-label"+(this.labelStyleClass?" "+this.labelStyleClass:"")+(e?" any-checkbox-label-active":"")+(this.focused?" any-checkbox-label-focus":"")+(a?" any-disabled":"")},this.label)))}get element(){return o(this)}static get watchers(){return{checked:["checkedChanged"]}}};let m=0;c.style="@-webkit-keyframes growDown{0%{-webkit-transform:scaleY(0);transform:scaleY(0)}80%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}100%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@keyframes growDown{0%{-webkit-transform:scaleY(0);transform:scaleY(0)}80%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}100%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@-webkit-keyframes growUp{0%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}80%{-webkit-transform:scaleY(1);transform:scaleY(1)}100%{-webkit-transform:scaleY(0);transform:scaleY(0)}}@keyframes growUp{0%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}80%{-webkit-transform:scaleY(1);transform:scaleY(1)}100%{-webkit-transform:scaleY(0);transform:scaleY(0)}}@-webkit-keyframes rotateYDown{0%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(0);transform:rotateY(0)}}@keyframes rotateYDown{0%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(0);transform:rotateY(0)}}@-webkit-keyframes rotateYUp{0%{-webkit-transform:rotateY(0);transform:rotateY(0)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}}@keyframes rotateYUp{0%{-webkit-transform:rotateY(0);transform:rotateY(0)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}}@-webkit-keyframes spin{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes fadeIn{0%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes fadeIn{0%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes fadeOut{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}100%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}}@keyframes fadeOut{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}100%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}}@-webkit-keyframes slideDownFadeIn{0%{-webkit-transform:translateY(-10px);transform:translateY(-10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes slideDownFadeIn{0%{-webkit-transform:translateY(-10px);transform:translateY(-10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@-webkit-keyframes slideDownFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}}@keyframes slideDownFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}}@-webkit-keyframes slideUpFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}}@keyframes slideUpFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}}@-webkit-keyframes slideUpFadeIn{0%{-webkit-transform:translateY(10px);transform:translateY(10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes slideUpFadeIn{0%{-webkit-transform:translateY(10px);transform:translateY(10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}*{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.any-component,.any-element,.any-element *,.any-component *{font-family:var(--fontFamily);font-size:var(--fontSize);text-decoration:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-tap-highlight-color:transparent}.any-component *,.any-element *,.any-element * *,.any-component * *{-webkit-box-sizing:border-box;box-sizing:border-box}.any-element.any-element-flex{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}.any-corner-all{-moz-border-radius:var(--borderRadius);-webkit-border-radius:var(--borderRadius);border-radius:var(--borderRadius)}.any-corner-right{-moz-border-radius-topright:var(--borderRadius);-webkit-border-top-right-radius:var(--borderRadius);border-top-right-radius:var(--borderRadius);-moz-border-radius-bottomright:var(--borderRadius);-webkit-border-bottom-right-radius:var(--borderRadius);border-bottom-right-radius:var(--borderRadius)}.any-shadow{-webkit-box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.3);box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.3)}.any-disabled,.any-disabled *{cursor:default !important;pointer-events:none}.any-checkbox-disabled{cursor:default !important;pointer-events:none}.any-disabled,.any-component:disabled{opacity:var(--disabledOpacity)}.iconify{font-size:var(--anyIconFontSize);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.growDown-animation{-webkit-animation:growDown 125ms ease-in-out forwards;animation:growDown 125ms ease-in-out forwards}.growUp-animation{-webkit-animation:growUp 125ms ease-in-out forwards;animation:growUp 125ms ease-in-out forwards}.rotateYDown-animation{-webkit-animation:rotateYDown 125ms ease-in-out forwards;animation:rotateYDown 125ms ease-in-out forwards}.rotateYUp-animation{-webkit-animation:rotateYUp 125ms ease-in-out forwards;animation:rotateYUp 125ms ease-in-out forwards}.fadeIn-animation{-webkit-animation:fadeIn 80ms ease-in-out forwards;animation:fadeIn 80ms ease-in-out forwards}.fadeOut-animation{-webkit-animation:fadeOut 80ms ease-in-out forwards;animation:fadeOut 80ms ease-in-out forwards}.slideUpFadeOut-animation.direction-up{-webkit-animation:slideUpFadeOut 200ms ease-in-out forwards;animation:slideUpFadeOut 200ms ease-in-out forwards}.slideUpFadeOut-animation.direction-down{-webkit-animation:slideDownFadeOut 200ms ease-in-out forwards;animation:slideDownFadeOut 200ms ease-in-out forwards}.slideDownFadeIn-animation.direction-down{-webkit-animation:slideDownFadeIn 200ms ease-in-out forwards;animation:slideDownFadeIn 200ms ease-in-out forwards}.slideDownFadeIn-animation.direction-up{-webkit-animation:slideUpFadeIn 200ms ease-in-out forwards;animation:slideUpFadeIn 200ms ease-in-out forwards}.direction-down{-webkit-transform-origin:top center;transform-origin:top center}.direction-up{-webkit-transform-origin:bottom center;transform-origin:bottom center}.any-field>label{display:inline-block;margin-bottom:0.5rem;margin-right:0.5rem}.any-hidden-accessible{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.any-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.any-ml-2{margin-left:0.5rem !important}.any-mr-2{margin-right:0.5rem !important}.any-mr-4{margin-right:1.5rem !important}.any-text-bold{font-weight:700 !important}.hidden{display:none !important}.gap-0{gap:0rem !important}.gap-1{gap:0.25rem !important}.gap-2{gap:0.5rem !important}.gap-3{gap:1rem !important}.gap-4{gap:1.5rem !important}.gap-5{gap:2rem !important}.gap-6{gap:3rem !important}.gap-7{gap:4rem !important}.gap-8{gap:5rem !important}:host{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}:host .any-checkbox{display:-ms-inline-flexbox;display:inline-flex;cursor:pointer;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;vertical-align:bottom;width:var(--checkboxWidth);height:var(--checkboxHeight)}:host .any-checkbox .any-checkbox-box{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;border:var(--checkboxBorder);background:var(--inputBgColor);width:var(--checkboxWidth);height:var(--checkboxHeight);color:var(--textColor);border-radius:var(--borderRadius);-webkit-transition:var(--formElementTransition);transition:var(--formElementTransition)}:host .any-checkbox .any-checkbox-box.any-highlight{border-color:var(--checkboxActiveBorderColor);background:var(--checkboxActiveBg)}:host .any-checkbox .any-checkbox-box .any-checkbox-icon{-webkit-transition-duration:var(--transitionDuration);transition-duration:var(--transitionDuration);color:var(--checkboxIconActiveColor);font-size:var(--fontSize)}:host .any-checkbox:not(.any-checkbox-disabled) .any-checkbox-box:hover{border-color:var(--inputHoverBorderColor)}:host .any-checkbox:not(.any-checkbox-disabled) .any-checkbox-box.any-focus{outline:var(--focusOutline);outline-offset:var(--focusOutlineOffset);-webkit-box-shadow:var(--focusShadow);box-shadow:var(--focusShadow);border-color:var(--checkboxActiveBorderColor)}:host .any-checkbox:not(.any-checkbox-disabled) .any-checkbox-box.any-highlight:hover{border-color:var(--checkboxActiveHoverBorderColor);background:var(--checkboxActiveHoverBg);color:var(--checkboxIconActiveHoverColor)}:host .any-checkbox-label{margin-left:0.5rem}";export{c as any_checkbox}