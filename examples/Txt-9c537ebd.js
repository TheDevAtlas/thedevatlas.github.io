import{S as w,B as m,H as C,ap as F,aq as _,x as R,y as g,l as S,F as D,Y as z,ar as b,a6 as L,a as O,as as j,t as N}from"./_virtual_settings-07d1e368.js";var x=globalThis&&globalThis.__decorate||function(l,t,e,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,e):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(l,t,e,n);else for(var o=l.length-1;o>=0;o--)(r=l[o])&&(s=(i<3?r(s):i>3?r(t,e,s):r(t,e))||s);return i>3&&s&&Object.defineProperty(t,e,s),s},y;let a=y=class extends w{constructor({children:t,...e}){super(e),t&&this.text(t)}parentTxt(){const t=this.parent();return t instanceof c?t:null}draw(t){this.requestFontUpdate(),this.applyStyle(t),this.applyText(t),t.font=this.styles.font,t.textBaseline="bottom","letterSpacing"in t&&(t.letterSpacing=`${this.letterSpacing()}px`);const e=t.measureText("").fontBoundingBoxAscent,n=this.element.getBoundingClientRect(),{width:i,height:s}=this.size(),r=document.createRange();let o="";const h=new m;for(const p of this.element.childNodes){if(!p.textContent)continue;r.selectNodeContents(p);const d=r.getBoundingClientRect(),B=i/-2+d.left-n.left,T=s/-2+d.top-n.top+e;h.y===T?(h.width+=d.width,o+=p.textContent):(this.drawText(t,o,h),h.x=B,h.y=T,h.width=d.width,h.height=d.height,o=p.textContent)}this.drawText(t,o,h)}drawText(t,e,n){const i=n.y;e=e.replace(/\s+/g," "),this.lineWidth()<=0?t.fillText(e,n.x,i):this.strokeFirst()?(t.strokeText(e,n.x,i),t.fillText(e,n.x,i)):(t.fillText(e,n.x,i),t.strokeText(e,n.x,i))}getCacheBBox(){const t=this.computedSize(),e=document.createRange();e.selectNodeContents(this.element);const n=e.getBoundingClientRect(),i=this.lineWidth(),s=this.lineJoin()==="miter"?.5*10:.5;return new m(-t.width/2,-t.height/2,n.width,n.height).expand([0,this.fontSize()*.5]).expand(i*s)}applyFlex(){super.applyFlex(),this.element.style.display="inline"}updateLayout(){if(this.applyFont(),this.applyFlex(),this.justifyContent.isInitial()&&(this.element.style.justifyContent=this.styles.getPropertyValue("text-align")),this.styles.whiteSpace!=="nowrap"&&this.styles.whiteSpace!=="pre")if(this.element.innerText="",y.segmenter)for(const e of y.segmenter.segment(this.text()))this.element.appendChild(document.createTextNode(e.segment));else for(const e of this.text().split(""))this.element.appendChild(document.createTextNode(e));else if(this.styles.whiteSpace==="pre"){this.element.innerText="";for(const e of this.text().split(`
`))this.element.appendChild(document.createTextNode(e+`
`))}else this.element.innerText=this.text()}};x([C(""),F(_),R()],a.prototype,"text",void 0);x([g()],a.prototype,"parentTxt",null);x([S(()=>{const l=document.createElement("span");return D.shadowRoot.append(l),l})],a,"formatter",void 0);x([S(()=>{try{return new Intl.Segmenter(void 0,{granularity:"grapheme"})}catch{return null}})],a,"segmenter",void 0);a=y=x([z("TxtLeaf")],a);["fill","stroke","lineWidth","strokeFirst","lineCap","lineJoin","lineDash","lineDashOffset"].forEach(l=>{a.prototype[`get${b(l)}`]=function(){var t;return((t=this.parentTxt())==null?void 0:t[l]())??this[l].context.getInitial()}});var u=globalThis&&globalThis.__decorate||function(l,t,e,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,e):n,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(l,t,e,n);else for(var o=l.length-1;o>=0;o--)(r=l[o])&&(s=(i<3?r(s):i>3?r(t,e,s):r(t,e))||s);return i>3&&s&&Object.defineProperty(t,e,s),s},f;let c=f=class extends w{static b(t){return new f({...t,fontWeight:700})}static i(t){return new f({...t,fontStyle:"italic"})}getText(){return this.innerText()}setText(t){const e=this.children();let n=null;for(let i=0;i<e.length;i++){const s=e[i];n===null&&s instanceof a?n=s:s.parent(null)}n===null?(n=new a({text:t}),n.parent(this)):n.text(t),this.setParsedChildren([n])}setChildren(t){this.children.context.raw()!==t&&(typeof t=="string"?this.text(t):super.setChildren(t))}*tweenText(t,e,n,i){const s=this.children();(s.length!==1||!(s[0]instanceof a))&&this.text.save();const r=this.childAs(0),o=r.text.context.raw(),h=this.size.context.raw();r.text(t);const p=this.size();r.text(o??L),this.height()===0&&this.height(p.height),yield*O(this.size(p,e,n),r.text(t,e,n,i)),this.children.context.setter(t),this.size(h)}getLayout(){return!0}constructor({children:t,text:e,...n}){super(n),this.children(e??t)}innerText(){const t=this.childrenAs();let e="";for(const n of t)e+=n.text();return e}parentTxt(){const t=this.parent();return t instanceof f?t:null}parseChildren(t){const e=[],n=Array.isArray(t)?t:[t];for(const i of n)i instanceof f||i instanceof a?e.push(i):typeof i=="string"&&e.push(new a({text:i}));return e}applyFlex(){super.applyFlex(),this.element.style.display=this.findAncestor(j(f))?"inline":"block"}draw(t){this.drawChildren(t)}};u([C(""),R()],c.prototype,"text",void 0);u([N()],c.prototype,"tweenText",null);u([g()],c.prototype,"innerText",null);u([g()],c.prototype,"parentTxt",null);c=f=u([z("Txt")],c);["fill","stroke","lineWidth","strokeFirst","lineCap","lineJoin","lineDash","lineDashOffset"].forEach(l=>{c.prototype[`getDefault${b(l)}`]=function(t){var e;return((e=this.parentTxt())==null?void 0:e[l]())??t}});export{c as T};