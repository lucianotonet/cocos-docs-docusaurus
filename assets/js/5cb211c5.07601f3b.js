"use strict";(self.webpackChunkcocos_docs_docusaurus=self.webpackChunkcocos_docs_docusaurus||[]).push([[8495],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=d(a),u=r,f=s["".concat(p,".").concat(u)]||s[u]||c[u]||l;return a?n.createElement(f,i(i({ref:t},m),{},{components:a})):n.createElement(f,i({ref:t},m))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8887:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={},i="Custom Project Build Template",o={unversionedId:"editor/publish/custom-project-build-template",id:"editor/publish/custom-project-build-template",title:"Custom Project Build Template",description:"Cocos Creator supports custom build templates for each project. Add a build-templates/[platform] folder to the project path, and divide the sub-folder according to the platform name. Then all the files in this folder will be automatically copied to the build generated project according to the corresponding folder structure after the build. Currently, all platforms except the native platform support this function, the specific platform name can be referred to as the following custom build template supported platform list.",source:"@site/docs/editor/publish/custom-project-build-template.md",sourceDirName:"editor/publish",slug:"/editor/publish/custom-project-build-template",permalink:"/docs/editor/publish/custom-project-build-template",draft:!1,editUrl:"https://github.com/cocos/cocos-docs/docs/editor/publish/custom-project-build-template.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Extending Build Process",permalink:"/docs/editor/publish/custom-build-plugin"},next:{title:"Debugging JavaScript on Native Platforms",permalink:"/docs/editor/publish/debug-jsb"}},p={},d=[{value:"<code>ejs</code> type",id:"ejs-type",level:2},{value:"<code>json</code> Type",id:"json-type",level:3},{value:"Special Custom Build Template supported Platform list",id:"special-custom-build-template-supported-platform-list",level:2}],m={toc:d},s="wrapper";function c(e){let{components:t,...l}=e;return(0,r.kt)(s,(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"custom-project-build-template"},"Custom Project Build Template"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Cocos Creator")," supports custom build templates for each project. Add a ",(0,r.kt)("inlineCode",{parentName:"p"},"build-templates/[platform]")," folder to the project path, and divide the sub-folder according to the ",(0,r.kt)("strong",{parentName:"p"},"platform name"),". Then all the files in this folder will be automatically ",(0,r.kt)("strong",{parentName:"p"},"copied")," to the build generated project according to the corresponding folder structure after the build. Currently, all platforms except the native platform support this function, the specific ",(0,r.kt)("strong",{parentName:"p"},"platform name")," can be referred to as the following ",(0,r.kt)("strong",{parentName:"p"},"custom build template supported platform list"),"."),(0,r.kt)("p",null,"Folder Structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"project-folder\n |--assets\n |--build\n |--build-templates\n      |--web-mobile\n            // The file to be added, such as index.html\n            |--index.html\n")),(0,r.kt)("p",null,"If the current platform is ",(0,r.kt)("inlineCode",{parentName:"p"},"Web-Mobile"),", then ",(0,r.kt)("inlineCode",{parentName:"p"},"build-templates/web-mobile/index.html")," will be copied to ",(0,r.kt)("inlineCode",{parentName:"p"},"build/web-mobile/index.html"),"."),(0,r.kt)("p",null,"In addition, the file types currently supported by the build template include ",(0,r.kt)("strong",{parentName:"p"},"ejs type")," and ",(0,r.kt)("strong",{parentName:"p"},"json type"),". These two types will not copied directly but rather parsed. Please refer to the ",(0,r.kt)("strong",{parentName:"p"},"Special Custom Build Template Platform support list")," below for details on the support for these two template types by platform."),(0,r.kt)("h2",{id:"ejs-type"},(0,r.kt)("inlineCode",{parentName:"h2"},"ejs")," type"),(0,r.kt)("p",null,"Since the content of the package is not guaranteed to be exactly the same in every version, when the build template within the editor is updated, the developer also needs to update the build template within their project. For example, if the MD5 Cache option is checked at build time, taking ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html")," on the web platform as an example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"css")," file referenced in it will have an MD5 Hash suffix, which may not match the one in the original template and may not work. ",(0,r.kt)("br",null),"\nTo optimize this problem, a new way is added to use the template. Click on ",(0,r.kt)("strong",{parentName:"p"},"Project -> Create Preview Template")," in the main menu, and an ",(0,r.kt)("inlineCode",{parentName:"p"},"ejs")," template file will be generated for the corresponding platform."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"build template",src:a(82866).Z,width:"632",height:"270"})),(0,r.kt)("p",null,"Developers only need to customize the generated build template in the ",(0,r.kt)("inlineCode",{parentName:"p"},".ejs"),", the build will automatically synchronize the updates of the editor build template to the custom build template, and the frequently changed content will be synchronized to the sub-template (",(0,r.kt)("inlineCode",{parentName:"p"},".ejs"),") referenced by the template, so that the custom build template can be updated manually without frequent updates."),(0,r.kt)("p",null,"Taking the creation of a Web Mobile build template as an example, the generated build template directory structure is as follows:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"web-mobile",src:a(85744).Z,width:"850",height:"319"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": the copy template occurs after the rendered template. For example, if both ",(0,r.kt)("inlineCode",{parentName:"p"},"index.ejs")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html")," exist in this directory, the final packaged package will be the ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html")," file instead of the ",(0,r.kt)("inlineCode",{parentName:"p"},"index.ejs")," rendered file.")),(0,r.kt)("h3",{id:"json-type"},(0,r.kt)("inlineCode",{parentName:"h3"},"json")," Type"),(0,r.kt)("p",null,"Many mini games have their own configuration ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON")," files, like ",(0,r.kt)("inlineCode",{parentName:"p"},"game.json")," to WeChat Mini Games. Files in the build templates folder will just copy in ",(0,r.kt)("strong",{parentName:"p"},"default"),", but this configuration JSON will be merged instead of overwrite. Of course, it doesn't mean that all ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON")," file will be merged, you can check it in the tables below."),(0,r.kt)("h2",{id:"special-custom-build-template-supported-platform-list"},"Special Custom Build Template supported Platform list"),(0,r.kt)("p",null,"Most files placed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"build-templates/[platform]")," directory will be copied directly to the corresponding directory. In addition, many platforms support some template files with special name formats. The supported file with special name formats for build templates by the platform are as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Platform"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Actual Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Supported File Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Huawei AGC")),(0,r.kt)("td",{parentName:"tr",align:"left"},"huawei-agc"),(0,r.kt)("td",{parentName:"tr",align:"left"},"not supported yet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Alipay Mini Game")),(0,r.kt)("td",{parentName:"tr",align:"left"},"alipay-mini-game"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"game.json"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"ByteDance Mini Game")),(0,r.kt)("td",{parentName:"tr",align:"left"},"bytedance-mini-game"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"game.ejs"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"game.json"),"\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"project.config.json"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"OPPO Mini Game")),(0,r.kt)("td",{parentName:"tr",align:"left"},"oppo-mini-game"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"manifest.json"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Huawei Quick Game")),(0,r.kt)("td",{parentName:"tr",align:"left"},"huawei-quick-game"),(0,r.kt)("td",{parentName:"tr",align:"left"},"not supported yet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Cocos Play")),(0,r.kt)("td",{parentName:"tr",align:"left"},"cocos-play"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"game.config.json"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"vivo Mini Game")),(0,r.kt)("td",{parentName:"tr",align:"left"},"vivo-mini-game"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"project.config.json"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Xiaomi Quick Game")),(0,r.kt)("td",{parentName:"tr",align:"left"},"xiaomi-quick-game"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"manifest.json"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Baidu Mini Game")),(0,r.kt)("td",{parentName:"tr",align:"left"},"baidu-mini-game"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"game.json"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"project.swan.json"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"WeChat Mini Game")),(0,r.kt)("td",{parentName:"tr",align:"left"},"wechatgame"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"game.ejs"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"game.json"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"project.config.json"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Web Desktop")),(0,r.kt)("td",{parentName:"tr",align:"left"},"web-desktop"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"index.ejs"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Web Mobile")),(0,r.kt)("td",{parentName:"tr",align:"left"},"web-mobile"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"index.ejs"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Native")),(0,r.kt)("td",{parentName:"tr",align:"left"},"native"),(0,r.kt)("td",{parentName:"tr",align:"left"},"not supported yet")))))}c.isMDXComponent=!0},82866:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/build-template-b55dbec411a1e5cdccc53cce00ba0aab.png"},85744:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/web-mobile-d43517139017171f54d8cfbbc8f6a941.png"}}]);