"use strict";(self.webpackChunkcocos_docs_docusaurus=self.webpackChunkcocos_docs_docusaurus||[]).push([[956],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):A(A({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=l(n),d=o,m=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return n?r.createElement(m,A(A({ref:t},p),{},{components:n})):r.createElement(m,A({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,A=new Array(i);A[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[c]="string"==typeof e?e:o,A[1]=a;for(var l=2;l<i;l++)A[l]=n[l];return r.createElement.apply(null,A)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69303:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>A,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={},A="Extension Manager Panel",a={unversionedId:"editor/extension/extension-manager",id:"editor/extension/extension-manager",title:"Extension Manager Panel",description:"The Extension Manager is used to manage extensions within the editor. Click Extension -> Extension Manager in the main menu bar of Cocos Creator to open.",source:"@site/docs/editor/extension/extension-manager.md",sourceDirName:"editor/extension",slug:"/editor/extension/extension-manager",permalink:"/zh/docs/editor/extension/extension-manager",draft:!1,editUrl:"https://github.com/cocos/cocos-docs/docs/editor/extension/extension-manager.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Change the Name of a Extension",permalink:"/zh/docs/editor/extension/extension-change-name"},next:{title:"Getting Started Example - First Data Interaction",permalink:"/zh/docs/editor/extension/first-communication"}},s={},l=[],p={toc:l},c="wrapper";function u(e){let{components:t,...i}=e;return(0,o.kt)(c,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"extension-manager-panel"},"Extension Manager Panel"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Extension Manager")," is used to manage extensions within the editor. Click ",(0,o.kt)("strong",{parentName:"p"},"Extension -> Extension Manager")," in the main menu bar of Cocos Creator to open."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"extension-manager-menu",src:n(10053).Z,width:"171",height:"111"})),(0,o.kt)("p",null,"The Extension Manager panel is as follows."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"extension-manager",src:n(59723).Z,width:"984",height:"661"})),(0,o.kt)("p",null,"Its relevant functions are described as follows."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Extension type, divided into ",(0,o.kt)("strong",{parentName:"p"},"Cocos Official")," and ",(0,o.kt)("strong",{parentName:"p"},"Builtin"),", selected by drop-down menu. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Installed, click it to show the currently installed extensions.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"From left to right, ",(0,o.kt)("strong",{parentName:"p"},"Search Extensions"),", ",(0,o.kt)("strong",{parentName:"p"},"Import Extension")," and ",(0,o.kt)("strong",{parentName:"p"},"Refresh Extension List")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Search Extensions"),": When clicked, you can find the extensions within the current project by keywords in the input box shown below.\n",(0,o.kt)("img",{alt:"search",src:n(4316).Z,width:"489",height:"59"})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Import Extension"),": Click to import a new extension via zip file"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Refresh Exntesion List"),": Refresh the current status of all extensions"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Extension list."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"detail",src:n(41129).Z,width:"473",height:"73"})),(0,o.kt)("p",{parentName:"li"},"For each extension, the extension name, icon, version number and description are displayed on the left side.\nThe buttons on the right side are."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Open extension directory")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Delete")," the extension"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Enable/Disable")," the extension\nThe built-in and official extensions cannot be deleted or disabled, some of the buttons need to be visible by moving the mouse over the entry."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Details of extensions"))))}u.isMDXComponent=!0},41129:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},10053:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},59723:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/extension-manager-3ce12e0171e577aa468833d6ecfe5868.png"},4316:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);