"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3581],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var i=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),m=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=m(n),h=a,d=p["".concat(l,".").concat(h)]||p[h]||c[h]||r;return n?i.createElement(d,o(o({ref:t},u),{},{components:n})):i.createElement(d,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var m=2;m<r;m++)o[m]=n[m];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},88691:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return u},default:function(){return p}});var i=n(25773),a=n(30808),r=(n(27378),n(35318)),o=["components"],s={title:"Create pull requests"},l=void 0,m={unversionedId:"contributing/pulls",id:"contributing/pulls",isDocsHomePage:!1,title:"Create pull requests",description:"This section is addressed to the committers and to anyone interested in knowing",source:"@site/docs/contributing/pulls.md",sourceDirName:"contributing",slug:"/contributing/pulls",permalink:"/docs/contributing/pulls",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/contributing/pulls.md",tags:[],version:"current",lastUpdatedBy:"Souvik Biswas",lastUpdatedAt:1631718897,formattedLastUpdatedAt:"9/15/2021",frontMatter:{title:"Create pull requests"},sidebar:"docs",previous:{title:"DevOps with CI/CD",permalink:"/docs/contributing/devops"},next:{title:"Publish blog",permalink:"/docs/contributing/blog"}},u=[{value:"Handling pull requests",id:"handling-pull-requests",children:[]},{value:"Committing guidelines",id:"committing-guidelines",children:[]},{value:"Reverting commits",id:"reverting-commits",children:[]},{value:"Special Thanks",id:"special-thanks",children:[]}],c={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section is addressed to the committers and to anyone interested in knowing\nhow code gets committed into Wechaty. If you're a community member who wants to\ncontribute code to Wechaty, look at ",(0,r.kt)("a",{parentName:"p",href:"/docs/contributing/git"},"working with git")," instead."),(0,r.kt)("h2",{id:"handling-pull-requests"},"Handling pull requests"),(0,r.kt)("p",null,"Since Wechaty is hosted on GitHub, patches are provided in the form of pull\nrequests."),(0,r.kt)("p",null,"When committing a pull request, make sure each individual commit matches the\ncommit guidelines described below. Contributors are expected to provide the\nbest pull requests possible. In practice however, committers - who will likely\nbe more familiar with the commit guidelines - may decide to bring a commit up\nto standard themselves."),(0,r.kt)("p",null,"If you find yourself checking out pull requests locally more often, this git\nalias will be helpful:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'[alias]\n    pr = !sh -c \\"git fetch upstream pull/${1}/head:pr/${1} && git checkout pr/${1}\\"\n')),(0,r.kt)("p",null,"Add it to your ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.gitconfig"),", and set ",(0,r.kt)("inlineCode",{parentName:"p"},"upstream")," to be ",(0,r.kt)("inlineCode",{parentName:"p"},"wechaty/wechaty"),".\nThen you can run ",(0,r.kt)("inlineCode",{parentName:"p"},"git pr ####")," to checkout the corresponding pull request."),(0,r.kt)("p",null,"At this point, you can work on the code. Use ",(0,r.kt)("inlineCode",{parentName:"p"},"git rebase -i")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"git\ncommit --amend")," to make sure the commits have the expected level of quality.\nOnce you're ready:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'# Pull in the latest changes from main.\ngit checkout main\ngit pull upstream main\n# Rebase the pull request on main.\ngit checkout pr/####\ngit rebase main\ngit checkout main\n# Merge the work as "fast-forward" to main to avoid a merge commit.\n# (in practice, you can omit "--ff-only" since you just rebased)\ngit merge --ff-only pr/XXXX\n# If you\'re not sure if you did things correctly, check that only the\n# changes you expect will be pushed to upstream.\ngit push --dry-run upstream main\n# Push!\ngit push upstream main\n# Delete the pull request branch.\ngit branch -d pr/xxxx\n')),(0,r.kt)("p",null,"Force push to the branch after rebasing on main but before merging and pushing\nto upstream. This allows the commit hashes on main and the branch to match\nwhich automatically closes the pull request."),(0,r.kt)("p",null,"If a pull request doesn't need to be merged as multiple commits, you can use\nGitHub's \"Squash and merge\" button on the website. Edit the commit message as\nneeded and remove\nthe pull request number that's automatically appended to the message's first\nline."),(0,r.kt)("p",null,"When rewriting the commit history of a pull request, the goal is to make\nWechaty's commit history as usable as possible:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If a patch contains back-and-forth commits, then rewrite those into one.\nFor example, if a commit adds some code and a second commit fixes stylistic\nissues introduced in the first commit, those commits should be squashed\nbefore merging.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Separate changes to different commits by logical grouping: if you do a\nstylistic cleanup at the same time as you do other changes to a file,\nseparating the changes into two different commits will make reviewing\nhistory easier.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Beware of merges of upstream branches in the pull requests.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Tests should pass and docs should build after each commit. Neither the\ntests nor the docs should emit warnings.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Trivial and small patches usually are best done in one commit. Medium to\nlarge work may be split into multiple commits if it makes sense."))),(0,r.kt)("p",null,"Practicality beats purity, so it is up to each committer to decide how much\nhistory mangling to do for a pull request. The main points are engaging the\ncommunity, getting work done, and having a usable commit history."),(0,r.kt)("h2",{id:"committing-guidelines"},"Committing guidelines"),(0,r.kt)("p",null,"In addition, please follow the following guidelines when committing code to\nWechaty's Git repository:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Never change the published history of ",(0,r.kt)("inlineCode",{parentName:"p"},"wechaty/wechaty")," branches by force\npushing. If you absolutely must (for security reasons for example), first\ndiscuss the situation with the team.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'For any medium-to-big changes, where "medium-to-big" is according to\nyour judgment, please bring things up on the ',(0,r.kt)("em",{parentName:"p"},"wechaty"),"\nmailing list before making the change."),(0,r.kt)("p",{parentName:"li"},"If you bring something up on ",(0,r.kt)("em",{parentName:"p"},"wechaty")," mailist and nobody responds,\nplease don't take that to mean your idea is great and should be\nimplemented immediately because nobody contested it. Everyone doesn't always\nhave a lot of time to read mailing list discussions immediately, so you may\nhave to wait a couple of days before getting a response.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Write detailed commit messages in the past tense, not present tense."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Good: "Fixed Unicode bug in RSS API."'),(0,r.kt)("li",{parentName:"ul"},'Bad: "Fixes Unicode bug in RSS API."'),(0,r.kt)("li",{parentName:"ul"},'Bad: "Fixing Unicode bug in RSS API."')),(0,r.kt)("p",{parentName:"li"},"The commit message should be in lines of 72 chars maximum. There should be\na subject line, separated by a blank line and then paragraphs of 72 char\nlines. The limits are soft. For the subject line, shorter is better. In the\nbody of the commit message more detail is better than less:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Fixed #18307 -- Added git workflow guidelines.\n\nRefactored the Wechaty's documentation to remove mentions of SVN\nspecific tasks. Added guidelines of how to use Git, GitHub, and\nhow to use pull request together with Trac instead.\n")),(0,r.kt)("p",{parentName:"li"},'Credit the contributors in the commit message: "Thanks A for the report and B\nfor review." Use git\'s ',(0,r.kt)("a",{parentName:"p",href:"https://help.github.com/articles/creating-a-commit-with-multiple-authors/"},"Co-Authored-By")," as appropriate.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'For commits to a branch, prefix the commit message with the branch name.\nFor example: "',"[1.4.x]",' Fixed #xxxxx -- Added support for mind reading."')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Limit commits to the most granular change that makes sense. This means,\nuse frequent small commits rather than infrequent large commits. For\nexample, if implementing feature X requires a small change to library Y,\nfirst commit the change to library Y, then commit feature X in a separate\ncommit. This goes a ",(0,r.kt)("em",{parentName:"p"},"long")," way- in helping everyone follow your changes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Separate bug fixes from feature changes. Bugfixes may need to be backported\nto the stable branch, according to ",(0,r.kt)("strong",{parentName:"p"},"to-be-added"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If your commit closes an issue in the Wechaty ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/issues"},"issues"),',\nbegin your commit message with the text "Fixed #xxxxx", where "xxxxx" is the\nnumber of the issue your commit fixes. Example: "Fixed #123 -- Added\nwhizbang feature.". Any commit message in that format will automatically\nclose the referenced issue and post a comment\nto it with the full commit message.'))),(0,r.kt)("h2",{id:"reverting-commits"},"Reverting commits"),(0,r.kt)("p",null,"Nobody's perfect; mistakes will be committed."),(0,r.kt)("p",null,"But try very hard to ensure that mistakes don't happen. Just because we have a\nreversion policy doesn't relax your responsibility to aim for the highest\nquality possible. Really: double-check your work, or have it checked by\nanother committer, ",(0,r.kt)("strong",{parentName:"p"},"before")," you commit it in the first place!"),(0,r.kt)("p",null,"When a mistaken commit is discovered, please follow these guidelines:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If possible, have the original author revert their own commit.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Don't revert another author's changes without permission from the\noriginal author.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use git revert -- this will make a reverse commit, but the original\ncommit will still be part of the commit history.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the original author can't be reached (within a reasonable amount\nof time -- a day or so) and the problem is severe -- crashing bug,\nmajor test failures, etc. -- then ask for objections on the\n",(0,r.kt)("em",{parentName:"p"},"wechaty")," mailing list then revert if there are none.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the problem is small (a feature commit after feature freeze,\nsay), wait it out.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If there's a disagreement between the committer and the\nreverter-to-be then try to work it out on the ",(0,r.kt)("em",{parentName:"p"},"wechaty"),"\nmailing list. If an agreement can't be reached then it should\nbe put to a vote.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the commit introduced a confirmed, disclosed security\nvulnerability then the commit may be reverted immediately without\npermission from anyone.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The release branch maintainer may back out commits to the release\nbranch without permission if the commit breaks the release branch.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you mistakenly push a topic branch to ",(0,r.kt)("inlineCode",{parentName:"p"},"wechaty/wechaty"),", delete it.\nFor instance, if you did: ",(0,r.kt)("inlineCode",{parentName:"p"},"git push upstream feature_antigravity"),",\ndo a reverse push: ",(0,r.kt)("inlineCode",{parentName:"p"},"git push upstream :feature_antigravity"),"."))),(0,r.kt)("h2",{id:"special-thanks"},"Special Thanks"),(0,r.kt)("p",null,"I have to credit Django doc authors, because this documentation page is inspired by, and mostly copy/pasted from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/django/django/blob/main/docs/internals/contributing/committing-code.txt"},"Django contributing docs")))}p.isMDXComponent=!0}}]);