"use strict";var precacheConfig=[["/portfolio/index.html","d40fd8cafe2d3c23c4b7cab7d1445aae"],["/portfolio/static/css/main.dff1efab.css","f9ab50872ee6465f5e0fa52e76b60e28"],["/portfolio/static/js/main.a71cc3c8.js","887f9fbd5507b782d06469f49608f870"],["/portfolio/static/media/anotherdayanotherword.65d93334.jpeg","65d933342eb0244bf60117d3e923d445"],["/portfolio/static/media/avatar.c150b3a9.jpg","c150b3a9b811a798e269a626f378d078"],["/portfolio/static/media/chata-malolata.329c96a6.jpeg","329c96a6122d654b822771beb1ba8e6a"],["/portfolio/static/media/czyjesttarta.1fa934a1.jpeg","1fa934a1a8d3319cf04085c64eebe413"],["/portfolio/static/media/data_processor.2144216f.jpeg","2144216f2a7a74e923993fb5ae067539"],["/portfolio/static/media/docstore.571c9555.jpeg","571c955512fc0d4a437069d232843841"],["/portfolio/static/media/gajzlerek.2bc2dcaf.jpeg","2bc2dcaf78ef98e4d3f5eb3eb2294c8d"],["/portfolio/static/media/gajzlerek.d038a223.png","d038a223ce1e34ea2a9c9b710bc203ba"],["/portfolio/static/media/gb.2e9c71c7.svg","2e9c71c7514c4036f0122b1bdc202c17"],["/portfolio/static/media/lyles-sutherland.1e275ee3.jpeg","1e275ee397d4a48ab2578ddfda44671b"],["/portfolio/static/media/muter.0e46eddd.jpeg","0e46eddd4ae3e5800309040c497dd536"],["/portfolio/static/media/phg.db4888b7.jpeg","db4888b7e8b0ee6ed3c34f3ec55c6fe0"],["/portfolio/static/media/pl.1f9d98ad.svg","1f9d98add86d562439d174ab2308e5f2"],["/portfolio/static/media/react-infini-grid.36d74ed7.jpeg","36d74ed7486923ffc2e25c133ea9273d"],["/portfolio/static/media/react-select.f32f6531.jpeg","f32f65315a14a9bf191fc657b9d36b02"],["/portfolio/static/media/skeletoon.0e667dc8.jpeg","0e667dc802c804321eba4d2d76d00b99"],["/portfolio/static/media/sme.247c3aa9.jpeg","247c3aa9151a5448c402a18f53d8db6a"],["/portfolio/static/media/wilson.57bd9db4.jpeg","57bd9db4de5993162eb24a2d5ca651ae"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});