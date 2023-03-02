(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[567],{6489:function(e,t){"use strict";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */t.Q=function(e,t){if("string"!=typeof e)throw TypeError("argument str must be a string");for(var n={},o=e.split(";"),r=(t||{}).decode||i,s=0;s<o.length;s++){var a=o[s],c=a.indexOf("=");if(!(c<0)){var u=a.substring(0,c).trim();if(void 0==n[u]){var l=a.substring(c+1,a.length).trim();'"'===l[0]&&(l=l.slice(1,-1)),n[u]=function(e,t){try{return t(e)}catch(t){return e}}(l,r)}}}return n},t.q=function(e,t,i){var r=i||{},s=r.encode||n;if("function"!=typeof s)throw TypeError("option encode is invalid");if(!o.test(e))throw TypeError("argument name is invalid");var a=s(t);if(a&&!o.test(a))throw TypeError("argument val is invalid");var c=e+"="+a;if(null!=r.maxAge){var u=r.maxAge-0;if(isNaN(u)||!isFinite(u))throw TypeError("option maxAge is invalid");c+="; Max-Age="+Math.floor(u)}if(r.domain){if(!o.test(r.domain))throw TypeError("option domain is invalid");c+="; Domain="+r.domain}if(r.path){if(!o.test(r.path))throw TypeError("option path is invalid");c+="; Path="+r.path}if(r.expires){if("function"!=typeof r.expires.toUTCString)throw TypeError("option expires is invalid");c+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(c+="; HttpOnly"),r.secure&&(c+="; Secure"),r.sameSite)switch("string"==typeof r.sameSite?r.sameSite.toLowerCase():r.sameSite){case!0:case"strict":c+="; SameSite=Strict";break;case"lax":c+="; SameSite=Lax";break;case"none":c+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return c};var i=decodeURIComponent,n=encodeURIComponent,o=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/},4569:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mars",function(){return i(9390)}])},9390:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return p}});var n=i(5893),o=i(1857),r=i.n(o),s=i(5675),a=i.n(s),c=i(7815),u=i(9944),l=i(8075),f=i(7294),d=i(1694);function p(){let{prefix:e}=(0,f.useContext)(d.ZP),t=(0,u.Z)();return(0,n.jsxs)("div",{className:"jsx-63432a5225020c6a nav-frame",children:[(0,n.jsx)("div",{className:"jsx-63432a5225020c6a top-nav",children:(0,n.jsx)(l.Z,{})}),(0,n.jsxs)("div",{className:"jsx-63432a5225020c6a main-body",children:[(0,n.jsx)(c.Z,{}),(0,n.jsxs)("div",{className:"jsx-63432a5225020c6a right-main",children:[(0,n.jsx)("span",{className:"jsx-63432a5225020c6a url-path-txt",children:t}),(0,n.jsxs)("div",{className:"jsx-63432a5225020c6a body-content",children:[(0,n.jsx)("h1",{className:"jsx-63432a5225020c6a",children:"Welcome to Mars"}),(0,n.jsx)("h3",{className:"jsx-63432a5225020c6a",children:"This community page is for people who live in Mars."}),(0,n.jsx)(a(),{alt:"mars",loader:t=>{let{src:i}=t;return"".concat(e).concat(i)},src:"/assets/mars-pic.png",width:250,height:250})]})]})]}),(0,n.jsx)(r(),{id:"63432a5225020c6a",children:".top-layer.jsx-63432a5225020c6a{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;height:35%;gap:20px}.body-content.jsx-63432a5225020c6a{width:100%;hegiht:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:20px}"})]})}},461:function(e,t,i){"use strict";i.d(t,{Z:function(){return u}});var n=i(7294),o=i(6489);function r(e,t){void 0===t&&(t={});var i,n=e&&"j"===e[0]&&":"===e[1]?e.substr(2):e;if(void 0===(i=t.doNotParse)&&(i=!n||"{"!==n[0]&&"["!==n[0]&&'"'!==n[0]),!i)try{return JSON.parse(n)}catch(e){}return e}var s=function(){return(s=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var o in t=arguments[i])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},a=function(){function e(e,t){var i=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies="string"==typeof e?o.Q(e,t):"object"==typeof e&&null!==e?e:{},new Promise(function(){i.HAS_DOCUMENT_COOKIE="object"==typeof document&&"string"==typeof document.cookie}).catch(function(){})}return e.prototype._updateBrowserValues=function(e){this.HAS_DOCUMENT_COOKIE&&(this.cookies=o.Q(document.cookie,e))},e.prototype._emitChange=function(e){for(var t=0;t<this.changeListeners.length;++t)this.changeListeners[t](e)},e.prototype.get=function(e,t,i){return void 0===t&&(t={}),this._updateBrowserValues(i),r(this.cookies[e],t)},e.prototype.getAll=function(e,t){void 0===e&&(e={}),this._updateBrowserValues(t);var i={};for(var n in this.cookies)i[n]=r(this.cookies[n],e);return i},e.prototype.set=function(e,t,i){var n;"object"==typeof t&&(t=JSON.stringify(t)),this.cookies=s(s({},this.cookies),((n={})[e]=t,n)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=o.q(e,t,i)),this._emitChange({name:e,value:t,options:i})},e.prototype.remove=function(e,t){var i=t=s(s({},t),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=s({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=o.q(e,"",i)),this._emitChange({name:e,value:void 0,options:t})},e.prototype.addChangeListener=function(e){this.changeListeners.push(e)},e.prototype.removeChangeListener=function(e){var t=this.changeListeners.indexOf(e);t>=0&&this.changeListeners.splice(t,1)},e}(),c=n.createContext(new a);function u(e){var t=(0,n.useContext)(c);if(!t)throw Error("Missing <CookiesProvider>");var i=t.getAll(),o=(0,n.useState)(i),r=o[0],s=o[1],a=(0,n.useRef)(r);return"undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement&&(0,n.useLayoutEffect)(function(){function i(){var i=t.getAll();(function(e,t,i){if(!e)return!0;for(var n=0;n<e.length;n++){var o=e[n];if(t[o]!==i[o])return!0}return!1})(e||null,i,a.current)&&s(i),a.current=i}return t.addChangeListener(i),function(){t.removeChangeListener(i)}},[t]),[r,(0,n.useMemo)(function(){return t.set.bind(t)},[t]),(0,n.useMemo)(function(){return t.remove.bind(t)},[t])]}c.Provider,c.Consumer}},function(e){e.O(0,[114,136,75,492,774,888,179],function(){return e(e.s=4569)}),_N_E=e.O()}]);