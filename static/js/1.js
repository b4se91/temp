webpackJsonp([1],{"1kS7":function(t,e){e.f=Object.getOwnPropertySymbols},"21It":function(t,e,n){"use strict";var r=n("FtD3");t.exports=function(t,e,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},"5VQ+":function(t,e,n){"use strict";var r=n("cGG2");t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},"7GwW":function(t,e,n){"use strict";var r=n("cGG2"),o=n("21It"),i=n("DQCr"),s=n("oJlt"),a=n("GHBc"),u=n("FtD3"),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n("thJu");t.exports=function(t){return new Promise(function(e,f){var l=t.data,p=t.headers;r.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||a(t.url)||(d=new window.XDomainRequest,h="onload",m=!0,d.onprogress=function(){},d.ontimeout=function(){}),t.auth){var v=t.auth.username||"",y=t.auth.password||"";p.Authorization="Basic "+c(v+":"+y)}if(d.open(t.method.toUpperCase(),i(t.url,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d[h]=function(){if(d&&(4===d.readyState||m)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?s(d.getAllResponseHeaders()):null,r={data:t.responseType&&"text"!==t.responseType?d.response:d.responseText,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:n,config:t,request:d};o(e,f,r),d=null}},d.onerror=function(){f(u("Network Error",t,null,d)),d=null},d.ontimeout=function(){f(u("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var w=n("p1b6"),g=(t.withCredentials||a(t.url))&&t.xsrfCookieName?w.read(t.xsrfCookieName):void 0;g&&(p[t.xsrfHeaderName]=g)}if("setRequestHeader"in d&&r.forEach(p,function(t,e){void 0===l&&"content-type"===e.toLowerCase()?delete p[e]:d.setRequestHeader(e,t)}),t.withCredentials&&(d.withCredentials=!0),t.responseType)try{d.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){d&&(d.abort(),f(t),d=null)}),void 0===l&&(l=null),d.send(l)})}},"9bBU":function(t,e,n){n("mClu");var r=n("FeBl").Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},C4MV:function(t,e,n){t.exports={default:n("9bBU"),__esModule:!0}},DQCr:function(t,e,n){"use strict";var r=n("cGG2");function o(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(r.isURLSearchParams(e))i=e.toString();else{var s=[];r.forEach(e,function(t,e){null!==t&&void 0!==t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),s.push(o(e)+"="+o(t))}))}),i=s.join("&")}return i&&(t+=(-1===t.indexOf("?")?"?":"&")+i),t}},FtD3:function(t,e,n){"use strict";var r=n("t8qj");t.exports=function(t,e,n,o,i){var s=new Error(t);return r(s,e,n,o,i)}},GHBc:function(t,e,n){"use strict";var r=n("cGG2");t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=o(window.location.href),function(e){var n=r.isString(e)?o(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0}},"JP+z":function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},KCLY:function(t,e,n){"use strict";(function(e){var r=n("cGG2"),o=n("5VQ+"),i={"Content-Type":"application/x-www-form-urlencoded"};function s(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var a,u={adapter:("undefined"!=typeof XMLHttpRequest?a=n("7GwW"):void 0!==e&&(a=n("7GwW")),a),transformRequest:[function(t,e){return o(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(s(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)?(s(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(t){u.headers[t]={}}),r.forEach(["post","put","patch"],function(t){u.headers[t]=r.merge(i)}),t.exports=u}).call(e,n("W2nU"))},NpIQ:function(t,e){e.f={}.propertyIsEnumerable},R4wc:function(t,e,n){var r=n("kM2E");r(r.S+r.F,"Object",{assign:n("To3L")})},Re3r:function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(n(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}(t)||!!t._isBuffer)}},TNV1:function(t,e,n){"use strict";var r=n("cGG2");t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},To3L:function(t,e,n){"use strict";var r=n("lktj"),o=n("1kS7"),i=n("NpIQ"),s=n("sB3e"),a=n("MU5D"),u=Object.assign;t.exports=!u||n("S82l")(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=u({},t)[n]||Object.keys(u({},e)).join("")!=r})?function(t,e){for(var n=s(t),u=arguments.length,c=1,f=o.f,l=i.f;u>c;)for(var p,d=a(arguments[c++]),h=f?r(d).concat(f(d)):r(d),m=h.length,v=0;m>v;)l.call(d,p=h[v++])&&(n[p]=d[p]);return n}:u},UjiQ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("woOf"),o=n.n(r),i=n("mUi/"),s=n("qszd"),a={data:function(){return{form:new i.a({topic:null,author:null,href:null}),temp:null,articles:[]}},methods:{addOn:function(){var t=this;if(!this.temp)return console.warn("Something went wrong!!");var e=o()({},this.form.data()),n=this.temp,r=""+Date.now()+function(t){return t.substr(t.indexOf("."),t.length).toLowerCase()}(n.name),i=s.c.child(r);i.put(n,{contentType:n.type}).then(function(n){i.getDownloadURL().then(function(n){e.image=n.replace(t.PORT,""),e.timestamp=Date.now(),s.a.collection("articles").add(e).then(function(){return console.log("Document successfully written!")}).catch(function(t){return console.log(t)}),t.form.reset(),document.querySelector("input[type=file]").value=null})}).catch(function(t){console.error(t)})},handleFiles:function(){var t=event.target.files;this.temp=t[0]}},created:function(){var t=this;s.a.collection("articles").onSnapshot(function(e){var n=[];e.forEach(function(t){n.push(Object(s.b)(t))}),t.articles=n})}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"n-store"},[t._m(0),t._v(" "),n("div",{staticClass:"n-form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.topic,expression:"form.topic"}],staticClass:"n-input",attrs:{type:"text",placeholder:"Topic"},domProps:{value:t.form.topic},on:{input:function(e){e.target.composing||t.$set(t.form,"topic",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.author,expression:"form.author"}],staticClass:"n-input",attrs:{type:"text",placeholder:"Author"},domProps:{value:t.form.author},on:{input:function(e){e.target.composing||t.$set(t.form,"author",e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.form.href,expression:"form.href"}],staticClass:"n-input",attrs:{type:"text",placeholder:"Full URL"},domProps:{value:t.form.href},on:{input:function(e){e.target.composing||t.$set(t.form,"href",e.target.value)}}}),t._v(" "),n("input",{staticClass:"n-input n-file",attrs:{type:"file",accept:"image/*"},on:{change:t.handleFiles}}),t._v(" "),n("button",{staticClass:"n-btn",attrs:{type:"button"},on:{click:t.addOn}},[n("Icon",{attrs:{type:"ios-flask-outline"}}),t._v(" "),n("span",[t._v("ADD")])],1)]),t._v(" "),n("div",{staticClass:"n-items"},[n("ul",{staticClass:"n-ul"},t._l(t.articles,function(e,r){return n("li",{key:r,staticClass:"n-li"},[n("span",{attrs:{title:e.topic}},[t._v(t._s(e.topic))]),t._v(" "),n("span",[t._v(t._s(e.author))]),t._v(" "),n("span",[t._v(t._s(t.$moment(e.timestamp).format("LL")))]),t._v(" "),n("button",{staticClass:"n-li-btn",on:{click:function(n){t.removeArticle(e)}}},[n("Icon",{attrs:{type:"ios-trash"}})],1)])}))])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"n-intro"},[e("h1",[this._v("Vue.js 2 & Firebase Sample Datastore")])])}]},c=n("VU/8")(a,u,!1,null,null,null);e.default=c.exports},V3tA:function(t,e,n){n("R4wc"),t.exports=n("FeBl").Object.assign},XmWM:function(t,e,n){"use strict";var r=n("KCLY"),o=n("cGG2"),i=n("fuGk"),s=n("xLtR");function a(t){this.defaults=t,this.interceptors={request:new i,response:new i}}a.prototype.request=function(t){"string"==typeof t&&(t=o.merge({url:arguments[0]},arguments[1])),(t=o.merge(r,{method:"get"},this.defaults,t)).method=t.method.toLowerCase();var e=[s,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},o.forEach(["delete","get","head","options"],function(t){a.prototype[t]=function(e,n){return this.request(o.merge(n||{},{method:t,url:e}))}}),o.forEach(["post","put","patch"],function(t){a.prototype[t]=function(e,n,r){return this.request(o.merge(r||{},{method:t,url:e,data:n}))}}),t.exports=a},Zrlr:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},cGG2:function(t,e,n){"use strict";var r=n("JP+z"),o=n("Re3r"),i=Object.prototype.toString;function s(t){return"[object Array]"===i.call(t)}function a(t){return null!==t&&"object"==typeof t}function u(t){return"[object Function]"===i.call(t)}function c(t,e){if(null!==t&&void 0!==t)if("object"!=typeof t&&(t=[t]),s(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}t.exports={isArray:s,isArrayBuffer:function(t){return"[object ArrayBuffer]"===i.call(t)},isBuffer:o,isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:a,isUndefined:function(t){return void 0===t},isDate:function(t){return"[object Date]"===i.call(t)},isFile:function(t){return"[object File]"===i.call(t)},isBlob:function(t){return"[object Blob]"===i.call(t)},isFunction:u,isStream:function(t){return a(t)&&u(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:c,merge:function t(){var e={};function n(n,r){"object"==typeof e[r]&&"object"==typeof n?e[r]=t(e[r],n):e[r]=n}for(var r=0,o=arguments.length;r<o;r++)c(arguments[r],n);return e},extend:function(t,e,n){return c(e,function(e,o){t[o]=n&&"function"==typeof e?r(e,n):e}),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}}},cWxy:function(t,e,n){"use strict";var r=n("dVOP");function o(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new r(t),e(n.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t;return{token:new o(function(e){t=e}),cancel:t}},t.exports=o},dIwP:function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},dVOP:function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},fuGk:function(t,e,n){"use strict";var r=n("cGG2");function o(){this.handlers=[]}o.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){r.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=o},mClu:function(t,e,n){var r=n("kM2E");r(r.S+r.F*!n("+E39"),"Object",{defineProperty:n("evD5").f})},"mUi/":function(t,e,n){"use strict";var r=n("woOf"),o=n.n(r),i=n("fZjL"),s=n.n(i),a=n("Zrlr"),u=n.n(a),c=n("wxAW"),f=n.n(c),l=n("mtWM"),p=n.n(l),d=function(){function t(){u()(this,t),this.errors={}}return f()(t,[{key:"has",value:function(t){return this.errors.hasOwnProperty(t)}},{key:"any",value:function(){return s()(this.errors).length>0}},{key:"get",value:function(t){if(this.errors[t])return this.errors[t][0]}},{key:"clear",value:function(t){if(t)return delete this.errors[t],null;this.errors={}}},{key:"record",value:function(t){this.errors=t}}]),t}(),h=function(){function t(e){for(var n in u()(this,t),this.temp=e,e)this[n]=e[n];this.errors=new d}return f()(t,[{key:"data",value:function(){var t=o()({},this);return delete t.temp,delete t.errors,t}},{key:"reset",value:function(){for(var t in this.temp)this[t]=""}},{key:"submit",value:function(t,e){p.a[t](e,this.data()).then(this.onSuccess.bind(this)).catch(this.onFail.bind(this))}},{key:"onSuccess",value:function(t){alert(t.data.message),this.errors.clear(),this.reset()}},{key:"onFail",value:function(t){this.errors.record(t.response.data)}}]),t}();e.a=h},mtWM:function(t,e,n){t.exports=n("tIFN")},oJlt:function(t,e,n){"use strict";var r=n("cGG2"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,i,s={};return t?(r.forEach(t.split("\n"),function(t){if(i=t.indexOf(":"),e=r.trim(t.substr(0,i)).toLowerCase(),n=r.trim(t.substr(i+1)),e){if(s[e]&&o.indexOf(e)>=0)return;s[e]="set-cookie"===e?(s[e]?s[e]:[]).concat([n]):s[e]?s[e]+", "+n:n}}),s):s}},p1b6:function(t,e,n){"use strict";var r=n("cGG2");t.exports=r.isStandardBrowserEnv()?{write:function(t,e,n,o,i,s){var a=[];a.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},pBtG:function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},pxG4:function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},qRfI:function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},t8qj:function(t,e,n){"use strict";t.exports=function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t}},tIFN:function(t,e,n){"use strict";var r=n("cGG2"),o=n("JP+z"),i=n("XmWM"),s=n("KCLY");function a(t){var e=new i(t),n=o(i.prototype.request,e);return r.extend(n,i.prototype,e),r.extend(n,e),n}var u=a(s);u.Axios=i,u.create=function(t){return a(r.merge(s,t))},u.Cancel=n("dVOP"),u.CancelToken=n("cWxy"),u.isCancel=n("pBtG"),u.all=function(t){return Promise.all(t)},u.spread=n("pxG4"),t.exports=u,t.exports.default=u},thJu:function(t,e,n){"use strict";var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(){this.message="String contains an invalid character"}o.prototype=new Error,o.prototype.code=5,o.prototype.name="InvalidCharacterError",t.exports=function(t){for(var e,n,i=String(t),s="",a=0,u=r;i.charAt(0|a)||(u="=",a%1);s+=u.charAt(63&e>>8-a%1*8)){if((n=i.charCodeAt(a+=.75))>255)throw new o;e=e<<8|n}return s}},woOf:function(t,e,n){t.exports={default:n("V3tA"),__esModule:!0}},wxAW:function(t,e,n){"use strict";e.__esModule=!0;var r,o=n("C4MV"),i=(r=o)&&r.__esModule?r:{default:r};e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},xLtR:function(t,e,n){"use strict";var r=n("cGG2"),o=n("TNV1"),i=n("pBtG"),s=n("KCLY"),a=n("dIwP"),u=n("qRfI");function c(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){return c(t),t.baseURL&&!a(t.url)&&(t.url=u(t.baseURL,t.url)),t.headers=t.headers||{},t.data=o(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||s.adapter)(t).then(function(e){return c(t),e.data=o(e.data,e.headers,t.transformResponse),e},function(e){return i(e)||(c(t),e&&e.response&&(e.response.data=o(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}}});
//# sourceMappingURL=1.js.map