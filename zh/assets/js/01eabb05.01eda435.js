"use strict";(self.webpackChunkcocos_docs_docusaurus=self.webpackChunkcocos_docs_docusaurus||[]).push([[8091],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,d=m["".concat(p,".").concat(u)]||m[u]||g[u]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53722:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},i="Submitting Resources to Cocos Store",s={unversionedId:"editor/extension/store/upload-store",id:"editor/extension/store/upload-store",title:"Submitting Resources to Cocos Store",description:"Cocos Creator has a built-in Extension Store for users to browse, download and automatically install official or third-party extensions and resources. Users can also submit their own extensions, art materials, music and sound effects to the extension store for sharing or selling. Here is an example of submitting an extension.",source:"@site/docs/editor/extension/store/upload-store.md",sourceDirName:"editor/extension/store",slug:"/editor/extension/store/upload-store",permalink:"/zh/docs/editor/extension/store/upload-store",draft:!1,editUrl:"https://github.com/cocos/cocos-docs/docs/editor/extension/store/upload-store.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Calling the Engine API and Project Script",permalink:"/zh/docs/editor/extension/scene-script"},next:{title:"Communicate with the Panel",permalink:"/zh/docs/editor/extension/to-panel-messages"}},p={},l=[{value:"Packaging the Extension",id:"packaging-the-extension",level:2},{value:"Third-party Libraries",id:"third-party-libraries",level:3},{value:"Submitting the Extension",id:"submitting-the-extension",level:2}],c={toc:l},m="wrapper";function g(e){let{components:t,...o}=e;return(0,a.kt)(m,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"submitting-resources-to-cocos-store"},"Submitting Resources to Cocos Store"),(0,a.kt)("p",null,"Cocos Creator has a built-in ",(0,a.kt)("strong",{parentName:"p"},"Extension Store")," for users to browse, download and automatically install official or third-party extensions and resources. Users can also submit their own extensions, art materials, music and sound effects to the extension store for sharing or selling. Here is an example of submitting an extension."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(11084).Z,width:"823",height:"462"})),(0,a.kt)("h2",{id:"packaging-the-extension"},"Packaging the Extension"),(0,a.kt)("p",null,"Suppose the developer completes a extension package with the following directory structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"foobar\n    |--panel\n        |--index.js\n    |--package.json\n    |--main.js\n")),(0,a.kt)("p",null,"Developers need to package the ",(0,a.kt)("inlineCode",{parentName:"p"},"foobar")," folder into a ",(0,a.kt)("inlineCode",{parentName:"p"},"foobar.zip")," file and submit it to the Cocos Developer Center."),(0,a.kt)("p",null,"For additional information on extension packages, please review the ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/editor/extension/first"},"Creating Extension Packages")," documentation."),(0,a.kt)("h3",{id:"third-party-libraries"},"Third-party Libraries"),(0,a.kt)("p",null,"There is currently no workflow for installing an included management system such as NPM in the extension package installation system, extension packages that use third-party libraries should be packaged in a zip package with folders such as ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules"),"."),(0,a.kt)("h2",{id:"submitting-the-extension"},"Submitting the Extension"),(0,a.kt)("p",null,"Visit the ",(0,a.kt)("a",{parentName:"p",href:"https://auth.cocos.com/#/"},"Cocos Developer Center")," and login. Next, visit the ",(0,a.kt)("a",{parentName:"p",href:"https://store-my.cocos.com/#/seller/resources/"},"Store")," section and click ",(0,a.kt)("strong",{parentName:"p"},"Create New Resource")," on the top right."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(32618).Z,width:"986",height:"325"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"First, go to the ",(0,a.kt)("strong",{parentName:"p"},"Category")," page, fill in the ",(0,a.kt)("strong",{parentName:"p"},"Name")," and ",(0,a.kt)("strong",{parentName:"p"},"Category"),", and check the agreement checkbox."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"img",src:n(75873).Z,width:"868",height:"553"})),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Name"),": the name of the extension to be displayed in the extension store. Please note that the name cannot be changed once it is confirmed, please fill it in carefully."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Category"),": the category of the resource to be submitted, choose ",(0,a.kt)("strong",{parentName:"li"},"Creator Extension -> Plugins")," here.")),(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Next")," after the settings are done to enter the ",(0,a.kt)("strong",{parentName:"p"},"Introduction")," page.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Second, fill in the relevant information on the ",(0,a.kt)("strong",{parentName:"p"},"Introduction")," page."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"img",src:n(74107).Z,width:"854",height:"824"})),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Keyword"),": facilitate users to search for your extension faster, support multiple keywords"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Supported Platforms"),": including Android, iOS, HTML5"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Icon"),": icon size of ",(0,a.kt)("strong",{parentName:"li"},"256 * 256"),", size no more than ",(0,a.kt)("strong",{parentName:"li"},"500KB"),", ",(0,a.kt)("strong",{parentName:"li"},"PNG")," format."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Screenshots"),": upload a maximum of ",(0,a.kt)("strong",{parentName:"li"},"5")," screenshots in ",(0,a.kt)("strong",{parentName:"li"},"jpg"),"/",(0,a.kt)("strong",{parentName:"li"},"png")," format. The size of each screenshot is limited to a minimum of ",(0,a.kt)("strong",{parentName:"li"},"640px")," and a maximum of ",(0,a.kt)("strong",{parentName:"li"},"2048px"),", and the size should not exceed ",(0,a.kt)("strong",{parentName:"li"},"1000KB"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Description"),": fill in the basic functions and usage of the extension. It includes ",(0,a.kt)("strong",{parentName:"li"},"Chinese")," and ",(0,a.kt)("strong",{parentName:"li"},"English")," languages, and will only be displayed in the extension store of the corresponding language version after filling it in.",(0,a.kt)("br",null),"The Extension Store has certain formatting requirements for the descriptions of plugins, please refer to the ",(0,a.kt)("a",{parentName:"li",href:"https://store.cocos.com/document/zh/cocos-store-template-extension.html"},"plugin description template [cn]")," documentation for details.")),(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Next")," to enter the ",(0,a.kt)("strong",{parentName:"p"},"Pricing")," page after filling out the form.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Third, in the ",(0,a.kt)("strong",{parentName:"p"},"Pricing")," page, set the price of the extension, including ",(0,a.kt)("strong",{parentName:"p"},"CNY")," and ",(0,a.kt)("strong",{parentName:"p"},"USD"),", if it is free, please fill in ",(0,a.kt)("strong",{parentName:"p"},"0"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"img",src:n(14430).Z,width:"881",height:"292"})),(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Next")," to enter the ",(0,a.kt)("strong",{parentName:"p"},"Upload")," page after completing the form.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Fourth, on the ",(0,a.kt)("strong",{parentName:"p"},"Upload")," page, upload the extensions and fill in the relevant information."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"img",src:n(45650).Z,width:"2560",height:"1263"})),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Package"),": zip format, max 100MB.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Extension Name"),": the name of the extension package, defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file of the extension package.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Version Number"),": extension version number, defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file of the extension package. Please follow the ",(0,a.kt)("a",{parentName:"p",href:"https://semver.org/"},"semver specification")," for the writing specification.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Creator Minimum Version Requirement"),": the extension's requirement for Creator version."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note"),": since Creator 2.x and 3.x extensions are not compatible with each other, if there is no corresponding version of the supported extension package, the work will not be displayed in the corresponding version of the extension store of Creator.")))),(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Next")," to go to the ",(0,a.kt)("strong",{parentName:"p"},"Submit for Review")," page after completing the form.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Fifth, on the ",(0,a.kt)("strong",{parentName:"p"},"Submit for Review")," page, click the ",(0,a.kt)("strong",{parentName:"p"},"Submit Review")," button, or click the ",(0,a.kt)("strong",{parentName:"p"},"View")," button to re-edit the extension resource."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"img",src:n(56187).Z,width:"874",height:"397"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Lastly, after submitting for review, the extension store management will review the extension content and information within ",(0,a.kt)("strong",{parentName:"p"},"3")," business days."))))}g.isMDXComponent=!0},75873:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/category-d6ea28b8eb8dcff2af8daae77428c49f.png"},32618:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create-59f82f6d3ec3a70666a864b4d2765ce2.png"},74107:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/introduction-293bb47def208752e9daf15f851ddc48.png"},14430:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/pricing-e1cd0c5a5915e1cf9980ff06e9c3ffce.png"},11084:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/store-fbff302b60802ce4f272405abb18088a.png"},56187:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/submit-for-review-c8a723c75f39a37e4af6b1eb7d610944.png"},45650:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/upload-store-97a31ad946c12bc2ec936dc6a8e3efe7.png"}}]);