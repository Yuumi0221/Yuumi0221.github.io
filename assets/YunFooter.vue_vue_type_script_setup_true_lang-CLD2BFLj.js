import{d as b,z as x,at as C,D as w,G as T,j as f,au as i,o as s,e as r,f as e,g as o,t as a,x as l,h as n,F as V,y as d,av as F,r as $}from"./app-9yiUtmRP.js";const z={class:"va-footer p-4 text-$va-c-text-light",text:"center sm"},B={key:0,class:"beian",m:"y-2"},D={href:"https://beian.miit.gov.cn/",target:"_blank",rel:"noopener"},H={class:"copyright flex justify-center items-center gap-2",p:"1"},N=["href","title"],S={key:1,class:"powered",m:"2"},Y=["innerHTML"],j=["href","title"],E=b({__name:"YunFooter",setup(I){const{t:u}=x(),h=C(),v=w(),t=T(),p=new Date().getFullYear(),g=f(()=>p===t.value.footer.since),y=f(()=>u("footer.powered",[`<a href="${i.repository.url}" target="_blank" rel="noopener">Valaxy</a> v${i.version}`])),c=f(()=>t.value.footer.icon||{url:i.repository.url,name:"i-ri-cloud-line",title:i.name});return(k,L)=>{var m,_;return s(),r("footer",z,[(m=e(t).footer.beian)!=null&&m.enable&&e(t).footer.beian.icp?(s(),r("div",B,[o("a",D,a(e(t).footer.beian.icp),1)])):l("v-if",!0),o("div",H,[o("span",null,[n(" © "),g.value?l("v-if",!0):(s(),r(V,{key:0},[n(a(e(t).footer.since)+" - ",1)],64)),n(" "+a(e(p)),1)]),(_=e(t).footer.icon)!=null&&_.enable?(s(),r("a",{key:0,class:d(["inline-flex",e(t).footer.icon.animated?"animate-pulse":""]),href:c.value.url,target:"_blank",title:c.value.title},[o("div",{class:d(c.value.name)},null,2)],10,N)):l("v-if",!0),o("span",null,a(e(v).author.name),1)]),e(t).footer.powered?(s(),r("div",S,[o("span",{innerHTML:y.value},null,8,Y),n(" | "),o("span",null,[n(a(e(u)("footer.theme"))+" - ",1),o("a",{href:e(t).pkg.repository.url,title:e(t).pkg.name,target:"_blank"},a(F(e(h).theme)),9,j),n(" v"+a(e(t).pkg.version),1)])])):l("v-if",!0),$(k.$slots,"default")])}}});export{E as _};