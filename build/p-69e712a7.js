class t{static equals(t,r,e){return e?this.resolveFieldData(t,e)===this.resolveFieldData(r,e):this.equalsByValue(t,r)}static equalsByValue(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var e,i,n,s=Array.isArray(t),u=Array.isArray(r);if(s&&u){if((i=t.length)!=r.length)return!1;for(e=i;0!=e--;)if(!this.equalsByValue(t[e],r[e]))return!1;return!0}if(s!=u)return!1;var f=this.isDate(t),a=this.isDate(r);if(f!=a)return!1;if(f&&a)return t.getTime()==r.getTime();var x=t instanceof RegExp,c=r instanceof RegExp;if(x!=c)return!1;if(x&&c)return t.toString()==r.toString();var l=Object.keys(t);if((i=l.length)!==Object.keys(r).length)return!1;for(e=i;0!=e--;)if(!Object.prototype.hasOwnProperty.call(r,l[e]))return!1;for(e=i;0!=e--;)if(!this.equalsByValue(t[n=l[e]],r[n]))return!1;return!0}return t!=t&&r!=r}static resolveFieldData(t,r){if(t&&r){if(this.isFunction(r))return r(t);if(-1==r.indexOf("."))return t[r];{let e=r.split("."),i=t;for(let t=0,r=e.length;t<r;++t){if(null==i)return null;i=i[e[t]]}return i}}return null}static isFunction(t){return!!(t&&t.constructor&&t.call&&t.apply)}static reorderArray(t,r,e){t&&r!==e&&(e>=t.length&&(e%=t.length,r%=t.length),t.splice(e,0,t.splice(r,1)[0]))}static insertIntoOrderedArray(t,r,e,i){if(e.length>0){let n=!1;for(let s=0;s<e.length;s++)if(this.findIndexInList(e[s],i)>r){e.splice(s,0,t),n=!0;break}n||e.push(t)}else e.push(t)}static findIndexInList(t,r){let e=-1;if(r)for(let i=0;i<r.length;i++)if(r[i]==t){e=i;break}return e}static contains(t,r){if(null!=t&&r&&r.length)for(let e of r)if(this.equals(t,e))return!0;return!1}static removeAccents(t){return t&&t.search(/[\xC0-\xFF]/g)>-1&&(t=t.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),t}static isDate(t){return"[object Date]"===Object.prototype.toString.call(t)}static isEmpty(t){return null==t||""===t||Array.isArray(t)&&0===t.length||!this.isDate(t)&&"object"==typeof t&&0===Object.keys(t).length}static isNotEmpty(t){return!this.isEmpty(t)}static compare(t,r,e,i=1){let n=-1;const s=this.isEmpty(t),u=this.isEmpty(r);return n=s&&u?0:s?i:u?-i:"string"==typeof t&&"string"==typeof r?t.localeCompare(r,e,{numeric:!0}):t<r?-1:t>r?1:0,n}static sort(r,e,i=1,n,s=1){return(1===s?i:s)*t.compare(r,e,n,i)}static merge(t,r){if(null!=t||null!=r)return null!=t&&"object"!=typeof t||null!=r&&"object"!=typeof r?null!=t&&"string"!=typeof t||null!=r&&"string"!=typeof r?r||t:[t||"",r||""].join(" "):{...t||{},...r||{}}}}export{t as O}