!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var u=r("iU1Pc"),i=document.querySelector(".form"),c=document.querySelector('input[name="delay"]'),a=document.querySelector('input[name="step"]'),l=document.querySelector('input[name="amount"]'),d=String.fromCodePoint(128545),f=String.fromCodePoint(128516),s=0,m=0,p=0,v=0;i.addEventListener("submit",(function(n){n.preventDefault(),s=c.valueAsNumber,m=a.valueAsNumber,p=l.valueAsNumber;for(var t=0;t<p;t+=1)setTimeout((function(){var n,t;(n=v+=1,t=s+=m,new Promise((function(e,o){var r=Math.random()>.3;setTimeout((function(){r?e({count:n,delay:t}):o({count:n,delay:t})}),t)}))).then((function(n){var t=n.count,o=n.delay;e(u).Notify.success("".concat(f," Fulfilled promise ").concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.count,o=n.delay;e(u).Notify.failure("".concat(d," Rejected promise ").concat(t," in ").concat(o,"ms"))}))}),s),v=0}))}();
//# sourceMappingURL=03-promises.a2ec7411.js.map