"use strict";(self.webpackChunkminstrel_docs=self.webpackChunkminstrel_docs||[]).push([[60],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,p=d["".concat(c,".").concat(f)]||d[f]||m[f]||l;return n?r.createElement(p,o(o({ref:t},u),{},{components:n})):r.createElement(p,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9795:function(e,t,n){n.d(t,{Z:function(){return v}});var r=n(7294),a="container_Ak5I",l="widget_DC7_",o="userAvatar_H_Vg",i="userTag_BirN",c="userUsername_uIS0",s="userDiscriminator_chY_",u="container_usuQ",m="children_AcWt",d="popup_N1vF",f="containerHover__1Ny",p="popupText_TNeV",h="popupTriangle_VKJW";function g(e){var t=e.children,n=e.onClickOutside,a=(0,r.useRef)(null);function l(e){a.current&&!a.current.contains(e.target)&&n(e)}return(0,r.useEffect)((function(){return document.addEventListener("mousedown",l),function(){return document.removeEventListener("mousedown",l)}}),[]),r.createElement("span",{ref:a},t)}var y=n(5450);function k(e){var t=e.children,n=e.title,a=e.mode,l=void 0===a?"hover":a,o=(0,r.useState)(!1),i=o[0],c=o[1],s=(0,y.If)().isDarkTheme;return r.createElement(g,{onClickOutside:function(){return c(!1)}},r.createElement("span",{className:u+" "+("hover"===l?f:"")},r.createElement("span",{onClick:function(){return c(!i)},className:m},t),r.createElement("span",{className:d,style:{display:"click"===l&&i?"block":"none"}},r.createElement("span",{className:p,style:{backgroundColor:s?"#dadae0":"#2f3136",color:s?"#000":"#fff"}},n),r.createElement("span",{className:h,style:{borderTopColor:s?"#dadae0":"#2f3136"}}))))}function v(e){var t,n=e.data,u=(0,y.If)().isDarkTheme;return r.createElement(k,{title:r.createElement("span",null,r.createElement("span",{style:{paddingRight:"0.3rem"}},"discord"===n.type?n.id:n.username),r.createElement("a",{href:null!=(t=n.url)?t:"",style:{color:"inherit"},target:"_blank"},r.createElement("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",className:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-next-theme-IconExternalLink-styles-module"},r.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"})))),mode:"click"},r.createElement("span",{className:a},r.createElement("span",{className:l,style:{backgroundColor:u?"#2f3136":"#dadae0"}},r.createElement("img",{src:n.avatarUrl,alt:"",className:o}),r.createElement("span",{className:i},"discord"===n.type?r.createElement(r.Fragment,null,r.createElement("span",{className:c,style:{color:u?"#fff":"#000"}},n.name),r.createElement("span",{className:s},"#",n.discriminator)):r.createElement("span",{className:c,style:{color:u?"#fff":"#000"}},n.name)))))}},7233:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return u},toc:function(){return m},default:function(){return f}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=(n(9795),["components"]),i={},c="flee.md",s={unversionedId:"files/flee",id:"files/flee",title:"flee.md",description:"See Fleeing for more information on what fleeing is.",source:"@site/docs/files/flee.md",sourceDirName:"files",slug:"/files/flee",permalink:"/docs/files/flee",editUrl:"https://github.com/minstrelbot/docs/tree/master/docs/docs/files/flee.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"end.md",permalink:"/docs/files/end"},next:{title:"intro.md",permalink:"/docs/files/intro"}},u={},m=[{value:"Metadata",id:"metadata",level:2},{value:"Content",id:"content",level:2}],d={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"fleemd"},"flee.md"),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/docs/fleeing"},"Fleeing")," for more information on what fleeing is.\nAfter the flee section is completed, the user is sent to the ",(0,l.kt)("a",{parentName:"p",href:"/docs/files/end"},"/docs/files/end")," section."),(0,l.kt)("h2",{id:"metadata"},"Metadata"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the section as displayed to the users."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"audio"),(0,l.kt)("td",{parentName:"tr",align:null},"The key of the audio file to play when this section is triggered."),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h2",{id:"content"},"Content"),(0,l.kt)("p",null,"The content of this file is the section played when the player selects the Flee option.\nSee ",(0,l.kt)("a",{parentName:"p",href:"/docs/fleeing"},"Fleeing")," for more information."))}f.isMDXComponent=!0}}]);