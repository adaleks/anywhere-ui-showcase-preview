import{r as t,c as a,h as e,H as r,g as i}from"./p-da055c0b.js";import{r as n}from"./p-08200e74.js";const o=class{constructor(e){t(this,e),this.valueChange=a(this,"valueChange",7),this.aOnFocus=a(this,"aOnFocus",7),this.aOnBlur=a(this,"aOnBlur",7),this.inputswitch=null,this.value=!1,this.focused=!1,this.inputId="any-isw-"+s++,this.name=this.inputId,this.checked=!1,this.anyStyle=null,this.styleClass=null,this.disabled=!1,this.readonly=!1,this.trueValue=!0,this.falseValue=!1,this.anyTabIndex=0,this.ariaLabeledBy=null}componentDidLoad(){this.inputswitch=this.element.shadowRoot.querySelector("input[type='checkbox']"),this.value=this.checked?this.trueValue:this.falseValue}onFocus(){this.focused=!0,this.aOnFocus.emit()}onBlur(){this.focused=!1,this.aOnBlur.emit()}handleChange(t){this.readonly||this.updateValue(t,t.target.checked)}onClick(t){this.disabled||this.readonly||(t.preventDefault(),this.toggle(t),this.inputswitch.focus())}updateValue(t,a){this.value=a?this.trueValue:this.falseValue,this.checked=a,this.valueChange.emit({originalEvent:t,checked:this.value})}toggle(t){this.updateValue(t,!this.isChecked())}isChecked(){return this.value===this.trueValue}render(){const{checked:t,disabled:a,element:i,name:o,value:s}=this;return n(!0,i,o,t?s:"",a),e(r,null,e("div",{class:"any-element"},e("div",{class:"any-inputswitch any-component"+(t?" any-inputswitch-checked":"")+(this.focused?" any-focus":"")+(a?" any-disabled":""),style:this.anyStyle,onClick:t=>{this.onClick(t)},onKeyDown:t=>{"Enter"===t.key&&this.onClick(t)}},e("div",{class:"any-hidden-accessible"},e("input",{type:"checkbox",tabindex:this.anyTabIndex,"aria-labelledby":this.ariaLabeledBy,role:"switch",id:this.inputId,name:this.name,checked:t,disabled:this.disabled,value:this.value,"aria-checked":`${t}`,onFocus:()=>{this.onFocus()},onBlur:()=>{this.onBlur()},onChange:t=>{this.handleChange(t)}})),e("span",{class:"any-inputswitch-slider"}))))}get element(){return i(this)}};let s=0;o.style='@-webkit-keyframes growDown{0%{-webkit-transform:scaleY(0);transform:scaleY(0)}80%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}100%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@keyframes growDown{0%{-webkit-transform:scaleY(0);transform:scaleY(0)}80%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}100%{-webkit-transform:scaleY(1);transform:scaleY(1)}}@-webkit-keyframes growUp{0%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}80%{-webkit-transform:scaleY(1);transform:scaleY(1)}100%{-webkit-transform:scaleY(0);transform:scaleY(0)}}@keyframes growUp{0%{-webkit-transform:scaleY(1.1);transform:scaleY(1.1)}80%{-webkit-transform:scaleY(1);transform:scaleY(1)}100%{-webkit-transform:scaleY(0);transform:scaleY(0)}}@-webkit-keyframes rotateYDown{0%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(0);transform:rotateY(0)}}@keyframes rotateYDown{0%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(0);transform:rotateY(0)}}@-webkit-keyframes rotateYUp{0%{-webkit-transform:rotateY(0);transform:rotateY(0)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}}@keyframes rotateYUp{0%{-webkit-transform:rotateY(0);transform:rotateY(0)}80%{-webkit-transform:rotateY(-10deg);transform:rotateY(-10deg)}100%{-webkit-transform:rotateY(90deg);transform:rotateY(90deg)}}@-webkit-keyframes spin{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@-webkit-keyframes fadeIn{0%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes fadeIn{0%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes fadeOut{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}100%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}}@keyframes fadeOut{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}100%{opacity:0;-webkit-transform:scale(0.8);transform:scale(0.8)}}@-webkit-keyframes slideDownFadeIn{0%{-webkit-transform:translateY(-10px);transform:translateY(-10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes slideDownFadeIn{0%{-webkit-transform:translateY(-10px);transform:translateY(-10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@-webkit-keyframes slideDownFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}}@keyframes slideDownFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}}@-webkit-keyframes slideUpFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}}@keyframes slideUpFadeOut{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}100%{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}}@-webkit-keyframes slideUpFadeIn{0%{-webkit-transform:translateY(10px);transform:translateY(10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}@keyframes slideUpFadeIn{0%{-webkit-transform:translateY(10px);transform:translateY(10px);opacity:0}100%{-webkit-transform:translateY(0);transform:translateY(0);opacity:1}}*{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}.any-component,.any-element,.any-element *,.any-component *{font-family:var(--fontFamily);font-size:var(--fontSize);text-decoration:none;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-tap-highlight-color:transparent}.any-component *,.any-element *,.any-element * *,.any-component * *{-webkit-box-sizing:border-box;box-sizing:border-box}.any-element.any-element-flex{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}.any-corner-all{-moz-border-radius:var(--borderRadius);-webkit-border-radius:var(--borderRadius);border-radius:var(--borderRadius)}.any-corner-right{-moz-border-radius-topright:var(--borderRadius);-webkit-border-top-right-radius:var(--borderRadius);border-top-right-radius:var(--borderRadius);-moz-border-radius-bottomright:var(--borderRadius);-webkit-border-bottom-right-radius:var(--borderRadius);border-bottom-right-radius:var(--borderRadius)}.any-shadow{-webkit-box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.3);box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.3)}.any-disabled,.any-disabled *{cursor:default !important;pointer-events:none}.any-checkbox-disabled{cursor:default !important;pointer-events:none}.any-disabled,.any-component:disabled{opacity:var(--disabledOpacity)}.iconify{font-size:var(--anyIconFontSize);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.growDown-animation{-webkit-animation:growDown 125ms ease-in-out forwards;animation:growDown 125ms ease-in-out forwards}.growUp-animation{-webkit-animation:growUp 125ms ease-in-out forwards;animation:growUp 125ms ease-in-out forwards}.rotateYDown-animation{-webkit-animation:rotateYDown 125ms ease-in-out forwards;animation:rotateYDown 125ms ease-in-out forwards}.rotateYUp-animation{-webkit-animation:rotateYUp 125ms ease-in-out forwards;animation:rotateYUp 125ms ease-in-out forwards}.fadeIn-animation{-webkit-animation:fadeIn 80ms ease-in-out forwards;animation:fadeIn 80ms ease-in-out forwards}.fadeOut-animation{-webkit-animation:fadeOut 80ms ease-in-out forwards;animation:fadeOut 80ms ease-in-out forwards}.slideUpFadeOut-animation.direction-up{-webkit-animation:slideUpFadeOut 200ms ease-in-out forwards;animation:slideUpFadeOut 200ms ease-in-out forwards}.slideUpFadeOut-animation.direction-down{-webkit-animation:slideDownFadeOut 200ms ease-in-out forwards;animation:slideDownFadeOut 200ms ease-in-out forwards}.slideDownFadeIn-animation.direction-down{-webkit-animation:slideDownFadeIn 200ms ease-in-out forwards;animation:slideDownFadeIn 200ms ease-in-out forwards}.slideDownFadeIn-animation.direction-up{-webkit-animation:slideUpFadeIn 200ms ease-in-out forwards;animation:slideUpFadeIn 200ms ease-in-out forwards}.direction-down{-webkit-transform-origin:top center;transform-origin:top center}.direction-up{-webkit-transform-origin:bottom center;transform-origin:bottom center}.any-field>label{display:inline-block;margin-bottom:0.5rem;margin-right:0.5rem}.any-hidden-accessible{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.any-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.any-ml-2{margin-left:0.5rem !important}.any-mr-2{margin-right:0.5rem !important}.any-mr-4{margin-right:1.5rem !important}.any-text-bold{font-weight:700 !important}.hidden{display:none !important}.gap-0{gap:0rem !important}.gap-1{gap:0.25rem !important}.gap-2{gap:0.5rem !important}.gap-3{gap:1rem !important}.gap-4{gap:1.5rem !important}.gap-5{gap:2rem !important}.gap-6{gap:3rem !important}.gap-7{gap:4rem !important}.gap-8{gap:5rem !important}:host{display:inline-block}:host .any-inputswitch{position:relative;display:inline-block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host .any-inputswitch-slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0}:host .any-inputswitch-slider:before{position:absolute;content:"";top:50%}:host .any-inputswitch{width:var(--inputSwitchWidth);height:var(--inputSwitchHeight)}:host .any-inputswitch .any-inputswitch-slider{background:var(--inputSwitchSliderOffBg);-webkit-transition:var(--formElementTransition);transition:var(--formElementTransition);border-radius:var(--inputSwitchBorderRadius)}:host .any-inputswitch .any-inputswitch-slider:before{background:var(--inputSwitchHandleOffBg);width:var(--inputSwitchHandleWidth);height:var(--inputSwitchHandleHeight);left:var(--inputSwitchSliderPadding);margin-top:-0.625rem;border-radius:var(--inputSwitchHandleBorderRadius);-webkit-transition-duration:var(--transitionDuration);transition-duration:var(--transitionDuration)}:host .any-inputswitch.any-inputswitch-checked .any-inputswitch-slider:before{-webkit-transform:translateX(1.25rem);transform:translateX(1.25rem)}:host .any-inputswitch.any-focus .any-inputswitch-slider{outline:var(--focusOutline);outline-offset:var(--focusOutlineOffset);-webkit-box-shadow:var(--focusShadow);box-shadow:var(--focusShadow)}:host .any-inputswitch:not(.any-disabled):hover .any-inputswitch-slider{background:var(--inputSwitchSliderOffHoverBg)}:host .any-inputswitch.any-inputswitch-checked .any-inputswitch-slider{background:var(--inputSwitchSliderOnBg)}:host .any-inputswitch.any-inputswitch-checked .any-inputswitch-slider:before{background:var(--inputSwitchHandleOnBg)}:host .any-inputswitch.any-inputswitch-checked:not(.any-disabled):hover .any-inputswitch-slider{background:var(--inputSwitchSliderOnHoverBg)}';export{o as any_input_switch}