(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{29:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(8),o=n.n(r),i=(n(29),n(14)),s=n(4),l=n(24),u=n.n(l),j=n(13),b=n.n(j),h=n(10),m=n.n(h),d=n(1),g=function(e){var t=e.onSubmit,n=Object(c.useState)(""),a=Object(s.a)(n,2),r=a[0],o=a[1];return Object(d.jsx)("header",{className:"Searchbar",children:Object(d.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),t(r)},children:[Object(d.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(d.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(d.jsx)("input",{value:r,onChange:function(e){o(e.currentTarget.value)},className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},f=function(e){var t=e.src,n=e.onClick;return Object(d.jsx)("li",{className:"ImageGalleryItem",onClick:n,children:Object(d.jsx)("img",{src:t,alt:"\u0432\u0441\u0435 \u0441\u043b\u043e\u043c\u0430\u043b\u043e\u0441\u044c",className:"ImageGalleryItem-image"})})},O=function(e){var t=e.onClose,n=e.bigUrl;Object(c.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]);return o.a.createPortal(Object(d.jsx)("div",{className:"Overlay",onClick:function(e){e.target===e.currentTarget&&t()},children:Object(d.jsx)("div",{className:"Modal",children:Object(d.jsx)("img",{src:n,alt:""})})}),document.getElementById("ModalRoot"))},p=n(2),v=n.n(p),x=function(e){var t=e.imgs,n=Object(c.useState)(!1),a=Object(s.a)(n,2),r=a[0],o=a[1],i=Object(c.useState)(""),l=Object(s.a)(i,2),u=l[0],j=l[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(d.jsx)(f,{src:e.previewURL,onClick:function(){return function(e){j(e),o(!0)}(e.largeImageURL)}},e.id)}))}),r?Object(d.jsx)(O,{onClose:function(){return o(!1)},bigUrl:u}):null]})};x.propsTypes={imgs:v.a.arrayOf(v.a.object)};var y=function(e){return Object(d.jsx)("button",{className:"Button",onClick:e.onClick,children:"Load More"})},S=(n(83),"24139872-fead068626907a7ba14cf06e1");m.a.defaults.baseURL="https://pixabay.com/api/";var k=function(e){var t=Object(c.useState)(!1),n=Object(s.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)([]),l=Object(s.a)(o,2),j=l[0],h=l[1],f=Object(c.useRef)(1),O=Object(c.useRef)("");return Object(c.useEffect)((function(){0!==j.length&&1!==f.current&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),[j]),Object(d.jsxs)("div",{children:[Object(d.jsx)(g,{onSubmit:function(e){r(!0),f.current=1,O.current=e;var t=b.a.stringify({key:S,q:e,pege:1,per_page:12,image_type:"photo",orientation:"horizontal"});m.a.get("?"+t).then((function(e){console.log("response.data.imgs",e.data.hits),h(e.data.hits),r(!1)}))}}),Object(d.jsx)(x,{imgs:j}),Object(d.jsxs)("div",{className:"Center",children:[a?Object(d.jsx)(u.a,{type:"BallTriangle",color:"#00BFFF",height:25,width:25}):null,0===j.length||a?null:Object(d.jsx)(y,{onClick:function(){r(!0),f.current+=1;var e=b.a.stringify({key:S,q:O.current,page:f.current,per_page:12,image_type:"photo",orientation:"horizontal"});m.a.get("?"+e).then((function(e){r(!1),h((function(t){return[].concat(Object(i.a)(t),Object(i.a)(e.data.hits))}))}))}})]})]})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root")),C()}},[[84,1,2]]]);
//# sourceMappingURL=main.7c86910d.chunk.js.map