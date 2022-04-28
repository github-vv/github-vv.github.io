/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),s=new Map;class i{constructor(t,s){if(this._$cssResult$=!0,s!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=s.get(this.cssText);return t&&void 0===e&&(s.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const n=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let s="";for(const e of t.cssRules)s+=e.cssText;return(t=>new i("string"==typeof t?t:t+"",e))(s)})(t):t;var o;const r=window.trustedTypes,l=r?r.emptyScript:"",a=window.reactiveElementPolyfillSupport,h={toAttribute(t,e){switch(e){case Boolean:t=t?l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},d=(t,e)=>e!==t&&(e==e||t==t),c={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:d};class p extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,s)=>{const i=this._$Eh(s,e);void 0!==i&&(this._$Eu.set(i,s),t.push(i))})),t}static createProperty(t,e=c){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){const n=this[t];this[e]=i,this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||c}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of e)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eh(t,e){const s=e.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,s;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const s=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,s)=>{t?e.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((t=>{const s=document.createElement("style"),i=window.litNonce;void 0!==i&&s.setAttribute("nonce",i),s.textContent=t.cssText,e.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ES(t,e,s=c){var i,n;const o=this.constructor._$Eh(t,s);if(void 0!==o&&!0===s.reflect){const r=(null!==(n=null===(i=s.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==n?n:h.toAttribute)(e,s.type);this._$Ei=t,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Ei=null}}_$AK(t,e){var s,i,n;const o=this.constructor,r=o._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=o.getPropertyOptions(r),l=t.converter,a=null!==(n=null!==(i=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==i?i:"function"==typeof l?l:null)&&void 0!==n?n:h.fromAttribute;this._$Ei=r,this[r]=a(e,t.type),this._$Ei=null}}requestUpdate(t,e,s){let i=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||d)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(s)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var u;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null==a||a({ReactiveElement:p}),(null!==(o=globalThis.reactiveElementVersions)&&void 0!==o?o:globalThis.reactiveElementVersions=[]).push("1.3.1");const v=globalThis.trustedTypes,$=v?v.createPolicy("lit-html",{createHTML:t=>t}):void 0,g=`lit$${(Math.random()+"").slice(9)}$`,m="?"+g,f=`<${m}>`,y=document,_=(t="")=>y.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,b=Array.isArray,w=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,S=/>/g,C=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,x=/'/g,P=/"/g,U=/^(?:script|style|textarea|title)$/i,k=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),D=k(1),T=(k(2),Symbol.for("lit-noChange")),H=Symbol.for("lit-nothing"),N=new WeakMap,M=y.createTreeWalker(y,129,null,!1),O=(t,e)=>{const s=t.length-1,i=[];let n,o=2===e?"<svg>":"",r=w;for(let e=0;e<s;e++){const s=t[e];let l,a,h=-1,d=0;for(;d<s.length&&(r.lastIndex=d,a=r.exec(s),null!==a);)d=r.lastIndex,r===w?"!--"===a[1]?r=E:void 0!==a[1]?r=S:void 0!==a[2]?(U.test(a[2])&&(n=RegExp("</"+a[2],"g")),r=C):void 0!==a[3]&&(r=C):r===C?">"===a[0]?(r=null!=n?n:w,h=-1):void 0===a[1]?h=-2:(h=r.lastIndex-a[2].length,l=a[1],r=void 0===a[3]?C:'"'===a[3]?P:x):r===P||r===x?r=C:r===E||r===S?r=w:(r=C,n=void 0);const c=r===C&&t[e+1].startsWith("/>")?" ":"";o+=r===w?s+f:h>=0?(i.push(l),s.slice(0,h)+"$lit$"+s.slice(h)+g+c):s+g+(-2===h?(i.push(void 0),e):c)}const l=o+(t[s]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==$?$.createHTML(l):l,i]};class R{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0;const r=t.length-1,l=this.parts,[a,h]=O(t,e);if(this.el=R.createElement(a,s),M.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=M.nextNode())&&l.length<r;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(g)){const s=h[o++];if(t.push(e),void 0!==s){const t=i.getAttribute(s.toLowerCase()+"$lit$").split(g),e=/([.?@])?(.*)/.exec(s);l.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?B:"?"===e[1]?W:"@"===e[1]?q:z})}else l.push({type:6,index:n})}for(const e of t)i.removeAttribute(e)}if(U.test(i.tagName)){const t=i.textContent.split(g),e=t.length-1;if(e>0){i.textContent=v?v.emptyScript:"";for(let s=0;s<e;s++)i.append(t[s],_()),M.nextNode(),l.push({type:2,index:++n});i.append(t[e],_())}}}else if(8===i.nodeType)if(i.data===m)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=i.data.indexOf(g,t+1));)l.push({type:7,index:n}),t+=g.length-1}n++}}static createElement(t,e){const s=y.createElement("template");return s.innerHTML=t,s}}function L(t,e,s=t,i){var n,o,r,l;if(e===T)return e;let a=void 0!==i?null===(n=s._$Cl)||void 0===n?void 0:n[i]:s._$Cu;const h=A(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(o=null==a?void 0:a._$AO)||void 0===o||o.call(a,!1),void 0===h?a=void 0:(a=new h(t),a._$AT(t,s,i)),void 0!==i?(null!==(r=(l=s)._$Cl)&&void 0!==r?r:l._$Cl=[])[i]=a:s._$Cu=a),void 0!==a&&(e=L(t,a._$AS(t,e.values),a,i)),e}class j{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:s},parts:i}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:y).importNode(s,!0);M.currentNode=n;let o=M.nextNode(),r=0,l=0,a=i[0];for(;void 0!==a;){if(r===a.index){let e;2===a.type?e=new I(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new J(o,this,t)),this.v.push(e),a=i[++l]}r!==(null==a?void 0:a.index)&&(o=M.nextNode(),r++)}return n}m(t){let e=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class I{constructor(t,e,s,i){var n;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cg=null===(n=null==i?void 0:i.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=L(this,t,e),A(t)?t===H||null==t||""===t?(this._$AH!==H&&this._$AR(),this._$AH=H):t!==this._$AH&&t!==T&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return b(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==H&&A(this._$AH)?this._$AA.nextSibling.data=t:this.k(y.createTextNode(t)),this._$AH=t}T(t){var e;const{values:s,_$litType$:i}=t,n="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=R.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(s);else{const t=new j(n,this),e=t.p(this.options);t.m(s),this.k(e),this._$AH=t}}_$AC(t){let e=N.get(t.strings);return void 0===e&&N.set(t.strings,e=new R(t)),e}S(t){b(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new I(this.M(_()),this.M(_()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class z{constructor(t,e,s,i,n){this.type=1,this._$AH=H,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){const n=this.strings;let o=!1;if(void 0===n)t=L(this,t,e,0),o=!A(t)||t!==this._$AH&&t!==T,o&&(this._$AH=t);else{const i=t;let r,l;for(t=n[0],r=0;r<n.length-1;r++)l=L(this,i[s+r],e,r),l===T&&(l=this._$AH[r]),o||(o=!A(l)||l!==this._$AH[r]),l===H?t=H:t!==H&&(t+=(null!=l?l:"")+n[r+1]),this._$AH[r]=l}o&&!i&&this.C(t)}C(t){t===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class B extends z{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===H?void 0:t}}const V=v?v.emptyScript:"";class W extends z{constructor(){super(...arguments),this.type=4}C(t){t&&t!==H?this.element.setAttribute(this.name,V):this.element.removeAttribute(this.name)}}class q extends z{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){var s;if((t=null!==(s=L(this,t,e,0))&&void 0!==s?s:H)===T)return;const i=this._$AH,n=t===H&&i!==H||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==H&&(i===H||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class J{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){L(this,t)}}const K=window.litHtmlPolyfillSupport;var G,Z;null==K||K(R,I),(null!==(u=globalThis.litHtmlVersions)&&void 0!==u?u:globalThis.litHtmlVersions=[]).push("2.2.2");class F extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const s=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=s.firstChild),s}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,s)=>{var i,n;const o=null!==(i=null==s?void 0:s.renderBefore)&&void 0!==i?i:e;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new I(e.insertBefore(_(),t),t,void 0,null!=s?s:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return T}}F.finalized=!0,F._$litElement$=!0,null===(G=globalThis.litElementHydrateSupport)||void 0===G||G.call(globalThis,{LitElement:F});const Q=globalThis.litElementPolyfillSupport;var X;null==Q||Q({LitElement:F}),(null!==(Z=globalThis.litElementVersions)&&void 0!==Z?Z:globalThis.litElementVersions=[]).push("3.2.0"),null===(X=window.HTMLSlotElement)||void 0===X||X.prototype.assignedElements,console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");const Y=((t,...s)=>{const n=1===t.length?t[0]:s.reduce(((e,s,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1]),t[0]);return new i(n,e)})`
  :host {
    font-family: Arial, serif;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.7;
  }

  .popup {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    padding: 15px;
    background: #fff;
    border-radius: 5px;
    color: #000;
    text-align: center;
  }

  .day, .hour {
    padding: 15px;
    margin: 2.5px;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
    background: green;
    color: white;
  }

  .day {
    display: inline-block;
    min-width: 105px;
  }

  .hour {
    display: block;
  }

  .active {
    background: deepskyblue;
    display: inline-block;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
  }

  .info {
    margin-bottom: 10px;
  }

  .free, .crowded, .full {
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    vertical-align: middle;
  }

  .free, .green {
    background: green;
  }

  .crowded, .orange {
    background: orange;
  }

  .full, .red {
    background: red;
  }
`;function tt(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function et(t){tt(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function st(t){tt(1,arguments);var e=et(t);return e.setHours(0,0,0,0),e}const it=JSON.parse('[{"username":"jx28fq","name":"Valentin"}]'),nt={"Content-Type":"application/json","Api-Key":"2eb4d913-f343-4e6d-aa38-0f2a8718e521"},ot=new class{constructor(){this.users=it,this.endpoints={appointments:"https://json.psty.io/api_v1/stores/appointments",hours:"https://json.psty.io/api_v1/stores/hours"}}checkUser(t){return!!this.users.find((e=>e.username===t))}save(t){return fetch(this.endpoints.appointments,{method:"PUT",headers:nt,body:JSON.stringify(t)})}get(){return fetch(this.endpoints.appointments,{method:"GET",headers:nt}).then((t=>t.json())).then((t=>t.data))}getHours(){return fetch(this.endpoints.hours,{method:"GET",headers:nt}).then((t=>t.json())).then((t=>t.data))}};customElements.define("main-element",class extends F{static get styles(){return Y}static get properties(){return{selectedDay:{type:Date},showPopup:{type:Boolean},appointments:{type:Array}}}constructor(){super(),this.selectedDay=null,this.showPopup=!1,this.appointments=[],this.hours={},this.weekdays=["Luni","Marți","Miercuri","Joi","Vineri","Sâmbătă","Duminică"],this.startDate=new Date,this.currentDayIndex=this.startDate.getDay()-1,this.currentDayIndex<0&&(this.currentDayIndex=0),this.days=this.weekdays.slice(this.currentDayIndex).concat(this.weekdays).map(((t,e)=>{const s=new Date(this.startDate);return s.setDate(s.getDate()+e),{name:t,date:s}}))}firstUpdated(t){super.firstUpdated(t);const e="jx28fq";ot.checkUser(e)?(this.user=e,this.getAppointments(),ot.getHours().then((t=>this.hours=t))):alert("Codul de utilizator nu a fost găsit!")}clickDay(t){if(!this.user)return alert("Nu esti conectat!");this.displayHours=t.isFirstWeek?this.hours.firstWeek:this.hours.secondWeek,this.selectedDay=t,this.showPopup=!0}saveAppointment(t){confirm(`Ești sigur că vrei ${this.selectedDay.name} ${this.selectedDay.date.toLocaleDateString()} ora ${t}?`)&&(this.appointments.push({id:this.appointments.length+1,user:this.user,date:this.selectedDay.date,hour:t}),ot.save(this.appointments).then((()=>{console.log("done!"),this.showPopup=!1})))}getAppointments(){ot.get().then((t=>this.appointments=t))}deleteAppointment(t){const e=this.appointments.filter((e=>e.id!==t));ot.save(e).then((()=>{console.log("done!"),this.appointments=e}))}getAppointmentClass(t){const e=new Date(t),s=this.appointments.filter((t=>{const s=new Date(t.date);if(function(t,e){tt(2,arguments);var s=st(t),i=st(e);return s.getTime()===i.getTime()}(e,s))return!0})).length;return s?s<4?"orange":"red":"green"}render(){return D`
            ${this.showPopup?D`
                <div class="overlay" @click="${()=>this.showPopup=!1}"></div>
                <div class="popup">
                    <strong style="display: block">Alege ora</strong>
                    <small>pentru ${this.selectedDay.name} ${this.selectedDay.date.toLocaleDateString()}</small>:
                    ${this.displayHours.map((t=>D`
                                <div class="hour" @click="${()=>this.saveAppointment(t)}">${t}</div>`))}
                </div>`:""}

            <div class="info">
                <strong>Legendă:</strong>
                <span class="free"></span> Liber
                <span class="crowded"></span> Aglomerat
                <span class="full"></span> Plin
            </div>

            <strong>Programările tale active:</strong>

            <div class="appointments">
                ${this.appointments.map((t=>D`
                    <div>
                        <small>${new Date(t.date).toLocaleDateString()}
                            ${t.hour}</small>
                        <button class="delete" @click="${()=>this.deleteAppointment(t.id)}">
                            &#215;
                        </button>
                    </div>
                `))}
            </div>
            <hr/>

            ${this.days.map(((t,e)=>D`
                        ${t.name===this.weekdays[0]&&0!==e?D`
                            <hr/>`:""}

                        <div class="day ${this.getAppointmentClass(t.date)}" @click="${()=>this.clickDay(t)}">
                            <strong>${t.name}</strong>
                            <small style="display: block">${t.date.toLocaleDateString()}</small>
                        </div>`))}
        `}})})();