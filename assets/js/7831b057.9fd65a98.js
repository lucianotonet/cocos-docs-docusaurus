"use strict";(self.webpackChunkcocos_docs_docusaurus=self.webpackChunkcocos_docs_docusaurus||[]).push([[3200],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),f=o,m=c["".concat(l,".").concat(f)]||c[f]||u[f]||r;return n?i.createElement(m,a(a({ref:t},d),{},{components:n})):i.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<r;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},43708:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=n(87462),o=(n(67294),n(3905));const r={},a="Definition of Extension",s={unversionedId:"editor/extension/define",id:"editor/extension/define",title:"Definition of Extension",description:"The extension package needs to have all the features and some basic information predefined in the package.json file, as follows.",source:"@site/docs/editor/extension/define.md",sourceDirName:"editor/extension",slug:"/editor/extension/define",permalink:"/docs/editor/extension/define",draft:!1,editUrl:"https://github.com/cocos/cocos-docs/docs/editor/extension/define.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Extension Templates and Compile Builds",permalink:"/docs/editor/extension/create-extension"},next:{title:"Change the Name of a Extension",permalink:"/docs/editor/extension/extension-change-name"}},l={},p=[{value:"package_version",id:"package_version",level:2},{value:"version",id:"version",level:2},{value:"name",id:"name",level:2},{value:"title",id:"title",level:2},{value:"description",id:"description",level:2},{value:"author",id:"author",level:2},{value:"editor",id:"editor",level:2},{value:"main",id:"main",level:2},{value:"panels",id:"panels",level:2},{value:"contributions",id:"contributions",level:2},{value:"scripts",id:"scripts",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"definition-of-extension"},"Definition of Extension"),(0,o.kt)("p",null,"The extension package needs to have all the features and some basic information predefined in the ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file, as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JSON5"},'{\n    "package_version": 2,\n    "version": "1.0.0",\n    "name": "first-panel",\n    "tilte": "i18n:first-panel.title",\n    "description": "i18n:first-panel.description",\n    "author": "Cocos Creator",\n    "editor": ">=3.4.2",\n    "main": "./dist/main.js",\n    "dependencies": { ... },\n    "devDependencies": { ... },\n    "panels": { ... },\n    "contributions": {\n    },\n    "scripts": {\n        "build": "tsc -b",\n        "watch": "tsc -w"\n    }\n}\n')),(0,o.kt)("h2",{id:"package_version"},"package_version"),(0,o.kt)("p",null,"Type {number} Required"),(0,o.kt)("p",null,"The version number of the extension, which is used to submit the version verification of the extension, as well as some upgrades of the extension itself, and data migration as a basis for comparison."),(0,o.kt)("h2",{id:"version"},"version"),(0,o.kt)("p",null,"Type {string} Required"),(0,o.kt)("p",null,"The version number of the extension, mainly used for display, if you want to make logical judgments, ",(0,o.kt)("inlineCode",{parentName:"p"},"package_version")," is recommended."),(0,o.kt)("h2",{id:"name"},"name"),(0,o.kt)("p",null,"Type {string} Required"),(0,o.kt)("p",null,"The name of the extension, this name should correspond to the extension folder."),(0,o.kt)("h2",{id:"title"},"title"),(0,o.kt)("p",null,"Type {string} Optional"),(0,o.kt)("p",null,"The title of the extension, when ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," is configured, ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," will be used when the extension needs to be displayed, supports ",(0,o.kt)("a",{parentName:"p",href:"/docs/editor/extension/i18n"},"Multilingual System (i18n)")," configuration."),(0,o.kt)("h2",{id:"description"},"description"),(0,o.kt)("p",null,"Type {string} Optional"),(0,o.kt)("p",null,"The description of the extension, a brief overview of the extension's functionality. Supports ",(0,o.kt)("a",{parentName:"p",href:"/docs/editor/extension/i18n"},"Multilingual System (i18n)")," for multilingual syntax."),(0,o.kt)("h2",{id:"author"},"author"),(0,o.kt)("p",null,"type {string} optional"),(0,o.kt)("p",null,'The name of the author of the extension, which will be shown in the "Extension Manager".'),(0,o.kt)("h2",{id:"editor"},"editor"),(0,o.kt)("p",null,"type {string} Optional"),(0,o.kt)("p",null,"Description of the editor version supported by the extension, conforming to the ",(0,o.kt)("a",{parentName:"p",href:"https://semver.org/"},(0,o.kt)("inlineCode",{parentName:"a"},"semver")," semantic version control specification"),"."),(0,o.kt)("h2",{id:"main"},"main"),(0,o.kt)("p",null,"type {string} Optional"),(0,o.kt)("p",null,"A relative path to a js file that defines the function entry file. When the extension starts, the js file pointed to by the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," field will be executed and the corresponding method will be triggered or executed according to the flow."),(0,o.kt)("h2",{id:"panels"},"panels"),(0,o.kt)("p",null,"Type {","[name: string]",": PanelInfo} Optional"),(0,o.kt)("p",null,"The panel information defined within the extension. You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"Editor.Panel.open('hello-world.list');")," to open the defined panel. For details, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/editor/extension/panel"},"Extension Panel"),"."),(0,o.kt)("h2",{id:"contributions"},"contributions"),(0,o.kt)("p",null,"type {","[name: string]",": any} optional"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"contributions")," provides the ability to interact with the editor's feature system, see the documentation ",(0,o.kt)("a",{parentName:"p",href:"/docs/editor/extension/contributions"},"Extend existing functionality"),"."),(0,o.kt)("h2",{id:"scripts"},"scripts"),(0,o.kt)("p",null,"type {","[name: string]",": any} required"),(0,o.kt)("p",null,"Extends the executable command line."))}u.isMDXComponent=!0}}]);