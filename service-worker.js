                        importScripts("/assets/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/2021/09/10/baidu-paddle-machine-learning-chatbot-competition/","revision":"9957ad4a0d6452c85815d06587dd7a1b"},{"url":"/2021/08/30/ospp-mid-term-5g-chatbot-puppet/","revision":"36ea79a478c80e22b53201dd91411ca6"},{"url":"/2021/08/29/wechaty-story-generation/","revision":"d0b580be287dfc4d533a5df2ca3a439f"},{"url":"/2021/08/26/wechaty-bot-of-coins/","revision":"fcecd4b9955eddf7690ed3b6d55bc73d"},{"url":"/2021/08/26/ospp-mid-term-wechaty-piggy-bro/","revision":"f34ba1cd16fc7d6503854197aa5f4f2b"}];
            // set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'Wechaty',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `networkFirst` strategy for `*.html`, like all my posts
workbox.routing.registerRoute(
    /\.html$/,
    workbox.strategies.networkFirst()
);

// use `cacheFirst` strategy for images
workbox.routing.registerRoute(
    /assets\/(img|icons)/,
    workbox.strategies.cacheFirst()
);

// third party files
workbox.routing.registerRoute(
    /^https?:\/\/cdn.staticfile.org/,
    workbox.strategies.staleWhileRevalidate()
);
