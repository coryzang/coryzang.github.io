if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(i[l])return;let c={};const d=e=>a(e,l),n={module:{uri:l},exports:c,require:d};i[l]=Promise.all(s.map((e=>n[e]||d(e)))).then((e=>(r(...e),c)))}}define(["./workbox-be8e5e83"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2024/01/23/hello-world/index.html",revision:"f6400b625d590f9144843c9d6f0500a2"},{url:"404.html",revision:"493b9704d1c266e3b7b90d5c3e4a4d36"},{url:"archives/2024/01/index.html",revision:"c2da4b7778390b4fc20f9ba275b43822"},{url:"archives/2024/index.html",revision:"b3de2a471a6255d17e2a73cfa80d83af"},{url:"archives/index.html",revision:"84a634da2e2435b7c10590c7c1138e75"},{url:"assets/algolia/algoliasearch.js",revision:"d5d2500bfe8443b42baaefe4996ee532"},{url:"assets/algolia/algoliasearch.min.js",revision:"9c5e51e57e2b1d888950bf4cb5708c49"},{url:"assets/algolia/algoliasearchLite.js",revision:"ce9b0e62645c036a143f639b92e7789f"},{url:"assets/algolia/algoliasearchLite.min.js",revision:"c2d71f042c879659dbc97f8853b62f21"},{url:"categories/index.html",revision:"899d9e0468997a4a5e93cb389a90328b"},{url:"css/index.css",revision:"309b64ba898f6c48cafa15c881497f1b"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/avatar.jpg",revision:"458ee8f494dc1392075f49a47164dd69"},{url:"img/favicon.png",revision:"3a01517e6bbba87407074da3a7d8120d"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/kalen.jpg",revision:"76ae73fdd0cb048a1b9e9bd964e6325d"},{url:"img/logo.png",revision:"3a01517e6bbba87407074da3a7d8120d"},{url:"index.html",revision:"7ac9b05b61ff3201fbd180574709dae4"},{url:"js/main.js",revision:"960297fafacb19dff1246d71f6dfcf6f"},{url:"js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"js/tw_cn.js",revision:"fb4da68124bbafbd2d3da537c80e27ce"},{url:"js/utils.js",revision:"420a15cf446b5670244a9ea05b2bccf0"},{url:"link/index.html",revision:"be2a7af282e7f5d1a1cc49a91064ae90"},{url:"tags/index.html",revision:"ebf40c368592998e59eb4bb0120a36fa"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
