"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8169],{35318:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return h}});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=l(r),h=a,d=m["".concat(i,".").concat(h)]||m[h]||u[h]||o;return r?n.createElement(d,c(c({ref:t},s),{},{components:r})):n.createElement(d,c({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},70517:function(e,t,r){var n=r(27378);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},64535:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(27378),a=r(84956);var o=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=r(38944),p="tabItem_c0e5",i="tabItemActive_28AG";var l=function(e){var t,r=e.lazy,a=e.block,l=e.defaultValue,s=e.values,u=e.groupId,m=e.className,h=n.Children.toArray(e.children),d=null!=s?s:h.map((function(e){return{value:e.props.value,label:e.props.label}})),k=null!=l?l:null==(t=h.find((function(e){return e.props.default})))?void 0:t.props.value,f=o(),v=f.tabGroupChoices,y=f.setTabGroupChoices,b=(0,n.useState)(k),g=b[0],w=b[1],N=[];if(null!=u){var P=v[u];null!=P&&P!==g&&d.some((function(e){return e.value===P}))&&w(P)}var E=function(e){var t=e.currentTarget,r=N.indexOf(t),n=d[r].value;w(n),null!=u&&(y(u,n),setTimeout((function(){var e,r,n,a,o,c,p,l;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,o=e.right,c=window,p=c.innerHeight,l=c.innerWidth,r>=0&&o<=l&&a<=p&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},x=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=N.indexOf(e.target)+1;r=N[n]||N[0];break;case"ArrowLeft":var a=N.indexOf(e.target)-1;r=N[a]||N[N.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":a},m)},d.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,c.Z)("tabs__item",p,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:E,onClick:E},null!=r?r:t)}))),r?(0,n.cloneElement)(h.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},84956:function(e,t,r){var n=(0,r(27378).createContext)(void 0);t.Z=n},83954:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return m},default:function(){return d}});var n=r(25773),a=r(30808),o=(r(27378),r(35318)),c=r(64535),p=r(70517),i=["components"],l={title:"Puppet Provider: Mock",sidebar_label:"Mock"},s=void 0,u={unversionedId:"puppet-providers/mock",id:"puppet-providers/mock",isDocsHomePage:!1,title:"Puppet Provider: Mock",description:"Wechaty Puppet Mock",source:"@site/docs/puppet-providers/mock.md",sourceDirName:"puppet-providers",slug:"/puppet-providers/mock",permalink:"/docs/puppet-providers/mock",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/puppet-providers/mock.md",tags:[],version:"current",lastUpdatedBy:"Souvik Biswas",lastUpdatedAt:1631718897,formattedLastUpdatedAt:"9/15/2021",frontMatter:{title:"Puppet Provider: Mock",sidebar_label:"Mock"},sidebar:"docs",previous:{title:"Service",permalink:"/docs/puppet-providers/service"},next:{title:"Puppet Provider: DIY",permalink:"/docs/puppet-providers/diy"}},m=[{value:"Features",id:"features",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Mocker &amp; Environment",id:"mocker--environment",children:[]},{value:"API Reference",id:"api-reference",children:[{value:"Mocker",id:"mocker",children:[]}]},{value:"Example: unit testing for <code>math_master</code> game",id:"example-unit-testing-for-math_master-game",children:[]},{value:"Roadmap",id:"roadmap",children:[]},{value:"History",id:"history",children:[]},{value:"Maintainers",id:"maintainers",children:[]}],h={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"mock"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Puppet-Mock-blueviolet",alt:"Wechaty Puppet Mock"}))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/wechaty/wechaty-puppet-mock/HEAD/docs/images/mock.png",alt:"Wechaty Puppet Mock"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://badge.fury.io/js/wechaty-puppet-mock"},(0,o.kt)("img",{parentName:"a",src:"https://badge.fury.io/js/wechaty-puppet-mock.svg",alt:"NPM Version"})),"\n",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-puppet-mock?activeTab=versions"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/wechaty-puppet-mock/next.svg",alt:"npm (tag)"}))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Repo: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-mock"},"https://github.com/wechaty/wechaty-puppet-mock")),(0,o.kt)("li",{parentName:"ul"},"Support & Feedback: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-mock/issues"},"https://github.com/wechaty/wechaty-puppet-mock/issues"))),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Help to test Wechaty framework with a mock puppet"),(0,o.kt)("li",{parentName:"ol"},"Using as a starter template for write your own puppet provider")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)(c.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-mock\nexport WECHATY_PUPPET=wechaty-puppet-mock\nnpm start\n"))),(0,o.kt)(p.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-mock\nexport WECHATY_PUPPET=wechaty-puppet-mock\nnpm start\n"))),(0,o.kt)(p.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-mock\nset WECHATY_PUPPET=wechaty-puppet-mock\nnpm start\n")))),(0,o.kt)("h2",{id:"mocker--environment"},"Mocker & Environment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  PuppetMock,\n  Mocker,\n  SimpleEnvironment,\n}                     from 'wechaty-puppet-mock'\n\nconst mocker = new Mocker()\nmocker.use(SimpleEnvironment())\n\nconst puppet = new PuppetMock({ mocker })\nconst wechaty = new Wechaty({ puppet })\n\nwechaty.start()\n\n// The Mocker will start perform the SimpleEnvironment...\n")),(0,o.kt)("p",null,"See: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-mock/blob/master/src/mock/environment.ts"},"SimpleEnvironment")),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"mocker"},"Mocker"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Wechaty }  from 'wechaty'\nimport { \n  PuppetMock,\n  mock,\n}                   from 'wechaty-puppet-mock'\n\nconst mocker = new mock.Mocker()\nconst puppet = new PuppetMock({ mocker })\nconst bot = new Wechaty({ puppet })\n\nawait bot.start()\n\nmocker.scan('https://github.com/wechaty', 1)\n\nconst user = mocker.createContact()\nmocker.login(user)\n\nconst contact = mocker.createContact()\nconst room = mocker.createRoom()\n\nuser.say('Hello').to(contact)\ncontact.say('World').to(user)\n")),(0,o.kt)("h2",{id:"example-unit-testing-for-math_master-game"},"Example: unit testing for ",(0,o.kt)("inlineCode",{parentName:"h2"},"math_master")," game"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"math_master")," is a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-vorpal-contrib"},"Wechaty Vorpal Contrib")," command which is a simple game for answering math questions that asked by a Wechaty bot."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/wechaty/wechaty-vorpal-contrib/HEAD/docs/images/math-master.png",alt:"Math Master Wechaty Game"})),(0,o.kt)("p",null,"You can read the unit testing script at: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-vorpal-contrib/blob/master/src/contrib/math_master/math_master.spec.ts"},"https://github.com/wechaty/wechaty-vorpal-contrib/blob/master/src/contrib/math_master/math_master.spec.ts")),(0,o.kt)("h2",{id:"roadmap"},"Roadmap"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"to be added")),(0,o.kt)("h2",{id:"history"},"History"),(0,o.kt)("p",null,"See: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-mock#history"},"Project README")),(0,o.kt)("h2",{id:"maintainers"},"Maintainers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/huan"},"@huan"))))}d.isMDXComponent=!0}}]);