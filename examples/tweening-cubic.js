import{M as n,m as o,j as l,r,J as u,K as m,V as f,b as g,c as p,s as d}from"./_virtual_settings-07d1e368.js";import{C as w}from"./Circle-771d416c.js";import{c as b}from"./createRef-ad1ed90d.js";let a;a??(a=new n("tweening-cubic",!1));a.loadData({version:0,shared:{background:null,range:[0,null],size:{x:1920,y:1080},audioOffset:0},preview:{fps:30,resolutionScale:1},rendering:{fps:60,resolutionScale:2,colorSpace:"srgb",fileType:"image/png",quality:1}});const h=a;let t;t??(t=new n("tweening-cubic",!1));t.loadData({version:0,timeEvents:[],seed:3083903239});const v=t,e=o(function*(s){const i=b();s.add(l(w,{ref:i,x:-300,width:240,height:240,fill:"#e13238"})),yield*r(2,c=>{i().position.x(u(-300,300,m(c)))})});e.name="tweening-cubic";v.attach(e.meta);e.onReplaced??(e.onReplaced=new f(e.config));const x=g({scenes:[e]}),S=p("tweening-cubic",{core:"3.17.0",two:"3.17.0",ui:"3.17.0",vitePlugin:"3.17.0"},[],x,h,d);export{S as default};