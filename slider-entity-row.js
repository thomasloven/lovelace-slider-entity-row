function t(t,e,s,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,s,i);else for(var o=t.length-1;o>=0;o--)(r=t[o])&&(a=(n<3?r(a):n>3?r(e,s,a):r(e,s))||a);return n>3&&a&&Object.defineProperty(e,s,a),a}const e=window,s=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),r=new WeakMap;let n=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const s=void 0!==e&&1===e.length;s&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&r.set(e,t))}return t}toString(){return this.cssText}};const a=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new n(s,t,i)},o=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t;var l;const h=window,u=h.trustedTypes,c=u?u.emptyScript:"",d=h.reactiveElementPolyfillSupport,_={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},p=(t,e)=>e!==t&&(e==e||t==t),g={attribute:!0,type:String,converter:_,reflect:!1,hasChanged:p};let b=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this._$Ep(s,e);void 0!==i&&(this._$Ev.set(i,s),t.push(i))})),t}static createProperty(t,e=g){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const r=this[t];this[e]=i,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||g}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Ep(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{s?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((s=>{const i=document.createElement("style"),r=e.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=g){var i;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const n=(void 0!==(null===(i=s.converter)||void 0===i?void 0:i.toAttribute)?s.converter:_).toAttribute(e,s.type);this._$El=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$El=null}}_$AK(t,e){var s;const i=this.constructor,r=i._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=i.getPropertyOptions(r),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:_;this._$El=r,this[r]=n.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};var v;b.finalized=!0,b.elementProperties=new Map,b.elementStyles=[],b.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:b}),(null!==(l=h.reactiveElementVersions)&&void 0!==l?l:h.reactiveElementVersions=[]).push("1.5.0");const f=window,m=f.trustedTypes,$=m?m.createPolicy("lit-html",{createHTML:t=>t}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,O="?"+y,w=`<${O}>`,j=document,A=(t="")=>j.createComment(t),S=t=>null===t||"object"!=typeof t&&"function"!=typeof t,E=Array.isArray,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,C=/-->/g,T=/>/g,k=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),P=/'/g,M=/"/g,U=/^(?:script|style|textarea|title)$/i,H=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),R=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),z=new WeakMap,L=j.createTreeWalker(j,129,null,!1),I=(t,e)=>{const s=t.length-1,i=[];let r,n=2===e?"<svg>":"",a=x;for(let e=0;e<s;e++){const s=t[e];let o,l,h=-1,u=0;for(;u<s.length&&(a.lastIndex=u,l=a.exec(s),null!==l);)u=a.lastIndex,a===x?"!--"===l[1]?a=C:void 0!==l[1]?a=T:void 0!==l[2]?(U.test(l[2])&&(r=RegExp("</"+l[2],"g")),a=k):void 0!==l[3]&&(a=k):a===k?">"===l[0]?(a=null!=r?r:x,h=-1):void 0===l[1]?h=-2:(h=a.lastIndex-l[2].length,o=l[1],a=void 0===l[3]?k:'"'===l[3]?M:P):a===M||a===P?a=k:a===C||a===T?a=x:(a=k,r=void 0);const c=a===k&&t[e+1].startsWith("/>")?" ":"";n+=a===x?s+w:h>=0?(i.push(o),s.slice(0,h)+"$lit$"+s.slice(h)+y+c):s+y+(-2===h?(i.push(void 0),e):c)}const o=n+(t[s]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==$?$.createHTML(o):o,i]};class D{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,n=0;const a=t.length-1,o=this.parts,[l,h]=I(t,e);if(this.el=D.createElement(l,s),L.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=L.nextNode())&&o.length<a;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(y)){const s=h[n++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+"$lit$").split(y),e=/([.?@])?(.*)/.exec(s);o.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?K:"?"===e[1]?J:"@"===e[1]?Z:q})}else o.push({type:6,index:r})}for(const e of t)i.removeAttribute(e)}if(U.test(i.tagName)){const t=i.textContent.split(y),e=t.length-1;if(e>0){i.textContent=m?m.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],A()),L.nextNode(),o.push({type:2,index:++r});i.append(t[e],A())}}}else if(8===i.nodeType)if(i.data===O)o.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(y,t+1));)o.push({type:7,index:r}),t+=y.length-1}r++}}static createElement(t,e){const s=j.createElement("template");return s.innerHTML=t,s}}function B(t,e,s=t,i){var r,n,a,o;if(e===R)return e;let l=void 0!==i?null===(r=s._$Co)||void 0===r?void 0:r[i]:s._$Cl;const h=S(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,s,i)),void 0!==i?(null!==(a=(o=s)._$Co)&&void 0!==a?a:o._$Co=[])[i]=l:s._$Cl=l),void 0!==l&&(e=B(t,l._$AS(t,e.values),l,i)),e}class W{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:s},parts:i}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:j).importNode(s,!0);L.currentNode=r;let n=L.nextNode(),a=0,o=0,l=i[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new V(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new Y(n,this,t)),this.u.push(e),l=i[++o]}a!==(null==l?void 0:l.index)&&(n=L.nextNode(),a++)}return r}p(t){let e=0;for(const s of this.u)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class V{constructor(t,e,s,i){var r;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cm=null===(r=null==i?void 0:i.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=B(this,t,e),S(t)?t===N||null==t||""===t?(this._$AH!==N&&this._$AR(),this._$AH=N):t!==this._$AH&&t!==R&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>E(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==N&&S(this._$AH)?this._$AA.nextSibling.data=t:this.T(j.createTextNode(t)),this._$AH=t}$(t){var e;const{values:s,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=D.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.p(s);else{const t=new W(r,this),e=t.v(this.options);t.p(s),this.T(e),this._$AH=t}}_$AC(t){let e=z.get(t.strings);return void 0===e&&z.set(t.strings,e=new D(t)),e}k(t){E(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const r of t)i===e.length?e.push(s=new V(this.O(A()),this.O(A()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class q{constructor(t,e,s,i,r){this.type=1,this._$AH=N,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=N}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const r=this.strings;let n=!1;if(void 0===r)t=B(this,t,e,0),n=!S(t)||t!==this._$AH&&t!==R,n&&(this._$AH=t);else{const i=t;let a,o;for(t=r[0],a=0;a<r.length-1;a++)o=B(this,i[s+a],e,a),o===R&&(o=this._$AH[a]),n||(n=!S(o)||o!==this._$AH[a]),o===N?t=N:t!==N&&(t+=(null!=o?o:"")+r[a+1]),this._$AH[a]=o}n&&!i&&this.j(t)}j(t){t===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class K extends q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===N?void 0:t}}const F=m?m.emptyScript:"";class J extends q{constructor(){super(...arguments),this.type=4}j(t){t&&t!==N?this.element.setAttribute(this.name,F):this.element.removeAttribute(this.name)}}class Z extends q{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=B(this,t,e,0))&&void 0!==s?s:N)===R)return;const i=this._$AH,r=t===N&&i!==N||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==N&&(i===N||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class Y{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){B(this,t)}}const G=f.litHtmlPolyfillSupport;null==G||G(D,V),(null!==(v=f.litHtmlVersions)&&void 0!==v?v:f.litHtmlVersions=[]).push("2.5.0");var Q,X;class tt extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,s)=>{var i,r;const n=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let a=n._$litPart$;if(void 0===a){const t=null!==(r=null==s?void 0:s.renderBefore)&&void 0!==r?r:null;n._$litPart$=a=new V(e.insertBefore(A(),t),t,void 0,null!=s?s:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return R}}tt.finalized=!0,tt._$litElement$=!0,null===(Q=globalThis.litElementHydrateSupport)||void 0===Q||Q.call(globalThis,{LitElement:tt});const et=globalThis.litElementPolyfillSupport;null==et||et({LitElement:tt}),(null!==(X=globalThis.litElementVersions)&&void 0!==X?X:globalThis.litElementVersions=[]).push("3.2.2");const st=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(s){s.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(s){s.createProperty(e.key,t)}};function it(t){return(e,s)=>void 0!==s?((t,e,s)=>{e.constructor.createProperty(s,t)})(t,e,s):st(t,e)}var rt;null===(rt=window.HTMLSlotElement)||void 0===rt||rt.prototype.assignedElements;class nt{constructor(t){this._config=t}set hass(t){this._hass=t,this.stateObj=t.states[this._config.entity]}get value(){return this._value?Math.round(this._value/this.step)*this.step:0}set value(t){t!==this.value&&(this._value=t)}get string(){return`${this.value}`}get hidden(){return!1}get hasSlider(){return!0}get hasToggle(){return!0}get background(){}renderToggle(t){return this.hasToggle?H`
          <ha-entity-toggle
            .stateObj=${t.states[this.stateObj.entity_id]}
            .hass=${t}
            .class="state"
          ></ha-entity-toggle>
        `:void 0}get isOff(){return!this.stateObj||"unavailable"===this.stateObj.state||("off"===this.stateObj.state||0===this.value)}get min(){var t,e;return null!==(e=null!==(t=this._config.min)&&void 0!==t?t:this._min)&&void 0!==e?e:0}get max(){var t,e;return null!==(e=null!==(t=this._config.max)&&void 0!==t?t:this._max)&&void 0!==e?e:100}get step(){var t,e;return null!==(e=null!==(t=this._config.step)&&void 0!==t?t:this._step)&&void 0!==e?e:5}get dir(){var t;return null!==(t=this._config.dir)&&void 0!==t?t:void 0}}const at={red:0,green:1,blue:2,white:3,cold_white:3,warm_white:4},ot={hue:0,saturation:1};class lt extends nt{get attribute(){return this._config.attribute||"brightness_pct"}get _rgbww(){const t=this.stateObj.attributes;switch(t.color_mode){case"rgb":case"hs":case"xy":return[...t.rgb_color,0,0];case"rgbw":return[...t.rgbw_color,0];case"rgbww":return[...t.rgbww_color];default:return[0,0,0,0,0]}}get _value(){if(!this.stateObj||"on"!==this.stateObj.state)return 0;const t=this.stateObj.attributes;switch(this.attribute){case"color_temp":return Math.round(t.color_temp_kelvin);case"color_temp_mired":return Math.round(t.color_temp);case"white_value":return Math.round(t.white_value);case"brightness":return Math.round(t.brightness);case"brightness_pct":return Math.round(100*t.brightness/255);case"red":case"green":case"blue":return t.rgb_color?Math.round(this._rgbww[at[this.attribute]]):0;case"white":return t.rgbw_color?Math.round(100*this._rgbww[at[this.attribute]]/255):0;case"cold_white":case"warm_white":return t.rgbww_color?Math.round(100*this._rgbww[at[this.attribute]]/255):0;case"hue":case"saturation":return t.hs_color?Math.round(t.hs_color[ot[this.attribute]]):0;case"effect":return t.effect_list?t.effect_list.indexOf(t.effect):0;default:return 0}}get _step(){switch(this.attribute){case"effect":return 1;default:return 5}}get _min(){switch(this.attribute){case"color_temp":return this.stateObj?this.stateObj.attributes.min_color_temp_kelvin:0;case"color_temp_mired":return this.stateObj?this.stateObj.attributes.min_mireds:0;default:return 0}}get _max(){switch(this.attribute){case"color_temp":return this.stateObj?this.stateObj.attributes.max_color_temp_kelvin:0;case"color_temp_mired":return this.stateObj?this.stateObj.attributes.max_mireds:0;case"red":case"green":case"blue":case"white_value":case"brightness":return 255;case"hue":return 360;case"effect":return this.stateObj&&this.stateObj.attributes.effect_list?this.stateObj.attributes.effect_list.length-1:0;default:return 100}}get isOff(){return"on"!==this.stateObj.state}set _value(t){if(!this.stateObj)return;const e=this.stateObj.attributes.color_mode;let s,i=this.attribute,r=!0;switch(i){case"brightness":case"brightness_pct":(t="brightness"===i?Math.round(t):Math.round(t/100*255))||(r=!1),i="brightness";break;case"red":case"green":case"blue":if(s=this._rgbww,s[at[i]]=t,"rgbww"===e){i="rgbww_color",t=s;break}if("rgbw"===e){i="rgbw_color",t=s.slice(0,4);break}i="rgb_color",t=s.slice(0,3);break;case"white":s=this._rgbww,s[at[i]]=Math.round(t/100*255),t=s.slice(0,4),i="rgbw_color";break;case"cold_white":case"warm_white":s=this._rgbww,s[at[i]]=Math.round(t/100*255),t=s,i="rgbww_color";break;case"hue":case"saturation":s=this.stateObj.attributes.hs_color||[0,0],s[ot[i]]=t,t=s,i="hs_color";break;case"effect":t=this.stateObj.attributes.effect_list[t],i="effect";break;case"color_temp":i="kelvin";break;case"color_temp_mired":i="color_temp"}r?this._hass.callService("light","turn_on",{entity_id:this.stateObj.entity_id,[i]:t}):this._hass.callService("light","turn_off",{entity_id:this.stateObj.entity_id})}get string(){if(this.stateObj&&"off"===this.stateObj.state)return this._hass.localize("component.light.state._.off");switch(this.attribute){case"color_temp_mired":case"brightness":return`${this.value}`;case"color_temp":return`${this.value} K`;case"brightness_pct":case"saturation":return`${this.value} %`;case"hue":return`${this.value} °`;case"effect":return this.stateObj?this.stateObj.attributes.effect:"";default:return this.value}}get hasSlider(){var t,e,s,i,r,n,a;const o=this.stateObj.attributes,l=2&o.supported_features||(null===(t=o.supported_color_modes)||void 0===t?void 0:t.some((t=>["color_temp"].includes(t)))),h=16&o.supported_features||(null===(e=o.supported_color_modes)||void 0===e?void 0:e.some((t=>["rgb","rgbw","rgbww"].includes(t)))),u=null===(s=o.supported_color_modes)||void 0===s?void 0:s.some((t=>["rgbw"].includes(t))),c=null===(i=o.supported_color_modes)||void 0===i?void 0:i.some((t=>["rgbww"].includes(t))),d=16&o.supported_features||(null===(r=o.supported_color_modes)||void 0===r?void 0:r.some((t=>["hs"].includes(t)))),_=null===(n=o.supported_color_modes)||void 0===n?void 0:n.some((t=>["xy"].includes(t))),p=1&o.supported_features||l||h||d||_||(null===(a=o.supported_color_modes)||void 0===a?void 0:a.some((t=>["brightness"].includes(t)))),g=h||d;if(!this.stateObj)return!1;switch(this.attribute){case"brightness":case"brightness_pct":return!(!("brightness"in this.stateObj.attributes)&&!p);case"color_temp":case"color_temp_mired":return!(!("color_temp"in this.stateObj.attributes)&&!l);case"white_value":return!!(128&o.supported_features||"white_value"in this.stateObj.attributes);case"white":return!!u;case"cold_white":case"warm_white":return!!c;case"red":case"green":case"blue":return!(!("rgb_color"in this.stateObj.attributes)&&!g);case"hue":case"saturation":return!(!("hs_color"in this.stateObj.attributes)&&!g);case"effect":return"effect"in this.stateObj.attributes||"effect_list"in this.stateObj.attributes;default:return!1}}get background(){return"hue"===this.attribute?"linear-gradient(to right,red,yellow,green,cyan,blue,magenta,red)":"color_temp_mired"===this.attribute?"linear-gradient(to right,rgb(166,209,255),rgb(255,255,255),rgb(255,160,0))":"color_temp"===this.attribute?"linear-gradient(to left,rgb(166,209,255),rgb(255,255,255),rgb(255,160,0))":"red"===this.attribute?"linear-gradient(to right,rgb(0,0,0),rgb(255,0,0))":"green"===this.attribute?"linear-gradient(to right,rgb(0,0,0),rgb(0,255,0))":"blue"===this.attribute?"linear-gradient(to right,rgb(0,0,0),rgb(0,0,255))":"brightness"===this.attribute?"linear-gradient(to right,rgb(0,0,0),rgb(255,255,255))":void 0}}class ht extends nt{get _value(){return this.stateObj.attributes.is_volume_muted?0:Math.round(100*this.stateObj.attributes.volume_level)}set _value(t){t/=100,this._hass.callService("media_player","volume_set",{entity_id:this.stateObj.entity_id,volume_level:t}),t&&this.stateObj.attributes.is_volume_muted&&this._hass.callService("media_player","volume_mute",{entity_id:this.stateObj.entity_id,is_volume_muted:!1})}get isOff(){return"off"===this.stateObj.state}get string(){return this.stateObj.attributes.is_volume_muted?"-":this.stateObj.attributes.volume_level?`${this.value} %`:this._hass.localize("component.media_player.state._.off")}get hasToggle(){return!0}_handleMute(){this._hass.callService("media_player","volume_mute",{entity_id:this.stateObj.entity_id,is_volume_muted:!this.stateObj.attributes.is_volume_muted})}renderToggle(t){const e=t.states[this.stateObj.entity_id],s=document.createElement("ha-icon");s.style.display="flex",s.icon=e.attributes.is_volume_muted?"mdi:volume-off":"mdi:volume-high";const i=document.createElement("ha-icon-button");return i.appendChild(s),i.addEventListener("click",(()=>this._handleMute())),this.hasToggle?i:void 0}}class ut extends nt{get _value(){return this.stateObj.attributes.temperature}set _value(t){this._hass.callService("climate","set_temperature",{entity_id:this.stateObj.entity_id,temperature:t})}get string(){return`${this.value} ${this._hass.config.unit_system.temperature}`}get isOff(){return"off"===this.stateObj.state}get _min(){return this.stateObj.attributes.min_temp}get _max(){return this.stateObj.attributes.max_temp}get _step(){return 1}}class ct extends nt{get attribute(){return this._config.attribute||"position"}get _value(){switch(this.attribute){case"position":return"closed"===this.stateObj.state?0:this.stateObj.attributes.current_position;case"tilt":return this.stateObj.attributes.current_tilt_position;default:return 0}}set _value(t){switch(this.attribute){case"position":this._hass.callService("cover","set_cover_position",{entity_id:this.stateObj.entity_id,position:t});break;case"tilt":this._hass.callService("cover","set_cover_tilt_position",{entity_id:this.stateObj.entity_id,tilt_position:t})}}get string(){if(!this.hasSlider)return"";switch(this.attribute){case"position":return"closed"===this.stateObj.state?this._hass.localize("component.cover.state._.closed"):100===this.value?this._hass.localize("component.cover.state._.open"):`${this.value} %`;case"tilt":return`${this.value} %`}}get hasToggle(){return!1}get hasSlider(){switch(this.attribute){case"position":if("current_position"in this.stateObj.attributes)return!0;if("supported_features"in this.stateObj.attributes&&4&this.stateObj.attributes.supported_features)return!0;case"tilt":if("current_tilt_position"in this.stateObj.attributes)return!0;if("supported_features"in this.stateObj.attributes&&128&this.stateObj.attributes.supported_features)return!0;default:return!1}}get _step(){return 10}}class dt extends nt{get _value(){return"off"!==this.stateObj.state?this.stateObj.attributes.percentage:0}set _value(t){t>0?this._hass.callService("fan","set_percentage",{entity_id:this.stateObj.entity_id,percentage:t}):this._hass.callService("fan","turn_off",{entity_id:this.stateObj.entity_id})}get string(){return"off"===this.stateObj.state?this._hass.localize("component.fan.state._.off"):`${this.stateObj.attributes.percentage} %`}get hasSlider(){return"percentage"in this.stateObj.attributes}get _step(){return this.stateObj.attributes.percentage_step}}class _t extends nt{get _value(){return this.stateObj.state}set _value(t){this._hass.callService("input_number","set_value",{entity_id:this.stateObj.entity_id,value:t})}get string(){return`${parseFloat(this.stateObj.state)} ${this.stateObj.attributes.unit_of_measurement||""}`.trim()}get isOff(){return!1}get hasToggle(){return!1}get hasSlider(){return"slider"===this.stateObj.attributes.mode}get _min(){return this.stateObj.attributes.min}get _max(){return this.stateObj.attributes.max}get _step(){return this.stateObj.attributes.step}}class pt extends nt{get _value(){return this.stateObj.attributes.options.indexOf(this.stateObj.state)}set _value(t){t in this.stateObj.attributes.options&&this._hass.callService("input_select","select_option",{entity_id:this.stateObj.entity_id,option:this.stateObj.attributes.options[t]})}get string(){return this.stateObj.state}get isOff(){return!1}get hasToggle(){return!1}get hasSlider(){return this.stateObj.attributes.options&&this.stateObj.attributes.options.length>0}get _max(){return this.stateObj.attributes.options.length-1}get _step(){return 1}}class gt extends nt{get _value(){return this.stateObj.state}set _value(t){this._hass.callService("number","set_value",{entity_id:this.stateObj.entity_id,value:t})}get string(){return`${parseFloat(this.stateObj.state)} ${this.stateObj.attributes.unit_of_measurement||""}`.trim()}get isOff(){return!1}get hasToggle(){return!1}get hasSlider(){return!0}get _min(){return this.stateObj.attributes.min}get _max(){return this.stateObj.attributes.max}get _step(){return this.stateObj.attributes.step}}class bt extends nt{get _value(){return this.stateObj.attributes.temperature}set _value(t){this._hass.callService("water_heater","set_temperature",{entity_id:this.stateObj.entity_id,temperature:t})}get string(){return`${this.value} ${this._hass.config.unit_system.temperature}`}get isOff(){return"off"===this.stateObj.state}get _min(){return this.stateObj.attributes.min_temp}get _max(){return this.stateObj.attributes.max_temp}get _step(){return 1}}class vt extends nt{get _value(){return this.stateObj.attributes.humidity}set _value(t){this._hass.callService("humidifier","set_humidity",{entity_id:this.stateObj.entity_id,humidity:t})}get string(){return`${this.value} %`}get isOff(){return"off"===this.stateObj.state}get _min(){return this.stateObj.attributes.min_humidity}get _max(){return this.stateObj.attributes.max_humidity}get _step(){return 1}}var ft="17.3.0";class mt extends tt{setConfig(t){if(this._config=t,!t.entity)throw new Error("No entity specified.");const e=t.entity.split(".")[0],s=function(t){return{light:lt,media_player:ht,climate:ut,water_heater:bt,cover:ct,fan:dt,input_number:_t,input_select:pt,number:gt,humidifier:vt}[t]}(e);if(!s)throw new Error(`Unsupported entity type: ${e}`);this.ctrl=new s(t)}async resized(){await this.updateComplete,this.shadowRoot&&this.parentElement&&(this.hide_state=this._config.full_row?this.parentElement.clientWidth<=180:this.parentElement.clientWidth<=335)}async firstUpdated(){await this.resized()}render(){var t;const e=this.ctrl;if(e.hass=this.hass,!e.stateObj)return H`
        <hui-warning>
          ${this.hass.localize("ui.panel.lovelace.warning.entity_not_found","entity",this._config.entity)}
        </hui-warning>
      `;const s=(null!==(t=e.dir)&&void 0!==t?t:this.hass.translationMetadata.translations[this.hass.language||"en"].isRTL)?"rtl":"ltr",i="unavailable"!==e.stateObj.state&&e.hasSlider&&!(e.isOff&&this._config.hide_when_off),r=this._config.toggle&&e.hasToggle,n=!r&&(!1===this._config.hide_state||!this._config.hide_state&&!this.hide_state&&(!e.isOff||!this._config.hide_when_off)),a=H`
      <div class="wrapper" @click=${t=>t.stopPropagation()}>
        ${i?H`
              ${this._config.colorize&&e.background?H`
                    <style>
                      ha-slider {
                        --paper-slider-container-color: ${e.background};
                        --paper-progress-active-color: transparent;
                      }
                    </style>
                  `:""}
              <ha-slider
                .min=${e.min}
                .max=${e.max}
                .step=${e.step}
                .value=${e.value}
                .dir=${s}
		labeled
        	pin
                @change=${t=>e.value=this.shadowRoot.querySelector("ha-slider").value}
                class=${this._config.full_row||this._config.grow?"full":""}
                ignore-bar-touch
              ></ha-slider>
            `:""}
        ${r?e.renderToggle(this.hass):""}
        ${n?H`<span class="state">
              ${"unavailable"===e.stateObj.state?this.hass.localize("state.default.unavailable"):e.string}
            </span>`:""}
      </div>
    `;if(this._config.full_row){if(this._config.hide_when_off&&e.isOff)return H``;if(!0===this._config.show_icon){const t=this._config;return H`
          <div class="wrapper">
            <state-badge
              .hass=${this.hass}
              .stateObj=${e.stateObj}
              .overrideIcon=${t.icon}
              .overrideImage=${t.image}
              .stateColor=${t.state_color}
            ></state-badge>
            ${a}
          </div>
        `}return a}return H`
      <hui-generic-entity-row
        .hass=${this.hass}
        .config=${this._config}
        .catchInteraction=${!1}
      >
        ${a}
      </hui-generic-entity-row>
    `}static get styles(){return a`
      .wrapper {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex: 7;
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
    `}}t([it()],mt.prototype,"hass",void 0),t([it()],mt.prototype,"hide_state",void 0),customElements.get("slider-entity-row")||(customElements.define("slider-entity-row",mt),console.info(`%cSLIDER-ENTITY-ROW ${ft} IS INSTALLED`,"color: green; font-weight: bold",""));
