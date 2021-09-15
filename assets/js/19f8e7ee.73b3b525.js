"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4680],{35318:function(t,e,r){r.d(e,{Zo:function(){return l},kt:function(){return p}});var n=r(27378);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=n.createContext({}),u=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},l=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,i=t.originalType,s=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),f=u(r),p=o,y=f["".concat(s,".").concat(p)]||f[p]||d[p]||i;return r?n.createElement(y,a(a({ref:e},l),{},{components:r})):n.createElement(y,a({ref:e},l))}));function p(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},45626:function(t,e,r){function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function o(t){return void 0!==t&&!n(t)}r.d(e,{b:function(){return n},Z:function(){return o}})},98948:function(t,e,r){r.d(e,{C:function(){return i},Z:function(){return a}});var n=r(50353),o=r(45626);function i(){var t=(0,n.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,r=void 0===e?"/":e,i=t.url;return{withBaseUrl:function(t,e){return function(t,e,r,n){var i=void 0===n?{}:n,a=i.forcePrependBaseUrl,c=void 0!==a&&a,s=i.absolute,u=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(c)return e+r;var l=r.startsWith(e)?r:e+r.replace(/^\//,"");return u?t+l:l}(i,r,t,e)}}}function a(t,e){return void 0===e&&(e={}),(0,i().withBaseUrl)(t,e)}},41976:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var n=r(25773),o=r(30808),i=(r(27378),r(35318)),a=r(98948),c=["components"],s={sidebar_label:"Friday BOT",title:"Cast Study: Friday BOT"},u=void 0,l={unversionedId:"showcases/friday-bot",id:"showcases/friday-bot",isDocsHomePage:!1,title:"Cast Study: Friday BOT",description:"Friday.Bot is designed for serving the BOT5 Club.",source:"@site/docs/showcases/friday-bot.mdx",sourceDirName:"showcases",slug:"/showcases/friday-bot",permalink:"/docs/showcases/friday-bot",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/showcases/friday-bot.mdx",tags:[],version:"current",lastUpdatedBy:"Souvik Biswas",lastUpdatedAt:1631718897,formattedLastUpdatedAt:"9/15/2021",frontMatter:{sidebar_label:"Friday BOT",title:"Cast Study: Friday BOT"},sidebar:"docs",previous:{title:"Rui.BOT",permalink:"/docs/showcases/rui-bot"},next:{title:"Awesome Projects",permalink:"/docs/showcases/awesome-wechaty"}},d=[{value:"Credit",id:"credit",children:[]}],f={toc:d};function p(t){var e=t.components,r=(0,o.Z)(t,c);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("img",{alt:"Friday BOT",src:(0,a.Z)("img/docs/friday-bot.svg"),width:"256",height:"256"}),(0,i.kt)("p",null,"Friday.Bot is designed for serving the BOT5 Club."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dashboard: ",(0,i.kt)("a",{parentName:"li",href:"https://friday.bot5.ml"},"https://friday.bot5.ml")),(0,i.kt)("li",{parentName:"ul"},"GitHub: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/friday"},"https://github.com/wechaty/friday"))),(0,i.kt)("h2",{id:"credit"},"Credit"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/wechaty"},"Wechaty Organization"),", Conversational RPA SDK for Chatbot Makers"))}p.isMDXComponent=!0}}]);