import{r as d}from"./index.ed373d49.js";var c={exports:{}},o={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h=d,f=Symbol.for("react.element"),u=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,v=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function m(t,s,n){var i,l={},a=null,x=null;n!==void 0&&(a=""+n),s.key!==void 0&&(a=""+s.key),s.ref!==void 0&&(x=s.ref);for(i in s)j.call(s,i)&&!b.hasOwnProperty(i)&&(l[i]=s[i]);if(t&&t.defaultProps)for(i in s=t.defaultProps,s)l[i]===void 0&&(l[i]=s[i]);return{$$typeof:f,type:t,key:a,ref:x,props:l,_owner:v.current}}o.Fragment=u;o.jsx=m;o.jsxs=m;c.exports=o;var e=c.exports;function r({isMobile:t,text:s,link:n}){return e.jsx("a",{href:n,className:`${t?"bg-[#1a1d20] hover:bg-white rounded-lg hover:text-[#1a1d20]  active:bg-gray-600":"hover:bg-[#1a1d20] rounded-lg hover:text-white active:bg-gray-600"} focus:outline-none focus:ring focus:ring-gray-300 p-2`,children:s})}function N(){const[t,s]=d.useState(!1),n=()=>{s(!t)};return e.jsx("div",{children:e.jsx("nav",{children:e.jsxs("div",{className:"border-2  border-[#E6E9ED];",children:[e.jsx("div",{className:"m-2 p-2 container mx-auto",children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{children:e.jsx("a",{href:"/",children:e.jsx("img",{src:"/osmkerala.png",alt:"logo",width:100})})}),e.jsx("a",{href:"/",children:e.jsx("div",{className:"text-3xl font-bold",children:"OSM Kerala"})})]}),e.jsxs("div",{className:"hidden text-[#2b2b2b] font-semibold md:flex space-x-4",children:[e.jsx(r,{isMobile:!1,link:"/",text:"HOME"}),e.jsx(r,{isMobile:!1,link:"/about",text:"ABOUT US"}),e.jsx(r,{isMobile:!1,link:"/community",text:"COMMUNITY"}),e.jsx(r,{isMobile:!1,link:"/statement",text:"STATEMENT"}),e.jsx(r,{isMobile:!1,link:"/maintainers",text:"MAINTAINERS"})]}),e.jsx("div",{className:"md:hidden",children:e.jsx("button",{onClick:n,className:"text-[#2C3136] p-2 m-2 hover:text-gray-300",children:t?e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-black",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})}):e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-black ",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})})})]})}),t&&e.jsxs("div",{className:"absolute top-13 right-5  text-semiblod flex-col text-right w-fit justify-self-end rounded-lg bg-[#1a1d20] text-[#ffffff]",children:[e.jsx("div",{className:"m-2 p-2 mr-8",children:e.jsx(r,{isMobile:!0,link:"/",text:"HOME"})}),e.jsx("div",{className:"m-2 p-2 mr-8",children:e.jsx(r,{isMobile:!0,link:"/about",text:"ABOUT US"})}),e.jsx("div",{className:"m-2 p-2 mr-8",children:e.jsx(r,{isMobile:!0,link:"/statement",text:"STATEMENT"})}),e.jsx("div",{className:"m-2 p-2 mr-8",children:e.jsx(r,{isMobile:!0,link:"/community",text:"COMMUNITY"})}),e.jsx("div",{className:"m-2 p-2 mr-8",children:e.jsx(r,{isMobile:!0,link:"/maintainers",text:"MAINTAINERS"})})]})]})})})}export{N as default};
