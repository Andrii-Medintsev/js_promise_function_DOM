parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e,t){var n="It was ".concat(t," on the element:\n      ").concat(e.nodeName,", id: ").concat(e.id,".");return new Promise(function(o){e.addEventListener(t,function(){o(n)})})}var t=function(e){var t=document.createElement("div");t.classList.add("message"),t.textContent=e,document.body.append(t)};module.exports={waitFor:e,printMessage:t};
},{}],"h6PX":[function(require,module,exports) {
"use strict";var e=require("./main"),t=e.waitFor,n=e.printMessage,i=document.getElementById("login"),u=document.getElementById("password"),c=document.getElementById("submit");t(i,"click").then(n),t(u,"click").then(n),t(c,"click").then(n),t(i,"input").then(n),t(u,"input").then(n),t(i,"blur").then(n),t(u,"blur").then(n),t(c,"blur").then(n);
},{"./main":"KIzB"}]},{},["h6PX"], null)
//# sourceMappingURL=callPromise.5f58f695.js.map