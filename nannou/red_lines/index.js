(()=>{var e,r,t,o,n,a,i={},s={};function c(e){var r=s[e];if(void 0!==r)return r.exports;var t=s[e]={id:e,loaded:!1,exports:{}};return i[e](t,t.exports,c),t.loaded=!0,t.exports}c.m=i,e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",r="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",t="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",o=e=>{e&&!e.d&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},c.a=(n,a,i)=>{var s;i&&((s=[]).d=1);var c,p,u,l=new Set,d=n.exports,b=new Promise(((e,r)=>{u=r,p=e}));b[r]=d,b[e]=e=>(s&&e(s),l.forEach(e),b.catch((e=>{}))),n.exports=b,a((n=>{var a;c=(n=>n.map((n=>{if(null!==n&&"object"==typeof n){if(n[e])return n;if(n.then){var a=[];a.d=0,n.then((e=>{i[r]=e,o(a)}),(e=>{i[t]=e,o(a)}));var i={};return i[e]=e=>e(a),i}}var s={};return s[e]=e=>{},s[r]=n,s})))(n);var i=()=>c.map((e=>{if(e[t])throw e[t];return e[r]})),p=new Promise((r=>{(a=()=>r(i)).r=0;var t=e=>e!==s&&!l.has(e)&&(l.add(e),e&&!e.d&&(a.r++,e.push(a)));c.map((r=>r[e](t)))}));return a.r?p:i()}),(e=>(e?u(b[t]=e):p(d),o(s)))),s&&(s.d=0)},c.d=(e,r)=>{for(var t in r)c.o(r,t)&&!c.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},c.f={},c.e=e=>Promise.all(Object.keys(c.f).reduce(((r,t)=>(c.f[t](e,r),r)),[])),c.u=e=>e+".js",c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),c.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n={},a="rust-webpack-template:",c.l=(e,r,t,o)=>{if(n[e])n[e].push(r);else{var i,s;if(void 0!==t)for(var p=document.getElementsByTagName("script"),u=0;u<p.length;u++){var l=p[u];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==a+t){i=l;break}}i||(s=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.setAttribute("data-webpack",a+t),i.src=e),n[e]=[r];var d=(r,t)=>{i.onerror=i.onload=null,clearTimeout(b);var o=n[e];if(delete n[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(t))),r)return r(t)},b=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),s&&document.head.appendChild(i)}},c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.v=(e,r,t,o)=>{var n=fetch(c.p+""+t+".module.wasm");return"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(n,o).then((r=>Object.assign(e,r.instance.exports))):n.then((e=>e.arrayBuffer())).then((e=>WebAssembly.instantiate(e,o))).then((r=>Object.assign(e,r.instance.exports)))},(()=>{var e;c.g.importScripts&&(e=c.g.location+"");var r=c.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),c.p=e})(),(()=>{var e={826:0};c.f.j=(r,t)=>{var o=c.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else{var n=new Promise(((t,n)=>o=e[r]=[t,n]));t.push(o[2]=n);var a=c.p+c.u(r),i=new Error;c.l(a,(t=>{if(c.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,o[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var o,n,[a,i,s]=t,p=0;if(a.some((r=>0!==e[r]))){for(o in i)c.o(i,o)&&(c.m[o]=i[o]);s&&s(c)}for(r&&r(t);p<a.length;p++)n=a[p],c.o(e,n)&&e[n]&&e[n][0](),e[n]=0},t=self.webpackChunkrust_webpack_template=self.webpackChunkrust_webpack_template||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),c.e(235).then(c.bind(c,235)).then((e=>{e.main_web()}))})();