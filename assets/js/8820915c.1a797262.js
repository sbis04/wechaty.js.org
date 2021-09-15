"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3577],{35318:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return s}});var n=a(27378);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),h=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=h(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=h(a),s=r,g=m["".concat(p,".").concat(s)]||m[s]||u[s]||i;return a?n.createElement(g,o(o({ref:e},c),{},{components:a})):n.createElement(g,o({ref:e},c))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var h=2;h<i;h++)o[h]=a[h];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},62836:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return h},toc:function(){return c},default:function(){return m}});var n=a(25773),r=a(30808),i=(a(27378),a(35318)),o=["components"],l={title:"Wechaty Plugin Overview",sidebar_label:"Overview"},p=void 0,h={unversionedId:"using-plugin-with-wechaty/overview",id:"using-plugin-with-wechaty/overview",isDocsHomePage:!1,title:"Wechaty Plugin Overview",description:"Wechaty Plugin Contrib",source:"@site/docs/using-plugin-with-wechaty/overview.mdx",sourceDirName:"using-plugin-with-wechaty",slug:"/using-plugin-with-wechaty/overview",permalink:"/docs/using-plugin-with-wechaty/overview",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/using-plugin-with-wechaty/overview.mdx",tags:[],version:"current",lastUpdatedBy:"Souvik Biswas",lastUpdatedAt:1631718897,formattedLastUpdatedAt:"9/15/2021",frontMatter:{title:"Wechaty Plugin Overview",sidebar_label:"Overview"},sidebar:"docs",previous:{title:"Usage with Heroku",permalink:"/docs/tutorials/usage-with-heroku"},next:{title:"Event Logger plugin",permalink:"/docs/using-plugin-with-wechaty/event-logger"}},c=[{value:"Requirements",id:"requirements",children:[]},{value:"Plugins Contrib",id:"plugins-contrib",children:[]},{value:"Wechaty Plugin Directory",id:"wechaty-plugin-directory",children:[]},{value:"Plugin launch video",id:"plugin-launch-video",children:[{value:"Agenda",id:"agenda",children:[]}]},{value:"References",id:"references",children:[]}],u={toc:c};function m(t){var e=t.components,a=(0,r.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-plugin-contrib"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Wechaty%20Plugin-Contrib-brightgreen.svg",alt:"Wechaty Plugin Contrib"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-plugin-contrib"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/wechaty-plugin-contrib?color=brightgreen",alt:"NPM Version"})),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-plugin-contrib/actions?query=workflow%3ANPM"},(0,i.kt)("img",{parentName:"a",src:"https://github.com/wechaty/wechaty-plugin-contrib/workflows/NPM/badge.svg",alt:"NPM"}))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Wechaty Plugin")," is a JavaScript function that accepts a Wechaty instance and helps to avoid repetitive code."),(0,i.kt)("p",null,"Wechaty has great support for various plugins both in-house and contributed by the community. They can be imported as a NPM package, and can be accessed by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"Wechaty.use(WechatyPlugin())"),"."),(0,i.kt)("p",null,"The first Wechaty Plugin system was design by our Wechaty Committer ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gcaufy"},"@gcaufy"),", you can get more information about it ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/pull/1946"},"here"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://wechaty.github.io/wechaty-plugin-contrib/images/plugin.png",alt:"Wechaty Plugin"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Image Credit: ",(0,i.kt)("a",{parentName:"p",href:"https://www.computerhope.com/jargon/p/plugin.htm"},"What is Plugin"))),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download"},"Node.js")," v16+"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty"},"Wechaty")," v0.40+")),(0,i.kt)("h2",{id:"plugins-contrib"},"Plugins Contrib"),(0,i.kt)("p",null,"The most popular Wechaty plugins are available as a ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-plugin-contrib"},"npm package")," that can be imported in your project easily. The package consists of the following plugins:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"#"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Plugin"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Author"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Feature"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"DingDong"),(0,i.kt)("td",{parentName:"tr",align:"left"},"@huan"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Reply ",(0,i.kt)("inlineCode",{parentName:"td"},"dong")," if bot receives a ",(0,i.kt)("inlineCode",{parentName:"td"},"ding")," message.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"2"),(0,i.kt)("td",{parentName:"tr",align:"left"},"EventLogger"),(0,i.kt)("td",{parentName:"tr",align:"left"},"@huan"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Log Wechaty Events for ",(0,i.kt)("inlineCode",{parentName:"td"},"'scan' \\| 'login' \\| 'message'")," ... etc.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"QRCodeTerminal"),(0,i.kt)("td",{parentName:"tr",align:"left"},"@huan"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Show QR Code for Scan in Terminal")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"4"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Heartbeat"),(0,i.kt)("td",{parentName:"tr",align:"left"},"@huan"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Send emoji periodically")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"ChatOps"),(0,i.kt)("td",{parentName:"tr",align:"left"},"@huan"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Forward DM & Mention messages to a room")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"6"),(0,i.kt)("td",{parentName:"tr",align:"left"},"RoomConnector"),(0,i.kt)("td",{parentName:"tr",align:"left"},"@huan"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Connect rooms together with ",(0,i.kt)("inlineCode",{parentName:"td"},"1:N"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"M:1"),", and ",(0,i.kt)("inlineCode",{parentName:"td"},"M:N")," modes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"7"),(0,i.kt)("td",{parentName:"tr",align:"left"},"FriendshipAccepter"),(0,i.kt)("td",{parentName:"tr",align:"left"},"@huan"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Accept friendship automatically, and say/do something for greeting.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"8"),(0,i.kt)("td",{parentName:"tr",align:"left"},"RoomInviter"),(0,i.kt)("td",{parentName:"tr",align:"left"},"@huan"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Invite user to rooms by keyword")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"9"),(0,i.kt)("td",{parentName:"tr",align:"left"},"EventHotHandler"),(0,i.kt)("td",{parentName:"tr",align:"left"},"@huan"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Hot reloading event handler module files")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"10"),(0,i.kt)("td",{parentName:"tr",align:"left"},"RoomInvitationAccepter"),(0,i.kt)("td",{parentName:"tr",align:"left"},"@huan"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Automatically accepting any room invitations")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"11"),(0,i.kt)("td",{parentName:"tr",align:"left"},"MessageAwaiter"),(0,i.kt)("td",{parentName:"tr",align:"left"},"@ssine"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Wait for a particular message using ",(0,i.kt)("inlineCode",{parentName:"td"},"await")," syntax ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/wechaty/wechaty-plugin-contrib/issues/13"},"#13"))))),(0,i.kt)("p",null,"You can get more information about these plugins in the ",(0,i.kt)("strong",{parentName:"p"},"References")," section of the documentation. We have created tutorials for some of the plugins to provide you a basic understanding of how to use them in your project."),(0,i.kt)("p",null,"The plugin ",(0,i.kt)("strong",{parentName:"p"},"tutorials")," are available in the respective links:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./event-logger"},"Event Logger plugin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./qr-code-terminal"},"QR Code Terminal plugin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./heartbeat"},"Heartbeat plugin"))),(0,i.kt)("h2",{id:"wechaty-plugin-directory"},"Wechaty Plugin Directory"),(0,i.kt)("p",null,"There are various great Wechaty Plugins that not be included in the contrib because they are too powerful. They are published as a NPM by itself. A list of those plugins are available below:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Gcaufy/wechaty-voteout"},(0,i.kt)("strong",{parentName:"a"},"VoteOut Plugin"))," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/gcaufy"},"@gcaufy")," - help you to have a vote and kick out feature for you room."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Gcaufy/wechaty-schedule"},(0,i.kt)("strong",{parentName:"a"},"Schedule"))," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/gcaufy"},"@gcaufy")," - easily schedule jobs for your Wechaty bots."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-got-kicked-out"},(0,i.kt)("strong",{parentName:"a"},"GotKicked"))," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/JesseWeb"},"@JesseWeb")," - monitor whether your bot got kicked out of group chat. Just few line of code to implement this instead fussy judging."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/gengchen528/wechaty-web-panel"},(0,i.kt)("strong",{parentName:"a"},"WebPanel"))," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/leochen-g"},"@Leo_chen")," - help you quickly access the web panel"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-plugin-intercom"},(0,i.kt)("strong",{parentName:"a"},"Intercom"))," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/huan"},"@huan")," - helps you to manage your customers/leads/users in the WeChat Room, with the power of the Intercom service."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-vorpal"},(0,i.kt)("strong",{parentName:"a"},"Wechaty Vorpal"))," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/huan"},"@huan")," - CLI for Chatbot - Extensible Commands for ChatOps, Powered by Vorpal."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-freshdesk"},(0,i.kt)("strong",{parentName:"a"},"Freshdesk"))," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/huan"},"@huan")," - Managing Conversations in WeChat Rooms by Freshdesk."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-plugin-qnamaker"},(0,i.kt)("strong",{parentName:"a"},"QnAMaker"))," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/huan"},"@huan")," - Wechaty QnAMaker Plugin helps you to answer questions in WeChat with the power of ",(0,i.kt)("a",{parentName:"li",href:"https://QnAMaker.ai"},"https://QnAMaker.ai"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-weixin-openai"},(0,i.kt)("strong",{parentName:"a"},"Weixin OpenAI"))," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/windmemory"},"@windmemory")," - Wechaty Weixin OpenAI Plugin helps you to answer questions in WeChat with the power of ",(0,i.kt)("a",{parentName:"li",href:"https://openai.weixin.qq.com"},"https://openai.weixin.qq.com"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/chs97/wechaty-plugin-youdao"},(0,i.kt)("strong",{parentName:"a"},"YouDao Translate"))," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/chs97"},"@Chs97")," - Wechaty YouDao Translate Plugin helps you to translate word in WeChat with the power of ",(0,i.kt)("a",{parentName:"li",href:"https://ai.youdao.com/"},"https://ai.youdao.com/"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/archywillhe/wechaty-log-monitor"},(0,i.kt)("strong",{parentName:"a"},"Log Monitor"))," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/archywillhe"},"@ArchyWillHe")," - For log-related DevOps using only WeChat! Fully functional! Very loose coupling! Pretty much pure (other than side effects in I.O.)! Also contains features like QR Rescue (aka \u6389\u7ebf\u7ed9\u7801) for 2 Wechaties to rescue one another when one is disconnected from the grpc server."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/watertao/wechaty-plugin-xyao"},(0,i.kt)("strong",{parentName:"a"},"Wechaty Xyao"))," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/watertao"},"@watertao")," - Wechaty Xyao Plugin gives bot ability to execute instruction with distributed brain module."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/gengchen528/wechaty-fanli"},(0,i.kt)("strong",{parentName:"a"},"Wechaty-fanli"))," by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/gengchen528"},"@Leo_chen")," - help you quickly access the rebate robot about taobao")),(0,i.kt)("h2",{id:"plugin-launch-video"},"Plugin launch video"),(0,i.kt)("div",{style:{position:"relative",paddingBottom:"56.25%",paddingTop:"30px",height:0,overflow:"hidden"}},(0,i.kt)("iframe",{src:"https://www.youtube.com/embed/tfGZXoe_aA4",allowFullScreen:!0,webkitallowfullscreen:"true",frameBorder:"0",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}})),(0,i.kt)("h3",{id:"agenda"},"Agenda"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=tfGZXoe_aA4&t=840s"},"14:00"),' Wechaty Community Team, "Plugin Open Source Month" event opening and agenda introduction'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=tfGZXoe_aA4&t=845s"},"14:05")," Wechaty Creator ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/huan"},"Huan")," ,Introduction and community ecology of Wechaty"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=tfGZXoe_aA4&t=865s"},"14:25")," Wechaty Plugin Designer\uff0cCreator of ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tencent/wepy"},"Wepy"),"(Wepy is Tencent mini-app opensource framework) ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Gcaufy"},"Gcaufy"),", Development process and application of plugin system"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=tfGZXoe_aA4&t=895s"},"14:55")," TeaBreak"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=tfGZXoe_aA4&t=900s"},"15:00")," Wechaty Puppet Creator, Co-Founder of Juzi.Bot ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/windmemory"},"Yuan Gao"),",  Prospects for the commercialization of Wechaty plugins"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=tfGZXoe_aA4&t=930s"},"15:30")," Wechaty Plugin Contributor ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/JesseWeb"},"JesseWeb"),", How to build with Wechaty Plugin")),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-plugin-contrib"},"GitHub repository of Wechaty Plugin Contrib")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/wechaty-plugin-contrib"},"NPM package of Wechaty Plugin Contrib")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://mp.weixin.qq.com/s/8ISuUUGO1rZMYOJmpRpKUQ"},"Why we build Wechaty Plugin Contrib"))))}m.isMDXComponent=!0}}]);