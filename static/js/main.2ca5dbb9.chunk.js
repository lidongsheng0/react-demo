(this["webpackJsonpevents-demo"]=this["webpackJsonpevents-demo"]||[]).push([[0],{26:function(e){e.exports=JSON.parse('[{"id":1,"title":"Harry Port","price":"10","inventory":"1000"},{"id":2,"title":"Harry Port2","price":"12","inventory":"1"}]')},32:function(e,t,n){e.exports=n(45)},37:function(e,t,n){},38:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),u=n.n(c),l=(n(37),n(30)),o=new(n(24).EventEmitter);var i=function(){var e=Object(a.useState)(),t=Object(l.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){o.addListener("call me",(function(e){return c(e)}))}),[]),r.a.createElement("div",null,"hello, ",n)};var d=function(){return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e="hey",void o.emit("call me",e);var e}}))},m=(n(38),n(12)),s=n(26),E=function(e,t){return setTimeout((function(){return e(s)}),t||100)},p=function(e,t,n){return setTimeout((function(){return t()}),n||100)},v=n(8),f=n(5),h=n(11),b=n(31),y={addedIds:[],quantityById:[]},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y.addedIds,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":return-1!==e.indexOf(t.productId)?e:[].concat(Object(b.a)(e),[t.productId]);default:return e}},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y.quantityById,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":var n=t.productId;return Object(v.a)({},e,Object(h.a)({},n,e[[n]||!1]+1));default:return e}},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECKOUT_REQUEST":return y;case"CHECKOUT_FAILED":return t.cart;default:return{addedIds:O(e.addedIds,t),quantityById:C(e.quantityById,t)}}},T=function(e,t){switch(t.type){case"ADD_TO_CART":return Object(v.a)({},e,{inventory:e.inventory-1});default:return e}},g=Object(f.combineReducers)({byId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_PRODUCTS":return Object(v.a)({},e,{},t.products.reduce((function(e,t){return e[t.id]=t,e}),{}));default:var n=t.productId;return n?Object(v.a)({},e,Object(h.a)({},n,T(e[n],t))):e}},visibleIds:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RECEIVE_PRODUCTS":return t.products.map((function(e){return e.id}));default:return e}}}),j=function(e,t){return e.byId[t]},D=function(e){return e.visibleIds.map((function(t){return j(e,t)}))},w=Object(f.combineReducers)({cart:I,products:g}),R=function(e){return function(e){return e.addedIds}(e.cart)},_=function(e,t){return function(e,t){return e.quantityById[t]||0}(e.cart,t)},S=function(e,t){return j(e.products,t)},k=function(e){return R(e).reduce((function(t,n){return t+S(e,n).price*_(e,n)}),0).toFixed(2)},q=function(e){return R(e).map((function(t){return Object(v.a)({},S(e,t),{quantity:_(e,t)})}))},A=Object(m.b)((function(e){return{products:q(e),total:k(e)}}),{checkout:function(e){return function(t,n){var a=n().cart;t({type:"CHECKOUT_REQUEST"}),p(e,(function(){t({type:"CHECKOUT_SUCCEED",cart:a})}))}}})((function(e){var t=e.products,n=e.total,a=e.checkout,c=t.length>0;return r.a.createElement("div",null,r.a.createElement("h3",null,"Welcome to your shopping cart!"),r.a.createElement("div",null,r.a.createElement("div",null,t.map((function(e){return r.a.createElement("div",{key:e.id}," ",e.title," --\x3e $",e.price,e.quantity?"* ".concat(e.quantity):null)}))),r.a.createElement("p",null,"Total price is ",n)),r.a.createElement("button",{onClick:function(){return a(t)},disabled:c?"":"disabled"},"Check out!"))})),U=Object(m.b)((function(e){return{products:D(e.products)}}),{addToCart:function(e){return function(t,n){n().products.byId[e].inventory>0&&t(function(e){return{type:"ADD_TO_CART",productId:e}}(e))}}})((function(e){var t=e.products,n=e.addToCart;return r.a.createElement("div",null,r.a.createElement("h2",null,"BOOOOOKISH"),t.map((function(e){return r.a.createElement("div",null,e.title," : $",e.price,"Inventory:",e.inventory?e.inventory:null,r.a.createElement("button",{onClick:function(){return n(e.id)},disabled:e.inventory>0?"":"disabled"},e.inventory>0?"add to cart":"sold out"))})))}));function B(){function e(e){console.log("ajax request:"+e)}var t,n,c=(t=e,n=500,function(e){clearTimeout(t.id),t.id=setTimeout((function(){t.call(this,e)}),n)});Object(a.useEffect)((function(){}),[]);var u=function(e,t){var n,a;return function(r){var c=+new Date;n&&c<n+t?(clearTimeout(a),a=setTimeout((function(){n=c,e.call(this,r)}),t)):(n=c,e.call(this,r))}}(e,500);return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("input",{onChange:function(t){return e(t.target.value)}})," vanilla input"),r.a.createElement("div",null,r.a.createElement("input",{onChange:function(e){return c(e.target.value)}})," input with debounce "),r.a.createElement("div",null,r.a.createElement("input",{onChange:function(e){return u(e.target.value)}})," input with throttle"))}var H=n(7),P=n(9);function x(){var e=Object(P.g)();return r.a.createElement("div",null,r.a.createElement("h2",null,"Topics"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(H.b,{to:"".concat(e.url,"/components")},"Components")),r.a.createElement("li",null,r.a.createElement(H.b,{to:"".concat(e.url,"/props-v-state")},"Props v. State"))),r.a.createElement(P.c,null,r.a.createElement(P.a,{path:"".concat(e.path,"/:topicId")},r.a.createElement(K,null)),r.a.createElement(P.a,{path:e.path},r.a.createElement("h3",null,"Please select a topic."))))}function K(){var e=Object(P.f)().topicId;return r.a.createElement("h3",null,"Requested topic ID: ",e)}var W=function(){return r.a.createElement(H.a,null,r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(H.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(H.b,{to:"/about"},"About")),r.a.createElement("li",null,r.a.createElement(H.b,{to:"/eventsDemo"},"eventsDemo")),r.a.createElement("li",null,r.a.createElement(H.b,{to:"/cart"},"Cart")),r.a.createElement("li",null,r.a.createElement(H.b,{to:"/topics"},"Topics")),r.a.createElement(H.b,{to:"/debouce"}," DebouceDemo"))),r.a.createElement(P.c,null,r.a.createElement(P.a,{path:"/debouce"},r.a.createElement(B,null)),r.a.createElement(P.a,{path:"/cart"},r.a.createElement(A,null)),r.a.createElement(P.a,{path:"/eventsDemo"},r.a.createElement(i,null),r.a.createElement(d,null)),r.a.createElement(P.a,{path:"/users"}),r.a.createElement(P.a,{path:"/topics"},r.a.createElement(x,null)),r.a.createElement(P.a,{path:"/"},r.a.createElement(U,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=n(28),V=n(29),$=(n(44),[J.a]);var F=Object(f.createStore)(w,Object(V.composeWithDevTools)(f.applyMiddleware.apply(void 0,$)));F.dispatch((function(e){E((function(t){e(function(e){return{type:"RECEIVE_PRODUCTS",products:e}}(t))}))})),u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,{store:F},r.a.createElement(W,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.2ca5dbb9.chunk.js.map