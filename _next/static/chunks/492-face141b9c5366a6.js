"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{9944:function(e,i,t){var s=t(1163);let n=()=>{let e=(0,s.useRouter)();switch(e.pathname){case"/mars":return"Main Mars";case"/mars/about/jayWeb":case"/earth/about/jayWeb":return"About / JayWeb";case"/mars/about/developer":case"/earth/about/developer":return"About / developer";case"/mars/community":case"/earth/community":return"Community";case"/earth":return"Main Earth";default:return"Url is wrong"}};i.Z=n},7815:function(e,i,t){t.d(i,{Z:function(){return w}});var s=t(5893),n=t(1857),a=t.n(n),o=t(1664),c=t.n(o),l=t(1163),r=t(461),x=t(7294),b=t(5675),p=t.n(b),d=t(1694);let f=e=>{let{url:i,isCollapsed:t,title:n}=e,{prefix:o}=(0,x.useContext)(d.ZP);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"jsx-c0a8eaaa251ceed7 "+((!1==t?"logo-Itself-deactive":"logo-Itself-active")||""),children:(0,s.jsx)(p(),{alt:"propImg",loader:e=>{let{src:i}=e;return"".concat(o).concat(i)},src:i,width:24,height:24})}),(0,s.jsx)(a(),{id:"c0a8eaaa251ceed7",children:".logo-Itself-deactive.jsx-c0a8eaaa251ceed7{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin-right:20px}.logo-Itself-active.jsx-c0a8eaaa251ceed7{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;opacity:.8}.logo-Itself-active.jsx-c0a8eaaa251ceed7:hover{}"})]})},m=[],u="collapse",k="",y=()=>{let e=(0,l.useRouter)(),i=e.pathname.split("/",3),[t,n,o]=(0,r.Z)([u]),[b,p]=(0,x.useState)(!0),d=e=>{k="",e.preventDefault(),o(u)};(0,x.useEffect)(()=>{t[u]&&window.addEventListener("unload",d)},[t]);let y=()=>{var e;let i=(null==t?void 0:null===(e=t.collapse)||void 0===e?void 0:e.toLowerCase())==="true";"false"==(k=(i=!i).toString())?o(u):n(u,k)},w=()=>{p(!b)};return"mars"==i[1]&&(m=[{link:"Main",path:"/mars",imgUrl:"/assets/main-page.png"},{link:"Community",path:"/mars/community",imgUrl:"/assets/community.png"},{link:"About",path:"/mars/about/jayWeb",imgUrl:"/assets/about.png",subMenu:[{link:"JayWeb",path:"/mars/about/jayWeb",imgUrl:"/assets/browser.png"},{link:"Developer",path:"/mars/about/developer",imgUrl:"/assets/developer.png"}]}]),"earth"==i[1]&&(m=[{link:"Main",path:"/earth",imgUrl:"/assets/main-page.png"},{link:"Community",path:"/earth/community",imgUrl:"/assets/community.png"},{link:"About",path:"/earth/about/jayWeb",imgUrl:"/assets/about.png",subMenu:[{link:"JayWeb",path:"/earth/about/jayWeb",imgUrl:"/assets/browser.png"},{link:"Developer",path:"/earth/about/developer",imgUrl:"/assets/developer.png"}]}]),(0,s.jsxs)("nav",{className:"jsx-7e8349c97cf992f6 "+((t[u]?"navbar-close navBar":"navbar-open navBar")||""),children:[(0,s.jsxs)("div",{className:"jsx-7e8349c97cf992f6",children:[(0,s.jsxs)("div",{className:"jsx-7e8349c97cf992f6 "+((t[u]?"btn-slider-close":"btn-slider-open")||""),children:[(0,s.jsx)(s.Fragment,{children:"\xa0"}),(0,s.jsx)("div",{onClick:y,className:"jsx-7e8349c97cf992f6 arrow",children:(0,s.jsx)(f,{url:t[u]?"/assets/right-arrow.png":"/assets/left-arrow.png"})})]}),m.map((n,a)=>{var o,l;return(0,s.jsxs)("div",{className:"jsx-7e8349c97cf992f6 all-wrap",children:[(0,s.jsx)("div",{className:"jsx-7e8349c97cf992f6 all-menu-elements",children:n.subMenu?(0,s.jsxs)("div",{className:"jsx-7e8349c97cf992f6 flex-column-wrap",children:[(0,s.jsx)("div",{onClick:w,className:"jsx-7e8349c97cf992f6 "+((t[u]?"hover-coord":"")||""),children:(0,s.jsxs)("a",{className:"jsx-7e8349c97cf992f6 "+(t[u],(i[2]==n.path.split("/",3)[2]?"selected-menu":"menu-element")||""),children:[(0,s.jsx)(f,{url:n.imgUrl}),(0,s.jsxs)("span",{className:"jsx-7e8349c97cf992f6 "+((t[u]?"txt-close txt":"txt-open txt")||""),children:[(0,s.jsx)("div",{className:"jsx-7e8349c97cf992f6",children:n.link}),(0,s.jsx)("div",{className:"jsx-7e8349c97cf992f6",children:(0,s.jsx)("div",{className:"jsx-7e8349c97cf992f6 sub-menu",children:n.subMenu?(0,s.jsx)("div",{className:"jsx-7e8349c97cf992f6 more-img",children:(0,s.jsx)(f,{url:!1==b?"/assets/top-arrow.png":"/assets/bottom-arrow.png"})}):""})})]})]})}),(0,s.jsx)("div",{className:"jsx-7e8349c97cf992f6 hover-box",children:null==n?void 0:null===(o=n.subMenu)||void 0===o?void 0:o.map((i,t)=>(0,s.jsx)("div",{className:"jsx-7e8349c97cf992f6",children:(0,s.jsx)(c(),{href:i.path,legacyBehavior:!0,children:(0,s.jsx)("a",{className:"jsx-7e8349c97cf992f6 "+((e.pathname==i.path?"selected-submenu-element":"submenu-element")||""),children:i.link})})},t))})]}):(0,s.jsx)(c(),{href:n.path,legacyBehavior:!0,children:(0,s.jsxs)("a",{className:"jsx-7e8349c97cf992f6 "+((e.pathname==n.path?"selected-menu":"menu-element")||""),children:[(0,s.jsx)(f,{url:n.imgUrl}),(0,s.jsx)("span",{className:"jsx-7e8349c97cf992f6 "+((t[u]?"txt-close txt":"txt-open txt")||""),children:(0,s.jsx)("div",{className:"jsx-7e8349c97cf992f6",children:n.link})})]})},a)}),(0,s.jsx)(s.Fragment,{children:!0==b?(0,s.jsx)(s.Fragment,{children:null==n?void 0:null===(l=n.subMenu)||void 0===l?void 0:l.map((i,n)=>(0,s.jsx)(c(),{href:i.path,legacyBehavior:!0,children:(0,s.jsxs)("a",{className:"jsx-7e8349c97cf992f6 "+((t[u]?"sub-remove":e.pathname==i.path?"selected-submenu-element":"submenu-element")||""),children:[(0,s.jsx)("div",{className:"jsx-7e8349c97cf992f6 "+((t[u]?"submenu-icon-folded submenu-icon":"submenu-icon-unfolded submenu-icon")||""),children:(0,s.jsx)(f,{url:i.imgUrl})}),(0,s.jsx)("span",{className:"jsx-7e8349c97cf992f6 "+((t[u]?"sub-txt-close sub-txt":"sub-txt-open sub-txt")||""),children:i.link})]})},n))}):""})]},a)})]}),(0,s.jsx)(a(),{id:"7e8349c97cf992f6",children:".all-wrap.jsx-7e8349c97cf992f6{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.hover-submenu.jsx-7e8349c97cf992f6{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;margin-right:-50px;background-color:#061426;height:100px}.hover-coord.jsx-7e8349c97cf992f6{display:inline-block}.hover-coord.jsx-7e8349c97cf992f6:hover+div.hover-box.jsx-7e8349c97cf992f6{visibility:visible}.hover-box.jsx-7e8349c97cf992f6:hover{visibility:visible}.hover-box.jsx-7e8349c97cf992f6{visibility:hidden;position:absolute;width:130px;padding:3px;left:-webkit-calc(100% + 6px);left:-moz-calc(100% + 6px);left:calc(100% + 6px);top:10px;-webkit-transition:.1s;-moz-transition:.1s;-o-transition:.1s;transition:.1s;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;background:#04436d;opacity:.8}.more-img.jsx-7e8349c97cf992f6{}.more-img.jsx-7e8349c97cf992f6:hover{cursor:pointer}.flex-column-wrap.jsx-7e8349c97cf992f6{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-moz-box-orient:horizontal;-moz-box-direction:normal;-ms-flex-direction:row;flex-direction:row;position:relative;gap:20px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.navBar.jsx-7e8349c97cf992f6{background:-webkit-linear-gradient(right,#0c203a,#071527);background:-moz-linear-gradient(right,#0c203a,#071527);background:-o-linear-gradient(right,#0c203a,#071527);background:linear-gradient(to left,#0c203a,#071527);-webkit-transition-duration:.8s;-moz-transition-duration:.8s;-o-transition-duration:.8s;transition-duration:.8s;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.navbar-open.jsx-7e8349c97cf992f6{-webkit-transition:.8s;-moz-transition:.8s;-o-transition:.8s;transition:.8s}.navbar-close.jsx-7e8349c97cf992f6{-webkit-transition:.8s;-moz-transition:.8s;-o-transition:.8s;transition:.8s}.btn-slider-open.jsx-7e8349c97cf992f6{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-top:10px;margin-right:-23px;opacity:1}.btn-slider-close.jsx-7e8349c97cf992f6{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;margin-top:10px;margin-right:-23px;opacity:1}.txt.jsx-7e8349c97cf992f6{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;white-space:nowrap;-webkit-transition:.3s;-moz-transition:.3s;-o-transition:.3s;transition:.3s;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.txt-close.jsx-7e8349c97cf992f6{opacity:0;width:0;height:0;visibility:hidden;margin-left:-15px}.selected-menu.jsx-7e8349c97cf992f6 .txt-open.jsx-7e8349c97cf992f6{opacity:1}.txt-open.jsx-7e8349c97cf992f6{width:100px;visibility:visible;margin-left:10px;opacity:.7}.sub-wrap.jsx-7e8349c97cf992f6{margin-top:-10px}.submenu-icon.jsx-7e8349c97cf992f6{-webkit-transition:.4s;-moz-transition:.4s;-o-transition:.4s;transition:.4s}.submenu-icon-folded.jsx-7e8349c97cf992f6{width:0;height:0}.submenu-icon-unfolded.jsx-7e8349c97cf992f6{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;height:100%}.sub-remove.jsx-7e8349c97cf992f6{visibility:hidden;width:0px;height:0px}.sub-txt.jsx-7e8349c97cf992f6{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;white-space:nowrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:.4s;-moz-transition:.4s;-o-transition:.4s;transition:.4s;color:white;opacity:.7}.sub-txt-close.jsx-7e8349c97cf992f6{opacity:0;width:0;height:0;visibility:hidden;margin-left:-15px;color:white}.sub-txt-open.jsx-7e8349c97cf992f6{visibility:visible;width:100px;opacity:1;color:white}@-webkit-keyframes subTxt{0%{opacity:0}100%{opacity:1}}@-moz-keyframes subTxt{0%{opacity:0}100%{opacity:1}}@-o-keyframes subTxt{0%{opacity:0}100%{opacity:1}}@keyframes subTxt{0%{opacity:0}100%{opacity:1}}.arrow.jsx-7e8349c97cf992f6{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:30px;height:30px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background-color:#003558;-webkit-border-radius:7px;-moz-border-radius:7px;border-radius:7px;margin-right:10px;opacity:.8}.arrow.jsx-7e8349c97cf992f6:hover{cursor:pointer;opacity:1}.all-menu-elements.jsx-7e8349c97cf992f6{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%}.sub-link.jsx-7e8349c97cf992f6{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;width:100%}.sub-link-wrap.jsx-7e8349c97cf992f6{width:100%}.selected-menu.jsx-7e8349c97cf992f6{margin:10px;height:40px;padding-left:15px;padding-right:15px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:15px;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;color:white;opacity:1;background-color:#06426b}.menu-element.jsx-7e8349c97cf992f6{margin:10px;height:40px;padding-left:15px;padding-right:15px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:15px;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;color:white;opacity:1;-webkit-transition:.25s;-moz-transition:.25s;-o-transition:.25s;transition:.25s;cursor:pointer}a.jsx-7e8349c97cf992f6{-webkit-text-decoration-line:none;-moz-text-decoration-line:none;text-decoration-line:none}.menu-element.jsx-7e8349c97cf992f6:hover,.submenu-element.jsx-7e8349c97cf992f6:hover{background-color:#03314f;opacity:1}.selected-menu.jsx-7e8349c97cf992f6:hover{cursor:pointer}.selected-submenu-element.jsx-7e8349c97cf992f6{margin:3px;height:40px;padding-left:15px;padding-right:15px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;color:white;opacity:1;background-color:#03314f}.submenu-element.jsx-7e8349c97cf992f6{margin:3px;height:40px;padding-left:15px;padding-right:15px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:.2s;-moz-transition:.2s;-o-transition:.2s;transition:.2s;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;color:white;opacity:.7}"})]})};var w=y}}]);