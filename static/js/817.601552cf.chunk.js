(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[817],{9817:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return K}});var i,o,a,r,s,l,c,d,m,f,u=n(2791),g=n(9434),p=n(6546),x=function(e){return e.modal.status},h=n(1413),b=function(e){return e.contacts.isLoading},k=function(e){return e.filters.value},w=function(e){return e.contacts.items},y=n(3634),v=n(168),C=n(225),N=C.Z.div(i||(i=(0,v.Z)(["\n  display: flex;\n  gap: 15px;\n  align-items: baseline;\n"]))),S=C.Z.p(o||(o=(0,v.Z)(["\n  line-height: 0;\n"]))),j=C.Z.button(a||(a=(0,v.Z)(["\n  background-color: #fff;\n  color: #000;\n  padding: 2px 5px 2px 5px;\n  height: 25px;\n  border-radius: 4px;\n  border: 1px solid #000;\n  cursor: pointer;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: background-color 0.2s ease-in-out;\n\n  &:hover {\n    background-color: #000;\n    color: #fff;\n  }\n"]))),L=n(3329),z=function(e){var t=e.id,n=e.name,i=e.number,o=(0,g.I0)();return(0,L.jsxs)(N,{children:[(0,L.jsx)(S,{children:n}),(0,L.jsx)(S,{children:i}),(0,L.jsx)(j,{onClick:function(){o((0,y.GK)(t))},children:"Delete"})]},t)},T=n(9439),M=n(1429),X=C.Z.div(r||(r=(0,v.Z)(["\n  display: flex;\n  gap: 5px;\n  line-height: 0;\n"]))),Z=n(2862),I=function(){var e=(0,g.v9)(k),t=(0,u.useState)(""),n=(0,T.Z)(t,2),i=n[0],o=n[1],a=(0,g.I0)();return(0,L.jsx)(X,{children:(0,L.jsx)(Z.Z,{label:"Find contacts by name",variant:"outlined",name:"text",value:i||e,onChange:function(e){var t=e.currentTarget.value;o(t),a((0,M.b)(t))}})})},A=C.Z.div(s||(s=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 0px;\n  margin-top: 10px;\n"]))),D=function(){var e=(0,g.v9)(w),t=(0,g.v9)(k).toLowerCase(),n=e.filter((function(e){return e.name.toLowerCase().includes(t)}));return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("h2",{children:"Contacts"}),(0,L.jsx)(I,{}),n.length>0&&(0,L.jsx)(A,{children:n.map((function(e){return(0,L.jsx)(z,(0,h.Z)({},e),e.id)}))})]})},E=n(3742),B=n(4164),H=C.Z.div(l||(l=(0,v.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vw;\n  background-color: rgba(0, 0, 0, 0.5);\n"]))),F=C.Z.div(c||(c=(0,v.Z)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 12px;\n  background-color: #fff;\n  border-radius: 4px;\n  box-shadow: 0px 2px 1px, -1px, rgba(0, 0, 0, 0.2), 0px 1px 1px, 0px,\n    rgba(0, 0, 0, 0.14), 0px 1px 3px, 0px, rgba(0, 0, 0, 0.12);\n\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: center;\n"]))),W=document.querySelector("#modal-root"),P=function(e){var t=e.children,n=(0,g.I0)(),i=function(e){"Escape"===e.code&&n((0,p.p)(!1))};return(0,u.useEffect)((function(){return window.addEventListener("keydown",i),function(){window.removeEventListener("keydown",i)}}),[]),(0,B.createPortal)((0,L.jsx)(H,{onClick:function(e){e.currentTarget===e.target&&n((0,p.p)(!1))},children:(0,L.jsx)(F,{className:"modalContent",children:t})}),W)},U=C.Z.form(d||(d=(0,v.Z)(["\n  width: 250px;\n  align-items: flex-end;\n  border: solid 1px black;\n  display: flex;\n  flex-direction: column;\n  gap: 0px;\n  padding: 10px;\n  line-height: 0.5;\n"]))),_=C.Z.label(m||(m=(0,v.Z)(["\n  display: flex;\n  gap: 5px;\n  line-height: 0;\n"]))),V=C.Z.button(f||(f=(0,v.Z)(["\n  background-color: #2ae575;\n  color: #000;\n  padding: 2px 5px 2px 5px;\n  height: 30px;\n  border-radius: 5px;\n  border: 1px solid #000;\n  cursor: pointer;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: background-color 0.2s ease-in-out;\n\n  &:hover {\n    background-color: #000;\n    color: #fff;\n  }\n"]))),Y=n(1686),O=n.n(Y),q=function(){var e=(0,u.useState)(""),t=(0,T.Z)(e,2),n=t[0],i=t[1],o=(0,u.useState)(""),a=(0,T.Z)(o,2),r=a[0],s=a[1],l=(0,g.I0)(),c=(0,g.v9)(w);return(0,L.jsx)(L.Fragment,{children:(0,L.jsxs)(U,{autoComplete:"off",onSubmit:function(e){e.preventDefault(),c.some((function(e){var t;return(null===(t=e.name)||void 0===t?void 0:t.toLowerCase())===n.toLowerCase()}))?O().Notify.warning("".concat(n," is already in contacts")):(l((0,y.uK)({name:n,number:r})),i(""),s(""),l((0,p.p)(!1)))},children:[(0,L.jsxs)(_,{htmlFor:"name",children:[(0,L.jsx)("p",{children:"Name:"}),(0,L.jsx)("input",{type:"text",id:"name",name:"name",value:n,onChange:function(e){i(e.currentTarget.value)},required:!0})]}),(0,L.jsx)("br",{}),(0,L.jsxs)(_,{htmlFor:"number",children:[(0,L.jsx)("p",{children:"Number:"}),(0,L.jsx)("input",{type:"tel",id:"number",name:"number",placeholder:"   + XX (YYY) XXX XX XX",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",value:r,onChange:function(e){s(e.currentTarget.value)},required:!0})]}),(0,L.jsx)("br",{}),(0,L.jsx)(V,{type:"submit",children:"Add Contact"})]})})},G=n(3161),K=function(){var e=(0,g.v9)(x),t=(0,g.I0)(),n=function(){t((0,p.p)(!e))},i=(0,g.v9)(b);return(0,u.useEffect)((function(){i?E.Loading.circle("Loading..."):E.Loading.remove()}),[i]),(0,u.useEffect)((function(){t((0,y.yF)())}),[t]),(0,L.jsx)(L.Fragment,{children:(0,L.jsxs)(G.fy,{children:[(0,L.jsx)("h1",{children:"Phonebook"}),(0,L.jsx)(G.bw,{children:(0,L.jsx)(G.zx,{type:"button",onClick:n,children:"Add Contact"})}),e&&(0,L.jsx)(P,{children:(0,L.jsx)(G.nY,{children:(0,L.jsxs)(G.PV,{children:[(0,L.jsx)(G.PZ,{type:"button",onClick:n,children:"Close"}),(0,L.jsx)(q,{})]})})}),(0,L.jsx)(D,{})]})})}},3742:function(e,t,n){var i,o;o="undefined"!==typeof n.g?n.g:"undefined"!==typeof window?window:this,i=function(){return function(e){"use strict";if("undefined"===typeof e&&"undefined"===typeof e.document)return!1;var t,n="Notiflix",i="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",o='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',a={Standard:"Standard",Hourglass:"Hourglass",Circle:"Circle",Arrows:"Arrows",Dots:"Dots",Pulse:"Pulse",Custom:"Custom",Notiflix:"Notiflix"},r={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},s=function(e){return console.error("%c "+n+" Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+i)},l=function(t){return t||(t="head"),null!==e.document[t]||(s('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},c=function(t,n){if(!l("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var i=e.document.createElement("style");i.id=n,i.innerHTML=t(),e.document.head.appendChild(i)}},d=function e(){var t={},n=!1,i=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(n=arguments[0],i++);for(var o=function(i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n&&"[object Object]"===Object.prototype.toString.call(i[o])?t[o]=e(t[o],i[o]):t[o]=i[o])};i<arguments.length;i++)o(arguments[i]);return t},m=function(t){var n=e.document.createElement("div");return n.innerHTML=t,n.textContent||n.innerText||""},f=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'},u=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'},g=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'},p=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'},x=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'},h=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'},b=function(e,t,n){return e||(e="60px"),t||(t="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+t+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'},k=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},w=function(n,i,c,k,w){if(!l("body"))return!1;t||v.Loading.init({});var y=d(!0,t,{});if("object"===typeof i&&!Array.isArray(i)||"object"===typeof c&&!Array.isArray(c)){var C={};"object"===typeof i?C=i:"object"===typeof c&&(C=c),t=d(!0,t,C)}var N="";if("string"===typeof i&&i.length>0&&(N=i),k){var S="";(N=N.length>t.messageMaxLength?m(N).toString().substring(0,t.messageMaxLength)+"...":m(N).toString()).length>0&&(S='<p id="'+t.messageID+'" class="nx-loading-message" style="color:'+t.messageColor+";font-size:"+t.messageFontSize+';">'+N+"</p>"),t.cssAnimation||(t.cssAnimationDuration=0);var j="";if(n===a.Standard)j=f(t.svgSize,t.svgColor);else if(n===a.Hourglass)j=u(t.svgSize,t.svgColor);else if(n===a.Circle)j=g(t.svgSize,t.svgColor);else if(n===a.Arrows)j=p(t.svgSize,t.svgColor);else if(n===a.Dots)j=x(t.svgSize,t.svgColor);else if(n===a.Pulse)j=h(t.svgSize,t.svgColor);else if(n===a.Custom&&null!==t.customSvgCode&&null===t.customSvgUrl)j=t.customSvgCode||"";else if(n===a.Custom&&null!==t.customSvgUrl&&null===t.customSvgCode)j='<img class="nx-custom-loading-icon" width="'+t.svgSize+'" height="'+t.svgSize+'" src="'+t.customSvgUrl+'" alt="Notiflix">';else{if(n===a.Custom&&(null===t.customSvgUrl||null===t.customSvgCode))return s('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;j=b(t.svgSize,"#f8f8f8","#32c682")}var L=parseInt((t.svgSize||"").replace(/[^0-9]/g,"")),z=e.innerWidth,T=L>=z?z-40+"px":L+"px",M='<div style="width:'+T+"; height:"+T+';" class="'+t.className+"-icon"+(N.length>0?" nx-with-message":"")+'">'+j+"</div>",X=e.document.createElement("div");X.id=r.ID,X.className=t.className+(t.cssAnimation?" nx-with-animation":"")+(t.clickToClose?" nx-loading-click-to-close":""),X.style.zIndex=t.zindex,X.style.background=t.backgroundColor,X.style.animationDuration=t.cssAnimationDuration+"ms",X.style.fontFamily='"'+t.fontFamily+'", '+o,X.style.display="flex",X.style.flexWrap="wrap",X.style.flexDirection="column",X.style.alignItems="center",X.style.justifyContent="center",t.rtl&&(X.setAttribute("dir","rtl"),X.classList.add("nx-rtl-on")),X.innerHTML=M+S,e.document.getElementById(X.id)||(e.document.body.appendChild(X),t.clickToClose&&e.document.getElementById(X.id).addEventListener("click",(function(){X.classList.add("nx-remove");var e=setTimeout((function(){null!==X.parentNode&&(X.parentNode.removeChild(X),clearTimeout(e))}),t.cssAnimationDuration)})))}else if(e.document.getElementById(r.ID))var Z=e.document.getElementById(r.ID),I=setTimeout((function(){Z.classList.add("nx-remove");var e=setTimeout((function(){null!==Z.parentNode&&(Z.parentNode.removeChild(Z),clearTimeout(e))}),t.cssAnimationDuration);clearTimeout(I)}),w);t=d(!0,t,y)},y=function(n){"string"!==typeof n&&(n="");var i=e.document.getElementById(r.ID);if(i)if(n.length>0){n=n.length>t.messageMaxLength?m(n).substring(0,t.messageMaxLength)+"...":m(n);var o=i.getElementsByTagName("p")[0];if(o)o.innerHTML=n;else{var a=e.document.createElement("p");a.id=t.messageID,a.className="nx-loading-message nx-loading-message-new",a.style.color=t.messageColor,a.style.fontSize=t.messageFontSize,a.innerHTML=n,i.appendChild(a)}}else s("Where is the new message?")},v={Loading:{init:function(e){t=d(!0,r,e),c(k,"NotiflixLoadingInternalCSS")},merge:function(e){if(!t)return s("You have to initialize the Loading module before call Merge function."),!1;t=d(!0,t,e)},standard:function(e,t){w(a.Standard,e,t,!0,0)},hourglass:function(e,t){w(a.Hourglass,e,t,!0,0)},circle:function(e,t){w(a.Circle,e,t,!0,0)},arrows:function(e,t){w(a.Arrows,e,t,!0,0)},dots:function(e,t){w(a.Dots,e,t,!0,0)},pulse:function(e,t){w(a.Pulse,e,t,!0,0)},custom:function(e,t){w(a.Custom,e,t,!0,0)},notiflix:function(e,t){w(a.Notiflix,e,t,!0,0)},remove:function(e){"number"!==typeof e&&(e=0),w(null,null,null,!1,e)},change:function(e){y(e)}}};return"object"===typeof e.Notiflix?d(!0,e.Notiflix,{Loading:v.Loading}):{Loading:v.Loading}}(o)}.apply(t,[]),void 0===i||(e.exports=i)}}]);
//# sourceMappingURL=817.601552cf.chunk.js.map