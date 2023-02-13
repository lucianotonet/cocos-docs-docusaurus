"use strict";(self.webpackChunkcocos_docs_docusaurus=self.webpackChunkcocos_docs_docusaurus||[]).push([[2160],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=l(a),d=r,h=c["".concat(s,".").concat(d)]||c[d]||u[d]||o;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},88424:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={},i="Publish to OPPO Mini Games",p={unversionedId:"editor/publish/publish-oppo-mini-game",id:"editor/publish/publish-oppo-mini-game",title:"Publish to OPPO Mini Games",description:"Note: some platforms only have Chinese documentation available when visiting the platform's website. It may be necessary to use Google Translate in-order to review the documentation.",source:"@site/docs/editor/publish/publish-oppo-mini-game.md",sourceDirName:"editor/publish",slug:"/editor/publish/publish-oppo-mini-game",permalink:"/pt/docs/editor/publish/publish-oppo-mini-game",draft:!1,editUrl:"https://github.com/cocos/cocos-docs/docs/editor/publish/publish-oppo-mini-game.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Publish to Mini Game Platforms",permalink:"/pt/docs/editor/publish/publish-mini-game"},next:{title:"Access to WeChat PC Mini Games",permalink:"/pt/docs/editor/publish/publish-pc-wechatgame"}},s={},l=[{value:"Environment Configuration",id:"environment-configuration",level:2},{value:"Release Process",id:"release-process",level:2},{value:"Subpackage rpk",id:"subpackage-rpk",level:2},{value:"Resource Management for OPPO Mini Game Environment",id:"resource-management-for-oppo-mini-game-environment",level:2},{value:"Reference documentation",id:"reference-documentation",level:2}],m={toc:l},c="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"publish-to-oppo-mini-games"},"Publish to OPPO Mini Games"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": some platforms only have Chinese documentation available when visiting the platform's website. It may be necessary to use Google Translate in-order to review the documentation.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Cocos Creator")," officially supports the release of games to the ",(0,r.kt)("strong",{parentName:"p"},"OPPO Mini Games"),"."),(0,r.kt)("h2",{id:"environment-configuration"},"Environment Configuration"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Download ",(0,r.kt)("a",{parentName:"p",href:"https://cdofs.oppomobile.com/cdo-activity/static/201810/26/quickgame/documentation/#/games/use?id=_2-%e5%ae%89%e8%a3%85-runtimeapk-%e5%8c%85%e5%88%b0-oppo-%e6%89%8b%e6%9c%ba%e4%b8%8a"},"OPPO Mini Game Debugger [cn]")," and install it on your OPPO phone (Android 6.0 or above is recommended)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"nodejs-8.1.4")," or above, globally"))),(0,r.kt)("h2",{id:"release-process"},"Release Process"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use ",(0,r.kt)("strong",{parentName:"p"},"Cocos Creator 3.0")," to open the project that needs to be released. Select ",(0,r.kt)("strong",{parentName:"p"},"OPPO Mini Game")," in the ",(0,r.kt)("strong",{parentName:"p"},"Platform")," dropdown of the ",(0,r.kt)("strong",{parentName:"p"},"Build")," panel."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"oppo build",src:a(12639).Z,width:"549",height:"768"})),(0,r.kt)("p",{parentName:"li"},"Click on the ",(0,r.kt)("strong",{parentName:"p"},"oppo-mini-game")," below to expand the build options configuration of OPPO Mini Game."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"build option",src:a(14889).Z,width:"483",height:"388"})))),(0,r.kt)("p",null,"For the general build options for each platform, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/pt/docs/editor/publish/build-options"},"General Build Options")," for details. OPPO Mini Game related build options filling rules are as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Start Scene Asset Bundle")),(0,r.kt)("p",{parentName:"li"},"This option is optional.",(0,r.kt)("br",null),"\nIf set, the start scene and its related dependent resources are built into the built-in Asset Bundle - ",(0,r.kt)("a",{parentName:"p",href:"../../asset/bundle.md#the-built-in-asset-bundle"},"start-scene")," to speed up the resource loading of the start scene.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Resource Server Address")),(0,r.kt)("p",{parentName:"li"},"This option is optional and used to fill in the address of the remote server where the resources are stored."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If this option is left blank, the ",(0,r.kt)("inlineCode",{parentName:"p"},"remote")," folder in the release package directory will be packaged into the ",(0,r.kt)("strong",{parentName:"p"},"rpk")," package.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If this option is filled in, the ",(0,r.kt)("inlineCode",{parentName:"p"},"remote")," folder will not be packaged into the built ",(0,r.kt)("strong",{parentName:"p"},"rpk")," package. You need to manually upload the ",(0,r.kt)("inlineCode",{parentName:"p"},"remote")," folder to the filled in Resource Server Address after build."))),(0,r.kt)("p",{parentName:"li"},"Refer to the Resource Management section at the bottom of the document for more details.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Game Package Name"),": is filled in according to the user's needs. It's required.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Desktop Icon"),": is required. Click the ",(0,r.kt)("strong",{parentName:"p"},"search icon")," button at the back of the input box to select the icon you want. When building, the Desktop Icon will be built into the ",(0,r.kt)("strong",{parentName:"p"},"OPPO Mini Game")," project. It is suggested to use ",(0,r.kt)("strong",{parentName:"p"},"PNG")," images for the ",(0,r.kt)("strong",{parentName:"p"},"Desktop Icon"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Game Version Name"),": is required. ",(0,r.kt)("strong",{parentName:"p"},"Game Version Name")," is the real version, such as: 1.0.0.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Game Version Number"),": is required. ",(0,r.kt)("strong",{parentName:"p"},"Game Version Number")," is different from the ",(0,r.kt)("strong",{parentName:"p"},"Game Version Name"),", and the ",(0,r.kt)("strong",{parentName:"p"},"Game Version Number")," is mainly used to distinguish the version update. Each time when you submit audit, the game version number is at least 1 higher than the value of the last submitted audit. It must not be equal to or less than the value of the last submitted audit, and it is recommended that the ",(0,r.kt)("strong",{parentName:"p"},"Game Version Number")," be recursively incremented by 1 each time when the audit is submitted."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": the ",(0,r.kt)("strong",{parentName:"p"},"Game Version Number")," must be a positive integer."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Supported Minimum Platform Version Number"),": is required. According to the requirements for OPPO Mini Games, this value must be greater than or equal to ",(0,r.kt)("strong",{parentName:"p"},"1031"),", and ",(0,r.kt)("strong",{parentName:"p"},"1060")," is recommended. Refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://cdofs.oppomobile.com/cdo-activity/static/201810/26/quickgame/documentation/#/games/use"},"Instructions [cn]")," for details.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Screen Orientation"),": The screen orientation currently includes ",(0,r.kt)("strong",{parentName:"p"},"Portrait")," and ",(0,r.kt)("strong",{parentName:"p"},"Landscape"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Seperate Engine"),": This feature reduces the size of the first package for each mini-game by sharing the global engine. When enabled, if the engine already has a cache in the phone, the first package download will automatically remove the engine file and load the full version of the engine cached in the phone. If there is no cache in the phone, the full first package will be loaded, and the complete first package will contain the entire engine.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Keystore"),": when you check the ",(0,r.kt)("strong",{parentName:"p"},"Keystore"),", the default is to build the rpk package with a certificate that comes with Creator, which is used only for ",(0,r.kt)("strong",{parentName:"p"},"debugging"),"."),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": when the rpk package is to be used to submit an audit, do not check the ",(0,r.kt)("strong",{parentName:"p"},"Keystore")," to build it.")),(0,r.kt)("p",{parentName:"li"},"If you don't check the ",(0,r.kt)("strong",{parentName:"p"},"Keystore"),", you need to configure the signature files ",(0,r.kt)("strong",{parentName:"p"},"certificate.pem path")," and ",(0,r.kt)("strong",{parentName:"p"},"private.pem path"),", where you build a rpk package that you can ",(0,r.kt)("strong",{parentName:"p"},"publish directly"),". The user can configure two signature files by using the ",(0,r.kt)("strong",{parentName:"p"},"search icon")," button to the right of the input box."),(0,r.kt)("p",{parentName:"li"},"There are two ways to generate a signature files:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Generated by the ",(0,r.kt)("strong",{parentName:"p"},"New")," button after the ",(0,r.kt)("strong",{parentName:"p"},"certificate.pem path")," in the ",(0,r.kt)("strong",{parentName:"p"},"Build")," panel.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Generated by the command line."),(0,r.kt)("p",{parentName:"li"},"  The user needs to generate the signature file ",(0,r.kt)("strong",{parentName:"p"},"private.pem"),", ",(0,r.kt)("strong",{parentName:"p"},"certificate.pem")," through tools such as ",(0,r.kt)("strong",{parentName:"p"},"openssl"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Generate a signature file with the openssl command tool\nopenssl req -newkey rsa:2048 -nodes -keyout private.pem   -x509 -days 3650 -out certificate.pem\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": ",(0,r.kt)("strong",{parentName:"p"},"openssl")," can be used directly in the terminal in ",(0,r.kt)("strong",{parentName:"p"},"Linux")," or ",(0,r.kt)("strong",{parentName:"p"},"Mac")," environment, and in the ",(0,r.kt)("strong",{parentName:"p"},"Windows")," environment you need to install ",(0,r.kt)("strong",{parentName:"p"},"openssl")," and configure system environment variables. Restart ",(0,r.kt)("strong",{parentName:"p"},"Cocos Creator")," after the configuration is complete.")))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. Build")),(0,r.kt)("p",null,"After the relevant parameters of the ",(0,r.kt)("strong",{parentName:"p"},"Build")," panel are set, click ",(0,r.kt)("strong",{parentName:"p"},"Build"),". When the build is complete, click the ",(0,r.kt)("strong",{parentName:"p"},"folder icon")," button below the corresponding build task to open the build release path, you can see that a directory with the same name as the ",(0,r.kt)("strong",{parentName:"p"},"Build Task Name")," is generated in the default release path ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," directory, which is the exported OPPO Mini Game project directory and ",(0,r.kt)("strong",{parentName:"p"},"rpk"),", ",(0,r.kt)("strong",{parentName:"p"},"rpk")," package is in the ",(0,r.kt)("inlineCode",{parentName:"p"},"dist")," directory."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"package",src:a(37549).Z,width:"589",height:"243"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. Run the built rpk to the phone")),(0,r.kt)("p",null,"Copy the generated mini-game ",(0,r.kt)("strong",{parentName:"p"},"rpk")," file to the ",(0,r.kt)("inlineCode",{parentName:"p"},"games")," directory on the phone's internal storage. Then open the ",(0,r.kt)("strong",{parentName:"p"},"Mini Game Debugger")," that has been installed before on the OPPO phone, click the ",(0,r.kt)("strong",{parentName:"p"},"OPPO Mini Game")," section, and then find the icon corresponding to the game name. If not found, click on the ",(0,r.kt)("strong",{parentName:"p"},"More -> Refresh")," button in the upper right corner to refresh."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": if the OPPO Mini Game Debugger version is ",(0,r.kt)("inlineCode",{parentName:"p"},"v3.2.0")," and above, copy the mini-game ",(0,r.kt)("strong",{parentName:"p"},"rpk")," file to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Android/data/com.nearme.instant.platform/files/games")," directory on the OPPO phone's internal storage. If there is no ",(0,r.kt)("inlineCode",{parentName:"p"},"games")," directory, create a new one. Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://cdofs.oppomobile.com/cdo-activity/static/201810/26/quickgame/documentation/#/games/use?id=_3-%e6%96%b0%e5%bb%ba%e7%9b%ae%e5%bd%95"},"Instructions -- New Directory [cn]")," for details.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"rpk games",src:a(12436).Z,width:"336",height:"400"})),(0,r.kt)("h2",{id:"subpackage-rpk"},"Subpackage rpk"),(0,r.kt)("p",null,"Subpackage ",(0,r.kt)("strong",{parentName:"p"},"rpk")," can be used according to your needs."),(0,r.kt)("p",null,"Subpackage loading, which is, splitting the game content into several packages according to certain rules, only downloading the necessary packages when starting up for the first time. This necessary package is called ",(0,r.kt)("strong",{parentName:"p"},"main package"),", The developer can trigger in the main package to download other sub-packages, which can effectively reduce the time spent on the first boot."),(0,r.kt)("p",null,"To use this function, set the ",(0,r.kt)("a",{parentName:"p",href:"/pt/docs/editor/publish/subpackage"},"Bundle Configuration")," in ",(0,r.kt)("strong",{parentName:"p"},"Cocos Creator"),", and the package will be automatically subpackaged when the setting is completed."),(0,r.kt)("p",null,"After the build is complete, the subpackage directory is in the ",(0,r.kt)("inlineCode",{parentName:"p"},"dist")," directory. In this case, create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"subPkg")," directory in the internal storage directory of the OPPO phone, and then copy the ",(0,r.kt)("strong",{parentName:"p"},".rpk")," file in the ",(0,r.kt)("inlineCode",{parentName:"p"},"dist")," directory to the ",(0,r.kt)("inlineCode",{parentName:"p"},"subPkg")," directory."),(0,r.kt)("p",null,"Then switch to the ",(0,r.kt)("strong",{parentName:"p"},"Package Load")," section of OPPO ",(0,r.kt)("strong",{parentName:"p"},"Mini Game Debugger"),", click ",(0,r.kt)("strong",{parentName:"p"},"Refresh")," at the top right to see the game name of the subpackage, click ",(0,r.kt)("strong",{parentName:"p"},"Second Open")," to use the same as the normal packaged ",(0,r.kt)("strong",{parentName:"p"},"rpk"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"run_subpackage",src:a(32441).Z,width:"336",height:"400"})),(0,r.kt)("p",null,"Subpackage rpk needs to be copied to the ",(0,r.kt)("inlineCode",{parentName:"p"},"subPkg")," directory of OPPO phone's internal storage, and non-subpackaged rpk needs to be copied to the ",(0,r.kt)("inlineCode",{parentName:"p"},"games")," directory of OPPO phone's internal storage, both of which cannot be mixed."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": if the OPPO Mini Game Debugger version is ",(0,r.kt)("strong",{parentName:"p"},"v3.2.0")," and above, copy the mini game subpackaged ",(0,r.kt)("strong",{parentName:"p"},"rpk")," file to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Android/data/com.nearme.instant.platform/files/subPkg")," directory on the OPPO phone's internal storage, or create a new one if there is no ",(0,r.kt)("inlineCode",{parentName:"p"},"subPkg")," directory. The non-subpackaged rpk is copied to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Android/data/com.nearme.instant.platform/files/games")," directory on the OPPO phone's internal storage, and the two cannot be mixed.")),(0,r.kt)("p",null,"For more information, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://activity-cdo.heytapimage.com/cdo-activity/static/201810/26/quickgame/documentation/#/subpackage/subpackage"},"OPPO Mini Game - Subpackage [cn]")," documentation."),(0,r.kt)("h2",{id:"resource-management-for-oppo-mini-game-environment"},"Resource Management for OPPO Mini Game Environment"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"OPPO Mini Game")," is similar to ",(0,r.kt)("strong",{parentName:"p"},"WeChat Mini Game"),". There are restrictions on the package size. The main package size limit for OPPO Mini Game is ",(0,r.kt)("strong",{parentName:"p"},"4MB"),", more than that must be downloaded via a network request."),(0,r.kt)("p",null,"Cocos Creator already helps developers with downloading, caching and version management of remote resources. Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"../../asset/cache-manager.md#resource-download-process"},"Cache Manager")," documentation for details."),(0,r.kt)("h2",{id:"reference-documentation"},"Reference documentation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.oppomobile.com/wiki/doc/index#id=88"},"OPPO Developer Guides")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://activity-cdo.heytapimage.com/cdo-activity/static/201810/26/quickgame/documentation/#/games/quickgame"},"OPPO Mini Game Tutorial [cn]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://activity-cdo.heytapimage.com/cdo-activity/static/201810/26/quickgame/documentation/#/feature/account"},"OPPO Mini Game API Documentation [cn]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://activity-cdo.heytapimage.com/cdo-activity/static/201810/26/quickgame/documentation/#/games/use"},"OPPO Mini Game Tool Download [cn]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://activity-cdo.heytapimage.com/cdo-activity/static/201810/26/quickgame/documentation/#/games/use?id=_3-%e6%96%b0%e5%bb%ba%e7%9b%ae%e5%bd%95"},"OPPO Mini Game Instructions -- New Directory [cn]"))))}u.isMDXComponent=!0},14889:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/build-option-f41656e5ddd8a8b021ebeb5d46be1b76.png"},12639:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/oppo-build-97da6aa5d2ae19c3cf91a0c6be662ba4.png"},37549:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/package-f48ed94ee71141f91f289cccd144a793.png"},12436:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rpk_games-67e88c28be1ab3f017400cbf9f657702.jpg"},32441:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/run_subpackage-6cd6ec78a834a22ed04c8a906d467e32.jpg"}}]);