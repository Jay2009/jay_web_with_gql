(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(7524)}])},7524:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return R}});var l=a(5893),n=a(1857),s=a.n(n),i=a(5675),o=a.n(i),r=a(8075),c=a(7297),d=a(7283);function x(){let e=(0,c.Z)(["\n  query allIdx {\n    oneYearEco {\n      dollar {\n        localDate\n        candleData\n      }\n      gold {\n        localDate\n        candleData\n      }\n      vix {\n        localDate\n        candleData\n      }\n      usInterestRate {\n        series\n      }\n      recession {\n        start\n      }\n      nasdaq {\n        localDate\n        candleData\n      }\n      usUnemployRate {\n        series\n      }\n    }\n  }\n"]);return x=function(){return e},e}let f=(0,d.Ps)(x());var m=a(7887),b=a(7294),p=a(2390);let u=e=>{let{data:t,isGoBtnClicked:a,maxYaxis:n,title:s,id:i}=e;return(0,l.jsx)(p.Z,{style:void 0!=a&&!0==a?{width:"100%",height:"250px"}:{width:"48%",height:"250px"},option:{title:{text:s,left:"13%",textStyle:{fontSize:20,color:"gray"}},grid:!0==a?{top:"15%",left:"0%",right:"7%",bottom:"15%"}:{top:"15%",left:"15%",right:"0%",bottom:"15%"},xAxis:{type:"time",axisLine:{lineStyle:{width:1}},offset:5,axisLabel:{showMinLabel:!0!=a,align:"right"}},yAxis:{type:"value",max:n,axisLabel:{show:!0!=a}},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},dataZoom:[{type:"inside",start:0,end:100}],series:[{name:s,data:t,showSymbol:!1,type:"line",lineStyle:{width:2,color:"usInterestRate"==i?"#f7f72f":"#EC1B24"},itemStyle:{color:"usInterestRate"==i?"#f7f72f":"#EC1B24"}}]}})},h=e=>{let{candleData:t,maxYaxis:a,title:n,isGoBtnClicked:s,isRefrBtnClicked:i}=e,o={title:{text:n,left:"13%",textStyle:{fontSize:20,color:"gray"}},grid:!0==s?{top:"15%",left:"0%",right:"7%",bottom:"15%"}:{top:"15%",left:"15%",right:"0%",bottom:"15%"},xAxis:{type:"category",data:null==t?void 0:t.localDate,offset:5,axisLabel:{showMinLabel:!0!=s,align:"right"}},yAxis:{type:"value",max:a,axisLabel:{show:!0!=s}},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},dataZoom:[{type:"inside",start:0,end:100}],series:[{type:"candlestick",name:n,data:null==t?void 0:t.candleData,animationDuration:3e3,lineStyle:{width:1.5,color:"#739A7B"},markPoint:{data:[{type:"max",symbol:"pin",symbolSize:22,itemStyle:{color:"#0af702"}},{type:"min",symbol:"pin",symbolSize:22,itemStyle:{color:"#f70202"},symbolRotate:180}],label:{show:!1}}}]};return(0,l.jsx)(p.Z,{style:void 0!=s&&!0==s?{width:"100%",height:"250px"}:{width:"48%",height:"250px"},option:o})};var y=a(1694),g=a(4480);let j=(0,g.cn)({key:"economyStateKey",default:null}),w=(0,g.cn)({key:"riseOrFallStateKey",default:{dollar:null,gold:null,nasdaq:null,vix:null}}),k=e=>{let{title:t}=e,[a,n]=(0,g.FV)(w),{prefix:i}=(0,b.useContext)(y.ZP),[r,c]=(0,b.useState)(!1),[d,x]=(0,b.useState)(!1),f=()=>{switch(c(!0),x(!1),t){case"Dollar":return n({...a,dollar:!0});case"Gold":return n({...a,gold:!0});case"Nasdaq":return n({...a,nasdaq:!0});case"Vix":return n({...a,vix:!0});default:return""}},m=()=>{switch(c(!1),x(!0),t){case"Dollar":return n({...a,dollar:!1});case"Gold":return n({...a,gold:!1});case"Nasdaq":return n({...a,nasdaq:!1});case"Vix":return n({...a,vix:!1});default:return""}};return(0,l.jsxs)("div",{className:"jsx-2bab77649996a55b",children:[(0,l.jsx)("div",{className:"jsx-2bab77649996a55b result-control",children:!1==r&&!1==d?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{style:{position:"absolute"},className:"jsx-2bab77649996a55b",children:(0,l.jsxs)("div",{className:"jsx-2bab77649996a55b control-wrap",children:[(0,l.jsx)("div",{className:"jsx-2bab77649996a55b",children:"6 months later,"}),t," index",(0,l.jsx)("div",{onClick:f,className:"jsx-2bab77649996a55b btn",children:(0,l.jsx)(o(),{alt:"up",loader:e=>{let{src:t}=e;return"".concat(i).concat(t)},src:"/assets/up.png",width:35,height:40})}),(0,l.jsx)("div",{className:"jsx-2bab77649996a55b",children:"or"}),(0,l.jsx)("button",{onClick:m,className:"jsx-2bab77649996a55b btn",children:(0,l.jsx)(o(),{alt:"down",loader:e=>{let{src:t}=e;return"".concat(i).concat(t)},src:"/assets/down.png",width:35,height:40})})]})}),(0,l.jsx)("div",{className:"jsx-2bab77649996a55b question-mark",children:(0,l.jsx)(o(),{alt:"question",loader:e=>{let{src:t}=e;return"".concat(i).concat(t)},src:"/assets/question-mark.png",width:200,height:200})})]}):!0==r&&!1==d?(0,l.jsxs)("div",{className:"jsx-2bab77649996a55b up",children:[t,(0,l.jsx)(o(),{alt:"up",loader:e=>{let{src:t}=e;return"".concat(i).concat(t)},src:"/assets/up.png",width:35,height:40})]}):!1==r&&!0==d?(0,l.jsxs)("div",{className:"jsx-2bab77649996a55b down",children:[t,(0,l.jsx)(o(),{alt:"down",loader:e=>{let{src:t}=e;return"".concat(i).concat(t)},src:"/assets/down.png",width:35,height:40})]}):""}),(0,l.jsx)(s(),{id:"2bab77649996a55b",children:".result-control.jsx-2bab77649996a55b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;height:200px;margin-top:30px;margin-left:5px;padding-right:11px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;border:2px dashed#2b3642}.control-wrap.jsx-2bab77649996a55b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;color:gray;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin-top:5px;gap:7px}.up-down-wrap.jsx-2bab77649996a55b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.btn.jsx-2bab77649996a55b{background:none;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;opacity:.5;-webkit-transition:.4s;-moz-transition:.4s;-o-transition:.4s;transition:.4s;border:none;outline:none}.question-mark.jsx-2bab77649996a55b{position:relative;opacity:.2}.btn.jsx-2bab77649996a55b:hover{cursor:pointer;opacity:1}.up.jsx-2bab77649996a55b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-animation:up-down 1s ease-in-out;-moz-animation:up-down 1s ease-in-out;-o-animation:up-down 1s ease-in-out;animation:up-down 1s ease-in-out}@-webkit-keyframes up-down{0%{-webkit-transform:translatey(0px);transform:translatey(0px)}50%{-webkit-transform:translatey(-20px);transform:translatey(-20px)}100%{-webkit-transform:translatey(0px);transform:translatey(0px)}}@-moz-keyframes up-down{0%{-moz-transform:translatey(0px);transform:translatey(0px)}50%{-moz-transform:translatey(-20px);transform:translatey(-20px)}100%{-moz-transform:translatey(0px);transform:translatey(0px)}}@-o-keyframes up-down{0%{-o-transform:translatey(0px);transform:translatey(0px)}50%{-o-transform:translatey(-20px);transform:translatey(-20px)}100%{-o-transform:translatey(0px);transform:translatey(0px)}}@keyframes up-down{0%{-webkit-transform:translatey(0px);-moz-transform:translatey(0px);-o-transform:translatey(0px);transform:translatey(0px)}50%{-webkit-transform:translatey(-20px);-moz-transform:translatey(-20px);-o-transform:translatey(-20px);transform:translatey(-20px)}100%{-webkit-transform:translatey(0px);-moz-transform:translatey(0px);-o-transform:translatey(0px);transform:translatey(0px)}}.down.jsx-2bab77649996a55b{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-animation:down-up 1s ease-in-out;-moz-animation:down-up 1s ease-in-out;-o-animation:down-up 1s ease-in-out;animation:down-up 1s ease-in-out}@-webkit-keyframes down-up{0%{-webkit-transform:translatey(0px);transform:translatey(0px)}50%{-webkit-transform:translatey(20px);transform:translatey(20px)}100%{-webkit-transform:translatey(0px);transform:translatey(0px)}}@-moz-keyframes down-up{0%{-moz-transform:translatey(0px);transform:translatey(0px)}50%{-moz-transform:translatey(20px);transform:translatey(20px)}100%{-moz-transform:translatey(0px);transform:translatey(0px)}}@-o-keyframes down-up{0%{-o-transform:translatey(0px);transform:translatey(0px)}50%{-o-transform:translatey(20px);transform:translatey(20px)}100%{-o-transform:translatey(0px);transform:translatey(0px)}}@keyframes down-up{0%{-webkit-transform:translatey(0px);-moz-transform:translatey(0px);-o-transform:translatey(0px);transform:translatey(0px)}50%{-webkit-transform:translatey(20px);-moz-transform:translatey(20px);-o-transform:translatey(20px);transform:translatey(20px)}100%{-webkit-transform:translatey(0px);-moz-transform:translatey(0px);-o-transform:translatey(0px);transform:translatey(0px)}}"})]})},v=(0,g.nZ)({key:"bakeEcodataKey",get:e=>{let t,a,{get:l}=e;if(null!==l(j)){let e=l(j),n=e.oneYearEco.dollar.localDate,s=e.oneYearEco.dollar.candleData,i=n.slice(0,n.length/2),o=s.slice(0,s.length/2),r=n.slice(n.length/2,n.length),c=s.slice(s.length/2,s.length);t={dollar:{localDate:i,candleData:o}},a={dollar:{localDate:r,candleData:c}};let d=e.oneYearEco.gold.localDate,x=e.oneYearEco.gold.candleData,f=d.slice(0,d.length/2),m=x.slice(0,x.length/2),b=d.slice(d.length/2,d.length),p=x.slice(x.length/2,x.length);t={...t,gold:{localDate:f,candleData:m}},a={...a,gold:{localDate:b,candleData:p}};let u=e.oneYearEco.nasdaq.localDate,h=e.oneYearEco.nasdaq.candleData,y=u.slice(0,u.length/2),g=h.slice(0,h.length/2),w=u.slice(u.length/2,u.length),k=h.slice(h.length/2,h.length);t={...t,nasdaq:{localDate:y,candleData:g}},a={...a,nasdaq:{localDate:w,candleData:k}};let v=e.oneYearEco.vix.localDate,D=e.oneYearEco.vix.candleData,z=v.slice(0,v.length/2),N=D.slice(0,D.length/2),R=v.slice(v.length/2,v.length),q=D.slice(D.length/2,D.length);t={...t,vix:{localDate:z,candleData:N}},a={...a,vix:{localDate:R,candleData:q}};let S=e.oneYearEco.usInterestRate.series,H=Math.ceil(S.length/2),C=S.slice(0,H),P=S.slice(H,S.length);t={...t,usInterestRate:{series:C}},a={...a,usInterestRate:{series:P}};let O=e.oneYearEco.usUnemployRate.series,I=Math.ceil(O.length/2),U=O.slice(0,I),Y=O.slice(I,O.length);t={...t,usUnemploymentRate:{series:U}},a={...a,usUnemploymentRate:{series:Y}}}return{firstHalfData:t,lastHalfData:a}}});var D=a(7373);let z=e=>{let{isModalOpen:t,handleCancel:a,firstHalfData:n,lastHalfData:i}=e,{prefix:r}=(0,b.useContext)(y.ZP),[c,d]=(0,g.FV)(w),[x,f]=(0,b.useState)(null),[m,p]=(0,b.useState)(null),[u,h]=(0,b.useState)(null),[j,k]=(0,b.useState)(null),[v,z]=(0,b.useState)(null),[N,R]=(0,b.useState)(null),[q,S]=(0,b.useState)(null),[H,C]=(0,b.useState)(null);return(0,b.useEffect)(()=>{if(null!=n&&null!=i){let e=n.nasdaq.candleData[n.nasdaq.candleData.length-1],t=n.nasdaq.localDate[n.nasdaq.localDate.length-1],a=Math.floor((e[0]+e[1]+e[2]+e[3])/4);f({...x,initNasDate:t,initNasPrice:a});let l=i.nasdaq.candleData[i.nasdaq.candleData.length-1],s=i.nasdaq.localDate[i.nasdaq.localDate.length-1],o=Math.floor((l[0]+l[1]+l[2]+l[3])/4);p({...m,lastNasDate:s,lastNasPrice:o,nasRateOfReturn:Math.floor((o-a)/a*100)});let r=n.dollar.candleData[n.dollar.candleData.length-1],c=n.dollar.localDate[n.dollar.localDate.length-1],d=Math.floor((r[0]+r[1]+r[2]+r[3])/4);z({...v,initDollarDate:c,initDollarPrice:d});let b=i.dollar.candleData[i.dollar.candleData.length-1],y=i.dollar.localDate[i.dollar.localDate.length-1],g=Math.floor((b[0]+b[1]+b[2]+b[3])/4);R({...N,lastDollarDate:y,lastDollarPrice:g,dollarRateOfReturn:Math.floor((g-d)/d*100)});let w=n.gold.candleData[n.gold.candleData.length-1],D=n.gold.localDate[n.gold.localDate.length-1],P=Math.floor((w[0]+w[1]+w[2]+w[3])/4);h({...u,initGoldDate:D,initGoldPrice:P});let O=i.gold.candleData[i.gold.candleData.length-1],I=i.gold.localDate[i.gold.localDate.length-1],U=Math.floor((O[0]+O[1]+O[2]+O[3])/4);k({...j,lastGoldDate:I,lastGoldPrice:U,goldRateOfReturn:Math.floor((U-P)/P*100)});let Y=n.vix.candleData[n.vix.candleData.length-1],E=n.vix.localDate[n.vix.localDate.length-1],M=Math.floor((Y[0]+Y[1]+Y[2]+Y[3])/4);S({...q,initVixDate:E,initVixPrice:M});let G=i.vix.candleData[i.vix.candleData.length-1],B=i.vix.localDate[i.vix.localDate.length-1],F=Math.floor((G[0]+G[1]+G[2]+G[3])/4);C({...H,lastVixDate:B,lastVixPrice:F,vixRateOfReturn:Math.floor((F-M)/M*100)})}},[n,i]),(0,l.jsxs)("div",{className:"jsx-b9daeec394ae38df",children:[(0,l.jsxs)(D.Z,{centered:!0,open:t,onCancel:a,width:850,footer:!0,children:[(0,l.jsx)("span",{className:"jsx-b9daeec394ae38df main-title",children:"Result Details"}),(0,l.jsxs)("div",{className:"jsx-b9daeec394ae38df body-wrap",children:[(0,l.jsxs)("div",{className:"jsx-b9daeec394ae38df content-wrap",children:[(0,l.jsxs)("div",{className:"jsx-b9daeec394ae38df row-elements",children:[(0,l.jsx)("div",{className:"jsx-b9daeec394ae38df element"}),(0,l.jsx)("div",{className:"jsx-b9daeec394ae38df element column-title",children:null==x?void 0:x.initNasDate}),(0,l.jsx)("div",{className:"jsx-b9daeec394ae38df element column-title",children:null==m?void 0:m.lastNasDate}),(0,l.jsx)("div",{className:"jsx-b9daeec394ae38df element column-title",children:"Rate of Return"}),(0,l.jsx)("div",{className:"jsx-b9daeec394ae38df element column-title",children:"Your choice"})]}),(0,l.jsxs)("div",{className:"jsx-b9daeec394ae38df row-elements",children:[(0,l.jsx)(o(),{alt:"dollar",loader:e=>{let{src:t}=e;return"".concat(r).concat(t)},src:"/assets/dollar.png",width:32,height:32}),(0,l.jsx)("div",{className:"jsx-b9daeec394ae38df element",children:null==v?void 0:v.initDollarPrice}),(0,l.jsx)("div",{className:"jsx-b9daeec394ae38df element",children:null==N?void 0:N.lastDollarPrice}),(0,l.jsxs)("div",{className:"jsx-b9daeec394ae38df element",children:[null==N?void 0:N.dollarRateOfReturn,"%"]}),(null==N?void 0:N.dollarRateOfReturn)?N.dollarRateOfReturn>0&&!0==c.dollar?(0,l.jsx)(o(),{alt:"correct",loader:e=>{let{src:t}=e;return"".concat(r).concat(t)},src:"/assets/correct.png",width:32,height:32}):N.dollarRateOfReturn<0&&!1==c.dollar?(0,l.jsx)(o(),{alt:"correct",loader:e=>{let{src:t}=e;return"".concat(r).concat(t)},src:"/assets/correct.png",width:32,height:32}):(0,l.jsx)(o(),{alt:"incorrect",loader:e=>{let{src:t}=e;return"".concat(r).concat(t)},src:"/assets/incorrect.png",width:32,height:32}):(0,l.jsx)(o(),{alt:"equal",loader:e=>{let{src:t}=e;return"".concat(r).concat(t)},src:"/assets/equal.png",width:32,height:32})]}),(0,l.jsxs)("div",{className:"jsx-b9daeec394ae38df row-elements",children:[(0,l.jsx)(o(),{alt:"gold",loader:e=>{let{src:t}=e;return"".concat(r).concat(t)},src:"/assets/gold.png",width:32,height:32}),(0,l.jsx)("div",{className:"jsx-b9daeec394ae38df element",children:null==u?void 0:u.initGoldPrice}),(0,l.jsx)("div",{className:"jsx-b9daeec394ae38df element",children:null==j?void 0:j.lastGoldPrice}),(0,l.jsxs)("div",{className:"jsx-b9daeec394ae38df element",children:[null==j?void 0:j.goldRateOfReturn,"%"]}),(null==j?void 0:j.goldRateOfReturn)?j.goldRateOfReturn>0&&!0==c.gold?(0,l.jsx)(o(),{alt:"correct",loader:e=>{let{src:t}=e;return"".concat(r).concat(t)},src:"/assets/correct.png",width:32,height:32}):j.goldRateOfReturn<0&&!1==c.gold?(0,l.jsx)(o(),{alt:"correct",loader:e=>{let{src:t}=e;return"".concat(r).concat(t)},src:"/assets/correct.png",width:32,height:32}):(0,l.jsx)(o(),{alt:"incorrect",loader:e=>{let{src:t}=e;return"".concat(r).concat(t)},src:"/assets/incorrect.png",width:32,height:32}):(0,l.jsx)(o(),{alt:"equal",loader:e=>{let{src:t}=e;return"".concat(r).concat(t)},src:"/assets/equal.png",width:32,height:32})]}),(0,l.jsxs)("div",{className:"jsx-b9daeec394ae38df row-elements",children:[(0,l.jsx)(o(),{alt:"fear",loader:e=>{let{src:t}=e;return"".concat(r).concat(t)},src:"/assets/fear.png",width:32,height:32}),(0,l.jsx)("div",{className:"jsx-b9daeec394ae38df element",children:null==q?void 0:q.initVixPrice}),(0,l.jsx)("div",{className:"jsx-b9daeec394ae38df element",children:null==H?void 0:H.lastVixPrice}),(0,l.jsxs)("div",{className:"jsx-b9daeec394ae38df element",children:[null==H?void 0:H.vixRateOfReturn,"%"]}),(null==H?void 0:H.vixRateOfReturn)?H.vixRateOfReturn>0&&!0==c.vix?(0,l.jsx)(o(),{alt:"correct",loader:e=>{let{src:t}=e;return"".concat(r).concat(t)},src:"/assets/correct.png",width:32,height:32}):H.vixRateOfReturn<0&&!1==c.vix?(0,l.jsx)(o(),{alt:"correct",loader:e=>{let{src:t}=e;return"".concat(r).concat(t)},src:"/assets/correct.png",width:32,height:32}):(0,l.jsx)(o(),{alt:"incorrect",loader:e=>{let{src:t}=e;return"".concat(r).concat(t)},src:"/assets/incorrect.png",width:32,height:32}):(0,l.jsx)(o(),{alt:"equal",loader:e=>{let{src:t}=e;return"".concat(r).concat(t)},src:"/assets/equal.png",width:32,height:32})]}),(0,l.jsxs)("div",{className:"jsx-b9daeec394ae38df row-elements",children:[(0,l.jsx)(o(),{alt:"nasdaq",loader:e=>{let{src:t}=e;return"".concat(r).concat(t)},src:"/assets/nasdaq.png",width:32,height:32}),(0,l.jsx)("div",{className:"jsx-b9daeec394ae38df element",children:null==x?void 0:x.initNasPrice}),(0,l.jsx)("div",{className:"jsx-b9daeec394ae38df element",children:null==m?void 0:m.lastNasPrice}),(0,l.jsxs)("div",{className:"jsx-b9daeec394ae38df element",children:[null==m?void 0:m.nasRateOfReturn,"%"]}),(null==m?void 0:m.nasRateOfReturn)?m.nasRateOfReturn>0&&!0==c.nasdaq?(0,l.jsx)(o(),{alt:"correct",loader:e=>{let{src:t}=e;return"".concat(r).concat(t)},src:"/assets/correct.png",width:32,height:32}):m.nasRateOfReturn<0&&!1==c.nasdaq?(0,l.jsx)(o(),{alt:"correct",loader:e=>{let{src:t}=e;return"".concat(r).concat(t)},src:"/assets/correct.png",width:32,height:32}):(0,l.jsx)(o(),{alt:"incorrect",loader:e=>{let{src:t}=e;return"".concat(r).concat(t)},src:"/assets/incorrect.png",width:32,height:32}):(0,l.jsx)(o(),{alt:"equal",loader:e=>{let{src:t}=e;return"".concat(r).concat(t)},src:"/assets/equal.png",width:32,height:32})]})]}),(0,l.jsx)("button",{onClick:a,className:"jsx-b9daeec394ae38df ok-btn",children:"OK"})]})]}),(0,l.jsx)(s(),{id:"b9daeec394ae38df",children:".main-title.jsx-b9daeec394ae38df{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;font-weight:bold;font-size:20px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;color:#3369aa}.body-wrap.jsx-b9daeec394ae38df{margin-top:40px;margin-bottom:40px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:15px}.content-wrap.jsx-b9daeec394ae38df{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;gap:20px}.row-elements.jsx-b9daeec394ae38df{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:40px}.element.jsx-b9daeec394ae38df{width:150px;color:gray}.column-title.jsx-b9daeec394ae38df{font-size:15px;color:white}.ok-btn.jsx-b9daeec394ae38df{margin-top:20px;margin-bottom:-30px;width:80px;border:none;height:30px;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;color:white;background:#3369aa;opacity:.8}.ok-btn.jsx-b9daeec394ae38df:hover{cursor:pointer;opacity:1}.ok-btn.jsx-b9daeec394ae38df:active{border:1px solid#2372db}"})]})},N=e=>{let{title:t}=e,{prefix:a}=(0,b.useContext)(y.ZP);return(0,l.jsxs)("div",{className:"jsx-784fa6212898f997",children:[(0,l.jsxs)("div",{className:"jsx-784fa6212898f997 result-control",children:[(0,l.jsxs)("div",{style:{position:"absolute"},className:"jsx-784fa6212898f997",children:[(0,l.jsx)("div",{className:"jsx-784fa6212898f997 control-wrap",children:(0,l.jsx)("div",{className:"jsx-784fa6212898f997",children:"6 months later,"})}),(0,l.jsxs)("div",{className:"jsx-784fa6212898f997 data-info",children:[(0,l.jsxs)("div",{className:"jsx-784fa6212898f997 element",children:[(0,l.jsx)("div",{className:"jsx-784fa6212898f997",children:t}),(0,l.jsx)("div",{className:"jsx-784fa6212898f997 info-icon",children:(0,l.jsx)(o(),{alt:"info",loader:e=>{let{src:t}=e;return"".concat(a).concat(t)},src:"/assets/info.png",width:30,height:30})})]}),"U.S Interest Rate"==t?(0,l.jsx)("div",{className:"jsx-784fa6212898f997 extra-txt",children:"(Federal Funds Effective Rate)"}):"","U.S Unemployment rate"==t?(0,l.jsx)("span",{className:"jsx-784fa6212898f997",children:'Usually, when the unemployment rate in the U.S is going lower , The "Natural economy" in the U.S is going fine.'}):(0,l.jsx)("span",{className:"jsx-784fa6212898f997",children:"Usually, when the interest rate in the U.S is going higher, the value of currency(US dollar) would start going up to fight inflation."})]})]}),(0,l.jsx)("div",{className:"jsx-784fa6212898f997 question-mark",children:(0,l.jsx)(o(),{alt:"question",loader:e=>{let{src:t}=e;return"".concat(a).concat(t)},src:"/assets/info.png",width:200,height:200})})]}),(0,l.jsx)(s(),{id:"784fa6212898f997",children:'.result-control.jsx-784fa6212898f997{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;height:200px;margin-top:30px;margin-left:5px;padding-right:11px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;border:2px dashed#2b3642}.control-wrap.jsx-784fa6212898f997{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;color:gray;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin-top:5px;gap:7px}.question-mark.jsx-784fa6212898f997{position:absolute;opacity:.2}.data-info.jsx-784fa6212898f997{position:relative;gap:5px;margin-top:10px}.data-info.jsx-784fa6212898f997 span.jsx-784fa6212898f997{position:absolute;background-color:#2b2f33;font-size:14px;color:#838384;width:300px;height:60px;top:-85px;text-align:center;padding:10px;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;left:50%;-webkit-transform:translatex(-50%);-moz-transform:translatex(-50%);-ms-transform:translatex(-50%);-o-transform:translatex(-50%);transform:translatex(-50%);opacity:0;-webkit-transition:.5s;-moz-transition:.5s;-o-transition:.5s;transition:.5s;visibility:hidden}.data-info.jsx-784fa6212898f997 span.jsx-784fa6212898f997:after{content:"";position:absolute;background-color:#2b2f33;width:10px;height:10px;-webkit-transform:rotate(45deg)translatex(-50%);-moz-transform:rotate(45deg)translatex(-50%);-ms-transform:rotate(45deg)translatex(-50%);-o-transform:rotate(45deg)translatex(-50%);transform:rotate(45deg)translatex(-50%);bottom:-9px;left:50%}.data-info.jsx-784fa6212898f997:hover span.jsx-784fa6212898f997{opacity:1;visibility:visible;z-index:10}.element.jsx-784fa6212898f997{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin-top:5px;color:gray}.extra-txt.jsx-784fa6212898f997{color:gray;font-size:13px}.info-icon.jsx-784fa6212898f997{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin-top:5px}.data-info.jsx-784fa6212898f997:hover{cursor:pointer}'})]})};function R(){var e,t,a,n,i,c,d,x,p,D,R,q,S,H,C,P,O,I,U,Y,E,M,G,B;let{prefix:F}=(0,b.useContext)(y.ZP),{data:V,loading:Z,error:_,refetch:L}=(0,m.a)(f),[A,K]=(0,g.FV)(w),[T,X]=(0,g.FV)(j),J=(0,g.sJ)(v),[Q,W]=(0,b.useState)(!1),[$,ee]=(0,b.useState)(!1),[et,ea]=(0,b.useState)(!1),el=()=>{ea(!0)},en=()=>{ea(!1)};(0,b.useEffect)(()=>{V&&X(V)},[V]);let es=()=>{ee(!1),W(!0)},ei=()=>{W(!1),ee(!1),K({...A,dollar:null,gold:null,nasdaq:null,vix:null}),L()};return(0,l.jsxs)("div",{className:"jsx-fae385e44d2d4122 nav-frame",children:[(0,l.jsx)("div",{className:"jsx-fae385e44d2d4122 top-nav",children:(0,l.jsx)(r.Z,{})}),(0,l.jsx)("div",{className:"jsx-fae385e44d2d4122 main-body",children:(0,l.jsxs)("div",{className:"jsx-fae385e44d2d4122 right-main",children:[(0,l.jsxs)("div",{className:"jsx-fae385e44d2d4122 control-area",children:[(0,l.jsxs)("div",{className:"jsx-fae385e44d2d4122",children:[(0,l.jsx)("span",{className:"jsx-fae385e44d2d4122 main-title",children:"No more trading, but trainning your self with \xa0"}),(0,l.jsx)("span",{className:"jsx-fae385e44d2d4122 main-title emphasis-word",children:'"Real economy data"'})]}),null!==A.dollar&&null!==A.gold&&null!==A.nasdaq&&null!==A.vix?(0,l.jsx)("div",{className:"jsx-fae385e44d2d4122 btn-wrap",children:!1==Q?(0,l.jsxs)("button",{onClick:es,disabled:!V,className:"jsx-fae385e44d2d4122 btn",children:["Next \xa0",(0,l.jsx)(o(),{alt:"barchart",loader:e=>{let{src:t}=e;return"".concat(F).concat(t)},src:"/assets/bar-chart.png",width:25,height:25})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("button",{onClick:el,className:"jsx-fae385e44d2d4122 btn",children:["Result \xa0",(0,l.jsx)(o(),{alt:"search",loader:e=>{let{src:t}=e;return"".concat(F).concat(t)},src:"/assets/search.png",width:20,height:20})]}),(0,l.jsxs)("button",{onClick:ei,className:"jsx-fae385e44d2d4122 btn refresh",children:["Refresh \xa0",(0,l.jsx)(o(),{alt:"refresh",loader:e=>{let{src:t}=e;return"".concat(F).concat(t)},src:"/assets/refresh.png",width:25,height:25})]})]})}):(0,l.jsxs)("div",{className:"jsx-fae385e44d2d4122 guide-text",children:["Click all the \xa0",(0,l.jsx)(o(),{alt:"up",loader:e=>{let{src:t}=e;return"".concat(F).concat(t)},src:"/assets/up.png",width:15,height:20}),"\xa0or\xa0",(0,l.jsx)(o(),{alt:"down",loader:e=>{let{src:t}=e;return"".concat(F).concat(t)},src:"/assets/down.png",width:15,height:20}),"\xa0 buttons to see your result"]}),(0,l.jsx)(z,{isModalOpen:et,handleCancel:en,firstHalfData:(null==J?void 0:J.firstHalfData)?J.firstHalfData:null,lastHalfData:(null==J?void 0:J.lastHalfData)?J.lastHalfData:null})]}),(0,l.jsxs)("div",{className:"jsx-fae385e44d2d4122 echarts-wrap",children:[(0,l.jsxs)("div",{className:"jsx-fae385e44d2d4122 chart-layer",children:[(0,l.jsxs)("div",{className:"jsx-fae385e44d2d4122 chart-wrap",children:[(0,l.jsx)(h,{title:"U.S Dollar index",maxYaxis:120,candleData:(null==J?void 0:null===(e=J.firstHalfData)||void 0===e?void 0:e.dollar)?null==J?void 0:null===(t=J.firstHalfData)||void 0===t?void 0:t.dollar:null}),!0==Q?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"jsx-fae385e44d2d4122 result-wrap",children:(0,l.jsx)(h,{title:" Next 6 months",maxYaxis:120,isGoBtnClicked:Q,isRefrBtnClicked:$,candleData:(null==J?void 0:null===(a=J.lastHalfData)||void 0===a?void 0:a.dollar)?null==J?void 0:null===(n=J.lastHalfData)||void 0===n?void 0:n.dollar:null})})}):(0,l.jsx)("div",{className:"jsx-fae385e44d2d4122 result-wrap",children:(0,l.jsx)(k,{title:"Dollar"})})]}),(0,l.jsxs)("div",{className:"jsx-fae385e44d2d4122 chart-wrap",children:[(0,l.jsx)(h,{title:"Gold",maxYaxis:2100,candleData:(null==J?void 0:null===(i=J.firstHalfData)||void 0===i?void 0:i.gold)?null==J?void 0:null===(c=J.firstHalfData)||void 0===c?void 0:c.gold:null}),!0==Q?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"jsx-fae385e44d2d4122 result-wrap",children:(0,l.jsx)(h,{title:" Next 6 months",maxYaxis:2100,isGoBtnClicked:Q,isRefrBtnClicked:$,candleData:(null==J?void 0:null===(d=J.lastHalfData)||void 0===d?void 0:d.gold)?null==J?void 0:null===(x=J.lastHalfData)||void 0===x?void 0:x.gold:null})})}):(0,l.jsx)("div",{className:"jsx-fae385e44d2d4122 result-wrap",children:(0,l.jsx)(k,{title:"Gold"})})]})]}),(0,l.jsxs)("div",{className:"jsx-fae385e44d2d4122 chart-layer",children:[(0,l.jsxs)("div",{className:"jsx-fae385e44d2d4122 chart-wrap",children:[(0,l.jsx)(h,{title:"Vix",maxYaxis:90,candleData:(null==J?void 0:null===(p=J.firstHalfData)||void 0===p?void 0:p.vix)?null==J?void 0:null===(D=J.firstHalfData)||void 0===D?void 0:D.vix:null}),!0==Q?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"jsx-fae385e44d2d4122 result-wrap",children:(0,l.jsx)(h,{title:" Next 6 months",maxYaxis:90,isGoBtnClicked:Q,isRefrBtnClicked:$,candleData:(null==J?void 0:null===(R=J.lastHalfData)||void 0===R?void 0:R.vix)?null==J?void 0:null===(q=J.lastHalfData)||void 0===q?void 0:q.vix:null})})}):(0,l.jsx)("div",{className:"jsx-fae385e44d2d4122 result-wrap",children:(0,l.jsx)(k,{title:"Vix"})})]}),(0,l.jsxs)("div",{className:"jsx-fae385e44d2d4122 chart-wrap",children:[(0,l.jsx)(h,{title:"Nasdaq",maxYaxis:17e3,candleData:(null==J?void 0:null===(S=J.firstHalfData)||void 0===S?void 0:S.nasdaq)?null==J?void 0:null===(H=J.firstHalfData)||void 0===H?void 0:H.nasdaq:null}),!0==Q?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"jsx-fae385e44d2d4122 result-wrap",children:(0,l.jsx)(h,{title:" Next 6 months",maxYaxis:17e3,isGoBtnClicked:Q,isRefrBtnClicked:$,candleData:(null==J?void 0:null===(C=J.lastHalfData)||void 0===C?void 0:C.nasdaq)?null==J?void 0:null===(P=J.lastHalfData)||void 0===P?void 0:P.nasdaq:null})})}):(0,l.jsx)("div",{className:"jsx-fae385e44d2d4122 result-wrap",children:(0,l.jsx)(k,{title:"Nasdaq"})})]})]}),(0,l.jsxs)("div",{className:"jsx-fae385e44d2d4122 chart-layer",children:[(0,l.jsxs)("div",{className:"jsx-fae385e44d2d4122 chart-wrap",children:[(0,l.jsx)(u,{title:"U.S Unemployment Rate",maxYaxis:15,data:(null==J?void 0:null===(O=J.firstHalfData)||void 0===O?void 0:O.usUnemploymentRate.series)?null==J?void 0:null===(I=J.firstHalfData)||void 0===I?void 0:I.usUnemploymentRate.series:null}),!0==Q?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"jsx-fae385e44d2d4122 result-wrap",children:(0,l.jsx)(u,{title:" Next 6 months",maxYaxis:15,isGoBtnClicked:Q,isRefrBtnClicked:$,data:(null==J?void 0:null===(U=J.lastHalfData)||void 0===U?void 0:U.usUnemploymentRate.series)?null==J?void 0:null===(Y=J.lastHalfData)||void 0===Y?void 0:Y.usUnemploymentRate.series:null})})}):(0,l.jsx)("div",{className:"jsx-fae385e44d2d4122 result-wrap",children:(0,l.jsx)(N,{title:"U.S Unemployment rate"})})]}),(0,l.jsxs)("div",{className:"jsx-fae385e44d2d4122 chart-wrap",children:[(0,l.jsx)(u,{title:"U.S Interest Rate",id:"usInterestRate",maxYaxis:5,data:(null==J?void 0:null===(E=J.firstHalfData)||void 0===E?void 0:E.usInterestRate.series)?null==J?void 0:null===(M=J.firstHalfData)||void 0===M?void 0:M.usInterestRate.series:null}),!0==Q?(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"jsx-fae385e44d2d4122 result-wrap",children:(0,l.jsx)(u,{title:" Next 6 months",id:"usInterestRate",maxYaxis:5,isGoBtnClicked:Q,isRefrBtnClicked:$,data:(null==J?void 0:null===(G=J.lastHalfData)||void 0===G?void 0:G.usInterestRate.series)?null==J?void 0:null===(B=J.lastHalfData)||void 0===B?void 0:B.usInterestRate.series:null})})}):(0,l.jsx)("div",{className:"jsx-fae385e44d2d4122 result-wrap",children:(0,l.jsx)(N,{title:"U.S Interest Rate"})})]})]})]})]})}),(0,l.jsx)(s(),{id:"fae385e44d2d4122",children:".right-main.jsx-fae385e44d2d4122{width:100%;height:100%;z-index:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.guide-text.jsx-fae385e44d2d4122{margin:7px;font-size:18px;color:#757575;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.control-area.jsx-fae385e44d2d4122{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;height:10%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.echarts-wrap.jsx-fae385e44d2d4122{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;height:90%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.chart-layer.jsx-fae385e44d2d4122{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:98%;height:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.chart-wrap.jsx-fae385e44d2d4122{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:50%}.main-title.jsx-fae385e44d2d4122{font-weight:400;color:#abacad;font-size:20px;-webkit-animation:fadein 3s ease-in-out;-moz-animation:fadein 3s ease-in-out;-o-animation:fadein 3s ease-in-out;animation:fadein 3s ease-in-out}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@-moz-keyframes fadein{from{opacity:0}to{opacity:1}}@-o-keyframes fadein{from{opacity:0}to{opacity:1}}@keyframes fadein{from{opacity:0}to{opacity:1}}.emphasis-word.jsx-fae385e44d2d4122{font-weight:400;font-style:italic;font-size:20px}.btn-wrap.jsx-fae385e44d2d4122{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:30px}.btn.jsx-fae385e44d2d4122{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;color:white;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background-color:#3369aa;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;width:95px;height:35px;opacity:.8;-webkit-transition:.4s;-moz-transition:.4s;-o-transition:.4s;transition:.4s;border:none;font-size:13px;-webkit-box-shadow:4px 4px 12px#4f5054;-moz-box-shadow:4px 4px 12px#4f5054;box-shadow:4px 4px 12px#4f5054;outline:none}.refresh.jsx-fae385e44d2d4122{background-color:#4f4e4e}.btn.jsx-fae385e44d2d4122:hover{cursor:pointer;opacity:1}.result-wrap.jsx-fae385e44d2d4122{width:48%;height:1\r\n          position: relative;z-index:0;-webkit-animation:fadeIn 3s linear;-moz-animation:fadeIn 3s linear;-o-animation:fadeIn 3s linear;animation:fadeIn 3s linear}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-moz-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-o-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}"})]})}}},function(e){e.O(0,[114,136,390,75,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);