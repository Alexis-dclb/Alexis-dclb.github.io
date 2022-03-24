const Za="138";const vx=2,Mx=1;const Io="300 es";class on{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,e);e.target=null}}}const pt=[];for(let r=0;r<256;r++)pt[r]=(r<16?"0":"")+r.toString(16);const Hs=Math.PI/180,La=180/Math.PI;function ai(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pt[r&255]+pt[r>>8&255]+pt[r>>16&255]+pt[r>>24&255]+"-"+pt[e&255]+pt[e>>8&255]+"-"+pt[e>>16&15|64]+pt[e>>24&255]+"-"+pt[t&63|128]+pt[t>>8&255]+"-"+pt[t>>16&255]+pt[t>>24&255]+pt[i&255]+pt[i>>8&255]+pt[i>>16&255]+pt[i>>24&255]).toUpperCase()}function Nt(r,e,t){return Math.max(e,Math.min(t,r))}function jh(r,e){return(r%e+e)%e}function Vs(r,e,t){return(1-t)*r+t*e}function No(r){return(r&r-1)===0&&r!==0}function Pa(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}class ee{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this)}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this)}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}ee.prototype.isVector2=!0;class gt{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,n,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],_=i[8],g=n[0],x=n[3],p=n[6],m=n[1],b=n[4],v=n[7],y=n[2],w=n[5],R=n[8];return s[0]=a*g+o*m+l*y,s[3]=a*x+o*b+l*w,s[6]=a*p+o*v+l*R,s[1]=c*g+h*m+u*y,s[4]=c*x+h*b+u*w,s[7]=c*p+h*v+u*R,s[2]=d*g+f*m+_*y,s[5]=d*x+f*b+_*w,s[8]=d*p+f*v+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,f=c*s-a*l,_=t*u+i*d+n*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=u*g,e[1]=(n*c-h*i)*g,e[2]=(o*i-n*a)*g,e[3]=d*g,e[4]=(h*t-n*l)*g,e[5]=(n*s-o*t)*g,e[6]=f*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=t,i[4]*=t,i[7]*=t,this}rotate(e){const t=Math.cos(e),i=Math.sin(e),n=this.elements,s=n[0],a=n[3],o=n[6],l=n[1],c=n[4],h=n[7];return n[0]=t*s+i*l,n[3]=t*a+i*c,n[6]=t*o+i*h,n[1]=-i*s+t*l,n[4]=-i*a+t*c,n[7]=-i*o+t*h,this}translate(e,t){const i=this.elements;return i[0]+=e*i[2],i[3]+=e*i[5],i[6]+=e*i[8],i[1]+=t*i[2],i[4]+=t*i[5],i[7]+=t*i[8],this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}gt.prototype.isMatrix3=!0;function tc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>65535)return!0;return!1}function Mr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}const ic={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jt={h:0,s:0,l:0},Or={h:0,s:0,l:0};function ks(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function On(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ws(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}class me{constructor(e,t,i){return t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,this}setRGB(e,t,i){return this.r=e,this.g=t,this.b=i,this}setHSL(e,t,i){if(e=jh(e,1),t=Nt(t,0,1),i=Nt(i,0,1),t===0)this.r=this.g=this.b=i;else{const n=i<=.5?i*(1+t):i+t-i*t,s=2*i-n;this.r=ks(s,n,e+1/3),this.g=ks(s,n,e),this.b=ks(s,n,e-1/3)}return this}setStyle(e){function t(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let n;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(n[1],10))/255,this.g=Math.min(255,parseInt(n[2],10))/255,this.b=Math.min(255,parseInt(n[3],10))/255,t(n[4]),this;if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(n[1],10))/100,this.g=Math.min(100,parseInt(n[2],10))/100,this.b=Math.min(100,parseInt(n[3],10))/100,t(n[4]),this;break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const o=parseFloat(n[1])/360,l=parseInt(n[2],10)/100,c=parseInt(n[3],10)/100;return t(n[4]),this.setHSL(o,l,c)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=i[1],s=n.length;if(s===3)return this.r=parseInt(n.charAt(0)+n.charAt(0),16)/255,this.g=parseInt(n.charAt(1)+n.charAt(1),16)/255,this.b=parseInt(n.charAt(2)+n.charAt(2),16)/255,this;if(s===6)return this.r=parseInt(n.charAt(0)+n.charAt(1),16)/255,this.g=parseInt(n.charAt(2)+n.charAt(3),16)/255,this.b=parseInt(n.charAt(4)+n.charAt(5),16)/255,this}return e&&e.length>0?this.setColorName(e):this}setColorName(e){const t=ic[e.toLowerCase()];return t!==void 0?this.setHex(t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=On(e.r),this.g=On(e.g),this.b=On(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(){return this.r*255<<16^this.g*255<<8^this.b*255<<0}getHexString(){return("000000"+this.getHex().toString(16)).slice(-6)}getHSL(e){const t=this.r,i=this.g,n=this.b,s=Math.max(t,i,n),a=Math.min(t,i,n);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else{const h=s-a;switch(l=c<=.5?h/(s+a):h/(2-s-a),s){case t:o=(i-n)/h+(i<n?6:0);break;case i:o=(n-t)/h+2;break;case n:o=(t-i)/h+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getStyle(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"}offsetHSL(e,t,i){return this.getHSL(jt),jt.h+=e,jt.s+=t,jt.l+=i,this.setHSL(jt.h,jt.s,jt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(jt),e.getHSL(Or);const i=Vs(jt.h,Or.h,t),n=Vs(jt.s,Or.s,t),s=Vs(jt.l,Or.l,t);return this.setHSL(i,n,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),e.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}me.NAMES=ic;me.prototype.isColor=!0;me.prototype.r=1;me.prototype.g=1;me.prototype.b=1;let mn;class ln{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{mn===void 0&&(mn=Mr("canvas")),mn.width=e.width,mn.height=e.height;const i=mn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=mn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Mr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=On(s[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(On(t[i]/255)*255):t[i]=On(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class nc{constructor(e=null){this.uuid=ai(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(Xs(n[a].image)):s.push(Xs(n[a]))}else s=Xs(n);i.url=s}return t||(e.images[this.uuid]=i),i}}function Xs(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?ln.getDataURL(r):r.data?{data:Array.prototype.slice.call(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}nc.prototype.isSource=!0;let Zh=0;class dt extends on{constructor(e=dt.DEFAULT_IMAGE,t=dt.DEFAULT_MAPPING,i=1001,n=1001,s=1006,a=1008,o=1023,l=1009,c=1,h=3e3){super();Object.defineProperty(this,"id",{value:Zh++}),this.uuid=ai(),this.name="",this.source=new nc(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case 1e3:e.x=e.x-Math.floor(e.x);break;case 1001:e.x=e.x<0?0:1;break;case 1002:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case 1e3:e.y=e.y-Math.floor(e.y);break;case 1001:e.y=e.y<0?0:1;break;case 1002:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}dt.DEFAULT_IMAGE=null;dt.DEFAULT_MAPPING=300;dt.prototype.isTexture=!0;class We{constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],g=l[2],x=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+x)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,v=(f+1)/2,y=(p+1)/2,w=(h+d)/4,R=(u+g)/4,P=(_+x)/4;return b>v&&b>y?b<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(b),n=w/i,s=R/i):v>y?v<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(v),i=w/n,s=P/n):y<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(y),i=R/s,n=P/s),this.set(i,n,s,t),this}let m=Math.sqrt((x-_)*(x-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(m)<.001&&(m=1),this.x=(x-_)/m,this.y=(u-g)/m,this.z=(d-h)/m,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}We.prototype.isVector4=!0;class Bt extends on{constructor(e,t,i={}){super();this.width=e,this.height=t,this.depth=1,this.scissor=new We(0,0,e,t),this.scissorTest=!1,this.viewport=new We(0,0,e,t);const n={width:e,height:t,depth:1};this.texture=new dt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:1006,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.image=Object.assign({},e.texture.image),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}Bt.prototype.isWebGLRenderTarget=!0;class Rs extends dt{constructor(e=null,t=1,i=1,n=1){super(null);this.image={data:e,width:t,height:i,depth:n},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Rs.prototype.isDataArrayTexture=!0;class Jh extends Bt{constructor(e,t,i){super(e,t);this.depth=i,this.texture=new Rs(null,e,t,i),this.texture.isRenderTargetTexture=!0}}Jh.prototype.isWebGLArrayRenderTarget=!0;class Ja extends dt{constructor(e=null,t=1,i=1,n=1){super(null);this.image={data:e,width:t,height:i,depth:n},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Ja.prototype.isData3DTexture=!0;class Kh extends Bt{constructor(e,t,i){super(e,t);this.depth=i,this.texture=new Ja(null,e,t,i),this.texture.isRenderTargetTexture=!0}}Kh.prototype.isWebGL3DRenderTarget=!0;class $h extends Bt{constructor(e,t,i,n={}){super(e,t,n);const s=this.texture;this.texture=[];for(let a=0;a<i;a++)this.texture[a]=s.clone(),this.texture[a].isRenderTargetTexture=!0}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.texture.length;n<s;n++)this.texture[n].image.width=e,this.texture[n].image.height=t,this.texture[n].image.depth=i;this.dispose()}return this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t),this}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.depthTexture=e.depthTexture,this.texture.length=0;for(let t=0,i=e.texture.length;t<i;t++)this.texture[t]=e.texture[t].clone();return this}}$h.prototype.isWebGLMultipleRenderTargets=!0;class Rt{constructor(e=0,t=0,i=0,n=1){this._x=e,this._y=t,this._z=i,this._w=n}static slerp(e,t,i,n){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),i.slerpQuaternions(e,t,n)}static slerpFlat(e,t,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const d=s[a+0],f=s[a+1],_=s[a+2],g=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(u!==g||l!==d||c!==f||h!==_){let x=1-o;const p=l*d+c*f+h*_+u*g,m=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const y=Math.sqrt(b),w=Math.atan2(y,p*m);x=Math.sin(x*w)/y,o=Math.sin(o*w)/y}const v=o*m;if(l=l*x+d*v,c=c*x+f*v,h=h*x+_*v,u=u*x+g*v,x===1-o){const y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,a){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[a],d=s[a+1],f=s[a+2],_=s[a+3];return e[t]=o*_+h*u+l*f-c*d,e[t+1]=l*_+h*d+c*u-o*f,e[t+2]=c*_+h*f+o*d-l*u,e[t+3]=h*_-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){if(!(e&&e.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(s/2),d=l(i/2),f=l(n/2),_=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-n)*f}else if(i>o&&i>u){const f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+c)/f}else if(o>u){const f=2*Math.sqrt(1+o-i-u);this._w=(s-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e,t){return t!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(e,t)):this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+n*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*n+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(s),i*Math.cos(s),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}Rt.prototype.isQuaternion=!0;class A{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e,t){return t!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(e,t)):(this.x+=e.x,this.y+=e.y,this.z+=e.z,this)}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e,t){return t!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(e,t)):(this.x-=e.x,this.y-=e.y,this.z-=e.z,this)}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(e,t)):(this.x*=e.x,this.y*=e.y,this.z*=e.z,this)}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return e&&e.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Bo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*n-o*i,h=l*i+o*t-s*n,u=l*n+s*i-a*t,d=-s*t-a*i-o*n;return this.x=c*l+d*-s+h*-o-u*-a,this.y=h*l+d*-a+u*-s-c*-o,this.z=u*l+d*-o+c*-a-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e,t){return t!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(e,t)):this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qs.copy(this).projectOnVector(e),this.sub(qs)}reflect(e){return this.sub(qs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t,i){return i!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}A.prototype.isVector3=!0;const qs=new A,Bo=new Rt;class $t{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,n=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],u=e[l+1],d=e[l+2];h<t&&(t=h),u<i&&(i=u),d<n&&(n=d),h>s&&(s=h),u>a&&(a=u),d>o&&(o=d)}return this.min.set(t,i,n),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,i=1/0,n=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),u=e.getY(l),d=e.getZ(l);h<t&&(t=h),u<i&&(i=u),d<n&&(n=d),h>s&&(s=h),u>a&&(a=u),d>o&&(o=d)}return this.min.set(t,i,n),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Yi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)Yi.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Yi)}else i.boundingBox===null&&i.computeBoundingBox(),Ys.copy(i.boundingBox),Ys.applyMatrix4(e.matrixWorld),this.union(Ys);const n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Yi),Yi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nr),zr.subVectors(this.max,nr),gn.subVectors(e.a,nr),_n.subVectors(e.b,nr),xn.subVectors(e.c,nr),bi.subVectors(_n,gn),Ei.subVectors(xn,_n),ji.subVectors(gn,xn);let t=[0,-bi.z,bi.y,0,-Ei.z,Ei.y,0,-ji.z,ji.y,bi.z,0,-bi.x,Ei.z,0,-Ei.x,ji.z,0,-ji.x,-bi.y,bi.x,0,-Ei.y,Ei.x,0,-ji.y,ji.x,0];return!js(t,gn,_n,xn,zr)||(t=[1,0,0,0,1,0,0,0,1],!js(t,gn,_n,xn,zr))?!1:(Gr.crossVectors(bi,Ei),t=[Gr.x,Gr.y,Gr.z],js(t,gn,_n,xn,zr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Yi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Yi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}$t.prototype.isBox3=!0;const hi=[new A,new A,new A,new A,new A,new A,new A,new A],Yi=new A,Ys=new $t,gn=new A,_n=new A,xn=new A,bi=new A,Ei=new A,ji=new A,nr=new A,zr=new A,Gr=new A,Zi=new A;function js(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){Zi.fromArray(r,s);const o=n.x*Math.abs(Zi.x)+n.y*Math.abs(Zi.y)+n.z*Math.abs(Zi.z),l=e.dot(Zi),c=t.dot(Zi),h=i.dot(Zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Qh=new $t,Uo=new A,Hr=new A,Zs=new A;class Zn{constructor(e=new A,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Qh.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){Zs.subVectors(e,this.center);const t=Zs.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.add(Zs.multiplyScalar(n/i)),this.radius+=n}return this}union(e){return this.center.equals(e.center)===!0?Hr.set(0,0,1).multiplyScalar(e.radius):Hr.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(Uo.copy(e.center).add(Hr)),this.expandByPoint(Uo.copy(e.center).sub(Hr)),this}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ui=new A,Js=new A,Vr=new A,Ti=new A,Ks=new A,kr=new A,$s=new A;class cn{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.direction).multiplyScalar(t).add(this.origin),ui.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Js.copy(e).add(t).multiplyScalar(.5),Vr.copy(t).sub(e).normalize(),Ti.copy(this.origin).sub(Js);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Vr),o=Ti.dot(this.direction),l=-Ti.dot(Vr),c=Ti.lengthSq(),h=Math.abs(1-a*a);let u,d,f,_;if(h>0)if(u=a*l-o,d=a*o-l,_=s*h,u>=0)if(d>=-_)if(d<=_){const g=1/h;u*=g,d*=g,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(u).add(this.origin),n&&n.copy(Vr).multiplyScalar(d).add(Js),f}intersectSphere(e,t){ui.subVectors(e.center,this.origin);const i=ui.dot(this.direction),n=ui.dot(ui)-i*i,s=e.radius*e.radius;if(n>s)return null;const a=Math.sqrt(s-n),o=i-a,l=i+a;return o<0&&l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>n||((s>i||i!==i)&&(i=s),(a<n||n!==n)&&(n=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,i,n,s){Ks.subVectors(t,e),kr.subVectors(i,e),$s.crossVectors(Ks,kr);let a=this.direction.dot($s),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ti.subVectors(this.origin,e);const l=o*this.direction.dot(kr.crossVectors(Ti,kr));if(l<0)return null;const c=o*this.direction.dot(Ks.cross(Ti));if(c<0||l+c>a)return null;const h=-o*Ti.dot($s);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xe{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(e,t,i,n,s,a,o,l,c,h,u,d,f,_,g,x){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/yn.setFromMatrixColumn(e,0).length(),s=1/yn.setFromMatrixColumn(e,1).length(),a=1/yn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){e&&e.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,f=a*u,_=o*h,g=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+_*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=_+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,_=c*h,g=c*u;t[0]=d+g*o,t[4]=_*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-_,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,_=c*h,g=c*u;t[0]=d-g*o,t[4]=-a*u,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*h,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,_=o*h,g=o*u;t[0]=l*h,t[4]=_*c-f,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=f*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*h,t[4]=g-d*u,t[8]=_*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+_,t[10]=d-g*u}else if(e.order==="XZY"){const d=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=a*h,t[9]=f*u-_,t[2]=_*u-f,t[6]=o*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eu,e,tu)}lookAt(e,t,i){const n=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),wi.crossVectors(i,Dt),wi.lengthSq()===0&&(Math.abs(i.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),wi.crossVectors(i,Dt)),wi.normalize(),Wr.crossVectors(Dt,wi),n[0]=wi.x,n[4]=Wr.x,n[8]=Dt.x,n[1]=wi.y,n[5]=Wr.y,n[9]=Dt.y,n[2]=wi.z,n[6]=Wr.z,n[10]=Dt.z,this}multiply(e,t){return t!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(e,t)):this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],_=i[2],g=i[6],x=i[10],p=i[14],m=i[3],b=i[7],v=i[11],y=i[15],w=n[0],R=n[4],P=n[8],G=n[12],U=n[1],M=n[5],C=n[9],D=n[13],I=n[2],z=n[6],N=n[10],H=n[14],B=n[3],q=n[7],K=n[11],J=n[15];return s[0]=a*w+o*U+l*I+c*B,s[4]=a*R+o*M+l*z+c*q,s[8]=a*P+o*C+l*N+c*K,s[12]=a*G+o*D+l*H+c*J,s[1]=h*w+u*U+d*I+f*B,s[5]=h*R+u*M+d*z+f*q,s[9]=h*P+u*C+d*N+f*K,s[13]=h*G+u*D+d*H+f*J,s[2]=_*w+g*U+x*I+p*B,s[6]=_*R+g*M+x*z+p*q,s[10]=_*P+g*C+x*N+p*K,s[14]=_*G+g*D+x*H+p*J,s[3]=m*w+b*U+v*I+y*B,s[7]=m*R+b*M+v*z+y*q,s[11]=m*P+b*C+v*N+y*K,s[15]=m*G+b*D+v*H+y*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],_=e[3],g=e[7],x=e[11],p=e[15];return _*(+s*l*u-n*c*u-s*o*d+i*c*d+n*o*f-i*l*f)+g*(+t*l*f-t*c*d+s*a*d-n*a*f+n*c*h-s*l*h)+x*(+t*c*u-t*o*f-s*a*u+i*a*f+s*o*h-i*c*h)+p*(-n*o*h-t*l*u+t*o*d+n*a*u-i*a*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],_=e[12],g=e[13],x=e[14],p=e[15],m=u*x*c-g*d*c+g*l*f-o*x*f-u*l*p+o*d*p,b=_*d*c-h*x*c-_*l*f+a*x*f+h*l*p-a*d*p,v=h*g*c-_*u*c+_*o*f-a*g*f-h*o*p+a*u*p,y=_*u*l-h*g*l-_*o*d+a*g*d+h*o*x-a*u*x,w=t*m+i*b+n*v+s*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=m*R,e[1]=(g*d*s-u*x*s-g*n*f+i*x*f+u*n*p-i*d*p)*R,e[2]=(o*x*s-g*l*s+g*n*c-i*x*c-o*n*p+i*l*p)*R,e[3]=(u*l*s-o*d*s-u*n*c+i*d*c+o*n*f-i*l*f)*R,e[4]=b*R,e[5]=(h*x*s-_*d*s+_*n*f-t*x*f-h*n*p+t*d*p)*R,e[6]=(_*l*s-a*x*s-_*n*c+t*x*c+a*n*p-t*l*p)*R,e[7]=(a*d*s-h*l*s+h*n*c-t*d*c-a*n*f+t*l*f)*R,e[8]=v*R,e[9]=(_*u*s-h*g*s-_*i*f+t*g*f+h*i*p-t*u*p)*R,e[10]=(a*g*s-_*o*s+_*i*c-t*g*c-a*i*p+t*o*p)*R,e[11]=(h*o*s-a*u*s-h*i*c+t*u*c+a*i*f-t*o*f)*R,e[12]=y*R,e[13]=(h*g*n-_*u*n+_*i*d-t*g*d-h*i*x+t*u*x)*R,e[14]=(_*o*n-a*g*n-_*i*l+t*g*l+a*i*x-t*o*x)*R,e[15]=(a*u*n-h*o*n+h*i*l-t*u*l-a*i*d+t*o*d)*R,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,f=s*h,_=s*u,g=a*h,x=a*u,p=o*u,m=l*c,b=l*h,v=l*u,y=i.x,w=i.y,R=i.z;return n[0]=(1-(g+p))*y,n[1]=(f+v)*y,n[2]=(_-b)*y,n[3]=0,n[4]=(f-v)*w,n[5]=(1-(d+p))*w,n[6]=(x+m)*w,n[7]=0,n[8]=(_+b)*R,n[9]=(x-m)*R,n[10]=(1-(d+g))*R,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let s=yn.set(n[0],n[1],n[2]).length();const a=yn.set(n[4],n[5],n[6]).length(),o=yn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],Zt.copy(this);const c=1/s,h=1/a,u=1/o;return Zt.elements[0]*=c,Zt.elements[1]*=c,Zt.elements[2]*=c,Zt.elements[4]*=h,Zt.elements[5]*=h,Zt.elements[6]*=h,Zt.elements[8]*=u,Zt.elements[9]*=u,Zt.elements[10]*=u,t.setFromRotationMatrix(Zt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,n,s,a){a===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const o=this.elements,l=2*s/(t-e),c=2*s/(i-n),h=(t+e)/(t-e),u=(i+n)/(i-n),d=-(a+s)/(a-s),f=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=f,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,n,s,a){const o=this.elements,l=1/(t-e),c=1/(i-n),h=1/(a-s),u=(t+e)*l,d=(i+n)*c,f=(a+s)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-f,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}xe.prototype.isMatrix4=!0;const yn=new A,Zt=new xe,eu=new A(0,0,0),tu=new A(1,1,1),wi=new A,Wr=new A,Dt=new A,Oo=new xe,zo=new Rt;class hn{constructor(e=0,t=0,i=0,n=hn.DefaultOrder){this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(Nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Oo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Oo,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zo.setFromEuler(this),this.setFromQuaternion(zo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}}hn.prototype.isEuler=!0;hn.DefaultOrder="XYZ";hn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ka{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let iu=0;const Go=new A,vn=new Rt,di=new xe,Xr=new A,rr=new A,nu=new A,ru=new Rt,Ho=new A(1,0,0),Vo=new A(0,1,0),ko=new A(0,0,1),su={type:"added"},Wo={type:"removed"};class ke extends on{constructor(){super();Object.defineProperty(this,"id",{value:iu++}),this.uuid=ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ke.DefaultUp.clone();const e=new A,t=new hn,i=new Rt,n=new A(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new xe},normalMatrix:{value:new gt}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=ke.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vn.setFromAxisAngle(e,t),this.quaternion.multiply(vn),this}rotateOnWorldAxis(e,t){return vn.setFromAxisAngle(e,t),this.quaternion.premultiply(vn),this}rotateX(e){return this.rotateOnAxis(Ho,e)}rotateY(e){return this.rotateOnAxis(Vo,e)}rotateZ(e){return this.rotateOnAxis(ko,e)}translateOnAxis(e,t){return Go.copy(e).applyQuaternion(this.quaternion),this.position.add(Go.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ho,e)}translateY(e){return this.translateOnAxis(Vo,e)}translateZ(e){return this.translateOnAxis(ko,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Xr.copy(e):Xr.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(rr,Xr,this.up):di.lookAt(Xr,rr,this.up),this.quaternion.setFromRotationMatrix(di),n&&(di.extractRotation(n.matrixWorld),vn.setFromRotationMatrix(di),this.quaternion.premultiply(vn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(su)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wo)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Wo)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,e,nu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,ru,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}ke.DefaultUp=new A(0,1,0);ke.DefaultMatrixAutoUpdate=!0;ke.prototype.isObject3D=!0;const Jt=new A,fi=new A,Qs=new A,pi=new A,Mn=new A,Sn=new A,Xo=new A,ea=new A,ta=new A,ia=new A;class st{constructor(e=new A,t=new A,i=new A){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Jt.subVectors(e,t),n.cross(Jt);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){Jt.subVectors(n,t),fi.subVectors(i,t),Qs.subVectors(e,t);const a=Jt.dot(Jt),o=Jt.dot(fi),l=Jt.dot(Qs),c=fi.dot(fi),h=fi.dot(Qs),u=a*c-o*o;if(u===0)return s.set(-2,-1,-1);const d=1/u,f=(c*l-o*h)*d,_=(a*h-o*l)*d;return s.set(1-f-_,_,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,pi),pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getUV(e,t,i,n,s,a,o,l){return this.getBarycoord(e,t,i,n,pi),l.set(0,0),l.addScaledVector(s,pi.x),l.addScaledVector(a,pi.y),l.addScaledVector(o,pi.z),l}static isFrontFacing(e,t,i,n){return Jt.subVectors(i,t),fi.subVectors(e,t),Jt.cross(fi).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Jt.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return st.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return st.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,s){return st.getUV(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return st.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return st.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let a,o;Mn.subVectors(n,i),Sn.subVectors(s,i),ea.subVectors(e,i);const l=Mn.dot(ea),c=Sn.dot(ea);if(l<=0&&c<=0)return t.copy(i);ta.subVectors(e,n);const h=Mn.dot(ta),u=Sn.dot(ta);if(h>=0&&u<=h)return t.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Mn,a);ia.subVectors(e,s);const f=Mn.dot(ia),_=Sn.dot(ia);if(_>=0&&f<=_)return t.copy(s);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(Sn,o);const x=h*_-f*u;if(x<=0&&u-h>=0&&f-_>=0)return Xo.subVectors(s,n),o=(u-h)/(u-h+(f-_)),t.copy(n).addScaledVector(Xo,o);const p=1/(x+g+d);return a=g*p,o=d*p,t.copy(i).addScaledVector(Mn,a).addScaledVector(Sn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let au=0;class ot extends on{constructor(){super();Object.defineProperty(this,"id",{value:au++}),this.uuid=ai(),this.name="",this.type="Material",this.fog=!0,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}if(t==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=i===1;continue}const n=this[t];if(n===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(i.blending=this.blending),this.side!==0&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function n(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.fog=e.fog,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}ot.prototype.isMaterial=!0;ot.fromType=function(){return null};class Cs extends ot{constructor(e){super();this.type="MeshBasicMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Cs.prototype.isMeshBasicMaterial=!0;const Ze=new A,qr=new ee;class at{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}copyColorsArray(e){const t=this.array;let i=0;for(let n=0,s=e.length;n<s;n++){let a=e[n];a===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",n),a=new me),t[i++]=a.r,t[i++]=a.g,t[i++]=a.b}return this}copyVector2sArray(e){const t=this.array;let i=0;for(let n=0,s=e.length;n<s;n++){let a=e[n];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",n),a=new ee),t[i++]=a.x,t[i++]=a.y}return this}copyVector3sArray(e){const t=this.array;let i=0;for(let n=0,s=e.length;n<s;n++){let a=e[n];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",n),a=new A),t[i++]=a.x,t[i++]=a.y,t[i++]=a.z}return this}copyVector4sArray(e){const t=this.array;let i=0;for(let n=0,s=e.length;n<s;n++){let a=e[n];a===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",n),a=new We),t[i++]=a.x,t[i++]=a.y,t[i++]=a.z,t[i++]=a.w}return this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)qr.fromBufferAttribute(this,t),qr.applyMatrix3(e),this.setXY(t,qr.x,qr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ze.fromBufferAttribute(this,t),Ze.applyMatrix3(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ze.x=this.getX(t),Ze.y=this.getY(t),Ze.z=this.getZ(t),Ze.applyMatrix4(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ze.x=this.getX(t),Ze.y=this.getY(t),Ze.z=this.getZ(t),Ze.applyNormalMatrix(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ze.x=this.getX(t),Ze.y=this.getY(t),Ze.z=this.getZ(t),Ze.transformDirection(e),this.setXYZ(t,Ze.x,Ze.y,Ze.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){return this.array[e*this.itemSize]}setX(e,t){return this.array[e*this.itemSize]=t,this}getY(e){return this.array[e*this.itemSize+1]}setY(e,t){return this.array[e*this.itemSize+1]=t,this}getZ(e){return this.array[e*this.itemSize+2]}setZ(e,t){return this.array[e*this.itemSize+2]=t,this}getW(e){return this.array[e*this.itemSize+3]}setW(e,t){return this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}at.prototype.isBufferAttribute=!0;class rc extends at{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class sc extends at{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ou extends at{constructor(e,t,i){super(new Uint16Array(e),t,i)}}ou.prototype.isFloat16BufferAttribute=!0;class ut extends at{constructor(e,t,i){super(new Float32Array(e),t,i)}}let lu=0;const zt=new xe,na=new ke,bn=new A,Ft=new $t,sr=new $t,lt=new A;class $e extends on{constructor(){super();Object.defineProperty(this,"id",{value:lu++}),this.uuid=ai(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tc(e)?sc:rc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new gt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,i){return zt.makeTranslation(e,t,i),this.applyMatrix4(zt),this}scale(e,t,i){return zt.makeScale(e,t,i),this.applyMatrix4(zt),this}lookAt(e){return na.lookAt(e),na.updateMatrix(),this.applyMatrix4(na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bn).negate(),this.translate(bn.x,bn.y,bn.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ut(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $t);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];Ft.setFromBufferAttribute(s),this.morphTargetsRelative?(lt.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(lt),lt.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(lt)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new A,1/0);return}if(e){const i=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];sr.setFromBufferAttribute(o),this.morphTargetsRelative?(lt.addVectors(Ft.min,sr.min),Ft.expandByPoint(lt),lt.addVectors(Ft.max,sr.max),Ft.expandByPoint(lt)):(Ft.expandByPoint(sr.min),Ft.expandByPoint(sr.max))}Ft.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)lt.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(lt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)lt.fromBufferAttribute(o,c),l&&(bn.fromBufferAttribute(e,c),lt.add(bn)),n=Math.max(n,i.distanceToSquared(lt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,n=t.position.array,s=t.normal.array,a=t.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new at(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let U=0;U<o;U++)c[U]=new A,h[U]=new A;const u=new A,d=new A,f=new A,_=new ee,g=new ee,x=new ee,p=new A,m=new A;function b(U,M,C){u.fromArray(n,U*3),d.fromArray(n,M*3),f.fromArray(n,C*3),_.fromArray(a,U*2),g.fromArray(a,M*2),x.fromArray(a,C*2),d.sub(u),f.sub(u),g.sub(_),x.sub(_);const D=1/(g.x*x.y-x.x*g.y);!isFinite(D)||(p.copy(d).multiplyScalar(x.y).addScaledVector(f,-g.y).multiplyScalar(D),m.copy(f).multiplyScalar(g.x).addScaledVector(d,-x.x).multiplyScalar(D),c[U].add(p),c[M].add(p),c[C].add(p),h[U].add(m),h[M].add(m),h[C].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:i.length}]);for(let U=0,M=v.length;U<M;++U){const C=v[U],D=C.start,I=C.count;for(let z=D,N=D+I;z<N;z+=3)b(i[z+0],i[z+1],i[z+2])}const y=new A,w=new A,R=new A,P=new A;function G(U){R.fromArray(s,U*3),P.copy(R);const M=c[U];y.copy(M),y.sub(R.multiplyScalar(R.dot(M))).normalize(),w.crossVectors(P,M);const D=w.dot(h[U])<0?-1:1;l[U*4]=y.x,l[U*4+1]=y.y,l[U*4+2]=y.z,l[U*4+3]=D}for(let U=0,M=v.length;U<M;++U){const C=v[U],D=C.start,I=C.count;for(let z=D,N=D+I;z<N;z+=3)G(i[z+0]),G(i[z+1]),G(i[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new at(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new A,s=new A,a=new A,o=new A,l=new A,c=new A,h=new A,u=new A;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),g=e.getX(d+1),x=e.getX(d+2);n.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,x),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),o.add(h),l.add(h),c.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(e,t){if(!(e&&e.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",e);return}t===void 0&&(t=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const i=this.attributes;for(const n in i){if(e.attributes[n]===void 0)continue;const a=i[n].array,o=e.attributes[n],l=o.array,c=o.itemSize*t,h=Math.min(l.length,a.length-c);for(let u=0,d=c;u<h;u++,d++)a[d]=l[u]}return this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)lt.fromBufferAttribute(e,t),lt.normalize(),e.setXYZ(t,lt.x,lt.y,lt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,_=0;for(let g=0,x=l.length;g<x;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*h;for(let p=0;p<h;p++)d[_++]=c[f++]}return new at(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $e,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}$e.prototype.isBufferGeometry=!0;const qo=new xe,En=new cn,ra=new Zn,Ai=new A,Ri=new A,Ci=new A,sa=new A,aa=new A,oa=new A,Yr=new A,jr=new A,Zr=new A,Jr=new ee,Kr=new ee,$r=new ee,la=new A,Qr=new A;class At extends ke{constructor(e=new $e,t=new Cs){super();this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;if(n===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),ra.copy(i.boundingSphere),ra.applyMatrix4(s),e.ray.intersectsSphere(ra)===!1)||(qo.copy(s).invert(),En.copy(e.ray).applyMatrix4(qo),i.boundingBox!==null&&En.intersectsBox(i.boundingBox)===!1))return;let a;if(i.isBufferGeometry){const o=i.index,l=i.attributes.position,c=i.morphAttributes.position,h=i.morphTargetsRelative,u=i.attributes.uv,d=i.attributes.uv2,f=i.groups,_=i.drawRange;if(o!==null)if(Array.isArray(n))for(let g=0,x=f.length;g<x;g++){const p=f[g],m=n[p.materialIndex],b=Math.max(p.start,_.start),v=Math.min(o.count,Math.min(p.start+p.count,_.start+_.count));for(let y=b,w=v;y<w;y+=3){const R=o.getX(y),P=o.getX(y+1),G=o.getX(y+2);a=es(this,m,e,En,l,c,h,u,d,R,P,G),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const g=Math.max(0,_.start),x=Math.min(o.count,_.start+_.count);for(let p=g,m=x;p<m;p+=3){const b=o.getX(p),v=o.getX(p+1),y=o.getX(p+2);a=es(this,n,e,En,l,c,h,u,d,b,v,y),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(n))for(let g=0,x=f.length;g<x;g++){const p=f[g],m=n[p.materialIndex],b=Math.max(p.start,_.start),v=Math.min(l.count,Math.min(p.start+p.count,_.start+_.count));for(let y=b,w=v;y<w;y+=3){const R=y,P=y+1,G=y+2;a=es(this,m,e,En,l,c,h,u,d,R,P,G),a&&(a.faceIndex=Math.floor(y/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const g=Math.max(0,_.start),x=Math.min(l.count,_.start+_.count);for(let p=g,m=x;p<m;p+=3){const b=p,v=p+1,y=p+2;a=es(this,n,e,En,l,c,h,u,d,b,v,y),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}else i.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}At.prototype.isMesh=!0;function cu(r,e,t,i,n,s,a,o){let l;if(e.side===1?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,e.side!==2,o),l===null)return null;Qr.copy(o),Qr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Qr);return c<t.near||c>t.far?null:{distance:c,point:Qr.clone(),object:r}}function es(r,e,t,i,n,s,a,o,l,c,h,u){Ai.fromBufferAttribute(n,c),Ri.fromBufferAttribute(n,h),Ci.fromBufferAttribute(n,u);const d=r.morphTargetInfluences;if(s&&d){Yr.set(0,0,0),jr.set(0,0,0),Zr.set(0,0,0);for(let _=0,g=s.length;_<g;_++){const x=d[_],p=s[_];x!==0&&(sa.fromBufferAttribute(p,c),aa.fromBufferAttribute(p,h),oa.fromBufferAttribute(p,u),a?(Yr.addScaledVector(sa,x),jr.addScaledVector(aa,x),Zr.addScaledVector(oa,x)):(Yr.addScaledVector(sa.sub(Ai),x),jr.addScaledVector(aa.sub(Ri),x),Zr.addScaledVector(oa.sub(Ci),x)))}Ai.add(Yr),Ri.add(jr),Ci.add(Zr)}r.isSkinnedMesh&&(r.boneTransform(c,Ai),r.boneTransform(h,Ri),r.boneTransform(u,Ci));const f=cu(r,e,t,i,Ai,Ri,Ci,la);if(f){o&&(Jr.fromBufferAttribute(o,c),Kr.fromBufferAttribute(o,h),$r.fromBufferAttribute(o,u),f.uv=st.getUV(la,Ai,Ri,Ci,Jr,Kr,$r,new ee)),l&&(Jr.fromBufferAttribute(l,c),Kr.fromBufferAttribute(l,h),$r.fromBufferAttribute(l,u),f.uv2=st.getUV(la,Ai,Ri,Ci,Jr,Kr,$r,new ee));const _={a:c,b:h,c:u,normal:new A,materialIndex:0};st.getNormal(Ai,Ri,Ci,_.normal),f.face=_}return f}class Dr extends $e{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super();this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};const o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,n,a,2),_("x","z","y",1,-1,e,i,-t,n,a,3),_("x","y","z",1,-1,e,t,i,n,s,4),_("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(u,2));function _(g,x,p,m,b,v,y,w,R,P,G){const U=v/R,M=y/P,C=v/2,D=y/2,I=w/2,z=R+1,N=P+1;let H=0,B=0;const q=new A;for(let K=0;K<N;K++){const J=K*M-D;for(let Q=0;Q<z;Q++){const he=Q*U-C;q[g]=he*m,q[x]=J*b,q[p]=I,c.push(q.x,q.y,q.z),q[g]=0,q[x]=0,q[p]=w>0?1:-1,h.push(q.x,q.y,q.z),u.push(Q/R),u.push(1-K/P),H+=1}}for(let K=0;K<P;K++)for(let J=0;J<R;J++){const Q=d+J+z*K,he=d+J+z*(K+1),Ce=d+(J+1)+z*(K+1),ve=d+(J+1)+z*K;l.push(Q,he,ve),l.push(he,Ce,ve),B+=6}o.addGroup(f,B,G),f+=B,d+=H}}static fromJSON(e){return new Dr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hn(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function xt(r){const e={};for(let t=0;t<r.length;t++){const i=Hn(r[t]);for(const n in i)e[n]=i[n]}return e}const hu={clone:Hn,merge:xt};var uu=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,du=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;class Kt extends ot{constructor(e){super();this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=uu,this.fragmentShader=du,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&(e.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(e))}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hn(e.uniforms),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}Kt.prototype.isShaderMaterial=!0;class $a extends ke{constructor(){super();this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}$a.prototype.isCamera=!0;class Et extends $a{constructor(e=50,t=1,i=.1,n=2e3){super();this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=La*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return La*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hs*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}Et.prototype.isPerspectiveCamera=!0;const Tn=90,wn=1;class Qa extends ke{constructor(e,t,i){super();if(this.type="CubeCamera",i.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=i;const n=new Et(Tn,wn,e,t);n.layers=this.layers,n.up.set(0,-1,0),n.lookAt(new A(1,0,0)),this.add(n);const s=new Et(Tn,wn,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new A(-1,0,0)),this.add(s);const a=new Et(Tn,wn,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(new A(0,1,0)),this.add(a);const o=new Et(Tn,wn,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new A(0,-1,0)),this.add(o);const l=new Et(Tn,wn,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new A(0,0,1)),this.add(l);const c=new Et(Tn,wn,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new A(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[n,s,a,o,l,c]=this.children,h=e.xr.enabled,u=e.getRenderTarget();e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,n),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Ls extends dt{constructor(e,t,i,n,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:301;super(e,t,i,n,s,a,o,l,c,h);this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}Ls.prototype.isCubeTexture=!0;class ac extends Bt{constructor(e,t={}){super(e,e,t);const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Ls(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:1006}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.format=1023,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Dr(5,5,5),s=new Kt({name:"CubemapFromEquirect",uniforms:Hn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;const a=new At(n,s),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=1006),new Qa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}}ac.prototype.isWebGLCubeRenderTarget=!0;const ca=new A,fu=new A,pu=new gt;class _i{constructor(e=new A(1,0,0),t=0){this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=ca.subVectors(i,t).cross(fu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(ca),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||pu.getNormalMatrix(e),n=this.coplanarPoint(ca).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}_i.prototype.isPlane=!0;const An=new Zn,ts=new A;class Ps{constructor(e=new _i,t=new _i,i=new _i,n=new _i,s=new _i,a=new _i){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,n=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],h=i[6],u=i[7],d=i[8],f=i[9],_=i[10],g=i[11],x=i[12],p=i[13],m=i[14],b=i[15];return t[0].setComponents(o-n,u-l,g-d,b-x).normalize(),t[1].setComponents(o+n,u+l,g+d,b+x).normalize(),t[2].setComponents(o+s,u+c,g+f,b+p).normalize(),t[3].setComponents(o-s,u-c,g-f,b-p).normalize(),t[4].setComponents(o-a,u-h,g-_,b-m).normalize(),t[5].setComponents(o+a,u+h,g+_,b+m).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),An.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(An)}intersectsSprite(e){return An.center.set(0,0,0),An.radius=.7071067811865476,An.applyMatrix4(e.matrixWorld),this.intersectsSphere(An)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(ts.x=n.normal.x>0?e.max.x:e.min.x,ts.y=n.normal.y>0?e.max.y:e.min.y,ts.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(ts)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function oc(){let r=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function mu(r,e){const t=e.isWebGL2,i=new WeakMap;function n(c,h){const u=c.array,d=c.usage,f=r.createBuffer();r.bindBuffer(h,f),r.bufferData(h,u,d),c.onUploadCallback();let _;if(u instanceof Float32Array)_=r.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=r.SHORT;else if(u instanceof Uint32Array)_=r.UNSIGNED_INT;else if(u instanceof Int32Array)_=r.INT;else if(u instanceof Int8Array)_=r.BYTE;else if(u instanceof Uint8Array)_=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const d=h.array,f=h.updateRange;r.bindBuffer(u,c),f.count===-1?r.bufferSubData(u,0,d):(t?r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(r.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u===void 0?i.set(c,n(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:a,remove:o,update:l}}class eo extends $e{constructor(e=1,t=1,i=1,n=1){super();this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=e/o,d=t/l,f=[],_=[],g=[],x=[];for(let p=0;p<h;p++){const m=p*d-a;for(let b=0;b<c;b++){const v=b*u-s;_.push(v,-m,0),g.push(0,0,1),x.push(b/o),x.push(1-p/l)}}for(let p=0;p<l;p++)for(let m=0;m<o;m++){const b=m+c*p,v=m+c*(p+1),y=m+1+c*(p+1),w=m+1+c*p;f.push(b,v,w),f.push(v,y,w)}this.setIndex(f),this.setAttribute("position",new ut(_,3)),this.setAttribute("normal",new ut(g,3)),this.setAttribute("uv",new ut(x,2))}static fromJSON(e){return new eo(e.width,e.height,e.widthSegments,e.heightSegments)}}var gu=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vUv ).g;

#endif
`,_u=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,xu=`
#ifdef USE_ALPHATEST

	if ( diffuseColor.a < alphaTest ) discard;

#endif
`,yu=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`,vu=`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;

	reflectedLight.indirectDiffuse *= ambientOcclusion;

	#if defined( USE_ENVMAP ) && defined( STANDARD )

		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );

		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );

	#endif

#endif
`,Mu=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`,Su=`
vec3 transformed = vec3( position );
`,bu=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`,Eu=`

vec3 BRDF_Lambert( const in vec3 diffuseColor ) {

	return RECIPROCAL_PI * diffuseColor;

} // validated

vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {

	float a2 = pow2( alpha );

	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

	return 0.5 / max( gv + gl, EPSILON );

}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney\u2019s reparameterization
float D_GGX( const in float alpha, const in float dotNH ) {

	float a2 = pow2( alpha );

	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / pow2( denom );

}

// GGX Distribution, Schlick Fresnel, GGX_SmithCorrelated Visibility
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {

	float alpha = pow2( roughness ); // UE4's roughness

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( f0, f90, dotVH );

	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

	float D = D_GGX( alpha, dotNH );

	return F * ( V * D );

}

// Rect Area Light

// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/

vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	float dotNV = saturate( dot( N, V ) );

	// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );

	uv = uv * LUT_SCALE + LUT_BIAS;

	return uv;

}

float LTC_ClippedSphereFormFactor( const in vec3 f ) {

	// Real-Time Area Lighting: a Journey from Research to Production (p.102)
	// An approximation of the form factor of a horizon-clipped rectangle.

	float l = length( f );

	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );

}

vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {

	float x = dot( v1, v2 );

	float y = abs( x );

	// rational polynomial approximation to theta / sin( theta ) / 2PI
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;

	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;

	return cross( v1, v2 ) * theta_sintheta;

}

vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {

	// bail if point is on back side of plane of light
	// assumes ccw winding order of light vertices
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );

	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );

	// construct orthonormal basis around N
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system

	// compute transform
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );

	// transform rect
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );

	// project rect onto sphere
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );

	// calculate vector form factor
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );

	// adjust for horizon clipping
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );

/*
	// alternate method of adjusting for horizon clipping (see referece)
	// refactoring required
	float len = length( vectorFormFactor );
	float z = vectorFormFactor.z / len;

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	// tabulated horizon-clipped sphere, apparently...
	vec2 uv = vec2( z * 0.5 + 0.5, len );
	uv = uv * LUT_SCALE + LUT_BIAS;

	float scale = texture2D( ltc_2, uv ).w;

	float result = len * scale;
*/

	return vec3( result );

}

// End Rect Area Light


float G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {

	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
	return 0.25;

}

float D_BlinnPhong( const in float shininess, const in float dotNH ) {

	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );

}

vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );

	vec3 F = F_Schlick( specularColor, 1.0, dotVH );

	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );

	float D = D_BlinnPhong( shininess, dotNH );

	return F * ( G * D );

} // validated

#if defined( USE_SHEEN )

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float D_Charlie( float roughness, float dotNH ) {

	float alpha = pow2( roughness );

	// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 ); // 2^(-14/2), so sin2h^2 > 0 in fp16

	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );

}

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float V_Neubelt( float dotNV, float dotNL ) {

	// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );

}

vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {

	vec3 halfDir = normalize( lightDir + viewDir );

	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );

	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );

	return sheenColor * ( D * V );

}

#endif
`,Tu=`
#ifdef USE_BUMPMAP

	uniform sampler2D bumpMap;
	uniform float bumpScale;

	// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen
	// https://mmikk.github.io/papers3d/mm_sfgrad_bump.pdf

	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)

	vec2 dHdxy_fwd() {

		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );

		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;

		return vec2( dBx, dBy );

	}

	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {

		// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988

		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;		// normalized

		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );

		float fDet = dot( vSigmaX, R1 ) * faceDirection;

		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );

	}

#endif
`,wu=`
#if NUM_CLIPPING_PLANES > 0

	vec4 plane;

	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {

		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;

	}
	#pragma unroll_loop_end

	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES

		bool clipped = true;

		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {

			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;

		}
		#pragma unroll_loop_end

		if ( clipped ) discard;

	#endif

#endif
`,Au=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`,Ru=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`,Cu=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`,Lu=`
#if defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#elif defined( USE_COLOR )

	diffuseColor.rgb *= vColor;

#endif
`,Pu=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR )

	varying vec3 vColor;

#endif
`,Du=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	varying vec3 vColor;

#endif
`,Fu=`
#if defined( USE_COLOR_ALPHA )

	vColor = vec4( 1.0 );

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	vColor = vec3( 1.0 );

#endif

#ifdef USE_COLOR

	vColor *= color;

#endif

#ifdef USE_INSTANCING_COLOR

	vColor.xyz *= instanceColor.xyz;

#endif
`,Iu=`
#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6

#ifndef saturate
// <tonemapping_pars_fragment> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )

float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }

// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.
// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand( const in vec2 uv ) {

	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );

	return fract( sin( sn ) * c );

}

#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif

struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};

struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};

struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};

vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

}

vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {

	// dir can be either a direction vector or a normal vector
	// upper-left 3x3 of matrix is assumed to be orthogonal

	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );

}

mat3 transposeMat3( const in mat3 m ) {

	mat3 tmp;

	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );

	return tmp;

}

// https://en.wikipedia.org/wiki/Relative_luminance
float linearToRelativeLuminance( const in vec3 color ) {

	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );

	return dot( weights, color.rgb );

}

bool isPerspectiveMatrix( mat4 m ) {

	return m[ 2 ][ 3 ] == - 1.0;

}

vec2 equirectUv( in vec3 dir ) {

	// dir is assumed to be unit length

	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;

	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

	return vec2( u, v );

}
`,Nu=`
#ifdef ENVMAP_TYPE_CUBE_UV

	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0

	// These shader functions convert between the UV coordinates of a single face of
	// a cubemap, the 0-5 integer index of a cube face, and the direction vector for
	// sampling a textureCube (not generally normalized ).

	float getFace( vec3 direction ) {

		vec3 absDirection = abs( direction );

		float face = - 1.0;

		if ( absDirection.x > absDirection.z ) {

			if ( absDirection.x > absDirection.y )

				face = direction.x > 0.0 ? 0.0 : 3.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		} else {

			if ( absDirection.z > absDirection.y )

				face = direction.z > 0.0 ? 2.0 : 5.0;

			else

				face = direction.y > 0.0 ? 1.0 : 4.0;

		}

		return face;

	}

	// RH coordinate system; PMREM face-indexing convention
	vec2 getUV( vec3 direction, float face ) {

		vec2 uv;

		if ( face == 0.0 ) {

			uv = vec2( direction.z, direction.y ) / abs( direction.x ); // pos x

		} else if ( face == 1.0 ) {

			uv = vec2( - direction.x, - direction.z ) / abs( direction.y ); // pos y

		} else if ( face == 2.0 ) {

			uv = vec2( - direction.x, direction.y ) / abs( direction.z ); // pos z

		} else if ( face == 3.0 ) {

			uv = vec2( - direction.z, direction.y ) / abs( direction.x ); // neg x

		} else if ( face == 4.0 ) {

			uv = vec2( - direction.x, direction.z ) / abs( direction.y ); // neg y

		} else {

			uv = vec2( direction.x, direction.y ) / abs( direction.z ); // neg z

		}

		return 0.5 * ( uv + 1.0 );

	}

	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {

		float face = getFace( direction );

		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );

		mipInt = max( mipInt, cubeUV_minMipLevel );

		float faceSize = exp2( mipInt );

		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;

		if ( face > 2.0 ) {

			uv.y += faceSize;

			face -= 3.0;

		}

		uv.x += face * faceSize;

		uv.x += filterInt * 3.0 * cubeUV_minTileSize;

		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );

		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;

		#ifdef texture2DGradEXT

			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb; // disable anisotropic filtering

		#else

			return texture2D( envMap, uv ).rgb;

		#endif

	}

	// These defines must match with PMREMGenerator

	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0

	float roughnessToMip( float roughness ) {

		float mip = 0.0;

		if ( roughness >= r1 ) {

			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;

		} else if ( roughness >= r4 ) {

			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;

		} else if ( roughness >= r5 ) {

			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;

		} else if ( roughness >= r6 ) {

			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;

		} else {

			mip = - 2.0 * log2( 1.16 * roughness ); // 1.16 = 1.79^0.25
		}

		return mip;

	}

	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {

		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );

		float mipF = fract( mip );

		float mipInt = floor( mip );

		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );

		if ( mipF == 0.0 ) {

			return vec4( color0, 1.0 );

		} else {

			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );

			return vec4( mix( color0, color1, mipF ), 1.0 );

		}

	}

#endif
`,Bu=`
vec3 transformedNormal = objectNormal;

#ifdef USE_INSTANCING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

	mat3 m = mat3( instanceMatrix );

	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );

	transformedNormal = m * transformedNormal;

#endif

transformedNormal = normalMatrix * transformedNormal;

#ifdef FLIP_SIDED

	transformedNormal = - transformedNormal;

#endif

#ifdef USE_TANGENT

	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#ifdef FLIP_SIDED

		transformedTangent = - transformedTangent;

	#endif

#endif
`,Uu=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`,Ou=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );

#endif
`,zu=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vUv );

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`,Gu=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`,Hu=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`,Vu=`

vec4 LinearToLinear( in vec4 value ) {
	return value;
}

vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`,ku=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vec3 cameraToFrag;

		if ( isOrthographic ) {

			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToFrag = normalize( vWorldPosition - cameraPosition );

		}

		// Transforming Normal Vectors with the Inverse Transformation
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vec3 reflectVec = reflect( cameraToFrag, worldNormal );

		#else

			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );

		#endif

	#else

		vec3 reflectVec = vReflect;

	#endif

	#ifdef ENVMAP_TYPE_CUBE

		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );

	#elif defined( ENVMAP_TYPE_CUBE_UV )

		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );

	#else

		vec4 envColor = vec4( 0.0 );

	#endif

	#ifdef ENVMAP_BLENDING_MULTIPLY

		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_MIX )

		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );

	#elif defined( ENVMAP_BLENDING_ADD )

		outgoingLight += envColor.xyz * specularStrength * reflectivity;

	#endif

#endif
`,Wu=`
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform float flipEnvMap;

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif
`,Xu=`
#ifdef USE_ENVMAP

	uniform float reflectivity;

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif

#endif
`,qu=`
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;

	#else

		varying vec3 vReflect;
		uniform float refractionRatio;

	#endif

#endif
`,Yu=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vWorldPosition = worldPosition.xyz;

	#else

		vec3 cameraToVertex;

		if ( isOrthographic ) {

			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );

		}

		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );

		#ifdef ENVMAP_MODE_REFLECTION

			vReflect = reflect( cameraToVertex, worldNormal );

		#else

			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );

		#endif

	#endif

#endif
`,ju=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`,Zu=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`,Ju=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`,Ku=`
#ifdef USE_FOG

	uniform vec3 fogColor;
	varying float vFogDepth;

	#ifdef FOG_EXP2

		uniform float fogDensity;

	#else

		uniform float fogNear;
		uniform float fogFar;

	#endif

#endif
`,$u=`

#ifdef USE_GRADIENTMAP

	uniform sampler2D gradientMap;

#endif

vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {

	// dotNL will be from -1.0 to 1.0
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );

	#ifdef USE_GRADIENTMAP

		return vec3( texture2D( gradientMap, coord ).r );

	#else

		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );

	#endif

}
`,Qu=`
#ifdef USE_LIGHTMAP

	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

	#ifndef PHYSICALLY_CORRECT_LIGHTS

		lightMapIrradiance *= PI;

	#endif

	reflectedLight.indirectDiffuse += lightMapIrradiance;

#endif
`,ed=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`,td=`
vec3 diffuse = vec3( 1.0 );

GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );

GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;

vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif

IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;

vIndirectFront += getAmbientLightIrradiance( ambientLightColor );

vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );

#ifdef DOUBLE_SIDED

	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );

	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );

#endif

#if NUM_POINT_LIGHTS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		getPointLightInfo( pointLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;

		#endif

	}
	#pragma unroll_loop_end

#endif

#if NUM_SPOT_LIGHTS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		getSpotLightInfo( spotLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;

		#endif
	}
	#pragma unroll_loop_end

#endif

#if NUM_DIR_LIGHTS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );

		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;

		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;

		#ifdef DOUBLE_SIDED

			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;

		#endif

	}
	#pragma unroll_loop_end

#endif

#if NUM_HEMI_LIGHTS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );

		#ifdef DOUBLE_SIDED

			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );

		#endif

	}
	#pragma unroll_loop_end

#endif
`,id=`
uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];

// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere
// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {

	// normal is assumed to have unit length

	float x = normal.x, y = normal.y, z = normal.z;

	// band 0
	vec3 result = shCoefficients[ 0 ] * 0.886227;

	// band 1
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;

	// band 2
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );

	return result;

}

vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {

	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );

	return irradiance;

}

vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {

	vec3 irradiance = ambientLightColor;

	return irradiance;

}

float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

	#if defined ( PHYSICALLY_CORRECT_LIGHTS )

		// based upon Frostbite 3 Moving to Physically-based Rendering
		// page 32, equation 26: E[window1]
		// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

		if ( cutoffDistance > 0.0 ) {

			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

		}

		return distanceFalloff;

	#else

		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {

			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );

		}

		return 1.0;

	#endif

}

float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {

	return smoothstep( coneCosine, penumbraCosine, angleCosine );

}

#if NUM_DIR_LIGHTS > 0

	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};

	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];

	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {

		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;

	}

#endif


#if NUM_POINT_LIGHTS > 0

	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};

	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {

		vec3 lVector = pointLight.position - geometry.position;

		light.direction = normalize( lVector );

		float lightDistance = length( lVector );

		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );

	}

#endif


#if NUM_SPOT_LIGHTS > 0

	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};

	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {

		vec3 lVector = spotLight.position - geometry.position;

		light.direction = normalize( lVector );

		float angleCos = dot( light.direction, spotLight.direction );

		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );

		if ( spotAttenuation > 0.0 ) {

			float lightDistance = length( lVector );

			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );

		} else {

			light.color = vec3( 0.0 );
			light.visible = false;

		}

	}

#endif


#if NUM_RECT_AREA_LIGHTS > 0

	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};

	// Pre-computed values of LinearTransformedCosine approximation of BRDF
	// BRDF approximation Texture is 64x64
	uniform sampler2D ltc_1; // RGBA Float
	uniform sampler2D ltc_2; // RGBA Float

	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];

#endif


#if NUM_HEMI_LIGHTS > 0

	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};

	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];

	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {

		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;

		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );

		return irradiance;

	}

#endif
`,nd=`
#if defined( USE_ENVMAP )

	#ifdef ENVMAP_MODE_REFRACTION

		uniform float refractionRatio;

	#endif

	vec3 getIBLIrradiance( const in vec3 normal ) {

		#if defined( ENVMAP_TYPE_CUBE_UV )

			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );

			return PI * envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {

		#if defined( ENVMAP_TYPE_CUBE_UV )

			vec3 reflectVec;

			#ifdef ENVMAP_MODE_REFLECTION

				reflectVec = reflect( - viewDir, normal );

				// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
				reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );

			#else

				reflectVec = refract( - viewDir, normal, refractionRatio );

			#endif

			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );

			return envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

#endif
`,rd=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`,sd=`
varying vec3 vViewPosition;

struct ToonMaterial {

	vec3 diffuseColor;

};

void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon

#define Material_LightProbeLOD( material )	(0)
`,ad=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`,od=`
varying vec3 vViewPosition;

struct BlinnPhongMaterial {

	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;

};

void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;

}

void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong

#define Material_LightProbeLOD( material )	(0)
`,ld=`
PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );

vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );

material.roughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );

#ifdef IOR

	#ifdef SPECULAR

		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;

		#ifdef USE_SPECULARINTENSITYMAP

			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;

		#endif

		#ifdef USE_SPECULARCOLORMAP

			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;

		#endif

		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );

	#else

		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;

	#endif

	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );

#else

	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;

#endif

#ifdef USE_CLEARCOAT

	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;

	#ifdef USE_CLEARCOATMAP

		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;

	#endif

	#ifdef USE_CLEARCOAT_ROUGHNESSMAP

		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;

	#endif

	material.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model
	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );

#endif

#ifdef USE_SHEEN

	material.sheenColor = sheenColor;

	#ifdef USE_SHEENCOLORMAP

		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;

	#endif

	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );

	#ifdef USE_SHEENROUGHNESSMAP

		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;

	#endif

#endif
`,cd=`
struct PhysicalMaterial {

	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;

	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif

	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif

};

// temporary
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );

// This is a curve-fit approxmation to the "Charlie sheen" BRDF integrated over the hemisphere from 
// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF". The analysis can be found
// in the Sheen section of https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {

	float dotNV = saturate( dot( normal, viewDir ) );

	float r2 = roughness * roughness;

	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;

	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;

	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );

	return saturate( DG * RECIPROCAL_PI );

}

// Analytical approximation of the DFG LUT, one half of the
// split-sum approximation used in indirect specular lighting.
// via 'environmentBRDF' from "Physically Based Shading on Mobile"
// https://www.unrealengine.com/blog/physically-based-shading-on-mobile
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );

	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );

	vec4 r = roughness * c0 + c1;

	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;

	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;

	return fab;

}

vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	return specularColor * fab.x + specularF90 * fab.y;

}

// Fdez-Ag\xFCera's "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"
// Approximates multiscattering in order to preserve energy.
// http://www.jcgt.org/published/0008/01/03/
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {

	vec2 fab = DFGApprox( normal, viewDir, roughness );

	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;

	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;

	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619; // 1/21
	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );

	singleScatter += FssEss;
	multiScatter += Fms * Ems;

}

#if NUM_RECT_AREA_LIGHTS > 0

	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;

		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction
		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;

		vec2 uv = LTC_Uv( normal, viewDir, roughness );

		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );

		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);

		// LTC Fresnel Approximation by Stephen Hill
		// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );

		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );

		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );

	}

#endif

void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );

	vec3 irradiance = dotNL * directLight.color;

	#ifdef USE_CLEARCOAT

		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );

		vec3 ccIrradiance = dotNLcc * directLight.color;

		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );

	#endif

	#ifdef USE_SHEEN

		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );

	#endif

	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );


	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}

void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {

	#ifdef USE_CLEARCOAT

		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );

	#endif

	#ifdef USE_SHEEN

		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );

	#endif

	// Both indirect specular and indirect diffuse light accumulate here

	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;

	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );

	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );

	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;

	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;

}

#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical

// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {

	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );

}
`,hd=`
/**
 * This is a template that can be used to light a material, it uses pluggable
 * RenderEquations (RE)for specific lighting scenarios.
 *
 * Instructions for use:
 * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined
 * - If you have defined an RE_IndirectSpecular, you need to also provide a Material_LightProbeLOD. <---- ???
 * - Create a material parameter that is to be passed as the third parameter to your lighting functions.
 *
 * TODO:
 * - Add area light support.
 * - Add sphere light support.
 * - Add diffuse light probe (irradiance cubemap) support.
 */

GeometricContext geometry;

geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

#ifdef USE_CLEARCOAT

	geometry.clearcoatNormal = clearcoatNormal;

#endif

IncidentLight directLight;

#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

		pointLight = pointLights[ i ];

		getPointLightInfo( pointLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

		spotLight = spotLights[ i ];

		getSpotLightInfo( spotLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

		directionalLight = directionalLights[ i ];

		getDirectionalLightInfo( directionalLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );

		}
		#pragma unroll_loop_end

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`,ud=`
#if defined( RE_IndirectDiffuse )

	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

		#ifndef PHYSICALLY_CORRECT_LIGHTS

			lightMapIrradiance *= PI;

		#endif

		irradiance += lightMapIrradiance;

	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )

		iblIrradiance += getIBLIrradiance( geometry.normal );

	#endif

#endif

#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )

	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );

	#ifdef USE_CLEARCOAT

		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );

	#endif

#endif
`,dd=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );

#endif
`,fd=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`,pd=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,md=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		varying float vFragDepth;
		varying float vIsPerspective;

	#else

		uniform float logDepthBufFC;

	#endif

#endif
`,gd=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

	#else

		if ( isPerspectiveMatrix( projectionMatrix ) ) {

			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;

			gl_Position.z *= gl_Position.w;

		}

	#endif

#endif
`,_d=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)

		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );

	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`,xd=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`,yd=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;

#endif

#ifdef USE_MAP

	diffuseColor *= texture2D( map, uv );

#endif

#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, uv ).g;

#endif
`,vd=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	uniform mat3 uvTransform;

#endif

#ifdef USE_MAP

	uniform sampler2D map;

#endif

#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,Md=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`,Sd=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`,bd=`
#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	vColor *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		#if defined( USE_COLOR_ALPHA )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];

		#elif defined( USE_COLOR )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ]

		#endif

	}

#endif
`,Ed=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	objectNormal *= morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];

		}

	#else

		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];

	#endif

#endif
`,Td=`
#ifdef USE_MORPHTARGETS

	uniform float morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform vec2 morphTargetsTextureSize;

		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {

			float texelIndex = float( vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset );
			float y = floor( texelIndex / morphTargetsTextureSize.x );
			float x = texelIndex - y * morphTargetsTextureSize.x;

			vec3 morphUV = vec3( ( x + 0.5 ) / morphTargetsTextureSize.x, y / morphTargetsTextureSize.y, morphTargetIndex );
			return texture( morphTargetsTexture, morphUV );

		}

	#else

		#ifndef USE_MORPHNORMALS

			uniform float morphTargetInfluences[ 8 ];

		#else

			uniform float morphTargetInfluences[ 4 ];

		#endif

	#endif

#endif
`,wd=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	transformed *= morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];

		}

	#else

		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];

		#ifndef USE_MORPHNORMALS

			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];

		#endif

	#endif

#endif
`,Ad=`
float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;

#ifdef FLAT_SHADED

	// Workaround for Adreno GPUs not able to do dFdx( vViewPosition )

	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );

#else

	vec3 normal = normalize( vNormal );

	#ifdef DOUBLE_SIDED

		normal = normal * faceDirection;

	#endif

	#ifdef USE_TANGENT

		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );

		#ifdef DOUBLE_SIDED

			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;

		#endif

		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )

			mat3 vTBN = mat3( tangent, bitangent, normal );

		#endif

	#endif

#endif

// non perturbed normal for clearcoat among others

vec3 geometryNormal = normal;

`,Rd=`

#ifdef OBJECTSPACE_NORMALMAP

	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

	#ifdef FLIP_SIDED

		normal = - normal;

	#endif

	#ifdef DOUBLE_SIDED

		normal = normal * faceDirection;

	#endif

	normal = normalize( normalMatrix * normal );

#elif defined( TANGENTSPACE_NORMALMAP )

	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;

	#ifdef USE_TANGENT

		normal = normalize( vTBN * mapN );

	#else

		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );

	#endif

#elif defined( USE_BUMPMAP )

	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );

#endif
`,Cd=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,Ld=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,Pd=`
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif
`,Dd=`
#ifdef USE_NORMALMAP

	uniform sampler2D normalMap;
	uniform vec2 normalScale;

#endif

#ifdef OBJECTSPACE_NORMALMAP

	uniform mat3 normalMatrix;

#endif

#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )

	// Normal Mapping Without Precomputed Tangents
	// http://www.thetenthplanet.de/archives/1180

	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {

		// Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988

		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );

		vec3 N = surf_norm; // normalized

		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );

		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;

		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );

		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );

	}

#endif
`,Fd=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = geometryNormal;

#endif
`,Id=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	#ifdef USE_TANGENT

		clearcoatNormal = normalize( vTBN * clearcoatMapN );

	#else

		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );

	#endif

#endif
`,Nd=`

#ifdef USE_CLEARCOATMAP

	uniform sampler2D clearcoatMap;

#endif

#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform sampler2D clearcoatRoughnessMap;

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;

#endif
`,Bd=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

// https://github.com/mrdoob/three.js/pull/22425
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`,Ud=`
vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}

vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}

const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)

const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );

const float ShiftRight8 = 1. / 256.;

vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8; // tidy overflow
	return r * PackUpscale;
}

float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}

vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}

vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}

// NOTE: viewZ/eyeZ is < 0 when in front of the camera per OpenGL conventions

float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}

// NOTE: https://twitter.com/gonnavis/status/1377183786949959682

float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}
`,Od=`
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`,zd=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`,Gd=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`,Hd=`
#ifdef DITHERING

	// based on https://www.shadertoy.com/view/MslGR8
	vec3 dithering( vec3 color ) {
		//Calculate grid position
		float grid_position = rand( gl_FragCoord.xy );

		//Shift the individual colors differently, thus making it even harder to see the dithering pattern
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );

		//modify shift acording to grid position.
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );

		//shift the color by dither_shift
		return color + dither_shift_RGB;
	}

#endif
`,Vd=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`,kd=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`,Wd=`
#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];

		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): create uniforms for area light shadows

	#endif
	*/

	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {

		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );

	}

	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {

		return unpackRGBATo2Half( texture2D( shadow, uv ) );

	}

	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){

		float occlusion = 1.0;

		vec2 distribution = texture2DDistribution( shadow, uv );

		float hard_shadow = step( compare , distribution.x ); // Hard Shadow

		if (hard_shadow != 1.0 ) {

			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality
			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed
			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );

		}
		return occlusion;

	}

	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

		float shadow = 1.0;

		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;

		// if ( something && something ) breaks ATI OpenGL shader compiler
		// if ( all( something, something ) ) using this instead

		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );

		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );

		bool frustumTest = all( frustumTestVec );

		if ( frustumTest ) {

		#if defined( SHADOWMAP_TYPE_PCF )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;

			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;

			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );

		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )

			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;

			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;

			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );

		#elif defined( SHADOWMAP_TYPE_VSM )

			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );

		#else // no percentage-closer filtering:

			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );

		#endif

		}

		return shadow;

	}

	// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D
	// vector suitable for 2D texture mapping. This code uses the following layout for the
	// 2D texture:
	//
	// xzXZ
	//  y Y
	//
	// Y - Positive y direction
	// y - Negative y direction
	// X - Positive x direction
	// x - Negative x direction
	// Z - Positive z direction
	// z - Negative z direction
	//
	// Source and test bed:
	// https://gist.github.com/tschw/da10c43c467ce8afd0c4

	vec2 cubeToUV( vec3 v, float texelSizeY ) {

		// Number of texels to avoid at the edge of each square

		vec3 absV = abs( v );

		// Intersect unit cube

		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;

		// Apply scale to avoid seams

		// two texels less per square (one texel will do for NEAREST)
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );

		// Unwrap

		// space: -1 ... 1 range for each square
		//
		// #X##		dim    := ( 4 , 2 )
		//  # #		center := ( 1 , 1 )

		vec2 planar = v.xy;

		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;

		if ( absV.z >= almostOne ) {

			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;

		} else if ( absV.x >= almostOne ) {

			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;

		} else if ( absV.y >= almostOne ) {

			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;

		}

		// Transform to UV space

		// scale := 0.5 / dim
		// translate := ( center + 0.5 ) / dim
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );

	}

	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;

		// dp = normalized distance from light to fragment position
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?
		dp += shadowBias;

		// bd3D = base direction 3D
		vec3 bd3D = normalize( lightToPosition );

		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )

			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;

			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );

		#else // no percentage-closer filtering

			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );

		#endif

	}

#endif
`,Xd=`
#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];

		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];

		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};

		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];

		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};

		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): uniforms for area light shadows

	#endif
	*/

#endif
`,qd=`
#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0

		// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;

	#endif

	#if NUM_DIR_LIGHT_SHADOWS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update vAreaShadowCoord with area light info

	#endif
	*/

#endif
`,Yd=`
float getShadowMask() {

	float shadow = 1.0;

	#ifdef USE_SHADOWMAP

	#if NUM_DIR_LIGHT_SHADOWS > 0

	DirectionalLightShadow directionalLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_SPOT_LIGHT_SHADOWS > 0

	SpotLightShadow spotLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {

		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	PointLightShadow pointLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;

	}
	#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update shadow for Area light

	#endif
	*/

	#endif

	return shadow;

}
`,jd=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`,Zd=`
#ifdef USE_SKINNING

	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;

	#ifdef BONE_TEXTURE

		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;

		mat4 getBoneMatrix( const in float i ) {

			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );

			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );

			y = dy * ( y + 0.5 );

			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );

			mat4 bone = mat4( v1, v2, v3, v4 );

			return bone;

		}

	#else

		uniform mat4 boneMatrices[ MAX_BONES ];

		mat4 getBoneMatrix( const in float i ) {

			mat4 bone = boneMatrices[ int(i) ];
			return bone;

		}

	#endif

#endif
`,Jd=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`,Kd=`
#ifdef USE_SKINNING

	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;

	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;

	#ifdef USE_TANGENT

		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#endif

#endif
`,$d=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`,Qd=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`,ef=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`,tf=`
#ifndef saturate
// <common> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif

uniform float toneMappingExposure;

// exposure only
vec3 LinearToneMapping( vec3 color ) {

	return toneMappingExposure * color;

}

// source: https://www.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf
vec3 ReinhardToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );

}

// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/
vec3 OptimizedCineonToneMapping( vec3 color ) {

	// optimized filmic operator by Jim Hejl and Richard Burgess-Dawson
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );

}

// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs
vec3 RRTAndODTFit( vec3 v ) {

	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;

}

// this implementation of ACES is modified to accommodate a brighter viewing environment.
// the scale factor of 1/0.6 is subjective. see discussion in #19621.

vec3 ACESFilmicToneMapping( vec3 color ) {

	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source
		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);

	// ODT_SAT => XYZ => D60_2_D65 => sRGB
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source
		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);

	color *= toneMappingExposure / 0.6;

	color = ACESInputMat * color;

	// Apply RRT and ODT
	color = RRTAndODTFit( color );

	color = ACESOutputMat * color;

	// Clamp to [0, 1]
	return saturate( color );

}

vec3 CustomToneMapping( vec3 color ) { return color; }
`,nf=`
#ifdef USE_TRANSMISSION

	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;

	#ifdef USE_TRANSMISSIONMAP

		transmissionFactor *= texture2D( transmissionMap, vUv ).r;

	#endif

	#ifdef USE_THICKNESSMAP

		thicknessFactor *= texture2D( thicknessMap, vUv ).g;

	#endif

	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );

	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );

	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif
`,rf=`
#ifdef USE_TRANSMISSION

	// Transmission code is based on glTF-Sampler-Viewer
	// https://github.com/KhronosGroup/glTF-Sample-Viewer

	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		uniform sampler2D transmissionMap;

	#endif

	#ifdef USE_THICKNESSMAP

		uniform sampler2D thicknessMap;

	#endif

	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;

	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;

	varying vec3 vWorldPosition;

	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {

		// Direction of refracted light.
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );

		// Compute rotation-independant scaling of the model matrix.
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );

		// The thickness is specified in local space.
		return normalize( refractionVector ) * thickness * modelScale;

	}

	float applyIorToRoughness( const in float roughness, const in float ior ) {

		// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
		// an IOR of 1.5 results in the default amount of microfacet refraction.
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );

	}

	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {

		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );

		#ifdef texture2DLodEXT

			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );

		#else

			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );

		#endif

	}

	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {

		if ( attenuationDistance == 0.0 ) {

			// Attenuation distance is +\u221E (which we indicate by zero), i.e. the transmitted color is not attenuated at all.
			return radiance;

		} else {

			// Compute light attenuation using Beer's law.
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
			return transmittance * radiance;

		}

	}

	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {

		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;

		// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;

		// Sample framebuffer to get pixel the refracted ray hits.
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );

		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );

		// Get the specular component.
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );

		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );

	}
#endif
`,sf=`
#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )

	varying vec2 vUv;

#endif
`,af=`
#ifdef USE_UV

	#ifdef UVS_VERTEX_ONLY

		vec2 vUv;

	#else

		varying vec2 vUv;

	#endif

	uniform mat3 uvTransform;

#endif
`,of=`
#ifdef USE_UV

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

#endif
`,lf=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	varying vec2 vUv2;

#endif
`,cf=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	attribute vec2 uv2;
	varying vec2 vUv2;

	uniform mat3 uv2Transform;

#endif
`,hf=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;

#endif
`,uf=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`;const df=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,ff=`
uniform sampler2D t2D;

varying vec2 vUv;

void main() {

	gl_FragColor = texture2D( t2D, vUv );

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,pf=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,mf=`
#include <envmap_common_pars_fragment>
uniform float opacity;

varying vec3 vWorldDirection;

#include <cube_uv_reflection_fragment>

void main() {

	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>

	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,gf=`
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

// This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible.
// Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for
// depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1.
varying vec2 vHighPrecisionZW;

void main() {

	#include <uv_vertex>

	#include <skinbase_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vHighPrecisionZW = gl_Position.zw;

}
`,_f=`
#if DEPTH_PACKING == 3200

	uniform float opacity;

#endif

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

varying vec2 vHighPrecisionZW;

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#if DEPTH_PACKING == 3200

		diffuseColor.a = opacity;

	#endif

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	#include <logdepthbuf_fragment>

	// Higher precision equivalent of gl_FragCoord.z. This assumes depthRange has been left to its default values.
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );

	#elif DEPTH_PACKING == 3201

		gl_FragColor = packDepthToRGBA( fragCoordZ );

	#endif

}
`,xf=`
#define DISTANCE

varying vec3 vWorldPosition;

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <skinbase_vertex>

	#ifdef USE_DISPLACEMENTMAP

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>

	vWorldPosition = worldPosition.xyz;

}
`,yf=`
#define DISTANCE

uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>

void main () {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = packDepthToRGBA( dist );

}
`,vf=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,Mf=`
uniform sampler2D tEquirect;

varying vec3 vWorldDirection;

#include <common>

void main() {

	vec3 direction = normalize( vWorldDirection );

	vec2 sampleUV = equirectUv( direction );

	gl_FragColor = texture2D( tEquirect, sampleUV );

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,Sf=`
uniform float scale;
attribute float lineDistance;

varying float vLineDistance;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	vLineDistance = scale * lineDistance;

	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,bf=`
uniform vec3 diffuse;
uniform float opacity;

uniform float dashSize;
uniform float totalSize;

varying float vLineDistance;

#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	if ( mod( vLineDistance, totalSize ) > dashSize ) {

		discard;

	}

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <color_fragment>

	outgoingLight = diffuseColor.rgb; // simple shader

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,Ef=`
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )

		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>

	#endif

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>

}
`,Tf=`
uniform vec3 diffuse;
uniform float opacity;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );

	// accumulation (baked indirect lighting only)
	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity;

	#else

		reflectedLight.indirectDiffuse += vec3( 1.0 );

	#endif

	// modulation
	#include <aomap_fragment>

	reflectedLight.indirectDiffuse *= diffuseColor.rgb;

	vec3 outgoingLight = reflectedLight.indirectDiffuse;

	#include <envmap_fragment>

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,wf=`
#define LAMBERT

varying vec3 vLightFront;
varying vec3 vIndirectFront;

#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}
`,Af=`
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

varying vec3 vLightFront;
varying vec3 vIndirectFront;

#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif


#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>

	// accumulation

	#ifdef DOUBLE_SIDED

		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;

	#else

		reflectedLight.indirectDiffuse += vIndirectFront;

	#endif

	#include <lightmap_fragment>

	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );

	#ifdef DOUBLE_SIDED

		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;

	#else

		reflectedLight.directDiffuse = vLightFront;

	#endif

	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();

	// modulation

	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <envmap_fragment>

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}
`,Rf=`
#define MATCAP

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>

#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

	vViewPosition = - mvPosition.xyz;

}
`,Cf=`
#define MATCAP

uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;

varying vec3 vViewPosition;

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks

	#ifdef USE_MATCAP

		vec4 matcapColor = texture2D( matcap, uv );

	#else

		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 ); // default if matcap is missing

	#endif

	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Lf=`
#define NORMAL

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	varying vec3 vViewPosition;

#endif

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	vViewPosition = - mvPosition.xyz;

#endif

}
`,Pf=`
#define NORMAL

uniform float opacity;

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	varying vec3 vViewPosition;

#endif

#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );

	#ifdef OPAQUE

		gl_FragColor.a = 1.0;

	#endif

}
`,Df=`
#define PHONG

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,Ff=`
#define PHONG

uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,If=`
#define STANDARD

varying vec3 vViewPosition;

#ifdef USE_TRANSMISSION

	varying vec3 vWorldPosition;

#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

#ifdef USE_TRANSMISSION

	vWorldPosition = worldPosition.xyz;

#endif
}
`,Nf=`
#define STANDARD

#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef IOR
	uniform float ior;
#endif

#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;

	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif

	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif

#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif

#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;

	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif

	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif

varying vec3 vViewPosition;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

	#include <transmission_fragment>

	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

	#ifdef USE_SHEEN

		// Sheen energy compensation approximation calculation can be found at the end of
		// https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );

		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;

	#endif

	#ifdef USE_CLEARCOAT

		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );

		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );

		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;

	#endif

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Bf=`
#define TOON

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>

	vViewPosition = - mvPosition.xyz;

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,Uf=`
#define TOON

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Of=`
uniform float size;
uniform float scale;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>

	gl_PointSize = size;

	#ifdef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );

	#endif

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>

}
`,zf=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,Gf=`
#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>

void main() {

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,Hf=`
uniform vec3 color;
uniform float opacity;

#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

void main() {

	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`,Vf=`
uniform float rotation;
uniform vec2 center;

#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );

	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

	#ifndef USE_SIZEATTENUATION

		bool isPerspective = isPerspectiveMatrix( projectionMatrix );

		if ( isPerspective ) scale *= - mvPosition.z;

	#endif

	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;

	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;

	mvPosition.xy += rotatedPosition;

	gl_Position = projectionMatrix * mvPosition;

	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,kf=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`,Fe={alphamap_fragment:gu,alphamap_pars_fragment:_u,alphatest_fragment:xu,alphatest_pars_fragment:yu,aomap_fragment:vu,aomap_pars_fragment:Mu,begin_vertex:Su,beginnormal_vertex:bu,bsdfs:Eu,bumpmap_pars_fragment:Tu,clipping_planes_fragment:wu,clipping_planes_pars_fragment:Au,clipping_planes_pars_vertex:Ru,clipping_planes_vertex:Cu,color_fragment:Lu,color_pars_fragment:Pu,color_pars_vertex:Du,color_vertex:Fu,common:Iu,cube_uv_reflection_fragment:Nu,defaultnormal_vertex:Bu,displacementmap_pars_vertex:Uu,displacementmap_vertex:Ou,emissivemap_fragment:zu,emissivemap_pars_fragment:Gu,encodings_fragment:Hu,encodings_pars_fragment:Vu,envmap_fragment:ku,envmap_common_pars_fragment:Wu,envmap_pars_fragment:Xu,envmap_pars_vertex:qu,envmap_physical_pars_fragment:nd,envmap_vertex:Yu,fog_vertex:ju,fog_pars_vertex:Zu,fog_fragment:Ju,fog_pars_fragment:Ku,gradientmap_pars_fragment:$u,lightmap_fragment:Qu,lightmap_pars_fragment:ed,lights_lambert_vertex:td,lights_pars_begin:id,lights_toon_fragment:rd,lights_toon_pars_fragment:sd,lights_phong_fragment:ad,lights_phong_pars_fragment:od,lights_physical_fragment:ld,lights_physical_pars_fragment:cd,lights_fragment_begin:hd,lights_fragment_maps:ud,lights_fragment_end:dd,logdepthbuf_fragment:fd,logdepthbuf_pars_fragment:pd,logdepthbuf_pars_vertex:md,logdepthbuf_vertex:gd,map_fragment:_d,map_pars_fragment:xd,map_particle_fragment:yd,map_particle_pars_fragment:vd,metalnessmap_fragment:Md,metalnessmap_pars_fragment:Sd,morphcolor_vertex:bd,morphnormal_vertex:Ed,morphtarget_pars_vertex:Td,morphtarget_vertex:wd,normal_fragment_begin:Ad,normal_fragment_maps:Rd,normal_pars_fragment:Cd,normal_pars_vertex:Ld,normal_vertex:Pd,normalmap_pars_fragment:Dd,clearcoat_normal_fragment_begin:Fd,clearcoat_normal_fragment_maps:Id,clearcoat_pars_fragment:Nd,output_fragment:Bd,packing:Ud,premultiplied_alpha_fragment:Od,project_vertex:zd,dithering_fragment:Gd,dithering_pars_fragment:Hd,roughnessmap_fragment:Vd,roughnessmap_pars_fragment:kd,shadowmap_pars_fragment:Wd,shadowmap_pars_vertex:Xd,shadowmap_vertex:qd,shadowmask_pars_fragment:Yd,skinbase_vertex:jd,skinning_pars_vertex:Zd,skinning_vertex:Jd,skinnormal_vertex:Kd,specularmap_fragment:$d,specularmap_pars_fragment:Qd,tonemapping_fragment:ef,tonemapping_pars_fragment:tf,transmission_fragment:nf,transmission_pars_fragment:rf,uv_pars_fragment:sf,uv_pars_vertex:af,uv_vertex:of,uv2_pars_fragment:lf,uv2_pars_vertex:cf,uv2_vertex:hf,worldpos_vertex:uf,background_vert:df,background_frag:ff,cube_vert:pf,cube_frag:mf,depth_vert:gf,depth_frag:_f,distanceRGBA_vert:xf,distanceRGBA_frag:yf,equirect_vert:vf,equirect_frag:Mf,linedashed_vert:Sf,linedashed_frag:bf,meshbasic_vert:Ef,meshbasic_frag:Tf,meshlambert_vert:wf,meshlambert_frag:Af,meshmatcap_vert:Rf,meshmatcap_frag:Cf,meshnormal_vert:Lf,meshnormal_frag:Pf,meshphong_vert:Df,meshphong_frag:Ff,meshphysical_vert:If,meshphysical_frag:Nf,meshtoon_vert:Bf,meshtoon_frag:Uf,points_vert:Of,points_frag:zf,shadow_vert:Gf,shadow_frag:Hf,sprite_vert:Vf,sprite_frag:kf},re={common:{diffuse:{value:new me(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new gt},uv2Transform:{value:new gt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new me(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new gt}}},ri={basic:{uniforms:xt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:xt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.fog,re.lights,{emissive:{value:new me(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:xt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new me(0)},specular:{value:new me(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:xt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:xt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new me(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:xt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:xt([re.points,re.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:xt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:xt([re.common,re.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:xt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:xt([re.sprite,re.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},cube:{uniforms:xt([re.envmap,{opacity:{value:1}}]),vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:xt([re.common,re.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:xt([re.lights,re.fog,{color:{value:new me(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};ri.physical={uniforms:xt([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ee(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new me(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new me(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new me(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};function Wf(r,e,t,i,n,s){const a=new me(0);let o=n===!0?0:1,l,c,h=null,u=0,d=null;function f(g,x){let p=!1,m=x.isScene===!0?x.background:null;m&&m.isTexture&&(m=e.get(m));const b=r.xr,v=b.getSession&&b.getSession();v&&v.environmentBlendMode==="additive"&&(m=null),m===null?_(a,o):m&&m.isColor&&(_(m,1),p=!0),(r.autoClear||p)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),m&&(m.isCubeTexture||m.mapping===306)?(c===void 0&&(c=new At(new Dr(1,1,1),new Kt({name:"BackgroundCubeMaterial",uniforms:Hn(ri.cube.uniforms),vertexShader:ri.cube.vertexShader,fragmentShader:ri.cube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=m,c.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,(h!==m||u!==m.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=m,u=m.version,d=r.toneMapping),g.unshift(c,c.geometry,c.material,0,0,null)):m&&m.isTexture&&(l===void 0&&(l=new At(new eo(2,2),new Kt({name:"BackgroundMaterial",uniforms:Hn(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=m,m.matrixAutoUpdate===!0&&m.updateMatrix(),l.material.uniforms.uvTransform.value.copy(m.matrix),(h!==m||u!==m.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,h=m,u=m.version,d=r.toneMapping),g.unshift(l,l.geometry,l.material,0,0,null))}function _(g,x){t.buffers.color.setClear(g.r,g.g,g.b,x,s)}return{getClearColor:function(){return a},setClearColor:function(g,x=1){a.set(g),o=x,_(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,_(a,o)},render:f}}function Xf(r,e,t,i){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=g(null);let c=l;function h(D,I,z,N,H){let B=!1;if(a){const q=_(N,z,I);c!==q&&(c=q,d(c.object)),B=x(N,H),B&&p(N,H)}else{const q=I.wireframe===!0;(c.geometry!==N.id||c.program!==z.id||c.wireframe!==q)&&(c.geometry=N.id,c.program=z.id,c.wireframe=q,B=!0)}D.isInstancedMesh===!0&&(B=!0),H!==null&&t.update(H,r.ELEMENT_ARRAY_BUFFER),B&&(R(D,I,z,N),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function u(){return i.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(D){return i.isWebGL2?r.bindVertexArray(D):s.bindVertexArrayOES(D)}function f(D){return i.isWebGL2?r.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function _(D,I,z){const N=z.wireframe===!0;let H=o[D.id];H===void 0&&(H={},o[D.id]=H);let B=H[I.id];B===void 0&&(B={},H[I.id]=B);let q=B[N];return q===void 0&&(q=g(u()),B[N]=q),q}function g(D){const I=[],z=[],N=[];for(let H=0;H<n;H++)I[H]=0,z[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:N,object:D,attributes:{},index:null}}function x(D,I){const z=c.attributes,N=D.attributes;let H=0;for(const B in N){const q=z[B],K=N[B];if(q===void 0||q.attribute!==K||q.data!==K.data)return!0;H++}return c.attributesNum!==H||c.index!==I}function p(D,I){const z={},N=D.attributes;let H=0;for(const B in N){const q=N[B],K={};K.attribute=q,q.data&&(K.data=q.data),z[B]=K,H++}c.attributes=z,c.attributesNum=H,c.index=I}function m(){const D=c.newAttributes;for(let I=0,z=D.length;I<z;I++)D[I]=0}function b(D){v(D,0)}function v(D,I){const z=c.newAttributes,N=c.enabledAttributes,H=c.attributeDivisors;z[D]=1,N[D]===0&&(r.enableVertexAttribArray(D),N[D]=1),H[D]!==I&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,I),H[D]=I)}function y(){const D=c.newAttributes,I=c.enabledAttributes;for(let z=0,N=I.length;z<N;z++)I[z]!==D[z]&&(r.disableVertexAttribArray(z),I[z]=0)}function w(D,I,z,N,H,B){i.isWebGL2===!0&&(z===r.INT||z===r.UNSIGNED_INT)?r.vertexAttribIPointer(D,I,z,H,B):r.vertexAttribPointer(D,I,z,N,H,B)}function R(D,I,z,N){if(i.isWebGL2===!1&&(D.isInstancedMesh||N.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const H=N.attributes,B=z.getAttributes(),q=I.defaultAttributeValues;for(const K in B){const J=B[K];if(J.location>=0){let Q=H[K];if(Q===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),Q!==void 0){const he=Q.normalized,Ce=Q.itemSize,ve=t.get(Q);if(ve===void 0)continue;const F=ve.buffer,ze=ve.type,Re=ve.bytesPerElement;if(Q.isInterleavedBufferAttribute){const de=Q.data,fe=de.stride,Ie=Q.offset;if(de.isInstancedInterleavedBuffer){for(let k=0;k<J.locationSize;k++)v(J.location+k,de.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let k=0;k<J.locationSize;k++)b(J.location+k);r.bindBuffer(r.ARRAY_BUFFER,F);for(let k=0;k<J.locationSize;k++)w(J.location+k,Ce/J.locationSize,ze,he,fe*Re,(Ie+Ce/J.locationSize*k)*Re)}else{if(Q.isInstancedBufferAttribute){for(let de=0;de<J.locationSize;de++)v(J.location+de,Q.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let de=0;de<J.locationSize;de++)b(J.location+de);r.bindBuffer(r.ARRAY_BUFFER,F);for(let de=0;de<J.locationSize;de++)w(J.location+de,Ce/J.locationSize,ze,he,Ce*Re,Ce/J.locationSize*de*Re)}}else if(q!==void 0){const he=q[K];if(he!==void 0)switch(he.length){case 2:r.vertexAttrib2fv(J.location,he);break;case 3:r.vertexAttrib3fv(J.location,he);break;case 4:r.vertexAttrib4fv(J.location,he);break;default:r.vertexAttrib1fv(J.location,he)}}}}y()}function P(){M();for(const D in o){const I=o[D];for(const z in I){const N=I[z];for(const H in N)f(N[H].object),delete N[H];delete I[z]}delete o[D]}}function G(D){if(o[D.id]===void 0)return;const I=o[D.id];for(const z in I){const N=I[z];for(const H in N)f(N[H].object),delete N[H];delete I[z]}delete o[D.id]}function U(D){for(const I in o){const z=o[I];if(z[D.id]===void 0)continue;const N=z[D.id];for(const H in N)f(N[H].object),delete N[H];delete z[D.id]}}function M(){C(),c!==l&&(c=l,d(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:M,resetDefaultState:C,dispose:P,releaseStatesOfGeometry:G,releaseStatesOfProgram:U,initAttributes:m,enableAttribute:b,disableUnusedAttributes:y}}function qf(r,e,t,i){const n=i.isWebGL2;let s;function a(c){s=c}function o(c,h){r.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,u){if(u===0)return;let d,f;if(n)d=r,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,c,h,u),t.update(h,s,u)}this.setMode=a,this.render=o,this.renderInstances=l}function Yf(r,e,t){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(R){if(R==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext!="undefined"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&r instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),p=r.getParameter(r.MAX_VARYING_VECTORS),m=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),b=d>0,v=a||e.has("OES_texture_float"),y=b&&v,w=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:x,maxVaryings:p,maxFragmentUniforms:m,vertexTextures:b,floatFragmentTextures:v,floatVertexTextures:y,maxSamples:w}}function jf(r){const e=this;let t=null,i=0,n=!1,s=!1;const a=new _i,o=new gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,f){const _=u.length!==0||d||i!==0||n;return n=d,t=h(u,f,0),i=u.length,_},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(u,d,f){const _=u.clippingPlanes,g=u.clipIntersection,x=u.clipShadows,p=r.get(u);if(!n||_===null||_.length===0||s&&!x)s?h(null):c();else{const m=s?0:i,b=m*4;let v=p.clippingState||null;l.value=v,v=h(_,d,b,f);for(let y=0;y!==b;++y)v[y]=t[y];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,_){const g=u!==null?u.length:0;let x=null;if(g!==0){if(x=l.value,_!==!0||x===null){const p=f+g*4,m=d.matrixWorldInverse;o.getNormalMatrix(m),(x===null||x.length<p)&&(x=new Float32Array(p));for(let b=0,v=f;b!==g;++b,v+=4)a.copy(u[b]).applyMatrix4(m,o),a.normal.toArray(x,v),x[v+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,x}}function Zf(r){let e=new WeakMap;function t(a,o){return o===303?a.mapping=301:o===304&&(a.mapping=302),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===303||o===304)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ac(l.height/2);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",n),t(c.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class to extends $a{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super();this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}to.prototype.isOrthographicCamera=!0;const In=4,Yo=[.125,.215,.35,.446,.526,.582],tn=20,ha=new to,jo=new me;let ua=null;const $i=(1+Math.sqrt(5))/2,Rn=1/$i,Zo=[new A(1,1,1),new A(-1,1,1),new A(1,1,-1),new A(-1,1,-1),new A(0,$i,Rn),new A(0,$i,-Rn),new A(Rn,0,$i),new A(-Rn,0,$i),new A($i,Rn,0),new A(-$i,Rn,0)];class Jo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){ua=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$o(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ua),e.scissorTest=!1,is(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ua=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize-32,i={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,encoding:3e3,depthBuffer:!1},n=Ko(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ko(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jf(s)),this._blurMaterial=Kf(s,e,t)}return n}_compileMaterial(e){const t=new At(this._lodPlanes[0],e);this._renderer.compile(t,ha)}_sceneToCubeUV(e,t,i,n){const o=new Et(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(jo),h.toneMapping=0,h.autoClear=!1;const f=new Cs({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),_=new At(new Dr,f);let g=!1;const x=e.background;x?x.isColor&&(f.color.copy(x),e.background=null,g=!0):(f.color.copy(jo),g=!0);for(let p=0;p<6;p++){const m=p%3;m===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):m===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const b=this._cubeSize;is(n,m*b,p>2?b:0,b,b),h.setRenderTarget(n),g&&h.render(_,o),h.render(e,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=x}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===301||e.mapping===302;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$o());const s=n?this._cubemapMaterial:this._equirectMaterial,a=new At(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;is(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ha)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),a=Zo[(n-1)%Zo.length];this._blur(e,n-1,n,s,a)}t.autoClear=i}_blur(e,t,i,n,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new At(this._lodPlanes[n],c),d=c.uniforms,f=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*tn-1),g=s/_,x=isFinite(s)?1+Math.floor(h*g):tn;x>tn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${tn}`);const p=[];let m=0;for(let R=0;R<tn;++R){const P=R/g,G=Math.exp(-P*P/2);p.push(G),R===0?m+=G:R<x&&(m+=2*G)}for(let R=0;R<p.length;R++)p[R]=p[R]/m;d.envMap.value=e.texture,d.samples.value=x,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:b}=this;d.dTheta.value=_,d.mipInt.value=b-i;const v=this._sizeLods[n],y=3*v*(n>b-In?n-b+In:0),w=4*(this._cubeSize-v);is(t,y,w,3*v,2*v),l.setRenderTarget(t),l.render(u,ha)}}function Jf(r){const e=[],t=[],i=[];let n=r;const s=r-In+1+Yo.length;for(let a=0;a<s;a++){const o=Math.pow(2,n);t.push(o);let l=1/o;a>r-In?l=Yo[a-r+In-1]:a===0&&(l=0),i.push(l);const c=1/(o-1),h=-c/2,u=1+c/2,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,g=3,x=2,p=1,m=new Float32Array(g*_*f),b=new Float32Array(x*_*f),v=new Float32Array(p*_*f);for(let w=0;w<f;w++){const R=w%3*2/3-1,P=w>2?0:-1,G=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];m.set(G,g*_*w),b.set(d,x*_*w);const U=[w,w,w,w,w,w];v.set(U,p*_*w)}const y=new $e;y.setAttribute("position",new at(m,g)),y.setAttribute("uv",new at(b,x)),y.setAttribute("faceIndex",new at(v,p)),e.push(y),n>In&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ko(r,e,t){const i=new Bt(r,e,t);return i.texture.mapping=306,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function is(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function Kf(r,e,t){const i=new Float32Array(tn),n=new A(0,1,0);return new Kt({name:"SphericalGaussianBlur",defines:{n:tn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function $o(){return new Kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Qo(){return new Kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:io(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function io(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $f(r){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===303||l===304,h=l===301||l===302;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Jo(r)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&n(u)){t===null&&(t=new Jo(r));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Qf(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function ep(r,e,t,i){const n={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete n[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const _ in d)e.update(d[_],r.ARRAY_BUFFER);const f=u.morphAttributes;for(const _ in f){const g=f[_];for(let x=0,p=g.length;x<p;x++)e.update(g[x],r.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,_=u.attributes.position;let g=0;if(f!==null){const m=f.array;g=f.version;for(let b=0,v=m.length;b<v;b+=3){const y=m[b+0],w=m[b+1],R=m[b+2];d.push(y,w,w,R,R,y)}}else{const m=_.array;g=_.version;for(let b=0,v=m.length/3-1;b<v;b+=3){const y=b+0,w=b+1,R=b+2;d.push(y,w,w,R,R,y)}}const x=new(tc(d)?sc:rc)(d,1);x.version=g;const p=s.get(u);p&&e.remove(p),s.set(u,x)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function tp(r,e,t,i){const n=i.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,f){r.drawElements(s,f,o,d*l),t.update(f,s,1)}function u(d,f,_){if(_===0)return;let g,x;if(n)g=r,x="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),x="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[x](s,f,o,d*l,_),t.update(f,s,_)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u}function ip(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function np(r,e){return r[0]-e[0]}function rp(r,e){return Math.abs(e[1])-Math.abs(r[1])}function da(r,e){let t=1;const i=e.isInterleavedBufferAttribute?e.data.array:e.array;i instanceof Int8Array?t=127:i instanceof Int16Array?t=32767:i instanceof Int32Array?t=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",i),r.divideScalar(t)}function sp(r,e,t){const i={},n=new Float32Array(8),s=new WeakMap,a=new We,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let x=s.get(h);if(x===void 0||x.count!==g){let z=function(){D.dispose(),s.delete(h),h.removeEventListener("dispose",z)};x!==void 0&&x.texture.dispose();const b=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],P=h.morphAttributes.color||[];let G=0;b===!0&&(G=1),v===!0&&(G=2),y===!0&&(G=3);let U=h.attributes.position.count*G,M=1;U>e.maxTextureSize&&(M=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const C=new Float32Array(U*M*4*g),D=new Rs(C,U,M,g);D.format=1023,D.type=1015,D.needsUpdate=!0;const I=G*4;for(let N=0;N<g;N++){const H=w[N],B=R[N],q=P[N],K=U*M*4*N;for(let J=0;J<H.count;J++){const Q=J*I;b===!0&&(a.fromBufferAttribute(H,J),H.normalized===!0&&da(a,H),C[K+Q+0]=a.x,C[K+Q+1]=a.y,C[K+Q+2]=a.z,C[K+Q+3]=0),v===!0&&(a.fromBufferAttribute(B,J),B.normalized===!0&&da(a,B),C[K+Q+4]=a.x,C[K+Q+5]=a.y,C[K+Q+6]=a.z,C[K+Q+7]=0),y===!0&&(a.fromBufferAttribute(q,J),q.normalized===!0&&da(a,B),C[K+Q+8]=a.x,C[K+Q+9]=a.y,C[K+Q+10]=a.z,C[K+Q+11]=q.itemSize===4?a.w:1)}}x={count:g,texture:D,size:new ee(U,M)},s.set(h,x),h.addEventListener("dispose",z)}let p=0;for(let b=0;b<f.length;b++)p+=f[b];const m=h.morphTargetsRelative?1:1-p;d.getUniforms().setValue(r,"morphTargetBaseInfluence",m),d.getUniforms().setValue(r,"morphTargetInfluences",f),d.getUniforms().setValue(r,"morphTargetsTexture",x.texture,t),d.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}else{const _=f===void 0?0:f.length;let g=i[h.id];if(g===void 0||g.length!==_){g=[];for(let v=0;v<_;v++)g[v]=[v,0];i[h.id]=g}for(let v=0;v<_;v++){const y=g[v];y[0]=v,y[1]=f[v]}g.sort(rp);for(let v=0;v<8;v++)v<_&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(np);const x=h.morphAttributes.position,p=h.morphAttributes.normal;let m=0;for(let v=0;v<8;v++){const y=o[v],w=y[0],R=y[1];w!==Number.MAX_SAFE_INTEGER&&R?(x&&h.getAttribute("morphTarget"+v)!==x[w]&&h.setAttribute("morphTarget"+v,x[w]),p&&h.getAttribute("morphNormal"+v)!==p[w]&&h.setAttribute("morphNormal"+v,p[w]),n[v]=R,m+=R):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),p&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),n[v]=0)}const b=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(r,"morphTargetBaseInfluence",b),d.getUniforms().setValue(r,"morphTargetInfluences",n)}}return{update:l}}function ap(r,e,t,i){let n=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);return n.get(u)!==c&&(e.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER)),u}function a(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const lc=new dt,cc=new Rs,hc=new Ja,uc=new Ls,el=[],tl=[],il=new Float32Array(16),nl=new Float32Array(9),rl=new Float32Array(4);function Jn(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let s=el[n];if(s===void 0&&(s=new Float32Array(n),el[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function bt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function Mt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Ds(r,e){let t=tl[e];t===void 0&&(t=new Int32Array(e),tl[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function op(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function lp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;r.uniform2fv(this.addr,e),Mt(t,e)}}function cp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;r.uniform3fv(this.addr,e),Mt(t,e)}}function hp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;r.uniform4fv(this.addr,e),Mt(t,e)}}function up(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(bt(t,i))return;rl.set(i),r.uniformMatrix2fv(this.addr,!1,rl),Mt(t,i)}}function dp(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(bt(t,i))return;nl.set(i),r.uniformMatrix3fv(this.addr,!1,nl),Mt(t,i)}}function fp(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(bt(t,i))return;il.set(i),r.uniformMatrix4fv(this.addr,!1,il),Mt(t,i)}}function pp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function mp(r,e){const t=this.cache;bt(t,e)||(r.uniform2iv(this.addr,e),Mt(t,e))}function gp(r,e){const t=this.cache;bt(t,e)||(r.uniform3iv(this.addr,e),Mt(t,e))}function _p(r,e){const t=this.cache;bt(t,e)||(r.uniform4iv(this.addr,e),Mt(t,e))}function xp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function yp(r,e){const t=this.cache;bt(t,e)||(r.uniform2uiv(this.addr,e),Mt(t,e))}function vp(r,e){const t=this.cache;bt(t,e)||(r.uniform3uiv(this.addr,e),Mt(t,e))}function Mp(r,e){const t=this.cache;bt(t,e)||(r.uniform4uiv(this.addr,e),Mt(t,e))}function Sp(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2D(e||lc,n)}function bp(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||hc,n)}function Ep(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||uc,n)}function Tp(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||cc,n)}function wp(r){switch(r){case 5126:return op;case 35664:return lp;case 35665:return cp;case 35666:return hp;case 35674:return up;case 35675:return dp;case 35676:return fp;case 5124:case 35670:return pp;case 35667:case 35671:return mp;case 35668:case 35672:return gp;case 35669:case 35673:return _p;case 5125:return xp;case 36294:return yp;case 36295:return vp;case 36296:return Mp;case 35678:case 36198:case 36298:case 36306:case 35682:return Sp;case 35679:case 36299:case 36307:return bp;case 35680:case 36300:case 36308:case 36293:return Ep;case 36289:case 36303:case 36311:case 36292:return Tp}}function Ap(r,e){r.uniform1fv(this.addr,e)}function Rp(r,e){const t=Jn(e,this.size,2);r.uniform2fv(this.addr,t)}function Cp(r,e){const t=Jn(e,this.size,3);r.uniform3fv(this.addr,t)}function Lp(r,e){const t=Jn(e,this.size,4);r.uniform4fv(this.addr,t)}function Pp(r,e){const t=Jn(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Dp(r,e){const t=Jn(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Fp(r,e){const t=Jn(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Ip(r,e){r.uniform1iv(this.addr,e)}function Np(r,e){r.uniform2iv(this.addr,e)}function Bp(r,e){r.uniform3iv(this.addr,e)}function Up(r,e){r.uniform4iv(this.addr,e)}function Op(r,e){r.uniform1uiv(this.addr,e)}function zp(r,e){r.uniform2uiv(this.addr,e)}function Gp(r,e){r.uniform3uiv(this.addr,e)}function Hp(r,e){r.uniform4uiv(this.addr,e)}function Vp(r,e,t){const i=e.length,n=Ds(t,i);r.uniform1iv(this.addr,n);for(let s=0;s!==i;++s)t.setTexture2D(e[s]||lc,n[s])}function kp(r,e,t){const i=e.length,n=Ds(t,i);r.uniform1iv(this.addr,n);for(let s=0;s!==i;++s)t.setTexture3D(e[s]||hc,n[s])}function Wp(r,e,t){const i=e.length,n=Ds(t,i);r.uniform1iv(this.addr,n);for(let s=0;s!==i;++s)t.setTextureCube(e[s]||uc,n[s])}function Xp(r,e,t){const i=e.length,n=Ds(t,i);r.uniform1iv(this.addr,n);for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||cc,n[s])}function qp(r){switch(r){case 5126:return Ap;case 35664:return Rp;case 35665:return Cp;case 35666:return Lp;case 35674:return Pp;case 35675:return Dp;case 35676:return Fp;case 5124:case 35670:return Ip;case 35667:case 35671:return Np;case 35668:case 35672:return Bp;case 35669:case 35673:return Up;case 5125:return Op;case 36294:return zp;case 36295:return Gp;case 36296:return Hp;case 35678:case 36198:case 36298:case 36306:case 35682:return Vp;case 35679:case 36299:case 36307:return kp;case 35680:case 36300:case 36308:case 36293:return Wp;case 36289:case 36303:case 36311:case 36292:return Xp}}function Yp(r,e,t){this.id=r,this.addr=t,this.cache=[],this.setValue=wp(e.type)}function dc(r,e,t){this.id=r,this.addr=t,this.cache=[],this.size=e.size,this.setValue=qp(e.type)}dc.prototype.updateCache=function(r){const e=this.cache;r instanceof Float32Array&&e.length!==r.length&&(this.cache=new Float32Array(r.length)),Mt(e,r)};function fc(r){this.id=r,this.seq=[],this.map={}}fc.prototype.setValue=function(r,e,t){const i=this.seq;for(let n=0,s=i.length;n!==s;++n){const a=i[n];a.setValue(r,e[a.id],t)}};const fa=/(\w+)(\])?(\[|\.)?/g;function sl(r,e){r.seq.push(e),r.map[e.id]=e}function jp(r,e,t){const i=r.name,n=i.length;for(fa.lastIndex=0;;){const s=fa.exec(i),a=fa.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){sl(t,c===void 0?new Yp(o,r,e):new dc(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new fc(o),sl(t,u)),t=u}}}function Ni(r,e){this.seq=[],this.map={};const t=r.getProgramParameter(e,r.ACTIVE_UNIFORMS);for(let i=0;i<t;++i){const n=r.getActiveUniform(e,i),s=r.getUniformLocation(e,n.name);jp(n,s,this)}}Ni.prototype.setValue=function(r,e,t,i){const n=this.map[e];n!==void 0&&n.setValue(r,t,i)};Ni.prototype.setOptional=function(r,e,t){const i=e[t];i!==void 0&&this.setValue(r,t,i)};Ni.upload=function(r,e,t,i){for(let n=0,s=e.length;n!==s;++n){const a=e[n],o=t[a.id];o.needsUpdate!==!1&&a.setValue(r,o.value,i)}};Ni.seqWithValue=function(r,e){const t=[];for(let i=0,n=r.length;i!==n;++i){const s=r[i];s.id in e&&t.push(s)}return t};function al(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}let Zp=0;function Jp(r){const e=r.split(`
`);for(let t=0;t<e.length;t++)e[t]=t+1+": "+e[t];return e.join(`
`)}function Kp(r){switch(r){case 3e3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function ol(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();return i&&n===""?"":t.toUpperCase()+`

`+n+`

`+Jp(r.getShaderSource(e))}function $p(r,e){const t=Kp(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Qp(r,e){let t;switch(e){case 1:t="Linear";break;case 2:t="Reinhard";break;case 3:t="OptimizedCineon";break;case 4:t="ACESFilmic";break;case 5:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function em(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(dr).join(`
`)}function tm(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function im(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(e,n),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function dr(r){return r!==""}function ll(r,e){return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Da(r){return r.replace(nm,rm)}function rm(r,e){const t=Fe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Da(t)}const sm=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,am=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hl(r){return r.replace(am,pc).replace(sm,om)}function om(r,e,t,i){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),pc(r,e,t,i)}function pc(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function ul(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lm(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===1?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===2?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===3&&(e="SHADOWMAP_TYPE_VSM"),e}function cm(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case 301:case 302:e="ENVMAP_TYPE_CUBE";break;case 306:case 307:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hm(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case 302:case 307:e="ENVMAP_MODE_REFRACTION";break}return e}function um(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case 0:e="ENVMAP_BLENDING_MULTIPLY";break;case 1:e="ENVMAP_BLENDING_MIX";break;case 2:e="ENVMAP_BLENDING_ADD";break}return e}function dm(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e/32+1)+3,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function fm(r,e,t,i){const n=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=lm(t),c=cm(t),h=hm(t),u=um(t),d=dm(t),f=t.isWebGL2?"":em(t),_=tm(s),g=n.createProgram();let x,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=[_].filter(dr).join(`
`),x.length>0&&(x+=`
`),p=[f,_].filter(dr).join(`
`),p.length>0&&(p+=`
`)):(x=[ul(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define MAX_BONES "+t.maxBones,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.useVertexTexture?"#define BONE_TEXTURE":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),p=[f,ul(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==0?"#define TONE_MAPPING":"",t.toneMapping!==0?Fe.tonemapping_pars_fragment:"",t.toneMapping!==0?Qp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.encodings_pars_fragment,$p("linearToOutputTexel",t.outputEncoding),t.depthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),a=Da(a),a=ll(a,t),a=cl(a,t),o=Da(o),o=ll(o,t),o=cl(o,t),a=hl(a),o=hl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===Io?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Io?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=m+x+a,v=m+p+o,y=al(n,n.VERTEX_SHADER,b),w=al(n,n.FRAGMENT_SHADER,v);if(n.attachShader(g,y),n.attachShader(g,w),t.index0AttributeName!==void 0?n.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g),r.debug.checkShaderErrors){const G=n.getProgramInfoLog(g).trim(),U=n.getShaderInfoLog(y).trim(),M=n.getShaderInfoLog(w).trim();let C=!0,D=!0;if(n.getProgramParameter(g,n.LINK_STATUS)===!1){C=!1;const I=ol(n,y,"vertex"),z=ol(n,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,n.VALIDATE_STATUS)+`

Program Info Log: `+G+`
`+I+`
`+z)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(U===""||M==="")&&(D=!1);D&&(this.diagnostics={runnable:C,programLog:G,vertexShader:{log:U,prefix:x},fragmentShader:{log:M,prefix:p}})}n.deleteShader(y),n.deleteShader(w);let R;this.getUniforms=function(){return R===void 0&&(R=new Ni(n,g)),R};let P;return this.getAttributes=function(){return P===void 0&&(P=im(n,g)),P},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=Zp++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=w,this}let pm=0;class mm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;return t.has(e)===!1&&t.set(e,new Set),t.get(e)}_getShaderStage(e){const t=this.shaderCache;if(t.has(e)===!1){const i=new gm;t.set(e,i)}return t.get(e)}}class gm{constructor(){this.id=pm++,this.usedTimes=0}}function _m(r,e,t,i,n,s,a){const o=new Ka,l=new mm,c=[],h=n.isWebGL2,u=n.logarithmicDepthBuffer,d=n.floatVertexTextures,f=n.maxVertexUniforms,_=n.vertexTextures;let g=n.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(M){const D=M.skeleton.bones;if(d)return 1024;{const z=Math.floor((f-20)/4),N=Math.min(z,D.length);return N<D.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+D.length+" bones. This GPU supports "+N+"."),0):N}}function m(M,C,D,I,z){const N=I.fog,H=z.geometry,B=M.isMeshStandardMaterial?I.environment:null,q=(M.isMeshStandardMaterial?t:e).get(M.envMap||B),K=!!q&&(q.mapping===306||q.mapping===307)?q.image.height:null,J=x[M.type],Q=z.isSkinnedMesh?p(z):0;M.precision!==null&&(g=n.getMaxPrecision(M.precision),g!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));const he=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ce=he!==void 0?he.length:0;let ve=0;H.morphAttributes.position!==void 0&&(ve=1),H.morphAttributes.normal!==void 0&&(ve=2),H.morphAttributes.color!==void 0&&(ve=3);let F,ze,Re,de;if(J){const ie=ri[J];F=ie.vertexShader,ze=ie.fragmentShader}else F=M.vertexShader,ze=M.fragmentShader,l.update(M),Re=l.getVertexShaderID(M),de=l.getFragmentShaderID(M);const fe=r.getRenderTarget(),Ie=M.alphaTest>0,k=M.clearcoat>0;return{isWebGL2:h,shaderID:J,shaderName:M.type,vertexShader:F,fragmentShader:ze,defines:M.defines,customVertexShaderID:Re,customFragmentShaderID:de,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,instancing:z.isInstancedMesh===!0,instancingColor:z.isInstancedMesh===!0&&z.instanceColor!==null,supportsVertexTextures:_,outputEncoding:fe===null?r.outputEncoding:fe.isXRRenderTarget===!0?fe.texture.encoding:3e3,map:!!M.map,matcap:!!M.matcap,envMap:!!q,envMapMode:q&&q.mapping,envMapCubeUVHeight:K,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===1,tangentSpaceNormalMap:M.normalMapType===0,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===3001,clearcoat:k,clearcoatMap:k&&!!M.clearcoatMap,clearcoatRoughnessMap:k&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:k&&!!M.clearcoatNormalMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===1,alphaMap:!!M.alphaMap,alphaTest:Ie,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!H.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatNormalMap||M.transmission>0||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||M.sheen>0||!!M.sheenColorMap||!!M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!N,useFog:M.fog,fogExp2:N&&N.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:u,skinning:z.isSkinnedMesh===!0&&Q>0,maxBones:Q,useVertexTexture:d,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:ve,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:M.toneMapped?r.toneMapping:0,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===2,flipSided:M.side===1,depthPacking:M.depthPacking!==void 0?M.depthPacking:!1,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function b(M){const C=[];if(M.shaderID?C.push(M.shaderID):(C.push(M.customVertexShaderID),C.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)C.push(D),C.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(v(C,M),y(C,M),C.push(r.outputEncoding)),C.push(M.customProgramCacheKey),C.join()}function v(M,C){M.push(C.precision),M.push(C.outputEncoding),M.push(C.envMapMode),M.push(C.envMapCubeUVHeight),M.push(C.combine),M.push(C.vertexUvs),M.push(C.fogExp2),M.push(C.sizeAttenuation),M.push(C.maxBones),M.push(C.morphTargetsCount),M.push(C.morphAttributeCount),M.push(C.numDirLights),M.push(C.numPointLights),M.push(C.numSpotLights),M.push(C.numHemiLights),M.push(C.numRectAreaLights),M.push(C.numDirLightShadows),M.push(C.numPointLightShadows),M.push(C.numSpotLightShadows),M.push(C.shadowMapType),M.push(C.toneMapping),M.push(C.numClippingPlanes),M.push(C.numClipIntersection)}function y(M,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.map&&o.enable(4),C.matcap&&o.enable(5),C.envMap&&o.enable(6),C.lightMap&&o.enable(7),C.aoMap&&o.enable(8),C.emissiveMap&&o.enable(9),C.bumpMap&&o.enable(10),C.normalMap&&o.enable(11),C.objectSpaceNormalMap&&o.enable(12),C.tangentSpaceNormalMap&&o.enable(13),C.clearcoat&&o.enable(14),C.clearcoatMap&&o.enable(15),C.clearcoatRoughnessMap&&o.enable(16),C.clearcoatNormalMap&&o.enable(17),C.displacementMap&&o.enable(18),C.specularMap&&o.enable(19),C.roughnessMap&&o.enable(20),C.metalnessMap&&o.enable(21),C.gradientMap&&o.enable(22),C.alphaMap&&o.enable(23),C.alphaTest&&o.enable(24),C.vertexColors&&o.enable(25),C.vertexAlphas&&o.enable(26),C.vertexUvs&&o.enable(27),C.vertexTangents&&o.enable(28),C.uvsVertexOnly&&o.enable(29),C.fog&&o.enable(30),M.push(o.mask),o.disableAll(),C.useFog&&o.enable(0),C.flatShading&&o.enable(1),C.logarithmicDepthBuffer&&o.enable(2),C.skinning&&o.enable(3),C.useVertexTexture&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.physicallyCorrectLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.depthPacking&&o.enable(13),C.dithering&&o.enable(14),C.specularIntensityMap&&o.enable(15),C.specularColorMap&&o.enable(16),C.transmission&&o.enable(17),C.transmissionMap&&o.enable(18),C.thicknessMap&&o.enable(19),C.sheen&&o.enable(20),C.sheenColorMap&&o.enable(21),C.sheenRoughnessMap&&o.enable(22),C.decodeVideoTexture&&o.enable(23),C.opaque&&o.enable(24),M.push(o.mask)}function w(M){const C=x[M.type];let D;if(C){const I=ri[C];D=hu.clone(I.uniforms)}else D=M.uniforms;return D}function R(M,C){let D;for(let I=0,z=c.length;I<z;I++){const N=c[I];if(N.cacheKey===C){D=N,++D.usedTimes;break}}return D===void 0&&(D=new fm(r,C,M,s),c.push(D)),D}function P(M){if(--M.usedTimes===0){const C=c.indexOf(M);c[C]=c[c.length-1],c.pop(),M.destroy()}}function G(M){l.remove(M)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:b,getUniforms:w,acquireProgram:R,releaseProgram:P,releaseShaderCache:G,programs:c,dispose:U}}function xm(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function i(s,a,o){r.get(s)[a]=o}function n(){r=new WeakMap}return{get:e,remove:t,update:i,dispose:n}}function ym(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function dl(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function fl(){const r=[];let e=0;const t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function a(u,d,f,_,g,x){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:g,group:x},r[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=x),e++,p}function o(u,d,f,_,g,x){const p=a(u,d,f,_,g,x);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):t.push(p)}function l(u,d,f,_,g,x){const p=a(u,d,f,_,g,x);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||ym),i.length>1&&i.sort(d||dl),n.length>1&&n.sort(d||dl)}function h(){for(let u=e,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:o,unshift:l,finish:h,sort:c}}function vm(){let r=new WeakMap;function e(i,n){let s;return r.has(i)===!1?(s=new fl,r.set(i,[s])):n>=r.get(i).length?(s=new fl,r.get(i).push(s)):s=r.get(i)[n],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function Mm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new me};break;case"SpotLight":t={position:new A,direction:new A,color:new me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new me,groundColor:new me};break;case"RectAreaLight":t={color:new me,position:new A,halfWidth:new A,halfHeight:new A};break}return r[e.id]=t,t}}}function Sm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let bm=0;function Em(r,e){return(e.castShadow?1:0)-(r.castShadow?1:0)}function Tm(r,e){const t=new Mm,i=Sm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)n.probe.push(new A);const s=new A,a=new xe,o=new xe;function l(h,u){let d=0,f=0,_=0;for(let G=0;G<9;G++)n.probe[G].set(0,0,0);let g=0,x=0,p=0,m=0,b=0,v=0,y=0,w=0;h.sort(Em);const R=u!==!0?Math.PI:1;for(let G=0,U=h.length;G<U;G++){const M=h[G],C=M.color,D=M.intensity,I=M.distance,z=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)d+=C.r*D*R,f+=C.g*D*R,_+=C.b*D*R;else if(M.isLightProbe)for(let N=0;N<9;N++)n.probe[N].addScaledVector(M.sh.coefficients[N],D);else if(M.isDirectionalLight){const N=t.get(M);if(N.color.copy(M.color).multiplyScalar(M.intensity*R),M.castShadow){const H=M.shadow,B=i.get(M);B.shadowBias=H.bias,B.shadowNormalBias=H.normalBias,B.shadowRadius=H.radius,B.shadowMapSize=H.mapSize,n.directionalShadow[g]=B,n.directionalShadowMap[g]=z,n.directionalShadowMatrix[g]=M.shadow.matrix,v++}n.directional[g]=N,g++}else if(M.isSpotLight){const N=t.get(M);if(N.position.setFromMatrixPosition(M.matrixWorld),N.color.copy(C).multiplyScalar(D*R),N.distance=I,N.coneCos=Math.cos(M.angle),N.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),N.decay=M.decay,M.castShadow){const H=M.shadow,B=i.get(M);B.shadowBias=H.bias,B.shadowNormalBias=H.normalBias,B.shadowRadius=H.radius,B.shadowMapSize=H.mapSize,n.spotShadow[p]=B,n.spotShadowMap[p]=z,n.spotShadowMatrix[p]=M.shadow.matrix,w++}n.spot[p]=N,p++}else if(M.isRectAreaLight){const N=t.get(M);N.color.copy(C).multiplyScalar(D),N.halfWidth.set(M.width*.5,0,0),N.halfHeight.set(0,M.height*.5,0),n.rectArea[m]=N,m++}else if(M.isPointLight){const N=t.get(M);if(N.color.copy(M.color).multiplyScalar(M.intensity*R),N.distance=M.distance,N.decay=M.decay,M.castShadow){const H=M.shadow,B=i.get(M);B.shadowBias=H.bias,B.shadowNormalBias=H.normalBias,B.shadowRadius=H.radius,B.shadowMapSize=H.mapSize,B.shadowCameraNear=H.camera.near,B.shadowCameraFar=H.camera.far,n.pointShadow[x]=B,n.pointShadowMap[x]=z,n.pointShadowMatrix[x]=M.shadow.matrix,y++}n.point[x]=N,x++}else if(M.isHemisphereLight){const N=t.get(M);N.skyColor.copy(M.color).multiplyScalar(D*R),N.groundColor.copy(M.groundColor).multiplyScalar(D*R),n.hemi[b]=N,b++}}m>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=_;const P=n.hash;(P.directionalLength!==g||P.pointLength!==x||P.spotLength!==p||P.rectAreaLength!==m||P.hemiLength!==b||P.numDirectionalShadows!==v||P.numPointShadows!==y||P.numSpotShadows!==w)&&(n.directional.length=g,n.spot.length=p,n.rectArea.length=m,n.point.length=x,n.hemi.length=b,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotShadowMatrix.length=w,P.directionalLength=g,P.pointLength=x,P.spotLength=p,P.rectAreaLength=m,P.hemiLength=b,P.numDirectionalShadows=v,P.numPointShadows=y,P.numSpotShadows=w,n.version=bm++)}function c(h,u){let d=0,f=0,_=0,g=0,x=0;const p=u.matrixWorldInverse;for(let m=0,b=h.length;m<b;m++){const v=h[m];if(v.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),d++}else if(v.isSpotLight){const y=n.spot[_];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),_++}else if(v.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),o.identity(),a.copy(v.matrixWorld),a.premultiply(p),o.extractRotation(a),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){const y=n.hemi[x];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(p),y.direction.normalize(),x++}}}return{setup:l,setupView:c,state:n}}function pl(r,e){const t=new Tm(r,e),i=[],n=[];function s(){i.length=0,n.length=0}function a(u){i.push(u)}function o(u){n.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function wm(r,e){let t=new WeakMap;function i(s,a=0){let o;return t.has(s)===!1?(o=new pl(r,e),t.set(s,[o])):a>=t.get(s).length?(o=new pl(r,e),t.get(s).push(o)):o=t.get(s)[a],o}function n(){t=new WeakMap}return{get:i,dispose:n}}class no extends ot{constructor(e){super();this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}no.prototype.isMeshDepthMaterial=!0;class ro extends ot{constructor(e){super();this.type="MeshDistanceMaterial",this.referencePosition=new A,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}ro.prototype.isMeshDistanceMaterial=!0;const Am=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,Rm=`
uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;

#include <packing>

void main() {

	const float samples = float( VSM_SAMPLES );

	float mean = 0.0;
	float squared_mean = 0.0;

	// This seems totally useless but it's a crazy work around for a Adreno compiler bug
	// float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy ) / resolution ) );

	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {

		float uvOffset = uvStart + i * uvStride;

		#ifdef HORIZONTAL_PASS

			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;

		#else

			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;

		#endif

	}

	mean = mean / samples;
	squared_mean = squared_mean / samples;

	float std_dev = sqrt( squared_mean - mean * mean );

	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );

}
`;function mc(r,e,t){let i=new Ps;const n=new ee,s=new ee,a=new We,o=new no({depthPacking:3201}),l=new ro,c={},h=t.maxTextureSize,u={0:1,1:0,2:2},d=new Kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:Am,fragmentShader:Rm}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new $e;_.setAttribute("position",new at(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new At(_,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1,this.render=function(v,y,w){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||v.length===0)return;const R=r.getRenderTarget(),P=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),U=r.state;U.setBlending(0),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);for(let M=0,C=v.length;M<C;M++){const D=v[M],I=D.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;n.copy(I.mapSize);const z=I.getFrameExtents();if(n.multiply(z),s.copy(I.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/z.x),n.x=s.x*z.x,I.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/z.y),n.y=s.y*z.y,I.mapSize.y=s.y)),I.map===null&&!I.isPointLightShadow&&this.type===3){const H={minFilter:1006,magFilter:1006,format:1023};I.map=new Bt(n.x,n.y,H),I.map.texture.name=D.name+".shadowMap",I.mapPass=new Bt(n.x,n.y,H),I.camera.updateProjectionMatrix()}if(I.map===null){const H={minFilter:1003,magFilter:1003,format:1023};I.map=new Bt(n.x,n.y,H),I.map.texture.name=D.name+".shadowMap",I.camera.updateProjectionMatrix()}r.setRenderTarget(I.map),r.clear();const N=I.getViewportCount();for(let H=0;H<N;H++){const B=I.getViewport(H);a.set(s.x*B.x,s.y*B.y,s.x*B.z,s.y*B.w),U.viewport(a),I.updateMatrices(D,H),i=I.getFrustum(),b(y,w,I.camera,D,this.type)}!I.isPointLightShadow&&this.type===3&&p(I,w),I.needsUpdate=!1}x.needsUpdate=!1,r.setRenderTarget(R,P,G)};function p(v,y){const w=e.update(g);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,f.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),d.uniforms.shadow_pass.value=v.map.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,r.setRenderTarget(v.mapPass),r.clear(),r.renderBufferDirect(y,null,w,d,g,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,r.setRenderTarget(v.map),r.clear(),r.renderBufferDirect(y,null,w,f,g,null)}function m(v,y,w,R,P,G){let U=null;const M=w.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(M!==void 0?U=M:U=w.isPointLight===!0?l:o,r.localClippingEnabled&&y.clipShadows===!0&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0){const C=U.uuid,D=y.uuid;let I=c[C];I===void 0&&(I={},c[C]=I);let z=I[D];z===void 0&&(z=U.clone(),I[D]=z),U=z}return U.visible=y.visible,U.wireframe=y.wireframe,G===3?U.side=y.shadowSide!==null?y.shadowSide:y.side:U.side=y.shadowSide!==null?y.shadowSide:u[y.side],U.alphaMap=y.alphaMap,U.alphaTest=y.alphaTest,U.clipShadows=y.clipShadows,U.clippingPlanes=y.clippingPlanes,U.clipIntersection=y.clipIntersection,U.displacementMap=y.displacementMap,U.displacementScale=y.displacementScale,U.displacementBias=y.displacementBias,U.wireframeLinewidth=y.wireframeLinewidth,U.linewidth=y.linewidth,w.isPointLight===!0&&U.isMeshDistanceMaterial===!0&&(U.referencePosition.setFromMatrixPosition(w.matrixWorld),U.nearDistance=R,U.farDistance=P),U}function b(v,y,w,R,P){if(v.visible===!1)return;if(v.layers.test(y.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&P===3)&&(!v.frustumCulled||i.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,v.matrixWorld);const M=e.update(v),C=v.material;if(Array.isArray(C)){const D=M.groups;for(let I=0,z=D.length;I<z;I++){const N=D[I],H=C[N.materialIndex];if(H&&H.visible){const B=m(v,H,R,w.near,w.far,P);r.renderBufferDirect(w,null,M,B,v,N)}}}else if(C.visible){const D=m(v,C,R,w.near,w.far,P);r.renderBufferDirect(w,null,M,D,v,null)}}const U=v.children;for(let M=0,C=U.length;M<C;M++)b(U[M],y,w,R,P)}}function Cm(r,e,t){const i=t.isWebGL2;function n(){let L=!1;const ce=new We;let ae=null;const we=new We(0,0,0,0);return{setMask:function(oe){ae!==oe&&!L&&(r.colorMask(oe,oe,oe,oe),ae=oe)},setLocked:function(oe){L=oe},setClear:function(oe,te,Te,Be,St){St===!0&&(oe*=Be,te*=Be,Te*=Be),ce.set(oe,te,Te,Be),we.equals(ce)===!1&&(r.clearColor(oe,te,Te,Be),we.copy(ce))},reset:function(){L=!1,ae=null,we.set(-1,0,0,0)}}}function s(){let L=!1,ce=null,ae=null,we=null;return{setTest:function(oe){oe?ve(r.DEPTH_TEST):F(r.DEPTH_TEST)},setMask:function(oe){ce!==oe&&!L&&(r.depthMask(oe),ce=oe)},setFunc:function(oe){if(ae!==oe){if(oe)switch(oe){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}else r.depthFunc(r.LEQUAL);ae=oe}},setLocked:function(oe){L=oe},setClear:function(oe){we!==oe&&(r.clearDepth(oe),we=oe)},reset:function(){L=!1,ce=null,ae=null,we=null}}}function a(){let L=!1,ce=null,ae=null,we=null,oe=null,te=null,Te=null,Be=null,St=null;return{setTest:function(qe){L||(qe?ve(r.STENCIL_TEST):F(r.STENCIL_TEST))},setMask:function(qe){ce!==qe&&!L&&(r.stencilMask(qe),ce=qe)},setFunc:function(qe,Qt,ei){(ae!==qe||we!==Qt||oe!==ei)&&(r.stencilFunc(qe,Qt,ei),ae=qe,we=Qt,oe=ei)},setOp:function(qe,Qt,ei){(te!==qe||Te!==Qt||Be!==ei)&&(r.stencilOp(qe,Qt,ei),te=qe,Te=Qt,Be=ei)},setLocked:function(qe){L=qe},setClear:function(qe){St!==qe&&(r.clearStencil(qe),St=qe)},reset:function(){L=!1,ce=null,ae=null,we=null,oe=null,te=null,Te=null,Be=null,St=null}}}const o=new n,l=new s,c=new a;let h={},u={},d=new WeakMap,f=[],_=null,g=!1,x=null,p=null,m=null,b=null,v=null,y=null,w=null,R=!1,P=null,G=null,U=null,M=null,C=null;const D=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,z=0;const N=r.getParameter(r.VERSION);N.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(N)[1]),I=z>=1):N.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),I=z>=2);let H=null,B={};const q=r.getParameter(r.SCISSOR_BOX),K=r.getParameter(r.VIEWPORT),J=new We().fromArray(q),Q=new We().fromArray(K);function he(L,ce,ae){const we=new Uint8Array(4),oe=r.createTexture();r.bindTexture(L,oe),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let te=0;te<ae;te++)r.texImage2D(ce+te,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,we);return oe}const Ce={};Ce[r.TEXTURE_2D]=he(r.TEXTURE_2D,r.TEXTURE_2D,1),Ce[r.TEXTURE_CUBE_MAP]=he(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),ve(r.DEPTH_TEST),l.setFunc(3),ie(!1),ue(1),ve(r.CULL_FACE),k(0);function ve(L){h[L]!==!0&&(r.enable(L),h[L]=!0)}function F(L){h[L]!==!1&&(r.disable(L),h[L]=!1)}function ze(L,ce){return u[L]!==ce?(r.bindFramebuffer(L,ce),u[L]=ce,i&&(L===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ce),L===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ce)),!0):!1}function Re(L,ce){let ae=f,we=!1;if(L)if(ae=d.get(ce),ae===void 0&&(ae=[],d.set(ce,ae)),L.isWebGLMultipleRenderTargets){const oe=L.texture;if(ae.length!==oe.length||ae[0]!==r.COLOR_ATTACHMENT0){for(let te=0,Te=oe.length;te<Te;te++)ae[te]=r.COLOR_ATTACHMENT0+te;ae.length=oe.length,we=!0}}else ae[0]!==r.COLOR_ATTACHMENT0&&(ae[0]=r.COLOR_ATTACHMENT0,we=!0);else ae[0]!==r.BACK&&(ae[0]=r.BACK,we=!0);we&&(t.isWebGL2?r.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function de(L){return _!==L?(r.useProgram(L),_=L,!0):!1}const fe={[100]:r.FUNC_ADD,[101]:r.FUNC_SUBTRACT,[102]:r.FUNC_REVERSE_SUBTRACT};if(i)fe[103]=r.MIN,fe[104]=r.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(fe[103]=L.MIN_EXT,fe[104]=L.MAX_EXT)}const Ie={[200]:r.ZERO,[201]:r.ONE,[202]:r.SRC_COLOR,[204]:r.SRC_ALPHA,[210]:r.SRC_ALPHA_SATURATE,[208]:r.DST_COLOR,[206]:r.DST_ALPHA,[203]:r.ONE_MINUS_SRC_COLOR,[205]:r.ONE_MINUS_SRC_ALPHA,[209]:r.ONE_MINUS_DST_COLOR,[207]:r.ONE_MINUS_DST_ALPHA};function k(L,ce,ae,we,oe,te,Te,Be){if(L===0){g===!0&&(F(r.BLEND),g=!1);return}if(g===!1&&(ve(r.BLEND),g=!0),L!==5){if(L!==x||Be!==R){if((p!==100||v!==100)&&(r.blendEquation(r.FUNC_ADD),p=100,v=100),Be)switch(L){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}m=null,b=null,y=null,w=null,x=L,R=Be}return}oe=oe||ce,te=te||ae,Te=Te||we,(ce!==p||oe!==v)&&(r.blendEquationSeparate(fe[ce],fe[oe]),p=ce,v=oe),(ae!==m||we!==b||te!==y||Te!==w)&&(r.blendFuncSeparate(Ie[ae],Ie[we],Ie[te],Ie[Te]),m=ae,b=we,y=te,w=Te),x=L,R=null}function $(L,ce){L.side===2?F(r.CULL_FACE):ve(r.CULL_FACE);let ae=L.side===1;ce&&(ae=!ae),ie(ae),L.blending===1&&L.transparent===!1?k(0):k(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const we=L.stencilWrite;c.setTest(we),we&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Me(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ve(r.SAMPLE_ALPHA_TO_COVERAGE):F(r.SAMPLE_ALPHA_TO_COVERAGE)}function ie(L){P!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),P=L)}function ue(L){L!==0?(ve(r.CULL_FACE),L!==G&&(L===1?r.cullFace(r.BACK):L===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):F(r.CULL_FACE),G=L}function se(L){L!==U&&(I&&r.lineWidth(L),U=L)}function Me(L,ce,ae){L?(ve(r.POLYGON_OFFSET_FILL),(M!==ce||C!==ae)&&(r.polygonOffset(ce,ae),M=ce,C=ae)):F(r.POLYGON_OFFSET_FILL)}function ge(L){L?ve(r.SCISSOR_TEST):F(r.SCISSOR_TEST)}function Le(L){L===void 0&&(L=r.TEXTURE0+D-1),H!==L&&(r.activeTexture(L),H=L)}function Je(L,ce){H===null&&Le();let ae=B[H];ae===void 0&&(ae={type:void 0,texture:void 0},B[H]=ae),(ae.type!==L||ae.texture!==ce)&&(r.bindTexture(L,ce||Ce[L]),ae.type=L,ae.texture=ce)}function T(){const L=B[H];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function S(){try{r.compressedTexImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{r.texSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{r.texSubImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{r.texStorage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{r.texStorage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{r.texImage2D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function be(){try{r.texImage3D.apply(r,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(L){J.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),J.copy(L))}function _e(L){Q.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),Q.copy(L))}function pe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},H=null,B={},u={},d=new WeakMap,f=[],_=null,g=!1,x=null,p=null,m=null,b=null,v=null,y=null,w=null,R=!1,P=null,G=null,U=null,M=null,C=null,J.set(0,0,r.canvas.width,r.canvas.height),Q.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:ve,disable:F,bindFramebuffer:ze,drawBuffers:Re,useProgram:de,setBlending:k,setMaterial:$,setFlipSided:ie,setCullFace:ue,setLineWidth:se,setPolygonOffset:Me,setScissorTest:ge,activeTexture:Le,bindTexture:Je,unbindTexture:T,compressedTexImage2D:S,texImage2D:Y,texImage3D:be,texStorage2D:le,texStorage3D:ye,texSubImage2D:X,texSubImage3D:Z,compressedTexSubImage2D:ne,scissor:Ee,viewport:_e,reset:pe}}function Lm(r,e,t,i,n,s,a){const o=n.isWebGL2,l=n.maxTextures,c=n.maxCubemapSize,h=n.maxTextureSize,u=n.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=new WeakMap;let _;const g=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(T,S){return x?new OffscreenCanvas(T,S):Mr("canvas")}function m(T,S,X,Z){let ne=1;if((T.width>Z||T.height>Z)&&(ne=Z/Math.max(T.width,T.height)),ne<1||S===!0)if(typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&T instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&T instanceof ImageBitmap){const le=S?Pa:Math.floor,ye=le(ne*T.width),Y=le(ne*T.height);_===void 0&&(_=p(ye,Y));const be=X?p(ye,Y):_;return be.width=ye,be.height=Y,be.getContext("2d").drawImage(T,0,0,ye,Y),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+ye+"x"+Y+")."),be}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function b(T){return No(T.width)&&No(T.height)}function v(T){return o?!1:T.wrapS!==1001||T.wrapT!==1001||T.minFilter!==1003&&T.minFilter!==1006}function y(T,S){return T.generateMipmaps&&S&&T.minFilter!==1003&&T.minFilter!==1006}function w(T){r.generateMipmap(T)}function R(T,S,X,Z,ne=!1){if(o===!1)return S;if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let le=S;return S===r.RED&&(X===r.FLOAT&&(le=r.R32F),X===r.HALF_FLOAT&&(le=r.R16F),X===r.UNSIGNED_BYTE&&(le=r.R8)),S===r.RG&&(X===r.FLOAT&&(le=r.RG32F),X===r.HALF_FLOAT&&(le=r.RG16F),X===r.UNSIGNED_BYTE&&(le=r.RG8)),S===r.RGBA&&(X===r.FLOAT&&(le=r.RGBA32F),X===r.HALF_FLOAT&&(le=r.RGBA16F),X===r.UNSIGNED_BYTE&&(le=Z===3001&&ne===!1?r.SRGB8_ALPHA8:r.RGBA8),X===r.UNSIGNED_SHORT_4_4_4_4&&(le=r.RGBA4),X===r.UNSIGNED_SHORT_5_5_5_1&&(le=r.RGB5_A1)),(le===r.R16F||le===r.R32F||le===r.RG16F||le===r.RG32F||le===r.RGBA16F||le===r.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function P(T,S,X){return y(T,X)===!0||T.isFramebufferTexture&&T.minFilter!==1003&&T.minFilter!==1006?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function G(T){return T===1003||T===1004||T===1005?r.NEAREST:r.LINEAR}function U(T){const S=T.target;S.removeEventListener("dispose",U),C(S),S.isVideoTexture&&f.delete(S)}function M(T){const S=T.target;S.removeEventListener("dispose",M),I(S)}function C(T){const S=i.get(T);if(S.__webglInit===void 0)return;const X=T.source,Z=g.get(X);if(Z){const ne=Z[S.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&D(T),Object.keys(Z).length===0&&g.delete(X)}i.remove(T)}function D(T){const S=i.get(T);r.deleteTexture(S.__webglTexture);const X=T.source,Z=g.get(X);delete Z[S.__cacheKey],a.memory.textures--}function I(T){const S=T.texture,X=i.get(T),Z=i.get(S);if(Z.__webglTexture!==void 0&&(r.deleteTexture(Z.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)r.deleteFramebuffer(X.__webglFramebuffer[ne]),X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer[ne]);else r.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&r.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer&&r.deleteRenderbuffer(X.__webglColorRenderbuffer),X.__webglDepthRenderbuffer&&r.deleteRenderbuffer(X.__webglDepthRenderbuffer);if(T.isWebGLMultipleRenderTargets)for(let ne=0,le=S.length;ne<le;ne++){const ye=i.get(S[ne]);ye.__webglTexture&&(r.deleteTexture(ye.__webglTexture),a.memory.textures--),i.remove(S[ne])}i.remove(S),i.remove(T)}let z=0;function N(){z=0}function H(){const T=z;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),z+=1,T}function B(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.encoding),S.join()}function q(T,S){const X=i.get(T);if(T.isVideoTexture&&Le(T),T.isRenderTargetTexture===!1&&T.version>0&&X.__version!==T.version){const Z=T.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ze(X,T,S);return}}t.activeTexture(r.TEXTURE0+S),t.bindTexture(r.TEXTURE_2D,X.__webglTexture)}function K(T,S){const X=i.get(T);if(T.version>0&&X.__version!==T.version){ze(X,T,S);return}t.activeTexture(r.TEXTURE0+S),t.bindTexture(r.TEXTURE_2D_ARRAY,X.__webglTexture)}function J(T,S){const X=i.get(T);if(T.version>0&&X.__version!==T.version){ze(X,T,S);return}t.activeTexture(r.TEXTURE0+S),t.bindTexture(r.TEXTURE_3D,X.__webglTexture)}function Q(T,S){const X=i.get(T);if(T.version>0&&X.__version!==T.version){Re(X,T,S);return}t.activeTexture(r.TEXTURE0+S),t.bindTexture(r.TEXTURE_CUBE_MAP,X.__webglTexture)}const he={[1e3]:r.REPEAT,[1001]:r.CLAMP_TO_EDGE,[1002]:r.MIRRORED_REPEAT},Ce={[1003]:r.NEAREST,[1004]:r.NEAREST_MIPMAP_NEAREST,[1005]:r.NEAREST_MIPMAP_LINEAR,[1006]:r.LINEAR,[1007]:r.LINEAR_MIPMAP_NEAREST,[1008]:r.LINEAR_MIPMAP_LINEAR};function ve(T,S,X){if(X?(r.texParameteri(T,r.TEXTURE_WRAP_S,he[S.wrapS]),r.texParameteri(T,r.TEXTURE_WRAP_T,he[S.wrapT]),(T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY)&&r.texParameteri(T,r.TEXTURE_WRAP_R,he[S.wrapR]),r.texParameteri(T,r.TEXTURE_MAG_FILTER,Ce[S.magFilter]),r.texParameteri(T,r.TEXTURE_MIN_FILTER,Ce[S.minFilter])):(r.texParameteri(T,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(T,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY)&&r.texParameteri(T,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(S.wrapS!==1001||S.wrapT!==1001)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(T,r.TEXTURE_MAG_FILTER,G(S.magFilter)),r.texParameteri(T,r.TEXTURE_MIN_FILTER,G(S.minFilter)),S.minFilter!==1003&&S.minFilter!==1006&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Z=e.get("EXT_texture_filter_anisotropic");if(S.type===1015&&e.has("OES_texture_float_linear")===!1||o===!1&&S.type===1016&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(r.texParameterf(T,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,n.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function F(T,S){let X=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",U));const Z=S.source;let ne=g.get(Z);ne===void 0&&(ne={},g.set(Z,ne));const le=B(S);if(le!==T.__cacheKey){ne[le]===void 0&&(ne[le]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ne[le].usedTimes++;const ye=ne[T.__cacheKey];ye!==void 0&&(ne[T.__cacheKey].usedTimes--,ye.usedTimes===0&&D(S)),T.__cacheKey=le,T.__webglTexture=ne[le].texture}return X}function ze(T,S,X){let Z=r.TEXTURE_2D;S.isDataArrayTexture&&(Z=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=r.TEXTURE_3D);const ne=F(T,S),le=S.source;if(t.activeTexture(r.TEXTURE0+X),t.bindTexture(Z,T.__webglTexture),le.version!==le.__currentVersion||ne===!0){r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const ye=v(S)&&b(S.image)===!1;let Y=m(S.image,ye,!1,h);Y=Je(S,Y);const be=b(Y)||o,Ee=s.convert(S.format,S.encoding);let _e=s.convert(S.type),pe=R(S.internalFormat,Ee,_e,S.encoding,S.isVideoTexture);ve(Z,S,be);let L;const ce=S.mipmaps,ae=o&&S.isVideoTexture!==!0,we=T.__version===void 0,oe=P(S,Y,be);if(S.isDepthTexture)pe=r.DEPTH_COMPONENT,o?S.type===1015?pe=r.DEPTH_COMPONENT32F:S.type===1014?pe=r.DEPTH_COMPONENT24:S.type===1020?pe=r.DEPTH24_STENCIL8:pe=r.DEPTH_COMPONENT16:S.type===1015&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===1026&&pe===r.DEPTH_COMPONENT&&S.type!==1012&&S.type!==1014&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=1012,_e=s.convert(S.type)),S.format===1027&&pe===r.DEPTH_COMPONENT&&(pe=r.DEPTH_STENCIL,S.type!==1020&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=1020,_e=s.convert(S.type))),ae&&we?t.texStorage2D(r.TEXTURE_2D,1,pe,Y.width,Y.height):t.texImage2D(r.TEXTURE_2D,0,pe,Y.width,Y.height,0,Ee,_e,null);else if(S.isDataTexture)if(ce.length>0&&be){ae&&we&&t.texStorage2D(r.TEXTURE_2D,oe,pe,ce[0].width,ce[0].height);for(let te=0,Te=ce.length;te<Te;te++)L=ce[te],ae?t.texSubImage2D(r.TEXTURE_2D,te,0,0,L.width,L.height,Ee,_e,L.data):t.texImage2D(r.TEXTURE_2D,te,pe,L.width,L.height,0,Ee,_e,L.data);S.generateMipmaps=!1}else ae?(we&&t.texStorage2D(r.TEXTURE_2D,oe,pe,Y.width,Y.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Y.width,Y.height,Ee,_e,Y.data)):t.texImage2D(r.TEXTURE_2D,0,pe,Y.width,Y.height,0,Ee,_e,Y.data);else if(S.isCompressedTexture){ae&&we&&t.texStorage2D(r.TEXTURE_2D,oe,pe,ce[0].width,ce[0].height);for(let te=0,Te=ce.length;te<Te;te++)L=ce[te],S.format!==1023?Ee!==null?ae?t.compressedTexSubImage2D(r.TEXTURE_2D,te,0,0,L.width,L.height,Ee,L.data):t.compressedTexImage2D(r.TEXTURE_2D,te,pe,L.width,L.height,0,L.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?t.texSubImage2D(r.TEXTURE_2D,te,0,0,L.width,L.height,Ee,_e,L.data):t.texImage2D(r.TEXTURE_2D,te,pe,L.width,L.height,0,Ee,_e,L.data)}else if(S.isDataArrayTexture)ae?(we&&t.texStorage3D(r.TEXTURE_2D_ARRAY,oe,pe,Y.width,Y.height,Y.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,Ee,_e,Y.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,pe,Y.width,Y.height,Y.depth,0,Ee,_e,Y.data);else if(S.isData3DTexture)ae?(we&&t.texStorage3D(r.TEXTURE_3D,oe,pe,Y.width,Y.height,Y.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,Ee,_e,Y.data)):t.texImage3D(r.TEXTURE_3D,0,pe,Y.width,Y.height,Y.depth,0,Ee,_e,Y.data);else if(S.isFramebufferTexture)ae&&we?t.texStorage2D(r.TEXTURE_2D,oe,pe,Y.width,Y.height):t.texImage2D(r.TEXTURE_2D,0,pe,Y.width,Y.height,0,Ee,_e,null);else if(ce.length>0&&be){ae&&we&&t.texStorage2D(r.TEXTURE_2D,oe,pe,ce[0].width,ce[0].height);for(let te=0,Te=ce.length;te<Te;te++)L=ce[te],ae?t.texSubImage2D(r.TEXTURE_2D,te,0,0,Ee,_e,L):t.texImage2D(r.TEXTURE_2D,te,pe,Ee,_e,L);S.generateMipmaps=!1}else ae?(we&&t.texStorage2D(r.TEXTURE_2D,oe,pe,Y.width,Y.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ee,_e,Y)):t.texImage2D(r.TEXTURE_2D,0,pe,Ee,_e,Y);y(S,be)&&w(Z),le.__currentVersion=le.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function Re(T,S,X){if(S.image.length!==6)return;const Z=F(T,S),ne=S.source;if(t.activeTexture(r.TEXTURE0+X),t.bindTexture(r.TEXTURE_CUBE_MAP,T.__webglTexture),ne.version!==ne.__currentVersion||Z===!0){r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const le=S.isCompressedTexture||S.image[0].isCompressedTexture,ye=S.image[0]&&S.image[0].isDataTexture,Y=[];for(let te=0;te<6;te++)!le&&!ye?Y[te]=m(S.image[te],!1,!0,c):Y[te]=ye?S.image[te].image:S.image[te],Y[te]=Je(S,Y[te]);const be=Y[0],Ee=b(be)||o,_e=s.convert(S.format,S.encoding),pe=s.convert(S.type),L=R(S.internalFormat,_e,pe,S.encoding),ce=o&&S.isVideoTexture!==!0,ae=T.__version===void 0;let we=P(S,be,Ee);ve(r.TEXTURE_CUBE_MAP,S,Ee);let oe;if(le){ce&&ae&&t.texStorage2D(r.TEXTURE_CUBE_MAP,we,L,be.width,be.height);for(let te=0;te<6;te++){oe=Y[te].mipmaps;for(let Te=0;Te<oe.length;Te++){const Be=oe[Te];S.format!==1023?_e!==null?ce?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te,0,0,Be.width,Be.height,_e,Be.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te,L,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ce?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te,0,0,Be.width,Be.height,_e,pe,Be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te,L,Be.width,Be.height,0,_e,pe,Be.data)}}}else{oe=S.mipmaps,ce&&ae&&(oe.length>0&&we++,t.texStorage2D(r.TEXTURE_CUBE_MAP,we,L,Y[0].width,Y[0].height));for(let te=0;te<6;te++)if(ye){ce?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Y[te].width,Y[te].height,_e,pe,Y[te].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,L,Y[te].width,Y[te].height,0,_e,pe,Y[te].data);for(let Te=0;Te<oe.length;Te++){const St=oe[Te].image[te].image;ce?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te+1,0,0,St.width,St.height,_e,pe,St.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te+1,L,St.width,St.height,0,_e,pe,St.data)}}else{ce?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,_e,pe,Y[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,L,_e,pe,Y[te]);for(let Te=0;Te<oe.length;Te++){const Be=oe[Te];ce?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te+1,0,0,_e,pe,Be.image[te]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+te,Te+1,L,_e,pe,Be.image[te])}}}y(S,Ee)&&w(r.TEXTURE_CUBE_MAP),ne.__currentVersion=ne.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function de(T,S,X,Z,ne){const le=s.convert(X.format,X.encoding),ye=s.convert(X.type),Y=R(X.internalFormat,le,ye,X.encoding);i.get(S).__hasExternalTextures||(ne===r.TEXTURE_3D||ne===r.TEXTURE_2D_ARRAY?t.texImage3D(ne,0,Y,S.width,S.height,S.depth,0,le,ye,null):t.texImage2D(ne,0,Y,S.width,S.height,0,le,ye,null)),t.bindFramebuffer(r.FRAMEBUFFER,T),ge(S)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,ne,i.get(X).__webglTexture,0,Me(S)):r.framebufferTexture2D(r.FRAMEBUFFER,Z,ne,i.get(X).__webglTexture,0),t.bindFramebuffer(r.FRAMEBUFFER,null)}function fe(T,S,X){if(r.bindRenderbuffer(r.RENDERBUFFER,T),S.depthBuffer&&!S.stencilBuffer){let Z=r.DEPTH_COMPONENT16;if(X||ge(S)){const ne=S.depthTexture;ne&&ne.isDepthTexture&&(ne.type===1015?Z=r.DEPTH_COMPONENT32F:ne.type===1014&&(Z=r.DEPTH_COMPONENT24));const le=Me(S);ge(S)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,le,Z,S.width,S.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,le,Z,S.width,S.height)}else r.renderbufferStorage(r.RENDERBUFFER,Z,S.width,S.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,T)}else if(S.depthBuffer&&S.stencilBuffer){const Z=Me(S);X&&ge(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Z,r.DEPTH24_STENCIL8,S.width,S.height):ge(S)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Z,r.DEPTH24_STENCIL8,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,T)}else{const Z=S.isWebGLMultipleRenderTargets===!0?S.texture[0]:S.texture,ne=s.convert(Z.format,Z.encoding),le=s.convert(Z.type),ye=R(Z.internalFormat,ne,le,Z.encoding),Y=Me(S);X&&ge(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Y,ye,S.width,S.height):ge(S)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Y,ye,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,ye,S.width,S.height)}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ie(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const Z=i.get(S.depthTexture).__webglTexture,ne=Me(S);if(S.depthTexture.format===1026)ge(S)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0);else if(S.depthTexture.format===1027)ge(S)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0,ne):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function k(T){const S=i.get(T),X=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Ie(S.__webglFramebuffer,T)}else if(X){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]=r.createRenderbuffer(),fe(S.__webglDepthbuffer[Z],T,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),fe(S.__webglDepthbuffer,T,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function $(T,S,X){const Z=i.get(T);S!==void 0&&de(Z.__webglFramebuffer,T,T.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D),X!==void 0&&k(T)}function ie(T){const S=T.texture,X=i.get(T),Z=i.get(S);T.addEventListener("dispose",M),T.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=S.version,a.memory.textures++);const ne=T.isWebGLCubeRenderTarget===!0,le=T.isWebGLMultipleRenderTargets===!0,ye=b(T)||o;if(ne){X.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)X.__webglFramebuffer[Y]=r.createFramebuffer()}else if(X.__webglFramebuffer=r.createFramebuffer(),le)if(n.drawBuffers){const Y=T.texture;for(let be=0,Ee=Y.length;be<Ee;be++){const _e=i.get(Y[be]);_e.__webglTexture===void 0&&(_e.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(o&&T.samples>0&&ge(T)===!1){X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,X.__webglColorRenderbuffer);const Y=s.convert(S.format,S.encoding),be=s.convert(S.type),Ee=R(S.internalFormat,Y,be,S.encoding),_e=Me(T);r.renderbufferStorageMultisample(r.RENDERBUFFER,_e,Ee,T.width,T.height),t.bindFramebuffer(r.FRAMEBUFFER,X.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,X.__webglColorRenderbuffer),r.bindRenderbuffer(r.RENDERBUFFER,null),T.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),fe(X.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}if(ne){t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),ve(r.TEXTURE_CUBE_MAP,S,ye);for(let Y=0;Y<6;Y++)de(X.__webglFramebuffer[Y],T,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Y);y(S,ye)&&w(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){const Y=T.texture;for(let be=0,Ee=Y.length;be<Ee;be++){const _e=Y[be],pe=i.get(_e);t.bindTexture(r.TEXTURE_2D,pe.__webglTexture),ve(r.TEXTURE_2D,_e,ye),de(X.__webglFramebuffer,T,_e,r.COLOR_ATTACHMENT0+be,r.TEXTURE_2D),y(_e,ye)&&w(r.TEXTURE_2D)}t.unbindTexture()}else{let Y=r.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?Y=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Y,Z.__webglTexture),ve(Y,S,ye),de(X.__webglFramebuffer,T,S,r.COLOR_ATTACHMENT0,Y),y(S,ye)&&w(Y),t.unbindTexture()}T.depthBuffer&&k(T)}function ue(T){const S=b(T)||o,X=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let Z=0,ne=X.length;Z<ne;Z++){const le=X[Z];if(y(le,S)){const ye=T.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Y=i.get(le).__webglTexture;t.bindTexture(ye,Y),w(ye),t.unbindTexture()}}}function se(T){if(o&&T.samples>0&&ge(T)===!1){const S=T.width,X=T.height;let Z=r.COLOR_BUFFER_BIT;const ne=[r.COLOR_ATTACHMENT0],le=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;T.depthBuffer&&ne.push(le);const ye=i.get(T),Y=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;Y===!1&&(T.depthBuffer&&(Z|=r.DEPTH_BUFFER_BIT),T.stencilBuffer&&(Z|=r.STENCIL_BUFFER_BIT)),t.bindFramebuffer(r.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer),Y===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[le]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[le])),r.blitFramebuffer(0,0,S,X,0,0,S,X,Z,r.NEAREST),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ne),t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}}function Me(T){return Math.min(u,T.samples)}function ge(T){const S=i.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Le(T){const S=a.render.frame;f.get(T)!==S&&(f.set(T,S),T.update())}function Je(T,S){const X=T.encoding,Z=T.format,ne=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===1035||X!==3e3&&(X===3001?o===!1?e.has("EXT_sRGB")===!0&&Z===1023?(T.format=1035,T.minFilter=1006,T.generateMipmaps=!1):S=ln.sRGBToLinear(S):(Z!==1023||ne!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",X)),S}this.allocateTextureUnit=H,this.resetTextureUnits=N,this.setTexture2D=q,this.setTexture2DArray=K,this.setTexture3D=J,this.setTextureCube=Q,this.rebindTextures=$,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=k,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ge}function Pm(r,e,t){const i=t.isWebGL2;function n(s,a=null){let o;if(s===1009)return r.UNSIGNED_BYTE;if(s===1017)return r.UNSIGNED_SHORT_4_4_4_4;if(s===1018)return r.UNSIGNED_SHORT_5_5_5_1;if(s===1010)return r.BYTE;if(s===1011)return r.SHORT;if(s===1012)return r.UNSIGNED_SHORT;if(s===1013)return r.INT;if(s===1014)return r.UNSIGNED_INT;if(s===1015)return r.FLOAT;if(s===1016)return i?r.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===1021)return r.ALPHA;if(s===1023)return r.RGBA;if(s===1024)return r.LUMINANCE;if(s===1025)return r.LUMINANCE_ALPHA;if(s===1026)return r.DEPTH_COMPONENT;if(s===1027)return r.DEPTH_STENCIL;if(s===1028)return r.RED;if(s===1022)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),r.RGBA;if(s===1035)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===1029)return r.RED_INTEGER;if(s===1030)return r.RG;if(s===1031)return r.RG_INTEGER;if(s===1033)return r.RGBA_INTEGER;if(s===33776||s===33777||s===33778||s===33779)if(a===3001)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===33776)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===33777)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===33778)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===33779)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===33776)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===33777)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===33778)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===33779)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===35840||s===35841||s===35842||s===35843)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===35840)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===35841)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===35842)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===35843)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===36196)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===37492||s===37496)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===37492)return a===3001?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===37496)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===37808||s===37809||s===37810||s===37811||s===37812||s===37813||s===37814||s===37815||s===37816||s===37817||s===37818||s===37819||s===37820||s===37821)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===37808)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===37809)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===37810)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===37811)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===37812)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===37813)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===37814)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===37815)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===37816)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===37817)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===37818)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===37819)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===37820)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===37821)return a===3001?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===36492)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===36492)return a===3001?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===1020)return i?r.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:n}}class gc extends Et{constructor(e=[]){super();this.cameras=e}}gc.prototype.isArrayCamera=!0;class fr extends ke{constructor(){super();this.type="Group"}}fr.prototype.isGroup=!0;const Dm={type:"move"};class pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred")if(o!==null&&(n=t.getPose(e.targetRaySpace,i),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dm))),c&&e.hand){a=!0;for(const g of e.hand.values()){const x=t.getJointPose(g,i);if(c.joints[g.jointName]===void 0){const m=new fr;m.matrixAutoUpdate=!1,m.visible=!1,c.joints[g.jointName]=m,c.add(m)}const p=c.joints[g.jointName];x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=x.radius),p.visible=x!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}}class _c extends dt{constructor(e,t,i,n,s,a,o,l,c,h){if(h=h!==void 0?h:1026,h!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===1026&&(i=1012),i===void 0&&h===1027&&(i=1020);super(null,n,s,a,o,l,h,i,c);this.image={width:e,height:t},this.magFilter=o!==void 0?o:1003,this.minFilter=l!==void 0?l:1003,this.flipY=!1,this.generateMipmaps=!1}}_c.prototype.isDepthTexture=!0;class Fm extends on{constructor(e,t){super();const i=this;let n=null,s=1,a=null,o="local-floor",l=null,c=null,h=null,u=null,d=null;const f=t.getContextAttributes();let _=null,g=null;const x=[],p=new Map,m=new Et;m.layers.enable(1),m.viewport=new We;const b=new Et;b.layers.enable(2),b.viewport=new We;const v=[m,b],y=new gc;y.layers.enable(1),y.layers.enable(2);let w=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let q=x[B];return q===void 0&&(q=new pa,x[B]=q),q.getTargetRaySpace()},this.getControllerGrip=function(B){let q=x[B];return q===void 0&&(q=new pa,x[B]=q),q.getGripSpace()},this.getHand=function(B){let q=x[B];return q===void 0&&(q=new pa,x[B]=q),q.getHandSpace()};function P(B){const q=p.get(B.inputSource);q&&q.dispatchEvent({type:B.type,data:B.inputSource})}function G(){p.forEach(function(B,q){B.disconnect(q)}),p.clear(),w=null,R=null,e.setRenderTarget(_),u=null,h=null,c=null,n=null,g=null,H.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a},this.getBaseLayer=function(){return h!==null?h:u},this.getBinding=function(){return c},this.getFrame=function(){return d},this.getSession=function(){return n},this.setSession=async function(B){if(n=B,n!==null){if(_=e.getRenderTarget(),n.addEventListener("select",P),n.addEventListener("selectstart",P),n.addEventListener("selectend",P),n.addEventListener("squeeze",P),n.addEventListener("squeezestart",P),n.addEventListener("squeezeend",P),n.addEventListener("end",G),n.addEventListener("inputsourceschange",U),f.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:n.renderState.layers===void 0?f.antialias:!0,alpha:f.alpha,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(n,t,q),n.updateRenderState({baseLayer:u}),g=new Bt(u.framebufferWidth,u.framebufferHeight,{format:1023,type:1009,encoding:e.outputEncoding})}else{let q=null,K=null,J=null;f.depth&&(J=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=f.stencil?1027:1026,K=f.stencil?1020:1012);const Q={colorFormat:e.outputEncoding===3001?t.SRGB8_ALPHA8:t.RGBA8,depthFormat:J,scaleFactor:s};c=new XRWebGLBinding(n,t),h=c.createProjectionLayer(Q),n.updateRenderState({layers:[h]}),g=new Bt(h.textureWidth,h.textureHeight,{format:1023,type:1009,depthTexture:new _c(h.textureWidth,h.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:f.stencil,encoding:e.outputEncoding,samples:f.antialias?4:0});const he=e.properties.get(g);he.__ignoreDepthValues=h.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(1),a=await n.requestReferenceSpace(o),H.setContext(n),H.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function U(B){const q=n.inputSources;for(let K=0;K<x.length;K++)p.set(q[K],x[K]);for(let K=0;K<B.removed.length;K++){const J=B.removed[K],Q=p.get(J);Q&&(Q.dispatchEvent({type:"disconnected",data:J}),p.delete(J))}for(let K=0;K<B.added.length;K++){const J=B.added[K],Q=p.get(J);Q&&Q.dispatchEvent({type:"connected",data:J})}}const M=new A,C=new A;function D(B,q,K){M.setFromMatrixPosition(q.matrixWorld),C.setFromMatrixPosition(K.matrixWorld);const J=M.distanceTo(C),Q=q.projectionMatrix.elements,he=K.projectionMatrix.elements,Ce=Q[14]/(Q[10]-1),ve=Q[14]/(Q[10]+1),F=(Q[9]+1)/Q[5],ze=(Q[9]-1)/Q[5],Re=(Q[8]-1)/Q[0],de=(he[8]+1)/he[0],fe=Ce*Re,Ie=Ce*de,k=J/(-Re+de),$=k*-Re;q.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX($),B.translateZ(k),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const ie=Ce+k,ue=ve+k,se=fe-$,Me=Ie+(J-$),ge=F*ve/ue*ie,Le=ze*ve/ue*ie;B.projectionMatrix.makePerspective(se,Me,ge,Le,ie,ue)}function I(B,q){q===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(q.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(n===null)return;y.near=b.near=m.near=B.near,y.far=b.far=m.far=B.far,(w!==y.near||R!==y.far)&&(n.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,R=y.far);const q=B.parent,K=y.cameras;I(y,q);for(let Q=0;Q<K.length;Q++)I(K[Q],q);y.matrixWorld.decompose(y.position,y.quaternion,y.scale),B.position.copy(y.position),B.quaternion.copy(y.quaternion),B.scale.copy(y.scale),B.matrix.copy(y.matrix),B.matrixWorld.copy(y.matrixWorld);const J=B.children;for(let Q=0,he=J.length;Q<he;Q++)J[Q].updateMatrixWorld(!0);K.length===2?D(y,m,b):y.projectionMatrix.copy(m.projectionMatrix)},this.getCamera=function(){return y},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(u!==null)return u.fixedFoveation},this.setFoveation=function(B){h!==null&&(h.fixedFoveation=B),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=B)};let z=null;function N(B,q){if(l=q.getViewerPose(a),d=q,l!==null){const J=l.views;u!==null&&(e.setRenderTargetFramebuffer(g,u.framebuffer),e.setRenderTarget(g));let Q=!1;J.length!==y.cameras.length&&(y.cameras.length=0,Q=!0);for(let he=0;he<J.length;he++){const Ce=J[he];let ve=null;if(u!==null)ve=u.getViewport(Ce);else{const ze=c.getViewSubImage(h,Ce);ve=ze.viewport,he===0&&(e.setRenderTargetTextures(g,ze.colorTexture,h.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(g))}const F=v[he];F.matrix.fromArray(Ce.transform.matrix),F.projectionMatrix.fromArray(Ce.projectionMatrix),F.viewport.set(ve.x,ve.y,ve.width,ve.height),he===0&&y.matrix.copy(F.matrix),Q===!0&&y.cameras.push(F)}}const K=n.inputSources;for(let J=0;J<x.length;J++){const Q=x[J],he=K[J];Q.update(he,q,a)}z&&z(B,q),d=null}const H=new oc;H.setAnimationLoop(N),this.setAnimationLoop=function(B){z=B},this.dispose=function(){}}}function Im(r){function e(p,m){p.fogColor.value.copy(m.color),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function t(p,m,b,v,y){m.isMeshBasicMaterial?i(p,m):m.isMeshLambertMaterial?(i(p,m),l(p,m)):m.isMeshToonMaterial?(i(p,m),h(p,m)):m.isMeshPhongMaterial?(i(p,m),c(p,m)):m.isMeshStandardMaterial?(i(p,m),m.isMeshPhysicalMaterial?d(p,m,y):u(p,m)):m.isMeshMatcapMaterial?(i(p,m),f(p,m)):m.isMeshDepthMaterial?(i(p,m),_(p,m)):m.isMeshDistanceMaterial?(i(p,m),g(p,m)):m.isMeshNormalMaterial?(i(p,m),x(p,m)):m.isLineBasicMaterial?(n(p,m),m.isLineDashedMaterial&&s(p,m)):m.isPointsMaterial?a(p,m,b,v):m.isSpriteMaterial?o(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const b=r.get(m).envMap;b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let v;m.map?v=m.map:m.specularMap?v=m.specularMap:m.displacementMap?v=m.displacementMap:m.normalMap?v=m.normalMap:m.bumpMap?v=m.bumpMap:m.roughnessMap?v=m.roughnessMap:m.metalnessMap?v=m.metalnessMap:m.alphaMap?v=m.alphaMap:m.emissiveMap?v=m.emissiveMap:m.clearcoatMap?v=m.clearcoatMap:m.clearcoatNormalMap?v=m.clearcoatNormalMap:m.clearcoatRoughnessMap?v=m.clearcoatRoughnessMap:m.specularIntensityMap?v=m.specularIntensityMap:m.specularColorMap?v=m.specularColorMap:m.transmissionMap?v=m.transmissionMap:m.thicknessMap?v=m.thicknessMap:m.sheenColorMap?v=m.sheenColorMap:m.sheenRoughnessMap&&(v=m.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix));let y;m.aoMap?y=m.aoMap:m.lightMap&&(y=m.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uv2Transform.value.copy(y.matrix))}function n(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function s(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function a(p,m,b,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=v*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let y;m.map?y=m.map:m.alphaMap&&(y=m.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),p.uvTransform.value.copy(y.matrix))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let b;m.map?b=m.map:m.alphaMap&&(b=m.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix))}function l(p,m){m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap)}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===1&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===1&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===1&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===1&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}function u(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===1&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===1&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),r.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,b){u(p,m),p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===1&&p.clearcoatNormalScale.value.negate())),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function f(p,m){m.matcap&&(p.matcap.value=m.matcap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===1&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===1&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}function _(p,m){m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}function g(p,m){m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}function x(p,m){m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===1&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===1&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias)}return{refreshFogUniforms:e,refreshMaterialUniforms:t}}function Nm(){const r=Mr("canvas");return r.style.display="block",r}function Xe(r={}){const e=r.canvas!==void 0?r.canvas:Nm(),t=r.context!==void 0?r.context:null,i=r.depth!==void 0?r.depth:!0,n=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,a=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,o=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let h;r.context!==void 0?h=t.getContextAttributes().alpha:h=r.alpha!==void 0?r.alpha:!1;let u=null,d=null;const f=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=3e3,this.physicallyCorrectLights=!1,this.toneMapping=0,this.toneMappingExposure=1;const g=this;let x=!1,p=0,m=0,b=null,v=-1,y=null;const w=new We,R=new We;let P=null,G=e.width,U=e.height,M=1,C=null,D=null;const I=new We(0,0,G,U),z=new We(0,0,G,U);let N=!1;const H=new Ps;let B=!1,q=!1,K=null;const J=new xe,Q=new ee,he=new A,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ve(){return b===null?M:1}let F=t;function ze(E,O){for(let W=0;W<E.length;W++){const V=E[W],j=e.getContext(V,O);if(j!==null)return j}return null}try{const E={alpha:!0,depth:i,stencil:n,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Za}`),e.addEventListener("webglcontextlost",L,!1),e.addEventListener("webglcontextrestored",ce,!1),F===null){const O=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&O.shift(),F=ze(O,E),F===null)throw ze(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Re,de,fe,Ie,k,$,ie,ue,se,Me,ge,Le,Je,T,S,X,Z,ne,le,ye,Y,be,Ee;function _e(){Re=new Qf(F),de=new Yf(F,Re,r),Re.init(de),be=new Pm(F,Re,de),fe=new Cm(F,Re,de),Ie=new ip(F),k=new xm,$=new Lm(F,Re,fe,k,de,be,Ie),ie=new Zf(g),ue=new $f(g),se=new mu(F,de),Ee=new Xf(F,Re,se,de),Me=new ep(F,se,Ie,Ee),ge=new ap(F,Me,se,Ie),le=new sp(F,de,$),X=new jf(k),Le=new _m(g,ie,ue,Re,de,Ee,X),Je=new Im(k),T=new vm,S=new wm(Re,de),ne=new Wf(g,ie,fe,ge,h,a),Z=new mc(g,ge,de),ye=new qf(F,Re,Ie,de),Y=new tp(F,Re,Ie,de),Ie.programs=Le.programs,g.capabilities=de,g.extensions=Re,g.properties=k,g.renderLists=T,g.shadowMap=Z,g.state=fe,g.info=Ie}_e();const pe=new Fm(g,F);this.xr=pe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=Re.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Re.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return M},this.setPixelRatio=function(E){E!==void 0&&(M=E,this.setSize(G,U,!1))},this.getSize=function(E){return E.set(G,U)},this.setSize=function(E,O,W){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,U=O,e.width=Math.floor(E*M),e.height=Math.floor(O*M),W!==!1&&(e.style.width=E+"px",e.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(G*M,U*M).floor()},this.setDrawingBufferSize=function(E,O,W){G=E,U=O,M=W,e.width=Math.floor(E*W),e.height=Math.floor(O*W),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(w)},this.getViewport=function(E){return E.copy(I)},this.setViewport=function(E,O,W,V){E.isVector4?I.set(E.x,E.y,E.z,E.w):I.set(E,O,W,V),fe.viewport(w.copy(I).multiplyScalar(M).floor())},this.getScissor=function(E){return E.copy(z)},this.setScissor=function(E,O,W,V){E.isVector4?z.set(E.x,E.y,E.z,E.w):z.set(E,O,W,V),fe.scissor(R.copy(z).multiplyScalar(M).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(E){fe.setScissorTest(N=E)},this.setOpaqueSort=function(E){C=E},this.setTransparentSort=function(E){D=E},this.getClearColor=function(E){return E.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(E=!0,O=!0,W=!0){let V=0;E&&(V|=F.COLOR_BUFFER_BIT),O&&(V|=F.DEPTH_BUFFER_BIT),W&&(V|=F.STENCIL_BUFFER_BIT),F.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",L,!1),e.removeEventListener("webglcontextrestored",ce,!1),T.dispose(),S.dispose(),k.dispose(),ie.dispose(),ue.dispose(),ge.dispose(),Ee.dispose(),Le.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Be),pe.removeEventListener("sessionend",St),K&&(K.dispose(),K=null),qe.stop()};function L(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const E=Ie.autoReset,O=Z.enabled,W=Z.autoUpdate,V=Z.needsUpdate,j=Z.type;_e(),Ie.autoReset=E,Z.enabled=O,Z.autoUpdate=W,Z.needsUpdate=V,Z.type=j}function ae(E){const O=E.target;O.removeEventListener("dispose",ae),we(O)}function we(E){oe(E),k.remove(E)}function oe(E){const O=k.get(E).programs;O!==void 0&&(O.forEach(function(W){Le.releaseProgram(W)}),E.isShaderMaterial&&Le.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,W,V,j,Se){O===null&&(O=Ce);const Ae=j.isMesh&&j.matrixWorld.determinant()<0,De=Xh(E,O,W,V,j);fe.setMaterial(V,Ae);let Pe=W.index;const He=W.attributes.position;if(Pe===null){if(He===void 0||He.count===0)return}else if(Pe.count===0)return;let Ue=1;V.wireframe===!0&&(Pe=Me.getWireframeAttribute(W),Ue=2),Ee.setup(j,V,De,W,Pe);let Oe,tt=ye;Pe!==null&&(Oe=se.get(Pe),tt=Y,tt.setIndex(Oe));const qi=Pe!==null?Pe.count:He.count,dn=W.drawRange.start*Ue,fn=W.drawRange.count*Ue,ti=Se!==null?Se.start*Ue:0,Ge=Se!==null?Se.count*Ue:1/0,pn=Math.max(dn,ti),nt=Math.min(qi,dn+fn,ti+Ge)-1,ii=Math.max(0,nt-pn+1);if(ii!==0){if(j.isMesh)V.wireframe===!0?(fe.setLineWidth(V.wireframeLinewidth*ve()),tt.setMode(F.LINES)):tt.setMode(F.TRIANGLES);else if(j.isLine){let Si=V.linewidth;Si===void 0&&(Si=1),fe.setLineWidth(Si*ve()),j.isLineSegments?tt.setMode(F.LINES):j.isLineLoop?tt.setMode(F.LINE_LOOP):tt.setMode(F.LINE_STRIP)}else j.isPoints?tt.setMode(F.POINTS):j.isSprite&&tt.setMode(F.TRIANGLES);if(j.isInstancedMesh)tt.renderInstances(pn,ii,j.count);else if(W.isInstancedBufferGeometry){const Si=Math.min(W.instanceCount,W._maxInstanceCount);tt.renderInstances(pn,ii,Si)}else tt.render(pn,ii)}},this.compile=function(E,O){d=S.get(E),d.init(),_.push(d),E.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(d.pushLight(W),W.castShadow&&d.pushShadow(W))}),d.setupLights(g.physicallyCorrectLights),E.traverse(function(W){const V=W.material;if(V)if(Array.isArray(V))for(let j=0;j<V.length;j++){const Se=V[j];Os(Se,E,W)}else Os(V,E,W)}),_.pop(),d=null};let te=null;function Te(E){te&&te(E)}function Be(){qe.stop()}function St(){qe.start()}const qe=new oc;qe.setAnimationLoop(Te),typeof window!="undefined"&&qe.setContext(window),this.setAnimationLoop=function(E){te=E,pe.setAnimationLoop(E),E===null?qe.stop():qe.start()},pe.addEventListener("sessionstart",Be),pe.addEventListener("sessionend",St),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;E.autoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(O),O=pe.getCamera()),E.isScene===!0&&E.onBeforeRender(g,E,O,b),d=S.get(E,_.length),d.init(),_.push(d),J.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),H.setFromProjectionMatrix(J),q=this.localClippingEnabled,B=X.init(this.clippingPlanes,q,O),u=T.get(E,f.length),u.init(),f.push(u),Qt(E,O,0,g.sortObjects),u.finish(),g.sortObjects===!0&&u.sort(C,D),B===!0&&X.beginShadows();const W=d.state.shadowsArray;if(Z.render(W,E,O),B===!0&&X.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(u,E),d.setupLights(g.physicallyCorrectLights),O.isArrayCamera){const V=O.cameras;for(let j=0,Se=V.length;j<Se;j++){const Ae=V[j];ei(u,E,Ae,Ae.viewport)}}else ei(u,E,O);b!==null&&($.updateMultisampleRenderTarget(b),$.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(g,E,O),Ee.resetDefaultState(),v=-1,y=null,_.pop(),_.length>0?d=_[_.length-1]:d=null,f.pop(),f.length>0?u=f[f.length-1]:u=null};function Qt(E,O,W,V){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||H.intersectsSprite(E)){V&&he.setFromMatrixPosition(E.matrixWorld).applyMatrix4(J);const Ae=ge.update(E),De=E.material;De.visible&&u.push(E,Ae,De,W,he.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Ie.render.frame&&(E.skeleton.update(),E.skeleton.frame=Ie.render.frame),!E.frustumCulled||H.intersectsObject(E))){V&&he.setFromMatrixPosition(E.matrixWorld).applyMatrix4(J);const Ae=ge.update(E),De=E.material;if(Array.isArray(De)){const Pe=Ae.groups;for(let He=0,Ue=Pe.length;He<Ue;He++){const Oe=Pe[He],tt=De[Oe.materialIndex];tt&&tt.visible&&u.push(E,Ae,tt,W,he.z,Oe)}}else De.visible&&u.push(E,Ae,De,W,he.z,null)}}const Se=E.children;for(let Ae=0,De=Se.length;Ae<De;Ae++)Qt(Se[Ae],O,W,V)}function ei(E,O,W,V){const j=E.opaque,Se=E.transmissive,Ae=E.transparent;d.setupLightsView(W),Se.length>0&&kh(j,O,W),V&&fe.viewport(w.copy(V)),j.length>0&&Ur(j,O,W),Se.length>0&&Ur(Se,O,W),Ae.length>0&&Ur(Ae,O,W),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function kh(E,O,W){const V=de.isWebGL2;K===null&&(K=new Bt(1,1,{generateMipmaps:!0,type:be.convert(1016)!==null?1016:1009,minFilter:1008,samples:V&&s===!0?4:0})),g.getDrawingBufferSize(Q),V?K.setSize(Q.x,Q.y):K.setSize(Pa(Q.x),Pa(Q.y));const j=g.getRenderTarget();g.setRenderTarget(K),g.clear();const Se=g.toneMapping;g.toneMapping=0,Ur(E,O,W),g.toneMapping=Se,$.updateMultisampleRenderTarget(K),$.updateRenderTargetMipmap(K),g.setRenderTarget(j)}function Ur(E,O,W){const V=O.isScene===!0?O.overrideMaterial:null;for(let j=0,Se=E.length;j<Se;j++){const Ae=E[j],De=Ae.object,Pe=Ae.geometry,He=V===null?Ae.material:V,Ue=Ae.group;De.layers.test(W.layers)&&Wh(De,O,W,Pe,He,Ue)}}function Wh(E,O,W,V,j,Se){E.onBeforeRender(g,O,W,V,j,Se),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),j.onBeforeRender(g,O,W,V,E,Se),j.transparent===!0&&j.side===2?(j.side=1,j.needsUpdate=!0,g.renderBufferDirect(W,O,V,j,E,Se),j.side=0,j.needsUpdate=!0,g.renderBufferDirect(W,O,V,j,E,Se),j.side=2):g.renderBufferDirect(W,O,V,j,E,Se),E.onAfterRender(g,O,W,V,j,Se)}function Os(E,O,W){O.isScene!==!0&&(O=Ce);const V=k.get(E),j=d.state.lights,Se=d.state.shadowsArray,Ae=j.state.version,De=Le.getParameters(E,j.state,Se,O,W),Pe=Le.getProgramCacheKey(De);let He=V.programs;V.environment=E.isMeshStandardMaterial?O.environment:null,V.fog=O.fog,V.envMap=(E.isMeshStandardMaterial?ue:ie).get(E.envMap||V.environment),He===void 0&&(E.addEventListener("dispose",ae),He=new Map,V.programs=He);let Ue=He.get(Pe);if(Ue!==void 0){if(V.currentProgram===Ue&&V.lightsStateVersion===Ae)return Fo(E,De),Ue}else De.uniforms=Le.getUniforms(E),E.onBuild(W,De,g),E.onBeforeCompile(De,g),Ue=Le.acquireProgram(De,Pe),He.set(Pe,Ue),V.uniforms=De.uniforms;const Oe=V.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Oe.clippingPlanes=X.uniform),Fo(E,De),V.needsLights=Yh(E),V.lightsStateVersion=Ae,V.needsLights&&(Oe.ambientLightColor.value=j.state.ambient,Oe.lightProbe.value=j.state.probe,Oe.directionalLights.value=j.state.directional,Oe.directionalLightShadows.value=j.state.directionalShadow,Oe.spotLights.value=j.state.spot,Oe.spotLightShadows.value=j.state.spotShadow,Oe.rectAreaLights.value=j.state.rectArea,Oe.ltc_1.value=j.state.rectAreaLTC1,Oe.ltc_2.value=j.state.rectAreaLTC2,Oe.pointLights.value=j.state.point,Oe.pointLightShadows.value=j.state.pointShadow,Oe.hemisphereLights.value=j.state.hemi,Oe.directionalShadowMap.value=j.state.directionalShadowMap,Oe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Oe.spotShadowMap.value=j.state.spotShadowMap,Oe.spotShadowMatrix.value=j.state.spotShadowMatrix,Oe.pointShadowMap.value=j.state.pointShadowMap,Oe.pointShadowMatrix.value=j.state.pointShadowMatrix);const tt=Ue.getUniforms(),qi=Ni.seqWithValue(tt.seq,Oe);return V.currentProgram=Ue,V.uniformsList=qi,Ue}function Fo(E,O){const W=k.get(E);W.outputEncoding=O.outputEncoding,W.instancing=O.instancing,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Xh(E,O,W,V,j){O.isScene!==!0&&(O=Ce),$.resetTextureUnits();const Se=O.fog,Ae=V.isMeshStandardMaterial?O.environment:null,De=b===null?g.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:3e3,Pe=(V.isMeshStandardMaterial?ue:ie).get(V.envMap||Ae),He=V.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ue=!!V.normalMap&&!!W.attributes.tangent,Oe=!!W.morphAttributes.position,tt=!!W.morphAttributes.normal,qi=!!W.morphAttributes.color,dn=V.toneMapped?g.toneMapping:0,fn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ti=fn!==void 0?fn.length:0,Ge=k.get(V),pn=d.state.lights;if(B===!0&&(q===!0||E!==y)){const Yt=E===y&&V.id===v;X.setState(V,E,Yt)}let nt=!1;V.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==pn.state.version||Ge.outputEncoding!==De||j.isInstancedMesh&&Ge.instancing===!1||!j.isInstancedMesh&&Ge.instancing===!0||j.isSkinnedMesh&&Ge.skinning===!1||!j.isSkinnedMesh&&Ge.skinning===!0||Ge.envMap!==Pe||V.fog&&Ge.fog!==Se||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==X.numPlanes||Ge.numIntersection!==X.numIntersection)||Ge.vertexAlphas!==He||Ge.vertexTangents!==Ue||Ge.morphTargets!==Oe||Ge.morphNormals!==tt||Ge.morphColors!==qi||Ge.toneMapping!==dn||de.isWebGL2===!0&&Ge.morphTargetsCount!==ti)&&(nt=!0):(nt=!0,Ge.__version=V.version);let ii=Ge.currentProgram;nt===!0&&(ii=Os(V,O,j));let Si=!1,tr=!1,zs=!1;const _t=ii.getUniforms(),ir=Ge.uniforms;if(fe.useProgram(ii.program)&&(Si=!0,tr=!0,zs=!0),V.id!==v&&(v=V.id,tr=!0),Si||y!==E){if(_t.setValue(F,"projectionMatrix",E.projectionMatrix),de.logarithmicDepthBuffer&&_t.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),y!==E&&(y=E,tr=!0,zs=!0),V.isShaderMaterial||V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshStandardMaterial||V.envMap){const Yt=_t.map.cameraPosition;Yt!==void 0&&Yt.setValue(F,he.setFromMatrixPosition(E.matrixWorld))}(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&_t.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial||V.isShadowMaterial||j.isSkinnedMesh)&&_t.setValue(F,"viewMatrix",E.matrixWorldInverse)}if(j.isSkinnedMesh){_t.setOptional(F,j,"bindMatrix"),_t.setOptional(F,j,"bindMatrixInverse");const Yt=j.skeleton;Yt&&(de.floatVertexTextures?(Yt.boneTexture===null&&Yt.computeBoneTexture(),_t.setValue(F,"boneTexture",Yt.boneTexture,$),_t.setValue(F,"boneTextureSize",Yt.boneTextureSize)):_t.setOptional(F,Yt,"boneMatrices"))}const Gs=W.morphAttributes;return(Gs.position!==void 0||Gs.normal!==void 0||Gs.color!==void 0&&de.isWebGL2===!0)&&le.update(j,W,V,ii),(tr||Ge.receiveShadow!==j.receiveShadow)&&(Ge.receiveShadow=j.receiveShadow,_t.setValue(F,"receiveShadow",j.receiveShadow)),tr&&(_t.setValue(F,"toneMappingExposure",g.toneMappingExposure),Ge.needsLights&&qh(ir,zs),Se&&V.fog&&Je.refreshFogUniforms(ir,Se),Je.refreshMaterialUniforms(ir,V,M,U,K),Ni.upload(F,Ge.uniformsList,ir,$)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ni.upload(F,Ge.uniformsList,ir,$),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&_t.setValue(F,"center",j.center),_t.setValue(F,"modelViewMatrix",j.modelViewMatrix),_t.setValue(F,"normalMatrix",j.normalMatrix),_t.setValue(F,"modelMatrix",j.matrixWorld),ii}function qh(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function Yh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return p},this.getActiveMipmapLevel=function(){return m},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,O,W){k.get(E.texture).__webglTexture=O,k.get(E.depthTexture).__webglTexture=W;const V=k.get(E);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=W===void 0,V.__autoAllocateDepthBuffer||Re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,O){const W=k.get(E);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,W=0){b=E,p=O,m=W;let V=!0;if(E){const Pe=k.get(E);Pe.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(F.FRAMEBUFFER,null),V=!1):Pe.__webglFramebuffer===void 0?$.setupRenderTarget(E):Pe.__hasExternalTextures&&$.rebindTextures(E,k.get(E.texture).__webglTexture,k.get(E.depthTexture).__webglTexture)}let j=null,Se=!1,Ae=!1;if(E){const Pe=E.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture)&&(Ae=!0);const He=k.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(j=He[O],Se=!0):de.isWebGL2&&E.samples>0&&$.useMultisampledRTT(E)===!1?j=k.get(E).__webglMultisampledFramebuffer:j=He,w.copy(E.viewport),R.copy(E.scissor),P=E.scissorTest}else w.copy(I).multiplyScalar(M).floor(),R.copy(z).multiplyScalar(M).floor(),P=N;if(fe.bindFramebuffer(F.FRAMEBUFFER,j)&&de.drawBuffers&&V&&fe.drawBuffers(E,j),fe.viewport(w),fe.scissor(R),fe.setScissorTest(P),Se){const Pe=k.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,Pe.__webglTexture,W)}else if(Ae){const Pe=k.get(E.texture),He=O||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pe.__webglTexture,W||0,He)}v=-1},this.readRenderTargetPixels=function(E,O,W,V,j,Se,Ae){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=k.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(De=De[Ae]),De){fe.bindFramebuffer(F.FRAMEBUFFER,De);try{const Pe=E.texture,He=Pe.format,Ue=Pe.type;if(He!==1023&&be.convert(He)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=Ue===1016&&(Re.has("EXT_color_buffer_half_float")||de.isWebGL2&&Re.has("EXT_color_buffer_float"));if(Ue!==1009&&be.convert(Ue)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ue===1015&&(de.isWebGL2||Re.has("OES_texture_float")||Re.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F.checkFramebufferStatus(F.FRAMEBUFFER)===F.FRAMEBUFFER_COMPLETE?O>=0&&O<=E.width-V&&W>=0&&W<=E.height-j&&F.readPixels(O,W,V,j,be.convert(He),be.convert(Ue),Se):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{const Pe=b!==null?k.get(b).__webglFramebuffer:null;fe.bindFramebuffer(F.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(E,O,W=0){if(O.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return}const V=Math.pow(2,-W),j=Math.floor(O.image.width*V),Se=Math.floor(O.image.height*V);$.setTexture2D(O,0),F.copyTexSubImage2D(F.TEXTURE_2D,W,0,0,E.x,E.y,j,Se),fe.unbindTexture()},this.copyTextureToTexture=function(E,O,W,V=0){const j=O.image.width,Se=O.image.height,Ae=be.convert(W.format),De=be.convert(W.type);$.setTexture2D(W,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment),O.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,V,E.x,E.y,j,Se,Ae,De,O.image.data):O.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,V,E.x,E.y,O.mipmaps[0].width,O.mipmaps[0].height,Ae,O.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,V,E.x,E.y,Ae,De,O.image),V===0&&W.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),fe.unbindTexture()},this.copyTextureToTexture3D=function(E,O,W,V,j=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Se=E.max.x-E.min.x+1,Ae=E.max.y-E.min.y+1,De=E.max.z-E.min.z+1,Pe=be.convert(V.format),He=be.convert(V.type);let Ue;if(V.isData3DTexture)$.setTexture3D(V,0),Ue=F.TEXTURE_3D;else if(V.isDataArrayTexture)$.setTexture2DArray(V,0),Ue=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,V.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,V.unpackAlignment);const Oe=F.getParameter(F.UNPACK_ROW_LENGTH),tt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),qi=F.getParameter(F.UNPACK_SKIP_PIXELS),dn=F.getParameter(F.UNPACK_SKIP_ROWS),fn=F.getParameter(F.UNPACK_SKIP_IMAGES),ti=W.isCompressedTexture?W.mipmaps[0]:W.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,ti.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ti.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,E.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,E.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,E.min.z),W.isDataTexture||W.isData3DTexture?F.texSubImage3D(Ue,j,O.x,O.y,O.z,Se,Ae,De,Pe,He,ti.data):W.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(Ue,j,O.x,O.y,O.z,Se,Ae,De,Pe,ti.data)):F.texSubImage3D(Ue,j,O.x,O.y,O.z,Se,Ae,De,Pe,He,ti),F.pixelStorei(F.UNPACK_ROW_LENGTH,Oe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,tt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,qi),F.pixelStorei(F.UNPACK_SKIP_ROWS,dn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,fn),j===0&&V.generateMipmaps&&F.generateMipmap(Ue),fe.unbindTexture()},this.initTexture=function(E){$.setTexture2D(E,0),fe.unbindTexture()},this.resetState=function(){p=0,m=0,b=null,fe.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Xe.prototype.isWebGLRenderer=!0;class Bm extends Xe{}Bm.prototype.isWebGL1Renderer=!0;class xc extends ke{constructor(){super();this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.autoUpdate=e.autoUpdate,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}}xc.prototype.isScene=!0;class Fr{constructor(e,t){this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}Fr.prototype.isInterleavedBuffer=!0;const it=new A;class Sr{constructor(e,t,i,n=!1){this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)it.x=this.getX(t),it.y=this.getY(t),it.z=this.getZ(t),it.applyMatrix4(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)it.x=this.getX(t),it.y=this.getY(t),it.z=this.getZ(t),it.applyNormalMatrix(e),this.setXYZ(t,it.x,it.y,it.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)it.x=this.getX(t),it.y=this.getY(t),it.z=this.getZ(t),it.transformDirection(e),this.setXYZ(t,it.x,it.y,it.z);return this}setX(e,t){return this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){return this.data.array[e*this.data.stride+this.offset]}getY(e){return this.data.array[e*this.data.stride+this.offset+1]}getZ(e){return this.data.array[e*this.data.stride+this.offset+2]}getW(e){return this.data.array[e*this.data.stride+this.offset+3]}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new at(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Sr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}Sr.prototype.isInterleavedBufferAttribute=!0;class so extends ot{constructor(e){super();this.type="SpriteMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this}}so.prototype.isSpriteMaterial=!0;let Cn;const ar=new A,Ln=new A,Pn=new A,Dn=new ee,or=new ee,yc=new xe,ns=new A,lr=new A,rs=new A,ml=new ee,ma=new ee,gl=new ee;class Um extends ke{constructor(e){super();if(this.type="Sprite",Cn===void 0){Cn=new $e;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Fr(t,5);Cn.setIndex([0,1,2,0,2,3]),Cn.setAttribute("position",new Sr(i,3,0,!1)),Cn.setAttribute("uv",new Sr(i,2,3,!1))}this.geometry=Cn,this.material=e!==void 0?e:new so,this.center=new ee(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ln.setFromMatrixScale(this.matrixWorld),yc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Pn.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ln.multiplyScalar(-Pn.z);const i=this.material.rotation;let n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));const a=this.center;ss(ns.set(-.5,-.5,0),Pn,a,Ln,n,s),ss(lr.set(.5,-.5,0),Pn,a,Ln,n,s),ss(rs.set(.5,.5,0),Pn,a,Ln,n,s),ml.set(0,0),ma.set(1,0),gl.set(1,1);let o=e.ray.intersectTriangle(ns,lr,rs,!1,ar);if(o===null&&(ss(lr.set(-.5,.5,0),Pn,a,Ln,n,s),ma.set(0,1),o=e.ray.intersectTriangle(ns,rs,lr,!1,ar),o===null))return;const l=e.ray.origin.distanceTo(ar);l<e.near||l>e.far||t.push({distance:l,point:ar.clone(),uv:st.getUV(ar,ns,lr,rs,ml,ma,gl,new ee),face:null,object:this})}copy(e){return super.copy(e),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}Um.prototype.isSprite=!0;function ss(r,e,t,i,n,s){Dn.subVectors(r,t).addScalar(.5).multiply(i),n!==void 0?(or.x=s*Dn.x-n*Dn.y,or.y=n*Dn.x+s*Dn.y):or.copy(Dn),r.copy(e),r.x+=or.x,r.y+=or.y,r.applyMatrix4(yc)}const _l=new A,xl=new We,yl=new We,Om=new A,vl=new xe;class vc extends At{constructor(e,t){super(e,t);this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new xe,this.bindMatrixInverse=new xe}copy(e){return super.copy(e),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new We,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.x=t.getX(i),e.y=t.getY(i),e.z=t.getZ(i),e.w=t.getW(i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const i=this.skeleton,n=this.geometry;xl.fromBufferAttribute(n.attributes.skinIndex,e),yl.fromBufferAttribute(n.attributes.skinWeight,e),_l.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=yl.getComponent(s);if(a!==0){const o=xl.getComponent(s);vl.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Om.copy(_l).applyMatrix4(vl),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}vc.prototype.isSkinnedMesh=!0;class zm extends ke{constructor(){super();this.type="Bone"}}zm.prototype.isBone=!0;class Gm extends dt{constructor(e=null,t=1,i=1,n,s,a,o,l,c=1003,h=1003,u,d){super(null,a,o,l,c,h,n,s,u,d);this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Gm.prototype.isDataTexture=!0;class Fa extends at{constructor(e,t,i,n=1){typeof i=="number"&&(n=i,i=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));super(e,t,i);this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}Fa.prototype.isInstancedBufferAttribute=!0;const Ml=new xe,Sl=new xe,as=[],cr=new At;class Hm extends At{constructor(e,t,i){super(e,t);this.instanceMatrix=new Fa(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1}copy(e){return super.copy(e),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,n=this.count;if(cr.geometry=this.geometry,cr.material=this.material,cr.material!==void 0)for(let s=0;s<n;s++){this.getMatrixAt(s,Ml),Sl.multiplyMatrices(i,Ml),cr.matrixWorld=Sl,cr.raycast(e,as);for(let a=0,o=as.length;a<o;a++){const l=as[a];l.instanceId=s,l.object=this,t.push(l)}as.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Fa(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}Hm.prototype.isInstancedMesh=!0;class Kn extends ot{constructor(e){super();this.type="LineBasicMaterial",this.color=new me(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this}}Kn.prototype.isLineBasicMaterial=!0;const bl=new A,El=new A,Tl=new xe,ga=new cn,os=new Zn;class ao extends ke{constructor(e=new $e,t=new Kn){super();this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)bl.fromBufferAttribute(t,n-1),El.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=bl.distanceTo(El);e.setAttribute("lineDistance",new ut(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),os.copy(i.boundingSphere),os.applyMatrix4(n),os.radius+=s,e.ray.intersectsSphere(os)===!1)return;Tl.copy(n).invert(),ga.copy(e.ray).applyMatrix4(Tl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new A,h=new A,u=new A,d=new A,f=this.isLineSegments?2:1;if(i.isBufferGeometry){const _=i.index,x=i.attributes.position;if(_!==null){const p=Math.max(0,a.start),m=Math.min(_.count,a.start+a.count);for(let b=p,v=m-1;b<v;b+=f){const y=_.getX(b),w=_.getX(b+1);if(c.fromBufferAttribute(x,y),h.fromBufferAttribute(x,w),ga.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(d);P<e.near||P>e.far||t.push({distance:P,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),m=Math.min(x.count,a.start+a.count);for(let b=p,v=m-1;b<v;b+=f){if(c.fromBufferAttribute(x,b),h.fromBufferAttribute(x,b+1),ga.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(d);w<e.near||w>e.far||t.push({distance:w,point:u.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}else i.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}ao.prototype.isLine=!0;const wl=new A,Al=new A;class oo extends ao{constructor(e,t){super(e,t);this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.isBufferGeometry)if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)wl.fromBufferAttribute(t,n),Al.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+wl.distanceTo(Al);e.setAttribute("lineDistance",new ut(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else e.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}oo.prototype.isLineSegments=!0;class Vm extends ao{constructor(e,t){super(e,t);this.type="LineLoop"}}Vm.prototype.isLineLoop=!0;class lo extends ot{constructor(e){super();this.type="PointsMaterial",this.color=new me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this}}lo.prototype.isPointsMaterial=!0;const Rl=new xe,Ia=new cn,ls=new Zn,cs=new A;class km extends ke{constructor(e=new $e,t=new lo){super();this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e){return super.copy(e),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ls.copy(i.boundingSphere),ls.applyMatrix4(n),ls.radius+=s,e.ray.intersectsSphere(ls)===!1)return;Rl.copy(n).invert(),Ia.copy(e.ray).applyMatrix4(Rl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o;if(i.isBufferGeometry){const c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let _=d,g=f;_<g;_++){const x=c.getX(_);cs.fromBufferAttribute(u,x),Cl(cs,x,l,n,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let _=d,g=f;_<g;_++)cs.fromBufferAttribute(u,_),Cl(cs,_,l,n,e,t,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const e=this.geometry;if(e.isBufferGeometry){const t=e.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}else{const t=e.morphTargets;t!==void 0&&t.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}km.prototype.isPoints=!0;function Cl(r,e,t,i,n,s,a){const o=Ia.distanceSqToPoint(r);if(o<t){const l=new A;Ia.closestPointToPoint(r,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Wm extends dt{constructor(e,t,i,n,s,a,o,l,c){super(e,t,i,n,s,a,o,l,c);this.minFilter=a!==void 0?a:1006,this.magFilter=s!==void 0?s:1006,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}Wm.prototype.isVideoTexture=!0;class Xm extends dt{constructor(e,t,i){super({width:e,height:t});this.format=i,this.magFilter=1003,this.minFilter=1003,this.generateMipmaps=!1,this.needsUpdate=!0}}Xm.prototype.isFramebufferTexture=!0;class qm extends dt{constructor(e,t,i,n,s,a,o,l,c,h,u,d){super(null,a,o,l,c,h,n,s,u,d);this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}qm.prototype.isCompressedTexture=!0;class Ym extends dt{constructor(e,t,i,n,s,a,o,l,c){super(e,t,i,n,s,a,o,l,c);this.needsUpdate=!0}}Ym.prototype.isCanvasTexture=!0;new A;new A;new A;new st;class Xt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,n=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let n=0;const s=i.length;let a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(s-1);const h=i[n],d=i[n+1]-h,f=(a-h)/d;return(n+f)/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);const a=this.getPoint(n),o=this.getPoint(s),l=t||(a.isVector2?new ee:new A);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new A,n=[],s=[],a=[],o=new A,l=new xe;for(let f=0;f<=e;f++){const _=f/e;n[f]=this.getTangentAt(_,new A)}s[0]=new A,a[0]=new A;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Nt(n[f-1].dot(n[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,_))}a[f].crossVectors(n[f],s[f])}if(t===!0){let f=Math.acos(Nt(s[0].dot(s[e]),-1,1));f/=e,n[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(n[_],f*_)),a[_].crossVectors(n[_],s[_])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Fs extends Xt{constructor(e=0,t=0,i=1,n=1,s=0,a=Math.PI*2,o=!1,l=0){super();this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const i=t||new ee,n=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(a?s=0:s=n),this.aClockwise===!0&&!a&&(s===n?s=-n:s=s-n);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}Fs.prototype.isEllipseCurve=!0;class Mc extends Fs{constructor(e,t,i,n,s,a){super(e,t,i,i,n,s,a);this.type="ArcCurve"}}Mc.prototype.isArcCurve=!0;function co(){let r=0,e=0,t=0,i=0;function n(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){n(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,n(a,o,d,f)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+i*o}}}const hs=new A,_a=new co,xa=new co,ya=new co;class Sc extends Xt{constructor(e=[],t=!1,i="centripetal",n=.5){super();this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new A){const i=t,n=this.points,s=n.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%s]:(hs.subVectors(n[0],n[1]).add(n[0]),c=hs);const u=n[o%s],d=n[(o+1)%s];if(this.closed||o+2<s?h=n[(o+2)%s]:(hs.subVectors(n[s-1],n[s-2]).add(n[s-1]),h=hs),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f);g<1e-4&&(g=1),_<1e-4&&(_=g),x<1e-4&&(x=g),_a.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,_,g,x),xa.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,_,g,x),ya.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,_,g,x)}else this.curveType==="catmullrom"&&(_a.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),xa.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ya.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(_a.calc(l),xa.calc(l),ya.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new A().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}Sc.prototype.isCatmullRomCurve3=!0;function Ll(r,e,t,i,n){const s=(i-e)*.5,a=(n-t)*.5,o=r*r,l=r*o;return(2*t-2*i+s+a)*l+(-3*t+3*i-2*s-a)*o+s*r+t}function jm(r,e){const t=1-r;return t*t*e}function Zm(r,e){return 2*(1-r)*r*e}function Jm(r,e){return r*r*e}function gr(r,e,t,i){return jm(r,e)+Zm(r,t)+Jm(r,i)}function Km(r,e){const t=1-r;return t*t*t*e}function $m(r,e){const t=1-r;return 3*t*t*r*e}function Qm(r,e){return 3*(1-r)*r*r*e}function eg(r,e){return r*r*r*e}function _r(r,e,t,i,n){return Km(r,e)+$m(r,t)+Qm(r,i)+eg(r,n)}class ho extends Xt{constructor(e=new ee,t=new ee,i=new ee,n=new ee){super();this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new ee){const i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(_r(e,n.x,s.x,a.x,o.x),_r(e,n.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}ho.prototype.isCubicBezierCurve=!0;class bc extends Xt{constructor(e=new A,t=new A,i=new A,n=new A){super();this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new A){const i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(_r(e,n.x,s.x,a.x,o.x),_r(e,n.y,s.y,a.y,o.y),_r(e,n.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}bc.prototype.isCubicBezierCurve3=!0;class Is extends Xt{constructor(e=new ee,t=new ee){super();this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ee){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const i=t||new ee;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Is.prototype.isLineCurve=!0;class tg extends Xt{constructor(e=new A,t=new A){super();this.type="LineCurve3",this.isLineCurve3=!0,this.v1=e,this.v2=t}getPoint(e,t=new A){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uo extends Xt{constructor(e=new ee,t=new ee,i=new ee){super();this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ee){const i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(gr(e,n.x,s.x,a.x),gr(e,n.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}uo.prototype.isQuadraticBezierCurve=!0;class Ec extends Xt{constructor(e=new A,t=new A,i=new A){super();this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new A){const i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(gr(e,n.x,s.x,a.x),gr(e,n.y,s.y,a.y),gr(e,n.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}Ec.prototype.isQuadraticBezierCurve3=!0;class fo extends Xt{constructor(e=[]){super();this.type="SplineCurve",this.points=e}getPoint(e,t=new ee){const i=t,n=this.points,s=(n.length-1)*e,a=Math.floor(s),o=s-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(Ll(o,l.x,c.x,h.x,u.x),Ll(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new ee().fromArray(n))}return this}}fo.prototype.isSplineCurve=!0;var Tc=Object.freeze(Object.defineProperty({__proto__:null,ArcCurve:Mc,CatmullRomCurve3:Sc,CubicBezierCurve:ho,CubicBezierCurve3:bc,EllipseCurve:Fs,LineCurve:Is,LineCurve3:tg,QuadraticBezierCurve:uo,QuadraticBezierCurve3:Ec,SplineCurve:fo},Symbol.toStringTag,{value:"Module"}));class ig extends Xt{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new Is(t,e))}getPoint(e,t){const i=e*this.getLength(),n=this.getCurveLengths();let s=0;for(;s<n.length;){if(n[s]>=i){const a=n[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let n=0,s=this.curves;n<s.length;n++){const a=s[n],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(new Tc[n.type]().fromJSON(n))}return this}}class Na extends ig{constructor(e){super();this.type="Path",this.currentPoint=new ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Is(this.currentPoint.clone(),new ee(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){const s=new uo(this.currentPoint.clone(),new ee(e,t),new ee(i,n));return this.curves.push(s),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,s,a){const o=new ho(this.currentPoint.clone(),new ee(e,t),new ee(i,n),new ee(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new fo(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,n,s,a),this}absarc(e,t,i,n,s,a){return this.absellipse(e,t,i,i,n,s,a),this}ellipse(e,t,i,n,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,n,s,a,o,l),this}absellipse(e,t,i,n,s,a,o,l){const c=new Fs(e,t,i,n,s,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Ir extends Na{constructor(e){super(e);this.uuid=ai(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(new Na().fromJSON(n))}return this}}const ng={triangulate:function(r,e,t=2){const i=e&&e.length,n=i?e[0]*t:r.length;let s=wc(r,0,n,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,u,d,f;if(i&&(s=lg(r,e,s,t)),r.length>80*t){o=c=r[0],l=h=r[1];for(let _=t;_<n;_+=t)u=r[_],d=r[_+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?1/f:0}return br(s,a,t,o,l,f),a}};function wc(r,e,t,i,n){let s,a;if(n===yg(r,e,t,i)>0)for(s=e;s<t;s+=i)a=Pl(s,r[s],r[s+1],a);else for(s=t-i;s>=e;s-=i)a=Pl(s,r[s],r[s+1],a);return a&&Ns(a,a.next)&&(Tr(a),a=a.next),a}function zi(r,e){if(!r)return r;e||(e=r);let t=r,i;do if(i=!1,!t.steiner&&(Ns(t,t.next)||et(t.prev,t,t.next)===0)){if(Tr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function br(r,e,t,i,n,s,a){if(!r)return;!a&&s&&fg(r,i,n,s);let o=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?sg(r,i,n,s):rg(r)){e.push(l.i/t),e.push(r.i/t),e.push(c.i/t),Tr(r),r=c.next,o=c.next;continue}if(r=c,r===o){a?a===1?(r=ag(zi(r),e,t),br(r,e,t,i,n,s,2)):a===2&&og(r,e,t,i,n,s):br(zi(r),e,t,i,n,s,1);break}}}function rg(r){const e=r.prev,t=r,i=r.next;if(et(e,t,i)>=0)return!1;let n=r.next.next;for(;n!==r.prev;){if(Nn(e.x,e.y,t.x,t.y,i.x,i.y,n.x,n.y)&&et(n.prev,n,n.next)>=0)return!1;n=n.next}return!0}function sg(r,e,t,i){const n=r.prev,s=r,a=r.next;if(et(n,s,a)>=0)return!1;const o=n.x<s.x?n.x<a.x?n.x:a.x:s.x<a.x?s.x:a.x,l=n.y<s.y?n.y<a.y?n.y:a.y:s.y<a.y?s.y:a.y,c=n.x>s.x?n.x>a.x?n.x:a.x:s.x>a.x?s.x:a.x,h=n.y>s.y?n.y>a.y?n.y:a.y:s.y>a.y?s.y:a.y,u=Ba(o,l,e,t,i),d=Ba(c,h,e,t,i);let f=r.prevZ,_=r.nextZ;for(;f&&f.z>=u&&_&&_.z<=d;){if(f!==r.prev&&f!==r.next&&Nn(n.x,n.y,s.x,s.y,a.x,a.y,f.x,f.y)&&et(f.prev,f,f.next)>=0||(f=f.prevZ,_!==r.prev&&_!==r.next&&Nn(n.x,n.y,s.x,s.y,a.x,a.y,_.x,_.y)&&et(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;f&&f.z>=u;){if(f!==r.prev&&f!==r.next&&Nn(n.x,n.y,s.x,s.y,a.x,a.y,f.x,f.y)&&et(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;_&&_.z<=d;){if(_!==r.prev&&_!==r.next&&Nn(n.x,n.y,s.x,s.y,a.x,a.y,_.x,_.y)&&et(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function ag(r,e,t){let i=r;do{const n=i.prev,s=i.next.next;!Ns(n,s)&&Ac(n,i,i.next,s)&&Er(n,s)&&Er(s,n)&&(e.push(n.i/t),e.push(i.i/t),e.push(s.i/t),Tr(i),Tr(i.next),i=r=s),i=i.next}while(i!==r);return zi(i)}function og(r,e,t,i,n,s){let a=r;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&gg(a,o)){let l=Rc(a,o);a=zi(a,a.next),l=zi(l,l.next),br(a,e,t,i,n,s),br(l,e,t,i,n,s);return}o=o.next}a=a.next}while(a!==r)}function lg(r,e,t,i){const n=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*i,l=s<a-1?e[s+1]*i:r.length,c=wc(r,o,l,i,!1),c===c.next&&(c.steiner=!0),n.push(mg(c));for(n.sort(cg),s=0;s<n.length;s++)hg(n[s],t),t=zi(t,t.next);return t}function cg(r,e){return r.x-e.x}function hg(r,e){if(e=ug(r,e),e){const t=Rc(e,r);zi(e,e.next),zi(t,t.next)}}function ug(r,e){let t=e;const i=r.x,n=r.y;let s=-1/0,a;do{if(n<=t.y&&n>=t.next.y&&t.next.y!==t.y){const d=t.x+(n-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>s){if(s=d,d===i){if(n===t.y)return t;if(n===t.next.y)return t.next}a=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!a)return null;if(i===s)return a;const o=a,l=a.x,c=a.y;let h=1/0,u;t=a;do i>=t.x&&t.x>=l&&i!==t.x&&Nn(n<c?i:s,n,l,c,n<c?s:i,n,t.x,t.y)&&(u=Math.abs(n-t.y)/(i-t.x),Er(t,r)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&dg(a,t)))&&(a=t,h=u)),t=t.next;while(t!==o);return a}function dg(r,e){return et(r.prev,r,e.prev)<0&&et(e.next,r,r.next)<0}function fg(r,e,t,i){let n=r;do n.z===null&&(n.z=Ba(n.x,n.y,e,t,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==r);n.prevZ.nextZ=null,n.prevZ=null,pg(n)}function pg(r){let e,t,i,n,s,a,o,l,c=1;do{for(t=r,r=null,s=null,a=0;t;){for(a++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(n=t,t=t.nextZ,o--):(n=i,i=i.nextZ,l--),s?s.nextZ=n:r=n,n.prevZ=s,s=n;t=i}s.nextZ=null,c*=2}while(a>1);return r}function Ba(r,e,t,i,n){return r=32767*(r-t)*n,e=32767*(e-i)*n,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function mg(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Nn(r,e,t,i,n,s,a,o){return(n-a)*(e-o)-(r-a)*(s-o)>=0&&(r-a)*(i-o)-(t-a)*(e-o)>=0&&(t-a)*(s-o)-(n-a)*(i-o)>=0}function gg(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!_g(r,e)&&(Er(r,e)&&Er(e,r)&&xg(r,e)&&(et(r.prev,r,e.prev)||et(r,e.prev,e))||Ns(r,e)&&et(r.prev,r,r.next)>0&&et(e.prev,e,e.next)>0)}function et(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Ns(r,e){return r.x===e.x&&r.y===e.y}function Ac(r,e,t,i){const n=ds(et(r,e,t)),s=ds(et(r,e,i)),a=ds(et(t,i,r)),o=ds(et(t,i,e));return!!(n!==s&&a!==o||n===0&&us(r,t,e)||s===0&&us(r,i,e)||a===0&&us(t,r,i)||o===0&&us(t,e,i))}function us(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function ds(r){return r>0?1:r<0?-1:0}function _g(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Ac(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Er(r,e){return et(r.prev,r,r.next)<0?et(r,e,r.next)>=0&&et(r,r.prev,e)>=0:et(r,e,r.prev)<0||et(r,r.next,e)<0}function xg(r,e){let t=r,i=!1;const n=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&n<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==r);return i}function Rc(r,e){const t=new Ua(r.i,r.x,r.y),i=new Ua(e.i,e.x,e.y),n=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=n,n.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Pl(r,e,t,i){const n=new Ua(r,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Tr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Ua(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function yg(r,e,t,i){let n=0;for(let s=e,a=t-i;s<t;s+=i)n+=(r[a]-r[s])*(r[s+1]+r[a+1]),a=s;return n}class Bi{static area(e){const t=e.length;let i=0;for(let n=t-1,s=0;s<t;n=s++)i+=e[n].x*e[s].y-e[s].x*e[n].y;return i*.5}static isClockWise(e){return Bi.area(e)<0}static triangulateShape(e,t){const i=[],n=[],s=[];Dl(e),Fl(i,e);let a=e.length;t.forEach(Dl);for(let l=0;l<t.length;l++)n.push(a),a+=t[l].length,Fl(i,t[l]);const o=ng.triangulate(i,n);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Dl(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function Fl(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class $n extends $e{constructor(e=new Ir([new ee(.5,.5),new ee(-.5,.5),new ee(-.5,-.5),new ee(.5,-.5)]),t={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,n=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new ut(n,3)),this.setAttribute("uv",new ut(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1;let u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:f-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,x=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,m=t.UVGenerator!==void 0?t.UVGenerator:vg;t.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=t.amount);let b,v=!1,y,w,R,P;p&&(b=p.getSpacedPoints(h),v=!0,d=!1,y=p.computeFrenetFrames(h,!1),w=new A,R=new A,P=new A),d||(x=0,f=0,_=0,g=0);const G=o.extractPoints(c);let U=G.shape;const M=G.holes;if(!Bi.isClockWise(U)){U=U.reverse();for(let k=0,$=M.length;k<$;k++){const ie=M[k];Bi.isClockWise(ie)&&(M[k]=ie.reverse())}}const D=Bi.triangulateShape(U,M),I=U;for(let k=0,$=M.length;k<$;k++){const ie=M[k];U=U.concat(ie)}function z(k,$,ie){return $||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().multiplyScalar(ie).add(k)}const N=U.length,H=D.length;function B(k,$,ie){let ue,se,Me;const ge=k.x-$.x,Le=k.y-$.y,Je=ie.x-k.x,T=ie.y-k.y,S=ge*ge+Le*Le,X=ge*T-Le*Je;if(Math.abs(X)>Number.EPSILON){const Z=Math.sqrt(S),ne=Math.sqrt(Je*Je+T*T),le=$.x-Le/Z,ye=$.y+ge/Z,Y=ie.x-T/ne,be=ie.y+Je/ne,Ee=((Y-le)*T-(be-ye)*Je)/(ge*T-Le*Je);ue=le+ge*Ee-k.x,se=ye+Le*Ee-k.y;const _e=ue*ue+se*se;if(_e<=2)return new ee(ue,se);Me=Math.sqrt(_e/2)}else{let Z=!1;ge>Number.EPSILON?Je>Number.EPSILON&&(Z=!0):ge<-Number.EPSILON?Je<-Number.EPSILON&&(Z=!0):Math.sign(Le)===Math.sign(T)&&(Z=!0),Z?(ue=-Le,se=ge,Me=Math.sqrt(S)):(ue=ge,se=Le,Me=Math.sqrt(S/2))}return new ee(ue/Me,se/Me)}const q=[];for(let k=0,$=I.length,ie=$-1,ue=k+1;k<$;k++,ie++,ue++)ie===$&&(ie=0),ue===$&&(ue=0),q[k]=B(I[k],I[ie],I[ue]);const K=[];let J,Q=q.concat();for(let k=0,$=M.length;k<$;k++){const ie=M[k];J=[];for(let ue=0,se=ie.length,Me=se-1,ge=ue+1;ue<se;ue++,Me++,ge++)Me===se&&(Me=0),ge===se&&(ge=0),J[ue]=B(ie[ue],ie[Me],ie[ge]);K.push(J),Q=Q.concat(J)}for(let k=0;k<x;k++){const $=k/x,ie=f*Math.cos($*Math.PI/2),ue=_*Math.sin($*Math.PI/2)+g;for(let se=0,Me=I.length;se<Me;se++){const ge=z(I[se],q[se],ue);ze(ge.x,ge.y,-ie)}for(let se=0,Me=M.length;se<Me;se++){const ge=M[se];J=K[se];for(let Le=0,Je=ge.length;Le<Je;Le++){const T=z(ge[Le],J[Le],ue);ze(T.x,T.y,-ie)}}}const he=_+g;for(let k=0;k<N;k++){const $=d?z(U[k],Q[k],he):U[k];v?(R.copy(y.normals[0]).multiplyScalar($.x),w.copy(y.binormals[0]).multiplyScalar($.y),P.copy(b[0]).add(R).add(w),ze(P.x,P.y,P.z)):ze($.x,$.y,0)}for(let k=1;k<=h;k++)for(let $=0;$<N;$++){const ie=d?z(U[$],Q[$],he):U[$];v?(R.copy(y.normals[k]).multiplyScalar(ie.x),w.copy(y.binormals[k]).multiplyScalar(ie.y),P.copy(b[k]).add(R).add(w),ze(P.x,P.y,P.z)):ze(ie.x,ie.y,u/h*k)}for(let k=x-1;k>=0;k--){const $=k/x,ie=f*Math.cos($*Math.PI/2),ue=_*Math.sin($*Math.PI/2)+g;for(let se=0,Me=I.length;se<Me;se++){const ge=z(I[se],q[se],ue);ze(ge.x,ge.y,u+ie)}for(let se=0,Me=M.length;se<Me;se++){const ge=M[se];J=K[se];for(let Le=0,Je=ge.length;Le<Je;Le++){const T=z(ge[Le],J[Le],ue);v?ze(T.x,T.y+b[h-1].y,b[h-1].x+ie):ze(T.x,T.y,u+ie)}}}Ce(),ve();function Ce(){const k=n.length/3;if(d){let $=0,ie=N*$;for(let ue=0;ue<H;ue++){const se=D[ue];Re(se[2]+ie,se[1]+ie,se[0]+ie)}$=h+x*2,ie=N*$;for(let ue=0;ue<H;ue++){const se=D[ue];Re(se[0]+ie,se[1]+ie,se[2]+ie)}}else{for(let $=0;$<H;$++){const ie=D[$];Re(ie[2],ie[1],ie[0])}for(let $=0;$<H;$++){const ie=D[$];Re(ie[0]+N*h,ie[1]+N*h,ie[2]+N*h)}}i.addGroup(k,n.length/3-k,0)}function ve(){const k=n.length/3;let $=0;F(I,$),$+=I.length;for(let ie=0,ue=M.length;ie<ue;ie++){const se=M[ie];F(se,$),$+=se.length}i.addGroup(k,n.length/3-k,1)}function F(k,$){let ie=k.length;for(;--ie>=0;){const ue=ie;let se=ie-1;se<0&&(se=k.length-1);for(let Me=0,ge=h+x*2;Me<ge;Me++){const Le=N*Me,Je=N*(Me+1),T=$+ue+Le,S=$+se+Le,X=$+se+Je,Z=$+ue+Je;de(T,S,X,Z)}}}function ze(k,$,ie){l.push(k),l.push($),l.push(ie)}function Re(k,$,ie){fe(k),fe($),fe(ie);const ue=n.length/3,se=m.generateTopUV(i,n,ue-3,ue-2,ue-1);Ie(se[0]),Ie(se[1]),Ie(se[2])}function de(k,$,ie,ue){fe(k),fe($),fe(ue),fe($),fe(ie),fe(ue);const se=n.length/3,Me=m.generateSideWallUV(i,n,se-6,se-3,se-2,se-1);Ie(Me[0]),Ie(Me[1]),Ie(Me[3]),Ie(Me[1]),Ie(Me[2]),Ie(Me[3])}function fe(k){n.push(l[k*3+0]),n.push(l[k*3+1]),n.push(l[k*3+2])}function Ie(k){s.push(k.x),s.push(k.y)}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Mg(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];i.push(o)}const n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new Tc[n.type]().fromJSON(n)),new $n(i,e.options)}}const vg={generateTopUV:function(r,e,t,i,n){const s=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[n*3],h=e[n*3+1];return[new ee(s,a),new ee(o,l),new ee(c,h)]},generateSideWallUV:function(r,e,t,i,n,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[n*3],f=e[n*3+1],_=e[n*3+2],g=e[s*3],x=e[s*3+1],p=e[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ee(a,1-l),new ee(c,1-u),new ee(d,1-_),new ee(g,1-p)]:[new ee(o,1-l),new ee(h,1-u),new ee(f,1-_),new ee(x,1-p)]}};function Mg(r,e,t){if(t.shapes=[],Array.isArray(r))for(let i=0,n=r.length;i<n;i++){const s=r[i];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class po extends $e{constructor(e=new Ir([new ee(0,.5),new ee(-.5,-.5),new ee(.5,-.5)]),t=12){super();this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],n=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new ut(n,3)),this.setAttribute("normal",new ut(s,3)),this.setAttribute("uv",new ut(a,2));function c(h){const u=n.length/3,d=h.extractPoints(t);let f=d.shape;const _=d.holes;Bi.isClockWise(f)===!1&&(f=f.reverse());for(let x=0,p=_.length;x<p;x++){const m=_[x];Bi.isClockWise(m)===!0&&(_[x]=m.reverse())}const g=Bi.triangulateShape(f,_);for(let x=0,p=_.length;x<p;x++){const m=_[x];f=f.concat(m)}for(let x=0,p=f.length;x<p;x++){const m=f[x];n.push(m.x,m.y,0),s.push(0,0,1),a.push(m.x,m.y)}for(let x=0,p=g.length;x<p;x++){const m=g[x],b=m[0]+u,v=m[1]+u,y=m[2]+u;i.push(b,v,y),l+=3}}}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Sg(t,e)}static fromJSON(e,t){const i=[];for(let n=0,s=e.shapes.length;n<s;n++){const a=t[e.shapes[n]];i.push(a)}return new po(i,e.curveSegments)}}function Sg(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,i=r.length;t<i;t++){const n=r[t];e.shapes.push(n.uuid)}else e.shapes.push(r.uuid);return e}class Cc extends ot{constructor(e){super();this.type="ShadowMaterial",this.color=new me(0),this.transparent=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this}}Cc.prototype.isShadowMaterial=!0;class Lc extends Kt{constructor(e){super(e);this.type="RawShaderMaterial"}}Lc.prototype.isRawShaderMaterial=!0;class mo extends ot{constructor(e){super();this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}mo.prototype.isMeshStandardMaterial=!0;class Pc extends mo{constructor(e){super();this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ee(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.sheenColor=new me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new me(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}Pc.prototype.isMeshPhysicalMaterial=!0;class Dc extends ot{constructor(e){super();this.type="MeshPhongMaterial",this.color=new me(16777215),this.specular=new me(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this}}Dc.prototype.isMeshPhongMaterial=!0;class Fc extends ot{constructor(e){super();this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new me(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Fc.prototype.isMeshToonMaterial=!0;class Ic extends ot{constructor(e){super();this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}Ic.prototype.isMeshNormalMaterial=!0;class Nc extends ot{constructor(e){super();this.type="MeshLambertMaterial",this.color=new me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this}}Nc.prototype.isMeshLambertMaterial=!0;class Bc extends ot{constructor(e){super();this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new me(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this}}Bc.prototype.isMeshMatcapMaterial=!0;class Uc extends Kn{constructor(e){super();this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}Uc.prototype.isLineDashedMaterial=!0;const bg={ShadowMaterial:Cc,SpriteMaterial:so,RawShaderMaterial:Lc,ShaderMaterial:Kt,PointsMaterial:lo,MeshPhysicalMaterial:Pc,MeshStandardMaterial:mo,MeshPhongMaterial:Dc,MeshToonMaterial:Fc,MeshNormalMaterial:Ic,MeshLambertMaterial:Nc,MeshDepthMaterial:no,MeshDistanceMaterial:ro,MeshBasicMaterial:Cs,MeshMatcapMaterial:Bc,LineDashedMaterial:Uc,LineBasicMaterial:Kn,Material:ot};ot.fromType=function(r){return new bg[r]};const Ke={arraySlice:function(r,e,t){return Ke.isTypedArray(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)},convertArray:function(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)},isTypedArray:function(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)},getKeyframeOrder:function(r){function e(n,s){return r[n]-r[s]}const t=r.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i},sortedArray:function(r,e,t){const i=r.length,n=new r.constructor(i);for(let s=0,a=0;a!==i;++s){const o=t[s]*e;for(let l=0;l!==e;++l)n[a++]=r[o+l]}return n},flattenJSON:function(r,e,t,i){let n=1,s=r[0];for(;s!==void 0&&s[i]===void 0;)s=r[n++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[n++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[n++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),t.push(a)),s=r[n++];while(s!==void 0)},subclip:function(r,e,t,i,n=30){const s=r.clone();s.name=e;const a=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],h=c.getValueSize(),u=[],d=[];for(let f=0;f<c.times.length;++f){const _=c.times[f]*n;if(!(_<t||_>=i)){u.push(c.times[f]);for(let g=0;g<h;++g)d.push(c.values[f*h+g])}}u.length!==0&&(c.times=Ke.convertArray(u,c.times.constructor),c.values=Ke.convertArray(d,c.values.constructor),a.push(c))}s.tracks=a;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s},makeClipAdditive:function(r,e=0,t=r,i=30){i<=0&&(i=30);const n=t.tracks.length,s=e/i;for(let a=0;a<n;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=r.tracks.find(function(p){return p.name===o.name&&p.ValueTypeName===l});if(c===void 0)continue;let h=0;const u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const _=o.times.length-1;let g;if(s<=o.times[0]){const p=h,m=u-h;g=Ke.arraySlice(o.values,p,m)}else if(s>=o.times[_]){const p=_*u+h,m=p+u-h;g=Ke.arraySlice(o.values,p,m)}else{const p=o.createInterpolant(),m=h,b=u-h;p.evaluate(s),g=Ke.arraySlice(p.resultBuffer,m,b)}l==="quaternion"&&new Rt().fromArray(g).normalize().conjugate().toArray(g);const x=c.times.length;for(let p=0;p<x;++p){const m=p*f+d;if(l==="quaternion")Rt.multiplyQuaternionsFlat(c.values,m,g,0,c.values,m);else{const b=f-d*2;for(let v=0;v<b;++v)c.values[m+v]-=g[v]}}}return r.blendMode=2501,r}};class Gi{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],s=t[i-1];e:{t:{let a;i:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.afterEnd_(i-1,e,s)}if(i===o)break;if(s=n,n=t[++i],e<n)break t}a=t.length;break i}if(!(e>=s)){const o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,n);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break t}a=i,i=0;break i}break e}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,e,n);if(n===void 0)return i=t.length,this._cachedIndex=i,this.afterEnd_(i-1,s,e)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}Gi.prototype.beforeStart_=Gi.prototype.copySampleValue_;Gi.prototype.afterEnd_=Gi.prototype.copySampleValue_;class Eg extends Gi{constructor(e,t,i,n){super(e,t,i,n);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,t,i){const n=this.parameterPositions;let s=e-2,a=e+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case 2401:s=e,o=2*t-i;break;case 2402:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case 2401:a=e,l=2*i-t;break;case 2402:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(i-t)/(n-t),g=_*_,x=g*_,p=-d*x+2*d*g-d*_,m=(1+d)*x+(-1.5-2*d)*g+(-.5+d)*_+1,b=(-1-f)*x+(1.5+f)*g+.5*_,v=f*x-f*g;for(let y=0;y!==o;++y)s[y]=p*a[h+y]+m*a[c+y]+b*a[l+y]+v*a[u+y];return s}}class Oc extends Gi{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}}class Tg extends Gi{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class ci{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ke.convertArray(t,this.TimeBufferType),this.values=Ke.convertArray(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ke.convertArray(e.times,Array),values:Ke.convertArray(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Tg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Oc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Eg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case 2300:t=this.InterpolantFactoryMethodDiscrete;break;case 2301:t=this.InterpolantFactoryMethodLinear;break;case 2302:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=Ke.arraySlice(i,s,a),this.values=Ke.arraySlice(this.values,s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&Ke.isTypedArray(n))for(let o=0,l=n.length;o!==l;++o){const c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=Ke.arraySlice(this.times),t=Ke.arraySlice(this.values),i=this.getValueSize(),n=this.getInterpolation()===2302,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(n)l=!0;else{const u=o*i,d=u-i,f=u+i;for(let _=0;_!==i;++_){const g=t[u+_];if(g!==t[d+_]||g!==t[f+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=Ke.arraySlice(e,0,a),this.values=Ke.arraySlice(t,0,a*i)):(this.times=e,this.values=t),this}clone(){const e=Ke.arraySlice(this.times,0),t=Ke.arraySlice(this.values,0),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}ci.prototype.TimeBufferType=Float32Array;ci.prototype.ValueBufferType=Float32Array;ci.prototype.DefaultInterpolation=2301;class Qn extends ci{}Qn.prototype.ValueTypeName="bool";Qn.prototype.ValueBufferType=Array;Qn.prototype.DefaultInterpolation=2300;Qn.prototype.InterpolantFactoryMethodLinear=void 0;Qn.prototype.InterpolantFactoryMethodSmooth=void 0;class zc extends ci{}zc.prototype.ValueTypeName="color";class _s extends ci{}_s.prototype.ValueTypeName="number";class wg extends Gi{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Rt.slerpFlat(s,0,a,c-o,a,c,l);return s}}class Nr extends ci{InterpolantFactoryMethodLinear(e){return new wg(this.times,this.values,this.getValueSize(),e)}}Nr.prototype.ValueTypeName="quaternion";Nr.prototype.DefaultInterpolation=2301;Nr.prototype.InterpolantFactoryMethodSmooth=void 0;class er extends ci{}er.prototype.ValueTypeName="string";er.prototype.ValueBufferType=Array;er.prototype.DefaultInterpolation=2300;er.prototype.InterpolantFactoryMethodLinear=void 0;er.prototype.InterpolantFactoryMethodSmooth=void 0;class xs extends ci{}xs.prototype.ValueTypeName="vector";class Il{constructor(e,t=-1,i,n=2500){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=ai(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(Rg(i[a]).scale(n));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=i.length;s!==a;++s)t.push(ci.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=Ke.getKeyframeOrder(l);l=Ke.sortedArray(l,1,h),c=Ke.sortedArray(c,1,h),!n&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new _s(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=n[u];d||(n[u]=d=[]),d.push(c)}}const a=[];for(const o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,f,_,g){if(f.length!==0){const x=[],p=[];Ke.flattenJSON(f,x,p,_),x.length!==0&&g.push(new u(d,x,p))}},n=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let g=0;g<d[_].morphTargets.length;g++)f[d[_].morphTargets[g]]=-1;for(const g in f){const x=[],p=[];for(let m=0;m!==d[_].morphTargets.length;++m){const b=d[_];x.push(b.time),p.push(b.morphTarget===g?1:0)}n.push(new _s(".morphTargetInfluence["+g+"]",x,p))}l=f.length*a}else{const f=".bones["+t[u].name+"]";i(xs,f+".position",d,"pos",n),i(Nr,f+".quaternion",d,"rot",n),i(xs,f+".scale",d,"scl",n)}}return n.length===0?null:new this(s,l,n,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ag(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return _s;case"vector":case"vector2":case"vector3":case"vector4":return xs;case"color":return zc;case"quaternion":return Nr;case"bool":case"boolean":return Qn;case"string":return er}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Rg(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Ag(r.type);if(r.times===void 0){const t=[],i=[];Ke.flattenJSON(r.keys,t,i,"value"),r.times=t,r.values=i}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Vn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Cg{constructor(e,t,i){const n=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],_=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}}const Lg=new Cg;class Wi{constructor(e){this.manager=e!==void 0?e:Lg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const mi={};class Pg extends Wi{constructor(e){super(e)}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Vn.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(mi[e]!==void 0){mi[e].push({onLoad:t,onProgress:i,onError:n});return}mi[e]=[],mi[e].push({onLoad:t,onProgress:i,onError:n});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;const h=mi[e],u=c.body.getReader(),d=c.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0;let g=0;const x=new ReadableStream({start(p){m();function m(){u.read().then(({done:b,value:v})=>{if(b)p.close();else{g+=v.byteLength;const y=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:f});for(let w=0,R=h.length;w<R;w++){const P=h[w];P.onProgress&&P.onProgress(y)}p.enqueue(v),m()}})}}});return new Response(x)}else throw Error(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{Vn.add(e,c);const h=mi[e];delete mi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=mi[e];if(h===void 0)throw this.manager.itemError(e),c;delete mi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Gc extends Wi{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Vn.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Mr("img");function l(){h(),Vn.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),n&&n(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Dg extends Wi{constructor(e){super(e)}load(e,t,i,n){const s=new Ls,a=new Gc(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(h){s.images[c]=h,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,n)}for(let c=0;c<e.length;++c)l(c);return s}}class Fg extends Wi{constructor(e){super(e)}load(e,t,i,n){const s=new dt,a=new Gc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}}class oi extends ke{constructor(e,t=1){super();this.type="Light",this.color=new me(e),this.intensity=t}dispose(){}copy(e){return super.copy(e),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}oi.prototype.isLight=!0;class Ig extends oi{constructor(e,t,i){super(e,i);this.type="HemisphereLight",this.position.copy(ke.DefaultUp),this.updateMatrix(),this.groundColor=new me(t)}copy(e){return oi.prototype.copy.call(this,e),this.groundColor.copy(e.groundColor),this}}Ig.prototype.isHemisphereLight=!0;const Nl=new xe,Bl=new A,Ul=new A;class go{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ee(512,512),this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ps,this._frameExtents=new ee(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Bl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bl),Ul.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ul),t.updateMatrixWorld(),Nl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(t.projectionMatrix),i.multiply(t.matrixWorldInverse)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Hc extends go{constructor(){super(new Et(50,1,.5,500));this.focus=1}updateMatrices(e){const t=this.camera,i=La*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||n!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=n,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}Hc.prototype.isSpotLightShadow=!0;class Ng extends oi{constructor(e,t,i=0,n=Math.PI/3,s=0,a=1){super(e,t);this.type="SpotLight",this.position.copy(ke.DefaultUp),this.updateMatrix(),this.target=new ke,this.distance=i,this.angle=n,this.penumbra=s,this.decay=a,this.shadow=new Hc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Ng.prototype.isSpotLight=!0;const Ol=new xe,hr=new A,va=new A;class Vc extends go{constructor(){super(new Et(90,1,.5,500));this._frameExtents=new ee(4,2),this._viewportCount=6,this._viewports=[new We(2,1,1,1),new We(0,1,1,1),new We(3,1,1,1),new We(1,1,1,1),new We(3,0,1,1),new We(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),hr.setFromMatrixPosition(e.matrixWorld),i.position.copy(hr),va.copy(i.position),va.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(va),i.updateMatrixWorld(),n.makeTranslation(-hr.x,-hr.y,-hr.z),Ol.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ol)}}Vc.prototype.isPointLightShadow=!0;class Bg extends oi{constructor(e,t,i=0,n=1){super(e,t);this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Vc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}Bg.prototype.isPointLight=!0;class kc extends go{constructor(){super(new to(-5,5,5,-5,.5,500))}}kc.prototype.isDirectionalLightShadow=!0;class Ug extends oi{constructor(e,t){super(e,t);this.type="DirectionalLight",this.position.copy(ke.DefaultUp),this.updateMatrix(),this.target=new ke,this.shadow=new kc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}Ug.prototype.isDirectionalLight=!0;class Og extends oi{constructor(e,t){super(e,t);this.type="AmbientLight"}}Og.prototype.isAmbientLight=!0;class zg extends oi{constructor(e,t,i=10,n=10){super(e,t);this.type="RectAreaLight",this.width=i,this.height=n}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}zg.prototype.isRectAreaLight=!0;class Wc{constructor(){this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new A)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const i=e.x,n=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*n),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*i),t.addScaledVector(a[4],1.092548*(i*n)),t.addScaledVector(a[5],1.092548*(n*s)),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],1.092548*(i*s)),t.addScaledVector(a[8],.546274*(i*i-n*n)),t}getIrradianceAt(e,t){const i=e.x,n=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*n),t.addScaledVector(a[2],2*.511664*s),t.addScaledVector(a[3],2*.511664*i),t.addScaledVector(a[4],2*.429043*i*n),t.addScaledVector(a[5],2*.429043*n*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],2*.429043*i*s),t.addScaledVector(a[8],.429043*(i*i-n*n)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const i=this.coefficients;for(let n=0;n<9;n++)i[n].fromArray(e,t+n*3);return this}toArray(e=[],t=0){const i=this.coefficients;for(let n=0;n<9;n++)i[n].toArray(e,t+n*3);return e}static getBasisAt(e,t){const i=e.x,n=e.y,s=e.z;t[0]=.282095,t[1]=.488603*n,t[2]=.488603*s,t[3]=.488603*i,t[4]=1.092548*i*n,t[5]=1.092548*n*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*i*s,t[8]=.546274*(i*i-n*n)}}Wc.prototype.isSphericalHarmonics3=!0;class _o extends oi{constructor(e=new Wc,t=1){super(void 0,t);this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}_o.prototype.isLightProbe=!0;class Gg{static decodeText(e){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(e);let t="";for(let i=0,n=e.length;i<n;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Hg extends $e{constructor(){super();this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const e=super.toJSON(this);return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}Hg.prototype.isInstancedBufferGeometry=!0;class Vg extends Wi{constructor(e){super(e);typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Vn.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Vn.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){n&&n(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}Vg.prototype.isImageBitmapLoader=!0;let fs;const kg={getContext:function(){return fs===void 0&&(fs=new(window.AudioContext||window.webkitAudioContext)),fs},setContext:function(r){fs=r}};class Wg extends Wi{constructor(e){super(e)}load(e,t,i,n){const s=this,a=new Pg(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{const l=o.slice(0);kg.getContext().decodeAudioData(l,function(h){t(h)})}catch(l){n?n(l):console.error(l),s.manager.itemError(e)}},i,n)}}class Xg extends _o{constructor(e,t,i=1){super(void 0,i);const n=new me().set(e),s=new me().set(t),a=new A(n.r,n.g,n.b),o=new A(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(a).add(o).multiplyScalar(l),this.sh.coefficients[1].copy(a).sub(o).multiplyScalar(c)}}Xg.prototype.isHemisphereLightProbe=!0;class qg extends _o{constructor(e,t=1){super(void 0,t);const i=new me().set(e);this.sh.coefficients[0].set(i.r,i.g,i.b).multiplyScalar(2*Math.sqrt(Math.PI))}}qg.prototype.isAmbientLightProbe=!0;class Yg extends ke{constructor(e){super();this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){if(this.detune=e,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class jg{constructor(e,t,i){this.binding=e,this.valueSize=i;let n,s,a;switch(t){case"quaternion":n=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,n=this.valueSize,s=e*n+n;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==n;++o)i[s+o]=i[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(i,s,0,o,n)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,n=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(i,n,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,n);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let s=i,a=n;s!==a;++s)t[s]=t[n+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,s){if(n>=.5)for(let a=0;a!==s;++a)e[t+a]=e[i+a]}_slerp(e,t,i,n){Rt.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,s){const a=this._workIndex*s;Rt.multiplyQuaternionsFlat(e,a,e,t,e,i),Rt.slerpFlat(e,t,e,t,e,a,n)}_lerp(e,t,i,n,s){const a=1-n;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*a+e[i+o]*n}}_lerpAdditive(e,t,i,n,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[i+a]*n}}}const xo="\\[\\]\\.:\\/",Zg=new RegExp("["+xo+"]","g"),yo="[^"+xo+"]",Jg="[^"+xo.replace("\\.","")+"]",Kg=/((?:WC+[\/:])*)/.source.replace("WC",yo),$g=/(WCOD+)?/.source.replace("WCOD",Jg),Qg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yo),e_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yo),t_=new RegExp("^"+Kg+$g+Qg+e_+"$"),i_=["material","materials","bones"];class n_{constructor(e,t,i){const n=i||Ve.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ve{constructor(e,t,i){this.path=t,this.parsedPath=i||Ve.parseTrackName(t),this.node=Ve.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Ve.Composite(e,t,i):new Ve(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Zg,"")}static parseTrackName(e){const t=t_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const s=i.nodeName.substring(n+1);i_.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let s=t.propertyIndex;if(e||(e=Ve.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[n];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(e.geometry.isBufferGeometry){if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ve.Composite=n_;Ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ve.prototype.GetterByBindingType=[Ve.prototype._getValue_direct,Ve.prototype._getValue_array,Ve.prototype._getValue_arrayElement,Ve.prototype._getValue_toArray];Ve.prototype.SetterByBindingTypeAndVersioning=[[Ve.prototype._setValue_direct,Ve.prototype._setValue_direct_setNeedsUpdate,Ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_array,Ve.prototype._setValue_array_setNeedsUpdate,Ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_arrayElement,Ve.prototype._setValue_arrayElement_setNeedsUpdate,Ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_fromArray,Ve.prototype._setValue_fromArray_setNeedsUpdate,Ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class r_{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;const s=t.tracks,a=s.length,o=new Array(a),l={endingStart:2400,endingEnd:2400};for(let c=0;c!==a;++c){const h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=2201,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const n=this._clip.duration,s=e._clip.duration,a=s/n,o=n/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const n=this._mixer,s=n.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=n._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+i,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*i;if(l<0||i===0)return;this._startTime=null,t=i*l}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case 2501:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case 2500:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(n,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;i!==null&&(t*=i.evaluate(e)[0],e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t))}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let n=this.time+e,s=this._loopCount;const a=i===2202;if(e===0)return s===-1?n:a&&(s&1)===1?t-n:n;if(i===2200){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),n>=t||n<0){const o=Math.floor(n/t);n-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=n;if(a&&(s&1)===1)return t-n}return n}_setEndings(e,t,i){const n=this._interpolantSettings;i?(n.endingStart=2401,n.endingEnd=2401):(e?n.endingStart=this.zeroSlopeAtStart?2401:2400:n.endingStart=2402,t?n.endingEnd=this.zeroSlopeAtEnd?2401:2400:n.endingEnd=2402)}_scheduleFading(e,t,i){const n=this._mixer,s=n.time;let a=this._weightInterpolant;a===null&&(a=n._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=i,this}}class s_ extends on{constructor(e){super();this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,n=e._clip.tracks,s=n.length,a=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=n[u],f=d.name;let _=h[f];if(_!==void 0)++_.referenceCount,a[u]=_;else{if(_=a[u],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,l,f));continue}const g=t&&t._propertyBindings[u].binding.parsedPath;_=new jg(Ve.create(i,f,g),d.ValueTypeName,d.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,l,f),a[u]=_}o[u].resultBuffer=_.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,n=e._clip.uuid,s=this._actionsByClip[n];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,n,i)}const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const n=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=n.length,n.push(e),a.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],n=e._cacheIndex;i._cacheIndex=n,t[n]=i,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,n=this._nActiveActions++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,n=--this._nActiveActions,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){const n=this._bindingsByRootAndName,s=this._bindings;let a=n[t];a===void 0&&(a={},n[t]=a),a[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,n=i.rootNode.uuid,s=i.path,a=this._bindingsByRootAndName,o=a[n],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[n]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,n=this._nActiveBindings++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,n=--this._nActiveBindings,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new Oc(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,n=--this._nActiveControlInterpolants,s=t[n];e.__cacheIndex=n,t[n]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){const n=t||this._root,s=n.uuid;let a=typeof e=="string"?Il.findByName(n,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(i===void 0&&(a!==null?i=a.blendMode:i=2500),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new r_(this,a,t,i);return this._bindAction(h,c),this._addInactiveAction(h,o,s),h}existingAction(e,t){const i=t||this._root,n=i.uuid,s=typeof e=="string"?Il.findByName(i,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[n]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,n=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(n,e,s,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,n=this._actionsByClip,s=n[i];if(s!==void 0){const a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const a in i){const o=i[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const n=this._bindingsByRootAndName,s=n[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}s_.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class a_ extends Fr{constructor(e,t,i=1){super(e,t);this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}a_.prototype.isInstancedInterleavedBuffer=!0;class Sx{constructor(e,t,i=0,n=1/0){this.ray=new cn(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new Ka,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Oa(e,this,i,t),i.sort(zl),i}intersectObjects(e,t=!0,i=[]){for(let n=0,s=e.length;n<s;n++)Oa(e[n],this,i,t);return i.sort(zl),i}}function zl(r,e){return r.distance-e.distance}function Oa(r,e,t,i){if(r.layers.test(e.layers)&&r.raycast(e,t),i===!0){const n=r.children;for(let s=0,a=n.length;s<a;s++)Oa(n[s],e,t,!0)}}const Li=new A,ps=new xe,Ma=new xe;class o_ extends oo{constructor(e){const t=Xc(e),i=new $e,n=[],s=[],a=new me(0,0,1),o=new me(0,1,0);for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(n.push(0,0,0),n.push(0,0,0),s.push(a.r,a.g,a.b),s.push(o.r,o.g,o.b))}i.setAttribute("position",new ut(n,3)),i.setAttribute("color",new ut(s,3));const l=new Kn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,l);this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,i=this.geometry,n=i.getAttribute("position");Ma.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<t.length;s++){const o=t[s];o.parent&&o.parent.isBone&&(ps.multiplyMatrices(Ma,o.matrixWorld),Li.setFromMatrixPosition(ps),n.setXYZ(a,Li.x,Li.y,Li.z),ps.multiplyMatrices(Ma,o.parent.matrixWorld),Li.setFromMatrixPosition(ps),n.setXYZ(a+1,Li.x,Li.y,Li.z),a+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}}function Xc(r){const e=[];r.isBone===!0&&e.push(r);for(let t=0;t<r.children.length;t++)e.push.apply(e,Xc(r.children[t]));return e}class l_ extends oo{constructor(e=10,t=10,i=4473924,n=8947848){i=new me(i),n=new me(n);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,f=0,_=-o;d<=t;d++,_+=a){l.push(-o,0,_,o,0,_),l.push(_,0,-o,_,0,o);const g=d===s?i:n;g.toArray(c,f),f+=3,g.toArray(c,f),f+=3,g.toArray(c,f),f+=3,g.toArray(c,f),f+=3}const h=new $e;h.setAttribute("position",new ut(l,3)),h.setAttribute("color",new ut(c,3));const u=new Kn({vertexColors:!0,toneMapped:!1});super(h,u);this.type="GridHelper"}}const c_=new Float32Array(1);new Int32Array(c_.buffer);Xt.create=function(r,e){return console.log("THREE.Curve.create() has been deprecated"),r.prototype=Object.create(Xt.prototype),r.prototype.constructor=r,r.prototype.getPoint=e,r};Na.prototype.fromPoints=function(r){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(r)};l_.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};o_.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Wi.prototype.extractUrlBase=function(r){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Gg.extractUrlBase(r)};Wi.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};$t.prototype.center=function(r){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(r)};$t.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};$t.prototype.isIntersectionBox=function(r){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};$t.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};$t.prototype.size=function(r){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(r)};hn.prototype.toVector3=function(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")};Zn.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Ps.prototype.setFromMatrix=function(r){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(r)};gt.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};gt.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};gt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};gt.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};gt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};gt.prototype.getInverse=function(r){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};xe.prototype.extractPosition=function(r){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(r)};xe.prototype.flattenToArrayOffset=function(r,e){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,e)};xe.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new A().setFromMatrixColumn(this,3)};xe.prototype.setRotationFromQuaternion=function(r){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(r)};xe.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};xe.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};xe.prototype.multiplyVector4=function(r){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};xe.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};xe.prototype.rotateAxis=function(r){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),r.transformDirection(this)};xe.prototype.crossVector=function(r){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};xe.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};xe.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};xe.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};xe.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};xe.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};xe.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};xe.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};xe.prototype.makeFrustum=function(r,e,t,i,n,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(r,e,i,t,n,s)};xe.prototype.getInverse=function(r){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};_i.prototype.isIntersectionLine=function(r){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(r)};Rt.prototype.multiplyVector3=function(r){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),r.applyQuaternion(this)};Rt.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};cn.prototype.isIntersectionBox=function(r){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};cn.prototype.isIntersectionPlane=function(r){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(r)};cn.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};st.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};st.prototype.barycoordFromPoint=function(r,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(r,e)};st.prototype.midpoint=function(r){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(r)};st.prototypenormal=function(r){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(r)};st.prototype.plane=function(r){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(r)};st.barycoordFromPoint=function(r,e,t,i,n){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),st.getBarycoord(r,e,t,i,n)};st.normal=function(r,e,t,i){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),st.getNormal(r,e,t,i)};Ir.prototype.extractAllPoints=function(r){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(r)};Ir.prototype.extrude=function(r){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new $n(this,r)};Ir.prototype.makeGeometry=function(r){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new po(this,r)};ee.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};ee.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};ee.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};A.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};A.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};A.prototype.getPositionFromMatrix=function(r){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(r)};A.prototype.getScaleFromMatrix=function(r){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(r)};A.prototype.getColumnFromMatrix=function(r,e){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(e,r)};A.prototype.applyProjection=function(r){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(r)};A.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};A.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};A.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};We.prototype.fromAttribute=function(r,e,t){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,e,t)};We.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};ke.prototype.getChildByName=function(r){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(r)};ke.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};ke.prototype.translate=function(r,e){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(e,r)};ke.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};ke.prototype.applyMatrix=function(r){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(ke.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(r){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=r}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});At.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(At.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),0},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});vc.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Et.prototype.setLens=function(r,e){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),e!==void 0&&(this.filmGauge=e),this.setFocalLength(r)};Object.defineProperties(oi.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(r){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=r}},shadowCameraLeft:{set:function(r){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=r}},shadowCameraRight:{set:function(r){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=r}},shadowCameraTop:{set:function(r){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=r}},shadowCameraBottom:{set:function(r){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=r}},shadowCameraNear:{set:function(r){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=r}},shadowCameraFar:{set:function(r){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=r}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(r){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=r}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(r){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=r}},shadowMapHeight:{set:function(r){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=r}}});Object.defineProperties(at.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===35048},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(35048)}}});at.prototype.setDynamic=function(r){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?35048:35044),this};at.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},at.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};$e.prototype.addIndex=function(r){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(r)};$e.prototype.addAttribute=function(r,e){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(e&&e.isBufferAttribute)&&!(e&&e.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(r,new at(arguments[1],arguments[2]))):r==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(e),this):this.setAttribute(r,e)};$e.prototype.addDrawCall=function(r,e,t){t!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(r,e)};$e.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};$e.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};$e.prototype.removeAttribute=function(r){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(r)};$e.prototype.applyMatrix=function(r){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties($e.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Fr.prototype.setDynamic=function(r){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?35048:35044),this};Fr.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};$n.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};$n.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};$n.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};xc.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(ot.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new me}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(r){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===1}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(r){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=r}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(Kt.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(r){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=r}}});Xe.prototype.clearTarget=function(r,e,t,i){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(r),this.clear(e,t,i)};Xe.prototype.animate=function(r){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(r)};Xe.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Xe.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Xe.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Xe.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Xe.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Xe.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Xe.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Xe.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Xe.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Xe.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Xe.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Xe.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Xe.prototype.enableScissorTest=function(r){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(r)};Xe.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Xe.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Xe.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Xe.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Xe.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Xe.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Xe.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Xe.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Xe.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Xe.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Xe.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=r}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=r}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(r){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=r===!0?3001:3e3}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}},gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});Object.defineProperties(mc.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Bt.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=r}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=r}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=r}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=r}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(r){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=r}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(r){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=r}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(r){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=r}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(r){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=r}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(r){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=r}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(r){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=r}}});Yg.prototype.load=function(r){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const e=this;return new Wg().load(r,function(i){e.setBuffer(i)}),this};Qa.prototype.updateCubeMap=function(r,e){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(r,e)};Qa.prototype.clear=function(r,e,t,i){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(r,e,t,i)};ln.crossOrigin=void 0;ln.loadTexture=function(r,e,t,i){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const n=new Fg;n.setCrossOrigin(this.crossOrigin);const s=n.load(r,t,void 0,i);return e&&(s.mapping=e),s};ln.loadTextureCube=function(r,e,t,i){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const n=new Dg;n.setCrossOrigin(this.crossOrigin);const s=n.load(r,t,void 0,i);return e&&(s.mapping=e),s};ln.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};ln.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Za}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Za);function gi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function qc(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.9.1
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ut={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},kn={duration:.5,overwrite:!1,delay:0},vo,Vt=1e8,je=1/Vt,za=Math.PI*2,h_=za/4,u_=0,Yc=Math.sqrt,d_=Math.cos,f_=Math.sin,ft=function(e){return typeof e=="string"},ht=function(e){return typeof e=="function"},vi=function(e){return typeof e=="number"},Mo=function(e){return typeof e=="undefined"},Mi=function(e){return typeof e=="object"},Ct=function(e){return e!==!1},jc=function(){return typeof window!="undefined"},ms=function(e){return ht(e)||ft(e)},Zc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},vt=Array.isArray,Ga=/(?:-?\.?\d|\.)+/gi,Jc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Bn=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Sa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Kc=/[+-]=-?[.\d]+/,$c=/[^,'"\[\]\s]+/gi,p_=/[\d.+\-=]+(?:e[-+]\d*)*/i,Qe,ni,Ha,So,Ot={},ys={},Qc,eh=function(e){return(ys=Wn(e,Ot))&&li},bo=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},vs=function(e,t){return!t&&console.warn(e)},th=function(e,t){return e&&(Ot[e]=t)&&ys&&(ys[e]=t)||Ot},wr=function(){return 0},Eo={},Ui=[],Va={},ih,It={},ba={},Gl=30,gs=[],To="",wo=function(e){var t=e[0],i,n;if(Mi(t)||ht(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=gs.length;n--&&!gs[n].targetTest(t););i=gs[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new Eh(e[n],i)))||e.splice(n,1);return e},rn=function(e){return e._gsap||wo(kt(e))[0]._gsap},nh=function(e,t,i){return(i=e[t])&&ht(i)?e[t]():Mo(i)&&e.getAttribute&&e.getAttribute(t)||i},Lt=function(e,t){return(e=e.split(",")).forEach(t)||e},rt=function(e){return Math.round(e*1e5)/1e5||0},yt=function(e){return Math.round(e*1e7)/1e7||0},m_=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},Ms=function(){var e=Ui.length,t=Ui.slice(0),i,n;for(Va={},Ui.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},rh=function(e,t,i,n){Ui.length&&Ms(),e.render(t,i,n),Ui.length&&Ms()},sh=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match($c).length<2?t:ft(e)?e.trim():e},ah=function(e){return e},qt=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},g_=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},Wn=function(e,t){for(var i in t)e[i]=t[i];return e},Hl=function r(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Mi(t[i])?r(e[i]||(e[i]={}),t[i]):t[i]);return e},Ss=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},xr=function(e){var t=e.parent||Qe,i=e.keyframes?g_(vt(e.keyframes)):qt;if(Ct(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},__=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},x_=function(e,t,i,n,s){i===void 0&&(i="_first"),n===void 0&&(n="_last");var a=e[n],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=a,t.parent=t._dp=e,t},Bs=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var s=t._prev,a=t._next;s?s._next=a:e[i]===t&&(e[i]=a),a?a._prev=s:e[n]===t&&(e[n]=s),t._next=t._prev=t.parent=null},xi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},sn=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},y_=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},v_=function r(e){return!e||e._ts&&r(e.parent)},Vl=function(e){return e._repeat?Xn(e._tTime,e=e.duration()+e._rDelay)*e:0},Xn=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},bs=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Us=function(e){return e._end=yt(e._start+(e._tDur/Math.abs(e._ts||e._rts||je)||0))},oh=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=yt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Us(e),i._dirty||sn(i,e)),e},lh=function(e,t){var i;if((t._time||t._initted&&!t._dur)&&(i=bs(e.rawTime(),t),(!t._dur||Br(0,t.totalDuration(),i)-t._tTime>je)&&t.render(i,!0)),sn(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-je}},si=function(e,t,i,n){return t.parent&&xi(t),t._start=yt((vi(i)?i:i||e!==Qe?Gt(e,i,t):e._time)+t._delay),t._end=yt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),x_(e,t,"_first","_last",e._sort?"_start":0),ka(t)||(e._recent=t),n||lh(e,t),e},ch=function(e,t){return(Ot.ScrollTrigger||bo("scrollTrigger",t))&&Ot.ScrollTrigger.create(t,e)},hh=function(e,t,i,n){if(k_(e,t),!e._initted)return 1;if(!i&&e._pt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ih!==Ht.frame)return Ui.push(e),e._lazy=[t,n],1},M_=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},ka=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},S_=function(e,t,i,n){var s=e.ratio,a=t<0||!t&&(!e._start&&M_(e)&&!(!e._initted&&ka(e))||(e._ts<0||e._dp._ts<0)&&!ka(e))?0:1,o=e._rDelay,l=0,c,h,u;if(o&&e._repeat&&(l=Br(0,e._tDur,t),h=Xn(l,o),e._yoyo&&h&1&&(a=1-a),h!==Xn(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||n||e._zTime===je||!t&&e._zTime){if(!e._initted&&hh(e,t,n,i))return;for(u=e._zTime,e._zTime=t||(i?je:0),i||(i=t&&!u),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;e._startAt&&t<0&&e._startAt.render(t,!0,!0),e._onUpdate&&!i&&Wt(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Wt(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&xi(e,1),i||(Wt(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},b_=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},qn=function(e,t,i,n){var s=e._repeat,a=yt(t)||0,o=e._tTime/e._tDur;return o&&!n&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:yt(a*(s+1)+e._rDelay*s):a,o>0&&!n?oh(e,e._tTime=e._tDur*o):e.parent&&Us(e),i||sn(e.parent,e),e},kl=function(e){return e instanceof wt?sn(e):qn(e,e._dur)},E_={_start:0,endTime:wr,totalDuration:wr},Gt=function r(e,t,i){var n=e.labels,s=e._recent||E_,a=e.duration()>=Vt?s.endTime(!1):e._dur,o,l,c;return ft(t)&&(isNaN(t)||t in n)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:i).totalDuration()/100:1)):o<0?(t in n||(n[t]=a),n[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&i&&(l=l/100*(vt(i)?i[0]:i).totalDuration()),o>1?r(e,t.substr(0,o-1),i)+l:a+l)):t==null?a:+t},yr=function(e,t,i){var n=vi(t[1]),s=(n?2:1)+(e<2?0:1),a=t[s],o,l;if(n&&(a.duration=t[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Ct(l.vars.inherit)&&l.parent;a.immediateRender=Ct(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new ct(t[0],a,t[s+1])},Xi=function(e,t){return e||e===0?t(e):t},Br=function(e,t,i){return i<e?e:i>t?t:i},Tt=function(e,t){return!ft(e)||!(t=p_.exec(e))?"":e.substr(t.index+t[0].length)},T_=function(e,t,i){return Xi(i,function(n){return Br(e,t,n)})},Wa=[].slice,uh=function(e,t){return e&&Mi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Mi(e[0]))&&!e.nodeType&&e!==ni},w_=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var s;return ft(n)&&!t||uh(n,1)?(s=i).push.apply(s,kt(n)):i.push(n)})||i},kt=function(e,t,i){return ft(e)&&!i&&(Ha||!Yn())?Wa.call((t||So).querySelectorAll(e),0):vt(e)?w_(e,i):uh(e)?Wa.call(e,0):e?[e]:[]},A_=function(e){return e=kt(e)[0]||vs("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return kt(t,i.querySelectorAll?i:i===e?vs("Invalid scope")||So.createElement("div"):e)}},dh=function(e){return e.sort(function(){return .5-Math.random()})},fh=function(e){if(ht(e))return e;var t=Mi(e)?e:{each:e},i=an(t.ease),n=t.from||0,s=parseFloat(t.base)||0,a={},o=n>0&&n<1,l=isNaN(n)||o,c=t.axis,h=n,u=n;return ft(n)?h=u={center:.5,edges:.5,end:1}[n]||0:!o&&l&&(h=n[0],u=n[1]),function(d,f,_){var g=(_||t).length,x=a[g],p,m,b,v,y,w,R,P,G;if(!x){if(G=t.grid==="auto"?0:(t.grid||[1,Vt])[1],!G){for(R=-Vt;R<(R=_[G++].getBoundingClientRect().left)&&G<g;);G--}for(x=a[g]=[],p=l?Math.min(G,g)*h-.5:n%G,m=G===Vt?0:l?g*u/G-.5:n/G|0,R=0,P=Vt,w=0;w<g;w++)b=w%G-p,v=m-(w/G|0),x[w]=y=c?Math.abs(c==="y"?v:b):Yc(b*b+v*v),y>R&&(R=y),y<P&&(P=y);n==="random"&&dh(x),x.max=R-P,x.min=P,x.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(G>g?g-1:c?c==="y"?g/G:G:Math.max(G,g/G))||0)*(n==="edges"?-1:1),x.b=g<0?s-g:s,x.u=Tt(t.amount||t.each)||0,i=i&&g<0?Mh(i):i}return g=(x[d]-x.min)/x.max||0,yt(x.b+(i?i(g):g)*x.v)+x.u}},Xa=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=Math.round(parseFloat(i)/e)*e*t;return(n-n%1)/t+(vi(i)?0:Tt(i))}},ph=function(e,t){var i=vt(e),n,s;return!i&&Mi(e)&&(n=i=e.radius||Vt,e.values?(e=kt(e.values),(s=!vi(e[0]))&&(n*=n)):e=Xa(e.increment)),Xi(t,i?ht(e)?function(a){return s=e(a),Math.abs(s-a)<=n?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Vt,h=0,u=e.length,d,f;u--;)s?(d=e[u].x-o,f=e[u].y-l,d=d*d+f*f):d=Math.abs(e[u]-o),d<c&&(c=d,h=u);return h=!n||c<=n?e[h]:a,s||h===a||vi(a)?h:h+Tt(a)}:Xa(e))},mh=function(e,t,i,n){return Xi(vt(e)?!t:i===!0?!!(i=0):!n,function(){return vt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},R_=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(s,a){return a(s)},n)}},C_=function(e,t){return function(i){return e(parseFloat(i))+(t||Tt(i))}},L_=function(e,t,i){return _h(e,t,0,1,i)},gh=function(e,t,i){return Xi(i,function(n){return e[~~t(n)]})},P_=function r(e,t,i){var n=t-e;return vt(e)?gh(e,r(0,e.length),t):Xi(i,function(s){return(n+(s-e)%n)%n+e})},D_=function r(e,t,i){var n=t-e,s=n*2;return vt(e)?gh(e,r(0,e.length-1),t):Xi(i,function(a){return a=(s+(a-e)%s)%s||0,e+(a>n?s-a:a)})},Ar=function(e){for(var t=0,i="",n,s,a,o;~(n=e.indexOf("random(",t));)a=e.indexOf(")",n),o=e.charAt(n+7)==="[",s=e.substr(n+7,a-n-7).match(o?$c:Ga),i+=e.substr(t,n-t)+mh(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return i+e.substr(t,e.length-t)},_h=function(e,t,i,n,s){var a=t-e,o=n-i;return Xi(s,function(l){return i+((l-e)/a*o||0)})},F_=function r(e,t,i,n){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=ft(e),o={},l,c,h,u,d;if(i===!0&&(n=1)&&(i=null),a)e={p:e},t={p:t};else if(vt(e)&&!vt(t)){for(h=[],u=e.length,d=u-2,c=1;c<u;c++)h.push(r(e[c-1],e[c]));u--,s=function(_){_*=u;var g=Math.min(d,~~_);return h[g](_-g)},i=t}else n||(e=Wn(vt(e)?[]:{},e));if(!h){for(l in t)Ao.call(o,e,l,"get",t[l]);s=function(_){return Lo(_,o)||(a?e.p:e)}}}return Xi(i,s)},Wl=function(e,t,i){var n=e.labels,s=Vt,a,o,l;for(a in n)o=n[a]-t,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Wt=function(e,t,i){var n=e.vars,s=n[t],a,o;if(!!s)return a=n[t+"Params"],o=n.callbackScope||e,i&&Ui.length&&Ms(),a?s.apply(o,a):s.call(o)},pr=function(e){return xi(e),e.scrollTrigger&&e.scrollTrigger.kill(!1),e.progress()<1&&Wt(e,"onInterrupt"),e},Un,I_=function(e){e=!e.name&&e.default||e;var t=e.name,i=ht(e),n=t&&!i&&e.init?function(){this._props=[]}:e,s={init:wr,render:Lo,add:Ao,kill:J_,modifier:Z_,rawVars:0},a={targetTest:0,get:0,getSetter:Co,aliases:{},register:0};if(Yn(),e!==n){if(It[t])return;qt(n,qt(Ss(e,s),a)),Wn(n.prototype,Wn(s,Ss(e,a))),It[n.prop=t]=n,e.targetTest&&(gs.push(n),Eo[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}th(t,n),e.register&&e.register(li,n,Pt)},Ye=255,mr={aqua:[0,Ye,Ye],lime:[0,Ye,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ye],navy:[0,0,128],white:[Ye,Ye,Ye],olive:[128,128,0],yellow:[Ye,Ye,0],orange:[Ye,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ye,0,0],pink:[Ye,192,203],cyan:[0,Ye,Ye],transparent:[Ye,Ye,Ye,0]},Ea=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Ye+.5|0},xh=function(e,t,i){var n=e?vi(e)?[e>>16,e>>8&Ye,e&Ye]:0:mr.black,s,a,o,l,c,h,u,d,f,_;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),mr[e])n=mr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&Ye,n&Ye,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&Ye,e&Ye]}else if(e.substr(0,3)==="hsl"){if(n=_=e.match(Ga),!t)l=+n[0]%360/360,c=+n[1]/100,h=+n[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,n.length>3&&(n[3]*=1),n[0]=Ea(l+1/3,s,a),n[1]=Ea(l,s,a),n[2]=Ea(l-1/3,s,a);else if(~e.indexOf("="))return n=e.match(Jc),i&&n.length<4&&(n[3]=1),n}else n=e.match(Ga)||mr.transparent;n=n.map(Number)}return t&&!_&&(s=n[0]/Ye,a=n[1]/Ye,o=n[2]/Ye,u=Math.max(s,a,o),d=Math.min(s,a,o),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===s?(a-o)/f+(a<o?6:0):u===a?(o-s)/f+2:(s-a)/f+4,l*=60),n[0]=~~(l+.5),n[1]=~~(c*100+.5),n[2]=~~(h*100+.5)),i&&n.length<4&&(n[3]=1),n},yh=function(e){var t=[],i=[],n=-1;return e.split(Oi).forEach(function(s){var a=s.match(Bn)||[];t.push.apply(t,a),i.push(n+=a.length+1)}),t.c=i,t},Xl=function(e,t,i){var n="",s=(e+n).match(Oi),a=t?"hsla(":"rgba(",o=0,l,c,h,u;if(!s)return e;if(s=s.map(function(d){return(d=xh(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(h=yh(e),l=i.c,l.join(n)!==h.c.join(n)))for(c=e.replace(Oi,"1").split(Bn),u=c.length-1;o<u;o++)n+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:i).shift());if(!c)for(c=e.split(Oi),u=c.length-1;o<u;o++)n+=c[o]+s[o];return n+c[u]},Oi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in mr)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),N_=/hsl[a]?\(/,vh=function(e){var t=e.join(" "),i;if(Oi.lastIndex=0,Oi.test(t))return i=N_.test(t),e[1]=Xl(e[1],i),e[0]=Xl(e[0],i,yh(e[1])),!0},Es,Ht=function(){var r=Date.now,e=500,t=33,i=r(),n=i,s=1e3/240,a=s,o=[],l,c,h,u,d,f,_=function g(x){var p=r()-n,m=x===!0,b,v,y,w;if(p>e&&(i+=p-t),n+=p,y=n-i,b=y-a,(b>0||m)&&(w=++u.frame,d=y-u.time*1e3,u.time=y=y/1e3,a+=b+(b>=s?4:s-b),v=1),m||(l=c(g)),v)for(f=0;f<o.length;f++)o[f](y,d,w,x)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(x){return d/(1e3/(x||60))},wake:function(){Qc&&(!Ha&&jc()&&(ni=Ha=window,So=ni.document||{},Ot.gsap=li,(ni.gsapVersions||(ni.gsapVersions=[])).push(li.version),eh(ys||ni.GreenSockGlobals||!ni.gsap&&ni||{}),h=ni.requestAnimationFrame),l&&u.sleep(),c=h||function(x){return setTimeout(x,a-u.time*1e3+1|0)},Es=1,_(2))},sleep:function(){(h?ni.cancelAnimationFrame:clearTimeout)(l),Es=0,c=wr},lagSmoothing:function(x,p){e=x||1/je,t=Math.min(p,e,0)},fps:function(x){s=1e3/(x||240),a=u.time*1e3+s},add:function(x){o.indexOf(x)<0&&o.push(x),Yn()},remove:function(x,p){~(p=o.indexOf(x))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},u}(),Yn=function(){return!Es&&Ht.wake()},Ne={},B_=/^[\d.\-M][\d.\-,\s]/,U_=/["']/g,O_=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],s=1,a=i.length,o,l,c;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[n]=isNaN(c)?c.replace(U_,"").trim():+c,n=l.substr(o+1).trim();return t},z_=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},G_=function(e){var t=(e+"").split("("),i=Ne[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[O_(t[1])]:z_(e).split(",").map(sh)):Ne._CE&&B_.test(e)?Ne._CE("",e):i},Mh=function(e){return function(t){return 1-e(1-t)}},Sh=function r(e,t){for(var i=e._first,n;i;)i instanceof wt?r(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?r(i.timeline,t):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=t)),i=i._next},an=function(e,t){return e&&(ht(e)?e:Ne[e]||G_(e))||t},un=function(e,t,i,n){i===void 0&&(i=function(l){return 1-t(1-l)}),n===void 0&&(n=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:n},a;return Lt(e,function(o){Ne[o]=Ot[o]=s,Ne[a=o.toLowerCase()]=i;for(var l in s)Ne[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ne[o+"."+l]=s[l]}),s},bh=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ta=function r(e,t,i){var n=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),a=s/za*(Math.asin(1/n)||0),o=function(h){return h===1?1:n*Math.pow(2,-10*h)*f_((h-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:bh(o);return s=za/s,l.config=function(c,h){return r(e,c,h)},l},wa=function r(e,t){t===void 0&&(t=1.70158);var i=function(a){return a?--a*a*((t+1)*a+t)+1:0},n=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:bh(i);return n.config=function(s){return r(e,s)},n};Lt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;un(r+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Ne.Linear.easeNone=Ne.none=Ne.Linear.easeIn;un("Elastic",Ta("in"),Ta("out"),Ta());(function(r,e){var t=1/e,i=2*t,n=2.5*t,s=function(o){return o<t?r*o*o:o<i?r*Math.pow(o-1.5/e,2)+.75:o<n?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};un("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);un("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});un("Circ",function(r){return-(Yc(1-r*r)-1)});un("Sine",function(r){return r===1?1:-d_(r*h_)+1});un("Back",wa("in"),wa("out"),wa());Ne.SteppedEase=Ne.steps=Ot.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),s=t?1:0,a=1-je;return function(o){return((n*Br(0,a,o)|0)+s)*i}}};kn.ease=Ne["quad.out"];Lt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return To+=r+","+r+"Params,"});var Eh=function(e,t){this.id=u_++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:nh,this.set=t?t.getSetter:Co},Rr=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,qn(this,+t.duration,1,1),this.data=t.data,Es||Ht.wake()}var e=r.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,qn(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(Yn(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(oh(this,i),!s._dp||s.parent||lh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&si(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===je||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),rh(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Vl(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Vl(this),n):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(i,n){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,n):this._repeat?Xn(this._tTime,s)+1:1},e.timeScale=function(i){if(!arguments.length)return this._rts===-je?0:this._rts;if(this._rts===i)return this;var n=this.parent&&this._ts?bs(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-je?0:this._rts,y_(this.totalTime(Br(-this._delay,this._tDur,n),!0)),Us(this),this},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Yn(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==je&&(this._tTime-=je)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&si(n,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Ct(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?bs(n.rawTime(i),this):this._tTime:this._tTime},e.globalTime=function(i){for(var n=this,s=arguments.length?i:n.rawTime();n;)s=n._start+s/(n._ts||1),n=n._dp;return s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,kl(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,kl(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(Gt(this,i),Ct(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,Ct(n))},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-je:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-je,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=n&&s<this.endTime(!0)-je)},e.eventCallback=function(i,n,s){var a=this.vars;return arguments.length>1?(n?(a[i]=n,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=n)):delete a[i],this):a[i]},e.then=function(i){var n=this;return new Promise(function(s){var a=ht(i)?i:ah,o=function(){var c=n.then;n.then=null,ht(a)&&(a=a(n))&&(a.then||a===n)&&(n.then=c),s(a),n.then=c};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?o():n._prom=o})},e.kill=function(){pr(this)},r}();qt(Rr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-je,_prom:0,_ps:!1,_rts:1});var wt=function(r){qc(e,r);function e(i,n){var s;return i===void 0&&(i={}),s=r.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Ct(i.sortChildren),Qe&&si(i.parent||Qe,gi(s),n),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&ch(gi(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(n,s,a){return yr(0,arguments,this),this},t.from=function(n,s,a){return yr(1,arguments,this),this},t.fromTo=function(n,s,a,o){return yr(2,arguments,this),this},t.set=function(n,s,a){return s.duration=0,s.parent=this,xr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ct(n,s,Gt(this,a),1),this},t.call=function(n,s,a){return si(this,ct.delayedCall(0,n,s),a)},t.staggerTo=function(n,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new ct(n,a,Gt(this,l)),this},t.staggerFrom=function(n,s,a,o,l,c,h){return a.runBackwards=1,xr(a).immediateRender=Ct(a.immediateRender),this.staggerTo(n,s,a,o,l,c,h)},t.staggerFromTo=function(n,s,a,o,l,c,h,u){return o.startAt=a,xr(o).immediateRender=Ct(o.immediateRender),this.staggerTo(n,s,o,l,c,h,u)},t.render=function(n,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=n<=0?0:yt(n),u=this._zTime<0!=n<0&&(this._initted||!c),d,f,_,g,x,p,m,b,v,y,w,R;if(this!==Qe&&h>l&&n>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,n+=this._time-o),d=h,v=this._start,b=this._ts,p=!b,u&&(c||(o=this._zTime),(n||!s)&&(this._zTime=n)),this._repeat){if(w=this._yoyo,x=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(x*100+n,s,a);if(d=yt(h%x),h===l?(g=this._repeat,d=c):(g=~~(h/x),g&&g===h/x&&(d=c,g--),d>c&&(d=c)),y=Xn(this._tTime,x),!o&&this._tTime&&y!==g&&(y=g),w&&g&1&&(d=c-d,R=1),g!==y&&!this._lock){var P=w&&y&1,G=P===(w&&g&1);if(g<y&&(P=!P),o=P?0:c,this._lock=1,this.render(o||(R?0:yt(g*x)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Wt(this,"onRepeat"),this.vars.repeatRefresh&&!R&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,G&&(this._lock=2,o=P?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!R&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Sh(this,R)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(m=b_(this,yt(o),yt(d)),m&&(h-=d-(d=m._start))),this._tTime=h,this._time=d,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,o=0),!o&&d&&!s&&(Wt(this,"onStart"),this._tTime!==h))return this;if(d>=o&&n>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&m!==f){if(f.parent!==this)return this.render(n,s,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,a),d!==this._time||!this._ts&&!p){m=0,_&&(h+=this._zTime=-je);break}}f=_}else{f=this._last;for(var U=n<0?n:d;f;){if(_=f._prev,(f._act||U<=f._end)&&f._ts&&m!==f){if(f.parent!==this)return this.render(n,s,a);if(f.render(f._ts>0?(U-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(U-f._start)*f._ts,s,a),d!==this._time||!this._ts&&!p){m=0,_&&(h+=this._zTime=U?-je:je);break}}f=_}}if(m&&!s&&(this.pause(),m.render(d>=o?0:-je)._zTime=d>=o?1:-1,this._ts))return this._start=v,Us(this),this.render(n,s,a);this._onUpdate&&!s&&Wt(this,"onUpdate",!0),(h===l&&l>=this.totalDuration()||!h&&o)&&(v===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((n||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&xi(this,1),!s&&!(n<0&&!o)&&(h||o||!l)&&(Wt(this,h===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,s){var a=this;if(vi(s)||(s=Gt(this,s,n)),!(n instanceof Rr)){if(vt(n))return n.forEach(function(o){return a.add(o,s)}),this;if(ft(n))return this.addLabel(n,s);if(ht(n))n=ct.delayedCall(0,n);else return this}return this!==n?si(this,n,s):this},t.getChildren=function(n,s,a,o){n===void 0&&(n=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Vt);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof ct?s&&l.push(c):(a&&l.push(c),n&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(n){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===n)return s[a]},t.remove=function(n){return ft(n)?this.removeLabel(n):ht(n)?this.killTweensOf(n):(Bs(this,n),n===this._recent&&(this._recent=this._last),sn(this))},t.totalTime=function(n,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=yt(Ht.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),r.prototype.totalTime.call(this,n,s),this._forcing=0,this):this._tTime},t.addLabel=function(n,s){return this.labels[n]=Gt(this,s),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,s,a){var o=ct.delayedCall(0,s||wr,a);return o.data="isPause",this._hasPause=1,si(this,o,Gt(this,n))},t.removePause=function(n){var s=this._first;for(n=Gt(this,n);s;)s._start===n&&s.data==="isPause"&&xi(s),s=s._next},t.killTweensOf=function(n,s,a){for(var o=this.getTweensOf(n,a),l=o.length;l--;)Pi!==o[l]&&o[l].kill(n,s);return this},t.getTweensOf=function(n,s){for(var a=[],o=kt(n),l=this._first,c=vi(s),h;l;)l instanceof ct?m_(l._targets,o)&&(c?(!Pi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},t.tweenTo=function(n,s){s=s||{};var a=this,o=Gt(a,n),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,_=ct.to(a,qt({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||je,onStart:function(){if(a.pause(),!f){var x=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==x&&qn(_,x,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,u||[])}},s));return d?_.render(0):_},t.tweenFromTo=function(n,s,a){return this.tweenTo(s,qt({startAt:{time:Gt(this,n)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),Wl(this,Gt(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),Wl(this,Gt(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+je)},t.shiftChildren=function(n,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=n,o._end+=n),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=n);return sn(this)},t.invalidate=function(){var n=this._first;for(this._lock=0;n;)n.invalidate(),n=n._next;return r.prototype.invalidate.call(this)},t.clear=function(n){n===void 0&&(n=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),sn(this)},t.totalDuration=function(n){var s=0,a=this,o=a._last,l=Vt,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-n:n));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,si(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;qn(a,a===Qe&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(n){if(Qe._ts&&(rh(Qe,bs(n,Qe)),ih=Ht.frame),Ht.frame>=Gl){Gl+=Ut.autoSleep||120;var s=Qe._first;if((!s||!s._ts)&&Ut.autoSleep&&Ht._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ht.sleep()}}},e}(Rr);qt(wt.prototype,{_lock:0,_hasPause:0,_forcing:0});var H_=function(e,t,i,n,s,a,o){var l=new Pt(this._pt,e,t,0,1,Lh,null,s),c=0,h=0,u,d,f,_,g,x,p,m;for(l.b=i,l.e=n,i+="",n+="",(p=~n.indexOf("random("))&&(n=Ar(n)),a&&(m=[i,n],a(m,e,t),i=m[0],n=m[1]),d=i.match(Sa)||[];u=Sa.exec(n);)_=u[0],g=n.substring(c,u.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==d[h++]&&(x=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:x,c:_.charAt(1)==="="?parseFloat(_.substr(2))*(_.charAt(0)==="-"?-1:1):parseFloat(_)-x,m:f&&f<4?Math.round:0},c=Sa.lastIndex);return l.c=c<n.length?n.substring(c,n.length):"",l.fp=o,(Kc.test(n)||p)&&(l.e=0),this._pt=l,l},Ao=function(e,t,i,n,s,a,o,l,c){ht(n)&&(n=n(s||0,e,a));var h=e[t],u=i!=="get"?i:ht(h)?c?e[t.indexOf("set")||!ht(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=ht(h)?c?q_:Rh:Ro,f;if(ft(n)&&(~n.indexOf("random(")&&(n=Ar(n)),n.charAt(1)==="="&&(f=parseFloat(u)+parseFloat(n.substr(2))*(n.charAt(0)==="-"?-1:1)+(Tt(u)||0),(f||f===0)&&(n=f))),u!==n)return!isNaN(u*n)&&n!==""?(f=new Pt(this._pt,e,t,+u||0,n-(u||0),typeof h=="boolean"?j_:Ch,0,d),c&&(f.fp=c),o&&f.modifier(o,this,e),this._pt=f):(!h&&!(t in e)&&bo(t,n),H_.call(this,e,t,u,n,d,l||Ut.stringFilter,c))},V_=function(e,t,i,n,s){if(ht(e)&&(e=vr(e,s,t,i,n)),!Mi(e)||e.style&&e.nodeType||vt(e)||Zc(e))return ft(e)?vr(e,s,t,i,n):e;var a={},o;for(o in e)a[o]=vr(e[o],s,t,i,n);return a},Th=function(e,t,i,n,s,a){var o,l,c,h;if(It[e]&&(o=new It[e]).init(s,o.rawVars?t[e]:V_(t[e],n,s,a,i),i,n,a)!==!1&&(i._pt=l=new Pt(i._pt,s,e,0,1,o.render,o,0,o.priority),i!==Un))for(c=i._ptLookup[i._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Pi,k_=function r(e,t){var i=e.vars,n=i.ease,s=i.startAt,a=i.immediateRender,o=i.lazy,l=i.onUpdate,c=i.onUpdateParams,h=i.callbackScope,u=i.runBackwards,d=i.yoyoEase,f=i.keyframes,_=i.autoRevert,g=e._dur,x=e._startAt,p=e._targets,m=e.parent,b=m&&m.data==="nested"?m.parent._targets:p,v=e._overwrite==="auto"&&!vo,y=e.timeline,w,R,P,G,U,M,C,D,I,z,N,H,B;if(y&&(!f||!n)&&(n="none"),e._ease=an(n,kn.ease),e._yEase=d?Mh(an(d===!0?n:d,kn.ease)):0,d&&e._yoyo&&!e._repeat&&(d=e._yEase,e._yEase=e._ease,e._ease=d),e._from=!y&&!!i.runBackwards,!y||f&&!i.stagger){if(D=p[0]?rn(p[0]).harness:0,H=D&&i[D.prop],w=Ss(i,Eo),x&&xi(x.render(-1,!0)),s)if(xi(e._startAt=ct.set(p,qt({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:Ct(o),startAt:null,delay:0,onUpdate:l,onUpdateParams:c,callbackScope:h,stagger:0},s))),t<0&&!a&&!_&&e._startAt.render(-1,!0),a){if(t>0&&!_&&(e._startAt=0),g&&t<=0){t&&(e._zTime=t);return}}else _===!1&&(e._startAt=0);else if(u&&g){if(x)!_&&(e._startAt=0);else if(t&&(a=!1),P=qt({overwrite:!1,data:"isFromStart",lazy:a&&Ct(o),immediateRender:a,stagger:0,parent:m},w),H&&(P[D.prop]=H),xi(e._startAt=ct.set(p,P)),t<0&&e._startAt.render(-1,!0),e._zTime=t,!a)r(e._startAt,je);else if(!t)return}for(e._pt=0,o=g&&Ct(o)||o&&!g,R=0;R<p.length;R++){if(U=p[R],C=U._gsap||wo(p)[R]._gsap,e._ptLookup[R]=z={},Va[C.id]&&Ui.length&&Ms(),N=b===p?R:b.indexOf(U),D&&(I=new D).init(U,H||w,e,N,b)!==!1&&(e._pt=G=new Pt(e._pt,U,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(q){z[q]=G}),I.priority&&(M=1)),!D||H)for(P in w)It[P]&&(I=Th(P,w,e,N,U,b))?I.priority&&(M=1):z[P]=G=Ao.call(e,U,P,"get",w[P],N,b,0,i.stringFilter);e._op&&e._op[R]&&e.kill(U,e._op[R]),v&&e._pt&&(Pi=e,Qe.killTweensOf(U,z,e.globalTime(t)),B=!e.parent,Pi=0),e._pt&&o&&(Va[C.id]=1)}M&&Ph(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!B,f&&t<=0&&y.render(Vt,!0,!0)},W_=function(e,t){var i=e[0]?rn(e[0]).harness:0,n=i&&i.aliases,s,a,o,l;if(!n)return t;s=Wn({},t);for(a in n)if(a in s)for(l=n[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},X_=function(e,t,i,n){var s=t.ease||n||"power1.inOut",a,o;if(vt(t))o=i[e]||(i[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},vr=function(e,t,i,n,s){return ht(e)?e.call(t,i,n,s):ft(e)&&~e.indexOf("random(")?Ar(e):e},wh=To+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",Ah={};Lt(wh+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Ah[r]=1});var ct=function(r){qc(e,r);function e(i,n,s,a){var o;typeof n=="number"&&(s.duration=n,n=s,s=null),o=r.call(this,a?n:xr(n))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,x=l.scrollTrigger,p=l.yoyoEase,m=n.parent||Qe,b=(vt(i)||Zc(i)?vi(i[0]):"length"in n)?[i]:kt(i),v,y,w,R,P,G,U,M;if(o._targets=b.length?wo(b):vs("GSAP target "+i+" not found. https://greensock.com",!Ut.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,_||d||ms(c)||ms(h)){if(n=o.vars,v=o.timeline=new wt({data:"nested",defaults:g||{}}),v.kill(),v.parent=v._dp=gi(o),v._start=0,d||ms(c)||ms(h)){if(R=b.length,U=d&&fh(d),Mi(d))for(P in d)~wh.indexOf(P)&&(M||(M={}),M[P]=d[P]);for(y=0;y<R;y++)w=Ss(n,Ah),w.stagger=0,p&&(w.yoyoEase=p),M&&Wn(w,M),G=b[y],w.duration=+vr(c,gi(o),y,G,b),w.delay=(+vr(h,gi(o),y,G,b)||0)-o._delay,!d&&R===1&&w.delay&&(o._delay=h=w.delay,o._start+=h,w.delay=0),v.to(G,w,U?U(y,G,b):0),v._ease=Ne.none;v.duration()?c=h=0:o.timeline=0}else if(_){xr(qt(v.vars.defaults,{ease:"none"})),v._ease=an(_.ease||n.ease||"none");var C=0,D,I,z;if(vt(_))_.forEach(function(N){return v.to(b,N,">")});else{w={};for(P in _)P==="ease"||P==="easeEach"||X_(P,_[P],w,_.easeEach);for(P in w)for(D=w[P].sort(function(N,H){return N.t-H.t}),C=0,y=0;y<D.length;y++)I=D[y],z={ease:I.e,duration:(I.t-(y?D[y-1].t:0))/100*c},z[P]=I.v,v.to(b,z,C),C+=z.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return f===!0&&!vo&&(Pi=gi(o),Qe.killTweensOf(b),Pi=0),si(m,gi(o),s),n.reversed&&o.reverse(),n.paused&&o.paused(!0),(u||!c&&!_&&o._start===yt(m._time)&&Ct(u)&&v_(gi(o))&&m.data!=="nested")&&(o._tTime=-je,o.render(Math.max(0,-h))),x&&ch(gi(o),x),o}var t=e.prototype;return t.render=function(n,s,a){var o=this._time,l=this._tDur,c=this._dur,h=n>l-je&&n>=0?l:n<je?0:n,u,d,f,_,g,x,p,m,b;if(!c)S_(this,n,s,a);else if(h!==this._tTime||!n||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=n<0){if(u=h,m=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(_*100+n,s,a);if(u=yt(h%_),h===l?(f=this._repeat,u=c):(f=~~(h/_),f&&f===h/_&&(u=c,f--),u>c&&(u=c)),x=this._yoyo&&f&1,x&&(b=this._yEase,u=c-u),g=Xn(this._tTime,_),u===o&&!a&&this._initted)return this;f!==g&&(m&&this._yEase&&Sh(m,x),this.vars.repeatRefresh&&!x&&!this._lock&&(this._lock=a=1,this.render(yt(_*f),!0).invalidate()._lock=0))}if(!this._initted){if(hh(this,n<0?n:u,a,s))return this._tTime=0,this;if(c!==this._dur)return this.render(n,s,a)}if(this._tTime=h,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=p=(b||this._ease)(u/c),this._from&&(this.ratio=p=1-p),u&&!o&&!s&&(Wt(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(p,d.d),d=d._next;m&&m.render(n<0?n:!u&&x?-je:m._dur*m._ease(u/this._dur),s,a)||this._startAt&&(this._zTime=n),this._onUpdate&&!s&&(n<0&&this._startAt&&this._startAt.render(n,!0,a),Wt(this,"onUpdate")),this._repeat&&f!==g&&this.vars.onRepeat&&!s&&this.parent&&Wt(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(n<0&&this._startAt&&!this._onUpdate&&this._startAt.render(n,!0,!0),(n||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&xi(this,1),!s&&!(n<0&&!o)&&(h||o)&&(Wt(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),r.prototype.invalidate.call(this)},t.kill=function(n,s){if(s===void 0&&(s="all"),!n&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?pr(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(n,s,Pi&&Pi.vars.overwrite!==!0)._first||pr(this),this.parent&&a!==this.timeline.totalDuration()&&qn(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=n?kt(n):o,c=this._ptLookup,h=this._pt,u,d,f,_,g,x,p;if((!s||s==="all")&&__(o,l))return s==="all"&&(this._pt=0),pr(this);for(u=this._op=this._op||[],s!=="all"&&(ft(s)&&(g={},Lt(s,function(m){return g[m]=1}),s=g),s=W_(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){d=c[p],s==="all"?(u[p]=s,_=d,f={}):(f=u[p]=u[p]||{},_=s);for(g in _)x=d&&d[g],x&&((!("kill"in x.d)||x.d.kill(g)===!0)&&Bs(this,x,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&pr(this),this},e.to=function(n,s){return new e(n,s,arguments[2])},e.from=function(n,s){return yr(1,arguments)},e.delayedCall=function(n,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(n,s,a){return yr(2,arguments)},e.set=function(n,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(n,s)},e.killTweensOf=function(n,s,a){return Qe.killTweensOf(n,s,a)},e}(Rr);qt(ct.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Lt("staggerTo,staggerFrom,staggerFromTo",function(r){ct[r]=function(){var e=new wt,t=Wa.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Ro=function(e,t,i){return e[t]=i},Rh=function(e,t,i){return e[t](i)},q_=function(e,t,i,n){return e[t](n.fp,i)},Y_=function(e,t,i){return e.setAttribute(t,i)},Co=function(e,t){return ht(e[t])?Rh:Mo(e[t])&&e.setAttribute?Y_:Ro},Ch=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},j_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Lh=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},Lo=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},Z_=function(e,t,i,n){for(var s=this._pt,a;s;)a=s._next,s.p===n&&s.modifier(e,t,i),s=a},J_=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?Bs(this,t,"_pt"):t.dep||(i=1),t=n;return!i},K_=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},Ph=function(e){for(var t=e._pt,i,n,s,a;t;){for(i=t._next,n=s;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:a)?t._prev._next=t:s=t,(t._next=n)?n._prev=t:a=t,t=i}e._pt=s},Pt=function(){function r(t,i,n,s,a,o,l,c,h){this.t=i,this.s=s,this.c=a,this.p=n,this.r=o||Ch,this.d=l||this,this.set=c||Ro,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(i,n,s){this.mSet=this.mSet||this.set,this.set=K_,this.m=i,this.mt=s,this.tween=n},r}();Lt(To+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Eo[r]=1});Ot.TweenMax=Ot.TweenLite=ct;Ot.TimelineLite=Ot.TimelineMax=wt;Qe=new wt({sortChildren:!1,defaults:kn,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ut.stringFilter=vh;var Ts={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return I_(n)})},timeline:function(e){return new wt(e)},getTweensOf:function(e,t){return Qe.getTweensOf(e,t)},getProperty:function(e,t,i,n){ft(e)&&(e=kt(e)[0]);var s=rn(e||{}).get,a=i?ah:sh;return i==="native"&&(i=""),e&&(t?a((It[t]&&It[t].get||s)(e,t,i,n)):function(o,l,c){return a((It[o]&&It[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,i){if(e=kt(e),e.length>1){var n=e.map(function(h){return li.quickSetter(h,t,i)}),s=n.length;return function(h){for(var u=s;u--;)n[u](h)}}e=e[0]||{};var a=It[t],o=rn(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(h){var u=new a;Un._pt=0,u.init(e,i?h+i:h,Un,0,[e]),u.render(1,u),Un._pt&&Lo(1,Un)}:o.set(e,l);return a?c:function(h){return c(e,l,i?h+i:h,o,1)}},isTweening:function(e){return Qe.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=an(e.ease,kn.ease)),Hl(kn,e||{})},config:function(e){return Hl(Ut,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,s=e.defaults,a=e.extendTimeline;(n||"").split(",").forEach(function(o){return o&&!It[o]&&!Ot[o]&&vs(t+" effect requires "+o+" plugin.")}),ba[t]=function(o,l,c){return i(kt(o),qt(l||{},s),c)},a&&(wt.prototype[t]=function(o,l,c){return this.add(ba[t](o,Mi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ne[e]=an(t)},parseEase:function(e,t){return arguments.length?an(e,t):Ne},getById:function(e){return Qe.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new wt(e),n,s;for(i.smoothChildTiming=Ct(e.smoothChildTiming),Qe.remove(i),i._dp=0,i._time=i._tTime=Qe._time,n=Qe._first;n;)s=n._next,(t||!(!n._dur&&n instanceof ct&&n.vars.onComplete===n._targets[0]))&&si(i,n,n._start-n._delay),n=s;return si(Qe,i,0),i},utils:{wrap:P_,wrapYoyo:D_,distribute:fh,random:mh,snap:ph,normalize:L_,getUnit:Tt,clamp:T_,splitColor:xh,toArray:kt,selector:A_,mapRange:_h,pipe:R_,unitize:C_,interpolate:F_,shuffle:dh},install:eh,effects:ba,ticker:Ht,updateRoot:wt.updateRoot,plugins:It,globalTimeline:Qe,core:{PropTween:Pt,globals:th,Tween:ct,Timeline:wt,Animation:Rr,getCache:rn,_removeLinkedListItem:Bs,suppressOverwrites:function(e){return vo=e}}};Lt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ts[r]=ct[r]});Ht.add(wt.updateRoot);Un=Ts.to({},{duration:0});var $_=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},Q_=function(e,t){var i=e._targets,n,s,a;for(n in t)for(s=i.length;s--;)a=e._ptLookup[s][n],a&&(a=a.d)&&(a._pt&&(a=$_(a,n)),a&&a.modifier&&a.modifier(t[n],e,i[s],n))},Aa=function(e,t){return{name:e,rawVars:1,init:function(n,s,a){a._onInit=function(o){var l,c;if(ft(s)&&(l={},Lt(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Q_(o,s)}}}},li=Ts.registerPlugin({name:"attr",init:function(e,t,i,n,s){var a,o;for(a in t)o=this.add(e,"setAttribute",(e.getAttribute(a)||0)+"",t[a],n,s,0,0,a),o&&(o.op=a),this._props.push(a)}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i])}},Aa("roundProps",Xa),Aa("modifiers"),Aa("snap",ph))||Ts;ct.version=wt.version=li.version="3.9.1";Qc=1;jc()&&Yn();Ne.Power0;Ne.Power1;Ne.Power2;Ne.Power3;Ne.Power4;Ne.Linear;Ne.Quad;Ne.Cubic;Ne.Quart;Ne.Quint;Ne.Strong;Ne.Elastic;Ne.Back;Ne.SteppedEase;Ne.Bounce;Ne.Sine;Ne.Expo;Ne.Circ;/*!
 * CSSPlugin 3.9.1
 * https://greensock.com
 *
 * Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ql,Di,zn,Po,nn,Yl,ex=function(){return typeof window!="undefined"},Hi={},Qi=180/Math.PI,Gn=Math.PI/180,Fn=Math.atan2,jl=1e8,Dh=/([A-Z])/g,tx=/(?:left|right|width|margin|padding|x)/i,ix=/[\s,\(]\S/,Fi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Fh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},nx=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},rx=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},sx=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Ih=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Nh=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},ax=function(e,t,i){return e.style[t]=i},ox=function(e,t,i){return e.style.setProperty(t,i)},lx=function(e,t,i){return e._gsap[t]=i},cx=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},hx=function(e,t,i,n,s){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},ux=function(e,t,i,n,s){var a=e._gsap;a[t]=i,a.renderTransform(s,a)},mt="transform",Vi=mt+"Origin",Bh,qa=function(e,t){var i=Di.createElementNS?Di.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Di.createElement(e);return i.style?i:Di.createElement(e)},yi=function r(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(Dh,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&r(e,jn(t)||t,1)||""},Zl="O,Moz,ms,Ms,Webkit".split(","),jn=function(e,t,i){var n=t||nn,s=n.style,a=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Zl[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Zl[a]:"")+e},Ya=function(){ex()&&window.document&&(ql=window,Di=ql.document,zn=Di.documentElement,nn=qa("div")||{style:{}},qa("div"),mt=jn(mt),Vi=mt+"Origin",nn.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Bh=!!jn("perspective"),Po=1)},Ra=function r(e){var t=qa("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,s=this.style.cssText,a;if(zn.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),zn.removeChild(t),this.style.cssText=s,a},Jl=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Uh=function(e){var t;try{t=e.getBBox()}catch{t=Ra.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Ra||(t=Ra.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Jl(e,["x","cx","x1"])||0,y:+Jl(e,["y","cy","y1"])||0,width:0,height:0}:t},Oh=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Uh(e))},Cr=function(e,t){if(t){var i=e.style;t in Hi&&t!==Vi&&(t=mt),i.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(t.replace(Dh,"-$1").toLowerCase())):i.removeAttribute(t)}},Ii=function(e,t,i,n,s,a){var o=new Pt(e._pt,t,i,0,1,a?Nh:Ih);return e._pt=o,o.b=n,o.e=s,e._props.push(i),o},Kl={deg:1,rad:1,turn:1},ki=function r(e,t,i,n){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=nn.style,l=tx.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=n==="px",f=n==="%",_,g,x,p;return n===a||!s||Kl[n]||Kl[a]?s:(a!=="px"&&!d&&(s=r(e,t,i,"px")),p=e.getCTM&&Oh(e),(f||a==="%")&&(Hi[t]||~t.indexOf("adius"))?(_=p?e.getBBox()[l?"width":"height"]:e[h],rt(f?s/_*u:s/100*_)):(o[l?"width":"height"]=u+(d?a:n),g=~t.indexOf("adius")||n==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Di||!g.appendChild)&&(g=Di.body),x=g._gsap,x&&f&&x.width&&l&&x.time===Ht.time?rt(s/x.width*u):((f||a==="%")&&(o.position=yi(e,"position")),g===e&&(o.position="static"),g.appendChild(nn),_=nn[h],g.removeChild(nn),o.position="absolute",l&&f&&(x=rn(g),x.time=Ht.time,x.width=g[h]),rt(d?_*s/u:_&&s?u/_*s:0))))},en=function(e,t,i,n){var s;return Po||Ya(),t in Fi&&t!=="transform"&&(t=Fi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Hi[t]&&t!=="transform"?(s=Pr(e,n),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:As(yi(e,Vi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||n||~(s+"").indexOf("calc("))&&(s=ws[t]&&ws[t](e,t,i)||yi(e,t)||nh(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?ki(e,t,s,i)+i:s},dx=function(e,t,i,n){if(!i||i==="none"){var s=jn(t,e,1),a=s&&yi(e,s,1);a&&a!==i?(t=s,i=a):t==="borderColor"&&(i=yi(e,"borderTopColor"))}var o=new Pt(this._pt,e.style,t,0,1,Lh),l=0,c=0,h,u,d,f,_,g,x,p,m,b,v,y,w;if(o.b=i,o.e=n,i+="",n+="",n==="auto"&&(e.style[t]=n,n=yi(e,t)||n,e.style[t]=i),h=[i,n],vh(h),i=h[0],n=h[1],d=i.match(Bn)||[],w=n.match(Bn)||[],w.length){for(;u=Bn.exec(n);)x=u[0],m=n.substring(l,u.index),_?_=(_+1)%5:(m.substr(-5)==="rgba("||m.substr(-5)==="hsla(")&&(_=1),x!==(g=d[c++]||"")&&(f=parseFloat(g)||0,v=g.substr((f+"").length),y=x.charAt(1)==="="?+(x.charAt(0)+"1"):0,y&&(x=x.substr(2)),p=parseFloat(x),b=x.substr((p+"").length),l=Bn.lastIndex-b.length,b||(b=b||Ut.units[t]||v,l===n.length&&(n+=b,o.e+=b)),v!==b&&(f=ki(e,t,g,b)||0),o._pt={_next:o._pt,p:m||c===1?m:",",s:f,c:y?y*p:p-f,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<n.length?n.substring(l,n.length):""}else o.r=t==="display"&&n==="none"?Nh:Ih;return Kc.test(n)&&(o.e=0),this._pt=o,o},$l={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},fx=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=$l[i]||i,t[1]=$l[n]||n,t.join(" ")},px=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,s=t.u,a=i._gsap,o,l,c;if(s==="all"||s===!0)n.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Hi[o]&&(l=1,o=o==="transformOrigin"?Vi:mt),Cr(i,o);l&&(Cr(i,mt),a&&(a.svg&&i.removeAttribute("transform"),Pr(i,1),a.uncache=1))}},ws={clearProps:function(e,t,i,n,s){if(s.data!=="isFromStart"){var a=e._pt=new Pt(e._pt,t,i,0,0,px);return a.u=n,a.pr=-10,a.tween=s,e._props.push(i),1}}},Lr=[1,0,0,1,0,0],zh={},Gh=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Ql=function(e){var t=yi(e,mt);return Gh(t)?Lr:t.substr(7).match(Jc).map(rt)},Do=function(e,t){var i=e._gsap||rn(e),n=e.style,s=Ql(e),a,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Lr:s):(s===Lr&&!e.offsetParent&&e!==zn&&!i.svg&&(l=n.display,n.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextSibling,zn.appendChild(e)),s=Ql(e),l?n.display=l:Cr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):zn.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ja=function(e,t,i,n,s,a){var o=e._gsap,l=s||Do(e,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=l[0],_=l[1],g=l[2],x=l[3],p=l[4],m=l[5],b=t.split(" "),v=parseFloat(b[0])||0,y=parseFloat(b[1])||0,w,R,P,G;i?l!==Lr&&(R=f*x-_*g)&&(P=v*(x/R)+y*(-g/R)+(g*m-x*p)/R,G=v*(-_/R)+y*(f/R)-(f*m-_*p)/R,v=P,y=G):(w=Uh(e),v=w.x+(~b[0].indexOf("%")?v/100*w.width:v),y=w.y+(~(b[1]||b[0]).indexOf("%")?y/100*w.height:y)),n||n!==!1&&o.smooth?(p=v-c,m=y-h,o.xOffset=u+(p*f+m*g)-p,o.yOffset=d+(p*_+m*x)-m):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=y,o.smooth=!!n,o.origin=t,o.originIsAbsolute=!!i,e.style[Vi]="0px 0px",a&&(Ii(a,o,"xOrigin",c,v),Ii(a,o,"yOrigin",h,y),Ii(a,o,"xOffset",u,o.xOffset),Ii(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+y)},Pr=function(e,t){var i=e._gsap||new Eh(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,s=i.scaleX<0,a="px",o="deg",l=yi(e,Vi)||"0",c,h,u,d,f,_,g,x,p,m,b,v,y,w,R,P,G,U,M,C,D,I,z,N,H,B,q,K,J,Q,he,Ce;return c=h=u=_=g=x=p=m=b=0,d=f=1,i.svg=!!(e.getCTM&&Oh(e)),w=Do(e,i.svg),i.svg&&(N=(!i.uncache||l==="0px 0px")&&!t&&e.getAttribute("data-svg-origin"),ja(e,N||l,!!N||i.originIsAbsolute,i.smooth!==!1,w)),v=i.xOrigin||0,y=i.yOrigin||0,w!==Lr&&(U=w[0],M=w[1],C=w[2],D=w[3],c=I=w[4],h=z=w[5],w.length===6?(d=Math.sqrt(U*U+M*M),f=Math.sqrt(D*D+C*C),_=U||M?Fn(M,U)*Qi:0,p=C||D?Fn(C,D)*Qi+_:0,p&&(f*=Math.abs(Math.cos(p*Gn))),i.svg&&(c-=v-(v*U+y*C),h-=y-(v*M+y*D))):(Ce=w[6],Q=w[7],q=w[8],K=w[9],J=w[10],he=w[11],c=w[12],h=w[13],u=w[14],R=Fn(Ce,J),g=R*Qi,R&&(P=Math.cos(-R),G=Math.sin(-R),N=I*P+q*G,H=z*P+K*G,B=Ce*P+J*G,q=I*-G+q*P,K=z*-G+K*P,J=Ce*-G+J*P,he=Q*-G+he*P,I=N,z=H,Ce=B),R=Fn(-C,J),x=R*Qi,R&&(P=Math.cos(-R),G=Math.sin(-R),N=U*P-q*G,H=M*P-K*G,B=C*P-J*G,he=D*G+he*P,U=N,M=H,C=B),R=Fn(M,U),_=R*Qi,R&&(P=Math.cos(R),G=Math.sin(R),N=U*P+M*G,H=I*P+z*G,M=M*P-U*G,z=z*P-I*G,U=N,I=H),g&&Math.abs(g)+Math.abs(_)>359.9&&(g=_=0,x=180-x),d=rt(Math.sqrt(U*U+M*M+C*C)),f=rt(Math.sqrt(z*z+Ce*Ce)),R=Fn(I,z),p=Math.abs(R)>2e-4?R*Qi:0,b=he?1/(he<0?-he:he):0),i.svg&&(N=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Gh(yi(e,mt)),N&&e.setAttribute("transform",N))),Math.abs(p)>90&&Math.abs(p)<270&&(s?(d*=-1,p+=_<=0?180:-180,_+=_<=0?180:-180):(f*=-1,p+=p<=0?180:-180)),i.x=c-((i.xPercent=c&&(i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=h-((i.yPercent=h&&(i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=u+a,i.scaleX=rt(d),i.scaleY=rt(f),i.rotation=rt(_)+o,i.rotationX=rt(g)+o,i.rotationY=rt(x)+o,i.skewX=p+o,i.skewY=m+o,i.transformPerspective=b+a,(i.zOrigin=parseFloat(l.split(" ")[2])||0)&&(n[Vi]=As(l)),i.xOffset=i.yOffset=0,i.force3D=Ut.force3D,i.renderTransform=i.svg?gx:Bh?Hh:mx,i.uncache=0,i},As=function(e){return(e=e.split(" "))[0]+" "+e[1]},Ca=function(e,t,i){var n=Tt(t);return rt(parseFloat(t)+parseFloat(ki(e,"x",i+"px",n)))+n},mx=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Hh(e,t)},Ji="0deg",ur="0px",Ki=") ",Hh=function(e,t){var i=t||this,n=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,h=i.rotationY,u=i.rotationX,d=i.skewX,f=i.skewY,_=i.scaleX,g=i.scaleY,x=i.transformPerspective,p=i.force3D,m=i.target,b=i.zOrigin,v="",y=p==="auto"&&e&&e!==1||p===!0;if(b&&(u!==Ji||h!==Ji)){var w=parseFloat(h)*Gn,R=Math.sin(w),P=Math.cos(w),G;w=parseFloat(u)*Gn,G=Math.cos(w),a=Ca(m,a,R*G*-b),o=Ca(m,o,-Math.sin(w)*-b),l=Ca(m,l,P*G*-b+b)}x!==ur&&(v+="perspective("+x+Ki),(n||s)&&(v+="translate("+n+"%, "+s+"%) "),(y||a!==ur||o!==ur||l!==ur)&&(v+=l!==ur||y?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ki),c!==Ji&&(v+="rotate("+c+Ki),h!==Ji&&(v+="rotateY("+h+Ki),u!==Ji&&(v+="rotateX("+u+Ki),(d!==Ji||f!==Ji)&&(v+="skew("+d+", "+f+Ki),(_!==1||g!==1)&&(v+="scale("+_+", "+g+Ki),m.style[mt]=v||"translate(0, 0)"},gx=function(e,t){var i=t||this,n=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,h=i.skewY,u=i.scaleX,d=i.scaleY,f=i.target,_=i.xOrigin,g=i.yOrigin,x=i.xOffset,p=i.yOffset,m=i.forceCSS,b=parseFloat(a),v=parseFloat(o),y,w,R,P,G;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Gn,c*=Gn,y=Math.cos(l)*u,w=Math.sin(l)*u,R=Math.sin(l-c)*-d,P=Math.cos(l-c)*d,c&&(h*=Gn,G=Math.tan(c-h),G=Math.sqrt(1+G*G),R*=G,P*=G,h&&(G=Math.tan(h),G=Math.sqrt(1+G*G),y*=G,w*=G)),y=rt(y),w=rt(w),R=rt(R),P=rt(P)):(y=u,P=d,w=R=0),(b&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(b=ki(f,"x",a,"px"),v=ki(f,"y",o,"px")),(_||g||x||p)&&(b=rt(b+_-(_*y+g*R)+x),v=rt(v+g-(_*w+g*P)+p)),(n||s)&&(G=f.getBBox(),b=rt(b+n/100*G.width),v=rt(v+s/100*G.height)),G="matrix("+y+","+w+","+R+","+P+","+b+","+v+")",f.setAttribute("transform",G),m&&(f.style[mt]=G)},_x=function(e,t,i,n,s,a){var o=360,l=ft(s),c=parseFloat(s)*(l&&~s.indexOf("rad")?Qi:1),h=a?c*a:c-n,u=n+h+"deg",d,f;return l&&(d=s.split("_")[1],d==="short"&&(h%=o,h!==h%(o/2)&&(h+=h<0?o:-o)),d==="cw"&&h<0?h=(h+o*jl)%o-~~(h/o)*o:d==="ccw"&&h>0&&(h=(h-o*jl)%o-~~(h/o)*o)),e._pt=f=new Pt(e._pt,t,i,n,h,nx),f.e=u,f.u="deg",e._props.push(i),f},ec=function(e,t){for(var i in t)e[i]=t[i];return e},xx=function(e,t,i){var n=ec({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,h,u,d,f,_;n.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[mt]=t,o=Pr(i,1),Cr(i,mt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[mt],a[mt]=t,o=Pr(i,1),a[mt]=c);for(l in Hi)c=n[l],h=o[l],c!==h&&s.indexOf(l)<0&&(f=Tt(c),_=Tt(h),u=f!==_?ki(i,l,c,_):parseFloat(c),d=parseFloat(h),e._pt=new Pt(e._pt,o,l,u,d-u,Fh),e._pt.u=_||0,e._props.push(l));ec(o,n)};Lt("padding,margin,Width,Radius",function(r,e){var t="Top",i="Right",n="Bottom",s="Left",a=(e<3?[t,i,n,s]:[t+s,t+i,n+i,n+s]).map(function(o){return e<2?r+o:"border"+o+r});ws[e>1?"border"+r:r]=function(o,l,c,h,u){var d,f;if(arguments.length<4)return d=a.map(function(_){return en(o,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},a.forEach(function(_,g){return f[_]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(l,f,u)}});var Vh={name:"css",register:Ya,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,s){var a=this._props,o=e.style,l=i.vars.startAt,c,h,u,d,f,_,g,x,p,m,b,v,y,w,R;Po||Ya();for(g in t)if(g!=="autoRound"&&(h=t[g],!(It[g]&&Th(g,t,i,n,e,s)))){if(f=typeof h,_=ws[g],f==="function"&&(h=h.call(i,n,e,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Ar(h)),_)_(this,e,g,h,i)&&(R=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),h+="",Oi.lastIndex=0,Oi.test(c)||(x=Tt(c),p=Tt(h)),p?x!==p&&(c=ki(e,g,c,p)+p):x&&(h+=x),this.add(o,"setProperty",c,h,n,s,0,0,g),a.push(g);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(i,n,e,s):l[g],ft(c)&&~c.indexOf("random(")&&(c=Ar(c)),Tt(c+"")||(c+=Ut.units[g]||Tt(en(e,g))||""),(c+"").charAt(1)==="="&&(c=en(e,g))):c=en(e,g),d=parseFloat(c),m=f==="string"&&h.charAt(1)==="="?+(h.charAt(0)+"1"):0,m&&(h=h.substr(2)),u=parseFloat(h),g in Fi&&(g==="autoAlpha"&&(d===1&&en(e,"visibility")==="hidden"&&u&&(d=0),Ii(this,o,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=Fi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),b=g in Hi,b){if(v||(y=e._gsap,y.renderTransform&&!t.parseTransform||Pr(e,t.parseTransform),w=t.smoothOrigin!==!1&&y.smooth,v=this._pt=new Pt(this._pt,o,mt,0,1,y.renderTransform,y,0,-1),v.dep=1),g==="scale")this._pt=new Pt(this._pt,y,"scaleY",y.scaleY,(m?m*u:u-y.scaleY)||0),a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){h=fx(h),y.svg?ja(e,h,0,w,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==y.zOrigin&&Ii(this,y,"zOrigin",y.zOrigin,p),Ii(this,o,g,As(c),As(h)));continue}else if(g==="svgOrigin"){ja(e,h,1,w,0,this);continue}else if(g in zh){_x(this,y,g,d,h,m);continue}else if(g==="smoothOrigin"){Ii(this,y,"smooth",y.smooth,h);continue}else if(g==="force3D"){y[g]=h;continue}else if(g==="transform"){xx(this,h,e);continue}}else g in o||(g=jn(g)||g);if(b||(u||u===0)&&(d||d===0)&&!ix.test(h)&&g in o)x=(c+"").substr((d+"").length),u||(u=0),p=Tt(h)||(g in Ut.units?Ut.units[g]:x),x!==p&&(d=ki(e,g,c,p)),this._pt=new Pt(this._pt,b?y:o,g,d,m?m*u:u-d,!b&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?sx:Fh),this._pt.u=p||0,x!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=rx);else if(g in o)dx.call(this,e,g,c,h);else if(g in e)this.add(e,g,c||e[g],h,n,s);else{bo(g,h);continue}a.push(g)}}R&&Ph(this)},get:en,aliases:Fi,getSetter:function(e,t,i){var n=Fi[t];return n&&n.indexOf(",")<0&&(t=n),t in Hi&&t!==Vi&&(e._gsap.x||en(e,"x"))?i&&Yl===i?t==="scale"?cx:lx:(Yl=i||{})&&(t==="scale"?hx:ux):e.style&&!Mo(e.style[t])?ax:~t.indexOf("-")?ox:Co(e,t)},core:{_removeProperty:Cr,_getMatrix:Do}};li.utils.checkPrefix=jn;(function(r,e,t,i){var n=Lt(r+","+e+","+t,function(s){Hi[s]=1});Lt(e,function(s){Ut.units[s]="deg",zh[s]=1}),Fi[n[13]]=r+","+e,Lt(i,function(s){var a=s.split(":");Fi[a[1]]=n[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Lt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Ut.units[r]="px"});li.registerPlugin(Vh);var yx=li.registerPlugin(Vh)||li;yx.core.Tween;export{at as B,vx as D,Mx as F,Dc as M,Et as P,Sx as R,xc as S,Xe as W,eo as a,At as b,Ug as c,yx as g};
