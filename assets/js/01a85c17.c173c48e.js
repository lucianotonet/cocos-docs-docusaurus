"use strict";(self.webpackChunkcocos_docs_docusaurus=self.webpackChunkcocos_docs_docusaurus||[]).push([[4013],{39058:(e,t,a)=>{a.d(t,{Z:()=>E});var l=a(67294),r=a(86010),s=a(47676),n=a(87524),i=a(39960),c=a(95999);const m={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};function o(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,r.Z)(m.sidebar,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(m.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,r.Z)(m.sidebarItemList,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:m.sidebarItem},l.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:m.sidebarItemLink,activeClassName:m.sidebarItemLinkActive},e.title)))))))}var u=a(13102);function d(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function g(e){return l.createElement(u.Zo,{component:d,props:e})}function b(e){let{sidebar:t}=e;const a=(0,n.i)();return t?.items.length?"mobile"===a?l.createElement(g,{sidebar:t}):l.createElement(o,{sidebar:t}):null}function E(e){const{sidebar:t,toc:a,children:n,...i}=e,c=t&&t.items.length>0;return l.createElement(s.Z,i,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(b,{sidebar:t}),l.createElement("main",{className:(0,r.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},n),a&&l.createElement("div",{className:"col col--2"},a))))}},91223:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var l=a(67294),r=a(86010),s=a(95999);const n=()=>(0,s.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var i=a(1944),c=a(35281),m=a(39058),o=a(13008);const u={tag:"tag_Nnez"};function d(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:u.tag},l.createElement(o.Z,e))))),l.createElement("hr",null))}function g(e){let{tags:t}=e;const a=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(d,{key:e.letter,letterEntry:e}))))}var b=a(90197);function E(e){let{tags:t,sidebar:a}=e;const s=n();return l.createElement(i.FG,{className:(0,r.Z)(c.k.wrapper.blogPages,c.k.page.blogTagsListPage)},l.createElement(i.d,{title:s}),l.createElement(b.Z,{tag:"blog_tags_list"}),l.createElement(m.Z,{sidebar:a},l.createElement("h1",null,s),l.createElement(g,{tags:t})))}},13008:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(67294),r=a(86010),s=a(39960);const n={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function i(e){let{permalink:t,label:a,count:i}=e;return l.createElement(s.Z,{href:t,className:(0,r.Z)(n.tag,i?n.tagWithCount:n.tagRegular)},a,i&&l.createElement("span",null,i))}}}]);