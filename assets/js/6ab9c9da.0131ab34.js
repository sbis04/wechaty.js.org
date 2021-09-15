"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4466],{35318:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,h=d["".concat(c,".").concat(m)]||d[m]||l[m]||i;return r?a.createElement(h,p(p({ref:t},u),{},{components:r})):a.createElement(h,p({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,p=new Array(i);p[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var s=2;s<i;s++)p[s]=r[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},70517:function(e,t,r){var a=r(27378);t.Z=function(e){var t=e.children,r=e.hidden,n=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},64535:function(e,t,r){r.d(t,{Z:function(){return s}});var a=r(27378),n=r(84956);var i=function(){var e=(0,a.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},p=r(38944),o="tabItem_c0e5",c="tabItemActive_28AG";var s=function(e){var t,r=e.lazy,n=e.block,s=e.defaultValue,u=e.values,l=e.groupId,d=e.className,m=a.Children.toArray(e.children),h=null!=u?u:m.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=s?s:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,y=i(),f=y.tabGroupChoices,g=y.setTabGroupChoices,b=(0,a.useState)(v),k=b[0],w=b[1],N=[];if(null!=l){var P=f[l];null!=P&&P!==k&&h.some((function(e){return e.value===P}))&&w(P)}var E=function(e){var t=e.currentTarget,r=N.indexOf(t),a=h[r].value;w(a),null!=l&&(g(l,a),setTimeout((function(){var e,r,a,n,i,p,o,s;(e=t.getBoundingClientRect(),r=e.top,a=e.left,n=e.bottom,i=e.right,p=window,o=p.innerHeight,s=p.innerWidth,r>=0&&i<=s&&n<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},T=function(e){var t,r=null;switch(e.key){case"ArrowRight":var a=N.indexOf(e.target)+1;r=N[a]||N[0];break;case"ArrowLeft":var n=N.indexOf(e.target)-1;r=N[n]||N[N.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":n},d)},h.map((function(e){var t=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,p.Z)("tabs__item",o,{"tabs__item--active":k===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:T,onFocus:E,onClick:E},null!=r?r:t)}))),r?(0,a.cloneElement)(m.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},84956:function(e,t,r){var a=(0,r(27378).createContext)(void 0);t.Z=a},91999:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return d},default:function(){return h}});var a=r(25773),n=r(30808),i=(r(27378),r(35318)),p=r(64535),o=r(70517),c=["components"],s={title:"Puppet Provider: Service",sidebar_label:"Service"},u=void 0,l={unversionedId:"puppet-providers/service",id:"puppet-providers/service",isDocsHomePage:!1,title:"Puppet Provider: Service",description:"Wechaty Puppet Service",source:"@site/docs/puppet-providers/service.md",sourceDirName:"puppet-providers",slug:"/puppet-providers/service",permalink:"/docs/puppet-providers/service",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/puppet-providers/service.md",tags:[],version:"current",lastUpdatedBy:"Souvik Biswas",lastUpdatedAt:1631718897,formattedLastUpdatedAt:"9/15/2021",frontMatter:{title:"Puppet Provider: Service",sidebar_label:"Service"},sidebar:"docs",previous:{title:"XP",permalink:"/docs/puppet-providers/xp"},next:{title:"Mock",permalink:"/docs/puppet-providers/mock"}},d=[{value:"Features",id:"features",children:[]},{value:"Usage",id:"usage",children:[]},{value:"History",id:"history",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"<code>Error: 14 UNAVAILABLE: No connection established</code>",id:"error-14-unavailable-no-connection-established",children:[]}]},{value:"Maintainers",id:"maintainers",children:[]}],m={toc:d};function h(e){var t=e.components,r=(0,n.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"service"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Puppet-Service-blueviolet",alt:"Wechaty Puppet Service"}))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/wechaty/wechaty-puppet-service/HEAD/docs/images/hostie.png",alt:"Wechaty Puppet Service"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://badge.fury.io/js/wechaty-puppet-service"},(0,i.kt)("img",{parentName:"a",src:"https://badge.fury.io/js/wechaty-puppet-service.svg",alt:"NPM Version"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-puppet-service?activeTab=versions"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/wechaty-puppet-service/next.svg",alt:"npm (tag)"}))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Repo: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-service"},"https://github.com/wechaty/wechaty-puppet-service")),(0,i.kt)("li",{parentName:"ul"},"Support & Feedback: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-puppet-service/issues"},"https://github.com/wechaty/wechaty-puppet-service/issues"))),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("p",null,"Wechaty Puppet Service is a Wechaty Puppet for providing/consuming gRPC Puppet API. To use a Wechaty Puppet Service, you need a TOKEN for that service, and pass it to Wechaty, then you will be able to use that Puppet Service."),(0,i.kt)("p",null,"For example, you can cloudify the Wechaty Puppet Provider wechaty-puppet-padlocal to a Wechaty Puppet Service by running our Wechaty Puppet Service Token Gateway."),(0,i.kt)("p",null,"Wechaty Puppet Service Token Gateway is a gateway for converting the Wechaty Puppet Provider to a Wechaty Puppet Service. Read more about tokens and usage in ",(0,i.kt)("a",{parentName:"p",href:"https://wechaty.js.org/2021/01/14/wechaty-puppet-service/"},"Introducing Wechaty Puppet Service (Providers)"),"."),(0,i.kt)("p",null,"Learn more about all puppet services provided by the Wechaty Community in ",(0,i.kt)("a",{parentName:"p",href:"/docs/puppet-services/"},"puppet service overview"),"."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"wechaty-puppet-service"),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"TOKEN required")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Wechaty Puppet Service need a token for authorization."))),(0,i.kt)(p.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"linux",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-service\nexport WECHATY_PUPPET=wechaty-puppet-service\nexport WECHATY_PUPPET_SERVICE_TOKEN=${TOKEN}\nnpm start\n"))),(0,i.kt)(o.Z,{value:"mac",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-service\nexport WECHATY_PUPPET=wechaty-puppet-service\nexport WECHATY_PUPPET_SERVICE_TOKEN=${TOKEN}\nnpm start\n"))),(0,i.kt)(o.Z,{value:"windows",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-service\nset WECHATY_PUPPET=wechaty-puppet-service\nset WECHATY_PUPPET_SERVICE_TOKEN=${TOKEN}\nnpm start\n")))),(0,i.kt)("h2",{id:"history"},"History"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/01/14/wechaty-puppet-service/"},"Introducing Wechaty Puppet Service (Providers), Huan, Jan 14, 2021"))),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("h3",{id:"error-14-unavailable-no-connection-established"},(0,i.kt)("inlineCode",{parentName:"h3"},"Error: 14 UNAVAILABLE: No connection established")),(0,i.kt)("p",null,"This error message might identify that you are using a new version of ",(0,i.kt)("inlineCode",{parentName:"p"},"wechaty-puppet-service")," which requires SSL but your Wechaty Puppet Service token does not support SSL."),(0,i.kt)("p",null,"Try to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"WECHATY_PUPPET_SERVICE_NO_SSL_UNSAFE_CLIENT")," environment variable to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," to disable SSL and try again."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"WECHATY_PUPPET_SERVICE_NO_SSL_UNSAFE_CLIENT=true npm start\n")),(0,i.kt)("p",null,"Learn more about the details from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-service/issues/160"},"Enable SSL for all Puppet Service Clients of Wechaty Ecosystem wechaty/wechaty-puppet-servie#160")),(0,i.kt)("h2",{id:"maintainers"},"Maintainers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/huan"},"@huan")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wechaty.js.org/contributors/windmemory"},"@windmemory"))))}h.isMDXComponent=!0}}]);