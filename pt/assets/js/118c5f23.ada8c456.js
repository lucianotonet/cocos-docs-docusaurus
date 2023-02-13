"use strict";(self.webpackChunkcocos_docs_docusaurus=self.webpackChunkcocos_docs_docusaurus||[]).push([[8312],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(a),c=i,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||r;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},95290:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const r={},l="Publish from the Command Line",o={unversionedId:"editor/publish/publish-in-command-line",id:"editor/publish/publish-in-command-line",title:"Publish from the Command Line",description:"Publish a project from the command line can help us build an auto-publish routine that allows modifying command line parameters to achieve different goals.",source:"@site/docs/editor/publish/publish-in-command-line.md",sourceDirName:"editor/publish",slug:"/editor/publish/publish-in-command-line",permalink:"/pt/docs/editor/publish/publish-in-command-line",draft:!1,editUrl:"https://github.com/cocos/cocos-docs/docs/editor/publish/publish-in-command-line.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Publish to Huawei Quick Games",permalink:"/pt/docs/editor/publish/publish-huawei-quick-game"},next:{title:"Publish to Mini Game Platforms",permalink:"/pt/docs/editor/publish/publish-mini-game"}},s={},p=[{value:"Command Reference",id:"command-reference",level:2},{value:"Exit Codes",id:"exit-codes",level:2},{value:"Publish Parameters",id:"publish-parameters",level:2},{value:"Publish using Jenkins",id:"publish-using-jenkins",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"publish-from-the-command-line"},"Publish from the Command Line"),(0,i.kt)("p",null,"Publish a project from the command line can help us build an auto-publish routine that allows modifying command line parameters to achieve different goals."),(0,i.kt)("h2",{id:"command-reference"},"Command Reference"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"For example"),": Building Web Desktop with debug mode enabled:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Mac"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'/Applications/CocosCreator/Creator/3.0.0/CocosCreator.app/Contents/MacOS/CocosCreator --project projectPath\n--build "platform=web-desktop;debug=true"\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Windows"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'...\\CocosCreator.exe --project projectPath --build "platform=web-desktop;debug=true"\n')))),(0,i.kt)("p",null,"Currently, when using the command line to build, except for the required build options, if no parameter values are uploaded, the default values are used to build. Please refer to the description below and the platform's build options description for specific default values."),(0,i.kt)("h2",{id:"exit-codes"},"Exit Codes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"32")," Build failed \u2014\u2014 Invalid build parameters."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"34")," Build failed \u2014\u2014 Some unexpected errors occurred during the build process, please refer to the build log for details."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"36")," Build success.")),(0,i.kt)("h2",{id:"publish-parameters"},"Publish Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--project"),": Required, specify the project path.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"--build"),": Specify the parameters to be used when building the project."),(0,i.kt)("p",{parentName:"li"},"When parameters are not specified after ",(0,i.kt)("inlineCode",{parentName:"p"},"--build"),", then the parameters used in the ",(0,i.kt)("strong",{parentName:"p"},"Build")," panel, such as platforms, templates, and so on, will be used as default parameters. When additional parameter settings are specified, the default parameters will be overwritten with the specified parameters. The available parameters are:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"configPath"),": Parameter file path. If define ",(0,i.kt)("inlineCode",{parentName:"li"},"configPath"),", then Cocos Creator will load this file as a build parameter in the ",(0,i.kt)("inlineCode",{parentName:"li"},"JSON")," file format. This parameter can be modified by yourself or exported directly from the ",(0,i.kt)("strong",{parentName:"li"},"Build")," panel."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"logDest"),": Specify the log output path."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"includedModules"),": Customize the engine packaged modules, only the required modules are packaged. The corresponding field of each module can be found in the ",(0,i.kt)("inlineCode",{parentName:"li"},"features")," field in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/cocos/cocos-engine/blob/3d/cc.config.json"},"this file")," of engine repository."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"outputName"),": The name of the release folder generated after the build."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),": Game name."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"platform"),": Required, the platform needs to be built."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"buildPath"),": Specify the directory where the build release package is generated, the default is the ",(0,i.kt)("inlineCode",{parentName:"li"},"build")," directory under the project directory. Either an absolute path or a path relative to the project (e.g.: ",(0,i.kt)("inlineCode",{parentName:"li"},"project://release"),") can be used. Starting with v3.4.2, relative paths like ",(0,i.kt)("inlineCode",{parentName:"li"},"../")," are supported."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"startScene"),": The UUID of the main scene (the participating scene will use the build option parameters in the ",(0,i.kt)("strong",{parentName:"li"},"Build")," panel from the last build), and the first scene from the ",(0,i.kt)("strong",{parentName:"li"},"Included Scenes")," will be used if not specified."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"scenes"),": Information about the scenes involved in the build, which defaults to all scenes when not specified."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"debug"),": Whether or not debug mode, the default is ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"replaceSplashScreen"),": Whether to replace the splash screen, the default is ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"md5Cache"),": Enabled or disabled the MD5 Cache, the default is ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mainBundleCompressionType"),": Main bundle compression type. For specific option values, please refer to the document ",(0,i.kt)("a",{parentName:"li",href:"../../asset/bundle.md##compression-type"},"Asset Bundle \u2014 compression type"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mainBundleIsRemote"),": Configure the main package as a remote package."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"packages"),": The build configuration parameters supported by each plugin. What needs to be stored is the serialized string for the data object. For details, please refer to the following.")))),(0,i.kt)("p",null,"Each platform's build will be embedded in the ",(0,i.kt)("strong",{parentName:"p"},"Build")," panel as a separate plugin, so each platform's build options are in different locations. The build parameters are configured in the ",(0,i.kt)("inlineCode",{parentName:"p"},"packages")," field, for example, to specify the build options for WeChat Mini Game, the configuration is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"{\n    taskName: 'wechatgame',\n    packages: {\n        wechatgame: {\n            appid: '*****',\n        }\n    }\n}\n")),(0,i.kt)("p",null,"After the build plugin system is opened to the public, the configuration parameters of other plugins are embedded in the ",(0,i.kt)("strong",{parentName:"p"},"Build")," panel in the same way. ",(0,i.kt)("strong",{parentName:"p"},"Please refer to the documentation of each platform for the specific parameter fields of each platform"),", it is better to use the ",(0,i.kt)("strong",{parentName:"p"},"Export")," function of the ",(0,i.kt)("strong",{parentName:"p"},"Build")," panel to get the configuration parameters. Currently it is still compatible with the old version of the parameters to build, but the compatibility process will be gradually removed later, so please upgrade the configuration parameters as soon as possible."),(0,i.kt)("h2",{id:"publish-using-jenkins"},"Publish using Jenkins"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Cocos Creator")," still needs the GUI environment when running from the command line. If the Jenkins server can not run ",(0,i.kt)("strong",{parentName:"p"},"Cocos Creator")," from the command line, a solution is running Jenkins in agent mode, so it can interact with the operating systems window server. For more details please review this ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/13966595/build-unity-project-with-jenkins-failed"},"Stack Overflow post"),"."),(0,i.kt)("p",null,"If the Jenkins server can not compile under Windows, specify a local user for the Jenkins service in the Windows ",(0,i.kt)("strong",{parentName:"p"},"Control Panel -> Administrative Tools -> Services"),", and then restart the computer. You don't need to set up a master-slave mode separately."))}m.isMDXComponent=!0}}]);