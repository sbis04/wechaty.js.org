"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2322],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67494:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(25773),a=n(30808),i=(n(27378),n(35318)),o=["components"],l={title:"Wechaty Environment Variables",sidebar_label:"Wechaty"},s=void 0,p={unversionedId:"specs/wechaty",id:"specs/wechaty",isDocsHomePage:!1,title:"Wechaty Environment Variables",description:"Wechaty requires different environment variables to implement the bot. In this section, you will learn how to use the various environment variables.",source:"@site/docs/specs/wechaty.md",sourceDirName:"specs",slug:"/specs/wechaty",permalink:"/docs/specs/wechaty",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/specs/wechaty.md",tags:[],version:"current",lastUpdatedBy:"Souvik Biswas",lastUpdatedAt:1631718897,formattedLastUpdatedAt:"9/15/2021",frontMatter:{title:"Wechaty Environment Variables",sidebar_label:"Wechaty"},sidebar:"docs",previous:{title:"Specs: Overview",permalink:"/docs/specs/"},next:{title:"Plugin",permalink:"/docs/specs/plugin"}},c=[{value:"Environment Variables",id:"environment-variables",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Wechaty requires different environment variables to implement the bot. In this section, you will learn how to use the various environment variables."),(0,i.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Environment variable"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Usage"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"WECHATY_PUPPET"),(0,i.kt)("td",{parentName:"tr",align:null},"defines the Wechaty Puppet Provider NPM name and its parameters"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'bash export WECHATY_PUPPET=wechaty-puppet-service export WECHATY_PUPPET_SERVICE_TOKEN="${TOKEN}"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"WECHATY_TOKEN"),(0,i.kt)("td",{parentName:"tr",align:null},"initializes the unique Wechaty Puppet Service Token, that is generating  using the ",(0,i.kt)("a",{parentName:"td",href:"https://www.uuidgenerator.net/version4"},"UUID Generator"),"."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"bash export WECHATY_TOKEN='2fdb00a5-5c31-4018-84ac-c64e5f995057'"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"WECHATY_PUPPET_SERVER_PORT"),(0,i.kt)("td",{parentName:"tr",align:null},"sets up the free server port for the Wechaty Puppet Service, also used for docker port mapping"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"bash export WECHATY_PUPPET_SERVER_PORT=8788"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"WECHATY_LOG"),(0,i.kt)("td",{parentName:"tr",align:null},"sets up the log mode for the service. Usually initialize the variable to ",(0,i.kt)("inlineCode",{parentName:"td"},"Verbose")," mode as this gives more debug log messages. ",(0,i.kt)("inlineCode",{parentName:"td"},"verbose")," mode is an option available in many OS that gives details on what the computer is doing, which drivers and software are being installed or loaded and many more."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'bash export WECHATY_LOG="verbose"'))))))}d.isMDXComponent=!0}}]);