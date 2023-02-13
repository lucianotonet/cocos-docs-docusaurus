"use strict";(self.webpackChunkcocos_docs_docusaurus=self.webpackChunkcocos_docs_docusaurus||[]).push([[556],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var s=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=s.createContext({}),c=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?s.createElement(g,a(a({ref:t},p),{},{components:n})):s.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:i,a[1]=r;for(var c=2;c<o;c++)a[c]=n[c];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79098:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=n(87462),i=(n(67294),n(3905));const o={},a="Customized Messages",r={unversionedId:"editor/extension/contributions-messages",id:"editor/extension/contributions-messages",title:"Customized Messages",description:"In the Cocos Creator editor architecture, all interactions are implemented through message communication, and this article will explain how to customize a message.",source:"@site/docs/editor/extension/contributions-messages.md",sourceDirName:"editor/extension",slug:"/editor/extension/contributions-messages",permalink:"/zh/docs/editor/extension/contributions-messages",draft:!1,editUrl:"https://github.com/cocos/cocos-docs/docs/editor/extension/contributions-messages.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Customize the Main Menu",permalink:"/zh/docs/editor/extension/contributions-menu"},next:{title:"Extending the Preferences Panel",permalink:"/zh/docs/editor/extension/contributions-preferences"}},l={},c=[{value:"View the Public Message List",id:"view-the-public-message-list",level:2},{value:"Define a message",id:"define-a-message",level:2},{value:"public",id:"public",level:3},{value:"description",id:"description",level:3},{value:"doc",id:"doc",level:3},{value:"methods",id:"methods",level:3},{value:"Define broadcast message",id:"define-broadcast-message",level:2}],p={toc:c},d="wrapper";function m(e){let{components:t,...o}=e;return(0,i.kt)(d,(0,s.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"customized-messages"},"Customized Messages"),(0,i.kt)("p",null,"In the Cocos Creator editor architecture, all interactions are implemented through message communication, and this article will explain how to customize a message."),(0,i.kt)("h2",{id:"view-the-public-message-list"},"View the Public Message List"),(0,i.kt)("p",null,"Find ",(0,i.kt)("strong",{parentName:"p"},"Developer")," -> ",(0,i.kt)("strong",{parentName:"p"},"Message Manager")," in the top menu bar of the editor to open the message management panel, which shows the public messages of each system of the editor and their descriptions."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"extension-message-mgr-menu",src:n(84308).Z,width:"800",height:"331"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"extension-message-mgr-panel",src:n(19295).Z,width:"800",height:"550"})),(0,i.kt)("h2",{id:"define-a-message"},"Define a message"),(0,i.kt)("p",null,"Only messages defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"contributions.messages")," field of the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file can be used. The messages are defined as follows."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "hello-world",\n    "contributions": {\n        "messages": {\n            "test-messasge": {\n                "public": false,\n                "description": "",\n                "doc": "",\n                "methods": []\n            }\n        }\n    }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"test-messasge")," is the name of the message, and we will explain the meaning of each property one by one."),(0,i.kt)("h3",{id:"public"},"public"),(0,i.kt)("p",null,"Type ",(0,i.kt)("inlineCode",{parentName:"p"},"{string}")," Optional"),(0,i.kt)("p",null,"Whether to display this message externally, if true, the basic information of this message will be displayed on the message list interface."),(0,i.kt)("h3",{id:"description"},"description"),(0,i.kt)("p",null,"Type ",(0,i.kt)("inlineCode",{parentName:"p"},"{string}")," Optional"),(0,i.kt)("p",null,"If public is true, some simple descriptions will be displayed in the message list, supporting ",(0,i.kt)("inlineCode",{parentName:"p"},"i18n: key")," syntax."),(0,i.kt)("h3",{id:"doc"},"doc"),(0,i.kt)("p",null,"Type ",(0,i.kt)("inlineCode",{parentName:"p"},"{string}")," Optional"),(0,i.kt)("p",null,"If public is true, some documents of this message will be displayed, supporting i18n:key syntax."),(0,i.kt)("p",null,"This document is written and rendered in markdown format."),(0,i.kt)("h3",{id:"methods"},"methods"),(0,i.kt)("p",null,"Type ",(0,i.kt)("inlineCode",{parentName:"p"},"{string[]}")," Optional"),(0,i.kt)("p",null,"The method queue triggered by the message."),(0,i.kt)("p",null,"This is an array of strings. The strings are methods on the extension or panel."),(0,i.kt)("p",null,"If it is a method on the extension, directly define ",(0,i.kt)("inlineCode",{parentName:"p"},"methodName"),", if you want to trigger a method on the panel, you must fill in ",(0,i.kt)("inlineCode",{parentName:"p"},"panelName.methodName"),". For example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"ready")," method of the scene manager is ",(0,i.kt)("inlineCode",{parentName:"p"},"scene:ready"),"."),(0,i.kt)("h2",{id:"define-broadcast-message"},"Define broadcast message"),(0,i.kt)("p",null,"When developing an extension, you need to send some notifications to other extension after completing an action. If these notifications also need to be displayed on the ",(0,i.kt)("strong",{parentName:"p"},"Developer -> Message List")," panel, you can define the message like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "hello-world",\n    "contributions": {\n        "messages": {\n            "hello-world:ready": {\n                "public": true,\n                "description": "hello-world ready notification"\n            }\n        }\n    }\n}\n')),(0,i.kt)("p",null,"For more information, please refer to the document ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/editor/extension/messages"},"Message System"),"."))}m.isMDXComponent=!0},84308:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/extension-message-mgr-menu-fd858faa0b6895025c8f353ec9f9ec8a.png"},19295:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/extension-message-mgr-panel-6b3b72f52409aae7e1cf4bd9cbd6e9c4.png"}}]);