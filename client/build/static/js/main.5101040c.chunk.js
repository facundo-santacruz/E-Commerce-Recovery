(this["webpackJsonprecovery-ecommerce"]=this["webpackJsonprecovery-ecommerce"]||[]).push([[0],{18:function(e,t,c){e.exports={contenedor:"Catalog_contenedor__Yql0G",ContenedorPrincipal:"Catalog_ContenedorPrincipal__ZZ-nz",secundario:"Catalog_secundario__PPI9a",ContenedorCartasPag:"Catalog_ContenedorCartasPag__2EGPV",cartas:"Catalog_cartas__2Vci3"}},20:function(e,t,c){e.exports={principal:"Pagination_principal__25Grb",ul:"Pagination_ul__3Ev7x"}},21:function(e,t,c){e.exports={contenedor:"Filter_contenedor__3PoGo",link:"Filter_link__3baU1",nombre:"Filter_nombre__I17B5"}},25:function(e,t,c){e.exports={Contenedor:"LeftBar_Contenedor__12p9q",listarCategorias:"LeftBar_listarCategorias__2cpt9",link:"LeftBar_link__1rR6y",listaCompleta:"LeftBar_listaCompleta__2BdOO",list:"LeftBar_list__1-mia",filter:"LeftBar_filter__1yeaF",filterBoton:"LeftBar_filterBoton__1eEiz"}},26:function(e,t,c){e.exports={principal:"Nav_principal__2z2ra",secundario:"Nav_secundario__3PLcm",img:"Nav_img__3-dqa",buscador:"Nav_buscador__22yJ4",text:"Nav_text__1eEgf",boton:"Nav_boton__zNu6k",ToolBar:"Nav_ToolBar__RF5PH"}},27:function(e,t,c){e.exports={contPrincipal:"Img_contPrincipal__9SU29",contenedor:"Img_contenedor__3wC8z",imagenes:"Img_imagenes__VQs8P",imagen:"Img_imagen__1FdN3",segContenedor:"Img_segContenedor__3rVW-",contImgGde:"Img_contImgGde__2OJ4_",imgGrande:"Img_imgGrande__77biT"}},33:function(e,t,c){e.exports={Contenedor:"Categories_Contenedor__1yrea",cartas:"Categories_cartas__fLBol",cardProd:"Categories_cardProd__L9Mpb",imagen:"Categories_imagen__398Uk",text:"Categories_text__2gKhU"}},35:function(e,t,c){e.exports={detail:"CartaProducto_detail__2zr0f",detContenido:"CartaProducto_detContenido__2ONlJ",detEncabezado:"CartaProducto_detEncabezado__39xOE",precio:"CartaProducto_precio__XuvPX",disponible:"CartaProducto_disponible__2ycp0"}},39:function(e,t,c){e.exports={cardProd:"ProductCard_cardProd__3ErjW",imagen:"ProductCard_imagen__1B16F",detailProd:"ProductCard_detailProd__1JYHO"}},42:function(e,t,c){e.exports={contenedor:"SelectOrder_contenedor__3y3Gq"}},70:function(e,t,c){},71:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),r=c.n(a),o=c(29),i=c.n(o),s=(c(70),c(71),c(3)),l="GET_PRODUCTS_NAME",d="GET_PRODUCTS_BY_PRICE",u="GET_PRODUCTS_BY_CONDITION",j="GET_PRODUCT",b="GET_CATEGORIES",p="GET_CATEGORY",f="GET_PRODUCTS_CAT_BY_CONDITION",O="GET_REVIEW",h="GET_SELLER",g=c(14),m=c.n(g);function x(e,t){return function(c){m.a.get("/api/products/search?search=".concat(e,"&number=").concat(t)).then((function(e){var t;c((t=e.data,{type:l,payload:t}))})).catch((function(e){console.log(e)}))}}function v(e,t,c){return function(n){m.a.get("/api/products/condition?search=".concat(e,"&number=").concat(t,"&").concat(c)).then((function(e){var t;n((t=e.data,{type:u,payload:t}))})).catch((function(e){console.log(e)}))}}function _(e){return function(t){m.a.get("/api/products/product?id=".concat(e)).then((function(e){var c;t((c=e.data,{type:j,payload:c}))})).catch((function(e){console.log(e)}))}}function y(e){return function(t){m.a.get("/api/products/reviews?id=".concat(e)).then((function(e){var c;t((c=e.data,{type:O,payload:c}))})).catch((function(e){return console.log(e)}))}}var C=c(11),N=c(8),P=c(4),w=c(39),E=c.n(w);function q(e){var t=e.title,c=e.price,a=e.id,r=e.currency_id,o=e.quantity,i=e.image,s=e.condition;return Object(n.jsxs)(P.c,{to:"/product/".concat(a),className:E.a.cardProd,children:[Object(n.jsx)("img",{src:i,className:E.a.imagen,alt:t}),Object(n.jsxs)("div",{className:E.a.detailProd,children:[Object(n.jsx)("p",{children:t}),Object(n.jsxs)("div",{className:E.a.ContPrecio,children:[Object(n.jsxs)("h3",{children:[r," $",c]}),"new"===s?Object(n.jsx)("span",{style:{backgroundColor:"green",color:"white"},children:"  Nuevo  "}):Object(n.jsx)("span",{style:{backgroundColor:"orange",color:"white"},children:" Usado"})]}),o>0?Object(n.jsx)("p",{style:{textAlign:"center"},children:Object(n.jsxs)("small",{children:["Disponibilidad: ",o," unidad/es"]})}):Object(n.jsx)("h3",{style:{backgroundColor:"gray",color:"white"},children:" Sin Stock"})]})]})}var k=c(18),S=c.n(k),B=c(34),R=c(7),I=c(114),T=c(20),G=c.n(T);function L(e){var t=e.cant,c=e.search,r=e.condition,o=e.txt,i=Object(a.useState)(""),l=Object(R.a)(i,2),d=l[0],u=l[1],j=Object(I.a)({count:d}).items;return Object(a.useEffect)((function(){u(t<=1e3?parseInt(t/30):33)}),[t]),r?Object(n.jsx)("nav",{className:G.a.principal,children:Object(n.jsx)("ul",{className:G.a.ul,children:j.map((function(e,t){var a=e.page,i=e.type,l=e.selected,d=Object(B.a)(e,["page","type","selected"]),u=null;return u="start-ellipsis"===i||"end-ellipsis"===i?"\u2026":"page"===i?Object(n.jsx)(P.c,{to:"/".concat(o,"/").concat(c,"/filter=").concat(r,"/").concat(a),children:Object(n.jsx)("button",Object(s.a)(Object(s.a)({type:"button",style:{fontWeight:l?"bold":void 0}},d),{},{children:a}))}):Object(n.jsx)(P.c,{to:"/".concat(o,"/").concat(c,"/filter=").concat(r,"/").concat(a),children:Object(n.jsx)("button",Object(s.a)(Object(s.a)({type:"button"},d),{},{children:i}))}),Object(n.jsx)("li",{children:u},t)}))})}):Object(n.jsx)("nav",{className:G.a.principal,children:Object(n.jsx)("ul",{className:G.a.ul,children:j.map((function(e,t){var a=e.page,r=e.type,i=e.selected,l=Object(B.a)(e,["page","type","selected"]),d=null;return d="start-ellipsis"===r||"end-ellipsis"===r?"\u2026":"page"===r?Object(n.jsx)(P.c,{to:"/".concat(o,"/").concat(c,"/").concat(a),children:Object(n.jsx)("button",Object(s.a)(Object(s.a)({type:"button",style:{fontWeight:i?"bold":void 0}},l),{},{children:a}))}):Object(n.jsx)(P.c,{to:"/".concat(o,"/").concat(c,"/").concat(a),children:Object(n.jsx)("button",Object(s.a)(Object(s.a)({type:"button"},l),{},{children:r}))}),Object(n.jsx)("li",{children:d},t)}))})})}var A=c(21),D=c.n(A);function W(e){var t=e.id,c=e.name,r=e.type,o=e.filter,i=e.filters,s=e.results,l=e.search,d=Object(a.useState)(""),u=Object(R.a)(d,2),j=u[0],b=u[1];return Object(a.useEffect)((function(){!function(){if(console.log(i.length),i.length>0){var e=i.map((function(e,t){return 0===t?"".concat(e.id,"=").concat(e.values[0].id):"&".concat(e.id,"=").concat(e.values[0].id)}));b(e.join("").replace(",",""))}}()}),[i.values]),j?Object(n.jsxs)(P.b,{to:"/".concat(r,"/").concat(l,"/filter=").concat(j,"&").concat(o,"=").concat(t,"/1"),className:D.a.contenedor,children:[Object(n.jsx)("label",{className:D.a.nombre,children:c}),Object(n.jsxs)("label",{style:{color:"gray"},children:[" (",s,")"]})]},t):Object(n.jsxs)(P.b,{to:"/".concat(r,"/").concat(l,"/filter=").concat(o,"=").concat(t,"/1"),className:D.a.contenedor,children:[Object(n.jsx)("label",{className:D.a.nombre,children:c}),Object(n.jsxs)("label",{style:{color:"gray"},children:[" (",s,")"]})]},t)}function U(e){var t=e.products,c=e.type,a=e.filterValues,r=t.query,o=t.filters;return Object(n.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(n.jsx)("h3",{children:a.name}),a.values.map((function(e){return Object(n.jsx)(W,{name:e.name,id:e.id,results:e.results,filter:a.id,type:c,search:r,filters:o},e.id)}))]})}var M=c(25),V=c.n(M),F=c(6);function z(e){var t=e.txt,c=e.search,a=(e.filter,e.products),r=Object(F.e)(),o=a.filters,i=a.available_filters;function s(e){for(var n=[],a=0;a<o.length;a++)console.log(0===n.length),0===n.length&&o[a].id!==e.target.value?n.push("".concat(o[a].id,"=").concat(o[a].values[0].id.replace(",",""))):o[a].id!==e.target.value&&n.push("&".concat(o[a].id,"=").concat(o[a].values[0].id.replace(",","")));r.push("/".concat(t,"/").concat(c,"/filter=").concat(n,"/1"))}return Object(n.jsxs)("div",{className:V.a.Contenedor,children:[1===o.length?Object(n.jsxs)("div",{children:[Object(n.jsxs)("span",{children:[o[0].name,": "]}),Object(n.jsx)("span",{children:o[0].values[0].name})]},"".concat(o[0].id,0)):o.map((function(e,t){return Object(n.jsxs)("div",{className:V.a.filter,children:[Object(n.jsxs)("div",{children:[Object(n.jsxs)("span",{children:[e.name,": "]}),Object(n.jsx)("span",{children:e.values[0].name})]}),Object(n.jsx)("button",{onClick:s,value:e.id,className:V.a.filterBoton,children:" X "})]},"".concat(e.id).concat(t))})),i.map((function(e,c){return Object(n.jsx)(U,{filterValues:e,type:t,products:a})}))]})}var J=c(42),Y=c.n(J);function X(e){var t=e.products,c=e.txt,r=e.condition,o=Object(a.useState)([{name:"M\xe1s relevantes",id:"relevant"},{name:"Menor Precio",id:"price_asc"},{name:"Mayor Precio",id:"price_desc"}]),i=Object(R.a)(o,1)[0],s=Object(a.useState)(t.sort),l=Object(R.a)(s,1)[0],d=Object(F.e)(),u=t.query;return Object(n.jsxs)("div",{className:Y.a.contenedor,children:[Object(n.jsx)("span",{children:" Ordenar por "}),Object(n.jsx)("select",{defaultValue:l.name,onChange:function(e){if(e.preventDefault(),r){var t=-1===r.split("&").findIndex((function(e){return"sort"===e.slice(0,4)}))?"".concat(r,"&sort=").concat(e.target.value):r.split("&").map((function(t){return"sort"===t.slice(0,4)?"sort=".concat(e.target.value):t})).join("&");return d.push("/".concat(c,"/").concat(u,"/filter=").concat(t,"/1"))}return d.push("/".concat(c,"/").concat(u,"/filter=sort=").concat(e.target.value,"/1"))},children:i.map((function(e){return Object(n.jsx)("option",{value:e.id,children:e.name},"".concat(e.id))}))})]})}var $=c(115),H=c(117),Z=Object($.a)((function(e){return{root:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"25%","& > * + *":{marginLeft:e.spacing(2)}}}}));function K(){var e=Z();return Object(n.jsx)("div",{className:e.root,children:Object(n.jsx)(H.a,{color:"fifth",size:"70%"})})}var Q=Object(C.b)((function(e){return{products:e.products.data,paging:e.products.data,filter:e.products.data,categories:e.products.data}}),(function(e){return Object(s.a)({dispatch:e},Object(N.bindActionCreators)({getProductsRequest:x,getByConditionRequest:v},e))}))((function(e){var t=e.search,c=e.getProductsRequest,r=e.getByConditionRequest,o=e.numero,i=void 0===o?0:o,s=e.products,l=(e.paging,e.filter),d=e.condition;return e.categories,Object(a.useEffect)((function(){if(d)try{r(t,i,d)}catch(e){console.log(e)}}),[r,i,d,t]),Object(a.useEffect)((function(){if(!d)try{c(t,i)}catch(e){console.log(e)}}),[c,i,t]),s&&s.results.length>0?Object(n.jsxs)("div",{className:S.a.contenedor,children:[Object(n.jsx)(X,{condition:d,products:s,txt:"products"}),Object(n.jsx)("div",{className:S.a.ContenedorPrincipal,children:Object(n.jsxs)("div",{className:S.a.secundario,children:[Object(n.jsx)(z,{txt:"products",products:s,filter:l.available_sorts,search:t}),Object(n.jsx)("div",{className:S.a.ContenedorCartasPag,children:Object(n.jsx)("div",{className:S.a.cartas,children:s.results.map((function(e){return Object(n.jsx)(q,{id:e.id,title:e.title,price:e.price,currency_id:e.currency_id,quantity:e.available_quantity,image:e.thumbnail,condition:e.condition},e.id)}))})})]})}),Object(n.jsx)(L,{txt:"products",search:t,cant:s.paging.total,number:i,condition:d})]}):Object(n.jsx)(K,{})})),ee=c.p+"static/media/MercadoLibre1.2d68274d.jpeg",te=c(26),ce=c.n(te);function ne(){var e=Object(a.useState)(""),t=Object(R.a)(e,2),c=t[0],r=t[1];return Object(n.jsx)("form",{onSubmit:function(e){e.preventDefaukt()},className:ce.a.principal,children:Object(n.jsxs)("div",{className:ce.a.secundario,children:[Object(n.jsx)(P.c,{to:"/",children:Object(n.jsx)("img",{src:ee,alt:"Imagen MercadoLibre",className:ce.a.img})}),Object(n.jsxs)("div",{className:ce.a.buscador,children:[Object(n.jsx)("input",{type:"text",placeholder:"Buscar productos, marcas y  m\xe1s...",value:c,onChange:function(e){r(e.target.value)},className:ce.a.text}),c.length>1?Object(n.jsx)(P.c,{to:"/products/".concat(c,"/1"),children:Object(n.jsx)("button",{id:"boton",className:ce.a.boton,children:"Buscar"})}):Object(n.jsx)("div",{children:Object(n.jsx)("button",{id:"boton",disabled:!c,className:ce.a.boton,children:"Buscar"})})]})]})})}function ae(){return function(e){m.a.get("/api/category/categories").then((function(t){var c;e((c=t.data,{type:b,payload:c}))})).catch((function(e){console.log(e)}))}}function re(e,t){return function(c){m.a.get("/api/category/category?id=".concat(e,"&number=").concat(t)).then((function(e){var t;c((t=e.data,{type:p,payload:t}))})).catch((function(e){console.log(e)}))}}function oe(e,t){return function(c){m.a.get("/api/category/condition_cat?number=".concat(e,"&").concat(t)).then((function(e){var t;c((t=e.data,{type:f,payload:t}))})).catch((function(e){console.log(e)}))}}var ie=c(33),se=c.n(ie);function le(e){var t=e.id,c=e.picture,a=e.name;return Object(n.jsxs)(P.c,{to:"/category/category=".concat(t,"/1"),className:se.a.cardProd,activeClassName:"selected",children:[Object(n.jsx)("img",{src:c,className:se.a.imagen,alt:a}),Object(n.jsx)("p",{className:se.a.text,children:a})]})}function de(e){e.categories,e.getCategories;var t=Object(a.useState)([]),c=Object(R.a)(t,2),r=c[0],o=c[1];return Object(a.useEffect)((function(){try{m.a.get("/api/category/categories").then((function(e){o(e.data.data)}))}catch(e){console.log(e)}}),[]),r&&r.length>0?Object(n.jsx)("div",{className:se.a.cartas,children:r.map((function(e){return Object(n.jsx)(le,{id:e.id,name:e.name,picture:e.picture},e.id)}))}):Object(n.jsx)("div",{children:Object(n.jsx)(K,{})})}Object(C.b)((function(e){return{categories:e.categories}}),(function(e){return Object(s.a)({dispatch:e},Object(N.bindActionCreators)({getCategories:ae},e))}))(de);var ue=c(24),je=c.n(ue),be=c(30),pe=c(27),fe=c.n(pe),Oe=function(e){return function(t){m.a.get("/api/products/seller?id=".concat(e)).then((function(e){var c;t((c=e.data,{type:h,payload:c}))})).catch((function(e){console.log(e)}))}},he=c(35),ge=c.n(he),me=c(118);c(96);var xe=Object(C.b)((function(e){return{review:e.review.data}}),(function(e){return Object(s.a)({dispatch:e},Object(N.bindActionCreators)({getRatingProductRequest:y},e))}))((function(e){var t=e.valor,c=e.review,r=e.getRatingProductRequest;return Object(a.useEffect)((function(){(function(){var e=Object(be.a)(je.a.mark((function e(){return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}})()()}),[t]),c?Object(n.jsxs)("div",{style:{display:"grid",justifyContent:"center",textAlign:"center"},children:[Object(n.jsx)(me.a,{name:"read-only",value:c.rating_average,readOnly:!0}),Object(n.jsxs)("span",{style:{color:"gray"},children:[c.paging.total," opiniones"]})]}):Object(n.jsx)("div",{children:Object(n.jsx)(me.a,{name:"read-only",value:0,readOnly:!0})})})),ve=Object(C.b)((function(e){return{seller:e.seller.data}}),(function(e){return Object(s.a)({dispatch:e},Object(N.bindActionCreators)({getSellerRequest:Oe},e))}))((function(e){var t=e.product,c=e.seller,r=e.getSellerRequest;return Object(a.useEffect)((function(){(function(){var e=Object(be.a)(je.a.mark((function e(){return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r(t.seller_id);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}})()()}),[t.seller_id,r]),Object(n.jsx)("div",{className:ge.a.detail,children:Object(n.jsxs)("div",{className:ge.a.detContenido,children:[Object(n.jsxs)("div",{className:ge.a.detEncabezado,children:["new"===t.condition?Object(n.jsx)("label",{children:"Nuevo"}):Object(n.jsx)("label",{children:"Usado"}),Object(n.jsxs)("label",{children:[" | ",t.sold_quantity," vendidos"]})]}),Object(n.jsx)("h2",{style:{marginBlockEnd:"0"},children:t.title}),Object(n.jsx)(xe,{valor:t.id}),Object(n.jsxs)("h2",{className:ge.a.precio,children:["$ ",t.price]}),"undefined"!==typeof c?Object(n.jsxs)("h3",{children:[" Vendido por ",c.seller.nickname]}):null,t.available_quantity>0?Object(n.jsx)("h2",{className:ge.a.disponible,children:"Stock Disponible"}):Object(n.jsx)("h2",{children:"Sin Stock"}),t.available_quantity>0?Object(n.jsxs)("h3",{children:[t.available_quantity," unidad/es."]}):null]})})}));var _e=Object(C.b)((function(e){return{product:e.product.data}}),(function(e){return Object(s.a)({dispatch:e},Object(N.bindActionCreators)({getProductRequest:_},e))}))((function(e){var t=e.id,c=e.getProductRequest,r=e.product,o=Object(a.useState)(""),i=Object(R.a)(o,2),s=i[0],l=i[1];return Object(a.useEffect)((function(){(function(){var e=Object(be.a)(je.a.mark((function e(){return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}})()()}),[t]),r?Object(n.jsx)("div",{className:fe.a.contPrincipal,children:Object(n.jsxs)("div",{className:fe.a.contenedor,children:[Object(n.jsxs)("div",{className:fe.a.segContenedor,children:[Object(n.jsx)("div",{className:fe.a.imagenes,children:r.pictures.map((function(e,t){return Object(n.jsx)("img",{onMouseOverCapture:function(){return l(e.url)},className:fe.a.imagen,src:e.url,alt:"Imagen"},"img".concat(t))}))}),Object(n.jsx)("figure",{className:fe.a.contImgGde,children:Object(n.jsx)("img",{src:s||r.pictures[0].url,alt:"Imagen",className:fe.a.imgGrande})})]}),Object(n.jsx)(ve,{product:r})]})}):Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"El producto no existe"})})}));function ye(e){var t=e.cant,c=e.search,r=e.condition,o=e.txt,i=Object(a.useState)(""),l=Object(R.a)(i,2),d=l[0],u=l[1],j=Object(I.a)({count:d}).items;return Object(a.useEffect)((function(){u(t<=1e3?parseInt(t/30):33)}),[t]),r?Object(n.jsx)("nav",{className:G.a.principal,children:Object(n.jsx)("ul",{className:G.a.ul,children:j.map((function(e,t){var c=e.page,a=e.type,i=e.selected,l=Object(B.a)(e,["page","type","selected"]),d=null;return d="start-ellipsis"===a||"end-ellipsis"===a?"\u2026":"page"===a?Object(n.jsx)(P.c,{to:"/".concat(o,"/filter=").concat(r,"/").concat(c),children:Object(n.jsx)("button",Object(s.a)(Object(s.a)({type:"button",style:{fontWeight:i?"bold":void 0}},l),{},{children:c}))}):Object(n.jsx)(P.c,{to:"/".concat(o,"/filter=").concat(r,"/").concat(c),children:Object(n.jsx)("button",Object(s.a)(Object(s.a)({type:"button"},l),{},{children:a}))}),Object(n.jsx)("li",{children:d},t)}))})}):Object(n.jsx)("nav",{className:G.a.principal,children:Object(n.jsx)("ul",{className:G.a.ul,children:j.map((function(e,t){var a=e.page,r=e.type,i=e.selected,l=Object(B.a)(e,["page","type","selected"]),d=null;return d="start-ellipsis"===r||"end-ellipsis"===r?"\u2026":"page"===r?Object(n.jsx)(P.c,{to:"/".concat(o,"/condition=").concat(c,"/").concat(a),children:Object(n.jsx)("button",Object(s.a)(Object(s.a)({type:"button",style:{fontWeight:i?"bold":void 0}},l),{},{children:a}))}):Object(n.jsx)(P.c,{to:"/".concat(o,"/condition=").concat(c,"/").concat(a),children:Object(n.jsx)("button",Object(s.a)(Object(s.a)({type:"button"},l),{},{children:r}))}),Object(n.jsx)("li",{children:d},t)}))})})}function Ce(e){var t=e.id,c=e.name,r=e.type,o=e.filter,i=e.filters,s=e.results,l=(e.search,Object(a.useState)("")),d=Object(R.a)(l,2),u=d[0],j=d[1];return Object(a.useEffect)((function(){!function(){if(i.length>0){var e=i.map((function(e,t){return 0===t?"".concat(e.id,"=").concat(e.values[0].id):"&".concat(e.id,"=").concat(e.values[0].id)}));j(e.join("").replace(",",""))}}()}),[i.values]),u?Object(n.jsxs)(P.b,{to:"/".concat(r,"/filter=").concat(u,"&").concat(o,"=").concat(t,"/1"),className:D.a.contenedor,children:[Object(n.jsx)("label",{className:D.a.nombre,children:c}),Object(n.jsxs)("label",{style:{color:"gray"},children:[" (",s,")"]})]},t):Object(n.jsxs)(P.b,{to:"/".concat(r,"/filter=").concat(o,"=").concat(t,"/1"),className:D.a.contenedor,children:[Object(n.jsx)("label",{className:D.a.nombre,children:c}),Object(n.jsxs)("label",{style:{color:"gray"},children:[" (",s,")"]})]},t)}function Ne(e){var t=e.products,c=e.type,a=e.filterValues,r=t.query,o=t.filters;return Object(n.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(n.jsx)("h3",{children:a.name}),a.values.map((function(e){return Object(n.jsx)(Ce,{name:e.name,id:e.id,results:e.results,filter:a.id,type:c,search:r,filters:o},e.id)}))]})}function Pe(e){var t=e.txt,c=(e.search,e.filter,e.products),a=Object(F.e)(),r=c.filters,o=c.available_filters;function i(e){for(var c=[],n=0;n<r.length;n++)0===c.length&&r[n].id!==e.target.value?c.push("".concat(r[n].id,"=").concat(r[n].values[0].id.replace(",",""))):r[n].id!==e.target.value&&c.push("&".concat(r[n].id,"=").concat(r[n].values[0].id.replace(",","")));a.push("/".concat(t,"/filter=").concat(c,"/1"))}return Object(n.jsxs)("div",{className:V.a.Contenedor,children:[1===r.length?Object(n.jsxs)("div",{children:[Object(n.jsxs)("span",{children:[r[0].name,": "]}),Object(n.jsx)("span",{children:r[0].values[0].name})]},"".concat(r[0].id,0)):r.map((function(e,t){return Object(n.jsxs)("div",{className:V.a.filter,children:[Object(n.jsxs)("div",{children:[Object(n.jsxs)("span",{children:[e.name,": "]}),Object(n.jsx)("span",{children:e.values[0].name})]}),Object(n.jsx)("button",{onClick:i,value:e.id,className:V.a.filterBoton,children:" X "})]},"".concat(e.id).concat(t))})),o.map((function(e,a){return Object(n.jsx)(Ne,{filterValues:e,type:t,products:c})}))]})}function we(e){var t=e.products,c=e.txt,r=e.condition,o=e.query,i=Object(a.useState)([{name:"M\xe1s relevantes",id:"relevant"},{name:"Menor Precio",id:"price_asc"},{name:"Mayor Precio",id:"price_desc"}]),s=Object(R.a)(i,1)[0],l=Object(a.useState)(t.sort),d=Object(R.a)(l,1)[0],u=Object(F.e)();return Object(n.jsx)("div",{className:Y.a.contenedor,children:Object(n.jsx)("select",{defaultValue:d.name,onChange:function(e){if(e.preventDefault(),r){var t=-1===r.split("&").findIndex((function(e){return"sort"===e.slice(0,4)}))?"".concat(r,"&sort=").concat(e.target.value):r.split("&").map((function(t){return"sort"===t.slice(0,4)?"sort=".concat(e.target.value):t})).join("&");return u.push("/".concat(c,"/filter=").concat(t,"/1"))}return u.push("/".concat(c,"/filter=category=").concat(o,"&sort=").concat(e.target.value,"/1"))},children:s.map((function(e){return Object(n.jsx)("option",{value:e.id,children:e.name},"".concat(e.id))}))})})}var Ee=Object(C.b)((function(e){return{products:e.products.data,paging:e.products.data,filter:e.products.data,categories:e.products.data}}),(function(e){return Object(s.a)({dispatch:e},Object(N.bindActionCreators)({getCategoryRequest:re,getByCatConditionRequest:oe},e))}))((function(e){var t=e.search,c=e.getCategoryRequest,r=e.getByCatConditionRequest,o=e.numero,i=void 0===o?0:o,s=e.products,l=(e.paging,e.order),d=e.filter,u=e.condition,j=e.categories;return Object(a.useEffect)((function(){if(u)try{r(i,u)}catch(e){console.log(e)}}),[r,i,u,t]),Object(a.useEffect)((function(){if(!u)try{c(t,i)}catch(e){console.log(e)}}),[c,i,t]),s&&s.results.length>0?Object(n.jsxs)("div",{className:S.a.contenedor,children:[Object(n.jsx)(we,{condition:u,products:s,txt:"category",query:t}),Object(n.jsx)("div",{className:S.a.ContenedorPrincipal,children:Object(n.jsxs)("div",{className:S.a.secundario,children:[Object(n.jsx)(Pe,{txt:"category",products:s,filters:j.available_filters,filter:d.available_sorts,search:t,price:l},j.available_filters.id),Object(n.jsx)("div",{className:S.a.ContenedorCartasPag,children:Object(n.jsx)("div",{className:S.a.cartas,children:s.results.map((function(e){return Object(n.jsx)(q,{id:e.id,title:e.title,price:e.price,currency_id:e.currency_id,quantity:e.available_quantity,image:e.thumbnail,condition:e.condition},e.id)}))})})]})}),Object(n.jsx)(ye,{txt:"category",search:t,cant:s.paging.total,number:i,condition:u})]}):Object(n.jsx)(K,{})}));var qe=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(P.a,{children:[Object(n.jsx)(F.a,{path:"/",component:ne}),Object(n.jsx)(F.a,{exact:!0,path:"/",component:de}),Object(n.jsx)(F.a,{exact:!0,path:"/products/:busqueda/:numero",render:function(e){var t=e.match;return Object(n.jsx)(Q,{search:t.params.busqueda,numero:t.params.numero})}}),Object(n.jsx)(F.a,{exact:!0,path:"/products/:busqueda/order=:order/:numero",render:function(e){var t=e.match;return Object(n.jsx)(Q,{search:t.params.busqueda,order:t.params.order,numero:t.params.numero})}}),Object(n.jsx)(F.a,{exact:!0,path:"/products/:busqueda/filter=:condition/:numero",render:function(e){var t=e.match;return Object(n.jsx)(Q,{search:t.params.busqueda,condition:t.params.condition,numero:t.params.numero})}}),Object(n.jsx)(F.a,{exact:!0,path:"/product/:title",render:function(e){var t=e.match;return Object(n.jsx)(_e,{id:t.params.title})}}),Object(n.jsx)(F.a,{exact:!0,path:"/category/category=:category/:numero",render:function(e){var t=e.match;return Object(n.jsx)(Ee,{search:t.params.category,numero:t.params.numero})}}),Object(n.jsx)(F.a,{exact:!0,path:"/category/filter=:condition/:numero",render:function(e){var t=e.match;return Object(n.jsx)(Ee,{condition:t.params.condition,numero:t.params.numero})}})]})})},ke=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,120)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;c(e),n(e),a(e),r(e),o(e)}))},Se=c(60),Be={categories:[],products:[],product:[],review:{},seller:{}},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case l:case d:case u:return Object(s.a)(Object(s.a)({},e),{},{products:t.payload});case b:return Object(s.a)(Object(s.a)({},e),{},{categories:t.payload});case j:return Object(s.a)(Object(s.a)({},e),{},{product:t.payload});case p:case f:return Object(s.a)(Object(s.a)({},e),{},{products:t.payload});case O:return Object(s.a)(Object(s.a)({},e),{},{review:t.payload});case h:return Object(s.a)(Object(s.a)({},e),{},{seller:t.payload});default:return e}},Ie=c(61),Te=Object(N.createStore)(Re,Object(Se.composeWithDevTools)(Object(N.applyMiddleware)(Ie.a))),Ge=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Le(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var c=e.installing;null!=c&&(c.onstatechange=function(){"installed"===c.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(C.a,{store:Te,children:Object(n.jsx)(qe,{})})}),document.getElementById("root")),ke(),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Ge?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(c){var n=c.headers.get("content-type");404===c.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Le(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Le(t,e)}))}}()}},[[97,1,2]]]);
//# sourceMappingURL=main.5101040c.chunk.js.map