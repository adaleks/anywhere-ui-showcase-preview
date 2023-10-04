import{r as t,h as e,g as a}from"./p-e0726338.js";const o=class{constructor(e){t(this,e),this.logoMap={"anywhere-default":"anywhere-default-violet.png","anywhere-default-dark-violet":"anywhere-dark-violet.png","anywhere-default-dark-purple":"anywhere-dark-purple.png","anywhere-default-light-purple":"anywhere-light-purple.png","bootstrap4-light-blue":"bootstrap4-light-blue.svg","bootstrap4-light-purple":"bootstrap4-light-purple.svg","bootstrap4-dark-blue":"bootstrap4-dark-blue.svg","bootstrap4-dark-purple":"bootstrap4-dark-purple.svg"},this.rippleSwitchChecked=!0}componentDidLoad(){this.attachEventListeners();const t=localStorage.getItem("anywhereTheme");t&&(document.documentElement.setAttribute("data-theme",t),this.updateAppThemeImage(t));const e=this.element.querySelector("#ripple-switch");e.checked=!0,e.addEventListener("valueChange",(t=>{t.detail.checked?document.body.classList.remove("any-ripple-disabled"):document.body.classList.add("any-ripple-disabled")}))}attachEventListeners(){this.element.querySelector(".layout-config-button").addEventListener("click",(()=>{this.toggleConfigPanel()})),this.element.querySelector(".layout-config-close").addEventListener("click",(()=>{this.closeConfigPanel()})),document.addEventListener("click",(t=>{this.element.querySelector(".layout-config").classList.contains("layout-config-active")&&!this.element.contains(t.target)&&this.closeConfigPanel()})),this.element.querySelectorAll(".any-link").forEach((t=>{t.addEventListener("click",(t=>{const e=t.currentTarget.getAttribute("data-select-theme");this.changeTheme(e)}))}))}toggleConfigPanel(){const t=this.element.querySelector(".layout-config"),e=this.element.querySelector(".layout-config-button span");t.classList.contains("layout-config-active")?e.classList.add("any-spin-right"):e.classList.add("any-spin-left"),t.classList.toggle("layout-config-active"),setTimeout((()=>{e.classList.remove("any-spin-left","any-spin-right")}),1e3)}closeConfigPanel(){const t=this.element.querySelector(".layout-config"),e=this.element.querySelector(".layout-config-button span");t.classList.remove("layout-config-active"),e.classList.add("any-spin-right"),setTimeout((()=>{e.classList.remove("any-spin-right")}),1e3)}changeTheme(t){"anywhere-default"===t?(document.documentElement.removeAttribute("data-theme"),localStorage.removeItem("anywhereTheme")):(document.documentElement.setAttribute("data-theme",t),localStorage.setItem("anywhereTheme",t)),this.updateAppThemeImage(t)}updateAppThemeImage(t){const e=document.querySelector(".app-theme img");e.src=`assets/images/themes/${this.logoMap[t]}`,e.parentNode.setAttribute("title",t)}render(){return e("div",{class:"layout-config"},e("div",{class:"layout-config-content-wrapper"},e("a",{tabindex:"0",class:"layout-config-button"},e("span",{style:{display:"inline-block",width:"26px",height:"26px"}},e("i",null))),e("a",{tabindex:"0",class:"layout-config-close"},e("span",{style:{display:"inline-block",width:"25px",height:"25px"}},e("i",null))),e("div",{class:"layout-config-content"},e("div",null,e("h4",null,"Ripple Effect"),e("any-input-switch",{id:"ripple-switch",checked:this.rippleSwitchChecked}),e("h4",null,"Free Themes"),e("p",null,"Built-in component themes created by AdaleksTech."),e("h5",null,"AdaleksTech Design"),e("div",{class:"grid free-themes"},e("div",{class:"col-3"},e("button",{class:"any-link","data-select-theme":"anywhere-default"},e("img",{src:"assets/images/themes/anywhere-default-violet.png",alt:"Adaleks Violet"})),e("span",null,"Violet")),e("div",{class:"col-3"},e("button",{class:"any-link","data-select-theme":"anywhere-default-light-purple"},e("img",{src:"assets/images/themes/anywhere-light-purple.png",alt:"Adaleks Light Purple"})),e("span",null,"Purple")),e("div",{class:"col-3"},e("button",{class:"any-link","data-select-theme":"anywhere-default-dark-violet"},e("img",{src:"assets/images/themes/anywhere-dark-violet.png",alt:"Adaleks Dark Violet"})),e("span",null,"Violet")),e("div",{class:"col-3"},e("button",{class:"any-link","data-select-theme":"anywhere-default-dark-purple"},e("img",{src:"assets/images/themes/anywhere-dark-purple.png",alt:"Adaleks Dark Purple"})),e("span",null,"Purple"))),e("h5",null,"Bootstrap"),e("div",{class:"grid free-themes"},e("div",{class:"col-3"},e("button",{class:"any-link","data-select-theme":"bootstrap4-light-blue"},e("img",{src:"assets/images/themes/bootstrap4-light-blue.svg",alt:"Bootstrap Light Blue"})),e("span",null,"Blue")),e("div",{class:"col-3"},e("button",{class:"any-link","data-select-theme":"bootstrap4-light-purple"},e("img",{src:"assets/images/themes/bootstrap4-light-purple.svg",alt:"Bootstrap Light Purple"})),e("span",null,"Purple")),e("div",{class:"col-3"},e("button",{class:"any-link","data-select-theme":"bootstrap4-dark-blue"},e("img",{src:"assets/images/themes/bootstrap4-dark-blue.svg",alt:"Bootstrap Dark Blue"})),e("span",null,"Blue")),e("div",{class:"col-3"},e("button",{class:"any-link","data-select-theme":"bootstrap4-dark-purple"},e("img",{src:"assets/images/themes/bootstrap4-dark-purple.svg",alt:"Bootstrap Dark Purple"})),e("span",null,"Purple")))))))}get element(){return a(this)}};o.style=".layout-config.sc-app-config{position:fixed;padding:0;top:0;right:0;display:block;width:550px;z-index:1101;height:100%;-webkit-transition:-webkit-transform 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);transition:-webkit-transform 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);transition:transform 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);transition:transform 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99), -webkit-transform 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);-webkit-transform:translateX(100%);transform:translateX(100%);-webkit-backface-visibility:hidden;backface-visibility:hidden}.layout-config.layout-config-active.sc-app-config{-webkit-transform:translateX(0);transform:translateX(0)}.layout-config-content-wrapper.sc-app-config{position:relative;height:100%;-webkit-box-shadow:0 2px 10px 0 rgba(0, 0, 0, 0.24);box-shadow:0 2px 10px 0 rgba(0, 0, 0, 0.24);color:var(--text-color);background-color:var(--surface-f)}.layout-config-content-wrapper.sc-app-config .layout-config-button.sc-app-config{display:block;position:absolute;width:52px;height:52px;line-height:52px;background-color:var(--primary-color);text-align:center;color:var(--primary-color-text);top:270px;left:-51px;z-index:-1;overflow:hidden;cursor:pointer;outline:0 none;border-radius:3px;-webkit-box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)}.layout-config-content-wrapper.sc-app-config .layout-config-button.sc-app-config i.sc-app-config{font-size:26px;line-height:inherit;cursor:pointer}.layout-config-content-wrapper.sc-app-config .layout-config-button.sc-app-config span.sc-app-config{display:block;line-height:26px;margin:13px}.layout-config-content-wrapper.sc-app-config .layout-config-button.sc-app-config i.sc-app-config:after{content:var(--cog-icon)}.layout-config-close.sc-app-config{position:absolute;width:25px;height:25px;line-height:25px;text-align:center;right:20px;top:20px;z-index:999;background-color:var(--primary-color);border-radius:50%;cursor:pointer;-webkit-transition:background-color 0.2s, -webkit-box-shadow 0.2s, -webkit-transform 0.2s;transition:background-color 0.2s, -webkit-box-shadow 0.2s, -webkit-transform 0.2s;transition:background-color 0.2s, box-shadow 0.2s, transform 0.2s;transition:background-color 0.2s, box-shadow 0.2s, transform 0.2s, -webkit-box-shadow 0.2s, -webkit-transform 0.2s}.layout-config.sc-app-config .layout-config-close.sc-app-config:hover{-webkit-transform:scale(1.1);transform:scale(1.1)}.layout-config-content-wrapper.sc-app-config .layout-config-close.sc-app-config span.sc-app-config{display:block;line-height:20px}.layout-config-content-wrapper.sc-app-config .layout-config-close.sc-app-config i.sc-app-config:after{content:var(--times-icon)}.layout-config-content-wrapper.sc-app-config .layout-config-close.sc-app-config i.sc-app-config{font-size:20px;line-height:inherit;cursor:pointer;vertical-align:-0.3em}a.sc-app-config{color:var(--linkColor);font-weight:600}a.sc-app-config:hover{text-decoration:underline}.layout-config-content.sc-app-config{overflow:auto;height:100%;padding:2rem}.grid.sc-app-config>div.sc-app-config{padding:1rem;text-align:center}.grid.sc-app-config>div.sc-app-config span.sc-app-config{display:block}.grid.sc-app-config>div.sc-app-config button.sc-app-config{position:relative;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center}.free-themes.sc-app-config img.sc-app-config{width:50px;border-radius:4px;-webkit-transition:-webkit-transform 0.2s;transition:-webkit-transform 0.2s;transition:transform 0.2s;transition:transform 0.2s, -webkit-transform 0.2s}.free-themes.sc-app-config img.sc-app-config:hover{-webkit-transform:scale(1.1);transform:scale(1.1)}.free-themes.sc-app-config span.sc-app-config{font-size:0.875rem;margin-top:0.25rem}";export{o as app_config}