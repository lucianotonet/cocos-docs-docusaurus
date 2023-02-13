"use strict";(self.webpackChunkcocos_docs_docusaurus=self.webpackChunkcocos_docs_docusaurus||[]).push([[3216],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),m=i,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return a?n.createElement(g,r(r({ref:t},u),{},{components:a})):n.createElement(g,r({ref:t},u))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},45941:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const o={},r="Mini Game Subpackage",s={unversionedId:"editor/publish/subpackage",id:"editor/publish/subpackage",title:"Mini Game Subpackage",description:"Some mini game platforms support subpackaging to divide resources, scripts and scenes. Including WeChat Mini Game, Baidu Mini Game, Xiaomi Quick Game, Bytedance Mini Game, Huawei Quick Game, OPPO Mini Game and vivo Mini Game.",source:"@site/docs/editor/publish/subpackage.md",sourceDirName:"editor/publish",slug:"/editor/publish/subpackage",permalink:"/pt/docs/editor/publish/subpackage",draft:!1,editUrl:"https://github.com/cocos/cocos-docs/docs/editor/publish/subpackage.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installation and Configuration of Native Development Environment",permalink:"/pt/docs/editor/publish/setup-native-development"},next:{title:"WeChat Mini Games Engine Plugin Instructions",permalink:"/pt/docs/editor/publish/wechatgame-plugin"}},l={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Build",id:"build",level:2},{value:"WeChat Mini Games",id:"wechat-mini-games",level:2},{value:"Subpackage Load Packet Size Limit",id:"subpackage-load-packet-size-limit",level:3},{value:"vivo Mini Games",id:"vivo-mini-games",level:2},{value:"Subpackage Load Packet Size Limit",id:"subpackage-load-packet-size-limit-1",level:3}],u={toc:p},c="wrapper";function d(e){let{components:t,...o}=e;return(0,i.kt)(c,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mini-game-subpackage"},"Mini Game Subpackage"),(0,i.kt)("p",null,"Some mini game platforms support subpackaging to divide resources, scripts and scenes. Including WeChat Mini Game, Baidu Mini Game, Xiaomi Quick Game, Bytedance Mini Game, Huawei Quick Game, OPPO Mini Game and vivo Mini Game."),(0,i.kt)("p",null,"Cocos Creator supports ",(0,i.kt)("a",{parentName:"p",href:"../../asset/bundle.md"},"Asset Bundle")," starting in v2.4, which allows developers to divide contents that need to be subpackaged into multiple Asset Bundles, and these Asset Bundles will be built into subpackages of the mini game. Only the necessary main packages will be downloaded when you startup the game, and these subpackages will not be loaded, but will be manually loaded by the developer during the game. This effectively reduces the time for the game startup."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"The Asset Bundle is configured in ",(0,i.kt)("strong",{parentName:"p"},"folders"),". When we select a folder in the ",(0,i.kt)("strong",{parentName:"p"},"Assets")," panel, the ",(0,i.kt)("strong",{parentName:"p"},"Inspector")," panel will show a ",(0,i.kt)("strong",{parentName:"p"},"Is Bundle")," option, if set, the folder-related configuration options will appear:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"subpackage configuration",src:a(11073).Z,width:"417",height:"301"})),(0,i.kt)("p",null,"In addition to the general ",(0,i.kt)("a",{parentName:"p",href:"../../asset/bundle.md#configuration"},"Asset Bundle Configuration"),", the main settings to focus on for the mini game subpackage are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Set the ",(0,i.kt)("strong",{parentName:"li"},"Target Platform")," to the mini game platform that you want to subpackage, and set the ",(0,i.kt)("strong",{parentName:"li"},"Compression Type")," to the ",(0,i.kt)("strong",{parentName:"li"},"Mini Game Subpackage"),"."),(0,i.kt)("li",{parentName:"ul"},"The mini game subpackage can only be placed locally and cannot be configured as remote packages, so the ",(0,i.kt)("strong",{parentName:"li"},"Is Remote Bundle")," option cannot be checked.")),(0,i.kt)("p",null,"Once configured, click the ",(0,i.kt)("strong",{parentName:"p"},"Check")," button on the top right and the folder will be configured as a Asset Bundle."),(0,i.kt)("h2",{id:"build"},"Build"),(0,i.kt)("p",null,"When building, the ",(0,i.kt)("strong",{parentName:"p"},"Main Bundle Compression Type")," in the ",(0,i.kt)("strong",{parentName:"p"},"Build")," panel should be set to ",(0,i.kt)("strong",{parentName:"p"},"Mini Game Subpackage"),". For detailed instructions, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"../../asset/bundle.md#compression-type"},"Asset Bundle - Compression Type")," documentation."),(0,i.kt)("p",null,"After the project is built, this Asset Bundle folder is packaged into the ",(0,i.kt)("inlineCode",{parentName:"p"},"subpackages")," folder in the release package directory of the mini game platform. Each folder contained in this folder is an Asset Bundle."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"For example"),", if the ",(0,i.kt)("inlineCode",{parentName:"p"},"assets/scene")," folder in the Hello World project is configured as an Asset Bundle on the WeChat Mini Game, then after the project is built, a ",(0,i.kt)("inlineCode",{parentName:"p"},"scene")," folder is generated in the ",(0,i.kt)("inlineCode",{parentName:"p"},"subpackages")," folder in the release package directory, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"scene")," folder is an Asset Bundle."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"subpackage",src:a(25166).Z,width:"601",height:"235"})),(0,i.kt)("h2",{id:"wechat-mini-games"},"WeChat Mini Games"),(0,i.kt)("p",null,"When building for the WeChat Mini Game, the configuration of the Asset Bundle will be automatically generated into the ",(0,i.kt)("inlineCode",{parentName:"p"},"game.json")," configuration file of the WeChat Mini Games release package directory according to the rules."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"profile",src:a(64750).Z,width:"412",height:"320"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note"),": WeChat Mini Games require a specific version to support the Subpackage feature. WeChat 6.6.7 client, 2.1.0 and above base library support, please update to the latest client version. Developer tools please use version ",(0,i.kt)("strong",{parentName:"p"},"1.02.1806120")," and above. After updating the developer tools, don't forget to modify the version of ",(0,i.kt)("strong",{parentName:"p"},"Details -> Local Settings -> Debug Base library")," to 2.1.0 and above in the WeChat DevTools:"),(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{alt:"devtools setting",src:a(40493).Z,width:"399",height:"319"}))),(0,i.kt)("h3",{id:"subpackage-load-packet-size-limit"},"Subpackage Load Packet Size Limit"),(0,i.kt)("p",null,"Currently, the size of the WeChat Mini Game subpackage has following restrictions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The size of all subpackage of the entire Mini Game can not exceed ",(0,i.kt)("strong",{parentName:"li"},"20M"),"."),(0,i.kt)("li",{parentName:"ul"},"The size of a single subpackage is not limited."),(0,i.kt)("li",{parentName:"ul"},"The main package size can not exceed ",(0,i.kt)("strong",{parentName:"li"},"4M"),".")),(0,i.kt)("p",null,"Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/minigame/en/dev/guide/base-ability/sub-packages.html"},"WeChat Mini Game Subpackage Loading")," documentation for details."),(0,i.kt)("h2",{id:"vivo-mini-games"},"vivo Mini Games"),(0,i.kt)("p",null,"When building for the vivo Mini Game, the configuration of the Asset Bundle will be automatically generated into the ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest.json")," configuration file in the ",(0,i.kt)("inlineCode",{parentName:"p"},"vivo-mini-game/src")," directory of the vivo Mini Game release package according to the rules."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"profile",src:a(74538).Z,width:"374",height:"413"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Notes"),":"),(0,i.kt)("ol",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Starting with ",(0,i.kt)("strong",{parentName:"p"},"1051")," version, ",(0,i.kt)("strong",{parentName:"p"},"Quick App & vivo Mini Game Debugger")," supports the subpackage loading of vivo Mini Game. Versions lower than 1051 do not support subpackage loading, but they are also compatible. If a subpackage is configured in the editor's ",(0,i.kt)("strong",{parentName:"p"},"Properties")," panel, it will not affect the normal operation of the game. Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://minigame.vivo.com.cn/documents/#/lesson/base/subpackage?id=%e8%bf%90%e8%a1%8c%e6%97%b6%e5%85%bc%e5%ae%b9"},"vivo Mini Game Subpackage Loading -- Runtime Compatibility [cn]")," documentation for details.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Unlike other mini game platforms, the Asset Bundle folder for the vivo Mini Game will be generated in the ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," directory of release package ",(0,i.kt)("inlineCode",{parentName:"p"},"vivo-mini-game")," directory after the project is built."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"vivo-subpackages",src:a(44617).Z,width:"547",height:"235"}))))),(0,i.kt)("h3",{id:"subpackage-load-packet-size-limit-1"},"Subpackage Load Packet Size Limit"),(0,i.kt)("p",null,"Currently, the size of the vivo Mini Game subpackage is limited to 20M (4M for main package and 16M for subpackages)."),(0,i.kt)("p",null,"Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://minigame.vivo.com.cn/documents/#/lesson/base/subpackage"},"vivo Mini Game Subpackage Loading [cn]")," documentation for details."))}d.isMDXComponent=!0},40493:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/devtools-setting-c38be95e58b63d315c2a5b80a64b6e93.png"},64750:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/profile-be11d7a82d9134e2cafe93b14a8b9f67.png"},11073:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/subpackage-config-65737f496c3ed2d8f629c42f7b0d88f2.png"},25166:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},74538:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vivo-profile-3df4fef63cf1644c45c297740afe88cf.png"},44617:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vivo-subpackages-d8edcbda63aa5ed8b32808dcf8193916.png"}}]);