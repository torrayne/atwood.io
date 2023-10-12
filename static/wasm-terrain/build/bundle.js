var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function o(e){e.forEach(t)}function s(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let c,r;function a(e,t){e.appendChild(t)}function l(e,t,n){e.insertBefore(t,n||null)}function u(e){e.parentNode.removeChild(e)}function d(e){return document.createElement(e)}function f(){return e=" ",document.createTextNode(e);var e}function h(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function p(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function m(e){return""===e?null:+e}function g(e,t){e.value=null==t?"":t}function v(e,t,n,o){e.style.setProperty(t,n,o?"important":"")}function $(e){r=e}function b(e){(function(){if(!r)throw new Error("Function called outside component initialization");return r})().$$.on_mount.push(e)}const w=[],y=[],x=[],S=[],j=Promise.resolve();let _=!1;function k(e){x.push(e)}function M(e){S.push(e)}let E=!1;const C=new Set;function W(){if(!E){E=!0;do{for(let e=0;e<w.length;e+=1){const t=w[e];$(t),G(t.$$)}for($(null),w.length=0;y.length;)y.pop()();for(let e=0;e<x.length;e+=1){const t=x[e];C.has(t)||(C.add(t),t())}x.length=0}while(w.length);for(;S.length;)S.pop()();_=!1,E=!1,C.clear()}}function G(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(k)}}const A=new Set;function q(e,t){e&&e.i&&(A.delete(e),e.i(t))}function D(e,t,n){const o=e.$$.props[t];void 0!==o&&(e.$$.bound[o]=n,n(e.$$.ctx[o]))}function N(e,n,i,c){const{fragment:r,on_mount:a,on_destroy:l,after_update:u}=e.$$;r&&r.m(n,i),c||k((()=>{const n=a.map(t).filter(s);l?l.push(...n):o(n),e.$$.on_mount=[]})),u.forEach(k)}function O(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function P(e,t){-1===e.$$.dirty[0]&&(w.push(e),_||(_=!0,j.then(W)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function z(t,s,i,c,a,l,d,f=[-1]){const h=r;$(t);const p=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(h?h.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:s.target||h.$$.root};d&&d(p.root);let m=!1;if(p.ctx=i?i(t,s.props||{},((e,n,...o)=>{const s=o.length?o[0]:n;return p.ctx&&a(p.ctx[e],p.ctx[e]=s)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](s),m&&P(t,e)),n})):[],p.update(),m=!0,o(p.before_update),p.fragment=!!c&&c(p.ctx),s.target){if(s.hydrate){const e=function(e){return Array.from(e.childNodes)}(s.target);p.fragment&&p.fragment.l(e),e.forEach(u)}else p.fragment&&p.fragment.c();s.intro&&q(t.$$.fragment),N(t,s.target,s.anchor,s.customElement),W()}$(h)}class R{$destroy(){O(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function I(t){let n,s,i,r,$,b,w,y,x,S,j,_,k,M,E,C,W,G,A,q,D,N,O,P,z,R,I,L,T,B,F,H,J;return{c(){var e,o;n=d("form"),s=d("label"),s.textContent="Canvas Width",i=f(),r=d("input"),$=f(),b=d("label"),b.textContent="Noise Scale",w=f(),y=d("input"),x=f(),S=d("label"),S.textContent="Seed",j=f(),_=d("div"),k=d("button"),M=d("img"),C=f(),W=d("input"),G=f(),A=d("div"),q=d("div"),D=d("label"),D.textContent="Simple Mode",N=f(),O=d("input"),P=f(),z=d("div"),R=d("label"),R.textContent="Slow Mode",I=f(),L=d("input"),T=f(),B=d("input"),p(s,"for","width"),p(s,"class","svelte-jesf49"),p(r,"id","width"),p(r,"type","number"),r.required=!0,p(r,"class","svelte-jesf49"),p(b,"for","scale"),p(b,"class","svelte-jesf49"),p(y,"id","scale"),p(y,"type","number"),y.required=!0,p(y,"class","svelte-jesf49"),p(S,"for","seed"),p(S,"class","svelte-jesf49"),e=M.src,o=E="rotate-cw.svg",c||(c=document.createElement("a")),c.href=o,e!==c.href&&p(M,"src","rotate-cw.svg"),p(M,"alt",""),p(M,"class","svelte-jesf49"),v(k,"--rotate",360*t[6]+"deg"),p(k,"class","svelte-jesf49"),p(W,"id","seed"),p(W,"type","number"),W.required=!0,p(W,"class","svelte-jesf49"),p(_,"class","seed svelte-jesf49"),p(D,"for","simple"),p(D,"class","svelte-jesf49"),p(O,"type","checkbox"),p(O,"id","simple"),p(O,"class","svelte-jesf49"),p(q,"class","checkbox svelte-jesf49"),p(R,"for","slow"),p(R,"class","svelte-jesf49"),p(L,"type","checkbox"),p(L,"id","slow"),p(L,"class","svelte-jesf49"),p(z,"class","checkbox svelte-jesf49"),p(A,"class","row svelte-jesf49"),p(B,"type","submit"),B.value=F=t[5]?"Generating":"Generate",B.disabled=t[5],p(B,"class","svelte-jesf49"),p(n,"class","svelte-jesf49")},m(e,o){l(e,n,o),a(n,s),a(n,i),a(n,r),g(r,t[0]),a(n,$),a(n,b),a(n,w),a(n,y),g(y,t[1]),a(n,x),a(n,S),a(n,j),a(n,_),a(_,k),a(k,M),a(_,C),a(_,W),g(W,t[2]),a(n,G),a(n,A),a(A,q),a(q,D),a(q,N),a(q,O),O.checked=t[3],a(A,P),a(A,z),a(z,R),a(z,I),a(z,L),L.checked=t[4],a(n,T),a(n,B),H||(J=[h(r,"input",t[10]),h(y,"input",t[11]),h(k,"click",t[8]),h(W,"input",t[12]),h(O,"change",t[13]),h(L,"change",t[14]),h(n,"submit",t[7])],H=!0)},p(e,[t]){1&t&&m(r.value)!==e[0]&&g(r,e[0]),2&t&&m(y.value)!==e[1]&&g(y,e[1]),64&t&&v(k,"--rotate",360*e[6]+"deg"),4&t&&m(W.value)!==e[2]&&g(W,e[2]),8&t&&(O.checked=e[3]),16&t&&(L.checked=e[4]),32&t&&F!==(F=e[5]?"Generating":"Generate")&&(B.value=F),32&t&&(B.disabled=e[5])},i:e,o:e,d(e){e&&u(n),H=!1,o(J)}}}function L(e,t,n){let{canvasWidth:o,loading:s,noiseScale:i,noiseSeed:c,onSubmit:r,simpleMode:a,slowMode:l}=t,u=0;return e.$$set=e=>{"canvasWidth"in e&&n(0,o=e.canvasWidth),"loading"in e&&n(5,s=e.loading),"noiseScale"in e&&n(1,i=e.noiseScale),"noiseSeed"in e&&n(2,c=e.noiseSeed),"onSubmit"in e&&n(9,r=e.onSubmit),"simpleMode"in e&&n(3,a=e.simpleMode),"slowMode"in e&&n(4,l=e.slowMode)},[o,i,c,a,l,s,u,e=>{e.preventDefault(),r()},e=>{e.preventDefault(),s||(n(2,c=Math.floor(100*Math.random())),n(6,u++,u),r())},r,function(){o=m(this.value),n(0,o)},function(){i=m(this.value),n(1,i)},function(){c=m(this.value),n(2,c)},function(){a=this.checked,n(3,a)},function(){l=this.checked,n(4,l)}]}class T extends R{constructor(e){super(),z(this,e,L,I,i,{canvasWidth:0,loading:5,noiseScale:1,noiseSeed:2,onSubmit:9,simpleMode:3,slowMode:4})}}function B(e){let t,n,o,s,i,c,r,h,m,g;function v(t){e[10](t)}function $(t){e[11](t)}function b(t){e[12](t)}function w(t){e[13](t)}function x(t){e[14](t)}let S={loading:e[2],onSubmit:e[8]};return void 0!==e[1]&&(S.canvasWidth=e[1]),void 0!==e[4]&&(S.noiseSeed=e[4]),void 0!==e[5]&&(S.noiseScale=e[5]),void 0!==e[6]&&(S.simpleMode=e[6]),void 0!==e[7]&&(S.slowMode=e[7]),s=new T({props:S}),y.push((()=>D(s,"canvasWidth",v))),y.push((()=>D(s,"noiseSeed",$))),y.push((()=>D(s,"noiseScale",b))),y.push((()=>D(s,"simpleMode",w))),y.push((()=>D(s,"slowMode",x))),{c(){var e;t=d("main"),n=d("canvas"),o=f(),(e=s.$$.fragment)&&e.c(),p(n,"class","svelte-1stero1"),p(t,"class","svelte-1stero1")},m(i,c){l(i,t,c),a(t,n),e[9](n),a(t,o),N(s,t,null),g=!0},p(e,[t]){const n={};4&t&&(n.loading=e[2]),!i&&2&t&&(i=!0,n.canvasWidth=e[1],M((()=>i=!1))),!c&&16&t&&(c=!0,n.noiseSeed=e[4],M((()=>c=!1))),!r&&32&t&&(r=!0,n.noiseScale=e[5],M((()=>r=!1))),!h&&64&t&&(h=!0,n.simpleMode=e[6],M((()=>h=!1))),!m&&128&t&&(m=!0,n.slowMode=e[7],M((()=>m=!1))),s.$set(n)},i(e){g||(q(s.$$.fragment,e),g=!0)},o(e){!function(e,t,n,o){if(e&&e.o){if(A.has(e))return;A.add(e),(void 0).c.push((()=>{A.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}}(s.$$.fragment,e),g=!1},d(n){n&&u(t),e[9](null),O(s)}}}function F(t,n,o){let s,i=e,c=()=>(i(),i=function(t,...n){if(null==t)return e;const o=t.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(r,(e=>o(17,s=e))),r);t.$$.on_destroy.push((()=>i()));let{generate:r}=n;c();let a,l,u,d=!1,f=1024*window.devicePixelRatio,h=73,p=128*window.devicePixelRatio,m=!1,g=!1;const v=()=>{s&&!d&&(o(2,d=!0),setTimeout((async()=>{console.time("Generated terrain");const e=await s(f,u,p,h,m,g);a.width!=f&&o(3,a.width=f,a),a.height!=u&&o(3,a.height=u,a);const t=(await e.body).getReader();for(let e=0;e<u;e++){const{done:n,value:o}=await t.read();if(o){const t=new ImageData(o,f,1);l.putImageData(t,0,e)}if(n)break}console.timeEnd("Generated terrain"),o(2,d=!1)}),0))};return r.subscribe((()=>v())),b((()=>{o(3,a.width=f,a),o(3,a.height=u,a),l=a.getContext("2d",{alpha:!1}),l.imageSmoothingEnabled=!0})),t.$$set=e=>{"generate"in e&&c(o(0,r=e.generate))},t.$$.update=()=>{2&t.$$.dirty&&(u=Math.round(f*(2/3)))},[r,f,d,a,h,p,m,g,v,function(e){y[e?"unshift":"push"]((()=>{a=e,o(3,a)}))},function(e){f=e,o(1,f)},function(e){h=e,o(4,h)},function(e){p=e,o(5,p)},function(e){m=e,o(6,m)},function(e){g=e,o(7,g)}]}const H=[];const J=function(t,n=e){let o;const s=new Set;function c(e){if(i(t,e)&&(t=e,o)){const e=!H.length;for(const e of s)e[1](),H.push(e,t);if(e){for(let e=0;e<H.length;e+=2)H[e][0](H[e+1]);H.length=0}}}return{set:c,update:function(e){c(e(t))},subscribe:function(i,r=e){const a=[i,r];return s.add(a),1===s.size&&(o=n(c)||e),i(t),()=>{s.delete(a),0===s.size&&(o(),o=null)}}}}(null),K=new Go;WebAssembly.instantiateStreaming(fetch("wasm/index.wasm"),K.importObject).then((e=>{K.run(e.instance),J.set(window.generate)}));return new class extends R{constructor(e){super(),z(this,e,F,B,i,{generate:0})}}({target:document.body,props:{generate:J}})}();
//# sourceMappingURL=bundle.js.map