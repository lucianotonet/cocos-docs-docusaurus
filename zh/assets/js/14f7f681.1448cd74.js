"use strict";(self.webpackChunkcocos_docs_docusaurus=self.webpackChunkcocos_docs_docusaurus||[]).push([[3977],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?o.createElement(h,r(r({ref:t},d),{},{components:n})):o.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},72903:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const i={},r="Installation and Configuration of Native Development Environment",l={unversionedId:"editor/publish/setup-native-development",id:"editor/publish/setup-native-development",title:"Installation and Configuration of Native Development Environment",description:"Apart from publishing games to the Web, Cocos Creator uses JSB technology based on the Cocos2d-x engine for the cross-platform publishing of native games. Before using Cocos Creator to build and publish games to native platforms, it is necessary to configure Cocos2d-x related development environment first.",source:"@site/docs/editor/publish/setup-native-development.md",sourceDirName:"editor/publish",slug:"/editor/publish/setup-native-development",permalink:"/zh/docs/editor/publish/setup-native-development",draft:!1,editUrl:"https://github.com/cocos/cocos-docs/docs/editor/publish/setup-native-development.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Publish to Xiaomi Quick Games",permalink:"/zh/docs/editor/publish/publish-xiaomi-quick-game"},next:{title:"Mini Game Subpackage",permalink:"/zh/docs/editor/publish/subpackage"}},s={},p=[{value:"Android Platform Dependencies",id:"android-platform-dependencies",level:2},{value:"Downloading the Java SDK (JDK)",id:"downloading-the-java-sdk-jdk",level:3},{value:"Downloading and Installing Android Studio",id:"downloading-and-installing-android-studio",level:3},{value:"Downloading the SDK and NDK required to publish to the Android platform",id:"downloading-the-sdk-and-ndk-required-to-publish-to-the-android-platform",level:3},{value:"Installing C++ Compiling Environment",id:"installing-c-compiling-environment",level:2},{value:"Configuring Native development environments path",id:"configuring-native-development-environments-path",level:2},{value:"Notes",id:"notes",level:2}],d={toc:p},m="wrapper";function c(e){let{components:t,...i}=e;return(0,a.kt)(m,(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation-and-configuration-of-native-development-environment"},"Installation and Configuration of Native Development Environment"),(0,a.kt)("p",null,"Apart from publishing games to the Web, ",(0,a.kt)("strong",{parentName:"p"},"Cocos Creator")," uses JSB technology based on the ",(0,a.kt)("strong",{parentName:"p"},"Cocos2d-x")," engine for the cross-platform publishing of native games. Before using ",(0,a.kt)("strong",{parentName:"p"},"Cocos Creator")," to build and publish games to native platforms, it is necessary to configure ",(0,a.kt)("strong",{parentName:"p"},"Cocos2d-x")," related development environment first."),(0,a.kt)("h2",{id:"android-platform-dependencies"},"Android Platform Dependencies"),(0,a.kt)("p",null,"To publish to the Android platform, it is necessary to install all of the following development environments. If there is no need to publish to the Android platform, or if the operating system already has a full Android development environment, skip this section."),(0,a.kt)("h3",{id:"downloading-the-java-sdk-jdk"},"Downloading the Java SDK (JDK)"),(0,a.kt)("p",null,"Compiling the Android project requires a complete Java SDK tool on the local computer, download it at the following address:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.oracle.com/java/technologies/downloads/#java8"},"Java SE Development Kit 8 Downloads")),(0,a.kt)("p",null,"Before downloading, make sure to select the operating system and architecture that matches the machine architecture and operating system. Run the installer after the download is complete."),(0,a.kt)("p",null,"After the installation is complete, please confirm that the ",(0,a.kt)("inlineCode",{parentName:"p"},"java")," command is valid on the command line. Input the following code into Mac terminal or Windows command line tool to check:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"java -version\n")),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"JAVA SE")," is displayed, there is no problem. If ",(0,a.kt)("inlineCode",{parentName:"p"},"JRE")," is displayed, then it is necessary to install the ",(0,a.kt)("a",{parentName:"p",href:"http://www.oracle.com/technetwork/java/javase/downloads/index.html"},"JAVA SE environment"),"."),(0,a.kt)("p",null,"On the Windows platform, confirm if ",(0,a.kt)("inlineCode",{parentName:"p"},"JAVA_HOME")," is included in the system environmental variables. By right-clicking the ",(0,a.kt)("strong",{parentName:"p"},"Computer")," icon and choosing ",(0,a.kt)("strong",{parentName:"p"},"Property -> Advanced system settings -> Environment Variables")," to check and modify environmental variables. It may be necessary to restart the system after the changes are made before they take effect on the Windows platform. For details, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://www.java.com/en/download/help/path.xml"},"How do I set or change the PATH system variable?")," documentation."),(0,a.kt)("h3",{id:"downloading-and-installing-android-studio"},"Downloading and Installing Android Studio"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Cocos Creator does not support Eclipse's ANT")," build, it is necessary to use ",(0,a.kt)("strong",{parentName:"p"},"Android Studio 4.1 and above")," as an Android platform's build tool and download the required SDK and NDK packages in ",(0,a.kt)("strong",{parentName:"p"},"Android Studio"),". First, install ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/studio#downloads"},"Android Studio"),"."),(0,a.kt)("h3",{id:"downloading-the-sdk-and-ndk-required-to-publish-to-the-android-platform"},"Downloading the SDK and NDK required to publish to the Android platform"),(0,a.kt)("p",null,"After installing ",(0,a.kt)("strong",{parentName:"p"},"Android Studio"),", refer to the official documentation and open the ",(0,a.kt)("strong",{parentName:"p"},"SDK Manager"),": ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/intro/update.html#sdk-manager"},"SDK Manager Instructions"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("strong",{parentName:"li"},"SDK Platforms")," tab page, check the API level you want to install, and it is recommended to select the required mainstream API Level such as ",(0,a.kt)("inlineCode",{parentName:"li"},"API Level 26 (8.0)"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"API Level 28 (9.0)"),", etc."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("strong",{parentName:"li"},"SDK Tools")," tab page, first check the lower right corner of the ",(0,a.kt)("strong",{parentName:"li"},"Show Package Details"),", to show the version of the tool selection."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Android SDK Build-Tools"),", select the latest build tools version."),(0,a.kt)("li",{parentName:"ol"},"Check the ",(0,a.kt)("strong",{parentName:"li"},"Android SDK Platform-Tools")," and ",(0,a.kt)("strong",{parentName:"li"},"CMake"),". To install the ",(0,a.kt)("strong",{parentName:"li"},"Android Support Library"),", please refer to the official ",(0,a.kt)("a",{parentName:"li",href:"https://developer.android.com/topic/libraries/support-library/setup"},"Support Library Setup")," documentation."),(0,a.kt)("li",{parentName:"ol"},"Check the ",(0,a.kt)("strong",{parentName:"li"},"NDK")," and the recommended version is ",(0,a.kt)("strong",{parentName:"li"},"r18~21"),"."),(0,a.kt)("li",{parentName:"ol"},"Take note of the path of ",(0,a.kt)("strong",{parentName:"li"},"Android SDK Location")," on top of the ",(0,a.kt)("strong",{parentName:"li"},"SDK Manager")," window. Later we need to fill in the location of the SDK in ",(0,a.kt)("strong",{parentName:"li"},"Cocos Creator"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"OK")," and follow the prompts to complete the installation.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"sdk manager",src:n(73773).Z,width:"934",height:"698"})),(0,a.kt)("h2",{id:"installing-c-compiling-environment"},"Installing C++ Compiling Environment"),(0,a.kt)("p",null,"Please install the following runtime environment:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In Windows, the installation of ",(0,a.kt)("a",{parentName:"p",href:"https://www.visualstudio.com/downloads/download-visual-studio-vs"},"Visual Studio 2017/2019 Community Edition")," is needed. When installing Visual Studio, please check ",(0,a.kt)("strong",{parentName:"p"},"Desktop development with C++")," and ",(0,a.kt)("strong",{parentName:"p"},"Game development with C++")," two modules."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note"),": there is a ",(0,a.kt)("strong",{parentName:"p"},"Cocos")," option in the ",(0,a.kt)("strong",{parentName:"p"},"Game development with C++")," module. Do ",(0,a.kt)("strong",{parentName:"p"},"NOT")," check it."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"On macOS, the installation of ",(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/xcode/download/"},"Xcode")," and the command-line tools are necessary."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Notes"),":"),(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},"Starting with ",(0,a.kt)("strong",{parentName:"li"},"v3.0.1"),", Xcode ",(0,a.kt)("strong",{parentName:"li"},"v11.5")," and above is required."),(0,a.kt)("li",{parentName:"ol"},"Starting with ",(0,a.kt)("strong",{parentName:"li"},"v3.1"),", macOS ",(0,a.kt)("strong",{parentName:"li"},"v10.14")," and above is required."))))),(0,a.kt)("h2",{id:"configuring-native-development-environments-path"},"Configuring Native development environments path"),(0,a.kt)("p",null,"Next, go back to Cocos Creator to configure the environmental path of the native platform. Choose ",(0,a.kt)("strong",{parentName:"p"},"Cocos Creator -> Preferences")," in the main menu, and open the ",(0,a.kt)("strong",{parentName:"p"},"Preferences")," panel. We need to configure the following two paths here:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"preference",src:n(50647).Z,width:"580",height:"430"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Android NDK"),": choose the ",(0,a.kt)("inlineCode",{parentName:"p"},"ndk-bundle")," folder in ",(0,a.kt)("inlineCode",{parentName:"p"},"Android SDK Location")," path we just noted in Android Studio SDK Manager window. You can skip this if you don't need to compile on Android platform."),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note"),": the new version of Android Studio's NDK can be downloaded in multiple versions, with the previous ",(0,a.kt)("inlineCode",{parentName:"p"},"ndk-bundle")," file name changed to ",(0,a.kt)("inlineCode",{parentName:"p"},"ndk"),". You can select a specific version of the NDK as needed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ndk")," directory."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Android SDK"),": choose the ",(0,a.kt)("inlineCode",{parentName:"p"},"Android SDK Location")," path just noted in Android Studio SDK Manager window (the directory of Android SDK should include folders like ",(0,a.kt)("inlineCode",{parentName:"p"},"build-tools"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"platforms"),", etc.). Skip this if there is no need to compile for the Android platform."))),(0,a.kt)("p",null,"After the configuration is complete, Creator will automatically save it."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note"),": the configuration will work when building native project. If the configuration not work, please try to set these settings to ",(0,a.kt)("strong",{parentName:"p"},"System Environment")," manually: ",(0,a.kt)("inlineCode",{parentName:"p"},"NDK_ROOT"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"ANDROID_SDK_ROOT"),".")),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("p",null,"We have received lots of feedback about native packing in the public beta, and some possible reasons are supplemented here:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Package name issue"),(0,a.kt)("p",{parentName:"li"},"Check the ",(0,a.kt)("strong",{parentName:"p"},"Game Package Name")," in the ",(0,a.kt)("strong",{parentName:"p"},"Build")," panel. Please refer to the ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/editor/publish/native-options#build-options"},"Build Options Description")," documentation in the corresponding native platform for specific naming conventions.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Android built successfully, but prompts ",(0,a.kt)("inlineCode",{parentName:"p"},'dlopen failed: cannot locate symbol "xxxx" referenced by "libcocos2djs.so"...')," in runtime."),(0,a.kt)("p",{parentName:"li"},"Please check if the architecture and version of NDK and Android SDK correspond to the phone's Android system. In addition try to test with the NDK and Android SDK versions used in this documentation."))),(0,a.kt)("p",null,"In the end, if build still fails, please send us feedback via the ",(0,a.kt)("a",{parentName:"p",href:"https://discuss.cocos2d-x.org/c/33"},"Cocos Forum")," with Creator version, detailed reproduction steps, the build log file in the Build panel, and a demo that reproduces the problem."))}c.isMDXComponent=!0},73773:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/sdk-manager-e0fd4b1630cafe5f75f402caadcb3b45.png"},50647:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/sdk-1f651406b4cc844440d58f195fec2e52.png"}}]);