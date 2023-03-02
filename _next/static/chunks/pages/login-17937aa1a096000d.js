(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{3236:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n(8383)}])},5634:function(e,t,n){"use strict";n.d(t,{dV:function(){return o}});var a=n(4480);(0,a.cn)({key:"authorityKey",default:""});let o=(0,a.cn)({key:"loggedInUserIdKey",default:void 0});(0,a.cn)({key:"isRefetchedUserKey",default:!1})},8610:function(e,t,n){"use strict";n.d(t,{AX:function(){return v},Nv:function(){return k},Xv:function(){return _},kp:function(){return y},os:function(){return j},pq:function(){return g},tm:function(){return h},vG:function(){return z},ym:function(){return w}});var a=n(7297),o=n(7283);function i(){let e=(0,a.Z)(["\n  mutation signup($userId: String!, $userPw: String!, $name: String!) {\n    signup(userId: $userId, userPw: $userPw, name: $name)\n  }\n"]);return i=function(){return e},e}function r(){let e=(0,a.Z)(["\n  query singleUser($userId: String!) {\n    singleUser(userId: $userId) {\n      id\n      userId\n      name\n      authority\n    }\n  }\n"]);return r=function(){return e},e}function s(){let e=(0,a.Z)(["\n  mutation login($userId: String!, $userPw: String!) {\n    login(userId: $userId, userPw: $userPw) {\n      userId\n      name\n      authority\n      token\n    }\n  }\n"]);return s=function(){return e},e}function c(){let e=(0,a.Z)(["\n  mutation {\n    logout\n  }\n"]);return c=function(){return e},e}function l(){let e=(0,a.Z)(["\n  query allUser {\n    allUser {\n      id\n      userId\n      userPw\n      name\n      authority\n      post {\n        title\n        writer\n      }\n    }\n  }\n"]);return l=function(){return e},e}function d(){let e=(0,a.Z)(["\n  query allPost {\n    allPost {\n      id\n      title\n      writer\n      content\n      createdAt\n      tags\n    }\n  }\n"]);return d=function(){return e},e}function f(){let e=(0,a.Z)(["\n  mutation createUser($input: UserCreateInput!) {\n    createUser(input: $input) {\n      id\n      writer\n      tags\n    }\n  }\n"]);return f=function(){return e},e}function m(){let e=(0,a.Z)(["\n  mutation createPost($input: PostInput!) {\n    createPost(input: $input) {\n      id\n    }\n  }\n"]);return m=function(){return e},e}function u(){let e=(0,a.Z)(["\n  mutation updateUser($input: UserUpdateInput!) {\n    updateUser(input: $input) {\n      id\n    }\n  }\n"]);return u=function(){return e},e}function x(){let e=(0,a.Z)(["\n  mutation updatePost($input: PostUpdateInput!) {\n    updatePost(input: $input) {\n      id\n    }\n  }\n"]);return x=function(){return e},e}function p(){let e=(0,a.Z)(["\n  mutation deleteUsers($userIds: [String!]!) {\n    deleteUsers(userIds: $userIds) {\n      id\n    }\n  }\n"]);return p=function(){return e},e}function b(){let e=(0,a.Z)(["\n  mutation deletePost($input: String!) {\n    deletePost(input: $input) {\n      id\n    }\n  }\n"]);return b=function(){return e},e}let y=(0,o.Ps)(i()),g=(0,o.Ps)(r()),w=(0,o.Ps)(s()),k=(0,o.Ps)(c());(0,o.Ps)(l());let h=(0,o.Ps)(d());(0,o.Ps)(f());let j=(0,o.Ps)(m()),v=(0,o.Ps)(u()),z=(0,o.Ps)(x());(0,o.Ps)(p());let _=(0,o.Ps)(b())},1994:function(e,t,n){"use strict";var a=n(5893);n(7294);var o=n(5081);t.Z=function(){return(0,a.jsx)("div",{style:{padding:11.2},children:(0,a.jsx)(o.Z,{size:"large"})})}},8383:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return z}});var a=n(5893),o=n(1857),i=n.n(o),r=n(7294),s=n(5675),c=n.n(s),l=n(7536),d=n(1163),f=n(4480),m=n(7887),u=n(319),x=n(8610),p=n(7373),b=n(7720);let y=/^[A-Za-z0-9]*$/,g=e=>{var t,n,o,s;let{isModalOpen:c,handleCancel:f}=e;(0,d.useRouter)();let{register:g,handleSubmit:w,reset:k,watch:h,setValue:j,getValues:v,formState:{errors:z}}=(0,l.cI)();(0,m.a)(b.PB);let[_,N]=(0,u.D)(x.kp);(0,r.useEffect)(()=>{var e,t;(null===(e=N.data)||void 0===e?void 0:e.signup)===!0?(alert("Sucess!"),f()):(null===(t=N.data)||void 0===t?void 0:t.signup)===!1&&alert("Fail")},[N.data]);let P=e=>{_({variables:{userId:e.formId,userPw:e.formPw,name:e.formName}})},I=e=>{};return(0,a.jsxs)("div",{className:"jsx-dafcdb3ccab9a5cf",children:[(0,a.jsx)(p.Z,{title:"Create Account",centered:!0,open:c,onCancel:f,width:380,footer:!0,children:(0,a.jsx)("form",{onSubmit:w(P,I),className:"jsx-dafcdb3ccab9a5cf",children:(0,a.jsxs)("div",{className:"jsx-dafcdb3ccab9a5cf form-wrap",children:[(0,a.jsxs)("div",{className:"jsx-dafcdb3ccab9a5cf form-input-wrap",children:[(0,a.jsxs)("div",{className:"jsx-dafcdb3ccab9a5cf form-input-row",children:[(0,a.jsx)("div",{className:"jsx-dafcdb3ccab9a5cf input-title",children:"ID"}),(0,a.jsx)("input",{type:"text",autoComplete:"off",...g("formId",{required:"please enter user ID",minLength:{message:"Minimum length is 3",value:3},maxLength:{message:"Maximum length is 20",value:20},validate:{noSpace:e=>y.test(e)||"Only Alphabets or numbers are acceptable"}}),placeholder:"Account",className:"jsx-dafcdb3ccab9a5cf form-input"})]}),(0,a.jsx)("div",{className:"jsx-dafcdb3ccab9a5cf error-msg",children:null==z?void 0:null===(t=z.formId)||void 0===t?void 0:t.message})]}),(0,a.jsxs)("div",{className:"jsx-dafcdb3ccab9a5cf form-input-wrap",children:[(0,a.jsxs)("div",{className:"jsx-dafcdb3ccab9a5cf form-input-row",children:[(0,a.jsx)("div",{className:"jsx-dafcdb3ccab9a5cf input-title",children:"PW"}),(0,a.jsx)("input",{type:"text",autoComplete:"off",...g("formPw",{minLength:{message:"Minimum length is 5 long",value:5},maxLength:{message:"Maximum length is 30 long",value:30},validate:{noSpace:e=>!e.includes(" ")||"Please enter without space."}}),placeholder:"Password",className:"jsx-dafcdb3ccab9a5cf form-input"})]}),(0,a.jsx)("div",{className:"jsx-dafcdb3ccab9a5cf error-msg",children:null==z?void 0:null===(n=z.formPw)||void 0===n?void 0:n.message})]}),(0,a.jsxs)("div",{className:"jsx-dafcdb3ccab9a5cf form-input-wrap",children:[(0,a.jsxs)("div",{className:"jsx-dafcdb3ccab9a5cf form-input-row",children:[(0,a.jsx)("div",{className:"jsx-dafcdb3ccab9a5cf input-title",children:"NAME"}),(0,a.jsx)("input",{type:"text",autoComplete:"off",...g("formName",{required:"please enter name",minLength:{message:"Minimum length is 3 long",value:3},maxLength:{message:"Maximum length is 8 long",value:8}}),placeholder:"Name or Nickname",className:"jsx-dafcdb3ccab9a5cf form-input"})]}),(0,a.jsx)("div",{className:"jsx-dafcdb3ccab9a5cf error-msg",children:null==z?void 0:null===(o=z.formName)||void 0===o?void 0:o.message})]}),(null===(s=N.data)||void 0===s?void 0:s.signup)===!1?(0,a.jsx)("div",{style:{color:"rgb(255, 71, 92)",fontSize:"15px"},className:"jsx-dafcdb3ccab9a5cf",children:"ID is already in use"}):"",(0,a.jsx)("button",{type:"submit",className:"jsx-dafcdb3ccab9a5cf btn-form-create",children:"OK"})]})})}),(0,a.jsx)(i(),{id:"dafcdb3ccab9a5cf",children:".form-input.jsx-dafcdb3ccab9a5cf:focus{-webkit-transition:.4s;-moz-transition:.4s;-o-transition:.4s;transition:.4s;border:none;outline:1px solid#707070}.btn-form-create.jsx-dafcdb3ccab9a5cf{margin-top:20px;margin-bottom:-30px;width:80px;border:none;height:30px;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;color:white;background:#3369aa;opacity:.8}.btn-form-create.jsx-dafcdb3ccab9a5cf:hover{cursor:pointer;opacity:1}.btn-form-create.jsx-dafcdb3ccab9a5cf:active{border:1px solid#2372db}.form-wrap.jsx-dafcdb3ccab9a5cf{margin-top:40px;margin-bottom:40px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:15px}.form-input-wrap.jsx-dafcdb3ccab9a5cf{width:100%}.form-input-row.jsx-dafcdb3ccab9a5cf{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.input-title.jsx-dafcdb3ccab9a5cf{width:60px}.form-input.jsx-dafcdb3ccab9a5cf{height:30px;width:80%;background-color:#151b23;border:none;-webkit-box-shadow:4px 4px 12px#4f5054;-moz-box-shadow:4px 4px 12px#4f5054;box-shadow:4px 4px 12px#4f5054;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;color:white;font-size:15px}.error-msg.jsx-dafcdb3ccab9a5cf{margin-left:63px;color:rgb(255,71,92);fontsize:15px}"})]})};var w=n(1994),k=function(e){let{msg:t}=e;return(0,a.jsx)("div",{style:{zIndex:10,color:"white",fontSize:"20px"},children:t})},h=n(5634),j=n(1694);let v=()=>{var e,t,n,o;let[s,p]=(0,r.useState)(!1),y=(0,d.useRouter)(),{prefix:v}=(0,r.useContext)(j.ZP),z=(0,m.a)(b.PB),[_,N]=(0,f.FV)(h.dV),P=null===(e=z.data)||void 0===e?void 0:e.user,[I,S]=(0,u.D)(x.ym),[$,Z]=(0,r.useState)(!1);(0,r.useEffect)(()=>{},[P]),(0,r.useEffect)(()=>{var e,t;(null===(e=S.data)||void 0===e?void 0:e.login)?((0,b.VW)({...S.data.login}),sessionStorage.setItem("loggedinUser",JSON.stringify({...S.data.login})),alert("Log in Sucess!"),y.push("/")):(null===(t=S.data)||void 0===t?void 0:t.login)===null&&alert("Please check your ID and Password again.")},[S.data]),(null===(t=z.data)||void 0===t?void 0:t.user)&&y.push("/");let{register:M,handleSubmit:U,setError:C,reset:A,watch:T,setValue:E,getValues:q,formState:{errors:D}}=(0,l.cI)(),L=e=>{p(e.getModifierState("CapsLock"))},K=e=>{I({variables:{userId:e.id,userPw:e.pw}}),N(e.id)},O=e=>{},R=()=>{Z(!0)},V=()=>{Z(!1)},W=e=>{e.key};return(0,a.jsxs)("div",{className:i().dynamic([["38f0f44fc1814310",[v,v,v]]])+" background-frame",children:[(0,a.jsxs)("form",{onSubmit:U(K,O),className:i().dynamic([["38f0f44fc1814310",[v,v,v]]])+" content-wrap",children:[(0,a.jsx)(c(),{priority:!0,alt:"moon",loader:e=>{let{src:t}=e;return"".concat(v).concat(t)},src:"/assets/moon.png",width:150,height:150}),(0,a.jsxs)("div",{className:i().dynamic([["38f0f44fc1814310",[v,v,v]]])+" title-txt",children:[(0,a.jsx)("h1",{className:i().dynamic([["38f0f44fc1814310",[v,v,v]]]),children:"Welcome to Jay Web "}),(0,a.jsxs)("div",{className:i().dynamic([["38f0f44fc1814310",[v,v,v]]])+" apollo-frame",children:[(0,a.jsx)("h3",{className:i().dynamic([["38f0f44fc1814310",[v,v,v]]]),children:"with Apollo"}),(0,a.jsx)("div",{className:i().dynamic([["38f0f44fc1814310",[v,v,v]]])+" rocket-icon",children:(0,a.jsx)(c(),{alt:"rocket",loader:e=>{let{src:t}=e;return"".concat(v).concat(t)},src:"/assets/rocket.png",width:30,height:30})})]})]}),(0,a.jsx)("div",{className:i().dynamic([["38f0f44fc1814310",[v,v,v]]])+" input-area",children:(0,a.jsx)("input",{type:"text",autoComplete:"off",...M("id",{required:"please enter user ID"}),placeholder:"Account",style:{fontSize:"15px",borderRadius:"3px",color:"white"},className:i().dynamic([["38f0f44fc1814310",[v,v,v]]])+" input-id"})}),(0,a.jsx)("div",{style:{color:"rgb(255, 71, 92)",fontSize:"15px"},className:i().dynamic([["38f0f44fc1814310",[v,v,v]]]),children:null==D?void 0:null===(n=D.id)||void 0===n?void 0:n.message}),(0,a.jsx)("div",{className:i().dynamic([["38f0f44fc1814310",[v,v,v]]])+" input-area",children:(0,a.jsx)("input",{type:"password",...M("pw",{required:"please enter Password"}),placeholder:"Password",autoComplete:"off",onKeyDown:e=>L(e),onKeyPress:W,style:{fontSize:"15px",color:"white",borderRadius:"3px"},className:i().dynamic([["38f0f44fc1814310",[v,v,v]]])+" input-pw"})}),(0,a.jsx)("div",{style:{color:"rgb(255, 71, 92)",fontSize:"15px"},className:i().dynamic([["38f0f44fc1814310",[v,v,v]]]),children:null==D?void 0:null===(o=D.pw)||void 0===o?void 0:o.message}),(0,a.jsx)("div",{className:i().dynamic([["38f0f44fc1814310",[v,v,v]]]),children:s?(0,a.jsx)("span",{className:i().dynamic([["38f0f44fc1814310",[v,v,v]]]),children:"Capslock is activated"}):""}),S.error?(0,a.jsx)(k,{msg:"Please check id and password."}):"",S.loading?(0,a.jsx)(w.Z,{}):(0,a.jsx)("button",{type:"submit",className:i().dynamic([["38f0f44fc1814310",[v,v,v]]])+" btn-signIn",children:(0,a.jsx)("h3",{className:i().dynamic([["38f0f44fc1814310",[v,v,v]]]),children:"Sign in"})}),(0,a.jsx)("div",{onClick:R,className:i().dynamic([["38f0f44fc1814310",[v,v,v]]])+" create-account",children:"Create Account"})]}),(0,a.jsx)(g,{isModalOpen:$,handleCancel:V}),(0,a.jsx)(i(),{id:"38f0f44fc1814310",dynamic:[v,v,v],children:'.background-frame.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;height:100vh;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background:url("'.concat(v,'/assets/universe.png");-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover}.content-wrap.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;width:400px;gap:10px}.title-txt.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:40px;animation:fadein 5s ease-in-out;-moz-animation:fadein 5s;-webkit-animation:fadein 5s;-o-animation:fadein 5s}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@-moz-keyframes fadein{from{opacity:0}to{opacity:1}}@-o-keyframes fadein{from{opacity:0}to{opacity:1}}@keyframes fadein{from{opacity:0}to{opacity:1}}@-moz-keyframes fadein{from{opacity:0}to{opacity:1}}@-webkit-keyframes fadein{from{opacity:0}to{opacity:1}}@-o-keyframes fadein{from{opacity:0}to{opacity:1}}h1.__jsx-style-dynamic-selector{margin:0;font-weight:bold;margin-top:40px}.apollo-frame.__jsx-style-dynamic-selector{position:relative}.rocket-icon.__jsx-style-dynamic-selector{position:absolute;top:60px;right:37px;-webkit-transform:rotate(-45deg);-moz-transform:rotate(-45deg);-ms-transform:rotate(-45deg);-o-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:goToMoon 3s ease-in-out;-moz-animation:goToMoon 3s ease-in-out;-o-animation:goToMoon 3s ease-in-out;animation:goToMoon 3s ease-in-out}@-webkit-keyframes goToMoon{from{-webkit-transform:translatey(0px)rotate(-45deg);transform:translatey(0px)rotate(-45deg)}to{-webkit-transform:translatey(-220px)rotate(-45deg);transform:translatey(-220px)rotate(-45deg)}}@-moz-keyframes goToMoon{from{-moz-transform:translatey(0px)rotate(-45deg);transform:translatey(0px)rotate(-45deg)}to{-moz-transform:translatey(-220px)rotate(-45deg);transform:translatey(-220px)rotate(-45deg)}}@-o-keyframes goToMoon{from{-o-transform:translatey(0px)rotate(-45deg);transform:translatey(0px)rotate(-45deg)}to{-o-transform:translatey(-220px)rotate(-45deg);transform:translatey(-220px)rotate(-45deg)}}@keyframes goToMoon{from{-webkit-transform:translatey(0px)rotate(-45deg);-moz-transform:translatey(0px)rotate(-45deg);-o-transform:translatey(0px)rotate(-45deg);transform:translatey(0px)rotate(-45deg)}to{-webkit-transform:translatey(-220px)rotate(-45deg);-moz-transform:translatey(-220px)rotate(-45deg);-o-transform:translatey(-220px)rotate(-45deg);transform:translatey(-220px)rotate(-45deg)}}.input-area.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;height:40px;margin-top:15px}.input-id.__jsx-style-dynamic-selector{background-image:url("').concat(v,'/assets/user.png");background-repeat:no-repeat;background-position:15px center;padding-left:60px;width:100%;background-color:#151b23;border:none;-webkit-box-shadow:4px 4px 12px#4f5054;-moz-box-shadow:4px 4px 12px#4f5054;box-shadow:4px 4px 12px#4f5054}.input-pw.__jsx-style-dynamic-selector{background-image:url("').concat(v,'/assets/pw.png");background-repeat:no-repeat;background-position:15px center;padding-left:60px;width:100%;background-color:#151b23;border:none;-webkit-box-shadow:4px 4px 12px#4f5054;-moz-box-shadow:4px 4px 12px#4f5054;box-shadow:4px 4px 12px#4f5054}.input-id.__jsx-style-dynamic-selector:focus,.input-pw.__jsx-style-dynamic-selector:focus{outline:none}.btn-signIn.__jsx-style-dynamic-selector{margin-top:20px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;color:white;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background-color:#3369aa;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;width:100%;height:40px;opacity:.8;-webkit-transition:.4s;-moz-transition:.4s;-o-transition:.4s;transition:.4s;border:none;-webkit-box-shadow:4px 4px 12px#4f5054;-moz-box-shadow:4px 4px 12px#4f5054;box-shadow:4px 4px 12px#4f5054;outline:none}.btn-signIn.__jsx-style-dynamic-selector:hover,.btn-form-create.__jsx-style-dynamic-selector:hover{cursor:pointer;opacity:1}.btn-signIn.__jsx-style-dynamic-selector:active,.btn-form-create.__jsx-style-dynamic-selector:active{border:1px solid#2372db}.create-account.__jsx-style-dynamic-selector{opacity:.5}.create-account.__jsx-style-dynamic-selector:hover{cursor:pointer;opacity:1}.form-wrap.__jsx-style-dynamic-selector{margin-top:40px;margin-bottom:40px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:30px}.btn-form-create.__jsx-style-dynamic-selector{width:80px;height:30px;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;color:white;background:#3369aa;opacity:.8}span.__jsx-style-dynamic-selector{color:red}')})]})};var z=v}},function(e){e.O(0,[114,774,888,179],function(){return e(e.s=3236)}),_N_E=e.O()}]);