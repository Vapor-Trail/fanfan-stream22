const $e=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}};$e();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,q=Symbol(),F=new WeakMap;class ve{constructor(e,t,n){if(this._$cssResult$=!0,n!==q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(W&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=F.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&F.set(t,e))}return e}toString(){return this.cssText}}const Ae=i=>new ve(typeof i=="string"?i:i+"",void 0,q),b=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((n,s,o)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[o+1],i[0]);return new ve(t,i,q)},Te=(i,e)=>{W?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const n=document.createElement("style"),s=window.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=t.cssText,i.appendChild(n)})},V=W?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return Ae(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var L;const G=window.trustedTypes,xe=G?G.emptyScript:"",Q=window.reactiveElementPolyfillSupport,Y={toAttribute(i,e){switch(e){case Boolean:i=i?xe:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},ye=(i,e)=>e!==i&&(e==e||i==i),U={attribute:!0,type:String,converter:Y,reflect:!1,hasChanged:ye};class $ extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;(t=this.h)!==null&&t!==void 0||(this.h=[]),this.h.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,n)=>{const s=this._$Ep(n,t);s!==void 0&&(this._$Ev.set(s,n),e.push(s))}),e}static createProperty(e,t=U){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,n,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(s){const o=this[e];this[t]=s,this.requestUpdate(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||U}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of n)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const s of n)t.unshift(V(s))}else e!==void 0&&t.push(V(e));return t}static _$Ep(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Te(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=U){var s,o;const a=this.constructor._$Ep(e,n);if(a!==void 0&&n.reflect===!0){const c=((o=(s=n.converter)===null||s===void 0?void 0:s.toAttribute)!==null&&o!==void 0?o:Y.toAttribute)(t,n.type);this._$El=e,c==null?this.removeAttribute(a):this.setAttribute(a,c),this._$El=null}}_$AK(e,t){var n,s;const o=this.constructor,a=o._$Ev.get(e);if(a!==void 0&&this._$El!==a){const c=o.getPropertyOptions(a),r=c.converter,l=(s=(n=r==null?void 0:r.fromAttribute)!==null&&n!==void 0?n:typeof r=="function"?r:null)!==null&&s!==void 0?s:Y.fromAttribute;this._$El=a,this[a]=l(t,c.type),this._$El=null}}requestUpdate(e,t,n){let s=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||ye)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,o)=>this[o]=s),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(n)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdated)===null||s===void 0?void 0:s.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,n)=>this._$EO(n,this[n],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}$.finalized=!0,$.elementProperties=new Map,$.elementStyles=[],$.shadowRootOptions={mode:"open"},Q==null||Q({ReactiveElement:$}),((L=globalThis.reactiveElementVersions)!==null&&L!==void 0?L:globalThis.reactiveElementVersions=[]).push("1.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var R;const T=globalThis.trustedTypes,Z=T?T.createPolicy("lit-html",{createHTML:i=>i}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,be="?"+y,Ee=`<${be}>`,x=document,I=(i="")=>x.createComment(i),C=i=>i===null||typeof i!="object"&&typeof i!="function",we=Array.isArray,Se=i=>{var e;return we(i)||typeof((e=i)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,X=/-->/g,ee=/>/g,w=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,te=/'/g,ne=/"/g,_e=/^(?:script|style|textarea|title)$/i,ke=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),f=ke(1),_=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),se=new WeakMap,Ie=(i,e,t)=>{var n,s;const o=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:e;let a=o._$litPart$;if(a===void 0){const c=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=a=new P(e.insertBefore(I(),c),c,void 0,t!=null?t:{})}return a._$AI(i),a},A=x.createTreeWalker(x,129,null,!1),Ce=(i,e)=>{const t=i.length-1,n=[];let s,o=e===2?"<svg>":"",a=k;for(let r=0;r<t;r++){const l=i[r];let g,d,h=-1,m=0;for(;m<l.length&&(a.lastIndex=m,d=a.exec(l),d!==null);)m=a.lastIndex,a===k?d[1]==="!--"?a=X:d[1]!==void 0?a=ee:d[2]!==void 0?(_e.test(d[2])&&(s=RegExp("</"+d[2],"g")),a=w):d[3]!==void 0&&(a=w):a===w?d[0]===">"?(a=s!=null?s:k,h=-1):d[1]===void 0?h=-2:(h=a.lastIndex-d[2].length,g=d[1],a=d[3]===void 0?w:d[3]==='"'?ne:te):a===ne||a===te?a=w:a===X||a===ee?a=k:(a=w,s=void 0);const M=a===w&&i[r+1].startsWith("/>")?" ":"";o+=a===k?l+Ee:h>=0?(n.push(g),l.slice(0,h)+"$lit$"+l.slice(h)+y+M):l+y+(h===-2?(n.push(void 0),r):M)}const c=o+(i[t]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Z!==void 0?Z.createHTML(c):c,n]};class H{constructor({strings:e,_$litType$:t},n){let s;this.parts=[];let o=0,a=0;const c=e.length-1,r=this.parts,[l,g]=Ce(e,t);if(this.el=H.createElement(l,n),A.currentNode=this.el.content,t===2){const d=this.el.content,h=d.firstChild;h.remove(),d.append(...h.childNodes)}for(;(s=A.nextNode())!==null&&r.length<c;){if(s.nodeType===1){if(s.hasAttributes()){const d=[];for(const h of s.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(y)){const m=g[a++];if(d.push(h),m!==void 0){const M=s.getAttribute(m.toLowerCase()+"$lit$").split(y),j=/([.?@])?(.*)/.exec(m);r.push({type:1,index:o,name:j[2],strings:M,ctor:j[1]==="."?Pe:j[1]==="?"?Me:j[1]==="@"?je:N})}else r.push({type:6,index:o})}for(const h of d)s.removeAttribute(h)}if(_e.test(s.tagName)){const d=s.textContent.split(y),h=d.length-1;if(h>0){s.textContent=T?T.emptyScript:"";for(let m=0;m<h;m++)s.append(d[m],I()),A.nextNode(),r.push({type:2,index:++o});s.append(d[h],I())}}}else if(s.nodeType===8)if(s.data===be)r.push({type:2,index:o});else{let d=-1;for(;(d=s.data.indexOf(y,d+1))!==-1;)r.push({type:7,index:o}),d+=y.length-1}o++}}static createElement(e,t){const n=x.createElement("template");return n.innerHTML=e,n}}function E(i,e,t=i,n){var s,o,a,c;if(e===_)return e;let r=n!==void 0?(s=t._$Cl)===null||s===void 0?void 0:s[n]:t._$Cu;const l=C(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==l&&((o=r==null?void 0:r._$AO)===null||o===void 0||o.call(r,!1),l===void 0?r=void 0:(r=new l(i),r._$AT(i,t,n)),n!==void 0?((a=(c=t)._$Cl)!==null&&a!==void 0?a:c._$Cl=[])[n]=r:t._$Cu=r),r!==void 0&&(e=E(i,r._$AS(i,e.values),r,n)),e}class He{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:n},parts:s}=this._$AD,o=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:x).importNode(n,!0);A.currentNode=o;let a=A.nextNode(),c=0,r=0,l=s[0];for(;l!==void 0;){if(c===l.index){let g;l.type===2?g=new P(a,a.nextSibling,this,e):l.type===1?g=new l.ctor(a,l.name,l.strings,this,e):l.type===6&&(g=new Ne(a,this,e)),this.v.push(g),l=s[++r]}c!==(l==null?void 0:l.index)&&(a=A.nextNode(),c++)}return o}m(e){let t=0;for(const n of this.v)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class P{constructor(e,t,n,s){var o;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=s,this._$Cg=(o=s==null?void 0:s.isConnected)===null||o===void 0||o}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=E(this,e,t),C(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==_&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):Se(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==u&&C(this._$AH)?this._$AA.nextSibling.data=e:this.k(x.createTextNode(e)),this._$AH=e}T(e){var t;const{values:n,_$litType$:s}=e,o=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=H.createElement(s.h,this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.m(n);else{const a=new He(o,this),c=a.p(this.options);a.m(n),this.k(c),this._$AH=a}}_$AC(e){let t=se.get(e.strings);return t===void 0&&se.set(e.strings,t=new H(e)),t}S(e){we(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,s=0;for(const o of e)s===t.length?t.push(n=new P(this.M(I()),this.M(I()),this,this.options)):n=t[s],n._$AI(o),s++;s<t.length&&(this._$AR(n&&n._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cg=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class N{constructor(e,t,n,s,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,s){const o=this.strings;let a=!1;if(o===void 0)e=E(this,e,t,0),a=!C(e)||e!==this._$AH&&e!==_,a&&(this._$AH=e);else{const c=e;let r,l;for(e=o[0],r=0;r<o.length-1;r++)l=E(this,c[n+r],t,r),l===_&&(l=this._$AH[r]),a||(a=!C(l)||l!==this._$AH[r]),l===u?e=u:e!==u&&(e+=(l!=null?l:"")+o[r+1]),this._$AH[r]=l}a&&!s&&this.C(e)}C(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e!=null?e:"")}}class Pe extends N{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===u?void 0:e}}const Oe=T?T.emptyScript:"";class Me extends N{constructor(){super(...arguments),this.type=4}C(e){e&&e!==u?this.element.setAttribute(this.name,Oe):this.element.removeAttribute(this.name)}}class je extends N{constructor(e,t,n,s,o){super(e,t,n,s,o),this.type=5}_$AI(e,t=this){var n;if((e=(n=E(this,e,t,0))!==null&&n!==void 0?n:u)===_)return;const s=this._$AH,o=e===u&&s!==u||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,a=e!==u&&(s===u||o);o&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class Ne{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){E(this,e)}}const ie=window.litHtmlPolyfillSupport;ie==null||ie(H,P),((R=globalThis.litHtmlVersions)!==null&&R!==void 0?R:globalThis.litHtmlVersions=[]).push("2.2.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var z,J;class p extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ie(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return _}}p.finalized=!0,p._$litElement$=!0,(z=globalThis.litElementHydrateSupport)===null||z===void 0||z.call(globalThis,{LitElement:p});const oe=globalThis.litElementPolyfillSupport;oe==null||oe({LitElement:p});((J=globalThis.litElementVersions)!==null&&J!==void 0?J:globalThis.litElementVersions=[]).push("3.2.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v=i=>e=>typeof e=="function"?((t,n)=>(window.customElements.define(t,n),n))(i,e):((t,n)=>{const{kind:s,elements:o}=n;return{kind:s,elements:o,finisher(a){window.customElements.define(t,a)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const De=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}};function D(i){return(e,t)=>t!==void 0?((n,s,o)=>{s.constructor.createProperty(o,n)})(i,e,t):De(i,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var B;((B=window.HTMLSlotElement)===null||B===void 0?void 0:B.prototype.assignedElements)!=null;var Le=Object.defineProperty,Ue=Object.getOwnPropertyDescriptor,Re=(i,e,t,n)=>{for(var s=n>1?void 0:n?Ue(e,t):e,o=i.length-1,a;o>=0;o--)(a=i[o])&&(s=(n?a(e,t,s):a(s))||s);return n&&s&&Le(e,t,s),s};let ze=(i,e)=>{let t=0;i.forEach(n=>{n.isIntersecting&&(setTimeout(()=>{n.target.show()},t*100),t++)})};const Je=new IntersectionObserver(ze,{rootMargin:"-100px"});let ae=class extends p{static get styles(){return b`
      :host {
        display: block;
        transform-origin: 50% 20px;
        opacity: 0;
        background: white;
        border-radius: 6px;
        box-shadow: #0000000a 2px 4px 12px;
        overflow: hidden;
        transition: opacity 0.5s ease 0s,
          box-shadow 0.5s cubic-bezier(0.26, 0.3, 0, 0.98) 0s,
          transform 0.5s cubic-bezier(0.26, 0.3, 0, 0.98) 0s;
        transform: translate(0, 60px);
      }
      :host([shown]) {
        opacity: 1;
        transform: rotate(var(--rot, 2deg)) translate(0, 0px);
      }
      :host(:hover) {
        transform: rotate(var(--rot, 2deg)) translate(0, 0px) scale(1.0069);
        box-shadow: #00000010 2px 4px 24px;
      }
      .wrapper {
        padding: 30px 20px;
      }
    `}show(){this.setAttribute("shown","")}connectedCallback(){super.connectedCallback(),this.style.setProperty("--rot",`${(Math.random()-.5)*4}deg`),Je.observe(this)}render(){return f`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};ae=Re([v("nida-card")],ae);var Be=Object.defineProperty,Ye=Object.getOwnPropertyDescriptor,O=(i,e,t,n)=>{for(var s=n>1?void 0:n?Ye(e,t):e,o=i.length-1,a;o>=0;o--)(a=i[o])&&(s=(n?a(e,t,s):a(s))||s);return n&&s&&Be(e,t,s),s};let S=class extends p{constructor(){super(),this._image=new Image,this._image.addEventListener("load",()=>{setTimeout(()=>{this._image.classList.remove("hidden")},10)})}static get styles(){return b`
			:host {
				display: contents;
			}

			img {
				display: block;
				width: 100%;
				height: 100%;
				object-fit: cover;
				transition: opacity 0.5s ease;
				opacity: 1;
			}

			img.hidden {
				opacity: 0;
			}
		`}connectedCallback(){super.connectedCallback()}attributeChangedCallback(i,e,t){super.attributeChangedCallback(i,e,t),i==="src"&&(this._image.src=t,this._image.width=+(this.width||0),this._image.height=+(this.height||0),this._image.loading="lazy",this._image.alt=this.alt||"",this._image.classList.add("hidden"))}render(){return f`${this._image}`}};O([D({type:String})],S.prototype,"src",2);O([D({type:String})],S.prototype,"alt",2);O([D({type:String})],S.prototype,"width",2);O([D({type:String})],S.prototype,"height",2);S=O([v("aui-lazyimage")],S);var Ke=Object.defineProperty,We=Object.getOwnPropertyDescriptor,qe=(i,e,t,n)=>{for(var s=n>1?void 0:n?We(e,t):e,o=i.length-1,a;o>=0;o--)(a=i[o])&&(s=(n?a(e,t,s):a(s))||s);return n&&s&&Ke(e,t,s),s};let re=class extends p{constructor(){super(...arguments),this.cards=[],this.init=!1}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),window.addEventListener("cards",e=>{this.cards=e.detail});const i=document.querySelector(".page");if(i)i.addEventListener("scroll",()=>{!this.init&&this.cards.length>0&&(this.init=!0,this.requestUpdate())});else throw new Error("Something went wrong")}renderMedia(i){switch(i.type){default:return i.embed?f`<iframe
            src="${i.embed}"
            width="100%"
            height="280px"
            style="border: none;"
            allow="autoplay"
          ></iframe>`:f`Media not suppoerted. ${i.type}`}}renderCard(i){return f`
      <nida-card>
        <div class="message">
          <nida-message>${i.message}</nida-message>
        </div>

        ${i.media?f` <div class="media">${this.renderMedia(i.media)}</div> `:""}

        <div class="name">
          <span>${i.name}</span>
        </div>
      </nida-card>
    `}render(){if(!this.init)return;const i=[];let e=0;for(let t of this.cards){const n=e%3;i[n]=i[n]||[],i[n].push(t),e++}return f`
      <div class="grid">
        ${i.map(t=>f`
            <div class="column">
              ${t.map(n=>this.renderCard(n))}
            </div>
          `)}
      </div>
    `}};re=qe([v("nida-cardlist")],re);const Fe=["fanfJAM fanfJAM fanfJAM fanfJAM fanfJAM fanfJAM","Happy Streamerversary!","fanfJAM fanfDance fanfJAM","fanfDance fanfDance fanfDance","fanfJAM fanfJAM fanfJAM fanfJAM","fanfJAM fanfJAM fanfJAM fanfJAM fanfJAM","fanfDance fanfDance","fanfJAM fanfDance fanfJAM"];var Ve=Object.defineProperty,Ge=Object.getOwnPropertyDescriptor,Qe=(i,e,t,n)=>{for(var s=n>1?void 0:n?Ge(e,t):e,o=i.length-1,a;o>=0;o--)(a=i[o])&&(s=(n?a(e,t,s):a(s))||s);return n&&s&&Ve(e,t,s),s};let le=class extends p{constructor(){super(...arguments),this.messages=[]}static get styles(){return b`
      :host {
        display: block;
        position: absolute;
        bottom: 120px;
        margin: 10px;
        color: white;
      }
      .message {
        margin-top: 8px;
        animation: slide-up 0.2s ease;
      }
      @keyframes slide-up {
        from {
          transform: translate(0, 20px);
        }
      }
      .messages {
        overflow: hidden;
      }
      img {
        width: 32px;
      }
    `}connectedCallback(){super.connectedCallback();const i=()=>{const t=Fe,n=t[Math.floor(t.length*Math.random())],s=document.createElement("nida-message");s.className="message",s.innerHTML=n,this.messages.push(s),this.messages.length>5&&this.messages.shift()};i(),i(),i(),i();const e=()=>{i(),this.requestUpdate(),setTimeout(()=>e(),750*Math.random()+500*1.5)};e()}render(){return f`
      <div class="wrapper">
        <div class="messages">${this.messages}</div>
      </div>
    `}};le=Qe([v("nida-chat")],le);var Ze=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,et=(i,e,t,n)=>{for(var s=n>1?void 0:n?Xe(e,t):e,o=i.length-1,a;o>=0;o--)(a=i[o])&&(s=(n?a(e,t,s):a(s))||s);return n&&s&&Ze(e,t,s),s};let de=class extends p{constructor(i){super(),this.original=i,this.position=null}static get styles(){return b`
      :host {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: block;
        z-index: 100000000;
      }
      .blackbox {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        animation: fadein 0.25s ease;
      }
      .close-btn {
        position: absolute;
        top: 40px;
        right: 40px;
        border-radius: 50%;
        padding: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      .close-btn:hover {
        background: grey;
      }
      .close-btn:active {
        background: black;
      }
      .content {
        height: auto;
        transition: all 0.3s ease;
        -webkit-transition: all 0.3s ease;
        max-width: 900px;
        margin: auto;
      }
      @keyframes fadein {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `}connectedCallback(){super.connectedCallback(),this.position=this.original.getBoundingClientRect(),window.addEventListener("keydown",i=>{i.key==="Escape"&&this.close()})}updated(){var e;const i=(e=this.shadowRoot)==null?void 0:e.querySelector(".content");!i||!this.position||(i.style.width=this.position.width+"px",i.style.height=this.position.height+"px",i.style.transform=`translate(${this.position.x}px, ${this.position.y}px)`,i.offsetHeight,this.original&&(this.original.style.opacity="0",this.original.style.transition="opacity .125s ease"),i.style.transform="translate(0, 0)",i.style.width="900px",i.style.height="auto")}close(){this.remove(),this.original&&(this.original.style.opacity="")}render(){return f`
      <div
        class="blackbox"
        @click="${i=>{i.target.className==="blackbox"&&this.close()}}"
      >
        <div class="close-btn" @click="${i=>this.close()}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 30.258 30.258"
          >
            <g transform="translate(-447.371 -422.371)">
              <line
                x2="28.844"
                y2="28.844"
                transform="translate(448.078 423.078)"
                fill="none"
                stroke="#eee"
                stroke-width="2"
              />
              <line
                x1="28.844"
                y2="28.844"
                transform="translate(448.078 423.078)"
                fill="none"
                stroke="#eee"
                stroke-width="2"
              />
            </g>
          </svg>
        </div>

        <div class="content">
          <slot></slot>
        </div>
      </div>
    `}};de=et([v("image-show")],de);const tt=[{date:"10/20/2022 1:02:40",message:"Hi \u6247\u5B50\u6247\u5B50 ( fan fan), congratulations on your 2 years and also joing TSM. Hopefully you can continue to do the things you like and PogO with Joey. Im gonna take this opportunity to say please go find May. PogO fanfL",media:{src:"media/1V9PtoX7PAzE1QqvkLaKknUTecaOCZ6iJ.png",type:"image/png",embed:"https://drive.google.com/file/d/1V9PtoX7PAzE1QqvkLaKknUTecaOCZ6iJ/preview"},name:"Little Knee"},{date:"10/20/2022 1:04:59",message:"HELLOGE FANFAN HAPPY 2 YEAR STREAMERVERSARY!! u have come a long way and all of us are incredibly proud of you! even though I don't watch as often anymore, I will never forget the days of degen watching your streams and having a blast, as well as the time we met in singapore. i hope you're doing well and i wish nothing but the best for you fanfJAM",media:{src:"media/1JtsBTFz1RZp8SQU2uZwEGWIIldYPc6Y2.png",type:"image/png",embed:"https://drive.google.com/file/d/1JtsBTFz1RZp8SQU2uZwEGWIIldYPc6Y2/preview"},name:"felix"},{date:"10/20/2022 1:11:47",message:"Yo happy 2  stream anniversary! Thanks for being such an amazing streamer that I can enjoy no matter what shitty mood I\u2019m in. Your irl streams have been so enjoyable to watch and I\u2019m glad I\u2019m apart of such an insane community such as yours. And stop vaping so much, I told you on your birthday last time dummy. ",media:null,name:"Plasticmonk"},{date:"10/20/2022 1:41:04",message:"Happy 2 years ??? u are interest ! 3 fanfLL",media:{src:"media/1G0rA3FT98_dc8nrolhIHCG7gHRfRRUV5.jpeg",type:"image/jpeg",embed:"https://drive.google.com/file/d/1G0rA3FT98_dc8nrolhIHCG7gHRfRRUV5/preview"},name:"Alakutubak"},{date:"10/20/2022 1:48:25",message:"Happy 2nd Year Streamerversary! It's been such an amazing journey seeing you evolve to an IRL streamer and taking us along on your journeys around the world. Thanks for all the PogO and fun times and can't wait to see what's next!",media:{src:"media/1N0y3SubmuW_sV3w9pPrDQ-acqZvO0sH2.png",type:"image/png",embed:"https://drive.google.com/file/d/1N0y3SubmuW_sV3w9pPrDQ-acqZvO0sH2/preview"},name:"Echoge"},{date:"10/20/2022 2:19:27",message:"HAP 2 YEARS OF STREAMING FUNFUN! its been crazy seeing how quickly you've grown in such a short amount of time and I'm so glad that I got to be a part of this community for a while. From watching you start off streaming in ur living room with the hairbrush mic to the crazy 24 hr streams to watching you travel all over the world, its been really special. I wish I could be around more often but life has been busy. From one of ur oldest fanfan fans, NUT o7 ",media:null,name:"DarthNutella"},{date:"10/20/2022 6:07:56",message:"Happy 2 yr strimversary! Hope you strim more so I can Modge more times. Also don't forget to get Fudge some Calvin Klein daphCheer",media:null,name:"Hero_Egg"},{date:"10/20/2022 7:35:46",message:"Because of your streaming, my work-from-home days were more joyful than I expected. I have to say thank you and happy the 2nd streaming anniversary!",media:null,name:"nightfalleve"},{date:"10/20/2022 8:49:22",message:"This looks hella sus... whats this shit for again?  FanFan?  Who tf is FanFan? ...oh that Walmart Daphne?  Umm... sure I guess I can write something... Happy 2 Year Anniversary fanfan.  I'd write something longer and more wholesome, but I don't like how this google doc won't let me write paragraphs and I'm subjected to one long ass paragraph.  I'll save wholesome skakge for your b-day where I can write more freely.  I love ya fam, and if you ever need anything from me, I'll be there for you homie.  Attached is some exclusive Twitch Con behind the scenes content. (idk if this shit even worked lol) ",media:null,name:"Skakge"},{date:"10/20/2022 8:51:38",message:"Happy 2 yr and many more of THIS and THAT , THIS and THAT , THIS and THAT , THIS and THAT , THIS and THAT , THIS and THAT , THIS and THAT , THIS and THAT , THIS and THAT THIS and THAT , THIS and THAT , THIS and THAT , THIS and THAT , THIS and THAT , THIS and THAT , THIS and THAT , THIS and THAT , THIS and THAT , THIS and THAT , THIS and THAT , THIS and THAT , THIS and THAT , THIS and THAT , THIS and THAT  ",media:null,name:"BetaSeange"},{date:"10/20/2022 10:14:28",message:"Just attaching the video that didn't attach lol",media:{src:"media/19ae4OlkziDECOsHiC7ZIXVuxTraLH6LT.jpeg",type:"image/jpeg",embed:"https://drive.google.com/file/d/19ae4OlkziDECOsHiC7ZIXVuxTraLH6LT/preview"},name:"Skakge"},{date:"10/20/2022 22:07:46",message:"fanfJAM happy 2 years, here's to many more!! thanks for all the fun content, and stepping out of your comfort zone to show us the world! i wish you nothing but the best moving forword fanfLL",media:null,name:"BoundlessDreamer"},{date:"10/20/2022 11:12:31",message:`2 years, same shirt lol jk happy two year streamerversary on twitch to my favorite  apex looter/hoarder and awkward irl streamer. thanks for being yourself at home during pc streams and irl streams, playing weird video games and making me VIP.

 congrats to you on 2 years of streaming and here's to your continued success for many more years in streaming and every endeavour you embark on. stay beautiful, funny and sweet. tons of love to you fione fione from Dre fanfL`,media:null,name:"Dre"},{date:"10/20/2022 15:41:05",message:"HAPPY TWO YEARS FINFON ONE OF THE NEWER PEOPLE BUT IT'S BEEN VERY POG fanfJAM fanfJAM fanfJAM fanfJAM ",media:null,name:"Sammy/kasino"},{date:"10/20/2022 23:40:58",message:"fanfHiyo I can't believe I have been stuck in stream watching for over two months, love it all. Anyway keep up the hard work your content always getting better. fanfL",media:null,name:"sputnikfan!"},{date:"10/21/2022 3:51:40",message:`Happy 2 years fanfan.
I've only been here for one of those years Sadge but I enjoyed every minute of it. No matter what you stream your personality carries the content.
Hoping to see you stream for many more years in the future.`,media:null,name:"morning wood"},{date:"10/21/2022 4:06:41",message:"hi funfun fanfHiyo congrats on 2 years of contributing next to nothing to society fanfL been so awesome coming along and seeing all your successes Drake jokes aside it's all hella deserved. Not sure what else I can say to get across that you really are a 10/10 streamer. Cheers to however much longer you decide to continue being a professional HUH farmer!!",media:null,name:"leftjoycunt"},{date:"10/21/2022 4:08:50",message:"Day 730 of nonstop finfon content and im starting to lose track of how long I\u2019ve been trapped here\u2026 my only wish is that my family never finds out my search history is full of cringe phrases like \u201Cfanfan caught sucking toes\u201D or \u201Ctoilet gets destroyed by fanfan\u201Dor \u201Cfanfan slurps burps\u201D PainsChamp . I shouldve read the bio before subbing but I was jebaited and now I cant go back to being a regular pixel. I miss the days when I could just watch, chat, coom and repeat COPIUM . No other content can do it for me anymore I am addicted to cringe now and its all thanks to flimflom Smadge . My days are spent edging about whether or not she actually wants to fuck her brother or if she really wants to rope obese people off and I cant take it anymore peepoRiot . I NEED ANSWERS! is she a titty streamer or not a titty streamer? does she actually watch anime or does she just remember the opennings? is she really cracked at apex or not? IS SHE EVEN CHINA?! the conspiracy theories never end with finfon and I cant stop watching FeelsBadMan ",media:{src:"media/1FDLsz_EmwNuorOMTHM8AUSgc1LxGXqay.jpeg",type:"image/jpeg",embed:"https://drive.google.com/file/d/1FDLsz_EmwNuorOMTHM8AUSgc1LxGXqay/preview"},name:"milkncropdust"},{date:"10/21/2022 4:37:08",message:`2 years wooow congrats!
thanks for all the fun content`,media:{src:"media/1MsWZ64xIgfftyJ_MM9kJ1lew3mK9KaxL.png",type:"image/png",embed:"https://drive.google.com/file/d/1MsWZ64xIgfftyJ_MM9kJ1lew3mK9KaxL/preview"},name:"HarrysHT"},{date:"10/21/2022 11:29:27",message:"peepoClap Happy 2 years finfon peepoClap , thank you for all u do and all the memorable moments on stream! I'm excited to see what happens next and most importantly, I'm grateful to be a proud member of onlyfanfans HYPERS couldn't ask for a better steamer :D Mimikyu",media:{src:"media/1zc2nKAskQq0j-tEHOx96IKm9WJ3mIsll.png",type:"image/png",embed:"https://drive.google.com/file/d/1zc2nKAskQq0j-tEHOx96IKm9WJ3mIsll/preview"},name:"sunda3"},{date:"10/21/2022 12:16:20",message:`Hey dummy. Ever since i T3d to you i've recently become a quadrillionaire! Thanks so much fanfan :) congrats on 2 years on twitch. 

P.S you still owe me about 10 billion dollars. My accountant is waiting.`,media:{src:"media/1M81jpRRbCiGQsJZRYmHZO3B2oDb8KCig.png",type:"image/png",embed:"https://drive.google.com/file/d/1M81jpRRbCiGQsJZRYmHZO3B2oDb8KCig/preview"},name:"mewnlite"},{date:"10/20/2022 10:46:23",message:`My dearest fanfan, fiona, flimflom, funfun, fonfon, flingflong, fionafiona, walmart daph, khaleesi, 110, burp girl, international space station, stepsis, joey\u2019s business partner, punisher of porcelain, destroyer of toilets and of course my favorite thing to call you: Queen.

Happy 2 years anniversary, I\u2019m quite Sadge I wasn\u2019t there from the start. But my Queen, I wish to thank you for all the hours of laughs you\u2019ve given me. a mere pixel as me, thank you for accepting me into the onlyfanfans, the bests community on Twitch and the hardest working streamer on the platform (24 hours stream with 80% of hachu clips showed us this) \u2026 when you stream. 

You got on my scope/list I gifted 10 subs and you did a handflip (?) during a Yuggie stream, and when you called me whorebu for mocking you splitting a shot. You got me hooked when I was giggling like a little girl at \u201Csavage mode\u201D (video attached) and from that moment, I knew I had found the right Queen to queen.

I\u2019d like to thank you with a motivational speech, but I don\u2019t know what to say, really. I know the three minutes before every stream is the biggest battle of your life \u2013 will the pixels enjoy my stream? Will I be funny enough? Will wibuge be there? My Queen, you can sit and talk to the monitor and you would still mesmerize the 1800 viewers with your beauty, agility, nubility and fertility, #neverchange fanfan.

But remember you\u2019re not alone, we watch your stream as a community, like we watched Modern Family over and over the times you fell asleep fanfKEKW . 
We\u2019re onlyfanfans, gentle-men and women, believe me. We as pixels can stay on the stream and get the ads shown to us by twitch and banned by their S OMEGALUL Y women policies or we can fight our back into the stream, we can climp out of this twitch ads-hell, one sub at a time. (GET REKT TWITCH)

Now, I can\u2019t do it for you. I\u2019m too old. I look around. I see these young pixels, and I think -- I mean -- I made every wrong choice a middle-aged pixel can make. I, uh, I pissed away all my money on the Queen and fake streamers, believe it or not. I chased off anyone who\u2019s ever given me attention in twitch chat. And lately, I can\u2019t even stand to look at the pixel I see in the monitor.

You know, when you get old in life things get taken from you. I mean that's...part of life. But you only learn that when you start losing stuff. You find out life\u2019s this game of inches. So is streaming. Because in either game, life or just chatting streams, the margin for error is so small -- I mean one-half a step too late, or too early, and you don\u2019t quite make it. One-half second too slow, too fast, you don\u2019t quite catch it.

The inches we need are everywhere around us.

They\u2019re in every break of the stream, every minute, every second.

Your loyal pixel,
Wibuge

P.S. I didn\u2019t use grammerly, I\u2019m too poor to buy it, so blow me.

P.P.S Also non-subbed pixels, please sub to fanfan with prime or with twitch sub \u2013 she\u2019s really the one of the only streamers on the platform who deserves the subs if you ask whorebulge.
`,media:{src:"media/1-Ng_eQTKIDPN-QDTGMvRzgUIy3N9h_D1.jpeg",type:"image/jpeg",embed:"https://drive.google.com/file/d/1-Ng_eQTKIDPN-QDTGMvRzgUIy3N9h_D1/preview"},name:"wibuge"}],ce={showPage(){const i=document.querySelector(".page");i&&(i.removeAttribute("loading"),window.dispatchEvent(new CustomEvent("cards",{detail:tt})))}},he=["Hey Nida!","Im sorry to remind you,","but today is your birthday! :O","To celebrate,","we decided to make a game for you.","jk","But look at this!"];var nt=Object.defineProperty,st=Object.getOwnPropertyDescriptor,it=(i,e,t,n)=>{for(var s=n>1?void 0:n?st(e,t):e,o=i.length-1,a;o>=0;o--)(a=i[o])&&(s=(n?a(e,t,s):a(s))||s);return n&&s&&nt(e,t,s),s};let ue=class extends p{constructor(){super(),this.index=-1,location.hash!=="#intro"&&(location.hash="",localStorage.setItem("into-finished","true"),ce.showPage(),this.remove())}static get styles(){return b`
      :host {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
        color: #333;
        filter: contrast(1.1);
      }
      .overlay {
        object-fit: cover;
        opacity: 0.1;
        pointer-events: none;
        position: absolute;
        z-index: 1000;
      }
      .container {
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translateX(-50%);
        width: 900px;
        margin: auto;
      }
      .info-message {
        position: absolute;
        left: 50%;
        bottom: 30%;
        transform: translateX(-50%);
        color: inherit;
        animation: attention 3s ease infinite both;
      }
      @keyframes attention {
        0% {
          opacity: 1;
        }
        25% {
          opacity: 0.1;
        }
        50% {
          opacity: 1;
        }
        75% {
          opacity: 0.1;
        }
        100% {
          opacity: 1;
        }
      }
      .title {
        font-size: 48px;
        font-weight: bold;
        color: inherit;
      }
      strong {
        font-weight: bold;
      }
    `}connectedCallback(){super.connectedCallback(),this.tabIndex=0,window.addEventListener("keydown",this.onKeyDown.bind(this)),this.next()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKeyDown.bind(this))}onKeyDown(i){i.code==="Space"&&this.next()}next(){this.index++,this.index>he.length-1?this.onEnded():(this.headline=he[this.index],this.requestUpdate())}onEnded(){location.hash="";const i=document.createElement("video");i.src="./nida-bday-king.mp4",i.muted=!0,i.className="intro-video",i.oncanplay=()=>{i.play()},i.onanimationend=()=>{i.remove()},document.body.append(i),setTimeout(()=>{localStorage.setItem("into-finished","true"),ce.showPage(),this.remove()},3e3)}render(){return f`
      <img
        class="overlay"
        width="100%"
        height="100%"
        src="./images/noise.png"
      />
      <div class="container">
        <types-text class="title">${this.headline}</types-text>
      </div>

      <div class="info-message">Press <strong>Space</strong> to continue.</div>
    `}};ue=it([v("nida-intro")],ue);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ot={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},at=i=>(...e)=>({_$litDirective$:i,values:e});class rt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class K extends rt{constructor(e){if(super(e),this.it=u,e.type!==ot.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===u||e==null)return this.ft=void 0,this.it=e;if(e===_)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this.ft;this.it=e;const t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}}K.directiveName="unsafeHTML",K.resultType=1;const lt=at(K),fe={nidali1Clown:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_4adcf9a1f7ef43afb59243f26fde7845/default/dark/2.0",fanfL:"//static-cdn.jtvnw.net/emoticons/v2/307494658/default/dark/2.0",fanfLL:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_445defae54aa42debd7374d2bc7a419e/default/dark/2.0",nidali1Yes:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_a9dc49e835ae4b1381bfa4ed520b7882/default/dark/2.0",nidali1Knife:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_2aa813508979418492e8d778ccd8d3df/default/dark/2.0",nidali1Pew:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_b9227add596045da95066c117d899695/default/dark/2.0",nidali1Pog:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_7a256807916c4f609de80dc7d71bc8dd/default/dark/2.0",nidali1Thankyou:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_956e65ab20d048dc97c99ff52e296200/default/dark/2.0",nidali1NidaCry:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_ecd71f3ad1c349459c0e64cd3e63eabd/default/dark/2.0",nidali1NidaHeart:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_bcc47849ebd94260b11402758d239de9/default/dark/2.0",nidali1NidaWave:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_5c9c5b1b75434261b39c615ad3b62dba/default/dark/2.0",nidali1PowderPat:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_a2e29618473840c88b58137ff8b5f9de/default/dark/2.0",nidali1NidaHype:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_da86360a2caa405199c8e270013f3ecd/default/dark/2.0",nidali1Huh:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_8125272c5aba40fc839d7b62adef22ca/default/dark/2.0",nidali1Sip:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_99e6fc19b9d3409791243a93247b09a2/default/dark/2.0",nidali1Oop:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_d8858cdff3d449518d523310776019d9/default/dark/2.0",nidali1Swog:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_643649db5cfe49e38344033b8fb6518f/default/dark/2.0",yasBih:"https://cdn.betterttv.net/emote/6167425a054a252a431ef190/2x",PogO:"https://cdn.betterttv.net/emote/632321258d54637377075e88/2x",THIS:"https://cdn.7tv.app/emote/618330c5f1ae15abc7ebb8c6/2x.webp",THAT:"https://cdn.7tv.app/emote/60c6026823d056b5cac03c62/2x.webp",daphCheer:"https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_c0d5dc8059744989a358d35f91d52087/animated/light/2.0",fanfJAM:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_903425b2eebf40c783beb374680d970e/default/dark/2.0",fanfO:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_ce1efb7f500744e6842d9c405b9264b3/default/dark/2.0",fanfKEKW:"//static-cdn.jtvnw.net/emoticons/v2/305554638/default/dark/2.0",OMEGALUL:"//cdn.frankerfacez.com/emote/398911/2",fanfHiyo:"//static-cdn.jtvnw.net/emoticons/v2/306282608/default/dark/2.0",fanfDance:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_c079d42bbaa944368e5f600c6c0f3e5b/default/dark/2.0",Sadge:"//cdn.frankerfacez.com/emote/518576/2",Drake:"https://cdn.betterttv.net/emote/6339cadae6cf26500b4255bf/2x",PainsChamp:"https://cdn.betterttv.net/emote/61583fe4b63cc97ee6d46d58/2x",COPIUM:"//cdn.frankerfacez.com/emote/663211/2",peepoRiot:"https://cdn.betterttv.net/emote/63385fa3e6cf26500b423961/2x",FeelsBadMan:"https://cdn.betterttv.net/emote/566c9fc265dbbdab32ec053b/2x",Smadge:"https://cdn.7tv.app/emote/6316a7fe8e1ba8ff6ec1551d/2x.webp",peepoClap:"https://cdn.betterttv.net/emote/61b70c74002cdeedc21f423d/2x",HYPERS:"//cdn.frankerfacez.com/emote/515983/2",nidaClown:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_4adcf9a1f7ef43afb59243f26fde7845/default/dark/2.0",NidaHeart:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_bcc47849ebd94260b11402758d239de9/default/dark/2.0"};var dt=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,ht=(i,e,t,n)=>{for(var s=n>1?void 0:n?ct(e,t):e,o=i.length-1,a;o>=0;o--)(a=i[o])&&(s=(n?a(e,t,s):a(s))||s);return n&&s&&dt(e,t,s),s};function ut(i){return i.matchAll(/[\u{1f300}-\u{1f5ff}\u{1f900}-\u{1f9ff}\u{1f600}-\u{1f64f}\u{1f680}-\u{1f6ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}\u{1f1e6}-\u{1f1ff}\u{1f191}-\u{1f251}\u{1f004}\u{1f0cf}\u{1f170}-\u{1f171}\u{1f17e}-\u{1f17f}\u{1f18e}\u{3030}\u{2b50}\u{2b55}\u{2934}-\u{2935}\u{2b05}-\u{2b07}\u{2b1b}-\u{2b1c}\u{3297}\u{3299}\u{303d}\u{00a9}\u{00ae}\u{2122}\u{23f3}\u{24c2}\u{23e9}-\u{23ef}\u{25b6}\u{23f8}-\u{23fa}]/gu)}let pe=class extends p{constructor(){super(...arguments),this.content=""}static get styles(){return b`
      :host {
        display: block;
        text-align: left;
        font-size: 1rem;
        color: #333;
        margin: 4px 0;
      }

      p {
        white-space: pre-wrap;
        margin: 0;
      }

      .emote img {
        width: 32px;
        margin-top: -4px;
        display: inline-block;
        vertical-align: middle;
      }

      .emote {
        font-size: 32px;
        vertical-align: middle;
      }

      slot {
        display: block;
        width: 0;
        height: 0;
        opacity: 0;
        pointer-events: none;
      }
    `}onContentChange(){const i=[...this.childNodes].find(s=>s.nodeName==="#text"),t=(i==null?void 0:i.data).replaceAll(`
`,` 
`).split(" "),n=[];for(let s of t)if(s=s.replace(/:/g,""),s in fe)n.push(`<span class="emote"><img src="${fe[s]}" alt="${s}" /></span>`);else{let o=s;for(let a of ut(s))o=o.replace(a[0],`<span class="emote">${a[0]}</span>`);n.push(o)}this.content=n.join(" "),this.requestUpdate()}render(){return f`
      <p class="message">${lt(this.content)}</p>
      <slot @slotchange="${this.onContentChange}"></slot>
    `}};pe=ht([v("nida-message")],pe);var ft=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,mt=(i,e,t,n)=>{for(var s=n>1?void 0:n?pt(e,t):e,o=i.length-1,a;o>=0;o--)(a=i[o])&&(s=(n?a(e,t,s):a(s))||s);return n&&s&&ft(e,t,s),s};let me=class extends p{static get styles(){return b`
      :host {
        position: fixed;
        bottom: 40px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 100;
        pointer-events: none;
        transition: opacity 0.33s ease;
        z-index: 0;
        opacity: 0;

        animation: bounce 2s ease infinite both;
        animation-delay: 3s;
      }
      :host([shown]) {
        opacity: 1;
      }
      @keyframes bounce {
        0%,
        20%,
        50%,
        80%,
        100% {
          transform: translateX(-50%) translateY(0);
        }
        40% {
          transform: translateX(-50%) translateY(-20px);
        }
        60% {
          transform: translateX(-50%) translateY(-5px);
        }
      }
    `}connectedCallback(){super.connectedCallback();const i=document.querySelector(".page");if(i){const e=()=>{Math.floor(i.scrollTop/20)>0?this.removeAttribute("shown"):this.setAttribute("shown","")};i.addEventListener("scroll",e),e()}else throw new Error("Something went wrong")}render(){return f`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="85.965"
        height="51.382"
        viewBox="0 0 85.965 51.382"
        class="scroll-indicator"
      >
        <defs>
          <filter
            id="Path_1"
            x="0"
            y="0"
            width="85.965"
            height="51.382"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="2" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feFlood flood-opacity="0.161" />
            <feComposite operator="in" in2="blur" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Path_1)">
          <path
            id="Path_1-2"
            data-name="Path 1"
            d="M2931.512,1003.219l26.781,20.181,26.781-20.181"
            transform="translate(-2915.31 -989.02)"
            fill="none"
            stroke="#615051"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="6"
          />
        </g>
      </svg>
    `}};me=mt([v("scroll-indicator")],me);var gt=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,yt=(i,e,t,n)=>{for(var s=n>1?void 0:n?vt(e,t):e,o=i.length-1,a;o>=0;o--)(a=i[o])&&(s=(n?a(e,t,s):a(s))||s);return n&&s&&gt(e,t,s),s};async function bt(i){return new Promise(e=>{setTimeout(()=>{e(1)},i)})}let ge=class extends p{constructor(){super(...arguments),this.content=[],this.lastData=null}static get styles(){return b`
      :host {
        display: contents;
      }

      slot {
        display: block;
        width: 0;
        height: 0;
        opacity: 0;
      }
    `}async onContentChange(){const i=[...this.childNodes].find(n=>n.nodeName==="#text"),e=i==null?void 0:i.data,t=e.split("");this.content=[],this.lastData=e;for(let n of t){if(this.lastData!=e)break;this.content.push(n),this.requestUpdate(),await bt(20+Math.random()*50)}}connectedCallback(){super.connectedCallback(),new MutationObserver(e=>{this.onContentChange()}).observe(this,{characterData:!0,childList:!0,subtree:!0}),this.onContentChange()}render(){return f` ${this.content.join("")} `}};ge=yt([v("types-text")],ge);
