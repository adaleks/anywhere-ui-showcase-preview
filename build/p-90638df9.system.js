System.register([],(function(r){"use strict";return{execute:function(){var n=r("w",(function(r,n,e){if(typeof MutationObserver==="undefined"){return}var u=new MutationObserver((function(r){e(t(r,n))}));u.observe(r,{childList:true,subtree:true});return u}));var t=function(r,n){var t;r.forEach((function(r){for(var u=0;u<r.addedNodes.length;u++){t=e(r.addedNodes[u],n)||t}}));return t};var e=function(r,n){if(r.nodeType!==1){return undefined}var t=r.tagName===n.toUpperCase()?[r]:Array.from(r.querySelectorAll(n));return t.find((function(n){return n.value===r.value}))}}}}));