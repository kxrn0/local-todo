if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,p)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let l={};const f=e=>a(e,c),n={module:{uri:c},exports:l,require:f};s[c]=Promise.all(i.map((e=>n[e]||f(e)))).then((e=>(p(...e),l)))}}define(["./workbox-8bfa659f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-39289606.js",revision:null},{url:"assets/index-d21c69fd.css",revision:null},{url:"assets/Rubik-Regular-5d35ff70.ttf",revision:null},{url:"assets/Rubik-SemiBold-4f8d811f.ttf",revision:null},{url:"assets/Rubik-VariableFont_wght-59182418.ttf",revision:null},{url:"favicon.ico",revision:"d8e39c665f3a4ccb0197fcdaef2d1899"},{url:"icons/apple-icon-180.png",revision:"1c76aa9fb9d9a856badf87b127363412"},{url:"icons/apple-splash-1125-2436.jpg",revision:"4161b8c422323586e44227d1bf3117e2"},{url:"icons/apple-splash-1136-640.jpg",revision:"35fdea2be71c34d6f4af1e83c7294a3e"},{url:"icons/apple-splash-1170-2532.jpg",revision:"26361209f6dd523d0e779f19667940b6"},{url:"icons/apple-splash-1179-2556.jpg",revision:"2e215d2c7c5f40102c94d4108eb06b2d"},{url:"icons/apple-splash-1242-2208.jpg",revision:"3e37d73fdc6b46714ea724393340106f"},{url:"icons/apple-splash-1242-2688.jpg",revision:"d81b97b32e0816001f0d23a6ef9afcc2"},{url:"icons/apple-splash-1284-2778.jpg",revision:"b3148edc1581bafcbaca9f259f679fb0"},{url:"icons/apple-splash-1290-2796.jpg",revision:"05dae02e0b2e46902538b14347d1bd3e"},{url:"icons/apple-splash-1334-750.jpg",revision:"1f0954182381804dbe215524b3cd3534"},{url:"icons/apple-splash-1536-2048.jpg",revision:"4b68aba06a3f5420676035e632091b5c"},{url:"icons/apple-splash-1620-2160.jpg",revision:"dbec291294b43541dab8dc9f747d3758"},{url:"icons/apple-splash-1668-2224.jpg",revision:"6906eaade5f233689d9408ffd0e4a981"},{url:"icons/apple-splash-1668-2388.jpg",revision:"cf70caa3a9baf64b8c0f5657d86add96"},{url:"icons/apple-splash-1792-828.jpg",revision:"4780c208fb83335dfd61e1bb7daa3bff"},{url:"icons/apple-splash-2048-1536.jpg",revision:"362c5b679e20d3bebdd6692fc4aec40c"},{url:"icons/apple-splash-2048-2732.jpg",revision:"0afe9f2c04f328f4db43ec538be35ce7"},{url:"icons/apple-splash-2160-1620.jpg",revision:"e302c8671276acfd5bf4488ebd3c350f"},{url:"icons/apple-splash-2208-1242.jpg",revision:"95611f8cd6203fb4caa24334c6897dde"},{url:"icons/apple-splash-2224-1668.jpg",revision:"649e516eb67571268896275beea55aeb"},{url:"icons/apple-splash-2388-1668.jpg",revision:"cee75abeb0fd2a7157bf7c36f6c2af51"},{url:"icons/apple-splash-2436-1125.jpg",revision:"d08d0d63f3e688ca444b0a68cdbf8200"},{url:"icons/apple-splash-2532-1170.jpg",revision:"03d1c7f5f985f41ddd505ca54f7f4b87"},{url:"icons/apple-splash-2556-1179.jpg",revision:"f9b25b42adf9db8c890373450781ee97"},{url:"icons/apple-splash-2688-1242.jpg",revision:"c2c3cbade16c9b6131b8da1af2046969"},{url:"icons/apple-splash-2732-2048.jpg",revision:"0b4a138d1f107ccc5cff94f721de4c80"},{url:"icons/apple-splash-2778-1284.jpg",revision:"97722f39657ff5100dd56cf9917101c8"},{url:"icons/apple-splash-2796-1290.jpg",revision:"0552a98b69eec3fdd442743024474171"},{url:"icons/apple-splash-640-1136.jpg",revision:"dc665edca5d54544dae9f5d8567525ba"},{url:"icons/apple-splash-750-1334.jpg",revision:"5d768a6e340f831062ab51f9fcf5705b"},{url:"icons/apple-splash-828-1792.jpg",revision:"da8e778cae1c501d222741d1f7a009d8"},{url:"icons/manifest-icon-192.maskable.png",revision:"fafa3188bf2bc3a1f853d1c126dcf549"},{url:"icons/manifest-icon-512.maskable.png",revision:"eb90e8bffb30a730f8b29a5a85bcf649"},{url:"index.html",revision:"ff35fe52e8c42fa65d021ace334797f0"},{url:"manifest.webmanifest",revision:"a25006629c2dec63c60321cbafcc697d"},{url:"registerSW.js",revision:"915001413eae979aa56ee44c1b891bb8"},{url:"favicon.ico",revision:"d8e39c665f3a4ccb0197fcdaef2d1899"},{url:"icons/apple-icon-180.png",revision:"1c76aa9fb9d9a856badf87b127363412"},{url:"icons/apple-splash-1125-2436.jpg",revision:"4161b8c422323586e44227d1bf3117e2"},{url:"icons/apple-splash-1136-640.jpg",revision:"35fdea2be71c34d6f4af1e83c7294a3e"},{url:"icons/apple-splash-1170-2532.jpg",revision:"26361209f6dd523d0e779f19667940b6"},{url:"icons/apple-splash-1179-2556.jpg",revision:"2e215d2c7c5f40102c94d4108eb06b2d"},{url:"icons/apple-splash-1242-2208.jpg",revision:"3e37d73fdc6b46714ea724393340106f"},{url:"icons/apple-splash-1242-2688.jpg",revision:"d81b97b32e0816001f0d23a6ef9afcc2"},{url:"icons/apple-splash-1284-2778.jpg",revision:"b3148edc1581bafcbaca9f259f679fb0"},{url:"icons/apple-splash-1290-2796.jpg",revision:"05dae02e0b2e46902538b14347d1bd3e"},{url:"icons/apple-splash-1334-750.jpg",revision:"1f0954182381804dbe215524b3cd3534"},{url:"icons/apple-splash-1536-2048.jpg",revision:"4b68aba06a3f5420676035e632091b5c"},{url:"icons/apple-splash-1620-2160.jpg",revision:"dbec291294b43541dab8dc9f747d3758"},{url:"icons/apple-splash-1668-2224.jpg",revision:"6906eaade5f233689d9408ffd0e4a981"},{url:"icons/apple-splash-1668-2388.jpg",revision:"cf70caa3a9baf64b8c0f5657d86add96"},{url:"icons/apple-splash-1792-828.jpg",revision:"4780c208fb83335dfd61e1bb7daa3bff"},{url:"icons/apple-splash-2048-1536.jpg",revision:"362c5b679e20d3bebdd6692fc4aec40c"},{url:"icons/apple-splash-2048-2732.jpg",revision:"0afe9f2c04f328f4db43ec538be35ce7"},{url:"icons/apple-splash-2160-1620.jpg",revision:"e302c8671276acfd5bf4488ebd3c350f"},{url:"icons/apple-splash-2208-1242.jpg",revision:"95611f8cd6203fb4caa24334c6897dde"},{url:"icons/apple-splash-2224-1668.jpg",revision:"649e516eb67571268896275beea55aeb"},{url:"icons/apple-splash-2388-1668.jpg",revision:"cee75abeb0fd2a7157bf7c36f6c2af51"},{url:"icons/apple-splash-2436-1125.jpg",revision:"d08d0d63f3e688ca444b0a68cdbf8200"},{url:"icons/apple-splash-2532-1170.jpg",revision:"03d1c7f5f985f41ddd505ca54f7f4b87"},{url:"icons/apple-splash-2556-1179.jpg",revision:"f9b25b42adf9db8c890373450781ee97"},{url:"icons/apple-splash-2688-1242.jpg",revision:"c2c3cbade16c9b6131b8da1af2046969"},{url:"icons/apple-splash-2732-2048.jpg",revision:"0b4a138d1f107ccc5cff94f721de4c80"},{url:"icons/apple-splash-2778-1284.jpg",revision:"97722f39657ff5100dd56cf9917101c8"},{url:"icons/apple-splash-2796-1290.jpg",revision:"0552a98b69eec3fdd442743024474171"},{url:"icons/apple-splash-640-1136.jpg",revision:"dc665edca5d54544dae9f5d8567525ba"},{url:"icons/apple-splash-750-1334.jpg",revision:"5d768a6e340f831062ab51f9fcf5705b"},{url:"icons/apple-splash-828-1792.jpg",revision:"da8e778cae1c501d222741d1f7a009d8"},{url:"icons/manifest-icon-192.maskable.png",revision:"fafa3188bf2bc3a1f853d1c126dcf549"},{url:"icons/manifest-icon-512.maskable.png",revision:"eb90e8bffb30a730f8b29a5a85bcf649"},{url:"manifest.webmanifest",revision:"a25006629c2dec63c60321cbafcc697d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
