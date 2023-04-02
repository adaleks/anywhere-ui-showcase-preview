import{r as e,c as t,h as o,H as r,g as a}from"./p-a6c3eb28.js";import{l as i,I as n}from"./p-9e829045.js";import{r as s}from"./p-eccf1d31.js";import"./p-3e8ff66b.js";const c=class{constructor(o){e(this,o),this.valueChange=t(this,"valueChange",7),this.aOnFocus=t(this,"aOnFocus",7),this.aOnBlur=t(this,"aOnBlur",7),this.checkbox=null,this.focused=!1,this.checked=!1,this.binary=!1,this.inputId="any-cb-"+b++,this.name=this.inputId,this.anyTabIndex=0,this.value="on",this.label=null,this.anyStyle=null,this.styleClass=null,this.labelStyleClass=null,this.disabled=!1,this.readonly=!1,this.checkboxIcon="fa-solid:check"}checkedChanged(e){let t=this.value;this.binary&&(t=e,this.value=e),this.valueChange.emit({checked:e,value:t})}componentWillLoad(){this.loadIcons()}componentDidLoad(){this.checkbox=this.element.shadowRoot.querySelector("input[type='checkbox']")}async loadIcons(){await i([this.checkboxIcon]).catch((e=>{console.error("Failed to load icons:",e.missing)})),this.element.shadowRoot.querySelector(".any-checkbox-icon").innerHTML=n.renderHTML(this.checkboxIcon,{})}onClick(e,t){e.preventDefault(),this.disabled||this.readonly||(this.checked=!this.checked,t&&this.checkbox.focus())}onFocus(){this.focused=!0,this.aOnFocus.emit()}onBlur(){this.focused=!1,this.aOnBlur.emit()}handleChange(e){this.readonly||(this.checked=e.target.checked)}async inputFocus(){this.checkbox.focus()}render(){const{checked:e,disabled:t,element:a,name:i,value:n}=this;return s(!0,a,i,e?n:"",t),o(r,null,o("div",{class:"any-element any-element-flex"},o("div",{class:"any-checkbox any-component"+(this.styleClass?" "+this.styleClass:"")+(e?" any-checkbox-checked":"")+(this.focused?" any-checkbox-focused":"")+(t?" any-checkbox-disabled":""),style:this.anyStyle},o("div",{class:"any-hidden-accessible"},o("input",{type:"checkbox",id:this.inputId,name:this.name,checked:e,value:this.value,"aria-checked":`${e}`,tabindex:this.anyTabIndex,onFocus:()=>{this.onFocus()},onBlur:()=>{this.onBlur()},onChange:e=>{this.handleChange(e)}}),o("slot",{name:"label"})),o("div",{part:e?"any-checkbox-box-highlight":"any-checkbox-box",class:"any-checkbox-box"+(e?" any-highlight":"")+(this.focused?" any-focus":"")+(t?" any-disabled":""),onClick:e=>{this.onClick(e,!0)}},o("span",{class:"any-checkbox-icon iconify",style:{visibility:e?"visible":"hidden"}}))),this.label&&o("label",{onClick:e=>{this.onClick(e,!0)},htmlFor:this.inputId,class:"any-checkbox-label"+(this.labelStyleClass?" "+this.labelStyleClass:"")+(e?" any-checkbox-label-active":"")+(this.focused?" any-checkbox-label-focus":"")+(t?" any-disabled":"")},this.label)))}get element(){return a(this)}static get watchers(){return{checked:["checkedChanged"]}}};let b=0;c.style="@-webkit-keyframes growDown{0%{-webkit-transform:scaleY(0);transform:scaleY(0)}80%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}100%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@keyframes growDown{0%{-webkit-transform:scaleY(0);transform:scaleY(0)}80%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}100%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@-webkit-keyframes growUp{0%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}80%{-webkit-transform:scaleY(1);transform:scaleY(1)}100%{-webkit-transform:scaleY(0);transform:scaleY(0)}}@keyframes growUp{0%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}80%{-webkit-transform:scaleY(1);transform:scaleY(1)}100%{-webkit-transform:scaleY(0);transform:scaleY(0)}}@-webkit-keyframes rotateYDown{0%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(0);transform:rotateY(0)}}@keyframes rotateYDown{0%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(0);transform:rotateY(0)}}@-webkit-keyframes rotateYUp{0%{-webkit-transform:rotateY(0);transform:rotateY(0)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}}@keyframes rotateYUp{0%{-webkit-transform:rotateY(0);transform:rotateY(0)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}}@-webkit-keyframes spin{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}*{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.any-component,.any-element,.any-element *,.any-component *{font-family:var(--fontFamily);font-size:var(--fontSize);text-decoration:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-tap-highlight-color:transparent}.any-component *,.any-element *,.any-element * *,.any-component * *{-webkit-box-sizing:border-box;box-sizing:border-box}.any-element.any-element-flex{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}.any-corner-all{-moz-border-radius:var(--borderRadius);-webkit-border-radius:var(--borderRadius);border-radius:var(--borderRadius)}.any-corner-right{-moz-border-radius-topright:var(--borderRadius);-webkit-border-top-right-radius:var(--borderRadius);border-top-right-radius:var(--borderRadius);-moz-border-radius-bottomright:var(--borderRadius);-webkit-border-bottom-right-radius:var(--borderRadius);border-bottom-right-radius:var(--borderRadius)}.any-shadow{-webkit-box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.3);box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.3)}.any-disabled,.any-disabled *{cursor:default !important;pointer-events:none}.any-checkbox-disabled{cursor:default !important;pointer-events:none}.any-disabled,.any-component:disabled{opacity:var(--disabledOpacity)}.iconify{font-size:var(--anyIconFontSize);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.growDown-animation{-webkit-animation:growDown 125ms ease-in-out forwards;animation:growDown 125ms ease-in-out forwards}.growUp-animation{-webkit-animation:growUp 125ms ease-in-out forwards;animation:growUp 125ms ease-in-out forwards}.rotateYDown-animation{-webkit-animation:rotateYDown 125ms ease-in-out forwards;animation:rotateYDown 125ms ease-in-out forwards}.rotateYUp-animation{-webkit-animation:rotateYUp 125ms ease-in-out forwards;animation:rotateYUp 125ms ease-in-out forwards}.direction-down{-webkit-transform-origin:top center;transform-origin:top center}.direction-up{-webkit-transform-origin:bottom center;transform-origin:bottom center}.any-field>label{display:inline-block;margin-bottom:0.5rem;margin-right:0.5rem}.any-hidden-accessible{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.any-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.any-ml-2{margin-left:0.5rem !important}.any-mr-2{margin-right:0.5rem !important}.any-mr-4{margin-right:1.5rem !important}.any-text-bold{font-weight:700 !important}:host{display:block;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .any-checkbox{display:-ms-inline-flexbox;display:inline-flex;cursor:pointer;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;vertical-align:bottom;width:var(--checkboxWidth);height:var(--checkboxHeight)}:host .any-checkbox .any-checkbox-box{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;border:var(--checkboxBorder);background:var(--inputBgColor);width:var(--checkboxWidth);height:var(--checkboxHeight);color:var(--textColor);border-radius:var(--borderRadius);-webkit-transition:var(--formElementTransition);transition:var(--formElementTransition)}:host .any-checkbox .any-checkbox-box.any-highlight{border-color:var(--checkboxActiveBorderColor);background:var(--checkboxActiveBg)}:host .any-checkbox .any-checkbox-box .any-checkbox-icon{-webkit-transition-duration:var(--transitionDuration);transition-duration:var(--transitionDuration);color:var(--checkboxIconActiveColor);font-size:var(--fontSize)}:host .any-checkbox:not(.any-checkbox-disabled) .any-checkbox-box:hover{border-color:var(--inputHoverBorderColor)}:host .any-checkbox:not(.any-checkbox-disabled) .any-checkbox-box.any-focus{outline:var(--focusOutline);outline-offset:var(--focusOutlineOffset);-webkit-box-shadow:var(--focusShadow);box-shadow:var(--focusShadow);border-color:var(--checkboxActiveBorderColor)}:host .any-checkbox:not(.any-checkbox-disabled) .any-checkbox-box.any-highlight:hover{border-color:var(--checkboxActiveHoverBorderColor);background:var(--checkboxActiveHoverBg);color:var(--checkboxIconActiveHoverColor)}:host .any-checkbox-label{margin-left:0.5rem}";export{c as any_checkbox}