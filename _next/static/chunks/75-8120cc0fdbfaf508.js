"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[75],{5634:function(e,t,n){n.d(t,{dV:function(){return s}});var i=n(4480);(0,i.cn)({key:"authorityKey",default:""});let s=(0,i.cn)({key:"loggedInUserIdKey",default:void 0});(0,i.cn)({key:"isRefetchedUserKey",default:!1})},8610:function(e,t,n){n.d(t,{AX:function(){return v},Nv:function(){return j},Xv:function(){return N},kp:function(){return g},os:function(){return h},pq:function(){return k},tm:function(){return y},vG:function(){return z},ym:function(){return w}});var i=n(7297),s=n(7283);function a(){let e=(0,i.Z)(["\n  mutation signup($userId: String!, $userPw: String!, $name: String!) {\n    signup(userId: $userId, userPw: $userPw, name: $name)\n  }\n"]);return a=function(){return e},e}function r(){let e=(0,i.Z)(["\n  query singleUser($userId: String!) {\n    singleUser(userId: $userId) {\n      id\n      userId\n      name\n      authority\n    }\n  }\n"]);return r=function(){return e},e}function o(){let e=(0,i.Z)(["\n  mutation login($userId: String!, $userPw: String!) {\n    login(userId: $userId, userPw: $userPw) {\n      userId\n      name\n      authority\n      token\n    }\n  }\n"]);return o=function(){return e},e}function l(){let e=(0,i.Z)(["\n  mutation {\n    logout\n  }\n"]);return l=function(){return e},e}function c(){let e=(0,i.Z)(["\n  query allUser {\n    allUser {\n      id\n      userId\n      userPw\n      name\n      authority\n      post {\n        title\n        writer\n      }\n    }\n  }\n"]);return c=function(){return e},e}function d(){let e=(0,i.Z)(["\n  query allPost {\n    allPost {\n      id\n      title\n      writer\n      content\n      createdAt\n      tags\n    }\n  }\n"]);return d=function(){return e},e}function x(){let e=(0,i.Z)(["\n  mutation createUser($input: UserCreateInput!) {\n    createUser(input: $input) {\n      id\n      writer\n      tags\n    }\n  }\n"]);return x=function(){return e},e}function b(){let e=(0,i.Z)(["\n  mutation createPost($input: PostInput!) {\n    createPost(input: $input) {\n      id\n    }\n  }\n"]);return b=function(){return e},e}function p(){let e=(0,i.Z)(["\n  mutation updateUser($input: UserUpdateInput!) {\n    updateUser(input: $input) {\n      id\n    }\n  }\n"]);return p=function(){return e},e}function f(){let e=(0,i.Z)(["\n  mutation updatePost($input: PostUpdateInput!) {\n    updatePost(input: $input) {\n      id\n    }\n  }\n"]);return f=function(){return e},e}function u(){let e=(0,i.Z)(["\n  mutation deleteUsers($userIds: [String!]!) {\n    deleteUsers(userIds: $userIds) {\n      id\n    }\n  }\n"]);return u=function(){return e},e}function m(){let e=(0,i.Z)(["\n  mutation deletePost($input: String!) {\n    deletePost(input: $input) {\n      id\n    }\n  }\n"]);return m=function(){return e},e}let g=(0,s.Ps)(a()),k=(0,s.Ps)(r()),w=(0,s.Ps)(o()),j=(0,s.Ps)(l());(0,s.Ps)(c());let y=(0,s.Ps)(d());(0,s.Ps)(x());let h=(0,s.Ps)(b()),v=(0,s.Ps)(p()),z=(0,s.Ps)(f());(0,s.Ps)(u());let N=(0,s.Ps)(m())},1994:function(e,t,n){var i=n(5893);n(7294);var s=n(5081);t.Z=function(){return(0,i.jsx)("div",{style:{padding:11.2},children:(0,i.jsx)(s.Z,{size:"large"})})}},6502:function(e,t,n){n.d(t,{Z:function(){return d}});var i=n(5893),s=n(1857),a=n.n(s),r=n(7294),o=n(7373);let l=e=>{let{destroyAll:t,isConfirmClicked:n,refetchData:s}=e,[l,c]=(0,r.useState)(!1),d=()=>{c(!0),s(),t()};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(o.Z,{open:n,onCancel:d,cancelButtonProps:{disabled:!0},footer:!0,width:600,centered:!0,className:"modal",children:(0,i.jsxs)("div",{className:"jsx-7274fcc97be321d4 confirm-wrap",children:[(0,i.jsx)("h3",{className:"jsx-7274fcc97be321d4",children:"Success!"}),(0,i.jsx)("div",{className:"jsx-7274fcc97be321d4 btn-area",children:(0,i.jsx)("div",{onClick:d,className:"jsx-7274fcc97be321d4 btn confirm",children:"OK"})})]})})}),(0,i.jsx)(a(),{id:"7274fcc97be321d4",children:".confirm-wrap.jsx-7274fcc97be321d4{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin-top:20px}.btn-area.jsx-7274fcc97be321d4{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;margin-top:20px;gap:15px}.btn.jsx-7274fcc97be321d4{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:35px;width:80px;-webkit-transition:.4s;-moz-transition:.4s;-o-transition:.4s;transition:.4s;border:none;-webkit-box-shadow:4px 4px 12px#4f5054;-moz-box-shadow:4px 4px 12px#4f5054;box-shadow:4px 4px 12px#4f5054;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;color:white;opacity:.8;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.confirm.jsx-7274fcc97be321d4{background:#3369aa}.btn.jsx-7274fcc97be321d4:hover{cursor:pointer;opacity:1}"})]})},c=e=>{let{msg:t,destroyAll:n,showModal:s,refetchData:c,gqlFn:d,bakedData:x,handleClose:b}=e,[p,f]=(0,r.useState)(!1),u=()=>{d({variables:{input:x}}),f(!0)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.Z,{open:s,onCancel:b,cancelButtonProps:{disabled:!0},footer:!0,width:600,centered:!0,className:"modal",children:(0,i.jsxs)("div",{className:"jsx-91470329f145aa08 confirm-wrap",children:[(0,i.jsx)("h3",{className:"jsx-91470329f145aa08",children:t}),(0,i.jsxs)("div",{className:"jsx-91470329f145aa08 btn-area",children:[(0,i.jsx)("div",{onClick:u,className:"jsx-91470329f145aa08 btn confirm",children:"Confirm"}),(0,i.jsx)("div",{onClick:b,className:"jsx-91470329f145aa08 btn delete",children:"Cancel"})]})]})}),(0,i.jsx)(l,{isConfirmClicked:p,destroyAll:n,refetchData:c})]}),(0,i.jsx)(a(),{id:"91470329f145aa08",children:".confirm-wrap.jsx-91470329f145aa08{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin-top:20px}.btn-area.jsx-91470329f145aa08{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;margin-top:20px;gap:15px}.btn.jsx-91470329f145aa08{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:35px;width:80px;-webkit-transition:.4s;-moz-transition:.4s;-o-transition:.4s;transition:.4s;border:none;-webkit-box-shadow:4px 4px 12px#4f5054;-moz-box-shadow:4px 4px 12px#4f5054;box-shadow:4px 4px 12px#4f5054;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;color:white;opacity:.8;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.confirm.jsx-91470329f145aa08{background:#3369aa}.delete.jsx-91470329f145aa08{background:tomato}.btn.jsx-91470329f145aa08:hover{cursor:pointer;opacity:1}"})]})};var d=c},8075:function(e,t,n){let i;n.d(t,{Z:function(){return U}});var s=n(5893),a=n(1857),r=n.n(a),o=n(1664),l=n.n(o),c=n(1163),d=n(7294),x=n(5675),b=n.n(x),p=n(1694);let f=e=>{let{url:t,title:n,active:i,priority:a}=e,{prefix:o}=(0,d.useContext)(p.ZP);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"jsx-7de54fce49cf3bb7 "+((!0==i?"menu-info active":"menu-info")||""),children:(0,s.jsxs)("div",{className:"jsx-7de54fce49cf3bb7 menu-title",children:[n,(0,s.jsx)(b(),{priority:a,alt:"imgProp",loader:e=>{let{src:t}=e;return"".concat(o).concat(t)},src:t,width:26,height:26}),(0,s.jsx)("br",{className:"jsx-7de54fce49cf3bb7"})]})}),(0,s.jsx)(r(),{id:"7de54fce49cf3bb7",children:".menu-info.jsx-7de54fce49cf3bb7{width:100px;height:45px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;color:#fff;font-size:14px;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-border-radius:15px;-moz-border-radius:15px;border-radius:15px;background:none;text-align:center;cursor:pointer}.menu-info.jsx-7de54fce49cf3bb7:hover{-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background:#03314f}.menu-info.active.jsx-7de54fce49cf3bb7{-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;background:#06426b}.menu-title.jsx-7de54fce49cf3bb7{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:7px;width:100%;text-align:center;line-height:16px}"})]})};var u=n(7887),m=n(7720),g=n(7373),k=n(319),w=n(4480),j=n(8610),y=n(9590),h=n(7536),v=n(6502);let{Option:z}=y.Z,N=e=>{var t,n,i;let{localStoreUser:a,showModal:o,handleCancel:l,refetchUserInfo:c,destroyAll:x}=e,[b]=(0,k.D)(j.AX),{register:p,handleSubmit:f,setValue:u,formState:{errors:m}}=(0,h.cI)(),[w,y]=(0,d.useState)(!1),[z,N]=(0,d.useState)(!1),[P,I]=(0,d.useState)(!1),[S,U]=(0,d.useState)({});(0,d.useEffect)(()=>{a&&(u("userId",a.userId),u("name",a.name))},[a]);let C=e=>{U({...e,token:null==a?void 0:a.token}),sessionStorage.setItem("loggedinUser",JSON.stringify({...e,token:null==a?void 0:a.token})),$()},Z=()=>{},$=()=>{y(!0)},F=()=>{y(!1)},A=()=>{x(),y(!1),g.Z.destroyAll(),N(!1),I(!1)},B=()=>{N(!0)},E=()=>{I(!0)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(g.Z,{title:"User Info",open:o,onCancel:()=>{I(!1),u("userId",JSON.parse(sessionStorage.getItem("loggedinUser")||"{}").userId),u("name",JSON.parse(sessionStorage.getItem("loggedinUser")||"{}").name),l()},cancelButtonProps:{disabled:!0},footer:!0,width:850,centered:!0,className:"modal",zIndex:5,children:(0,s.jsxs)("form",{onSubmit:f(C,Z),className:"jsx-ef6ea30285213b7d",children:[(0,s.jsxs)("div",{className:"jsx-ef6ea30285213b7d input-area",children:[(0,s.jsxs)("div",{className:"jsx-ef6ea30285213b7d input-row",children:[(0,s.jsx)("span",{className:"jsx-ef6ea30285213b7d",children:"User ID"}),(0,s.jsxs)("div",{style:{position:"relative"},className:"jsx-ef6ea30285213b7d",children:[(0,s.jsx)("input",{disabled:!0,value:null==a?void 0:a.userId,type:"text",style:{borderRadius:"9px",width:150},className:"jsx-ef6ea30285213b7d input-edit"}),(0,s.jsx)("div",{style:{position:"absolute",left:0,color:"rgb(255, 71, 92)",fontSize:"12px"},className:"jsx-ef6ea30285213b7d",children:null==m?void 0:null===(t=m.userId)||void 0===t?void 0:t.message})]}),(0,s.jsx)("span",{className:"jsx-ef6ea30285213b7d",children:"Name"}),(0,s.jsxs)("div",{style:{position:"relative"},className:"jsx-ef6ea30285213b7d",children:[(0,s.jsx)("input",{disabled:!P,...p("name",{required:"Please enter name.",minLength:{message:"Minimum length is 3 long",value:3},maxLength:{message:"Maximum length is 8 long",value:8},validate:{noSpace:e=>!e.includes(" ")||"Please enter without space."}}),type:"text",style:{borderRadius:"9px",width:150},className:"jsx-ef6ea30285213b7d input-edit"}),(0,s.jsx)("div",{style:{position:"absolute",left:0,color:"rgb(255, 71, 92)",fontSize:"12px"},className:"jsx-ef6ea30285213b7d",children:null==m?void 0:null===(n=m.name)||void 0===n?void 0:n.message})]})]}),!0==P?(0,s.jsxs)("div",{className:"jsx-ef6ea30285213b7d input-row",children:[(0,s.jsx)("span",{className:"jsx-ef6ea30285213b7d",children:"User PW"}),(0,s.jsxs)("div",{style:{position:"relative"},className:"jsx-ef6ea30285213b7d",children:[!0==z?(0,s.jsx)("input",{placeholder:"New Password",...p("userPw",{maxLength:{message:"Maximum length is 30 long",value:30},validate:{noSpace:e=>!(null==e?void 0:e.includes(" "))||"Please enter without space."}}),type:"text",style:{borderRadius:"9px",width:150},className:"jsx-ef6ea30285213b7d input-edit"}):(0,s.jsx)("div",{className:"jsx-ef6ea30285213b7d change-btn-wrap",children:(0,s.jsx)("button",{onClick:B,className:"jsx-ef6ea30285213b7d btn-change-pw",children:"Change"})}),(0,s.jsx)("div",{style:{position:"absolute",left:0,color:"rgb(255, 71, 92)",fontSize:"12px"},className:"jsx-ef6ea30285213b7d",children:null==m?void 0:null===(i=m.userPw)||void 0===i?void 0:i.message})]})]}):""]}),!0==P?(0,s.jsx)("div",{className:"jsx-ef6ea30285213b7d btn-area",children:(0,s.jsx)("button",{type:"submit",className:"jsx-ef6ea30285213b7d btn",children:"Save"})}):(0,s.jsx)("div",{className:"jsx-ef6ea30285213b7d btn-area",children:(0,s.jsx)("div",{onClick:E,className:"jsx-ef6ea30285213b7d btn edit",children:"Edit info"})})]})}),(0,s.jsx)(v.Z,{msg:"Are you sure to save the change?",destroyAll:A,showModal:w,refetchData:c,handleClose:F,bakedData:S,gqlFn:b}),(0,s.jsx)(r(),{id:"ef6ea30285213b7d",children:".btn-area.jsx-ef6ea30285213b7d{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;margin-top:50px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.btn.jsx-ef6ea30285213b7d{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:35px;width:80px;border:none;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;color:white;background:#3369aa;opacity:.8;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.edit.jsx-ef6ea30285213b7d{width:80px;background:#484b4f}.btn.jsx-ef6ea30285213b7d:hover{cursor:pointer;opacity:1}.btn.jsx-ef6ea30285213b7d:active{border:1px solid#2372db}.btn-change-pw.jsx-ef6ea30285213b7d{width:85px;height:32px;font-size:14px;font-weight:normal;background-color:#424951;color:white;border:none;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;opacity:.8}.btn-change-pw.jsx-ef6ea30285213b7d:hover{cursor:pointer;opacity:1}.input-area.jsx-ef6ea30285213b7d{margin-top:40px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:36px}.input-row.jsx-ef6ea30285213b7d{width:85%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.change-btn-wrap.jsx-ef6ea30285213b7d{-webkit-border-radius:20px;-moz-border-radius:20px;border-radius:20px;border:none;text-align:center;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:150px;margin-right:80px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.input-edit.jsx-ef6ea30285213b7d{margin-right:80px;background-color:#151b23;border:gray;outline:gray;height:32px;width:100%;border:none;-webkit-box-shadow:4px 4px 12px#4f5054;-moz-box-shadow:4px 4px 12px#4f5054;box-shadow:4px 4px 12px#4f5054;color:#a4a4a4;font-size:15px;padding-left:10px}.input-edit.jsx-ef6ea30285213b7d:focus{-webkit-transition:.4s;-moz-transition:.4s;-o-transition:.4s;transition:.4s;border:none;outline:1px solid#707070}span.jsx-ef6ea30285213b7d{display:inline-block;width:100px}"})]})};var P=n(5634),I=n(1994);let S=()=>{var e;let{prefix:t}=(0,d.useContext)(p.ZP),n=(0,c.useRouter)(),a=(0,u.a)(m.PB),o=null===(e=a.data)||void 0===e?void 0:e.user,[l,x]=(0,k.D)(j.Nv),[f,y]=(0,d.useState)(!1),[h,v]=(0,d.useState)(!1),[z,S]=(0,d.useState)(),[U,C]=(0,w.FV)(P.dV),{loading:Z,error:$,data:F,refetch:A}=(0,u.a)(j.pq,{variables:{userId:U||i}});(0,d.useEffect)(()=>{i=JSON.parse(sessionStorage.getItem("loggedinUser")||"{}").userId},[F]),(0,d.useEffect)(()=>{S(JSON.parse(sessionStorage.getItem("loggedinUser")||"{}"))},[o]),(0,d.useEffect)(()=>{var e,t;(null===(e=x.data)||void 0===e?void 0:e.logout)===!0?(sessionStorage.removeItem("loggedinUser"),(0,m.VW)(null),alert("Log out sucess!"),n.push("/login")):(null===(t=x.data)||void 0===t?void 0:t.logout)===!1&&alert("Log out Fail.")},[x.data]);let B=()=>{y(!0)},E=()=>{y(!1)},q=()=>{y(!1)},J=()=>{v(!0)},L=()=>{v(!1),l()},O=()=>{v(!1)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"jsx-78376e8ff33507c user-area",children:[(0,s.jsxs)("div",{onClick:B,className:"jsx-78376e8ff33507c user-area-icon",children:[(0,s.jsx)("div",{className:"jsx-78376e8ff33507c",children:F?F.singleUser.name:(0,s.jsx)(I.Z,{})}),"\xa0",(0,s.jsx)(b(),{alt:"astronaut",loader:e=>{let{src:n}=e;return"".concat(t).concat(n)},src:"/assets/astronaut.png",width:32,height:32})]}),(0,s.jsx)(N,{localStoreUser:z||null,showModal:f,refetchUserInfo:A,handleCancel:E,destroyAll:q}),(0,s.jsx)("div",{onClick:J,className:"jsx-78376e8ff33507c user-logout",children:(0,s.jsx)(b(),{alt:"logout",loader:e=>{let{src:n}=e;return"".concat(t).concat(n)},src:"/assets/logout.png",width:24,height:24})}),(0,s.jsx)(g.Z,{open:h,maskClosable:!0,onCancel:O,cancelButtonProps:{disabled:!0},footer:null,width:600,centered:!0,className:"modal",zIndex:11,children:(0,s.jsxs)("div",{className:"jsx-78376e8ff33507c confirm-wrap",children:[(0,s.jsx)("h3",{className:"jsx-78376e8ff33507c",children:"Are you sure to log out?"}),(0,s.jsxs)("div",{className:"jsx-78376e8ff33507c btn-area",children:[(0,s.jsx)("div",{onClick:L,className:"jsx-78376e8ff33507c btn confirm",children:"Confirm"}),(0,s.jsx)("div",{onClick:O,className:"jsx-78376e8ff33507c btn delete",children:"Cancel"})]})]})})]}),(0,s.jsx)(r(),{id:"78376e8ff33507c",children:".user-area.jsx-78376e8ff33507c{margin-left:15px;margin-right:15px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:20px;color:#fff;font-size:18px;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;line-height:24px;font-weight:700}.user-area-icon.jsx-78376e8ff33507c{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:auto;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;height:42px;border:none;opacity:.7;color:#3a7df2}.user-area-icon.jsx-78376e8ff33507c:hover{cursor:pointer;opacity:1}.user-area.jsx-78376e8ff33507c span.jsx-78376e8ff33507c{font-size:14px;font-weight:500}.user-logout.jsx-78376e8ff33507c{margin-left:40px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;opacity:.7}.user-logout.jsx-78376e8ff33507c:hover{cursor:pointer;opacity:1}.confirm-wrap.jsx-78376e8ff33507c{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;margin-top:20px}.btn-area.jsx-78376e8ff33507c{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;margin-top:20px;gap:15px}.btn.jsx-78376e8ff33507c{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:35px;width:80px;-webkit-transition:.4s;-moz-transition:.4s;-o-transition:.4s;transition:.4s;border:none;-webkit-box-shadow:4px 4px 12px#4f5054;-moz-box-shadow:4px 4px 12px#4f5054;box-shadow:4px 4px 12px#4f5054;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px;color:white;opacity:.8;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}.confirm.jsx-78376e8ff33507c{background:#3369aa}.delete.jsx-78376e8ff33507c{background:tomato}.btn.jsx-78376e8ff33507c:hover{cursor:pointer;opacity:1}.completed-add-user.jsx-78376e8ff33507c{margin-top:30px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}"})]})};function U(){var e;let t=(0,c.useRouter)(),{prefix:n}=(0,d.useContext)(p.ZP),i=t.pathname.split("/",2),a=(0,u.a)(m.PB),o=null==a?void 0:null===(e=a.data)||void 0===e?void 0:e.user;return(0,d.useEffect)(()=>{sessionStorage.getItem("loggedinUser")&&(0,m.VW)(JSON.parse(sessionStorage.getItem("loggedinUser")||"{}")),null==sessionStorage.getItem("loggedinUser")&&null==o&&(sessionStorage.removeItem("loggedinUser"),(0,m.VW)(null),t.push("/login"))},[o]),(0,s.jsxs)("nav",{className:"jsx-f25d072d7d0c1eb4 top-main",children:[(0,s.jsx)("div",{className:"jsx-f25d072d7d0c1eb4 logo",children:(0,s.jsx)(l(),{href:"/",legacyBehavior:!0,children:(0,s.jsxs)("a",{className:"jsx-f25d072d7d0c1eb4 logo-content",children:[(0,s.jsx)(b(),{alt:"jayLogo",loader:e=>{let{src:t}=e;return"".concat(n).concat(t)},src:"/assets/jayLogo.png",width:32,height:32,style:{borderRadius:"5px"}}),"Jay Web"]})})}),(0,s.jsxs)("div",{className:"jsx-f25d072d7d0c1eb4 right-side-menu",children:[(0,s.jsx)(l(),{href:"/mars",legacyBehavior:!0,children:(0,s.jsx)("a",{className:"jsx-f25d072d7d0c1eb4",children:(0,s.jsx)(f,{priority:!0,url:"/assets/mars.png",title:"Mars",active:"mars"==i[1]})})}),(0,s.jsx)(l(),{href:"/earth",legacyBehavior:!0,children:(0,s.jsx)("a",{className:"jsx-f25d072d7d0c1eb4",children:(0,s.jsx)(f,{priority:!0,url:"/assets/earth.png",title:"Earth",active:"earth"==i[1]})})}),(0,s.jsx)(S,{})]}),(0,s.jsx)(r(),{id:"f25d072d7d0c1eb4",children:"a.jsx-f25d072d7d0c1eb4{text-decoration:none;color:white}.top-main.jsx-f25d072d7d0c1eb4{height:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;background:-webkit-linear-gradient(right,#071528,#0b1d35);background:-moz-linear-gradient(right,#071528,#0b1d35);background:-o-linear-gradient(right,#071528,#0b1d35);background:linear-gradient(to left,#071528,#0b1d35);-webkit-box-shadow:0px 0px 5px rgba(0,0,0,25);-moz-box-shadow:0px 0px 5px rgba(0,0,0,25);box-shadow:0px 0px 5px rgba(0,0,0,25);-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.right-side-menu.jsx-f25d072d7d0c1eb4{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:20px;margin-right:40px}.logo.jsx-f25d072d7d0c1eb4{margin-left:20px}.logo-content.jsx-f25d072d7d0c1eb4{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:10px}"})]})}}}]);