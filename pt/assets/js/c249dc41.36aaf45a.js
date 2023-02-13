"use strict";(self.webpackChunkcocos_docs_docusaurus=self.webpackChunkcocos_docs_docusaurus||[]).push([[6839],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||o;return n?i.createElement(m,r(r({ref:t},d),{},{components:n})):i.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},23625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const o={},r="Introduction to the Build Process and FAQ",s={unversionedId:"editor/publish/build-guide",id:"editor/publish/build-guide",title:"Introduction to the Build Process and FAQ",description:"Introduction to the Build Infrastructure",source:"@site/docs/editor/publish/build-guide.md",sourceDirName:"editor/publish",slug:"/editor/publish/build-guide",permalink:"/pt/docs/editor/publish/build-guide",draft:!1,editUrl:"https://github.com/cocos/cocos-docs/docs/editor/publish/build-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cross-Platform Game Publishing",permalink:"/pt/docs/editor/publish/"},next:{title:"Access to Open Data Context",permalink:"/pt/docs/editor/publish/build-open-data-context"}},l={},p=[{value:"Introduction to the Build Infrastructure",id:"introduction-to-the-build-infrastructure",level:2},{value:"General Build Processing Flow",id:"general-build-processing-flow",level:2},{value:"Initialization of Build options",id:"initialization-of-build-options",level:3},{value:"Build data organization",id:"build-data-organization",level:3},{value:"Writing the built assets to the file system",id:"writing-the-built-assets-to-the-file-system",level:3},{value:"Organizing <code>settings.json</code>/<code>config.json</code> and configuring JSON data",id:"organizing-settingsjsonconfigjson-and-configuring-json-data",level:3},{value:"settings.json",id:"settingsjson",level:4},{value:"config.json",id:"configjson",level:4},{value:"Compressing config.json",id:"compressing-configjson",level:3},{value:"Build assets",id:"build-assets",level:4},{value:"Building of each platform",id:"building-of-each-platform",level:2},{value:"Compilation/generation process of each platform",id:"compilationgeneration-process-of-each-platform",level:3},{value:"FAQ Guide",id:"faq-guide",level:2},{value:"Asset loading 404 errors",id:"asset-loading-404-errors",level:3},{value:"Script asset loading error",id:"script-asset-loading-error",level:3},{value:"How to find the big picture after the small picture is automatically combined",id:"how-to-find-the-big-picture-after-the-small-picture-is-automatically-combined",level:3},{value:"How to decompress UUIDs",id:"how-to-decompress-uuids",level:3},{value:"Engine compilation failed",id:"engine-compilation-failed",level:3},{value:"Other errors",id:"other-errors",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction-to-the-build-process-and-faq"},"Introduction to the Build Process and FAQ"),(0,a.kt)("h2",{id:"introduction-to-the-build-infrastructure"},"Introduction to the Build Infrastructure"),(0,a.kt)("p",null,"The build process mainly includes the following two parts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"General build processing")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Build processing for each platform"))),(0,a.kt)("p",null,"Due to the adjustment of the build mechanism in v3.0, the build process of different platforms is injected into the ",(0,a.kt)("strong",{parentName:"p"},"Build")," panel in the form of ",(0,a.kt)("strong",{parentName:"p"},"build plugins"),", each participating in the build process. The build options specific to each platform are displayed in the ",(0,a.kt)("strong",{parentName:"p"},"Build")," panel in the form of expanded options. Developers can make custom build options appear in the ",(0,a.kt)("strong",{parentName:"p"},"Build")," panel via the ",(0,a.kt)("a",{parentName:"p",href:"/pt/docs/editor/publish/custom-build-plugin"},"build plugin"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"build-engine",src:n(46052).Z,width:"548",height:"930"})),(0,a.kt)("h2",{id:"general-build-processing-flow"},"General Build Processing Flow"),(0,a.kt)("p",null,"The general Build process of Cocos Creator mainly includes the following contents:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Initialization of build options"),(0,a.kt)("li",{parentName:"ol"},"Build data organization"),(0,a.kt)("li",{parentName:"ol"},"Write the built resources to the file system"),(0,a.kt)("li",{parentName:"ol"},"Organize ",(0,a.kt)("inlineCode",{parentName:"li"},"settings.json"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"config.json")," data"),(0,a.kt)("li",{parentName:"ol"},"UUID compression and file writing in ",(0,a.kt)("inlineCode",{parentName:"li"},"config.json"))),(0,a.kt)("h3",{id:"initialization-of-build-options"},"Initialization of Build options"),(0,a.kt)("p",null,"This step is mainly for initializing the ",(0,a.kt)("strong",{parentName:"p"},"primal options")," passed to the build during the build to ",(0,a.kt)("strong",{parentName:"p"},"build internal options"),", completing the format conversion of some of the build options, initialize project configuration, initialize the asset data of the build asset database, and check the latest asset information and classify it."),(0,a.kt)("h3",{id:"build-data-organization"},"Build data organization"),(0,a.kt)("p",null,"When building, the editor will first sort out the current scenes involved in the build and assets in all ",(0,a.kt)("a",{parentName:"p",href:"../../asset/bundle.md"},"Bundles")," folders and then search for their dependent assets through engine deserialization, and recursively find a list of all the assets that need to be packaged. After the asset list is summarized, the assets will be classified according to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Bundle")," configuration, and script compiling tasks, image compression tasks, and json grouping information will be collected."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Notes"),":"),(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},"The engine will load all user scripts before deserialization. Whether the script is successfully loaded will directly affect the deserialization. If the script is not correctly written, it will cause the build to fail."),(0,a.kt)("li",{parentName:"ol"},"If a dependency asset is found missing during the asset sorting process, an error will be reported but the build will normally continue. Although the build is allowed to continue successfully, it does not mean that the problem does not need to be solved. If the missing assets are not solved, it is difficult to guarantee that the built game package has no problems."))),(0,a.kt)("h3",{id:"writing-the-built-assets-to-the-file-system"},"Writing the built assets to the file system"),(0,a.kt)("p",null,"The built assets will be packaged into ",(0,a.kt)("inlineCode",{parentName:"p"},"assets/[Bundle name]")," under the corresponding platform release package directory according to the configuration of the ",(0,a.kt)("a",{parentName:"p",href:"../../asset/bundle.md#configuration"},"Asset Bundle")," after the build is completed. The directory structure is as follows:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"build-engine",src:n(73079).Z,width:"571",height:"260"})),(0,a.kt)("p",null,"For more information about ",(0,a.kt)("inlineCode",{parentName:"p"},"Asset Bundle")," configuration, building, file description, etc., please refer to the ",(0,a.kt)("a",{parentName:"p",href:"../../asset/bundle.md"},"Asset Bundle")," documentation."),(0,a.kt)("p",null,"After organizing the basic build tasks, the build will loop through all the ",(0,a.kt)("inlineCode",{parentName:"p"},"Bundles"),", executing the asset packaging tasks that each ",(0,a.kt)("inlineCode",{parentName:"p"},"Bundle")," needs to handle in turn to generate these ",(0,a.kt)("inlineCode",{parentName:"p"},"Bundle")," asset packages."),(0,a.kt)("p",null,"Each ",(0,a.kt)("inlineCode",{parentName:"p"},"Bundle")," goes through the following asset handling process:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Script Building"),": scripts within the editor are divided into ",(0,a.kt)("a",{parentName:"p",href:"../../scripting/external-scripts.md"},"plug-in scripts")," and ",(0,a.kt)("strong",{parentName:"p"},"non-plugin scripts"),", with different rules for handling different kinds."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Plug-in scripts"),": directly copy the source files according to the original directory structure to the ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," directory under the release package directory generated after the build, the plug-in script does not support any script form that needs to be compiled, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"TypeScript")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"JavaScript (ES6)"),". The asset information of the plug-in script will be written into the jsList array in ",(0,a.kt)("inlineCode",{parentName:"p"},"settings"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Non-plugin scripts"),": packaged into ",(0,a.kt)("inlineCode",{parentName:"p"},"project.js")," and placed in the corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," directory. Checking the ",(0,a.kt)("inlineCode",{parentName:"p"},"sourceMap")," option will generate the corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},".map")," file, and determine whether the script is compressed according to the ",(0,a.kt)("inlineCode",{parentName:"p"},"debug")," option.")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Auto Atlas Processing"),": queries the Auto Atlas asset list within the project, packaging the SpriteFrame small images under the atlas into a large image, generating serialized files, etc. according to the configuration of the Auto Atlas resource. This step will also modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"json")," grouping information, asset grouping information, and add texture compression tasks. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Texture Compression"),": according to the organized image compression task, the image assets are compressed and written into the build folder. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Engine Script Compilation"),": according to the configuration in ",(0,a.kt)("strong",{parentName:"p"},"Main Menu")," -> ",(0,a.kt)("strong",{parentName:"p"},"Project Settings")," -> ",(0,a.kt)("strong",{parentName:"p"},"Feature Cropping"),", remove the unused engine modules and pack them into the ",(0,a.kt)("inlineCode",{parentName:"p"},"cocos-js")," directory. Checking the ",(0,a.kt)("inlineCode",{parentName:"p"},"sourceMap")," option in the ",(0,a.kt)("strong",{parentName:"p"},"Build")," panel will generate the corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},".map")," file, and determine whether the script is compressed according to the ",(0,a.kt)("inlineCode",{parentName:"p"},"debug")," option."),(0,a.kt)("p",{parentName:"li"},"  The main steps of engine compilation include:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Get ",(0,a.kt)("strong",{parentName:"p"},"engine module information in project settings"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Check")," whether the compilation options of the engine in the ",(0,a.kt)("strong",{parentName:"p"},"cache")," are consistent with the current options to be compiled, and if they are, use the cache directly.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If compilation is needed, execute the task of packaging the engine, then copy the compiled js file and save the engine's cache judgment information file."),(0,a.kt)("p",{parentName:"li"},"When compiling the engine, ",(0,a.kt)("a",{parentName:"p",href:"/pt/docs/editor/publish/build-panel#build-log"},"output log information")," can be viewed:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"build-engine",src:n(19178).Z,width:"870",height:"583"})),(0,a.kt)("p",{parentName:"li"},"Regarding the reuse rules of engine files, it is necessary to elaborate:",(0,a.kt)("br",null),"\nThe packaged engine file will be placed in the editor's global temporary directory (use ",(0,a.kt)("inlineCode",{parentName:"p"},"Build.globalTempDir")," to look up the cache address during the build process). The cache file is stored as the name according to the hash value generated by the parameters that will affect the engine compilation."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"global-temp-folder\n|--CocosCreator\n    |--x.xx(3.0.0)\n        |--builder\n            |--engine\n                |--1dc4a547f9...63a43bb8965.watch-files.json\n                |--1dc4a547f9...63a43bb8965 (engine folder)\n                |--1dc4a547f9...63a43bb8965.meta (folder)\n            ...\n")),(0,a.kt)("p",{parentName:"li"},"As long as any relevant engine build parameters are changed, the engine will be recompiled. Parameters that specifically affect the use of the build engine cache are:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"debug: whether to open the debug mode"),(0,a.kt)("li",{parentName:"ul"},"includeModules: engine module settings"),(0,a.kt)("li",{parentName:"ul"},"sourceMaps: whether to enable sourceMaps"),(0,a.kt)("li",{parentName:"ul"},"platform: build platform"),(0,a.kt)("li",{parentName:"ul"},"Engine modification time"),(0,a.kt)("li",{parentName:"ul"},"Whether to check the ",(0,a.kt)("strong",{parentName:"li"},"Separate Engine")," in the ",(0,a.kt)("strong",{parentName:"li"},"Build")," panel (only WeChat Mini Game)"),(0,a.kt)("li",{parentName:"ul"},"Use engine path, engine version number"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"JSON build"),": When serializing ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON"),", it will be merged and written into the file system (in the folder ",(0,a.kt)("inlineCode",{parentName:"p"},"assets/xxxBundle/import"),") according to the ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON")," grouping and the ",(0,a.kt)("inlineCode",{parentName:"p"},"Bundle")," to which it belongs. ",(0,a.kt)("strong",{parentName:"p"},"If it is in release mode, it will also compress the UUID in the serialized JSON"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Common Asset Copy"),": Some raw assets will be directly copied from the ",(0,a.kt)("inlineCode",{parentName:"p"},"library")," to the built folder ",(0,a.kt)("inlineCode",{parentName:"p"},"assets/xxxBundle/native"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"md5 processing"),": Add the ",(0,a.kt)("inlineCode",{parentName:"p"},".md5")," suffix to all the assets, project scripts and engine files in the ",(0,a.kt)("inlineCode",{parentName:"p"},"assets")," folder, and organize the data to be recorded in the ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.json"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"application.js")," template file generation"),": dynamically generates the ",(0,a.kt)("inlineCode",{parentName:"p"},"application.js")," file according to user options and generate it to the release package directory ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," generated after the build."))),(0,a.kt)("h3",{id:"organizing-settingsjsonconfigjson-and-configuring-json-data"},"Organizing ",(0,a.kt)("inlineCode",{parentName:"h3"},"settings.json"),"/",(0,a.kt)("inlineCode",{parentName:"h3"},"config.json")," and configuring JSON data"),(0,a.kt)("p",null,"It is mainly to prepare the necessary configuration information for the game launch based on the asset data compiled previously."),(0,a.kt)("h4",{id:"settingsjson"},"settings.json"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"settings.json")," records the basic configuration information of the whole game package, which will directly affect the initialization of the game package."),(0,a.kt)("p",null,"The description of the ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.json")," configuration is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n    debug: boolean; // Whether it is in debug mode, depends on the settings in the Build panel.\n    designResolution: ISettingsDesignResolution; // Canvas resolution setting, depends on the settings of the Project Data page in the Project Settings panel.\n    jsList: string[];\n    launchScene: string; // URL of the initial scene.\n    moduleIds: string[]; // Information about all user script components.\n    platform: string;\n    renderPipeline: string; // renderPipeline information, depends on the settings of the Project Data page in the Project Settings panel.\n    physics?: IPhysicsConfig; // Physics module settings (only generated when the physics engine module is checked).\n    BundleVers: Record<string, string>; // Bundle\'s md5 file value.\n    subpackages: string[]; // subpackage information.\n    remoteBundles: string[]; // Record the collection of remote Bundle.\n    server: string; // Record the remote server address (note: before v3.4 this option was stored in the \'application.js\' file).\n    hasResourcesBundle: boolean; // Does it contain the built-in Bundle "resources".\n    hasStartSceneBundle: boolean; // Does it contain the built-in Bundle "start-scene".\n    customJointTextureLayouts?: ICustomJointTextureLayout[];\n    macros?: Record<string, any>; // Engine macro configuration values in the Project Settings panel.\n}\n')),(0,a.kt)("h4",{id:"configjson"},"config.json"),(0,a.kt)("p",null,"Each Bundle asset package has a ",(0,a.kt)("inlineCode",{parentName:"p"},"config.json"),", which records basic information such as assets and scripts for the entire ",(0,a.kt)("inlineCode",{parentName:"p"},"Bundle"),", which will directly affect the loading of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Bundle")," package."),(0,a.kt)("p",null,"The description of the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.json")," configuration is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'{\n    importBase: string; // The name of the import directory in the Bundle, usually \'import\'.\n    nativeBase: string; // The name of the native directory in native, usually \'native\'.\n    name: string; // The name of the Bundle, the Bundle can be loaded by the Bundle name\n    deps: string[]; // Other Bundle names that this Bundle depends on.\n    scenes: Array<{url: string, uuid: string}>; // The array of scene information contained in the Bundle.\n    rawAssets: { [index: string]: { [uuid: string]: string[] } };\n    // Store the URL and type of the asset loaded under \'resources\'\n    // Example: "bba00d3a-2f17-4511-b47c-0d584b21b763@6c48a": ["test/right/texture", "cc.Texture2D", "bba0...@6c48a"]\n    // "bba0...@6c48a": ["test/right/texture", 1, 1]\n    packs: Record<string, IUuid[] | number[]>; // json group information.\n    versions: { \n        import: Array<string | number>;\n        native: Array<string | number>;\n     }; // Only available after md5Cache is checked, the array part is stored in the format of [uuid_1, md5_1, uuid_2, md5_2, ...], where uuid_1 is a simple number indicating that the storage is the uuid index in the uuids array.\n    uuids: string[]; // uuid array, only in release mode.\n    types?: string[]; // Resource type array, only in release mode.\n    encrypted?: boolean; // Marks whether the script in the Bundle is encrypted, active on the native platform.\n    isZip?: boolean; // Is it in ZIP mode.\n    zipVersion?: string; // MD5 Hash value of ZIP package.\n}\n')),(0,a.kt)("p",null,"The structure here only lists the structure of ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.json")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"config.json")," in a general sense. In fact, these parameters will vary after different platform builds."),(0,a.kt)("h3",{id:"compressing-configjson"},"Compressing config.json"),(0,a.kt)("p",null,"Before generating the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.json")," file, the ",(0,a.kt)("inlineCode",{parentName:"p"},"UUID")," information in the file will be compressed according to whether it is in release mode or not, understanding this rule will be helpful to find the location of the file after the asset is built."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"UUIDs")," used in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Bundle")," will be sorted during the build, and those that appear ",(0,a.kt)("strong",{parentName:"p"},"twice or more")," will be stored in the ",(0,a.kt)("inlineCode",{parentName:"p"},"uuids")," array, and the location of the previously used ",(0,a.kt)("inlineCode",{parentName:"p"},"UUID")," will be replaced with the index."),(0,a.kt)("p",null,"All ",(0,a.kt)("inlineCode",{parentName:"p"},"types")," that appear ",(0,a.kt)("strong",{parentName:"p"},"twice and more")," are also stored in the ",(0,a.kt)("inlineCode",{parentName:"p"},"types")," array, and the previously used position is replaced with the index."),(0,a.kt)("h4",{id:"build-assets"},"Build assets"),(0,a.kt)("p",null,"This step generates project asset files other than scripts, since scripts are compiled and processed separately as special files. The assets are re-serialized after deserialization is performed during the packaging process to reduce the package size after packaging. Multiple serialized JSONs are combined into a single file based on the JSON grouping information collated from the previous data, e.g. the serialized files of the ",(0,a.kt)("inlineCode",{parentName:"p"},"texture")," asset are all packaged into a single JSON file."),(0,a.kt)("h2",{id:"building-of-each-platform"},"Building of each platform"),(0,a.kt)("p",null,"The Build process provides hook functions that build the lifecycle, which is convenient for developers to participate in the building during different processing periods of the building and affect the building result. At the same time, the build also provides a way for developers to directly add some custom build options. The corresponding new parameters can be displayed directly in the ",(0,a.kt)("strong",{parentName:"p"},"Build")," panel through simple configuration. For details, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"/pt/docs/editor/publish/custom-build-plugin"},"Extending Build Process")," documentation. The build options injected by the build plugin will be stored in ",(0,a.kt)("inlineCode",{parentName:"p"},"options.packages[pkgName]"),", the current way of writing option parameters built through the command line also needs to follow this rule. The rules for the corresponding parameters can be referenced by clicking ",(0,a.kt)("strong",{parentName:"p"},"Export Build Config")," at the top right of the ",(0,a.kt)("strong",{parentName:"p"},"Build")," panel."),(0,a.kt)("h3",{id:"compilationgeneration-process-of-each-platform"},"Compilation/generation process of each platform"),(0,a.kt)("p",null,"The build process of all platforms that require support for separate compilation and generation have been split. Some developers may wonder why the current mini game platform has a new ",(0,a.kt)("strong",{parentName:"p"},"Make")," button. In fact this part of the logic has always existed before, but it is merged in the ",(0,a.kt)("strong",{parentName:"p"},"build")," process and cannot be controlled separately."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"build")," of the editor is similar to the function of an ",(0,a.kt)("strong",{parentName:"p"},"export game package for the corresponding platform"),", which is mainly to complete the interface of the engine to each platform and the compatibility of the basic format of the game package, which does not mean that all the work is completed. Each platform usually has its own compilation process, such as the compilation and upload function of the developer tools that come with the WeChat Mini Game platform, and the compilation, running and debugging functions of the relevant IDE for each native platform. If the developer needs to customize the packaging process for a specific platform, the editor needs to support the process of splitting in order to better access."),(0,a.kt)("h2",{id:"faq-guide"},"FAQ Guide"),(0,a.kt)("p",null,"The entire build process is in a single worker, to view the log information of the build process or view the complete call stack when an error occurs, click on the main menu, then select ",(0,a.kt)("strong",{parentName:"p"},"Developer -> Open Build DevTools"),". In fact, a lot of log information will be output when building, but in order not to interfere with users, by default only error and important information will be printed to the editor's ",(0,a.kt)("strong",{parentName:"p"},"Console")," panel, and the log information in the devtools is the most complete."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note"),": before building ",(0,a.kt)("strong",{parentName:"p"},"please make sure that the scene participating in the building can be previewed normally"),". Loss of assets in some scenes or other script problems can be exposed during the preview stage. Building under the condition that the preview is normal can save time and troubleshoot better.")),(0,a.kt)("h3",{id:"asset-loading-404-errors"},"Asset loading 404 errors"),(0,a.kt)("p",null,"In case of a 404 error, please copy the UUID in the log that reported the error resource loss and search for the corresponding resource in ",(0,a.kt)("strong",{parentName:"p"},"Assets")," panel to check whether the resources that the resource depends on are normal. Resource loading 404 errors usually occur under the following situations:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Resources that are not placed in the Bundle are dynamically loaded in the script"),"."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Reason"),": Through the above introduction, we know that only the resources and their dependent resources in the Bundle directory, as well as the resources and their dependent resources participating in the build scene will be packaged into the final build folder, and ",(0,a.kt)("strong",{parentName:"p"},"only the resource URL directly put into the ",(0,a.kt)("inlineCode",{parentName:"strong"},"Bundle")," folder will be written to the ",(0,a.kt)("inlineCode",{parentName:"strong"},"config.json")),". If a resource is used in the script but the resource is not placed in any Bundle directory, a 404 error will appear when it is loaded.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Solution"),": Move the used resources to the Bundle folder.")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"There is a problem importing the loaded resource, and the data cannot be generated normally to the library")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Reason"),": All the original data is obtained by reading the asset files in the ",(0,a.kt)("inlineCode",{parentName:"p"},"library")," during the build. If the import fails, the correct corresponding asset information will not be obtained.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Solution"),": Find the corresponding asset through ",(0,a.kt)("strong",{parentName:"p"},"Assets")," panel, right-click, and select ",(0,a.kt)("strong",{parentName:"p"},"Reimport Asset")," in the menu.")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Asset Loss")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Reason"),": As mentioned in the previous construction process, ",(0,a.kt)("strong",{parentName:"p"},"asset construction will go through the reverse sequence to find dependent assets"),", and the most frequent problem is that the dependent assets are accidentally during the project iteration process delete and cause asset loss. The loss of these assets may not usually be noticed, but once the build is performed, it will be exposed.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Solution"),": Use the code editor to find out which assets the ",(0,a.kt)("inlineCode",{parentName:"p"},"UUID")," is referenced, and modify the corresponding assets."))))),(0,a.kt)("h3",{id:"script-asset-loading-error"},"Script asset loading error"),(0,a.kt)("p",null,"As mentioned in the previous section of ",(0,a.kt)("strong",{parentName:"p"},"Building Data Sorting"),", the script environment needs to be configured when building. If the error message is related to the script, please refer to the error content to modify the script. If it is unknown which script is reporting the error, find the ",(0,a.kt)("inlineCode",{parentName:"p"},"UUID")," of the corresponding script in the error message call stack, and then find the location in the ",(0,a.kt)("strong",{parentName:"p"},"Assets")," panel."),(0,a.kt)("h3",{id:"how-to-find-the-big-picture-after-the-small-picture-is-automatically-combined"},"How to find the big picture after the small picture is automatically combined"),(0,a.kt)("p",null,"The Auto Atlas will print out the UUID information of the original small image and the synthesized large image during the build process, which can be found in the build devtools, and then use the UUID of the composite large image found to generate the ",(0,a.kt)("inlineCode",{parentName:"p"},"XXXBundle/native")," after packaging. You can view it in the directory. If there are too many combined images, open the build ",(0,a.kt)("inlineCode",{parentName:"p"},"log")," file and search for the UUID."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"build-atlas",src:n(19838).Z,width:"998",height:"120"})),(0,a.kt)("h3",{id:"how-to-decompress-uuids"},"How to decompress UUIDs"),(0,a.kt)("p",null,"In ",(0,a.kt)("strong",{parentName:"p"},"release")," mode, the packaged asset JSON file and the ",(0,a.kt)("inlineCode",{parentName:"p"},"UUID")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"config.json")," are compressed and need to be unzipped to find the corresponding assets in the original project. There are some built-in tools and methods in the build process. On the global variable Build, directly click ",(0,a.kt)("strong",{parentName:"p"},"Developer -> Build DevTools")," in the main menu, the original ",(0,a.kt)("inlineCode",{parentName:"p"},"UUID")," can be queried in the console by entering the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"Build.Utils.decompressUuid('425o80X19KipOK7J1f5hsN');\n// 42e68f34-5f5f-4a8a-938a-ec9d5fe61b0d\n")),(0,a.kt)("h3",{id:"engine-compilation-failed"},"Engine compilation failed"),(0,a.kt)("p",null,"If the engine fails to compile, please check if the installation package is complete, if the modified built-in engine code is correct, and if you are using a custom engine, if the path is correct, etc."),(0,a.kt)("h3",{id:"other-errors"},"Other errors"),(0,a.kt)("p",null,"If errors are encountered that cannot be resolved, please send feedback to the ",(0,a.kt)("a",{parentName:"p",href:"https://discuss.cocos2d-x.org/c/creator/33"},"Cocos Forum")," with the version of Creator, build options configuration, build log file from the build task, and a demo that reproduces the issue."))}u.isMDXComponent=!0},19838:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/build-atlas-6400a80cf9f5d5f5df21aafe403828b0.jpg"},19178:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/build-engine-feabbf1dbd2b0f207a68e2a7ed828860.jpg"},73079:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/bundle-e25b16cdfc7dd04f34b6d6b2c1409a4e.png"},46052:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/web-1b3e43729c88e21d2777c9dc17b544c7.png"}}]);