if(!self.define){let e,s={};const t=(t,i)=>(t=new URL(t+".js",i).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(i,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let f={};const n=e=>t(e,a),c={module:{uri:a},exports:f,require:n};s[a]=Promise.all(i.map((e=>c[e]||n(e)))).then((e=>(r(...e),f)))}}define(["./workbox-552a51d2"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/image/camera.png",revision:"570243392722426a5b6bc673ff5511e5"},{url:"assets/image/capture.png",revision:"88e5c24c6bb105b0b3b075f9d74b9227"},{url:"assets/image/start.png",revision:"68d9b0e7cdf3d8a7e931f486c7cf63a4"},{url:"assets/image/WhatsApp Image 2023-02-24 at 9.41.52 AM.jpeg",revision:"06ef665e690f6ebb4690d5f43157e64f"},{url:"assets/js/app.js",revision:"ff78f6f190eb9faea1c4abb963619cf2"},{url:"assets/js/contants.js",revision:"9f3acf99d00c4007cafc3b574919905b"},{url:"index.html",revision:"645dcba3011a8e49cff76abdff06501d"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map