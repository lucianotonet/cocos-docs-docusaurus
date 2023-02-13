"use strict";(self.webpackChunkcocos_docs_docusaurus=self.webpackChunkcocos_docs_docusaurus||[]).push([[8161],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(a),h=r,u=d["".concat(p,".").concat(h)]||d[h]||c[h]||i;return a?n.createElement(u,o(o({ref:t},m),{},{components:a})):n.createElement(u,o({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},52585:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={},o="Publish to ByteDance Mini Games",l={unversionedId:"editor/publish/publish-bytedance-mini-game",id:"editor/publish/publish-bytedance-mini-game",title:"Publish to ByteDance Mini Games",description:"Note: some platforms only have Chinese documentation available when visiting the platform's website. It may be necessary to use Google Translate in-order to review the documentation.",source:"@site/docs/editor/publish/publish-bytedance-mini-game.md",sourceDirName:"editor/publish",slug:"/editor/publish/publish-bytedance-mini-game",permalink:"/pt/docs/editor/publish/publish-bytedance-mini-game",draft:!1,editUrl:"https://github.com/cocos/cocos-docs/docs/editor/publish/publish-bytedance-mini-game.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Publish to Baidu Mini Games",permalink:"/pt/docs/editor/publish/publish-baidu-mini-game"},next:{title:"Publish to Cocos Play",permalink:"/pt/docs/editor/publish/publish-cocos-play"}},p={},s=[{value:"Preparation",id:"preparation",level:2},{value:"Publishing Process",id:"publishing-process",level:2},{value:"Build Options",id:"build-options",level:3},{value:"Native Physics",id:"native-physics",level:2},{value:"Subpackage Loading",id:"subpackage-loading",level:2},{value:"Asset Management for ByteDance Mini Game Environment",id:"asset-management-for-bytedance-mini-game-environment",level:2},{value:"Reference documentation",id:"reference-documentation",level:2}],m={toc:s},d="wrapper";function c(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"publish-to-bytedance-mini-games"},"Publish to ByteDance Mini Games"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": some platforms only have Chinese documentation available when visiting the platform's website. It may be necessary to use Google Translate in-order to review the documentation.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ByteDance Mini Games")," are developed based on ByteDance full products, which do not require users to download. This is a brand-new game type that can be played on tap."),(0,r.kt)("p",null,"The game submission, review and release process of a mini-game needs to comply with the requirements and standard processes of the Byte official specification. For specific information, please refer to the links at the end of this document."),(0,r.kt)("h2",{id:"preparation"},"Preparation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the ",(0,r.kt)("a",{parentName:"p",href:"https://microapp.bytedance.com/docs/zh-CN/mini-game/develop/developer-instrument/developer-instrument-update-and-download"},"ByteDance DevTools [cn]")," and install it..")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://microapp.bytedance.com/docs/zh-CN/mini-game/introduction/plugin-reference/sign/"},"ByteDance Mini Game Access Guide [cn]")," to register, login and apply for mini games on the ",(0,r.kt)("a",{parentName:"p",href:"https://microapp.bytedance.com/"},"ByteDance Developer Platform [cn]"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After the application is approved, find the appid in ",(0,r.kt)("strong",{parentName:"p"},"Development Management -> Development Settings")," of the developer platform."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"appid",src:a(98990).Z,width:"938",height:"202"})))),(0,r.kt)("h2",{id:"publishing-process"},"Publishing Process"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use Cocos Creator to open the project to be published, open the ",(0,r.kt)("strong",{parentName:"p"},"Build")," panel from ",(0,r.kt)("strong",{parentName:"p"},"Menu Bar -> Project"),", select ",(0,r.kt)("strong",{parentName:"p"},"ByteDance Mini Game")," in ",(0,r.kt)("strong",{parentName:"p"},"Platform"),", fill in the ",(0,r.kt)("strong",{parentName:"p"},"appid"),", and click ",(0,r.kt)("strong",{parentName:"p"},"Build"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"build",src:a(70325).Z,width:"557",height:"772"})),(0,r.kt)("p",{parentName:"li"},"Click on the ",(0,r.kt)("strong",{parentName:"p"},"ByteDance Mini Game")," below to expand the build options configuration of ByteDance Mini Game:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"ByteDance options",src:a(72521).Z,width:"549",height:"301"})),(0,r.kt)("p",{parentName:"li"},"For the general build options settings, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/pt/docs/editor/publish/build-options"},"General Build Options")," for details. The ByteDance Mini Games specific build options are shown below, please refer to the ",(0,r.kt)("strong",{parentName:"p"},"Build Options")," section below for the filling rules.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After the relevant parameters of the ",(0,r.kt)("strong",{parentName:"p"},"Build")," panel are set, click ",(0,r.kt)("strong",{parentName:"p"},"Build")," button.",(0,r.kt)("br",null),"When the build is complete, click the folder icon button below the corresponding build task to open the build release path, notice that a directory ",(0,r.kt)("inlineCode",{parentName:"p"},"bytedance-mini-game")," (with the same name as the Build Task Name) is generated in the default release path ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," directory, which already contains the configuration files ",(0,r.kt)("inlineCode",{parentName:"p"},"game.json")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"project.config.json")," of the ByteDance Mini Games environment."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"package",src:a(66698).Z,width:"556",height:"333"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use the ",(0,r.kt)("strong",{parentName:"p"},"ByteDance DevTools")," to open the ",(0,r.kt)("inlineCode",{parentName:"p"},"bytedance-mini-game")," folder generated by the build, open the ByteDance game project and preview the debugging game content. Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://microapp.bytedance.com/docs/zh-CN/mini-game/develop/developer-instrument/development-assistance/mini-app-developer-instrument"},"Introduction to ByteDance DevTools [cn]")," for details on how to use the developer tools."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"tool",src:a(61249).Z,width:"1840",height:"994"})))),(0,r.kt)("h3",{id:"build-options"},"Build Options"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Options"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Field name (for publishing with command line)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Start Scene Asset Bundle")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If set, the start scene and its related dependent resources are built into the built-in Asset Bundle \u2014 ",(0,r.kt)("a",{parentName:"td",href:"../../asset/bundle.md#%E5%86%85%E7%BD%AE-asset-bundle"},"start-scene")," to speed up the resource loading of the start scene."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"startSceneAssetBundle"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Orientation")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Device orientation, it will be written to ",(0,r.kt)("inlineCode",{parentName:"td"},"game.json")," file."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"orientation"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"AppID")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The appid of the ByteDance Mini Games, it will be written to ",(0,r.kt)("inlineCode",{parentName:"td"},"project.config.json")," file."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"appid"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Remote server address")),(0,r.kt)("td",{parentName:"tr",align:"left"},"This option is used to fill in the address of the remote server where the resources are stored. Developers need to manually upload the ",(0,r.kt)("inlineCode",{parentName:"td"},"remote")," folder from the release package directory to the filled resource server after build."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"remoteServerAddress"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Open data context root")),(0,r.kt)("td",{parentName:"tr",align:"left"},"For access to Open Data Context, please refer to the ",(0,r.kt)("a",{parentName:"td",href:"/pt/docs/editor/publish/build-open-data-context"},"Open Data Context")," documentation for details."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"buildOpenDataContextTemplate"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Native PhysX Physics System")),(0,r.kt)("td",{parentName:"tr",align:"left"},"This option is used to set whether to use the PhysX physics system, please see the ",(0,r.kt)("strong",{parentName:"td"},"Native Physics")," section below for more details."),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,r.kt)("h2",{id:"native-physics"},"Native Physics"),(0,r.kt)("p",null,"The ByteDance platform has always been committed to providing developers with the more powerful performance and basic capabilities. TikTok will provide PhysX native physics interfaces for ByteDance mini games in v16.3 and later versions."),(0,r.kt)("p",null,"Cocos Creator and the ByteDance platform have conducted in-depth collaboration, with the experimental feature in ",(0,r.kt)("strong",{parentName:"p"},"v3.2")," to support the use of PhysX physics capabilities provided by the ByteDance platform in ByteDance Mini Games, optimizing the performance of physics calculations, and having a nearly 100% performance improvement compared to Bullet physics:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"compare performance",src:a(36399).Z,width:"795",height:"468"})),(0,r.kt)("p",null,"The prerequisite for using native physics is to set ",(0,r.kt)("strong",{parentName:"p"},"Physics System")," to ",(0,r.kt)("strong",{parentName:"p"},"PhysX")," in ",(0,r.kt)("strong",{parentName:"p"},"Project -> Project Settings -> Feature Cropping")," in the Creator main menu bar. Then open the ",(0,r.kt)("strong",{parentName:"p"},"Build")," panel with the ",(0,r.kt)("strong",{parentName:"p"},"Platform")," option set to ",(0,r.kt)("strong",{parentName:"p"},"ByteDance Mini Game"),", and see the native physics related configuration options as follows:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"PhysX options",src:a(92740).Z,width:"605",height:"308"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Options"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Field name (for publishing with command line)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Not to pack the built-in PhysX library")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If checked, the built-in PhysX library files will not be packaged when building, which helps to reduce the package size, but does not support PhysX running on some application platforms of ByteDance, such as TikTok (iOS version) and DevTools.",(0,r.kt)("br",null),"If unchecked, Creator supports PhysX running on the full application platform of ByteDance."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"physX.notPackPhysXLibs"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Multithreading mode")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If checked, multithreading mode is enabled."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"physX.multiThread"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Number of sub-threads")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of sub-threads when multithreading mode is enabled."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"physX.subThreadCount"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"Tolerance of errors")),(0,r.kt)("td",{parentName:"tr",align:"left"},"If this option is enabled, the precision will be lower when using multithreading than single threading."),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"physX.epsilon"))))),(0,r.kt)("h2",{id:"subpackage-loading"},"Subpackage Loading"),(0,r.kt)("p",null,"The ByteDance Mini Game requires a specific version to support the subpackage feature, and the version requirements for the ByteDance product are as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Product"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Android"),(0,r.kt)("th",{parentName:"tr",align:"left"},"iOS"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TikTok"),(0,r.kt)("td",{parentName:"tr",align:"left"},"v13.6.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"v13.7.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TouTiao"),(0,r.kt)("td",{parentName:"tr",align:"left"},"v7.9.9"),(0,r.kt)("td",{parentName:"tr",align:"left"},"v7.9.8")))),(0,r.kt)("p",null,"For ByteDance DevTools, please use ",(0,r.kt)("strong",{parentName:"p"},"v2.0.6")," or above, but below ",(0,r.kt)("strong",{parentName:"p"},"v3.0.0"),". After updating the DevTools, don't forget to modify the ",(0,r.kt)("strong",{parentName:"p"},"Debug Base library")," to ",(0,r.kt)("strong",{parentName:"p"},"1.88.0")," or above in the ByteDance DevTools."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": if the product version does not support subpackage loading, the engine will load the subpackage as a normal asset bundle.")),(0,r.kt)("p",null,"Currently, the size of the ByteDance Mini Game subpackage has following restrictions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The size of all subpackages of the entire mini game cannot exceed ",(0,r.kt)("strong",{parentName:"li"},"16 M")),(0,r.kt)("li",{parentName:"ul"},"The size of a single subpackage/main package cannot exceed ",(0,r.kt)("strong",{parentName:"li"},"4 M"))),(0,r.kt)("p",null,"For details, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://microapp.bytedance.com/docs/zh-CN/mini-game/develop/framework/subpackages/introduction"},"ByteDance Subpackage Loading Official Documentation [cn]")),(0,r.kt)("h2",{id:"asset-management-for-bytedance-mini-game-environment"},"Asset Management for ByteDance Mini Game Environment"),(0,r.kt)("p",null,"In a ",(0,r.kt)("strong",{parentName:"p"},"ByteDance Mini Game")," environment, asset management is the most special part. It differs from the browser in the following four points:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The size of the ",(0,r.kt)("strong",{parentName:"p"},"ByteDance Mini Game")," package cannot exceed ",(0,r.kt)("strong",{parentName:"p"},"4MB"),", including all the code and assets. Additional assets must be downloaded via web request.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For files downloaded from a remote server, the ",(0,r.kt)("strong",{parentName:"p"},"ByteDance Mini Game")," environment does not have the browser's caching and outdated update mechanism.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For the assets in the ",(0,r.kt)("strong",{parentName:"p"},"ByteDance Mini Game")," package, they are not loaded on demand in the mini game environment, but rather all the assets in the package are loaded at once, and then the game page is launched.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You cannot download script files from a remote server."))),(0,r.kt)("p",null,"This brings up two key issues, home page loading speed and remote asset caching and version management. For the home page loading speed, we recommend that developers only save the script file in the ",(0,r.kt)("strong",{parentName:"p"},"ByteDance Mini Game")," package, and all other assets are downloaded from the remote server. As for downloading, caching and version management of remote assets, Cocos Creator has done the job for developers."),(0,r.kt)("p",null,"Specifically, developers need to do the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"When building, enable the ",(0,r.kt)("strong",{parentName:"li"},"MD5 Cache")," in the ",(0,r.kt)("strong",{parentName:"li"},"Build")," config panel."),(0,r.kt)("li",{parentName:"ol"},"Set the ",(0,r.kt)("strong",{parentName:"li"},"Remote service address"),", and then click ",(0,r.kt)("strong",{parentName:"li"},"Build"),"."),(0,r.kt)("li",{parentName:"ol"},"When the build is complete, upload the ",(0,r.kt)("strong",{parentName:"li"},"res")," folder in the mini game release package to the server."),(0,r.kt)("li",{parentName:"ol"},"Delete the ",(0,r.kt)("strong",{parentName:"li"},"res")," folder inside the local release package."),(0,r.kt)("li",{parentName:"ol"},"For the test phase, you may not be able to deploy to the official server, you need to use the local server to test, then open the details page in the WeChat DevTools, check the ",(0,r.kt)("inlineCode",{parentName:"li"},"Does not verify valid domain names, web-view (business domain names), TLS versions and HTTPS certificates")," option in the ",(0,r.kt)("strong",{parentName:"li"},"Local Settings"),".")),(0,r.kt)("h2",{id:"reference-documentation"},"Reference documentation"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": some platforms only have Chinese documentation available when visiting the platforms website. It may be necessary to use Google Translate in-order to review the documentation.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://microapp.bytedance.com/docs/zh-CN/mini-game/introduction/about-mini-game/flow-entrance/brief-introduction-on-flow-entrance"},"ByteDance Mini Game Developer Document Guide [cn]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://microapp.bytedance.com/"},"ByteDance Developer Platform [cn]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://microapp.bytedance.com/docs/zh-CN/mini-game/develop/api/mini-game/bytedance-mini-game/"},"ByteDance Mini Game API Documentation [cn]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://microapp.bytedance.com/docs/zh-CN/mini-game/develop/developer-instrument/developer-instrument-update-and-download"},"ByteDance DevTools Download [cn]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://microapp.bytedance.com/docs/zh-CN/mini-game/develop/developer-instrument/development-assistance/mini-app-developer-instrument"},"ByteDance DevTools Documentation [cn]"))))}c.isMDXComponent=!0},98990:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/appid-b3329c02f20f400095b2cbc85e0ddf38.png"},72521:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/build-options-58e352a3816a48db573f6a0b29b58681.png"},70325:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/build-443ae0f5ca6043f3ea97f3d783669a5e.png"},66698:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/package-b4d18adbe25aa5f2f17d1a2bbff0bd8e.png"},36399:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/performance-b60616fde389de424357a97f213f706e.png"},92740:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/physx-options-325a7930567fe69dd7fb85e45992bd6c.png"},61249:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tool-8cdad03bf1791a10287a1a1b358b271f.jpg"}}]);