webpackJsonp([4],{IeuG:function(e,n,t){var a={"./manage.end.js":"soxR"};function r(e){return t(o(e))}function o(e){var n=a[e];if(!(n+1))throw new Error("Cannot find module '"+e+"'.");return n}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id="IeuG"},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t("fZjL"),r=t.n(a),o=t("7+uW"),u=t("qszd"),i="channelmode=yes, height=720px, width=460px, top=8px",s={created:function(){var e=this;window.addEventListener("keyup",function(n){var t=""+window.location.origin;"F2"!==n.key&&113!==n.keyCode||window.open(t+"/f2",null,i),"F4"!==n.key&&115!==n.keyCode||window.open(t+"/f4",null,i),"F9"!==n.key&&120!==n.keyCode||u.c.auth().signOut().then(function(n){e.$router.push({name:"index"})}).catch(function(e){return console.error(e)}),"Home"!==n.key&&36!==n.keyCode||e.$router.push({name:"index"})},!1)}},c={render:function(){var e=this.$createElement,n=this._self._c||e;return n("main",{attrs:{id:"app-wrap","aria-core":"Core Program"}},[n("router-view")],1)},staticRenderFns:[]},d=t("VU/8")(s,c,!1,null,null,null).exports,p=t("bOdI"),f=t.n(p),l=t("Dd8w"),m=t.n(l),v=t("d7EF"),h=t.n(v),y=t("NYxO");o.a.use(y.a);var g=t("IeuG"),k=g.keys().map(function(e){return[e.replace(/(^.\/)|(\.js$)/g,""),g(e)]}).reduce(function(e,n){var t=h()(n,2),a=t[0],r=t[1];return void 0===r.namespaced&&(r.namespaced=!0),m()({},e,f()({},a,r))},{}),b=new y.a.Store({modules:k,strict:!1}),j=t("/ocq");o.a.use(j.a);var w=new j.a({scrollBehavior:function(e){return{x:0,y:0}},fallback:!1,mode:"history",routes:[{path:"/",name:"index",component:function(){return t.e(2).then(t.bind(null,"42Hy"))}},{path:"/f2",name:"store",component:function(){return t.e(1).then(t.bind(null,"UjiQ"))}},{path:"/f4",name:"auth",component:function(){return t.e(0).then(t.bind(null,"J+R/"))}}]}),_=(t("dtc9"),t("1mcD")),O=t.n(_),x=t("mjDs"),C=t.n(x),I={props:{data:{type:Object,required:!0}},methods:{backgroundImage:function(e){return"background-image: url("+this.port+e+")"}}},z={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("transition",{attrs:{name:"mockups"}},[t("div",{staticClass:"mu-mockups"},[t("div",{staticClass:"mu-image",style:e.backgroundImage(e.data.image)}),e._v(" "),t("div",{staticClass:"mu-title"},[t("a",[e._v(e._s(e.data.title))])]),e._v(" "),t("div",{staticClass:"mu-desc"},[e._v("\n      by "),t("a",[e._v(e._s(e.data.author))])]),e._v(" "),t("div",{staticClass:"mu-time"},[e._v("\n      "+e._s(e.$moment(e.data.timestamp).format("LL"))+"\n    ")])])])},staticRenderFns:[]};var E={Mockups:t("VU/8")(I,z,!1,function(e){t("f0P8")},"data-v-758d555e",null).exports};r()(E).forEach(function(e){o.a.component(e,E[e])}),o.a.use(O.a),o.a.use(C.a),o.a.prototype.port="https://firebasestorage.googleapis.com/v0/b/tap10-c388f.appspot.com/o/",o.a.config.devtools=!0,o.a.config.productionTip=!1,new o.a({el:"#app",store:b,router:w,render:function(e){return e(d)}})},VvOS:function(e,n,t){var a={"./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./ja":"ORgI","./ja.js":"ORgI"};function r(e){return t(o(e))}function o(e){var n=a[e];if(!(n+1))throw new Error("Cannot find module '"+e+"'.");return n}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id="VvOS"},dtc9:function(e,n){},f0P8:function(e,n){},qszd:function(e,n,t){"use strict";t.d(n,"a",function(){return o}),t.d(n,"b",function(){return u});var a=t("Sazm"),r=(t.n(a),Object(a.initializeApp)({apiKey:"AIzaSyAk0Kab4VOt3dpByyc2khOA92nZjucnw3c",authDomain:"tap10-c388f.firebaseapp.com",databaseURL:"https://tap10-c388f.firebaseio.com",projectId:"tap10-c388f",storageBucket:"tap10-c388f.appspot.com",messagingSenderId:"985015798166"}));n.c=r;var o=r.database(),u=r.storage().ref()},soxR:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"state",function(){return a}),t.d(n,"getters",function(){return r}),t.d(n,"mutations",function(){return o}),t.d(n,"actions",function(){return u});var a={},r={},o={},u={}}},["NHnr"]);
//# sourceMappingURL=app.af98a89d82b020f34aad.js.map