import{_ as lt}from"./ValaxyMain.vue_vue_type_style_index_0_lang-DrOq8nfN.js";import{i as rt,j as ct,d as bt,k as ut,l as dt,o as Te,e as ft,f as N,a as pt,p as Pe,c as ht,w as P,m as $t,r as C}from"./app-DiHSmlCK.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-akryCAfB.js";import"./YunCard.vue_vue_type_script_setup_true_lang-fYy4rvRe.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-PHvA0LnR.js";import"./index-C7yU5XnD.js";var re={};function gt(l){throw new Error('Could not dynamically require "'+l+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var D={},ee={},Ce;function mt(){if(Ce)return ee;Ce=1,Object.defineProperty(ee,"__esModule",{value:!0});const l=we();function x($){return Object.entries($).filter(([,u])=>!!u).map(([u,d])=>`${u}=${d}`).join("&")}function j($){if(!$.startsWith("http"))return $;const u=new URL($),d=u.pathname==="/"?"":u.pathname;return`${u.origin}${d}`}const _={全部:"0",想看:"1",在看:"2",看过:"3"},h={动画:_,游戏:{全部:"0",想玩:"1",在玩:"2",玩过:"3"},书籍:{全部:"0",想读:"1",在读:"2",读过:"3"}},U={动画:"1",游戏:"2",书籍:"3"},O={动画:["全部","想看","在看","看过"],游戏:["全部","想玩","在玩","玩过"],书籍:["全部","想读","在读","读过"]};async function T($,u){const d=Object.assign(Object.assign({},u),{collectionType:_[u.collectionType]});return await(await fetch(`${j($)}/bilibili?${x(d)}`)).json()}async function z($,u){const{subjectType:d}=u,k=Object.assign(Object.assign({},u),{collectionType:h[d][u.collectionType],subjectType:U[u.subjectType]});return await(await fetch(`${j($)}/bgm?${x(k)}`)).json()}function M({activeLabel:$,labels:u,onChange:d}){const k=w=>{$!==w&&d(w)};return l.h("div",{class:"bbc-tabs"},u.map(w=>l.h("div",{class:{"bbc-tab-item":!0,"bbc-tab-item-active":w===$},key:w,onClick:()=>k(w)},w)))}function q(){return l.h("div",{class:"bbc-skeleton-container bbc-bangumi-item"},l.h("div",{class:"bbc-skeleton-avatar"}),l.h("div",{class:"bbc-skeleton-content bbc-bangumi-content"},l.h("div",{class:"bbc-skeleton-row",style:{width:"30%"}}),l.h("div",{class:"bbc-skeleton-row",style:{width:"60%",height:"40px"}}),l.h("div",{class:"bbc-skeleton-row",style:{width:"90%",height:"32px"}})))}const J=({list:$,loading:u})=>l.h("div",{class:"bbc-bangumi"},$.map(d=>l.h("div",null,u?l.h(q,null):l.h("div",{class:"bbc-bangumi-item"},l.h("a",{href:d.url,target:"_blank",rel:"noreferrer"},l.h("img",{src:d.cover,alt:"cover",loading:"lazy",referrerpolicy:"no-referrer"})),l.h("div",{class:"bbc-bangumi-content"},l.h("h3",{class:"bbc-bangumi-title"},l.h("a",{href:d.url,target:"_blank",rel:"noreferrer",innerHTML:d.name?d.name:d.nameCN}),d.name&&l.h("small",{innerHTML:d.nameCN})),l.h("div",{class:"bbc-bangumi-labels"},d.labels.map(k=>l.h("div",{class:"bbc-bangumi-label"},l.h("p",{class:"bbc-bangumi-label-title"},k.label),k.value&&l.h("p",null,k.value)))),l.h("p",{class:"bbc-bangumi-summary",innerHTML:d.summary}))))));function W({pageNumber:$,totalPages:u,onChange:d,onInputChange:k}){return l.h("div",{class:"bbc-pagination"},l.h("a",{class:"bbc-pagination-button",onClick:()=>d("head")},"首页"),l.h("a",{class:"bbc-pagination-button",onClick:()=>d("prev")},"上一页"),l.h("span",{class:"bbc-pagination-pagenum"},`${$} / ${u}`),l.h("a",{class:"bbc-pagination-button",onClick:()=>d("next")},"下一页"),l.h("a",{class:"bbc-pagination-button",onClick:()=>d("tail")},"尾页"),l.h("div",{class:"bbc-pagination-input"},l.h("span",null,"跳至"),l.h("input",{type:"text",maxLength:4,onChange:k}),l.h("span",null,"页")))}function I(){return l.h("div",{class:"bbc-empty"},l.h("img",{src:"https://s1.hdslb.com/bfs/static/webssr/article/empty.png",alt:"empty",referrerpolicy:"no-referrer"}))}function te({error:$}){return l.h("div",{class:"bbc-error"},l.h("img",{src:"https://s1.hdslb.com/bfs/static/jinkela/long/bitmap/error_01.png",alt:"parse failed",referrerpolicy:"no-referrer"}),l.h("p",null,"Σ(oﾟдﾟoﾉ) 发生了一些错误"),l.h("p",null,`message: ${$.message}`))}const ne=`@layer bilibili-bangumi-component {
  :host {
    display: block;
    /* 基础文本颜色 */
    --bbc-text-base-color: #4c4948;
    /* 标签颜色 */
    --bbc-label-color: #FF9843;
    /* 下划线、背景之类的颜色 */
    --bbc-primary-color: #425aef;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  .bbc-tabs {
    display: flex;
    gap: 8px;
  }

  .bbc-tab-item {
    padding: 4px 16px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: bold;
    color: var(--bbc-text-base-color);
    cursor: pointer;
  }

  .bbc-tab-item:hover {
    background-color: var(--bbc-primary-color);
    color: white;
  }

  .bbc-tab-item-active {
    color: white;
    background-color: var(--bbc-primary-color);
  }

  .bbc-header-platform {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 16px;
    /* height: 40px; */
  }

  .bbc-header-platform .divider {
    width: 3px;
    border-radius: 2px;
    height: 32px;
    background-color: var(--bbc-primary-color);
  }

  .bbc-bangumi:last-child {
    border-bottom: none;
  }

  .bbc-bangumi-item {
    display: flex;
    margin: 12px 0;
    gap: 16px;
    padding: 16px;
    border-bottom: 1px solid #ddd;
  }

  .bbc-bangumi-item img {
    border-radius: 8px;
    cursor: pointer;
    height: 140px;
    object-fit: cover;
    aspect-ratio: 3 / 4;
  }

  .bbc-bangumi-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .bbc-bangumi-title {
    margin: 0;
  }

  .bbc-bangumi-title a {
    color: var(--bbc-text-base-color);
  }

  .bbc-bangumi-title a:hover {
    border-bottom: 2px solid var(--bbc-primary-color);
  }

  .bbc-bangumi-title small {
    margin-left: 8px;
    font-weight: normal;
    font-size: 14px;
    color: var(--bbc-text-base-color);
    height: 24px;
  }

  .bbc-bangumi-labels {
    color: var(--bbc-label-color);
    display: flex;
  }

  .bbc-bangumi-label {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 13%;
    height: 36px;
    border-right: 1px solid var(--bbc-label-color);
  }

  .bbc-bangumi-label:last-child {
    border-right: none;
  }

  .bbc-bangumi-label p {
    font-size: 14px;
    margin: 0;
    padding: 0 4px;
  }

  .bbc-bangumi-label:not(.bbc-bangumi-label > .bbc-bangumi-label-title) {
    justify-content: center;
  }

  .bbc-bangumi-summary {
    font-size: 12px;
    color: var(--bbc-text-base-color);

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .bbc-pagination {
    height: 40px;
    text-align: center;
    padding-right: 20px;
  }

  .bbc-pagination-button {
    border-radius: 4px;
    font-size: 14px;
    padding: 4px 8px;
    margin: 0 4px;
    color: #bbb;
    cursor: pointer;
  }

  .bbc-pagination-button:hover {
    background-color: var(--bbc-primary-color);
    color: white;
  }

  .bbc-pagination-pagenum {
    color: #bbb;
    font-size: 14px;
  }
  
  .bbc-pagination-input {
    display: inline-block;
    color: #bbb;
    font-size: 12px;
  }

  .bbc-pagination-input input {
    display: inline-block;
    margin: 0 8px;
    font-size: 12px;
    color: #bbb;
    width: 30px;
    height: 24px;
    line-height: 24px;
    border-radius: 4px;
    border: 1px solid #bbb;
    text-align: center;
    outline: none;
    transition: border .2s ease;
  }

  .bbc-skeleton-container {
    animation: skeleton-blink 1.2s ease-in-out infinite;
  }

  @keyframes skeleton-blink {
    50% {
      opacity: 0.6;
    }
  }

  .bbc-skeleton-avatar {
    height: 140px;
    border-radius: 12px;
    background-color: #f2f3f5;
    aspect-ratio: 3 / 4;
  }

  .bbc-skeleton-row {
    height: 24px;
    border-radius: 8px;
    background-color: #f2f3f5;
  }

  .bbc-empty {
    display: flex;
    padding: 40px 0;
    justify-content: center;
    align-items: center;
  }

  .bbc-empty img {
    height: 140px;
    object-fit: cover;
  }

  .bbc-error {
    margin: 20px 0;
    display: flex;
    gap: 12px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .bbc-error img {
    display: block;
    width: 260px;
  }

  .bbc-error p {
    margin: 0;
    color: var(--bbc-text-base-color);
    font-size: 18px;
  }

  @media screen and (max-width: 768px) {
    .bbc-tab-item {
      padding: 4px 12px;
    }

    .bbc-header-platform {
      gap: 16px;
    }

    .bbc-bangumi-title a {
      font-size: 16px;
    }

    .bbc-bangumi-label {
      width: 30%;
    }    

    .bbc-bangumi-label p {
      font-size: 12px;
    }
    
    .bbc-bangumi-label:nth-child(n + 4) {
      display: none;
    }

    .bbc-bangumi-label:nth-child(3) {
      border-right: none;
    }
  }
}`,Y=class{constructor($){l.registerInstance(this,$),this.platformLabels=["Bilibili","Bangumi"],this.subjectLabels=["动画","游戏","书籍"],this.fetchData=async()=>{try{this.loading=!0,this.error=null;let u;const d={uid:this.bilibiliUid,collectionType:this.activeCollection,pageSize:this.pageSize,pageNumber:this.pageNumber};this.activePlatform==="Bilibili"?u=await T(this.api,d):u=await z(this.api,Object.assign(Object.assign({},d),{uid:this.bgmUid,subjectType:this.activeSubject})),u.code===200?this.responseData=u.data:(this.error=u,this.responseData=null)}catch(u){this.error=u,this.responseData=null}this.loading=!1},this.handlePlatformChange=u=>{this.collectionLabels=O.动画,this.activePlatform=u,this.pageNumber=1,this.activeSubject="动画",this.activeCollection="全部",this.fetchData()},this.handleSubjectChange=u=>{this.collectionLabels=O[u],this.activeSubject=u,this.pageNumber=1,this.activeCollection="全部",this.fetchData()},this.handleCollectionChange=u=>{this.activeCollection=u,this.pageNumber=1,this.fetchData()},this.scrollToTop=()=>{document.documentElement.scrollTo({top:0,behavior:"smooth"})},this.handlePageChange=u=>{const{totalPages:d}=this.responseData;switch(u){case"head":this.pageNumber=1;break;case"prev":if(this.pageNumber===1)return;this.pageNumber--;break;case"next":if(this.pageNumber===d)return;this.pageNumber++;break;case"tail":this.pageNumber=d;break}this.scrollToTop(),this.fetchData()},this.handleInputChange=u=>{const d=Number.parseInt(u.target.value);if(Object.is(d,Number.NaN))return;const{totalPages:k}=this.responseData;d<1?this.pageNumber=1:d>k?this.pageNumber=k:this.pageNumber=d,this.scrollToTop(),this.fetchData()},this.api=void 0,this.bilibiliUid=void 0,this.bgmUid=void 0,this.bilibiliEnabled=!0,this.bgmEnabled=!0,this.loading=!1,this.error=void 0,this.pageNumber=1,this.pageSize=15,this.responseData=void 0,this.activePlatform="Bilibili",this.activeSubject="动画",this.collectionLabels=["全部","想看","在看","看过"],this.activeCollection="全部"}componentWillLoad(){const $=[this.bilibiliEnabled,this.bgmEnabled];this.platformLabels=this.platformLabels.filter((u,d)=>$[d]),this.activePlatform=this.platformLabels[0],this.fetchData()}render(){return l.h("div",null,l.h("div",{class:"bbc-header-platform"},l.h(M,{activeLabel:this.activePlatform,labels:this.platformLabels,onChange:this.handlePlatformChange}),this.activePlatform==="Bangumi"&&l.h("div",{class:"divider"}),this.activePlatform==="Bangumi"&&l.h(M,{activeLabel:this.activeSubject,labels:this.subjectLabels,onChange:this.handleSubjectChange})),l.h("div",null,l.h(M,{activeLabel:this.activeCollection,labels:this.collectionLabels,onChange:this.handleCollectionChange})),this.loading&&!this.responseData&&l.h(q,null),this.error&&l.h(te,{error:this.error}),this.responseData&&l.h(J,{loading:this.loading,list:this.responseData.list}),this.responseData&&this.responseData.total===0&&l.h(I,null),this.responseData&&l.h(W,{pageNumber:this.pageNumber,totalPages:this.responseData.totalPages,onChange:this.handlePageChange,onInputChange:this.handleInputChange}))}};return Y.style=ne,ee.bilibili_bangumi=Y,ee}var _e;function we(){if(_e)return D;_e=1;function l(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach(function(i){if(i!=="default"){var n=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(t,i,n.get?n:{enumerable:!0,get:function(){return e[i]}})}}),t.default=e,Object.freeze(t)}const x="bilibili-bangumi-component";let j,_,B=!1,A=!1;const h=(e,t="")=>()=>{},U=(e,t)=>()=>{},O="{visibility:hidden}.hydrated{visibility:inherit}",T="slot-fb{display:contents}slot-fb[hidden]{display:none}",z={},M=e=>e!=null,q=e=>(e=typeof e,e==="object"||e==="function");function J(e){var t,i,n;return(n=(i=(t=e.head)===null||t===void 0?void 0:t.querySelector('meta[name="csp-nonce"]'))===null||i===void 0?void 0:i.getAttribute("content"))!==null&&n!==void 0?n:void 0}const W=(e,t,...i)=>{let n=null,s=null,o=!1,a=!1;const c=[],r=p=>{for(let f=0;f<p.length;f++)n=p[f],Array.isArray(n)?r(n):n!=null&&typeof n!="boolean"&&((o=typeof e!="function"&&!q(n))&&(n=String(n)),o&&a?c[c.length-1].$text$+=n:c.push(o?I(null,n):n),a=o)};if(r(i),t){t.key&&(s=t.key);{const p=t.className||t.class;p&&(t.class=typeof p!="object"?p:Object.keys(p).filter(f=>p[f]).join(" "))}}if(typeof e=="function")return e(t===null?{}:t,c,ne);const b=I(e,null);return b.$attrs$=t,c.length>0&&(b.$children$=c),b.$key$=s,b},I=(e,t)=>{const i={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};return i.$attrs$=null,i.$key$=null,i},te={},ce=e=>e&&e.$tag$===te,ne={forEach:(e,t)=>e.map(Y).forEach(t),map:(e,t)=>e.map(Y).map(t).map($)},Y=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),$=e=>{if(typeof e.vtag=="function"){const i=Object.assign({},e.vattrs);return e.vkey&&(i.key=e.vkey),e.vname&&(i.name=e.vname),W(e.vtag,i,...e.vchildren||[])}const t=I(e.vtag,e.vtext);return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},u=(e,t)=>e!=null&&!q(e)?t&4?e==="false"?!1:e===""||!!e:t&1?String(e):e:e,d=(e,t,i)=>{const n=y.ce(t,i);return e.dispatchEvent(n),n},k=new WeakMap,w=(e,t,i)=>{let n=K.get(e);it&&i?(n=n||new CSSStyleSheet,typeof n=="string"?n=t:n.replaceSync(t)):n=t,K.set(e,n)},Be=(e,t,i)=>{var n;const s=be(t),o=K.get(s);if(e=e.nodeType===11?e:L,o)if(typeof o=="string"){e=e.head||e;let a=k.get(e),c;if(a||k.set(e,a=new Set),!a.has(s)){{c=L.createElement("style"),c.innerHTML=o;const r=(n=y.$nonce$)!==null&&n!==void 0?n:J(L);r!=null&&c.setAttribute("nonce",r),e.insertBefore(c,e.querySelector("link"))}t.$flags$&4&&(c.innerHTML+=T),a&&a.add(s)}}else e.adoptedStyleSheets.includes(o)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,o]);return s},Oe=e=>{const t=e.$cmpMeta$,i=e.$hostElement$,n=t.$flags$,s=h("attachStyles",t.$tagName$),o=Be(i.shadowRoot?i.shadowRoot:i.getRootNode(),t);n&10&&(i["s-sc"]=o,i.classList.add(o+"-h")),s()},be=(e,t)=>"sc-"+e.$tagName$,ue=(e,t,i,n,s,o)=>{if(i!==n){let a=xe(e,t),c=t.toLowerCase();if(t==="class"){const r=e.classList,b=de(i),p=de(n);r.remove(...b.filter(f=>f&&!p.includes(f))),r.add(...p.filter(f=>f&&!b.includes(f)))}else if(t==="style"){for(const r in i)(!n||n[r]==null)&&(r.includes("-")?e.style.removeProperty(r):e.style[r]="");for(const r in n)(!i||n[r]!==i[r])&&(r.includes("-")?e.style.setProperty(r,n[r]):e.style[r]=n[r])}else if(t!=="key")if(!a&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"?t=t.slice(3):xe(Q,c)?t=c.slice(2):t=c[2]+t.slice(3),i||n){const r=t.endsWith(fe);t=t.replace(Me,""),i&&y.rel(e,t,i,r),n&&y.ael(e,t,n,r)}}else{const r=q(n);if((a||r&&n!==null)&&!s)try{if(e.tagName.includes("-"))e[t]=n;else{const b=n??"";t==="list"?a=!1:(i==null||e[t]!=b)&&(e[t]=b)}}catch{}n==null||n===!1?(n!==!1||e.getAttribute(t)==="")&&e.removeAttribute(t):(!a||o&4||s)&&!r&&(n=n===!0?"":n,e.setAttribute(t,n))}}},ze=/\s/,de=e=>e?e.split(ze):[],fe="Capture",Me=new RegExp(fe+"$"),pe=(e,t,i,n)=>{const s=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$,o=e&&e.$attrs$||z,a=t.$attrs$||z;for(n in o)n in a||ue(s,n,o[n],void 0,i,t.$flags$);for(n in a)ue(s,n,o[n],a[n],i,t.$flags$)},X=(e,t,i,n)=>{const s=t.$children$[i];let o=0,a,c;if(s.$text$!==null)a=s.$elm$=L.createTextNode(s.$text$);else if(a=s.$elm$=L.createElement(s.$tag$),pe(null,s,B),M(j)&&a["s-si"]!==j&&a.classList.add(a["s-si"]=j),s.$children$)for(o=0;o<s.$children$.length;++o)c=X(e,s,o),c&&a.appendChild(c);return a["s-hn"]=_,a},he=(e,t,i,n,s,o)=>{let a=e,c;for(a.shadowRoot&&a.tagName===_&&(a=a.shadowRoot);s<=o;++s)n[s]&&(c=X(null,i,s),c&&(n[s].$elm$=c,a.insertBefore(c,t)))},$e=(e,t,i)=>{for(let n=t;n<=i;++n){const s=e[n];if(s){const o=s.$elm$;o&&o.remove()}}},Ae=(e,t,i,n,s=!1)=>{let o=0,a=0,c=0,r=0,b=t.length-1,p=t[0],f=t[b],v=n.length-1,g=n[0],m=n[v],S,E;for(;o<=b&&a<=v;)if(p==null)p=t[++o];else if(f==null)f=t[--b];else if(g==null)g=n[++a];else if(m==null)m=n[--v];else if(G(p,g,s))F(p,g,s),p=t[++o],g=n[++a];else if(G(f,m,s))F(f,m,s),f=t[--b],m=n[--v];else if(G(p,m,s))F(p,m,s),e.insertBefore(p.$elm$,f.$elm$.nextSibling),p=t[++o],m=n[--v];else if(G(f,g,s))F(f,g,s),e.insertBefore(f.$elm$,p.$elm$),f=t[--b],g=n[++a];else{for(c=-1,r=o;r<=b;++r)if(t[r]&&t[r].$key$!==null&&t[r].$key$===g.$key$){c=r;break}c>=0?(E=t[c],E.$tag$!==g.$tag$?S=X(t&&t[a],i,c):(F(E,g,s),t[c]=void 0,S=E.$elm$),g=n[++a]):(S=X(t&&t[a],i,a),g=n[++a]),S&&p.$elm$.parentNode.insertBefore(S,p.$elm$)}o>b?he(e,n[v+1]==null?null:n[v+1].$elm$,i,n,a,v):a>v&&$e(t,o,b)},G=(e,t,i=!1)=>e.$tag$===t.$tag$?i?!0:e.$key$===t.$key$:!1,F=(e,t,i=!1)=>{const n=t.$elm$=e.$elm$,s=e.$children$,o=t.$children$,a=t.$text$;a===null?(pe(e,t,B),s!==null&&o!==null?Ae(n,s,t,o,i):o!==null?(e.$text$!==null&&(n.textContent=""),he(n,null,t,o,0,o.length-1)):s!==null&&$e(s,0,s.length-1)):e.$text$!==a&&(n.data=a)},De=(e,t,i=!1)=>{const n=e.$hostElement$,s=e.$vnode$||I(null,null),o=ce(t)?t:W(null,null,t);if(_=n.tagName,i&&o.$attrs$)for(const a of Object.keys(o.$attrs$))n.hasAttribute(a)&&!["key","ref","style","class"].includes(a)&&(o.$attrs$[a]=n[a]);o.$tag$=null,o.$flags$|=4,e.$vnode$=o,o.$elm$=s.$elm$=n.shadowRoot||n,j=n["s-sc"],F(s,o,i)},ge=(e,t)=>{t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise(i=>e.$onRenderResolve$=i))},ie=(e,t)=>{if(e.$flags$|=16,e.$flags$&4){e.$flags$|=512;return}return ge(e,e.$ancestorComponent$),at(()=>Ue(e,t))},Ue=(e,t)=>{const i=h("scheduleUpdate",e.$cmpMeta$.$tagName$),n=e.$lazyInstance$;let s;return t&&(s=Ne(n,"componentWillLoad")),i(),qe(s,()=>Fe(e,n,t))},qe=(e,t)=>Ie(e)?e.then(t):t(),Ie=e=>e instanceof Promise||e&&e.then&&typeof e.then=="function",Fe=async(e,t,i)=>{var n;const s=e.$hostElement$,o=h("update",e.$cmpMeta$.$tagName$),a=s["s-rc"];i&&Oe(e);const c=h("render",e.$cmpMeta$.$tagName$);He(e,t,s,i),a&&(a.map(r=>r()),s["s-rc"]=void 0),c(),o();{const r=(n=s["s-p"])!==null&&n!==void 0?n:[],b=()=>Re(e);r.length===0?b():(Promise.all(r).then(b),e.$flags$|=4,r.length=0)}},He=(e,t,i,n)=>{try{t=t.render(),e.$flags$&=-17,e.$flags$|=2,De(e,t,n)}catch(s){R(s,e.$hostElement$)}return null},Re=e=>{const t=e.$cmpMeta$.$tagName$,i=e.$hostElement$,n=h("postUpdate",t),s=e.$ancestorComponent$;e.$flags$&64?n():(e.$flags$|=64,ye(i),n(),e.$onReadyResolve$(i),s||me()),e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),e.$flags$&512&&le(()=>ie(e,!1)),e.$flags$&=-517},me=e=>{ye(L.documentElement),le(()=>d(Q,"appload",{detail:{namespace:x}}))},Ne=(e,t,i)=>{if(e&&e[t])try{return e[t](i)}catch(n){R(n)}},ye=e=>e.classList.add("hydrated"),We=(e,t)=>H(e).$instanceValues$.get(t),Ye=(e,t,i,n)=>{const s=H(e),o=s.$instanceValues$.get(t),a=s.$flags$,c=s.$lazyInstance$;i=u(i,n.$members$[t][0]);const r=Number.isNaN(o)&&Number.isNaN(i),b=i!==o&&!r;(!(a&8)||o===void 0)&&b&&(s.$instanceValues$.set(t,i),c&&(a&18)===2&&ie(s,!1))},ve=(e,t,i)=>{var n;const s=e.prototype;if(t.$members$){const o=Object.entries(t.$members$);if(o.map(([a,[c]])=>{(c&31||i&2&&c&32)&&Object.defineProperty(s,a,{get(){return We(this,a)},set(r){Ye(this,a,r,t)},configurable:!0,enumerable:!0})}),i&1){const a=new Map;s.attributeChangedCallback=function(c,r,b){y.jmp(()=>{var p;const f=a.get(c);if(this.hasOwnProperty(f))b=this[f],delete this[f];else{if(s.hasOwnProperty(f)&&typeof this[f]=="number"&&this[f]==b)return;if(f==null){const v=H(this),g=v==null?void 0:v.$flags$;if(g&&!(g&8)&&g&128&&b!==r){const m=v.$lazyInstance$,S=(p=t.$watchers$)===null||p===void 0?void 0:p[c];S==null||S.forEach(E=>{m[E]!=null&&m[E].call(m,b,r,c)})}return}}this[f]=b===null&&typeof this[f]=="boolean"?!1:b})},e.observedAttributes=Array.from(new Set([...Object.keys((n=t.$watchers$)!==null&&n!==void 0?n:{}),...o.filter(([c,r])=>r[0]&15).map(([c,r])=>{const b=r[1]||c;return a.set(b,c),b})]))}}return e},Je=async(e,t,i,n)=>{let s;if(!(t.$flags$&32)){t.$flags$|=32;{if(s=nt(i),s.then){const r=U();s=await s,r()}s.isProxied||(ve(s,i,2),s.isProxied=!0);const c=h("createInstance",i.$tagName$);t.$flags$|=8;try{new s(t)}catch(r){R(r)}t.$flags$&=-9,c()}if(s.style){let c=s.style;const r=be(i);if(!K.has(r)){const b=h("registerStyles",i.$tagName$);w(r,c,!!(i.$flags$&1)),b()}}}const o=t.$ancestorComponent$,a=()=>ie(t,!0);o&&o["s-rc"]?o["s-rc"].push(a):a()},Xe=e=>{},Ge=e=>{if(!(y.$flags$&1)){const t=H(e),i=t.$cmpMeta$,n=h("connectedCallback",i.$tagName$);if(t.$flags$&1)t!=null&&t.$lazyInstance$||t!=null&&t.$onReadyPromise$&&t.$onReadyPromise$.then(()=>Xe());else{t.$flags$|=1;{let s=e;for(;s=s.parentNode||s.host;)if(s["s-p"]){ge(t,t.$ancestorComponent$=s);break}}i.$members$&&Object.entries(i.$members$).map(([s,[o]])=>{if(o&31&&e.hasOwnProperty(s)){const a=e[s];delete e[s],e[s]=a}}),Je(e,t,i)}n()}},Ke=e=>{},Qe=async e=>{if(!(y.$flags$&1)){const t=H(e);t!=null&&t.$lazyInstance$||t!=null&&t.$onReadyPromise$&&t.$onReadyPromise$.then(()=>Ke())}},Ze=(e,t={})=>{var i;const n=h(),s=[],o=t.exclude||[],a=Q.customElements,c=L.head,r=c.querySelector("meta[charset]"),b=L.createElement("style"),p=[];let f,v=!0;Object.assign(y,t),y.$resourcesUrl$=new URL(t.resourcesUrl||"./",L.baseURI).href;let g=!1;if(e.map(m=>{m[1].map(S=>{const E={$flags$:S[0],$tagName$:S[1],$members$:S[2],$listeners$:S[3]};E.$flags$&4&&(g=!0),E.$members$=S[2];const Z=E.$tagName$,ot=class extends HTMLElement{constructor(V){super(V),V=this,tt(V,E),E.$flags$&1&&V.attachShadow({mode:"open"})}connectedCallback(){f&&(clearTimeout(f),f=null),v?p.push(this):y.jmp(()=>Ge(this))}disconnectedCallback(){y.jmp(()=>Qe(this))}componentOnReady(){return H(this).$onReadyPromise$}};E.$lazyBundleId$=m[0],!o.includes(Z)&&!a.get(Z)&&(s.push(Z),a.define(Z,ve(ot,E,1)))})}),g&&(b.innerHTML+=T),b.innerHTML+=s+O,b.innerHTML.length){b.setAttribute("data-styles","");const m=(i=y.$nonce$)!==null&&i!==void 0?i:J(L);m!=null&&b.setAttribute("nonce",m),c.insertBefore(b,r?r.nextSibling:c.firstChild)}v=!1,p.length?p.map(m=>m.connectedCallback()):y.jmp(()=>f=setTimeout(me,30)),n()},Ve=e=>y.$nonce$=e,se=new WeakMap,H=e=>se.get(e),et=(e,t)=>se.set(t.$lazyInstance$=e,t),tt=(e,t)=>{const i={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return i.$onReadyPromise$=new Promise(n=>i.$onReadyResolve$=n),e["s-p"]=[],e["s-rc"]=[],se.set(e,i)},xe=(e,t)=>t in e,R=(e,t)=>(0,console.error)(e,t),ae=new Map,nt=(e,t,i)=>{const n=e.$tagName$.replace(/-/g,"_"),s=e.$lazyBundleId$,o=ae.get(s);if(o)return o[n];if(!i||!BUILD.hotModuleReplacement){const a=c=>(ae.set(s,c),c[n]);switch(s){case"bilibili-bangumi.cjs":return Promise.resolve().then(function(){return l(mt())}).then(a,R)}}return Promise.resolve().then(function(){return l(gt(`./${s}.entry.js`))}).then(a=>(ae.set(s,a),a[n]),R)},K=new Map,Q=typeof window<"u"?window:{},L=Q.document||{head:{}},y={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,i,n)=>e.addEventListener(t,i,n),rel:(e,t,i,n)=>e.removeEventListener(t,i,n),ce:(e,t)=>new CustomEvent(e,t)},ke=e=>Promise.resolve(e),it=(()=>{try{return new CSSStyleSheet,typeof new CSSStyleSheet().replaceSync=="function"}catch{}return!1})(),Se=[],Ee=[],st=(e,t)=>i=>{e.push(i),A||(A=!0,t&&y.$flags$&4?le(oe):y.raf(oe))},je=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(i){R(i)}e.length=0},oe=()=>{je(Se),je(Ee),(A=Se.length>0)&&y.raf(oe)},le=e=>ke().then(e),at=st(Ee,!0);return D.bootstrapLazy=Ze,D.h=W,D.promiseResolve=ke,D.registerInstance=et,D.setNonce=Ve,D}Object.defineProperty(re,"__esModule",{value:!0});const Le=we(),yt=(l,x)=>{if(!(typeof window>"u"))return Le.bootstrapLazy([["bilibili-bangumi.cjs",[[1,"bilibili-bangumi",{api:[1],bilibiliUid:[1,"bilibili-uid"],bgmUid:[1,"bgm-uid"],bilibiliEnabled:[4,"bilibili-enabled"],bgmEnabled:[4,"bgm-enabled"],loading:[32],error:[32],pageNumber:[32],pageSize:[32],responseData:[32],activePlatform:[32],activeSubject:[32],collectionLabels:[32],activeCollection:[32]}]]]],x)};re.setNonce=Le.setNonce;var vt=re.defineCustomElements=yt;function xt(){const l=rt();return ct(()=>{const x=l.value.addons["valaxy-addon-bangumi"].options;return x?{...x,bilibiliEnabled:x.bilibiliEnabled??!0,bgmEnabled:x.bgmEnabled??!0}:(console.warn("`valaxy-addon-bangumi` options not found"),{api:""})})}const kt=["api","bgm-enabled","bgm-uid","bilibili-enabled","bilibili-uid"],St=bt({__name:"ValaxyBangumi",setup(l){vt();const x=ut(),j=xt(),{api:_,bgmEnabled:B,bgmUid:A,bilibiliEnabled:h,bilibiliUid:U,customCss:O}=j.value;return dt(()=>{var z,M;if(!O)return;const T=new CSSStyleSheet;T.replaceSync(O),(M=(z=x.value)==null?void 0:z.shadowRoot)==null||M.adoptedStyleSheets.push(T)}),(T,z)=>(Te(),ft("bilibili-bangumi",{ref_key:"bangumiRef",ref:x,api:N(_),"bgm-enabled":N(B),"bgm-uid":N(A),"bilibili-enabled":N(h),"bilibili-uid":N(U)},null,8,kt))}}),wt={__name:"site",setup(l,{expose:x}){const j=JSON.parse('{"title":"追番列表","description":"Bangumi 追番列表","frontmatter":{"title":"追番列表","keywords":"Bangumi","description":"Bangumi 追番列表","icon":"i-ri-movie-line"},"headers":[],"relativePath":"pages/about/site.md","path":"/home/runner/work/Yuumi0221.github.io/Yuumi0221.github.io/pages/about/site.md","lastUpdated":1710400408000}'),_=pt(),B=j.frontmatter||{};return _.meta.frontmatter=Object.assign(_.meta.frontmatter||{},j.frontmatter||{}),Pe("pageData",j),Pe("valaxy:frontmatter",B),globalThis.$frontmatter=B,x({frontmatter:{title:"追番列表",keywords:"Bangumi",description:"Bangumi 追番列表",icon:"i-ri-movie-line"}}),(h,U)=>{const O=St,T=lt;return Te(),ht(T,{frontmatter:N(B)},{"main-content-md":P(()=>[$t(O)]),"main-header":P(()=>[C(h.$slots,"main-header")]),"main-header-after":P(()=>[C(h.$slots,"main-header-after")]),"main-nav":P(()=>[C(h.$slots,"main-nav")]),"main-content":P(()=>[C(h.$slots,"main-content")]),"main-content-after":P(()=>[C(h.$slots,"main-content-after")]),"main-nav-before":P(()=>[C(h.$slots,"main-nav-before")]),"main-nav-after":P(()=>[C(h.$slots,"main-nav-after")]),comment:P(()=>[C(h.$slots,"comment")]),footer:P(()=>[C(h.$slots,"footer")]),aside:P(()=>[C(h.$slots,"aside")]),"aside-custom":P(()=>[C(h.$slots,"aside-custom")]),default:P(()=>[C(h.$slots,"default")]),_:3},8,["frontmatter"])}}};export{wt as default};
