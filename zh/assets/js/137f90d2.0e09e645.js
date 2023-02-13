"use strict";(self.webpackChunkcocos_docs_docusaurus=self.webpackChunkcocos_docs_docusaurus||[]).push([[1820],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},A="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),A=p(n),h=a,u=A["".concat(s,".").concat(h)]||A[h]||d[h]||i;return n?o.createElement(u,l(l({ref:t},c),{},{components:n})):o.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[A]="string"==typeof e?e:a,l[1]=r;for(var p=2;p<i;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},75510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const i={},l="Install and Share",r={unversionedId:"editor/extension/install",id:"editor/extension/install",title:"Install and Share",description:"Install Location",source:"@site/docs/editor/extension/install.md",sourceDirName:"editor/extension",slug:"/editor/extension/install",permalink:"/zh/docs/editor/extension/install",draft:!1,editUrl:"https://github.com/cocos/cocos-docs/docs/editor/extension/install.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Custom Inspector Panel",permalink:"/zh/docs/editor/extension/inspector"},next:{title:"Message System",permalink:"/zh/docs/editor/extension/messages"}},s={},p=[{value:"Install Location",id:"install-location",level:2},{value:"Global",id:"global",level:3},{value:"Project",id:"project",level:3},{value:"Installing extensions",id:"installing-extensions",level:2},{value:"Uninstall installed extensions",id:"uninstall-installed-extensions",level:2},{value:"Reload extensions",id:"reload-extensions",level:2},{value:"Package extensions",id:"package-extensions",level:2}],c={toc:p},A="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(A,(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"install-and-share"},"Install and Share"),(0,a.kt)("h2",{id:"install-location"},"Install Location"),(0,a.kt)("p",null,"Cocos Creator will search and load extensions under ",(0,a.kt)("strong",{parentName:"p"},"Global")," and ",(0,a.kt)("strong",{parentName:"p"},"Project")," paths during project startup."),(0,a.kt)("h3",{id:"global"},"Global"),(0,a.kt)("p",null,"If you need to apply an extension to all Cocos Creator projects, you can choose to place the extension package in the ",(0,a.kt)("strong",{parentName:"p"},"Global")," extension package path at"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Windows"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"%USERPROFILE%\\.CocosCreator\\extensions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"macOS"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"$HOME/.CocosCreator/extensions"))),(0,a.kt)("h3",{id:"project"},"Project"),(0,a.kt)("p",null,"If you only wish to apply the extension to the specified project, you can choose to place the extension package in the ",(0,a.kt)("strong",{parentName:"p"},"Project")," extension package path at."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"${your project address}/extensions"))),(0,a.kt)("h2",{id:"installing-extensions"},"Installing extensions"),(0,a.kt)("p",null,"Extensions can be obtained in three ways."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Other developers packaged and shared, see ",(0,a.kt)("a",{parentName:"p",href:"#Package%20extensions"},"Packaged Extensions")," below.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Download from ",(0,a.kt)("strong",{parentName:"p"},"Dashboard -> Store"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"dashboard-store",src:n(41596).Z,width:"1060",height:"751"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Downloaded from the ",(0,a.kt)("a",{parentName:"p",href:"http://store.cocos.com"},"Cocos Store")," page."))),(0,a.kt)("p",null,"After getting the extension zip file, click ",(0,a.kt)("strong",{parentName:"p"},"Extension -> Extension Manager")," in the top menu bar of the editor."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"extension-manager-menu",src:n(10053).Z,width:"171",height:"111"})),(0,a.kt)("p",null,"Clicking on it opens the ",(0,a.kt)("strong",{parentName:"p"},"Extension Manager")," panel as shown below."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"extension-manager",src:n(59723).Z,width:"984",height:"661"})),(0,a.kt)("p",null,"In the ",(0,a.kt)("strong",{parentName:"p"},"Extension Manager"),", select the ",(0,a.kt)("strong",{parentName:"p"},"Projects"),"/",(0,a.kt)("strong",{parentName:"p"},"Global")," (1 above) tab and click the ",(0,a.kt)("strong",{parentName:"p"},"+")," (3 above) button."),(0,a.kt)("p",null,"In the file selection box that pops up, select the extension zip you want to import and click the ",(0,a.kt)("strong",{parentName:"p"},"Open")," button to import it."),(0,a.kt)("p",null,"The imported extension zip will be extracted and placed in the specified ",(0,a.kt)("a",{parentName:"p",href:"#Install%20Location"},"installation location"),"."),(0,a.kt)("p",null,"Finally, find the extension in the ",(0,a.kt)("strong",{parentName:"p"},"Project"),"/",(0,a.kt)("strong",{parentName:"p"},"Global")," tab of the corresponding ",(0,a.kt)("strong",{parentName:"p"},"Extension Manager")," and click the ",(0,a.kt)("strong",{parentName:"p"},"Enable")," button on the right side, the extension you just imported will run normally. As shown in the figure below."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"enable-extension",src:n(9363).Z,width:"501",height:"213"})),(0,a.kt)("h2",{id:"uninstall-installed-extensions"},"Uninstall installed extensions"),(0,a.kt)("p",null,"Find the extension you want to delete in ",(0,a.kt)("strong",{parentName:"p"},"Extension Manager")," and click the ",(0,a.kt)("strong",{parentName:"p"},"Delete button")," ",(0,a.kt)("img",{alt:"delete",src:n(76194).Z,width:"20",height:"20"}),' to do so, and the folder where the extension is located will also be deleted. If you only need to disable it, you can just select "Close".'),(0,a.kt)("h2",{id:"reload-extensions"},"Reload extensions"),(0,a.kt)("p",null,"If the content of the extension has been modified, it will not be updated automatically, so you need to reload the extension once manually inside the editor."),(0,a.kt)("p",null,"Find the corresponding extension in the ",(0,a.kt)("strong",{parentName:"p"},"Extension Manager")," and click the ",(0,a.kt)("strong",{parentName:"p"},"Reload button")," ",(0,a.kt)("img",{alt:"refresh",src:n(98781).Z,width:"20",height:"20"}),", then the extension will be re-run with the latest code and files in the editor."),(0,a.kt)("h2",{id:"package-extensions"},"Package extensions"),(0,a.kt)("p",null,"After writing an extension, if you want to share it with other users, you need to package the extension as a zip archive."),(0,a.kt)("p",null,"Let's take the ",(0,a.kt)("inlineCode",{parentName:"p"},"first-panel")," extension as an example, its directory structure is as follows."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"extension-first-panel-folder-origin",src:n(41534).Z,width:"786",height:"626"})),(0,a.kt)("p",null,"Go to the extension root directory, select the appropriate files and zip all files as follows (screenshot for macOS, same for all other platforms)"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"extension-first-panel-install",src:n(76512).Z,width:"1346",height:"760"})),(0,a.kt)("p",null,"The files (folders) selected in the above diagram are mandatory, none of them are required, and they serve the following purposes."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dist")," - Generated javascript code."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"i18n")," - Multilanguage configuration."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"node_modules")," - dependent Node.js modules."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"package.json")," - Extension description file."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"static")," - Static resource files.")),(0,a.kt)("p",null,"Name the zip package ",(0,a.kt)("inlineCode",{parentName:"p"},"first-panel.zip")," (same name as the extensions folder is recommended) and share it with others or upload it to the Cocos Store to finish sharing."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note"),": You have to do the file selection operation in the directory of the extension, otherwise it may lead to incorrect directory structure.")),(0,a.kt)("p",null,"If you want to upload the extension to the ",(0,a.kt)("a",{parentName:"p",href:"https://store.cocos.com"},"Cocos Store"),", please refer to the document ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/editor/extension/store/upload-store"},"Submitting Resources to Cocos Store"),"."))}d.isMDXComponent=!0},76194:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAEHSURBVDiNY9TX12cgFzCRrZNSzSy4JNzZuQxYGBgYGH7++bX555+7xGs24JEoEGJ8/P0vAwMDKyev/rv7iV/+EdCszMQky8jAwMDszs/9+N3DZd//MTAwsHMyFPDzRnz//IKBgeH/vwNIhjAih3aKkJyvACsbw99fmNYwMbMx/P364XnIu5/YbZ7z7tH7f7KRDC9CPvxG0xssgEUce2j78EnO52Hy4ZOcz8fiwCM2nw970GAXZWdi4WViZmdg4WVgFGZi52VgxKps4BIJDVLY0S+vBBl+H2VAkAw8RNrMxKTx//ed/yikIBOWMEO3ee3XDz6SkoV8GAr//Tj9HD3yGYdmfqZIMwCFfFWRnOb6/wAAAABJRU5ErkJggg=="},41534:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/extension-first-panel-folder-origin-3efce2771b2ca79efb13cf9eee20352c.png"},76512:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/extension-first-panel-install-6f5636d00283dce9ef1081cff36679ce.png"},98781:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAGBSURBVDiNY9TX12cgFzCRrZNSzcwSEhLYxDnFlZX0LezUeP/9/vH20w+ImHNCotrzc3e/whSxYGpTc08Id9EWZ3j78vX338amPmJ8f15d3bNqwU4BNW0VhisMDC9xaOa0Sq2NUvt0aGVV85lPMEE+k/Cs8JxapaPPGRj+IKtG8TOnZ1ao4uNldR2rEDoZGBg+nVnZUbfsloSFOieqVcg2q4VbStzbXXfsO7IC7YSWTBMBGO/7b2SrGZHimdPA3vTjwUP3MYIBF2AcsESC7Gc+GQ0JLhjn94fH91+g+J7TM7dW4VrV9L3YNJtF58dpc359+eTtbwYGhjeX58/ZjqzZJNpW6e3hObhsZmD4+ekTixDD/ekTV99CtVTNNytc+9OhSSjGoWn+83jdjCf2GXltWjcP7d559cnHj6z8ynrOzhbafK92Tp+4GS0iMJLn/c295QdNAqPtnRLsBDkZGP58ennvwvrmHSdefkdXihxVnAbuFr937r+KoQYnGLh4pkgzAFQ2jEvyzQb/AAAAAElFTkSuQmCC"},41596:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/dashboard-store-92d2316c9fc1fa6ecb58302c6b9dad85.png"},9363:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/enable-extension-e5b03fb165356819bf26aaf05ab267f9.png"},10053:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"},59723:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/extension-manager-3ce12e0171e577aa468833d6ecfe5868.png"}}]);