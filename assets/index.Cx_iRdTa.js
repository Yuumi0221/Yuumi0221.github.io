function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index.BWYNL_IO.js","assets/framework.fQEHOQx-.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as S}from"./ValaxyMain.vue_vue_type_style_index_0_lang.OSkq60jt.js";import{q as B,M as C,aS as $,bO as R,aC as w,u as k,aK as y,bi as o,s as z,bH as t,aW as n,I as L,aM as O}from"./framework.fQEHOQx-.js";import{m as V,G as M}from"./app.jSc7Klsr.js";import"./chunks/dayjs.DPscOGnl.js";import{f as P,a as j,u as D}from"./chunks/vue-router.BgKUp-Ei.js";import"./YunComment.vue_vue_type_style_index_0_lang.CnidgTQh.js";import"./index.C5okkQwF.js";import"./chunks/vue-i18n.D8pS2a8k.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.DDbjQmcU.js";import"./post.B_zWbE6Z.js";import"./chunks/pinia.C457bP9k.js";import"./chunks/@vueuse/motion.BfSugiA6.js";import"./chunks/nprogress.DgNGesC2.js";function I(){const i=V();return B(()=>{const e=i.value.addons["valaxy-addon-bangumi"].options;return e?{...e,bilibiliEnabled:e.bilibiliEnabled??!0,bgmEnabled:e.bgmEnabled??!0,pageSize:e.pageSize??15,customEnabled:e.customEnabled??!1,customLabel:e.customLabel??"自定义"}:(console.warn("`valaxy-addon-bangumi` options not found"),{api:""})})}const U=["api","bgm-enabled","bgm-uid","bilibili-enabled","bilibili-uid","custom-enabled","custom-label","page-size"],A=C({__name:"ValaxyBangumi",setup(i){const e=$(),r=$(!1),c=I(),{api:u,bgmEnabled:s,bgmUid:g,bilibiliEnabled:d,bilibiliUid:a,customCss:b,customEnabled:f,customLabel:p,pageSize:E}=c.value;function v(){var l,_,h;if(!b||r.value)return;const m=new CSSStyleSheet;m.replaceSync(b),(_=(l=e.value)==null?void 0:l.shadowRoot)==null||_.adoptedStyleSheets.push(m),(h=e.value)!=null&&h.shadowRoot&&(r.value=!0)}return(async()=>{if(!M)return;const{defineCustomElements:m}=await R(()=>import("./index.BWYNL_IO.js").then(l=>l.i),__vite__mapDeps([0,1]));m(),v()})(),w(()=>v()),(m,l)=>(y(),k("bilibili-bangumi",{ref_key:"bangumiRef",ref:e,api:o(u),"bgm-enabled":o(s),"bgm-uid":o(g),"bilibili-enabled":o(d),"bilibili-uid":o(a),"custom-enabled":o(f),"custom-label":o(p),"page-size":o(E)},null,8,U))}}),N=P("/anime",async i=>JSON.parse('{"title":"追番列表","description":"Bangumi 追番列表","frontmatter":{"title":"追番列表","keywords":"Bangumi","description":"Bangumi 追番列表","icon":"i-ri-movie-line"},"headers":[],"relativePath":"pages/anime/index.md","lastUpdated":1742024271000}'),{lazy:(i,e)=>i.name===e.name}),ee={__name:"index",setup(i,{expose:e}){var d;const{data:r}=N(),c=D(),u=j(),s=Object.assign(u.meta.frontmatter||{},((d=r.value)==null?void 0:d.frontmatter)||{});return u.meta.frontmatter=s,c.currentRoute.value.data=r.value,O("valaxy:frontmatter",s),globalThis.$frontmatter=s,e({frontmatter:{title:"追番列表",keywords:"Bangumi",description:"Bangumi 追番列表",icon:"i-ri-movie-line"}}),(a,b)=>{const f=A,p=S;return y(),z(p,{frontmatter:o(s)},{"main-content-md":t(()=>[L(f)]),"main-header":t(()=>[n(a.$slots,"main-header")]),"main-header-after":t(()=>[n(a.$slots,"main-header-after")]),"main-nav":t(()=>[n(a.$slots,"main-nav")]),"main-content-before":t(()=>[n(a.$slots,"main-content-before")]),"main-content":t(()=>[n(a.$slots,"main-content")]),"main-content-after":t(()=>[n(a.$slots,"main-content-after")]),"main-nav-before":t(()=>[n(a.$slots,"main-nav-before")]),"main-nav-after":t(()=>[n(a.$slots,"main-nav-after")]),comment:t(()=>[n(a.$slots,"comment")]),footer:t(()=>[n(a.$slots,"footer")]),aside:t(()=>[n(a.$slots,"aside")]),"aside-custom":t(()=>[n(a.$slots,"aside-custom")]),default:t(()=>[n(a.$slots,"default")]),_:3},8,["frontmatter"])}}};export{ee as default,N as usePageData};
