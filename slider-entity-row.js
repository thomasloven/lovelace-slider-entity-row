/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e$3=Symbol(),n$4=new Map;class s$3{constructor(t,n){if(this._$cssResult$=!0,n!==e$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t;}get styleSheet(){let e=n$4.get(this.cssText);return t$1&&void 0===e&&(n$4.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o$3=t=>new s$3("string"==typeof t?t:t+"",e$3),r$2=(t,...n)=>{const o=1===t.length?t[0]:n.reduce(((e,n,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[s+1]),t[0]);return new s$3(o,e$3)},i$2=(e,n)=>{t$1?e.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const n=document.createElement("style"),s=window.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=t.cssText,e.appendChild(n);}));},S$1=t$1?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return o$3(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$2;const e$2=window.trustedTypes,r$1=e$2?e$2.emptyScript:"",h$1=window.reactiveElementPolyfillSupport,o$2={toAttribute(t,i){switch(i){case Boolean:t=t?r$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},n$3=(t,i)=>i!==t&&(i==i||t==t),l$2={attribute:!0,type:String,converter:o$2,reflect:!1,hasChanged:n$3};class a$1 extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o();}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Eh(s,i);void 0!==e&&(this._$Eu.set(e,s),t.push(e));})),t}static createProperty(t,i=l$2){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$2}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(S$1(i));}else void 0!==i&&s.push(S$1(i));return s}static _$Eh(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$Eg)&&void 0!==i?i:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$Eg)||void 0===i||i.splice(this._$Eg.indexOf(t)>>>0,1);}_$Em(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i$2(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$ES(t,i,s=l$2){var e,r;const h=this.constructor._$Eh(t,s);if(void 0!==h&&!0===s.reflect){const n=(null!==(r=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==r?r:o$2.toAttribute)(i,s.type);this._$Ei=t,null==n?this.removeAttribute(h):this.setAttribute(h,n),this._$Ei=null;}}_$AK(t,i){var s,e,r;const h=this.constructor,n=h._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=h.getPropertyOptions(n),l=t.converter,a=null!==(r=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==r?r:o$2.fromAttribute;this._$Ei=n,this[n]=a(i,t.type),this._$Ei=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||n$3)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$Ep=this._$E_());}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,i)=>this[i]=t)),this._$Et=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$EU();}catch(t){throw i=!1,this._$EU(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$Eg)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$ES(i,this[i],t))),this._$EC=void 0),this._$EU();}updated(t){}firstUpdated(t){}}a$1.finalized=!0,a$1.elementProperties=new Map,a$1.elementStyles=[],a$1.shadowRootOptions={mode:"open"},null==h$1||h$1({ReactiveElement:a$1}),(null!==(s$2=globalThis.reactiveElementVersions)&&void 0!==s$2?s$2:globalThis.reactiveElementVersions=[]).push("1.3.1");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t;const i$1=globalThis.trustedTypes,s$1=i$1?i$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$1=`lit$${(Math.random()+"").slice(9)}$`,o$1="?"+e$1,n$2=`<${o$1}>`,l$1=document,h=(t="")=>l$1.createComment(t),r=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d=Array.isArray,u=t=>{var i;return d(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])},c=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,a=/>/g,f=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,_=/'/g,m=/"/g,g=/^(?:script|style|textarea|title)$/i,p=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),$=p(1),b=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),T=new WeakMap,x=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N(i.insertBefore(h(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l},A=l$1.createTreeWalker(l$1,129,null,!1),C=(t,i)=>{const o=t.length-1,l=[];let h,r=2===i?"<svg>":"",d=c;for(let i=0;i<o;i++){const s=t[i];let o,u,p=-1,$=0;for(;$<s.length&&(d.lastIndex=$,u=d.exec(s),null!==u);)$=d.lastIndex,d===c?"!--"===u[1]?d=v:void 0!==u[1]?d=a:void 0!==u[2]?(g.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=f):void 0!==u[3]&&(d=f):d===f?">"===u[0]?(d=null!=h?h:c,p=-1):void 0===u[1]?p=-2:(p=d.lastIndex-u[2].length,o=u[1],d=void 0===u[3]?f:'"'===u[3]?m:_):d===m||d===_?d=f:d===v||d===a?d=c:(d=f,h=void 0);const y=d===f&&t[i+1].startsWith("/>")?" ":"";r+=d===c?s+n$2:p>=0?(l.push(o),s.slice(0,p)+"$lit$"+s.slice(p)+e$1+y):s+e$1+(-2===p?(l.push(void 0),i):y);}const u=r+(t[o]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==s$1?s$1.createHTML(u):u,l]};class E{constructor({strings:t,_$litType$:s},n){let l;this.parts=[];let r=0,d=0;const u=t.length-1,c=this.parts,[v,a]=C(t,s);if(this.el=E.createElement(v,n),A.currentNode=this.el.content,2===s){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(l=A.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(e$1)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(e$1),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?M:"?"===i[1]?H:"@"===i[1]?I:S});}else c.push({type:6,index:r});}for(const i of t)l.removeAttribute(i);}if(g.test(l.tagName)){const t=l.textContent.split(e$1),s=t.length-1;if(s>0){l.textContent=i$1?i$1.emptyScript:"";for(let i=0;i<s;i++)l.append(t[i],h()),A.nextNode(),c.push({type:2,index:++r});l.append(t[s],h());}}}else if(8===l.nodeType)if(l.data===o$1)c.push({type:2,index:r});else {let t=-1;for(;-1!==(t=l.data.indexOf(e$1,t+1));)c.push({type:7,index:r}),t+=e$1.length-1;}r++;}}static createElement(t,i){const s=l$1.createElement("template");return s.innerHTML=t,s}}function P(t,i,s=t,e){var o,n,l,h;if(i===b)return i;let d=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const u=r(i)?void 0:i._$litDirective$;return (null==d?void 0:d.constructor)!==u&&(null===(n=null==d?void 0:d._$AO)||void 0===n||n.call(d,!1),void 0===u?d=void 0:(d=new u(t),d._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Cl)&&void 0!==l?l:h._$Cl=[])[e]=d:s._$Cu=d),void 0!==d&&(i=P(t,d._$AS(t,i.values),d,e)),i}class V{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:l$1).importNode(s,!0);A.currentNode=o;let n=A.nextNode(),h=0,r=0,d=e[0];for(;void 0!==d;){if(h===d.index){let i;2===d.type?i=new N(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new L(n,this,t)),this.v.push(i),d=e[++r];}h!==(null==d?void 0:d.index)&&(n=A.nextNode(),h++);}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class N{constructor(t,i,s,e){var o;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cg=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=P(this,t,i),r(t)?t===w||null==t||""===t?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==b&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):u(t)?this.S(t):this.$(t);}M(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t));}$(t){this._$AH!==w&&r(this._$AH)?this._$AA.nextSibling.data=t:this.k(l$1.createTextNode(t)),this._$AH=t;}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=E.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else {const t=new V(o,this),i=t.p(this.options);t.m(s),this.k(i),this._$AH=t;}}_$AC(t){let i=T.get(t.strings);return void 0===i&&T.set(t.strings,i=new E(t)),i}S(t){d(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new N(this.M(h()),this.M(h()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class S{constructor(t,i,s,e,o){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=w;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=P(this,t,i,0),n=!r(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=P(this,e[s+l],i,l),h===b&&(h=this._$AH[l]),n||(n=!r(h)||h!==this._$AH[l]),h===w?t=w:t!==w&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.C(t);}C(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class M extends S{constructor(){super(...arguments),this.type=3;}C(t){this.element[this.name]=t===w?void 0:t;}}const k=i$1?i$1.emptyScript:"";class H extends S{constructor(){super(...arguments),this.type=4;}C(t){t&&t!==w?this.element.setAttribute(this.name,k):this.element.removeAttribute(this.name);}}class I extends S{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=P(this,t,i,0))&&void 0!==s?s:w)===b)return;const e=this._$AH,o=t===w&&e!==w||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==w&&(e===w||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t);}}const z=window.litHtmlPolyfillSupport;null==z||z(E,N),(null!==(t=globalThis.litHtmlVersions)&&void 0!==t?t:globalThis.litHtmlVersions=[]).push("2.2.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l,o;class s extends a$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=x(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1);}render(){return b}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n$1=globalThis.litElementPolyfillSupport;null==n$1||n$1({LitElement:s});(null!==(o=globalThis.litElementVersions)&&void 0!==o?o:globalThis.litElementVersions=[]).push("3.2.0");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}};function e(e){return (n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i);})(e,n,t):i(e,n)}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n;null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

class Controller {
    constructor(config) {
        this._config = config;
    }
    set hass(hass) {
        this._hass = hass;
        this.stateObj = hass.states[this._config.entity];
    }
    get value() {
        if (this._value)
            return Math.round(this._value / this.step) * this.step;
        return 0;
    }
    set value(value) {
        if (value !== this.value)
            this._value = value;
    }
    get string() {
        return `${this.value}`;
    }
    get hidden() {
        return false;
    }
    get hasSlider() {
        return true;
    }
    get hasToggle() {
        return true;
    }
    renderToggle(hass) {
        return this.hasToggle
            ? $ `
          <ha-entity-toggle
            .stateObj=${hass.states[this.stateObj.entity_id]}
            .hass=${hass}
            .class="state"
          ></ha-entity-toggle>
        `
            : undefined;
    }
    get isOff() {
        if (!this.stateObj || this.stateObj.state === "unavailable")
            return true;
        return this.stateObj.state === "off" || this.value === 0;
    }
    get min() {
        var _a, _b;
        return (_b = (_a = this._config.min) !== null && _a !== void 0 ? _a : this._min) !== null && _b !== void 0 ? _b : 0;
    }
    get max() {
        var _a, _b;
        return (_b = (_a = this._config.max) !== null && _a !== void 0 ? _a : this._max) !== null && _b !== void 0 ? _b : 100;
    }
    get step() {
        var _a, _b;
        return (_b = (_a = this._config.step) !== null && _a !== void 0 ? _a : this._step) !== null && _b !== void 0 ? _b : 5;
    }
    get dir() {
        var _a;
        return (_a = this._config.dir) !== null && _a !== void 0 ? _a : undefined;
    }
}

const RGB_INDEX = {
    red: 0,
    green: 1,
    blue: 2,
    white: 3,
    cold_white: 3,
    warm_white: 4,
};
const HS_INDEX = { hue: 0, saturation: 1 };
class LightController extends Controller {
    get attribute() {
        return this._config.attribute || "brightness_pct";
    }
    get _rgbww() {
        const attr = this.stateObj.attributes;
        switch (attr.color_mode) {
            case "rgb":
            case "hs":
            case "xy":
                return [...attr.rgb_color, 0, 0];
            case "rgbw":
                return [...attr.rgbw_color, 0];
            case "rgbww":
                return [...attr.rgbww_color];
            default:
                return [0, 0, 0, 0, 0];
        }
    }
    get _value() {
        if (!this.stateObj || this.stateObj.state !== "on")
            return 0;
        const attr = this.stateObj.attributes;
        switch (this.attribute) {
            case "color_temp":
                return Math.round(attr.color_temp);
            case "white_value":
                return Math.round(attr.white_value);
            case "brightness":
                return Math.round(attr.brightness);
            case "brightness_pct":
                return Math.round((attr.brightness * 100.0) / 255);
            case "red":
            case "green":
            case "blue":
                return attr.rgb_color
                    ? Math.round(this._rgbww[RGB_INDEX[this.attribute]])
                    : 0;
            case "white":
                return attr.rgbw_color
                    ? Math.round((this._rgbww[RGB_INDEX[this.attribute]] * 100.0) / 255)
                    : 0;
            case "cold_white":
            case "warm_white":
                return attr.rgbww_color
                    ? Math.round((this._rgbww[RGB_INDEX[this.attribute]] * 100.0) / 255)
                    : 0;
            case "hue":
            case "saturation":
                return attr.hs_color
                    ? Math.round(attr.hs_color[HS_INDEX[this.attribute]])
                    : 0;
            case "effect":
                if (attr.effect_list)
                    return attr.effect_list.indexOf(attr.effect);
                return 0;
            default:
                return 0;
        }
    }
    get _step() {
        switch (this.attribute) {
            case "effect":
                return 1;
            default:
                return 5;
        }
    }
    get _min() {
        switch (this.attribute) {
            case "color_temp":
                return this.stateObj ? this.stateObj.attributes.min_mireds : 0;
            default:
                return 0;
        }
    }
    get _max() {
        switch (this.attribute) {
            case "color_temp":
                return this.stateObj ? this.stateObj.attributes.max_mireds : 0;
            case "red":
            case "green":
            case "blue":
            case "white_value":
            case "brightness":
                return 255;
            case "hue":
                return 360;
            case "effect":
                return this.stateObj
                    ? this.stateObj.attributes.effect_list
                        ? this.stateObj.attributes.effect_list.length - 1
                        : 0
                    : 0;
            default:
                return 100;
        }
    }
    get isOff() {
        return this.stateObj.state !== "on";
    }
    set _value(value) {
        if (!this.stateObj)
            return;
        const color_mode = this.stateObj.attributes.color_mode;
        let attr = this.attribute;
        let on = true;
        let _value;
        switch (attr) {
            case "brightness":
            case "brightness_pct":
                value =
                    attr === "brightness"
                        ? Math.round(value)
                        : Math.round((value / 100.0) * 255);
                if (!value)
                    on = false;
                attr = "brightness";
                break;
            case "red":
            case "green":
            case "blue":
                _value = this._rgbww;
                _value[RGB_INDEX[attr]] = value;
                if (color_mode === "rgbww") {
                    attr = "rgbww_color";
                    value = _value;
                    break;
                }
                if (color_mode === "rgbw") {
                    attr = "rgbw_color";
                    value = _value.slice(0, 4);
                    break;
                }
                attr = "rgb_color";
                value = _value.slice(0, 3);
                break;
            case "white":
                _value = this._rgbww;
                _value[RGB_INDEX[attr]] = Math.round((value / 100.0) * 255);
                value = _value.slice(0, 4);
                attr = "rgbw_color";
                break;
            case "cold_white":
            case "warm_white":
                _value = this._rgbww;
                _value[RGB_INDEX[attr]] = Math.round((value / 100.0) * 255);
                value = _value;
                attr = "rgbww_color";
                break;
            case "hue":
            case "saturation":
                _value = this.stateObj.attributes.hs_color || [0, 0];
                _value[HS_INDEX[attr]] = value;
                value = _value;
                attr = "hs_color";
                break;
            case "effect":
                value = this.stateObj.attributes.effect_list[value];
                attr = "effect";
                break;
        }
        if (on) {
            this._hass.callService("light", "turn_on", {
                entity_id: this.stateObj.entity_id,
                [attr]: value,
            });
        }
        else {
            this._hass.callService("light", "turn_off", {
                entity_id: this.stateObj.entity_id,
            });
        }
    }
    get string() {
        if (this.stateObj && this.stateObj.state === "off")
            return this._hass.localize("component.light.state._.off");
        switch (this.attribute) {
            case "color_temp":
            case "brightness":
                return `${this.value}`;
            case "brightness_pct":
            case "saturation":
                return `${this.value} %`;
            case "hue":
                return `${this.value} °`;
            case "effect":
                return this.stateObj ? this.stateObj.attributes.effect : "";
            default:
                return this.value;
        }
    }
    get hasSlider() {
        var _a, _b, _c, _d, _e, _f, _g;
        const attr = this.stateObj.attributes;
        const support_temp = attr.supported_features & 2 ||
            ((_a = attr.supported_color_modes) === null || _a === void 0 ? void 0 : _a.some((mode) => ["color_temp"].includes(mode)));
        const support_rgb = attr.supported_features & 16 ||
            ((_b = attr.supported_color_modes) === null || _b === void 0 ? void 0 : _b.some((mode) => ["rgb", "rgbw", "rgbww"].includes(mode)));
        const support_w = (_c = attr.supported_color_modes) === null || _c === void 0 ? void 0 : _c.some((mode) => ["rgbw"].includes(mode));
        const support_ww = (_d = attr.supported_color_modes) === null || _d === void 0 ? void 0 : _d.some((mode) => ["rgbww"].includes(mode));
        const support_hs = attr.supported_features & 16 ||
            ((_e = attr.supported_color_modes) === null || _e === void 0 ? void 0 : _e.some((mode) => ["hs"].includes(mode)));
        const support_xy = (_f = attr.supported_color_modes) === null || _f === void 0 ? void 0 : _f.some((mode) => ["xy"].includes(mode));
        const support_brightness = attr.supported_features & 1 ||
            support_temp ||
            support_rgb ||
            support_hs ||
            support_xy ||
            ((_g = attr.supported_color_modes) === null || _g === void 0 ? void 0 : _g.some((mode) => ["brightness"].includes(mode)));
        const support_color = support_rgb || support_hs;
        if (!this.stateObj)
            return false;
        switch (this.attribute) {
            case "brightness":
            case "brightness_pct":
                if ("brightness" in this.stateObj.attributes || support_brightness)
                    return true;
                return false;
            case "color_temp":
                if ("color_temp" in this.stateObj.attributes || support_temp)
                    return true;
                return false;
            case "white_value":
                if (attr.supported_features & 128 ||
                    "white_value" in this.stateObj.attributes)
                    return true;
                return false;
            case "white":
                return !!support_w;
            case "cold_white":
            case "warm_white":
                return !!support_ww;
            case "red":
            case "green":
            case "blue":
                if ("rgb_color" in this.stateObj.attributes || support_color)
                    return true;
                return false;
            case "hue":
            case "saturation":
                if ("hs_color" in this.stateObj.attributes || support_color)
                    return true;
                return false;
            case "effect":
                if ("effect" in this.stateObj.attributes ||
                    "effect_list" in this.stateObj.attributes)
                    return true;
                return false;
            default:
                return false;
        }
    }
}

class MediaPlayerController extends Controller {
    get _value() {
        return this.stateObj.attributes.is_volume_muted
            ? 0
            : Math.round(this.stateObj.attributes.volume_level * 100.0);
    }
    set _value(value) {
        value = value / 100.0;
        this._hass.callService("media_player", "volume_set", {
            entity_id: this.stateObj.entity_id,
            volume_level: value,
        });
        if (value && this.stateObj.attributes.is_volume_muted)
            this._hass.callService("media_player", "volume_mute", {
                entity_id: this.stateObj.entity_id,
                is_volume_muted: false,
            });
    }
    get isOff() {
        return this.stateObj.state === "off";
    }
    get string() {
        if (this.stateObj.attributes.is_volume_muted)
            return "-";
        return !!this.stateObj.attributes.volume_level
            ? `${this.value} %`
            : this._hass.localize("component.media_player.state._.off");
    }
    get hasToggle() {
        return true;
    }
    _handleMute() {
        this._hass.callService("media_player", "volume_mute", {
            entity_id: this.stateObj.entity_id,
            is_volume_muted: !this.stateObj.attributes.is_volume_muted,
        });
    }
    renderToggle(hass) {
        const stateObj = hass.states[this.stateObj.entity_id];
        const icon = document.createElement("ha-icon");
        icon.style.display = "flex";
        icon.icon = stateObj.attributes.is_volume_muted
            ? "mdi:volume-off"
            : "mdi:volume-high";
        const btn = document.createElement("ha-icon-button");
        btn.appendChild(icon);
        btn.addEventListener("click", () => this._handleMute());
        return this.hasToggle ? btn : undefined;
    }
}

class ClimateController extends Controller {
    get _value() {
        return this.stateObj.attributes.temperature;
    }
    set _value(value) {
        this._hass.callService("climate", "set_temperature", {
            entity_id: this.stateObj.entity_id,
            temperature: value,
        });
    }
    get string() {
        return `${this.value} ${this._hass.config.unit_system.temperature}`;
    }
    get isOff() {
        return this.stateObj.state === "off";
    }
    get _min() {
        return this.stateObj.attributes.min_temp;
    }
    get _max() {
        return this.stateObj.attributes.max_temp;
    }
    get _step() {
        return 1;
    }
}

class CoverController extends Controller {
    get attribute() {
        return this._config.attribute || "position";
    }
    get _value() {
        switch (this.attribute) {
            case "position":
                return this.stateObj.state === "closed"
                    ? 0
                    : this.stateObj.attributes.current_position;
            case "tilt":
                return this.stateObj.attributes.current_tilt_position;
            default:
                return 0;
        }
    }
    set _value(value) {
        switch (this.attribute) {
            case "position":
                this._hass.callService("cover", "set_cover_position", {
                    entity_id: this.stateObj.entity_id,
                    position: value,
                });
                break;
            case "tilt":
                this._hass.callService("cover", "set_cover_tilt_position", {
                    entity_id: this.stateObj.entity_id,
                    tilt_position: value,
                });
                break;
        }
    }
    get string() {
        if (!this.hasSlider)
            return "";
        switch (this.attribute) {
            case "position":
                if (this.stateObj.state === "closed")
                    return this._hass.localize("component.cover.state._.closed");
                if (this.value === 100)
                    return this._hass.localize("component.cover.state._.open");
                return `${this.value} %`;
            case "tilt":
                return `${this.value} %`;
        }
    }
    get hasToggle() {
        return false;
    }
    get hasSlider() {
        switch (this.attribute) {
            case "position":
                if ("current_position" in this.stateObj.attributes)
                    return true;
                if ("supported_features" in this.stateObj.attributes &&
                    this.stateObj.attributes.supported_features & 4)
                    return true;
            case "tilt":
                if ("current_tilt_position" in this.stateObj.attributes)
                    return true;
                if ("supported_features" in this.stateObj.attributes &&
                    this.stateObj.attributes.supported_features & 128)
                    return true;
            default:
                return false;
        }
    }
    get _step() {
        return 10;
    }
}

class FanController extends Controller {
    get _value() {
        return this.stateObj.state !== "off"
            ? this.stateObj.attributes.percentage
            : 0;
    }
    set _value(value) {
        if (value > 0) {
            this._hass.callService("fan", "set_percentage", {
                entity_id: this.stateObj.entity_id,
                percentage: value,
            });
        }
        else {
            this._hass.callService("fan", "turn_off", {
                entity_id: this.stateObj.entity_id,
            });
        }
    }
    get string() {
        if (this.stateObj.state === "off")
            return this._hass.localize("component.fan.state._.off");
        return `${this.stateObj.attributes.percentage} %`;
    }
    get hasSlider() {
        if ("percentage" in this.stateObj.attributes)
            return true;
        return false;
    }
    get _step() {
        return this.stateObj.attributes.percentage_step;
    }
}

class InputNumberController extends Controller {
    get _value() {
        return this.stateObj.state;
    }
    set _value(value) {
        this._hass.callService("input_number", "set_value", {
            entity_id: this.stateObj.entity_id,
            value: value,
        });
    }
    get string() {
        return `${parseFloat(this.stateObj.state)} ${this.stateObj.attributes.unit_of_measurement || ""}`.trim();
    }
    get isOff() {
        return false;
    }
    get hasToggle() {
        return false;
    }
    get hasSlider() {
        return this.stateObj.attributes.mode === "slider";
    }
    get _min() {
        return this.stateObj.attributes.min;
    }
    get _max() {
        return this.stateObj.attributes.max;
    }
    get _step() {
        return this.stateObj.attributes.step;
    }
}

class InputSelectController extends Controller {
    get _value() {
        return this.stateObj.attributes.options.indexOf(this.stateObj.state);
    }
    set _value(value) {
        if (value in this.stateObj.attributes.options)
            this._hass.callService("input_select", "select_option", {
                entity_id: this.stateObj.entity_id,
                option: this.stateObj.attributes.options[value],
            });
    }
    get string() {
        return this.stateObj.state;
    }
    get isOff() {
        return false;
    }
    get hasToggle() {
        return false;
    }
    get hasSlider() {
        return (this.stateObj.attributes.options &&
            this.stateObj.attributes.options.length > 0);
    }
    get _max() {
        return this.stateObj.attributes.options.length - 1;
    }
    get _step() {
        return 1;
    }
}

class NumberController extends Controller {
    get _value() {
        return this.stateObj.state;
    }
    set _value(value) {
        this._hass.callService("number", "set_value", {
            entity_id: this.stateObj.entity_id,
            value: value,
        });
    }
    get string() {
        return `${parseFloat(this.stateObj.state)} ${this.stateObj.attributes.unit_of_measurement || ""}`.trim();
    }
    get isOff() {
        return false;
    }
    get hasToggle() {
        return false;
    }
    get hasSlider() {
        return true;
    }
    get _min() {
        return this.stateObj.attributes.min;
    }
    get _max() {
        return this.stateObj.attributes.max;
    }
    get _step() {
        return this.stateObj.attributes.step;
    }
}

class WaterHeaterController extends Controller {
    get _value() {
        return this.stateObj.attributes.temperature;
    }
    set _value(value) {
        this._hass.callService("water_heater", "set_temperature", {
            entity_id: this.stateObj.entity_id,
            temperature: value,
        });
    }
    get string() {
        return `${this.value} ${this._hass.config.unit_system.temperature}`;
    }
    get isOff() {
        return this.stateObj.state === "off";
    }
    get _min() {
        return this.stateObj.attributes.min_temp;
    }
    get _max() {
        return this.stateObj.attributes.max_temp;
    }
    get _step() {
        return 1;
    }
}

class HumidifierController extends Controller {
    get _value() {
        return this.stateObj.attributes.humidity;
    }
    set _value(value) {
        this._hass.callService("humidifier", "set_humidity", {
            entity_id: this.stateObj.entity_id,
            humidity: value,
        });
    }
    get string() {
        return `${this.value} %`;
    }
    get isOff() {
        return this.stateObj.state === "off";
    }
    get _min() {
        return this.stateObj.attributes.min_humidity;
    }
    get _max() {
        return this.stateObj.attributes.max_humidity;
    }
    get _step() {
        return 1;
    }
}

function getController(domain) {
    return {
        light: LightController,
        media_player: MediaPlayerController,
        climate: ClimateController,
        water_heater: WaterHeaterController,
        cover: CoverController,
        fan: FanController,
        input_number: InputNumberController,
        input_select: InputSelectController,
        number: NumberController,
        humidifier: HumidifierController,
    }[domain];
}

var name = "slider-entity-row";
var version = "17.2.1";
var description = "slider-entity-row =================";
var scripts = {
	build: "rollup -c",
	watch: "rollup -c --watch",
	"update-card-tools": "npm uninstall card-tools && npm install thomasloven/lovelace-card-tools"
};
var repository = {
	type: "git",
	url: "github.com:thomasloven/lovelace-slider-entity-row"
};
var keywords = [
];
var author = "Thomas Lovén";
var license = "MIT";
var devDependencies = {
	"@babel/core": "^7.16.0",
	"@rollup/plugin-babel": "^5.3.0",
	"@rollup/plugin-json": "^4.1.0",
	"@rollup/plugin-node-resolve": "^13.0.6",
	rollup: "^2.58.3",
	"rollup-plugin-terser": "^7.0.2",
	"rollup-plugin-typescript2": "^0.30.0",
	typescript: "^4.4.4"
};
var dependencies = {
	"card-tools": "github:thomasloven/lovelace-card-tools",
	lit: "^2.2.2",
	tslib: "^2.3.1"
};
var pjson = {
	name: name,
	"private": true,
	version: version,
	description: description,
	scripts: scripts,
	repository: repository,
	keywords: keywords,
	author: author,
	license: license,
	devDependencies: devDependencies,
	dependencies: dependencies
};

class SliderEntityRow extends s {
    setConfig(config) {
        this._config = config;
        if (!config.entity)
            throw new Error(`No entity specified.`);
        const domain = config.entity.split(".")[0];
        const ctrlClass = getController(domain);
        if (!ctrlClass)
            throw new Error(`Unsupported entity type: ${domain}`);
        this.ctrl = new ctrlClass(config);
    }
    async resized() {
        await this.updateComplete;
        if (!this.shadowRoot || !this.parentElement)
            return;
        this.hide_state = this._config.full_row
            ? this.parentElement.clientWidth <= 180
            : this.parentElement.clientWidth <= 335;
        return;
    }
    async firstUpdated() {
        await this.resized();
    }
    render() {
        var _a;
        const c = this.ctrl;
        c.hass = this.hass;
        if (!c.stateObj)
            return $ `
        <hui-warning>
          ${this.hass.localize("ui.panel.lovelace.warning.entity_not_found", "entity", this._config.entity)}
        </hui-warning>
      `;
        const dir = ((_a = c.dir) !== null && _a !== void 0 ? _a : this.hass.translationMetadata.translations[this.hass.language || "en"]
            .isRTL)
            ? "rtl"
            : "ltr";
        const showSlider = c.stateObj.state !== "unavailable" &&
            c.hasSlider &&
            !(c.isOff && this._config.hide_when_off);
        const showToggle = this._config.toggle && c.hasToggle;
        const showValue = showToggle
            ? false
            : this._config.hide_state === false
                ? true
                : this._config.hide_state || this.hide_state
                    ? false
                    : c.isOff && this._config.hide_when_off
                        ? false
                        : true;
        const content = $ `
      <div class="wrapper" @click=${(ev) => ev.stopPropagation()}>
        ${showSlider
            ? $ `
              <ha-slider
                .min=${c.min}
                .max=${c.max}
                .step=${c.step}
                .value=${c.value}
                .dir=${dir}
                pin
                @change=${(ev) => (c.value = this.shadowRoot.querySelector("ha-slider").value)}
                class=${this._config.full_row || this._config.grow
                ? "full"
                : ""}
                ignore-bar-touch
              ></ha-slider>
            `
            : ""}
        ${showToggle ? c.renderToggle(this.hass) : ""}
        ${showValue
            ? $ `<span class="state">
              ${c.stateObj.state === "unavailable"
                ? this.hass.localize("state.default.unavailable")
                : c.string}
            </span>`
            : ""}
      </div>
    `;
        if (this._config.full_row)
            if (this._config.hide_when_off && c.isOff)
                return $ ``;
            else
                return content;
        return $ `
      <hui-generic-entity-row
        .hass=${this.hass}
        .config=${this._config}
        .catchInteraction=${false}
      >
        ${content}
      </hui-generic-entity-row>
    `;
    }
    static get styles() {
        return r$2 `
      .wrapper {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex: 100;
        height: 40px;
      }
      .state {
        min-width: 45px;
        text-align: end;
      }
      ha-entity-toggle {
        min-width: auto;
        margin-left: 8px;
      }
      ha-slider {
        width: 100%;
        min-width: 100px;
        --paper-slider-secondary-color: transparent;
      }
      ha-slider:not(.full) {
        max-width: 200px;
      }
    `;
    }
}
__decorate([
    e()
], SliderEntityRow.prototype, "hass", void 0);
__decorate([
    e()
], SliderEntityRow.prototype, "hide_state", void 0);
if (!customElements.get("slider-entity-row")) {
    customElements.define("slider-entity-row", SliderEntityRow);
    console.info(`%cSLIDER-ENTITY-ROW ${pjson.version} IS INSTALLED`, "color: green; font-weight: bold", "");
}
