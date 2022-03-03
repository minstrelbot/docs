"use strict";(self.webpackChunkminstrel_docs=self.webpackChunkminstrel_docs||[]).push([[940],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(n),m=a,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9795:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(7294),a="container_Ak5I",o="widget_DC7_",i="userAvatar_H_Vg",l="userTag_BirN",c="userUsername_uIS0",s="userDiscriminator_chY_",u="container_usuQ",p="children_AcWt",f="popup_N1vF",m="containerHover__1Ny",d="popupText_TNeV",h="popupTriangle_VKJW";function y(e){var t=e.children,n=e.onClickOutside,a=(0,r.useRef)(null);function o(e){a.current&&!a.current.contains(e.target)&&n(e)}return(0,r.useEffect)((function(){return document.addEventListener("mousedown",o),function(){return document.removeEventListener("mousedown",o)}}),[]),r.createElement("span",{ref:a},t)}var v=n(5450);function g(e){var t=e.children,n=e.title,a=e.mode,o=void 0===a?"hover":a,i=(0,r.useState)(!1),l=i[0],c=i[1],s=(0,v.If)().isDarkTheme;return r.createElement(y,{onClickOutside:function(){return c(!1)}},r.createElement("span",{className:u+" "+("hover"===o?m:"")},r.createElement("span",{onClick:function(){return c(!l)},className:p},t),r.createElement("span",{className:f,style:{display:"click"===o&&l?"block":"none"}},r.createElement("span",{className:d,style:{backgroundColor:s?"#dadae0":"#2f3136",color:s?"#000":"#fff"}},n),r.createElement("span",{className:h,style:{borderTopColor:s?"#dadae0":"#2f3136"}}))))}function b(e){var t,n=e.data,u=(0,v.If)().isDarkTheme;return r.createElement(g,{title:r.createElement("span",null,r.createElement("span",{style:{paddingRight:"0.3rem"}},"discord"===n.type?n.id:n.username),r.createElement("a",{href:null!=(t=n.url)?t:"",style:{color:"inherit"},target:"_blank"},r.createElement("svg",{width:"13.5",height:"13.5","aria-hidden":"true",viewBox:"0 0 24 24",className:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-next-theme-IconExternalLink-styles-module"},r.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"})))),mode:"click"},r.createElement("span",{className:a},r.createElement("span",{className:o,style:{backgroundColor:u?"#2f3136":"#dadae0"}},r.createElement("img",{src:n.avatarUrl,alt:"",className:i}),r.createElement("span",{className:l},"discord"===n.type?r.createElement(r.Fragment,null,r.createElement("span",{className:c,style:{color:u?"#fff":"#000"}},n.name),r.createElement("span",{className:s},"#",n.discriminator)):r.createElement("span",{className:c,style:{color:u?"#fff":"#000"}},n.name)))))}},8471:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=(n(9795),["components"]),l={sidebar_position:5},c="Fleeing",s={unversionedId:"fleeing",id:"fleeing",title:"Fleeing",description:"Fleeing is an option that is available to the player on a section, if the author has flee: true set.",source:"@site/docs/fleeing.md",sourceDirName:".",slug:"/fleeing",permalink:"/docs/fleeing",editUrl:"https://github.com/minstrelbot/docs/tree/master/docs/docs/fleeing.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Links",permalink:"/docs/links"}},u={},p=[{value:"Flow",id:"flow",level:2}],f={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fleeing"},"Fleeing"),(0,o.kt)("p",null,"Fleeing is an option that is available to the player on a section, if the author has ",(0,o.kt)("inlineCode",{parentName:"p"},"flee: true")," set.",(0,o.kt)("br",{parentName:"p"}),"\n","It gives the player a chance to escape the story early and break the immersion of the story."),(0,o.kt)("h2",{id:"flow"},"Flow"),(0,o.kt)("p",null,"When a player selects the Flee option, the bot will play the flee.md section, and then play the end.md section after that.\nThis allows you to have text specific to fleeing, before the credits and end are played."))}m.isMDXComponent=!0}}]);