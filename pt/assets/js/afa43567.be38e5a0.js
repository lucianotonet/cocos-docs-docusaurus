"use strict";(self.webpackChunkcocos_docs_docusaurus=self.webpackChunkcocos_docs_docusaurus||[]).push([[8133],{3905:(e,t,A)=>{A.d(t,{Zo:()=>p,kt:()=>m});var a=A(67294);function n(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function o(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,a)}return A}function i(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?o(Object(A),!0).forEach((function(t){n(e,t,A[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):o(Object(A)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))}))}return e}function r(e,t){if(null==e)return{};var A,a,n=function(e,t){if(null==e)return{};var A,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)A=o[a],t.indexOf(A)>=0||(n[A]=e[A]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)A=o[a],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(n[A]=e[A])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),A=t;return e&&(A="function"==typeof e?e(t):i(i({},t),e)),A},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var A=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=l(A),u=n,m=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return A?a.createElement(m,i(i({ref:t},p),{},{components:A})):a.createElement(m,i({ref:t},p))}));function m(e,t){var A=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=A.length,i=new Array(o);i[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:n,i[1]=r;for(var l=2;l<o;l++)i[l]=A[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,A)}u.displayName="MDXCreateElement"},51543:(e,t,A)=>{A.r(t),A.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var a=A(87462),n=(A(67294),A(3905));const o={},i="Publish to Facebook Instant Games",r={unversionedId:"editor/publish/publish-fb-instant-games",id:"editor/publish/publish-fb-instant-games",title:"Publish to Facebook Instant Games",description:"The essential difference between Facebook Instant Games and WeChat mini-games is that Facebook Instant Games runs on a pure HTML5 environment. So it can run not only on cell phones but also on desktop browsers, making development and debugging much easier.",source:"@site/docs/editor/publish/publish-fb-instant-games.md",sourceDirName:"editor/publish",slug:"/editor/publish/publish-fb-instant-games",permalink:"/pt/docs/editor/publish/publish-fb-instant-games",draft:!1,editUrl:"https://github.com/cocos/cocos-docs/docs/editor/publish/publish-fb-instant-games.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Publish to Cocos Play",permalink:"/pt/docs/editor/publish/publish-cocos-play"},next:{title:"Publish to HUAWEI AppGallery Connect",permalink:"/pt/docs/editor/publish/publish-huawei-agc"}},s={},l=[{value:"Publishing process",id:"publishing-process",level:2},{value:"Build the game with Cocos Creator",id:"build-the-game-with-cocos-creator",level:2},{value:"Build options",id:"build-options",level:3},{value:"Upload to Facebook",id:"upload-to-facebook",level:3},{value:"III. Testing the game",id:"iii-testing-the-game",level:3},{value:"Enable the https-enabled web server locally",id:"enable-the-https-enabled-web-server-locally",level:4},{value:"Preview games under Facebook domain",id:"preview-games-under-facebook-domain",level:4},{value:"IV. Share your game in Facebook",id:"iv-share-your-game-in-facebook",level:3},{value:"Customizing Instant Games",id:"customizing-instant-games",level:2},{value:"SDK description",id:"sdk-description",level:2},{value:"Reference links",id:"reference-links",level:2}],p={toc:l},c="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"publish-to-facebook-instant-games"},"Publish to Facebook Instant Games"),(0,n.kt)("p",null,"The essential difference between Facebook Instant Games and WeChat mini-games is that Facebook Instant Games runs on a pure HTML5 environment. So it can run not only on cell phones but also on desktop browsers, making development and debugging much easier."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Currently Cocos Creator does the work for users including:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Integration with Facebook Instant Games SDK and automatic initialization, allowing users to call the relevant APIs directly"),(0,n.kt)("li",{parentName:"ul"},"One-click packaging process in the Cocos Creator build panel to package games directly to Facebook Instant Games specifications")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"What the user needs to do:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Call the Facebook Instant Games SDK to access platform-related features"),(0,n.kt)("li",{parentName:"ul"},"Upload the packaged version of Cocos Creator to Facebook")),(0,n.kt)("h2",{id:"publishing-process"},"Publishing process"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Build the game using Cocos Creator"),(0,n.kt)("li",{parentName:"ul"},"Upload to Facebook backend"),(0,n.kt)("li",{parentName:"ul"},"Test the game"),(0,n.kt)("li",{parentName:"ul"},"Share your game in Facebook")),(0,n.kt)("h2",{id:"build-the-game-with-cocos-creator"},"Build the game with Cocos Creator"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open the project to be published using Cocos Creator and open the ",(0,n.kt)("strong",{parentName:"p"},"Build")," panel from the ",(0,n.kt)("strong",{parentName:"p"},"Menu bar -> Projects"),". Select ",(0,n.kt)("strong",{parentName:"p"},"Facebook Instant Games")," from the ",(0,n.kt)("strong",{parentName:"p"},"Platform")," in the ",(0,n.kt)("strong",{parentName:"p"},"Build")," panel."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"build",src:A(83948).Z,width:"568",height:"705"})),(0,n.kt)("p",{parentName:"li"},"Please refer to ",(0,n.kt)("a",{parentName:"p",href:"/pt/docs/editor/publish/build-options"},"Build Options")," for general build options, Facebook Instant Games-specific build options are listed below, please refer to the ",(0,n.kt)("strong",{parentName:"p"},"Build Options")," section below for more information."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"fb-instant-games-options",src:A(34267).Z,width:"558",height:"82"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Once the build options in the ",(0,n.kt)("strong",{parentName:"p"},"Build")," panel are set, click ",(0,n.kt)("strong",{parentName:"p"},"Build")," button.\nWhen the build is complete, click the folder icon button in the bottom left corner of ",(0,n.kt)("strong",{parentName:"p"},"build task")," to open the project release package, you can see that the ",(0,n.kt)("inlineCode",{parentName:"p"},"fb-instant-games")," (whichever is the name of the specific build task) folder has been created in the default release path ",(0,n.kt)("inlineCode",{parentName:"p"},"build")," directory, which already contains the zip file of the Facebook Instant Games environment ",(0,n.kt)("inlineCode",{parentName:"p"},"fb -instant-games.zip"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"package",src:A(18789).Z,width:"765",height:"402"})))),(0,n.kt)("h3",{id:"build-options"},"Build options"),(0,n.kt)("p",null,"Build options are common across platforms, please refer to ",(0,n.kt)("a",{parentName:"p",href:"/pt/docs/editor/publish/build-options"},"Build Options")," for details. Next, let's look at the build options specific to the Facebook Instant Games platform."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Build options"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Field name (for command line publishing)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Device orientation"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Options include ",(0,n.kt)("strong",{parentName:"td"},"Landscape"),", ",(0,n.kt)("strong",{parentName:"td"},"Portrait")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"orientation"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"vConsole"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Insert the vConsole debugging plugin. vConsole is similar to a mini version of DevTools and is used to assist in debugging."),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"embedWebDebugger"))))),(0,n.kt)("h3",{id:"upload-to-facebook"},"Upload to Facebook"),(0,n.kt)("p",null,"Create a new app in Facebook backend, add ",(0,n.kt)("strong",{parentName:"p"},"small games")," in ",(0,n.kt)("strong",{parentName:"p"},"Add products"),", set the game category, and save the changes. (For details, please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/games/instant-games/getting-started/quickstart?locale=zh_CN#app-setup"},"Set up the app"),")"),(0,n.kt)("p",null,"Click the ",(0,n.kt)("strong",{parentName:"p"},"Small Games -> Web Hosting")," tab on the left side of the app panel, click ",(0,n.kt)("strong",{parentName:"p"},"Upload Versions"),", and upload the ",(0,n.kt)("inlineCode",{parentName:"p"},".zip")," file from the ",(0,n.kt)("inlineCode",{parentName:"p"},"fb-instant-games")," directory to the Facebook hosting service."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"upload",src:A(7492).Z,width:"904",height:"102"})),(0,n.kt)("p",null,'When the version status changes to "Standby", click the "\u2605" button to push the build to the "Production" environment.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"push",src:A(23254).Z,width:"888",height:"222"})),(0,n.kt)("h3",{id:"iii-testing-the-game"},"III. Testing the game"),(0,n.kt)("h4",{id:"enable-the-https-enabled-web-server-locally"},"Enable the https-enabled web server locally"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"First, open a command line window, go to the ",(0,n.kt)("inlineCode",{parentName:"p"},"fb-instant-games")," directory, and install the http-server package via npm: ###"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd fb-instant-games\nnpm install -g http-server\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Next, create the private key and certificate via openssl."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"openssl genrsa 2048 > key.pem\nopenssl req -x509 -days 1000 -new -key key.pem -out cert.pem\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"When the private key and certificate are ready, the Web service can be started locally via SSL: the"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"http-server --ssl -c-1 -p 8080 -a 127.0.0.1 \n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Open ",(0,n.kt)("a",{parentName:"p",href:"https://localhost:8080"},"https://localhost:8080")," with a browser and skip the security warning displayed by the browser. This step is only for the browser to whitelist the above private key and certificate. If the private key and certificate are subsequently regenerated, you need to open it again to confirm it once. It is not yet possible to preview the game directly at this step, because previewing the game requires initializing the Facebook Instant Games SDK, which needs to be done in the following way."))),(0,n.kt)("h4",{id:"preview-games-under-facebook-domain"},"Preview games under Facebook domain"),(0,n.kt)("p",null,"To use all the features of the Facebook Instant Games SDK, you need to open ",(0,n.kt)("a",{parentName:"p",href:"https://www.facebook.com/embed/instantgames/YOUR_GAME_ID/player?game_url=https://localhost:8080"},"https://www.facebook.com/embed/instantgames/YOUR_GAME_ID/player?game_url=https:// localhost:8080")," and be careful to replace the link ",(0,n.kt)("inlineCode",{parentName:"p"},"YOUR_ GAME_ID")," in the link and replace it with the application number you created in the Facebook backend."),(0,n.kt)("p",null,"Then you can see the game running successfully."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"game",src:A(5135).Z,width:"670",height:"434"})),(0,n.kt)("h3",{id:"iv-share-your-game-in-facebook"},"IV. Share your game in Facebook"),(0,n.kt)("p",null,"Click the ",(0,n.kt)("strong",{parentName:"p"},"Games")," tab in the application panel, select ",(0,n.kt)("strong",{parentName:"p"},"Details"),", and pull down the ",(0,n.kt)("strong",{parentName:"p"},"Details")," page to the bottom to see the section shown below, select ",(0,n.kt)("strong",{parentName:"p"},"Share Game")," to share the game directly to the Facebook dynamic message."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"share",src:A(65052).Z,width:"905",height:"190"})),(0,n.kt)("p",null,"For details, please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/games/instant-games/test-publish-share?locale=zh_CN"},"Test, Publish and Share Trivia Games"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"NOTE"),": There are several restrictions on Facebook hosting, the most important of which are."),(0,n.kt)("ol",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ol"},"server-side logic (e.g. php) is not supported"),(0,n.kt)("li",{parentName:"ol"},"no more than 500 files per application upload"))),(0,n.kt)("h2",{id:"customizing-instant-games"},"Customizing Instant Games"),(0,n.kt)("p",null,"Developers can create the ",(0,n.kt)("a",{parentName:"p",href:"/pt/docs/editor/publish/custom-project-build-template"},"build-templates/fb-instant-games")," directory under the Creator project folder to customize them according to their needs, and then copy the published files into that directory to customize them: ##"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"file",src:A(29720).Z,width:"542",height:"96"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"fbapp-config.json"),": this is the configuration for the whole package, go to ",(0,n.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/games/instant-games/bundle-config"},"official introduction")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"index.html"),": Here you can modify the introduced Facebook Instant Games SDK version"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"index.js"),": Here you can modify the SDK initialization and progress bar")),(0,n.kt)("h2",{id:"sdk-description"},"SDK description"),(0,n.kt)("p",null,"The Creator is integrated with the Instant Games SDK provided by Facebook and is automatically initialized when the game is loaded (",(0,n.kt)("inlineCode",{parentName:"p"},"initializeAsync")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"startGameAsync"),"). Users can access it directly through the ",(0,n.kt)("inlineCode",{parentName:"p"},"FBInstant")," module, see ",(0,n.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/games/instant-games/sdk"},"Instant Games SDK")," for instructions.\nIn addition, Facebook also provides a Facebook SDK for JavaScript to access Facebook's social features, which can be accessed through the ",(0,n.kt)("inlineCode",{parentName:"p"},"FB")," module. However, this SDK Creator is not integrated and needs to be introduced manually by the user, see ",(0,n.kt)("a",{parentName:"p",href:"https://developers.facebook.com/docs/javascript"},"official documentation"),"."),(0,n.kt)("h2",{id:"reference-links"},"Reference links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.facebook.com/"},"Facebook Backend")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developers.facebook.com/docs/games/instant-games"},"Facebook Instant Games documentation"))))}d.isMDXComponent=!0},34267:(e,t,A)=>{A.d(t,{Z:()=>a});const a="data:image/png;base64,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"},83948:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/build-e70669cea238ce11f46ecfbb81c00525.png"},29720:(e,t,A)=>{A.d(t,{Z:()=>a});const a="data:image/png;base64,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"},5135:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/game-2dfd10435bfe90c43d2fb8bab4434e57.png"},18789:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/package-e8475d8dc7f32680dfb6d401abd52005.png"},23254:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/push-ec548a7e073bf691c5f07fbfcbe648f1.png"},65052:(e,t,A)=>{A.d(t,{Z:()=>a});const a=A.p+"assets/images/share-c724f154004f6a2740ac3829a55e95ed.png"},7492:(e,t,A)=>{A.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);