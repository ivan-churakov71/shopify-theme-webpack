(()=>{"use strict";var n=function(){console.log("hello world")};function e(){console.log("homepage")}function t(n,e,t,o,r,i,u){try{var a=n[i](u),c=a.value}catch(n){return void t(n)}a.done?e(c):Promise.resolve(c).then(o,r)}function o(n){return function(){var e=this,o=arguments;return new Promise((function(r,i){var u=n.apply(e,o);function a(n){t(u,r,i,a,c,"next",n)}function c(n){t(u,r,i,a,c,"throw",n)}a(void 0)}))}}function r(){return(r=o(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n(),"index"===document.body.dataset.templateName&&e();case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}document.addEventListener("DOMContentLoaded",(function(){return r.apply(this,arguments)}))})();
//# sourceMappingURL=main.js.map