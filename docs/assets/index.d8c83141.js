const Xe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}};Xe();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ye=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ve=Symbol(),$e=new WeakMap;class Fe{constructor(e,t,i){if(this._$cssResult$=!0,i!==ve)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this._strings=t}get styleSheet(){let e=this._styleSheet;const t=this._strings;if(ye&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=$e.get(t)),e===void 0&&((this._styleSheet=e=new CSSStyleSheet).replaceSync(this.cssText),i&&$e.set(t,e))}return e}toString(){return this.cssText}}const et=n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${n}. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)},tt=n=>new Fe(typeof n=="string"?n:String(n),void 0,ve),$=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((i,s,o)=>i+et(s)+n[o+1],n[0]);return new Fe(t,n,ve)},nt=(n,e)=>{ye?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const i=document.createElement("style"),s=window.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)})},it=n=>{let e="";for(const t of n.cssRules)e+=t.cssText;return tt(e)},Se=ye?n=>n:n=>n instanceof CSSStyleSheet?it(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var q,Y,K,Be;let Je,T;const Pe=window.trustedTypes,st=Pe?Pe.emptyScript:"",j=window.reactiveElementPolyfillSupportDevMode;{const n=(q=globalThis.litIssuedWarnings)!==null&&q!==void 0?q:globalThis.litIssuedWarnings=new Set;T=(e,t)=>{t+=` See https://lit.dev/msg/${e} for more information.`,n.has(t)||(console.warn(t),n.add(t))},T("dev-mode","Lit is in dev mode. Not recommended for production!"),((Y=window.ShadyDOM)===null||Y===void 0?void 0:Y.inUse)&&j===void 0&&T("polyfill-support-missing","Shadow DOM is being polyfilled via `ShadyDOM` but the `polyfill-support` module has not been loaded."),Je=e=>({then:(t,i)=>{T("request-update-promise",`The \`requestUpdate\` method should no longer return a Promise but does so on \`${e}\`. Use \`updateComplete\` instead.`),t!==void 0&&t(!1)}})}const G=n=>{!window.emitLitDebugLogEvents||window.dispatchEvent(new CustomEvent("lit-debug",{detail:n}))},qe=(n,e)=>n,ue={toAttribute(n,e){switch(e){case Boolean:n=n?st:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n);break}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}break}return t}},Ye=(n,e)=>e!==n&&(e===e||n===n),Q={attribute:!0,type:String,converter:ue,reflect:!1,hasChanged:Ye},fe="finalized";class _ extends HTMLElement{constructor(){super(),this.__instanceProperties=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this.__reflectingProperty=null,this._initialize()}static addInitializer(e){var t;(t=this._initializers)!==null&&t!==void 0||(this._initializers=[]),this._initializers.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,i)=>{const s=this.__attributeNameForProperty(i,t);s!==void 0&&(this.__attributeToPropertyMap.set(s,i),e.push(s))}),e}static createProperty(e,t=Q){var i;if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const s=typeof e=="symbol"?Symbol():`__${e}`,o=this.getPropertyDescriptor(e,s,t);o!==void 0&&(Object.defineProperty(this.prototype,e,o),this.hasOwnProperty("__reactivePropertyKeys")||(this.__reactivePropertyKeys=new Set((i=this.__reactivePropertyKeys)!==null&&i!==void 0?i:[])),this.__reactivePropertyKeys.add(e))}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const o=this[e];this[t]=s,this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Q}static finalize(){if(this.hasOwnProperty(fe))return!1;this[fe]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this.__attributeToPropertyMap=new Map,this.hasOwnProperty(qe("properties"))){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}this.elementStyles=this.finalizeStyles(this.styles);{const t=(i,s=!1)=>{this.prototype.hasOwnProperty(i)&&T(s?"renamed-api":"removed-api",`\`${i}\` is implemented on class ${this.name}. It has been ${s?"renamed":"removed"} in this version of LitElement.`)};t("initialize"),t("requestUpdateInternal"),t("_getUpdateComplete",!0)}return!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)t.unshift(Se(s))}else e!==void 0&&t.push(Se(e));return t}static __attributeNameForProperty(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_initialize(){var e;this.__updatePromise=new Promise(t=>this.enableUpdating=t),this._$changedProperties=new Map,this.__saveInstanceProperties(),this.requestUpdate(),(e=this.constructor._initializers)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,i;((t=this.__controllers)!==null&&t!==void 0?t:this.__controllers=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this.__controllers)===null||t===void 0||t.splice(this.__controllers.indexOf(e)>>>0,1)}__saveInstanceProperties(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this.__instanceProperties.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return nt(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this.__controllers)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this.__controllers)===null||e===void 0||e.forEach(t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$attributeToProperty(e,i)}__propertyToAttribute(e,t,i=Q){var s,o;const a=this.constructor.__attributeNameForProperty(e,i);if(a!==void 0&&i.reflect===!0){const r=((o=(s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==null&&o!==void 0?o:ue.toAttribute)(t,i.type);this.constructor.enabledWarnings.indexOf("migration")>=0&&r===void 0&&T("undefined-attribute-value",`The attribute value for the ${e} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`),this.__reflectingProperty=e,r==null?this.removeAttribute(a):this.setAttribute(a,r),this.__reflectingProperty=null}}_$attributeToProperty(e,t){var i,s;const o=this.constructor,a=o.__attributeToPropertyMap.get(e);if(a!==void 0&&this.__reflectingProperty!==a){const c=o.getPropertyOptions(a),r=c.converter,l=(s=(i=r==null?void 0:r.fromAttribute)!==null&&i!==void 0?i:typeof r=="function"?r:null)!==null&&s!==void 0?s:ue.fromAttribute;this.__reflectingProperty=a,this[a]=l(t,c.type),this.__reflectingProperty=null}}requestUpdate(e,t,i){let s=!0;return e!==void 0&&(i=i||this.constructor.getPropertyOptions(e),(i.hasChanged||Ye)(this[e],t)?(this._$changedProperties.has(e)||this._$changedProperties.set(e,t),i.reflect===!0&&this.__reflectingProperty!==e&&(this.__reflectingProperties===void 0&&(this.__reflectingProperties=new Map),this.__reflectingProperties.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this.__updatePromise=this.__enqueueUpdate()),Je(this.localName)}async __enqueueUpdate(){this.isUpdatePending=!0;try{await this.__updatePromise}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e,t;if(!this.isUpdatePending)return;if(G==null||G({kind:"update"}),!this.hasUpdated){const o=[];if((e=this.constructor.__reactivePropertyKeys)===null||e===void 0||e.forEach(a=>{var c;this.hasOwnProperty(a)&&!(!((c=this.__instanceProperties)===null||c===void 0)&&c.has(a))&&o.push(a)}),o.length)throw new Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${o.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`)}this.__instanceProperties&&(this.__instanceProperties.forEach((o,a)=>this[a]=o),this.__instanceProperties=void 0);let i=!1;const s=this._$changedProperties;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),(t=this.__controllers)===null||t===void 0||t.forEach(o=>{var a;return(a=o.hostUpdate)===null||a===void 0?void 0:a.call(o)}),this.update(s)):this.__markUpdated()}catch(o){throw i=!1,this.__markUpdated(),o}i&&this._$didUpdate(s)}willUpdate(e){}_$didUpdate(e){var t;(t=this.__controllers)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e),this.isUpdatePending&&this.constructor.enabledWarnings.indexOf("change-in-update")>=0&&T("change-in-update",`Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`)}__markUpdated(){this._$changedProperties=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.__updatePromise}shouldUpdate(e){return!0}update(e){this.__reflectingProperties!==void 0&&(this.__reflectingProperties.forEach((t,i)=>this.__propertyToAttribute(i,this[i],t)),this.__reflectingProperties=void 0),this.__markUpdated()}updated(e){}firstUpdated(e){}}Be=fe;_[Be]=!0;_.elementProperties=new Map;_.elementStyles=[];_.shadowRootOptions={mode:"open"};j==null||j({ReactiveElement:_});{_.enabledWarnings=["change-in-update"];const n=function(e){e.hasOwnProperty(qe("enabledWarnings"))||(e.enabledWarnings=e.enabledWarnings.slice())};_.enableWarning=function(e){n(this),this.enabledWarnings.indexOf(e)<0&&this.enabledWarnings.push(e)},_.disableWarning=function(e){n(this);const t=this.enabledWarnings.indexOf(e);t>=0&&this.enabledWarnings.splice(t,1)}}((K=globalThis.reactiveElementVersions)!==null&&K!==void 0?K:globalThis.reactiveElementVersions=[]).push("1.3.3");globalThis.reactiveElementVersions.length>1&&T("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Z,X,ee,te;const d=n=>{!window.emitLitDebugLogEvents||window.dispatchEvent(new CustomEvent("lit-debug",{detail:n}))};let ot=0,z;(Z=globalThis.litIssuedWarnings)!==null&&Z!==void 0||(globalThis.litIssuedWarnings=new Set),z=(n,e)=>{e+=n?` See https://lit.dev/msg/${n} for more information.`:"",globalThis.litIssuedWarnings.has(e)||(console.warn(e),globalThis.litIssuedWarnings.add(e))},z("dev-mode","Lit is in dev mode. Not recommended for production!");const v=((X=window.ShadyDOM)===null||X===void 0?void 0:X.inUse)&&((ee=window.ShadyDOM)===null||ee===void 0?void 0:ee.noPatch)===!0?window.ShadyDOM.wrap:n=>n,C=globalThis.trustedTypes,xe=C?C.createPolicy("lit-html",{createHTML:n=>n}):void 0,at=n=>n,W=(n,e,t)=>at,rt=n=>{if(x!==W)throw new Error("Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.");x=n},dt=()=>{x=W},pe=(n,e,t)=>x(n,e,t),me="$lit$",b=`lit$${String(Math.random()).slice(9)}$`,Ke="?"+b,lt=`<${Ke}>`,N=document,O=(n="")=>N.createComment(n),H=n=>n===null||typeof n!="object"&&typeof n!="function",Ge=Array.isArray,ct=n=>Ge(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",ne=`[ 	
\f\r]`,ht=`[^ 	
\f\r"'\`<>=]`,ut=`[^\\s"'>=/]`,I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ee=1,ie=2,ft=3,Ce=/-->/g,ke=/>/g,S=new RegExp(`>|${ne}(?:(${ut}+)(${ne}*=${ne}*(?:${ht}|("|')|))|$)`,"g"),pt=0,Ae=1,mt=2,Ie=3,se=/'/g,oe=/"/g,Qe=/^(?:script|style|textarea|title)$/i,gt=1,ge=2,_e=1,V=2,yt=3,vt=4,_t=5,be=6,bt=7,wt=n=>(e,...t)=>(e.some(i=>i===void 0)&&console.warn(`Some template strings are undefined.
This is probably caused by illegal octal escape sequences.`),{_$litType$:n,strings:e,values:t}),g=wt(gt),P=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),Ne=new WeakMap,D=(n,e,t)=>{var i,s;if(e==null)throw new TypeError(`The container to render into may not be ${e}`);const o=ot++,a=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:e;let c=a._$litPart$;if(d==null||d({kind:"begin render",id:o,value:n,container:e,options:t,part:c}),c===void 0){const r=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;a._$litPart$=c=new R(e.insertBefore(O(),r),r,void 0,t!=null?t:{})}return c._$setValue(n),d==null||d({kind:"end render",id:o,value:n,container:e,options:t,part:c}),c};D.setSanitizer=rt,D.createSanitizer=pe,D._testOnlyClearSanitizerFactoryDoNotCallOrElse=dt;const E=N.createTreeWalker(N,129,null,!1);let x=W;const Tt=(n,e)=>{const t=n.length-1,i=[];let s=e===ge?"<svg>":"",o,a=I;for(let r=0;r<t;r++){const l=n[r];let m=-1,p,h=0,u;for(;h<l.length&&(a.lastIndex=h,u=a.exec(l),u!==null);)if(h=a.lastIndex,a===I){if(u[Ee]==="!--")a=Ce;else if(u[Ee]!==void 0)a=ke;else if(u[ie]!==void 0)Qe.test(u[ie])&&(o=new RegExp(`</${u[ie]}`,"g")),a=S;else if(u[ft]!==void 0)throw new Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions")}else a===S?u[pt]===">"?(a=o!=null?o:I,m=-1):u[Ae]===void 0?m=-2:(m=a.lastIndex-u[mt].length,p=u[Ae],a=u[Ie]===void 0?S:u[Ie]==='"'?oe:se):a===oe||a===se?a=S:a===Ce||a===ke?a=I:(a=S,o=void 0);console.assert(m===-1||a===S||a===se||a===oe,"unexpected parse state B");const J=a===S&&n[r+1].startsWith("/>")?" ":"";s+=a===I?l+lt:m>=0?(i.push(p),l.slice(0,m)+me+l.slice(m)+b+J):l+b+(m===-2?(i.push(void 0),r):J)}const c=s+(n[t]||"<?>")+(e===ge?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw")){let r="invalid template strings array";throw r=`
          Internal Error: expected template strings to be an array
          with a 'raw' field. Faking a template strings array by
          calling html or svg like an ordinary function is effectively
          the same as calling unsafeHtml and can lead to major security
          issues, e.g. opening your code up to XSS attacks.

          If you're using the html or svg tagged template functions normally
          and and still seeing this error, please file a bug at
          https://github.com/lit/lit/issues/new?template=bug_report.md
          and include information about your build tooling, if any.
        `.trim().replace(/\n */g,`
`),new Error(r)}return[xe!==void 0?xe.createHTML(c):c,i]};class M{constructor({strings:e,["_$litType$"]:t},i){this.parts=[];let s,o=0,a=0;const c=e.length-1,r=this.parts,[l,m]=Tt(e,t);if(this.el=M.createElement(l,i),E.currentNode=this.el.content,t===ge){const p=this.el.content,h=p.firstChild;h.remove(),p.append(...h.childNodes)}for(;(s=E.nextNode())!==null&&r.length<c;){if(s.nodeType===1){{const p=s.localName;if(/^(?:textarea|template)$/i.test(p)&&s.innerHTML.includes(b)){const h=`Expressions are not supported inside \`${p}\` elements. See https://lit.dev/msg/expression-in-${p} for more information.`;if(p==="template")throw new Error(h);z("",h)}}if(s.hasAttributes()){const p=[];for(const h of s.getAttributeNames())if(h.endsWith(me)||h.startsWith(b)){const u=m[a++];if(p.push(h),u!==void 0){const Ze=s.getAttribute(u.toLowerCase()+me).split(b),U=/([.?@])?(.*)/.exec(u);r.push({type:_e,index:o,name:U[2],strings:Ze,ctor:U[1]==="."?St:U[1]==="?"?xt:U[1]==="@"?Et:F})}else r.push({type:be,index:o})}for(const h of p)s.removeAttribute(h)}if(Qe.test(s.tagName)){const p=s.textContent.split(b),h=p.length-1;if(h>0){s.textContent=C?C.emptyScript:"";for(let u=0;u<h;u++)s.append(p[u],O()),E.nextNode(),r.push({type:V,index:++o});s.append(p[h],O())}}}else if(s.nodeType===8)if(s.data===Ke)r.push({type:V,index:o});else{let h=-1;for(;(h=s.data.indexOf(b,h+1))!==-1;)r.push({type:bt,index:o}),h+=b.length-1}o++}d==null||d({kind:"template prep",template:this,clonableTemplate:this.el,parts:this.parts,strings:e})}static createElement(e,t){const i=N.createElement("template");return i.innerHTML=e,i}}function k(n,e,t=n,i){var s,o,a,c;if(e===P)return e;let r=i!==void 0?(s=t.__directives)===null||s===void 0?void 0:s[i]:t.__directive;const l=H(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==l&&((o=r==null?void 0:r._$notifyDirectiveConnectionChanged)===null||o===void 0||o.call(r,!1),l===void 0?r=void 0:(r=new l(n),r._$initialize(n,t,i)),i!==void 0?((a=(c=t).__directives)!==null&&a!==void 0?a:c.__directives=[])[i]=r:t.__directive=r),r!==void 0&&(e=k(n,r._$resolve(n,e.values),r,i)),e}class $t{constructor(e,t){this._parts=[],this._$disconnectableChildren=void 0,this._$template=e,this._$parent=t}get parentNode(){return this._$parent.parentNode}get _$isConnected(){return this._$parent._$isConnected}_clone(e){var t;const{el:{content:i},parts:s}=this._$template,o=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:N).importNode(i,!0);E.currentNode=o;let a=E.nextNode(),c=0,r=0,l=s[0];for(;l!==void 0;){if(c===l.index){let m;l.type===V?m=new R(a,a.nextSibling,this,e):l.type===_e?m=new l.ctor(a,l.name,l.strings,this,e):l.type===be&&(m=new Ct(a,this,e)),this._parts.push(m),l=s[++r]}c!==(l==null?void 0:l.index)&&(a=E.nextNode(),c++)}return o}_update(e){let t=0;for(const i of this._parts)i!==void 0&&(d==null||d({kind:"set part",part:i,value:e[t],valueIndex:t,values:e,templateInstance:this}),i.strings!==void 0?(i._$setValue(e,i,t),t+=i.strings.length-2):i._$setValue(e[t])),t++}}class R{constructor(e,t,i,s){var o;this.type=V,this._$committedValue=f,this._$disconnectableChildren=void 0,this._$startNode=e,this._$endNode=t,this._$parent=i,this.options=s,this.__isConnected=(o=s==null?void 0:s.isConnected)!==null&&o!==void 0?o:!0,this._textSanitizer=void 0}get _$isConnected(){var e,t;return(t=(e=this._$parent)===null||e===void 0?void 0:e._$isConnected)!==null&&t!==void 0?t:this.__isConnected}get parentNode(){let e=v(this._$startNode).parentNode;const t=this._$parent;return t!==void 0&&e.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$startNode}get endNode(){return this._$endNode}_$setValue(e,t=this){if(this.parentNode===null)throw new Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");e=k(this,e,t),H(e)?e===f||e==null||e===""?(this._$committedValue!==f&&(d==null||d({kind:"commit nothing to child",start:this._$startNode,end:this._$endNode,parent:this._$parent,options:this.options}),this._$clear()),this._$committedValue=f):e!==this._$committedValue&&e!==P&&this._commitText(e):e._$litType$!==void 0?this._commitTemplateResult(e):e.nodeType!==void 0?this._commitNode(e):ct(e)?this._commitIterable(e):this._commitText(e)}_insert(e,t=this._$endNode){return v(v(this._$startNode).parentNode).insertBefore(e,t)}_commitNode(e){var t;if(this._$committedValue!==e){if(this._$clear(),x!==W){const i=(t=this._$startNode.parentNode)===null||t===void 0?void 0:t.nodeName;if(i==="STYLE"||i==="SCRIPT"){let s="Forbidden";throw i==="STYLE"?s="Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and make do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.":s="Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.",new Error(s)}}d==null||d({kind:"commit node",start:this._$startNode,parent:this._$parent,value:e,options:this.options}),this._$committedValue=this._insert(e)}}_commitText(e){if(this._$committedValue!==f&&H(this._$committedValue)){const t=v(this._$startNode).nextSibling;this._textSanitizer===void 0&&(this._textSanitizer=pe(t,"data","property")),e=this._textSanitizer(e),d==null||d({kind:"commit text",node:t,value:e,options:this.options}),t.data=e}else{const t=document.createTextNode("");this._commitNode(t),this._textSanitizer===void 0&&(this._textSanitizer=pe(t,"data","property")),e=this._textSanitizer(e),d==null||d({kind:"commit text",node:t,value:e,options:this.options}),t.data=e}this._$committedValue=e}_commitTemplateResult(e){var t;const{values:i,["_$litType$"]:s}=e,o=typeof s=="number"?this._$getTemplate(e):(s.el===void 0&&(s.el=M.createElement(s.h,this.options)),s);if(((t=this._$committedValue)===null||t===void 0?void 0:t._$template)===o)d==null||d({kind:"template updating",template:o,instance:this._$committedValue,parts:this._$committedValue._parts,options:this.options,values:i}),this._$committedValue._update(i);else{const a=new $t(o,this),c=a._clone(this.options);d==null||d({kind:"template instantiated",template:o,instance:a,parts:a._parts,options:this.options,fragment:c,values:i}),a._update(i),d==null||d({kind:"template instantiated and updated",template:o,instance:a,parts:a._parts,options:this.options,fragment:c,values:i}),this._commitNode(c),this._$committedValue=a}}_$getTemplate(e){let t=Ne.get(e.strings);return t===void 0&&Ne.set(e.strings,t=new M(e)),t}_commitIterable(e){Ge(this._$committedValue)||(this._$committedValue=[],this._$clear());const t=this._$committedValue;let i=0,s;for(const o of e)i===t.length?t.push(s=new R(this._insert(O()),this._insert(O()),this,this.options)):s=t[i],s._$setValue(o),i++;i<t.length&&(this._$clear(s&&v(s._$endNode).nextSibling,i),t.length=i)}_$clear(e=v(this._$startNode).nextSibling,t){var i;for((i=this._$notifyConnectionChanged)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$endNode;){const s=v(e).nextSibling;v(e).remove(),e=s}}setConnected(e){var t;if(this._$parent===void 0)this.__isConnected=e,(t=this._$notifyConnectionChanged)===null||t===void 0||t.call(this,e);else throw new Error("part.setConnected() may only be called on a RootPart returned from render().")}}class F{constructor(e,t,i,s,o){this.type=_e,this._$committedValue=f,this._$disconnectableChildren=void 0,this.element=e,this.name=t,this._$parent=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$committedValue=new Array(i.length-1).fill(new String),this.strings=i):this._$committedValue=f,this._sanitizer=void 0}get tagName(){return this.element.tagName}get _$isConnected(){return this._$parent._$isConnected}_$setValue(e,t=this,i,s){const o=this.strings;let a=!1;if(o===void 0)e=k(this,e,t,0),a=!H(e)||e!==this._$committedValue&&e!==P,a&&(this._$committedValue=e);else{const c=e;e=o[0];let r,l;for(r=0;r<o.length-1;r++)l=k(this,c[i+r],t,r),l===P&&(l=this._$committedValue[r]),a||(a=!H(l)||l!==this._$committedValue[r]),l===f?e=f:e!==f&&(e+=(l!=null?l:"")+o[r+1]),this._$committedValue[r]=l}a&&!s&&this._commitValue(e)}_commitValue(e){e===f?v(this.element).removeAttribute(this.name):(this._sanitizer===void 0&&(this._sanitizer=x(this.element,this.name,"attribute")),e=this._sanitizer(e!=null?e:""),d==null||d({kind:"commit attribute",element:this.element,name:this.name,value:e,options:this.options}),v(this.element).setAttribute(this.name,e!=null?e:""))}}class St extends F{constructor(){super(...arguments),this.type=yt}_commitValue(e){this._sanitizer===void 0&&(this._sanitizer=x(this.element,this.name,"property")),e=this._sanitizer(e),d==null||d({kind:"commit property",element:this.element,name:this.name,value:e,options:this.options}),this.element[this.name]=e===f?void 0:e}}const Pt=C?C.emptyScript:"";class xt extends F{constructor(){super(...arguments),this.type=vt}_commitValue(e){d==null||d({kind:"commit boolean attribute",element:this.element,name:this.name,value:!!(e&&e!==f),options:this.options}),e&&e!==f?v(this.element).setAttribute(this.name,Pt):v(this.element).removeAttribute(this.name)}}class Et extends F{constructor(e,t,i,s,o){if(super(e,t,i,s,o),this.type=_t,this.strings!==void 0)throw new Error(`A \`<${e.localName}>\` has a \`@${t}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`)}_$setValue(e,t=this){var i;if(e=(i=k(this,e,t,0))!==null&&i!==void 0?i:f,e===P)return;const s=this._$committedValue,o=e===f&&s!==f||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,a=e!==f&&(s===f||o);d==null||d({kind:"commit event listener",element:this.element,name:this.name,value:e,options:this.options,removeListener:o,addListener:a,oldListener:s}),o&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,e),this._$committedValue=e}handleEvent(e){var t,i;typeof this._$committedValue=="function"?this._$committedValue.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$committedValue.handleEvent(e)}}class Ct{constructor(e,t,i){this.element=e,this.type=be,this._$disconnectableChildren=void 0,this._$parent=t,this.options=i}get _$isConnected(){return this._$parent._$isConnected}_$setValue(e){d==null||d({kind:"commit to element binding",element:this.element,value:e,options:this.options}),k(this,e)}}const ae=window.litHtmlPolyfillSupportDevMode;ae==null||ae(M,R);((te=globalThis.litHtmlVersions)!==null&&te!==void 0?te:globalThis.litHtmlVersions=[]).push("2.2.6");globalThis.litHtmlVersions.length>1&&z("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var re,de,le;let we;{const n=(re=globalThis.litIssuedWarnings)!==null&&re!==void 0?re:globalThis.litIssuedWarnings=new Set;we=(e,t)=>{t+=` See https://lit.dev/msg/${e} for more information.`,n.has(t)||(console.warn(t),n.add(t))}}class y extends _{constructor(){super(...arguments),this.renderOptions={host:this},this.__childPart=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this.__childPart=D(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this.__childPart)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.__childPart)===null||e===void 0||e.setConnected(!1)}render(){return P}}y.finalized=!0;y._$litElement$=!0;(de=globalThis.litElementHydrateSupport)===null||de===void 0||de.call(globalThis,{LitElement:y});const ce=globalThis.litElementPolyfillSupportDevMode;ce==null||ce({LitElement:y});y.finalize=function(){if(!_.finalize.call(this))return!1;const e=(t,i,s=!1)=>{if(t.hasOwnProperty(i)){const o=(typeof t=="function"?t:t.constructor).name;we(s?"renamed-api":"removed-api",`\`${i}\` is implemented on class ${o}. It has been ${s?"renamed":"removed"} in this version of LitElement.`)}};return e(this,"render"),e(this,"getStyles",!0),e(this.prototype,"adoptStyles"),!0};((le=globalThis.litElementVersions)!==null&&le!==void 0?le:globalThis.litElementVersions=[]).push("3.2.1");globalThis.litElementVersions.length>1&&we("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kt=(n,e)=>(window.customElements.define(n,e),e),At=(n,e)=>{const{kind:t,elements:i}=e;return{kind:t,elements:i,finisher(s){window.customElements.define(n,s)}}},w=n=>e=>typeof e=="function"?kt(n,e):At(n,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const It=(n,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,n)}},Nt=(n,e,t)=>{e.constructor.createProperty(t,n)};function B(n){return(e,t)=>t!==void 0?Nt(n,e,t):It(n,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var he;((he=window.HTMLSlotElement)===null||he===void 0?void 0:he.prototype.assignedElements)!=null;var Ot=Object.defineProperty,Ht=Object.getOwnPropertyDescriptor,Mt=(n,e,t,i)=>{for(var s=i>1?void 0:i?Ht(e,t):e,o=n.length-1,a;o>=0;o--)(a=n[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ot(e,t,s),s};let Rt=(n,e)=>{let t=0;n.forEach(i=>{i.isIntersecting&&(setTimeout(()=>{i.target.show()},t*100),t++)})};const Lt=new IntersectionObserver(Rt,{rootMargin:"-100px"});let Oe=class extends y{static get styles(){return $`
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
    `}show(){this.setAttribute("shown","")}connectedCallback(){super.connectedCallback(),this.style.setProperty("--rot",`${(Math.random()-.5)*4}deg`),Lt.observe(this)}render(){return g`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};Oe=Mt([w("nida-card")],Oe);var Ut=Object.defineProperty,jt=Object.getOwnPropertyDescriptor,L=(n,e,t,i)=>{for(var s=i>1?void 0:i?jt(e,t):e,o=n.length-1,a;o>=0;o--)(a=n[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ut(e,t,s),s};let A=class extends y{constructor(){super(),this._image=new Image,this._image.addEventListener("load",()=>{setTimeout(()=>{this._image.classList.remove("hidden")},10)})}static get styles(){return $`
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
		`}connectedCallback(){super.connectedCallback()}attributeChangedCallback(n,e,t){super.attributeChangedCallback(n,e,t),n==="src"&&(this._image.src=t,this._image.width=+(this.width||0),this._image.height=+(this.height||0),this._image.loading="lazy",this._image.alt=this.alt||"",this._image.classList.add("hidden"))}render(){return g`${this._image}`}};L([B({type:String})],A.prototype,"src",2);L([B({type:String})],A.prototype,"alt",2);L([B({type:String})],A.prototype,"width",2);L([B({type:String})],A.prototype,"height",2);A=L([w("aui-lazyimage")],A);var Dt=Object.defineProperty,zt=Object.getOwnPropertyDescriptor,Vt=(n,e,t,i)=>{for(var s=i>1?void 0:i?zt(e,t):e,o=n.length-1,a;o>=0;o--)(a=n[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Dt(e,t,s),s};let He=class extends y{constructor(){super(...arguments),this.cards=[],this.init=!1}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),window.addEventListener("cards",e=>{this.cards=e.detail});const n=document.querySelector(".page");if(n)n.addEventListener("scroll",()=>{!this.init&&this.cards.length>0&&(this.init=!0,this.requestUpdate())});else throw new Error("Something went wrong")}renderMedia(n){switch(n.type){default:return n.embed?g`<iframe
            src="${n.embed}"
            width="100%"
            height="280px"
            style="border: none;"
            allow="autoplay"
          ></iframe>`:g`Media not suppoerted. ${n.type}`}}renderCard(n){return g`
      <nida-card>
        <div class="message">
          <nida-message>${n.message}</nida-message>
        </div>

        ${n.media?g` <div class="media">${this.renderMedia(n.media)}</div> `:""}

        <div class="name">
          <span>${n.name}</span>
        </div>
      </nida-card>
    `}render(){if(!this.init)return;const n=[];let e=0;for(let t of this.cards){const i=e%3;n[i]=n[i]||[],n[i].push(t),e++}return g`
      <div class="grid">
        ${n.map(t=>g`
            <div class="column">
              ${t.map(i=>this.renderCard(i))}
            </div>
          `)}
      </div>
    `}};He=Vt([w("nida-cardlist")],He);const Wt=["fanfJAM fanfJAM fanfJAM fanfJAM fanfJAM fanfJAM","Happy Streamerversary!","fanfJAM fanfDance fanfJAM","fanfDance fanfDance fanfDance","fanfJAM fanfJAM fanfJAM fanfJAM","fanfJAM fanfJAM fanfJAM fanfJAM fanfJAM","fanfDance fanfDance","fanfJAM fanfDance fanfJAM"];var Ft=Object.defineProperty,Bt=Object.getOwnPropertyDescriptor,Jt=(n,e,t,i)=>{for(var s=i>1?void 0:i?Bt(e,t):e,o=n.length-1,a;o>=0;o--)(a=n[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Ft(e,t,s),s};let Me=class extends y{constructor(){super(...arguments),this.messages=[]}static get styles(){return $`
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
    `}connectedCallback(){super.connectedCallback();const n=()=>{const t=Wt,i=t[Math.floor(t.length*Math.random())],s=document.createElement("nida-message");s.className="message",s.innerHTML=i,this.messages.push(s),this.messages.length>5&&this.messages.shift()};n(),n(),n(),n();const e=()=>{n(),this.requestUpdate(),setTimeout(()=>e(),750*Math.random()+500*1.5)};e()}render(){return g`
      <div class="wrapper">
        <div class="messages">${this.messages}</div>
      </div>
    `}};Me=Jt([w("nida-chat")],Me);var qt=Object.defineProperty,Yt=Object.getOwnPropertyDescriptor,Kt=(n,e,t,i)=>{for(var s=i>1?void 0:i?Yt(e,t):e,o=n.length-1,a;o>=0;o--)(a=n[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&qt(e,t,s),s};let Re=class extends y{constructor(n){super(),this.original=n,this.position=null}static get styles(){return $`
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
    `}connectedCallback(){super.connectedCallback(),this.position=this.original.getBoundingClientRect(),window.addEventListener("keydown",n=>{n.key==="Escape"&&this.close()})}updated(){var e;const n=(e=this.shadowRoot)==null?void 0:e.querySelector(".content");!n||!this.position||(n.style.width=this.position.width+"px",n.style.height=this.position.height+"px",n.style.transform=`translate(${this.position.x}px, ${this.position.y}px)`,n.offsetHeight,this.original&&(this.original.style.opacity="0",this.original.style.transition="opacity .125s ease"),n.style.transform="translate(0, 0)",n.style.width="900px",n.style.height="auto")}close(){this.remove(),this.original&&(this.original.style.opacity="")}render(){return g`
      <div
        class="blackbox"
        @click="${n=>{n.target.className==="blackbox"&&this.close()}}"
      >
        <div class="close-btn" @click="${n=>this.close()}">
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
    `}};Re=Kt([w("image-show")],Re);const Gt=[{date:"10/20/2022 1:02:40",message:"Hi \u6247\u5B50\u6247\u5B50 ( fan fan), congratulations on your 2 years and also joing TSM. Hopefully you can continue to do the things you like and PogO with Joey. Im gonna take this opportunity to say please go find May. PogO fanfL",media:{src:"dist/media/1V9PtoX7PAzE1QqvkLaKknUTecaOCZ6iJ.png",type:"image/png",embed:"https://drive.google.com/file/d/1V9PtoX7PAzE1QqvkLaKknUTecaOCZ6iJ/preview"},name:"Little Knee"},{date:"10/20/2022 1:04:59",message:"HELLOGE FANFAN HAPPY 2 YEAR STREAMERVERSARY!! u have come a long way and all of us are incredibly proud of you! even though I don't watch as often anymore, I will never forget the days of degen watching your streams and having a blast, as well as the time we met in singapore. i hope you're doing well and i wish nothing but the best for you fanfJAM",media:{src:"dist/media/1JtsBTFz1RZp8SQU2uZwEGWIIldYPc6Y2.png",type:"image/png",embed:"https://drive.google.com/file/d/1JtsBTFz1RZp8SQU2uZwEGWIIldYPc6Y2/preview"},name:"felix"},{date:"10/20/2022 1:11:47",message:"Yo happy 2  stream anniversary! Thanks for being such an amazing streamer that I can enjoy no matter what shitty mood I\u2019m in. Your irl streams have been so enjoyable to watch and I\u2019m glad I\u2019m apart of such an insane community such as yours. And stop vaping so much, I told you on your birthday last time dummy. ",media:null,name:"Plasticmonk"},{date:"10/20/2022 1:41:04",message:"Happy 2 years ??? u are interest ! 3 fanfLL",media:{src:"dist/media/1G0rA3FT98_dc8nrolhIHCG7gHRfRRUV5.jpeg",type:"image/jpeg",embed:"https://drive.google.com/file/d/1G0rA3FT98_dc8nrolhIHCG7gHRfRRUV5/preview"},name:"Alakutubak"},{date:"10/20/2022 1:48:25",message:"Happy 2nd Year Streamerversary! It's been such an amazing journey seeing you evolve to an IRL streamer and taking us along on your journeys around the world. Thanks for all the PogO and fun times and can't wait to see what's next!",media:{src:"dist/media/1N0y3SubmuW_sV3w9pPrDQ-acqZvO0sH2.png",type:"image/png",embed:"https://drive.google.com/file/d/1N0y3SubmuW_sV3w9pPrDQ-acqZvO0sH2/preview"},name:"Echoge"},{date:"10/20/2022 2:19:27",message:"HAP 2 YEARS OF STREAMING FUNFUN! its been crazy seeing how quickly you've grown in such a short amount of time and I'm so glad that I got to be a part of this community for a while. From watching you start off streaming in ur living room with the hairbrush mic to the crazy 24 hr streams to watching you travel all over the world, its been really special. I wish I could be around more often but life has been busy. From one of ur oldest fanfan fans, NUT o7 ",media:null,name:"DarthNutella"},{date:"10/20/2022 6:07:56",message:"Happy 2 yr strimversary! Hope you strim more so I can Modge more times. Also don't forget to get Fudge some Calvin Klein daphCheer",media:null,name:"Hero_Egg"},{date:"10/20/2022 7:35:46",message:"Because of your streaming, my work-from-home days were more joyful than I expected. I have to say thank you and happy the 2nd streaming anniversary!",media:null,name:"nightfalleve"},{date:"10/20/2022 8:49:22",message:"This looks hella sus... whats this shit for again?  FanFan?  Who tf is FanFan? ...oh that Walmart Daphne?  Umm... sure I guess I can write something... Happy 2 Year Anniversary fanfan.  I'd write something longer and more wholesome, but I don't like how this google doc won't let me write paragraphs and I'm subjected to one long ass paragraph.  I'll save wholesome skakge for your b-day where I can write more freely.  I love ya fam, and if you ever need anything from me, I'll be there for you homie.  Attached is some exclusive Twitch Con behind the scenes content. (idk if this shit even worked lol) ",media:null,name:"Skakge"},{date:"10/20/2022 8:51:38",message:"Happy 2 yr and many more of THIS and THAT , THIS and THAT , THIS and THAT , THIS and THAT , THIS and THAT , THIS and THAT , THIS and THAT , THIS and THAT , THIS and THAT THIS and THAT , THIS and THAT , THIS and THAT , THIS and THAT , THIS and THAT , THIS and THAT , THIS and THAT , THIS and THAT , THIS and THAT , THIS and THAT , THIS and THAT , THIS and THAT , THIS and THAT , THIS and THAT , THIS and THAT  ",media:null,name:"BetaSeange"},{date:"10/20/2022 10:14:28",message:"Just attaching the video that didn't attach lol",media:{src:"dist/media/19ae4OlkziDECOsHiC7ZIXVuxTraLH6LT.jpeg",type:"image/jpeg",embed:"https://drive.google.com/file/d/19ae4OlkziDECOsHiC7ZIXVuxTraLH6LT/preview"},name:"Skakge"},{date:"10/20/2022 22:07:46",message:"fanfJAM happy 2 years, here's to many more!! thanks for all the fun content, and stepping out of your comfort zone to show us the world! i wish you nothing but the best moving forword fanfLL",media:null,name:"BoundlessDreamer"},{date:"10/20/2022 11:12:31",message:`2 years, same shirt lol jk happy two year streamerversary on twitch to my favorite  apex looter/hoarder and awkward irl streamer. thanks for being yourself at home during pc streams and irl streams, playing weird video games and making me VIP.

 congrats to you on 2 years of streaming and here's to your continued success for many more years in streaming and every endeavour you embark on. stay beautiful, funny and sweet. tons of love to you fione fione from Dre fanfL`,media:null,name:"Dre"},{date:"10/20/2022 15:41:05",message:"HAPPY TWO YEARS FINFON ONE OF THE NEWER PEOPLE BUT IT'S BEEN VERY POG fanfJAM fanfJAM fanfJAM fanfJAM ",media:null,name:"Sammy/kasino"},{date:"10/20/2022 23:40:58",message:"fanfHiyo I can't believe I have been stuck in stream watching for over two months, love it all. Anyway keep up the hard work your content always getting better. fanfL",media:null,name:"sputnikfan!"},{date:"10/21/2022 3:51:40",message:`Happy 2 years fanfan.
I've only been here for one of those years Sadge but I enjoyed every minute of it. No matter what you stream your personality carries the content.
Hoping to see you stream for many more years in the future.`,media:null,name:"morning wood"},{date:"10/20/2022 10:46:23",message:`My dearest fanfan, fiona, flimflom, funfun, fonfon, flingflong, fionafiona, walmart daph, khaleesi, 110, burp girl, international space station, stepsis, joey\u2019s business partner, punisher of porcelain, destroyer of toilets and of course my favorite thing to call you: Queen.

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
`,media:{src:"dist/media/1-Ng_eQTKIDPN-QDTGMvRzgUIy3N9h_D1.jpeg",type:"image/jpeg",embed:"https://drive.google.com/file/d/1-Ng_eQTKIDPN-QDTGMvRzgUIy3N9h_D1/preview"},name:"wibuge"}],Le={showPage(){const n=document.querySelector(".page");n&&(n.removeAttribute("loading"),window.dispatchEvent(new CustomEvent("cards",{detail:Gt})))}},Ue=["Hey Nida!","Im sorry to remind you,","but today is your birthday! :O","To celebrate,","we decided to make a game for you.","jk","But look at this!"];var Qt=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,Xt=(n,e,t,i)=>{for(var s=i>1?void 0:i?Zt(e,t):e,o=n.length-1,a;o>=0;o--)(a=n[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&Qt(e,t,s),s};let je=class extends y{constructor(){super(),this.index=-1,location.hash!=="#intro"&&(location.hash="",localStorage.setItem("into-finished","true"),Le.showPage(),this.remove())}static get styles(){return $`
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
    `}connectedCallback(){super.connectedCallback(),this.tabIndex=0,window.addEventListener("keydown",this.onKeyDown.bind(this)),this.next()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this.onKeyDown.bind(this))}onKeyDown(n){n.code==="Space"&&this.next()}next(){this.index++,this.index>Ue.length-1?this.onEnded():(this.headline=Ue[this.index],this.requestUpdate())}onEnded(){location.hash="";const n=document.createElement("video");n.src="./nida-bday-king.mp4",n.muted=!0,n.className="intro-video",n.oncanplay=()=>{n.play()},n.onanimationend=()=>{n.remove()},document.body.append(n),setTimeout(()=>{localStorage.setItem("into-finished","true"),Le.showPage(),this.remove()},3e3)}render(){return g`
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
    `}};je=Xt([w("nida-intro")],je);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const en={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},tn=n=>(...e)=>({_$litDirective$:n,values:e});class nn{constructor(e){}get _$isConnected(){return this._$parent._$isConnected}_$initialize(e,t,i){this.__part=e,this._$parent=t,this.__attributeIndex=i}_$resolve(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const sn=1;class Te extends nn{constructor(e){if(super(e),this._value=f,e.type!==en.CHILD)throw new Error(`${this.constructor.directiveName}() can only be used in child bindings`)}render(e){if(e===f||e==null)return this._templateResult=void 0,this._value=e;if(e===P)return e;if(typeof e!="string")throw new Error(`${this.constructor.directiveName}() called with a non-string value`);if(e===this._value)return this._templateResult;this._value=e;const t=[e];return t.raw=t,this._templateResult={_$litType$:this.constructor.resultType,strings:t,values:[]}}}Te.directiveName="unsafeHTML";Te.resultType=sn;const on=tn(Te),De={nidali1Clown:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_4adcf9a1f7ef43afb59243f26fde7845/default/dark/2.0",fanfL:"//static-cdn.jtvnw.net/emoticons/v2/307494658/default/dark/2.0",fanfLL:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_445defae54aa42debd7374d2bc7a419e/default/dark/2.0",nidali1Yes:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_a9dc49e835ae4b1381bfa4ed520b7882/default/dark/2.0",nidali1Knife:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_2aa813508979418492e8d778ccd8d3df/default/dark/2.0",nidali1Pew:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_b9227add596045da95066c117d899695/default/dark/2.0",nidali1Pog:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_7a256807916c4f609de80dc7d71bc8dd/default/dark/2.0",nidali1Thankyou:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_956e65ab20d048dc97c99ff52e296200/default/dark/2.0",nidali1NidaCry:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_ecd71f3ad1c349459c0e64cd3e63eabd/default/dark/2.0",nidali1NidaHeart:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_bcc47849ebd94260b11402758d239de9/default/dark/2.0",nidali1NidaWave:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_5c9c5b1b75434261b39c615ad3b62dba/default/dark/2.0",nidali1PowderPat:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_a2e29618473840c88b58137ff8b5f9de/default/dark/2.0",nidali1NidaHype:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_da86360a2caa405199c8e270013f3ecd/default/dark/2.0",nidali1Huh:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_8125272c5aba40fc839d7b62adef22ca/default/dark/2.0",nidali1Sip:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_99e6fc19b9d3409791243a93247b09a2/default/dark/2.0",nidali1Oop:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_d8858cdff3d449518d523310776019d9/default/dark/2.0",nidali1Swog:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_643649db5cfe49e38344033b8fb6518f/default/dark/2.0",yasBih:"https://cdn.betterttv.net/emote/6167425a054a252a431ef190/2x",PogO:"https://cdn.betterttv.net/emote/632321258d54637377075e88/2x",THIS:"https://cdn.7tv.app/emote/618330c5f1ae15abc7ebb8c6/2x.webp",THAT:"https://cdn.7tv.app/emote/60c6026823d056b5cac03c62/2x.webp",daphCheer:"https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_c0d5dc8059744989a358d35f91d52087/animated/light/2.0",fanfJAM:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_903425b2eebf40c783beb374680d970e/default/dark/2.0",fanfO:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_ce1efb7f500744e6842d9c405b9264b3/default/dark/2.0",fanfKEKW:"//static-cdn.jtvnw.net/emoticons/v2/305554638/default/dark/2.0",OMEGALUL:"//cdn.frankerfacez.com/emote/398911/2",fanfHiyo:"//static-cdn.jtvnw.net/emoticons/v2/306282608/default/dark/2.0",fanfDance:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_c079d42bbaa944368e5f600c6c0f3e5b/default/dark/2.0",Sadge:"//cdn.frankerfacez.com/emote/518576/2",nidaClown:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_4adcf9a1f7ef43afb59243f26fde7845/default/dark/2.0",NidaHeart:"//static-cdn.jtvnw.net/emoticons/v2/emotesv2_bcc47849ebd94260b11402758d239de9/default/dark/2.0"};var an=Object.defineProperty,rn=Object.getOwnPropertyDescriptor,dn=(n,e,t,i)=>{for(var s=i>1?void 0:i?rn(e,t):e,o=n.length-1,a;o>=0;o--)(a=n[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&an(e,t,s),s};function ln(n){return n.matchAll(/[\u{1f300}-\u{1f5ff}\u{1f900}-\u{1f9ff}\u{1f600}-\u{1f64f}\u{1f680}-\u{1f6ff}\u{2600}-\u{26ff}\u{2700}-\u{27bf}\u{1f1e6}-\u{1f1ff}\u{1f191}-\u{1f251}\u{1f004}\u{1f0cf}\u{1f170}-\u{1f171}\u{1f17e}-\u{1f17f}\u{1f18e}\u{3030}\u{2b50}\u{2b55}\u{2934}-\u{2935}\u{2b05}-\u{2b07}\u{2b1b}-\u{2b1c}\u{3297}\u{3299}\u{303d}\u{00a9}\u{00ae}\u{2122}\u{23f3}\u{24c2}\u{23e9}-\u{23ef}\u{25b6}\u{23f8}-\u{23fa}]/gu)}let ze=class extends y{constructor(){super(...arguments),this.content=""}static get styles(){return $`
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
    `}onContentChange(){const n=[...this.childNodes].find(s=>s.nodeName==="#text"),t=(n==null?void 0:n.data).replaceAll(`
`,` 
`).split(" "),i=[];for(let s of t)if(s=s.replace(/:/g,""),s in De)i.push(`<span class="emote"><img src="${De[s]}" alt="${s}" /></span>`);else{let o=s;for(let a of ln(s))o=o.replace(a[0],`<span class="emote">${a[0]}</span>`);i.push(o)}this.content=i.join(" "),this.requestUpdate()}render(){return g`
      <p class="message">${on(this.content)}</p>
      <slot @slotchange="${this.onContentChange}"></slot>
    `}};ze=dn([w("nida-message")],ze);var cn=Object.defineProperty,hn=Object.getOwnPropertyDescriptor,un=(n,e,t,i)=>{for(var s=i>1?void 0:i?hn(e,t):e,o=n.length-1,a;o>=0;o--)(a=n[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&cn(e,t,s),s};let Ve=class extends y{static get styles(){return $`
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
    `}connectedCallback(){super.connectedCallback();const n=document.querySelector(".page");if(n){const e=()=>{Math.floor(n.scrollTop/20)>0?this.removeAttribute("shown"):this.setAttribute("shown","")};n.addEventListener("scroll",e),e()}else throw new Error("Something went wrong")}render(){return g`
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
    `}};Ve=un([w("scroll-indicator")],Ve);var fn=Object.defineProperty,pn=Object.getOwnPropertyDescriptor,mn=(n,e,t,i)=>{for(var s=i>1?void 0:i?pn(e,t):e,o=n.length-1,a;o>=0;o--)(a=n[o])&&(s=(i?a(e,t,s):a(s))||s);return i&&s&&fn(e,t,s),s};async function gn(n){return new Promise(e=>{setTimeout(()=>{e(1)},n)})}let We=class extends y{constructor(){super(...arguments),this.content=[],this.lastData=null}static get styles(){return $`
      :host {
        display: contents;
      }

      slot {
        display: block;
        width: 0;
        height: 0;
        opacity: 0;
      }
    `}async onContentChange(){const n=[...this.childNodes].find(i=>i.nodeName==="#text"),e=n==null?void 0:n.data,t=e.split("");this.content=[],this.lastData=e;for(let i of t){if(this.lastData!=e)break;this.content.push(i),this.requestUpdate(),await gn(20+Math.random()*50)}}connectedCallback(){super.connectedCallback(),new MutationObserver(e=>{this.onContentChange()}).observe(this,{characterData:!0,childList:!0,subtree:!0}),this.onContentChange()}render(){return g` ${this.content.join("")} `}};We=mn([w("types-text")],We);
