(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},51:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c(20),a=c.n(n),s=(c(42),c(23)),i=(c(43),c(4)),o=c(3),d=(c(44),c(0)),j=function(e){var t=e.imageUrl,c=e.name,r=e.price,n=e.description,a=e.productId;return Object(d.jsxs)("div",{className:"product",children:[Object(d.jsx)("img",{src:t,alt:c}),Object(d.jsxs)("div",{className:"product__info",children:[Object(d.jsx)("p",{className:"info__name",children:c}),Object(d.jsxs)("p",{className:"info__description",children:[n.substring(0,100),"..."]}),Object(d.jsxs)("p",{className:"info__price",children:["$",r]}),Object(d.jsx)(i.b,{to:"/product/".concat(a),className:"info__button",children:"View"})]})]})},l=(c(51),c(7)),u=c(11),p=c.n(u),b=c(17),O="GET_PRODUCTS_REQUEST",h="GET_PRODUCTS_SUCCESS",m="GET_PRODUCTS_FAIL",x="GET_PRODUCT_DETAILS_REQUEST",f="GET_PRODUCT_DETAILS_SUCCESS",_="GET_PRODUCT_DETAILS_FAIL",v="GET_PRODUCT_DETAILS_RESET",g=c(18),y=c.n(g),N=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.products})),c=t.products,n=t.loading,a=t.error;return Object(r.useEffect)((function(){e(function(){var e=Object(b.a)(p.a.mark((function e(t){var c,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:O}),e.next=4,y.a.get("/products");case 4:c=e.sent,r=c.data,t({type:h,payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({type:m,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(d.jsxs)("div",{className:"homescreen",children:[Object(d.jsx)("h2",{className:"homescreen__title",children:"Latest Products"}),Object(d.jsx)("div",{className:"homescreen__products",children:n?Object(d.jsx)("h2",{children:"Loading ....."}):a?Object(d.jsx)("h2",{children:a}):null===c||void 0===c?void 0:c.map((function(e){return Object(d.jsx)(j,{imageUrl:e.imageUrl,name:e.name,price:e.price,description:e.description,productId:e._id},e._id)}))})]})},S=c(14),k=(c(71),"ADD_TO_CART"),I="REMOVE_FROM_CART",C=function(e,t){return function(){var c=Object(b.a)(p.a.mark((function c(r,n){var a,s;return p.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,y.a.get("/products/".concat(e));case 2:a=c.sent,s=a.data,r({type:k,payload:{product:s._id,name:s.name,imageUrl:s.imageUrl,price:s.price,countInStock:s.countInStock,qty:t}}),localStorage.setItem("cart",JSON.stringify(n().cart.cartItem));case 6:case"end":return c.stop()}}),c)})));return function(e,t){return c.apply(this,arguments)}}()},E=function(e){var t=e.match,c=e.history,n=Object(r.useState)(1),a=Object(s.a)(n,2),i=a[0],o=a[1],j=Object(l.b)(),u=Object(l.c)((function(e){return e.product})),O=u.loading,h=u.error,m=u.product;Object(r.useEffect)((function(){var e;m&&t.params.id!==m._id&&j((e=t.params.id,function(){var t=Object(b.a)(p.a.mark((function t(c){var r,n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c({type:x}),t.next=4,y.a.get("/products/".concat(e));case 4:r=t.sent,n=r.data,c({type:f,payload:n}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),c({type:_,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()))}),[j,m,t]);return Object(d.jsx)("div",{className:"productscreen",children:O?Object(d.jsx)("h2",{children:"Loading..."}):h?Object(d.jsx)("h2",{children:h}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"productscreen__left",children:[Object(d.jsx)("div",{className:"left__image",children:Object(d.jsx)("img",{src:m.imageUrl,alt:m.name})}),Object(d.jsxs)("div",{className:"left__info",children:[Object(d.jsx)("p",{className:"left__name",children:"PlayStation 5"}),Object(d.jsxs)("p",{children:["Price: $",m.price]}),Object(d.jsxs)("p",{children:["Description: ",m.description]})]})]}),Object(d.jsx)("div",{className:"productscreen__right",children:Object(d.jsxs)("div",{className:"right__info",children:[Object(d.jsxs)("p",{children:["Price:",Object(d.jsxs)("span",{children:["$",m.price]})]}),Object(d.jsxs)("p",{children:["Status:",Object(d.jsx)("span",{children:m.countInStock>0?"In Stock":"Out of Stock"})]}),Object(d.jsxs)("p",{children:["Qty",Object(d.jsx)("select",{value:i,onChange:function(e){return t=e.target.value,void o(t);var t},children:Object(S.a)(Array(m.countInStock).keys()).map((function(e){return Object(d.jsx)("option",{value:e+1,children:e+1},e+1)}))})]}),Object(d.jsx)("p",{children:Object(d.jsx)("button",{type:"button",onClick:function(){j(C(m._id,i)),c.push("/cart")},children:"Add To Cart"})})]})})]})})},T=(c(72),function(e){var t=e.item,c=e.qtyChangeHandler,r=e.removeHandler;return Object(d.jsxs)("div",{className:"cartitem",children:[Object(d.jsx)("div",{className:"cartitem__image",children:Object(d.jsx)("img",{src:t.imageUrl,alt:t.name})}),Object(d.jsx)(i.b,{to:"/product/".concat(t.product),className:"cartItem__name",children:Object(d.jsx)("p",{children:t.name})}),Object(d.jsxs)("p",{className:"cartitem__price",children:["$",t.price]}),Object(d.jsx)("select",{value:t.qty,onChange:function(e){return c(t.product,e.target.value)},className:"cartItem__select",children:Object(S.a)(Array(t.countInStock).keys()).map((function(e){return Object(d.jsx)("option",{value:e+1,children:e+1},e+1)}))}),Object(d.jsx)("button",{className:"cartItem__deleteBtn",onClick:function(){return r(t.product)},children:Object(d.jsx)("i",{className:"fas fa-trash"})})]})}),w=(c(73),function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.cart})).cartItem;Object(r.useEffect)((function(){}),[]);var c=function(t,c){e(C(t,c))},n=function(t){e(function(e){return function(t,c){t({type:I,payload:e}),localStorage.setItem("cart",JSON.stringify(c().cart.cartItem))}}(t))};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"cartscreen",children:[Object(d.jsxs)("div",{className:"cartscreen__left",children:[Object(d.jsx)("h2",{children:"Shopping Cart"}),0===t.length?Object(d.jsxs)("div",{children:["Your Cart Is Empty ",Object(d.jsx)(i.b,{to:"/",children:"Go Back"})]}):t.map((function(e){return Object(d.jsx)(T,{item:e,qtyChangeHandler:c,removeHandler:n},e.product)}))]}),Object(d.jsxs)("div",{className:"cartscreen__right",children:[Object(d.jsxs)("div",{className:"cartscreen__info",children:[Object(d.jsxs)("p",{children:["Subtotal (",t.reduce((function(e,t){return Number(t.qty)+e}),0),") items"]}),Object(d.jsxs)("p",{children:["$",t.reduce((function(e,t){return e+t.price*t.qty}),0).toFixed(2)]})]}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{children:"Proceed To Checkout"})})]})]})})}),U=(c(74),function(e){var t=e.click,c=Object(l.c)((function(e){return e.cart})).cartItem;return Object(d.jsxs)("nav",{className:"navbar",children:[Object(d.jsx)("div",{className:"navbar__logo",children:Object(d.jsx)("h2",{children:"MERN Shopping Cart"})}),Object(d.jsxs)("ul",{className:"navbar__links",children:[Object(d.jsx)("li",{children:Object(d.jsxs)(i.b,{to:"/cart",className:"cart__link",children:[Object(d.jsx)("i",{className:"fas fa-shopping-cart"}),Object(d.jsxs)("span",{children:["Cart  ",Object(d.jsxs)("span",{className:"cartlogo__badge",children:[" ",c.reduce((function(e,t){return Number(t.qty)+e}),0)]})]})]})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"/",children:"Shop"})})]}),Object(d.jsxs)("div",{className:"hamburger__menu",onClick:t,children:[Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{})]})]})}),R=(c(75),function(e){var t=e.show,c=e.click;return t&&Object(d.jsx)("div",{className:"backdrop",onClick:c})}),D=(c(76),function(e){var t=e.show,c=e.click,r=["sidedrawer"];return t&&r.push("show"),Object(d.jsx)("div",{className:r.join(" "),children:Object(d.jsxs)("ul",{className:"sidedrawer__links",onClick:c,children:[Object(d.jsx)("li",{children:Object(d.jsxs)(i.b,{to:"/cart",children:[Object(d.jsx)("i",{className:"fas fa-shopping-cart"}),"Cart ",Object(d.jsx)("span",{className:"sidedrawer__cartbadge",children:"0"})]})}),Object(d.jsx)("li",{children:Object(d.jsx)(i.b,{to:"/",children:"Shop"})})]})})});var A=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),c=t[0],n=t[1];return Object(d.jsxs)(i.a,{children:[Object(d.jsx)(U,{click:function(){return n(!0)}}),Object(d.jsx)(D,{show:c,click:function(){return n(!1)}}),Object(d.jsx)(R,{show:c,click:function(){return n(!1)}}),Object(d.jsx)("main",{children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",component:N}),Object(d.jsx)(o.a,{exact:!0,path:"/product/:id",component:E}),Object(d.jsx)(o.a,{exact:!0,path:"/cart",component:w})]})})]})},P=c(19),L=c(36),G=c(37),q=c(12),F=Object(P.combineReducers)({cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItem:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:var c=t.payload,r=e.cartItem.find((function(e){return e.product===c.product}));return r?Object(q.a)(Object(q.a)({},e),{},{cartItem:e.cartItem.map((function(e){return e.product===r.product?c:e}))}):Object(q.a)(Object(q.a)({},e),{},{cartItem:[].concat(Object(S.a)(e.cartItem),[c])});case I:return Object(q.a)(Object(q.a)({},e),{},{cartItem:e.cartItem.filter((function(e){return e.product!==t.payload}))});default:return e}},products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{prodcuts:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return{loading:!0,products:[]};case h:return{loading:!1,products:t.payload};case m:return{loading:!1,error:t.payload};default:return e}},product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return{loading:!0};case f:return{loading:!1,product:t.payload};case _:return{loading:!1,error:t.payload};case v:return{product:{}};default:return e}}}),$=[L.a],H=Object(P.createStore)(F,Object(G.composeWithDevTools)(P.applyMiddleware.apply(void 0,$)));a.a.render(Object(d.jsx)(l.a,{store:H,children:Object(d.jsx)(A,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.3183ac6d.chunk.js.map