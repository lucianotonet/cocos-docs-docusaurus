"use strict";(self.webpackChunkcocos_docs_docusaurus=self.webpackChunkcocos_docs_docusaurus||[]).push([[3311],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=l(n),h=r,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||a;return n?o.createElement(m,p(p({ref:t},d),{},{components:n})):o.createElement(m,p({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,p[1]=i;for(var l=2;l<a;l++)p[l]=n[l];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3882:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={},p="Inspector Panel",i={unversionedId:"editor/inspector/index",id:"editor/inspector/index",title:"Inspector Panel",description:"The Inspector panel is the work area for viewing and editing the currently selected nodes, node components, and assets. Properties can be displayed and edited in the Inspector panel by selecting a node in the Scene panel or Hierarchy panel, or by selecting an asset in the Assets panel.",source:"@site/docs/editor/inspector/index.md",sourceDirName:"editor/inspector",slug:"/editor/inspector/",permalink:"/docs/editor/inspector/",draft:!1,editUrl:"https://github.com/cocos/cocos-docs/docs/editor/inspector/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Hierarchy Panel",permalink:"/docs/editor/hierarchy/"},next:{title:"Collect and Count",permalink:"/docs/editor/l10n/collect-and-count"}},s={},l=[{value:"Panel overview",id:"panel-overview",level:2},{value:"Toolbar",id:"toolbar",level:2},{value:"Property Settings",id:"property-settings",level:2},{value:"Node name and activation switch",id:"node-name-and-activation-switch",level:3},{value:"Node properties",id:"node-properties",level:3},{value:"Component property settings",id:"component-property-settings",level:3},{value:"Adding components",id:"adding-components",level:2},{value:"Property types",id:"property-types",level:2},{value:"Value type properties",id:"value-type-properties",level:3},{value:"Reference type properties",id:"reference-type-properties",level:3},{value:"Batch operations",id:"batch-operations",level:2},{value:"Edit Prefab node properties",id:"edit-prefab-node-properties",level:2}],d={toc:l},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"inspector-panel"},"Inspector Panel"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Inspector")," panel is the work area for viewing and editing the currently selected nodes, node components, and assets. Properties can be displayed and edited in the ",(0,r.kt)("strong",{parentName:"p"},"Inspector")," panel by selecting a node in the ",(0,r.kt)("strong",{parentName:"p"},"Scene")," panel or ",(0,r.kt)("strong",{parentName:"p"},"Hierarchy")," panel, or by selecting an asset in the ",(0,r.kt)("strong",{parentName:"p"},"Assets")," panel."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"introduce",src:n(72907).Z,width:"808",height:"532"})),(0,r.kt)("h2",{id:"panel-overview"},"Panel overview"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"inspector",src:n(48402).Z,width:"793",height:"562"})),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Inspector")," panel can be divided into two parts: ",(0,r.kt)("strong",{parentName:"p"},"Toolbar")," and ",(0,r.kt)("strong",{parentName:"p"},"Property Settings"),"."),(0,r.kt)("h2",{id:"toolbar"},"Toolbar"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"two arrows")," in the top left corner are the edit history, click on them to advance/reverse the selected nodes/assets. ",(0,r.kt)("br",null),"\nThe ",(0,r.kt)("strong",{parentName:"p"},"lock")," button in the upper right corner can lock the panel, fixing the currently edited object and not allowing the panel to change with new selections."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"header",src:n(25875).Z,width:"336",height:"99"})),(0,r.kt)("h2",{id:"property-settings"},"Property Settings"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Property Settings")," area allows setting node properties, component properties, asset properties, etc."),(0,r.kt)("h3",{id:"node-name-and-activation-switch"},"Node name and activation switch"),(0,r.kt)("p",null,"Node name, consistent with the node name displayed in ",(0,r.kt)("strong",{parentName:"p"},"Hierarchy")," panel."),(0,r.kt)("p",null,"The Node checkbox indicates the node's enabled/disabled status. When unchecked, the node is disabled and rendering of the node will be suspended, and the node's children will be hidden (grayed out)."),(0,r.kt)("h3",{id:"node-properties"},"Node properties"),(0,r.kt)("p",null,"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"Node")," below the node name to collapse or expand the node's properties. To the right of ",(0,r.kt)("inlineCode",{parentName:"p"},"Node")," are the ",(0,r.kt)("strong",{parentName:"p"},"Help Documentations")," and ",(0,r.kt)("strong",{parentName:"p"},"Node Settings")," buttons."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The Help button jumps to the official documentation about the node.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click the Node Settings button to perform the following operations on the node:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Reset the node properties.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy/paste the node values.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy/paste world transform of the node, including ",(0,r.kt)("inlineCode",{parentName:"p"},"worldPosition"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"worldRotation"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"worldScale")," properties.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Reset the ",(0,r.kt)("inlineCode",{parentName:"p"},"Position"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"Rotation"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"Scale")," properties of the node respectively."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"node-menu",src:n(49945).Z,width:"504",height:"373"})))))),(0,r.kt)("p",null,"The transformation properties of nodes include ",(0,r.kt)("strong",{parentName:"p"},"Position"),", ",(0,r.kt)("strong",{parentName:"p"},"Rotation")," and ",(0,r.kt)("strong",{parentName:"p"},"Scale"),". Modifying the properties of a node will usually result in immediate changes in the appearance or position of the node in the ",(0,r.kt)("strong",{parentName:"p"},"Scene")," panel. For details, please review the ",(0,r.kt)("a",{parentName:"p",href:"../../concepts/scene/coord.md#transformation-properties"},"Coordinate Systems and Transformations")," documentation."),(0,r.kt)("p",null,"To modify node properties in a batch, press Shift in the ",(0,r.kt)("strong",{parentName:"p"},"Hierarchy")," panel to select multiple nodes and then set them in batch in the ",(0,r.kt)("strong",{parentName:"p"},"Inspector")," panel. The batch setting of node properties is similar to that of assets, please refer to the Batch Setting of Assets Multiple Selection section at the end of this article for details."),(0,r.kt)("h3",{id:"component-property-settings"},"Component property settings"),(0,r.kt)("p",null,"The Component checkbox indicates the enabled/disabled state of the component. When unchecked, the component is disabled and will not participate in rendering."),(0,r.kt)("p",null,"Below the node properties, all the components attached on the node and the component properties are listed. As with the node properties, clicking on a component's name toggles the collapsed/expanded state of that component's properties. In the case of many components attached on the node, collapse infrequently modified component properties to get a larger working area."),(0,r.kt)("p",null,"To the right of the component name are buttons for ",(0,r.kt)("strong",{parentName:"p"},"Help Documentations")," and ",(0,r.kt)("strong",{parentName:"p"},"Component Settings"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Help Documentations button jumps to the official documentation page for the component."),(0,r.kt)("li",{parentName:"ul"},"The Component Settings button allows resetting, deleting, moving up, moving down, copying the component, paste the component's value, paste it as a new component, etc. for the component.")),(0,r.kt)("p",null,"The properties and settings of each component are different, please refer to the corresponding component description documentation for details."),(0,r.kt)("h2",{id:"adding-components"},"Adding components"),(0,r.kt)("p",null,"Clicking the ",(0,r.kt)("strong",{parentName:"p"},"Add Component")," button brings up a list of components, including system-provided components and custom script components. The list of added components has a search box that supports toggling with the up and down keys and confirming the selection with ",(0,r.kt)("strong",{parentName:"p"},"Enter"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"add-component",src:n(51924).Z,width:"507",height:"646"})),(0,r.kt)("p",null,"Developers' script in the ",(0,r.kt)("strong",{parentName:"p"},"Assets")," panel can be dragged and dropped directly into the ",(0,r.kt)("strong",{parentName:"p"},"Inspector")," panel to generate a script component, or added via ",(0,r.kt)("strong",{parentName:"p"},"Add Component -> Custom Script"),". The properties of a script component are declared by the script. Different types of properties have different control appearance and editing in the ",(0,r.kt)("strong",{parentName:"p"},"Inspector")," panel. We will add the properties in ",(0,r.kt)("a",{parentName:"p",href:"../../scripting/decorator.md"},"Declare Properties")," section for details on how properties are defined."),(0,r.kt)("h2",{id:"property-types"},"Property types"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Property")," is a publicly available variable declared in the component script that can be serialized and stored in the scene and animation data. The ",(0,r.kt)("strong",{parentName:"p"},"Inspector")," panel allows quickly modifying property settings for the purpose of adjusting game data and game play without modifying the script."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Property")," can usually be divided into two categories, ",(0,r.kt)("strong",{parentName:"p"},"value type")," and ",(0,r.kt)("strong",{parentName:"p"},"reference type"),", depending on where the variable uses memory."),(0,r.kt)("h3",{id:"value-type-properties"},"Value type properties"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Value Types")," include simple variable types that take up very little memory, such as numbers, strings, booleans, enumerations, etc."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Number"),": can be entered directly using the keyboard or incremented or decremented by pressing the up and down arrows next to the input box.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Vec2"),": the control of a vector is a combination of two numeric inputs, and the input box is marked with x and y to identify the sub-property name corresponding to each value.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"String"),": entered directly into the text box using the keyboard.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Boolean"),": edited in the form of a checkbox, the selected state means the property value is true, the non-selected state means false.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Enum"),": edited in the form of a drop-down menu. Click the enumeration menu, and then select an item from the pop-up menu list to finish modifying the enumeration value.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Color"),": click on the color property preview box, the ",(0,r.kt)("strong",{parentName:"p"},"Color Picker")," window will pop up, in this window use the mouse to directly click on the desired color, or directly enter the specified color in the RGBA color input box below. Clicking anywhere outside the ",(0,r.kt)("strong",{parentName:"p"},"Color Picker")," window will close the window and use the last selected color as the property value. For example, the color picker component."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"ui-color",src:n(33933).Z,width:"383",height:"464"})))),(0,r.kt)("h3",{id:"reference-type-properties"},"Reference type properties"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Reference Types")," include ",(0,r.kt)("inlineCode",{parentName:"p"},"object")," objects, such as nodes, components, or assets. They can be selected and assigned by ",(0,r.kt)("strong",{parentName:"p"},"dragging the node or asset into the property bar")," or by ",(0,r.kt)("strong",{parentName:"p"},"popping up the asset panel"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"assets-panel",src:n(13378).Z,width:"471",height:"597"})),(0,r.kt)("h2",{id:"batch-operations"},"Batch operations"),(0,r.kt)("p",null,"When needing to set asset properties of the ",(0,r.kt)("strong",{parentName:"p"},"same type")," in a batch, press Shift in the ",(0,r.kt)("strong",{parentName:"p"},"Assets")," panel and select multiple assets, the ",(0,r.kt)("strong",{parentName:"p"},"Inspector")," panel will show the number of assets selected and the editable asset properties. Click the ",(0,r.kt)("strong",{parentName:"p"},"Apply")," button at the top right when done."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"multiple-edit",src:n(29667).Z,width:"998",height:"676"})),(0,r.kt)("p",null,"Batch modification of node properties is the same. However, if an property in the ",(0,r.kt)("strong",{parentName:"p"},"Inspector")," panel displays one of the following states, it means that the property has inconsistent property values across the multiple assets selected, and choose whether to continue to batch modify the property as needed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The check box displays ",(0,r.kt)("strong",{parentName:"li"},"Grey"),"."),(0,r.kt)("li",{parentName:"ul"},"The input box displays ",(0,r.kt)("strong",{parentName:"li"},"-"),"."),(0,r.kt)("li",{parentName:"ul"},"The selection box displays ",(0,r.kt)("strong",{parentName:"li"},"blank"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Notes"),":"),(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"Batch setting operations are not currently supported for Material assets."),(0,r.kt)("li",{parentName:"ol"},"Assets of ",(0,r.kt)("strong",{parentName:"li"},"different types")," can be selected at the same time, but they do not support setting properties in batch."))),(0,r.kt)("h2",{id:"edit-prefab-node-properties"},"Edit Prefab node properties"),(0,r.kt)("p",null,"The Prefab node functions in the top toolbar of the ",(0,r.kt)("strong",{parentName:"p"},"Inspector")," panel include: disassociate, locate asset, restore from asset, and update to asset. For details, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"../../asset/prefab.md"},"Prefab")," documentation."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"prefab-menu",src:n(73556).Z,width:"315",height:"134"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": when editing the asset, please remember to save it by clicking the ",(0,r.kt)("strong",{parentName:"p"},"green tick")," button in the upper right corner."),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("img",{alt:"edit-assets",src:n(63766).Z,width:"314",height:"82"}))))}u.isMDXComponent=!0},51924:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/add-component-b0fdf8b852a77d2e7cb87449cc2fa629.png"},13378:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/assets-panel-93be93d047699bd8f0847d87a69d79ee.png"},63766:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"},25875:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"},48402:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/inspector-panel-463b83a93bc868a3f24edfba87dd4ea6.png"},72907:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/introduce-b6ad214161ca37883af35f92c3fbb689.gif"},29667:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/multiple-edit1-ca555dcd7cc9bdb554d6323bba933c1f.png"},49945:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/node-menu-f8364b255f7bbcbc37cf4913fff8133f.png"},73556:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"},33933:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/ui-color-08e3101064550b63b7f84d2338355bb6.png"}}]);