"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6532],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,y=d["".concat(s,".").concat(h)]||d[h]||l[h]||o;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21363:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(25773),a=n(30808),o=(n(27378),n(35318)),i=["components"],c={},s=void 0,p={unversionedId:"api/wechaty-class",id:"api/wechaty-class",isDocsHomePage:!1,title:"wechaty-class",description:"Classes",source:"@site/docs/api/wechaty-class.md",sourceDirName:"api",slug:"/api/wechaty-class",permalink:"/docs/api/wechaty-class",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/api/wechaty-class.md",tags:[],version:"current",lastUpdatedBy:"Souvik Biswas",lastUpdatedAt:1631718897,formattedLastUpdatedAt:"9/15/2021",frontMatter:{}},u=[{value:"Classes",id:"classes",children:[{value:"Wechaty",id:"wechaty",children:[]},{value:"What is a Puppet in Wechaty?",id:"what-is-a-puppet-in-wechaty",children:[]}]}],l={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"classes"},"Classes"),(0,o.kt)("h3",{id:"wechaty"},"Wechaty"),(0,o.kt)("p",null,"Wechaty is the main bot class."),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Bot")," is a wechat client that  depends on which  type of puppet is used. The form the Bot takes is widely divided into 3 main categories-"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"web-wechat")," - when Puppet-Puppeteer or Puppet-wechat4u is used  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ipad-wechat")," - when Puppet-padchat is used"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ios-wechat")," - when  Puppet-ioscat is used")),(0,o.kt)("p",null,"To understand puppet and its uses do visit the below link-"),(0,o.kt)("h3",{id:"what-is-a-puppet-in-wechaty"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/wechaty/wechaty-getting-started/wiki/FAQ-EN#31-what-is-a-puppet-in-wechaty"},"What is a Puppet in Wechaty"),"?"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you want to know how to send message, see Message\nIf you want to know how to get contact, see Contact")))}d.isMDXComponent=!0}}]);