import{S as M,P as v,W as S,O as A,a as C,M as L,D as W,F as z,b as O,B as X,c as b,g as Y,R as Z}from"./vendor.f8a49a16.js";const F=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function d(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=d(e);fetch(e.href,o)}};F();window.addEventListener("resize",R,!1);function R(){l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),f.setSize(window.innerWidth,window.innerHeight)}const h=new Z,u=new M,l=new v(75,window.innerWidth/window.innerHeight,.1,1e3),f=new S({canvas:threejsCanva});f.setSize(window.innerWidth,window.innerHeight);f.setPixelRatio(devicePixelRatio);document.body.appendChild(f.domElement);const c=new A(l,f.domElement);c.enableZoom=!1;c.minPolarAngle=1.4;c.maxPolarAngle=1.7;c.minAzimuthAngle=-.1;c.maxAzimuthAngle=.1;c.rotateSpeed=.07;c.enablePan=!1;const j=new C(700,400,50,50),E=new L({side:W,flatShading:z,vertexColors:!0}),i=new O(j,E),p=[],{array:s}=i.geometry.attributes.position;for(let n=0;n<s.length;n++){if(n%3===0){const a=s[n],d=s[n+1],t=s[n+2];s[n]=a+(Math.random()-.5),s[n+1]=d+Math.random()-.5,s[n+2]=(t+Math.random()-.5)*3}p.push(Math.random()*Math.PI*2)}i.geometry.attributes.position.originalPosition=i.geometry.attributes.position.array;i.geometry.attributes.position.randomValues=p;const y=[];for(let n=0;n<i.geometry.attributes.position.count;n++)y.push(0,.19,.4);i.geometry.setAttribute("color",new X(new Float32Array(y),3));const w=new b(16777215,1);w.position.set(0,1,1);const P=new b(16777215,1);P.position.set(0,1,-1);u.add(i);u.add(w);u.add(P);l.position.z=150;const g={x:void 0,y:void 0};addEventListener("mousemove",n=>{g.x=n.clientX/innerWidth*2-1,g.y=-(n.clientY/innerHeight)*2+1});let m=0;function x(){f.render(u,l),requestAnimationFrame(x),m+=.01,h.setFromCamera(g,l);const{array:n,originalPosition:a,randomValues:d}=i.geometry.attributes.position;for(let e=0;e<n.length;e+=3)n[e]=a[e]+Math.cos(m+d[e])*.01,n[e+1]=a[e+1]+Math.sin(m+d[e+1])*.01;i.geometry.attributes.position.needsUpdate=!0;const t=h.intersectObject(i);if(t.length>0){const{color:e}=t[0].object.geometry.attributes;e.setX(t[0].face.a,.1),e.setY(t[0].face.a,.5),e.setZ(t[0].face.a,1),e.setX(t[0].face.b,.1),e.setY(t[0].face.b,.5),e.setZ(t[0].face.b,1),e.setX(t[0].face.c,.1),e.setY(t[0].face.c,.5),e.setZ(t[0].face.c,1),t[0].object.geometry.attributes.color.needsUpdate=!0;const o={r:0,g:.19,b:.4},r={r:.1,g:.5,b:1};Y.to(r,{r:o.r,g:o.g,b:o.b,duration:1,onUpdate:()=>{e.setX(t[0].face.a,r.r),e.setY(t[0].face.a,r.g),e.setZ(t[0].face.a,r.b),e.setX(t[0].face.b,r.r),e.setY(t[0].face.b,r.g),e.setZ(t[0].face.b,r.b),e.setX(t[0].face.c,r.r),e.setY(t[0].face.c,r.g),e.setZ(t[0].face.c,r.b),e.needsUpdate=!0}})}}x();