"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9253],{35318:function(t,e,n){n.d(e,{Zo:function(){return h},kt:function(){return m}});var a=n(27378);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=a.createContext({}),l=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},h=function(t){var e=l(t.components);return a.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,c=t.parentName,h=s(t,["components","mdxType","originalType","parentName"]),p=l(n),m=o,d=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(d,i(i({ref:e},h),{},{components:n})):a.createElement(d,i({ref:e},h))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},42104:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return h},default:function(){return p}});var a=n(25773),o=n(30808),r=(n(27378),n(35318)),i=["components"],s={title:"Testing"},c=void 0,l={unversionedId:"explanations/testing",id:"explanations/testing",isDocsHomePage:!1,title:"Testing",description:"Chatbot testing is an integral part of the chatbot development lifecycle. Like any other software project, having a robust and well thought out tests for your chatbot will contribute immensely to the development and maintenance of your chatbot. This is mainly because among many other reasons, testing ensures that your chatbot functions as required and makes it easy to maintain your codebase.",source:"@site/docs/explanations/testing.md",sourceDirName:"explanations",slug:"/explanations/testing",permalink:"/docs/explanations/testing",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/explanations/testing.md",tags:[],version:"current",lastUpdatedBy:"Souvik Biswas",lastUpdatedAt:1631718897,formattedLastUpdatedAt:"9/15/2021",frontMatter:{title:"Testing"},sidebar:"docs",previous:{title:"Glossary",permalink:"/docs/explanations/glossary"},next:{title:"FAQ",permalink:"/docs/explanations/faq"}},h=[{value:"Wechaty chatbot testing tools",id:"wechaty-chatbot-testing-tools",children:[]},{value:"Other chatbot testing tools",id:"other-chatbot-testing-tools",children:[]},{value:"Key considerations when testing chatbots",id:"key-considerations-when-testing-chatbots",children:[]}],u={toc:h};function p(t){var e=t.components,n=(0,o.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Chatbot testing is an integral part of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/explanations/lifecycle"},"chatbot development lifecycle"),". Like any other software project, having a robust and well thought out tests for your chatbot will contribute immensely to the development and maintenance of your chatbot. This is mainly because among many other reasons, testing ensures that your chatbot functions as required and makes it easy to maintain your codebase."),(0,r.kt)("p",null,"You can run both manual and automated tests. It is very easy to run manual tests if you are dealing with a project that is small in size and scope. With manual testing, you can log in to your IM account and start chatting to test whether the chatbot works as intended. As the project increases in size, it is not feasible to rely on manual testing. You will be relying more on automated tests since they are more reliable than manual tests. Automated testing will not only make work easier but catch a number of bugs and edge cases which could be easily missed when running manual tests. With automated tests, your job will be to analyze and interpret the generated data."),(0,r.kt)("h2",{id:"wechaty-chatbot-testing-tools"},"Wechaty chatbot testing tools"),(0,r.kt)("p",null,"Wechaty is unopinionated about which tools you should use for writing automated tests. Your choice of testing framework will mainly depend on your preference and technical background. However, we do have the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-puppet-mock"},"wechaty-puppet-mock")," testing framework and the more specific ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-mocker"},"wechaty-mocker")," to help you do better unit testing of your chatbots. The latter generates mock wechat account for testing purpose."),(0,r.kt)("p",null,"The basic usage of ",(0,r.kt)("inlineCode",{parentName:"p"},"wechaty-puppet-mock")," for testing your chatbot is illustrated in the code below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * Import dependencies\n */\nimport { Wechaty } from "wechaty";\nimport { PuppetMock, mock } from "wechaty-puppet-mock";\n\ntest("Testing your chatbot", async () => {\n  /**\n   * Setup Wechaty Mock System\n   */\n  const mocker = new mock.Mocker();\n  const puppet = new PuppetMock({ mocker });\n  const bot = new Wechaty({ puppet });\n\n  /**\n   * Start Wechaty Environment\n   */\n  await bot.start();\n\n  mocker.scan("https://github.com/wechaty", 1);\n\n  const user = mocker.createContact();\n  mocker.login(user);\n\n  const contact = mocker.createContact();\n  const room = mocker.createRoom();\n\n  /**\n   * Message Processing\n   */\n  user.say("Hello").to(contact);\n  contact.say("World").to(user);\n});\n')),(0,r.kt)("p",null,"You can read the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-vorpal-contrib/blob/master/src/contrib/math_master/math_master.spec.ts"},"unit tests")," for math_master bot for a full example illustrating the use of ",(0,r.kt)("inlineCode",{parentName:"p"},"wechaty-puppet-mock")," package for conversational testing of your chatbot."),(0,r.kt)("p",null,"Similarly there is an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-mocker/blob/master/examples/math-master.ts"},"example")," on how to use ",(0,r.kt)("inlineCode",{parentName:"p"},"wechaty-mocker")," for testing the math_master bot."),(0,r.kt)("h2",{id:"other-chatbot-testing-tools"},"Other chatbot testing tools"),(0,r.kt)("p",null,"As you come up with a testing strategy, there are third party tools which we believe are also worth checking out to guide you in designing a robust test for your chatbot. Some of these tools are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://chatbottest.com/"},"Chatbottest"))),(0,r.kt)("p",{parentName:"li"},"This is an open source guide that helps chatbot makers identify issues in a chatbot's design. In this guide, chatbot-user interaction has been broken down into seven categories, namely:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Personality"),(0,r.kt)("li",{parentName:"ul"},"Onboarding"),(0,r.kt)("li",{parentName:"ul"},"Understanding"),(0,r.kt)("li",{parentName:"ul"},"Answering"),(0,r.kt)("li",{parentName:"ul"},"Navigation"),(0,r.kt)("li",{parentName:"ul"},"Error management"),(0,r.kt)("li",{parentName:"ul"},"Intelligence")),(0,r.kt)("p",{parentName:"li"},"We believe that the ",(0,r.kt)("a",{parentName:"p",href:"https://chatbottest.com/"},"Chattbottest")," guide provides an excellent background to Wechaty chatbot testing.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://botanalytics.co/"},"Botanalytics"))),(0,r.kt)("p",{parentName:"li"},"This is a conversational analytics tool focused mainly on engagement and retention measurement for chatbots. This tool helps you visualize how the chatbot interacts with your clients. As a result it provides insights on how well your chatbot is performing so that you learn how to improve it."),(0,r.kt)("p",{parentName:"li"},"For more information on what you can do with this tool and the supported IM platforms, you can check the ",(0,r.kt)("a",{parentName:"p",href:"https://botanalytics.co/"},"Botanalytics website"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"http://dimon.co/"},"Dimon"))),(0,r.kt)("p",{parentName:"li"},"This is a platform that helps chatbot makers to identify and fix issues in chatbot conversations. It offers features such as decreased testing time and constant monitoring as a result providing real-time notification if something goes wrong. It also supports a number of IM platforms. We recommend that you learn more about it on the ",(0,r.kt)("a",{parentName:"p",href:"http://dimon.co/"},"Dimon site")," to see if it suits your needs."))),(0,r.kt)("h2",{id:"key-considerations-when-testing-chatbots"},"Key considerations when testing chatbots"),(0,r.kt)("p",null,"Chatbots are conversational in nature. With Wechaty, you can build chatbots for the different IM platforms. The following are some of the key questions that we believe will guide you when doing both manual and automated testing of chatbots. You will notice some questions can only be integrated in manual tests."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Does the chatbot respond to meaningless phrases and statements which have not been covered?"),(0,r.kt)("li",{parentName:"ul"},"Does the chatbot accurately and adequately provide information about the products and services to influence client decision?"),(0,r.kt)("li",{parentName:"ul"},"Does the chatbot understand the clients' queries?"),(0,r.kt)("li",{parentName:"ul"},"Does the chatbot provide relevant and accurate responses to clients' questions?"),(0,r.kt)("li",{parentName:"ul"},"Are the phrases used in the conversation culturally sensitive?"),(0,r.kt)("li",{parentName:"ul"},"Does the chatbot provide prompt responses?"),(0,r.kt)("li",{parentName:"ul"},"Does the chatbot keep the user engaged?"),(0,r.kt)("li",{parentName:"ul"},"Does the chatbot violate the terms of service of the Instant Messaging platform on which it is running?")),(0,r.kt)("p",null,"Chatbot testing is not an event but a process which runs through the entire chatbot development lifecycle. Unit testing conducted while coding is as important as the real-life feedback provided as the chatbot interacts with clients in production. It is paramount to use the information obtained from feedback to improve the bot."))}p.isMDXComponent=!0}}]);