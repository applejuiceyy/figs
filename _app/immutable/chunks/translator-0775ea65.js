import{_ as g}from"./preload-helper-aa6bc0ce.js";import{w as h,d as O}from"./index-e832455d.js";import{l as L}from"./loading-f7d78dd6.js";let d=[],f="en_us",m=!0,b=!0,v=!1,S=!0,w=!1;var p;{let s=localStorage.getItem("favourites");s!==null&&(d=s===""?[]:s.split(";")),f=(p=localStorage.getItem("locale"))!=null?p:"en_us",m=localStorage.getItem("figs-spe")===null,b=localStorage.getItem("figs-epe")===null,v=localStorage.getItem("figs-re")!==null,S=localStorage.getItem("figs-hasc")!==null,w=localStorage.getItem("figs-s")!==null}let _=h({readerEnabled:v,favourites:d,language:f,signaturePopupEnabled:m,examplePopupEnabled:b,hasAnsweredSkillCheck:S,skilled:w});_.subscribe(s=>{localStorage.setItem("favourites",s.favourites.join(";")),localStorage.setItem("locale",s.language),s.examplePopupEnabled?localStorage.removeItem("figs-epe"):localStorage.setItem("figs-epe",""),s.signaturePopupEnabled?localStorage.removeItem("figs-spe"):localStorage.setItem("figs-spe",""),s.readerEnabled?localStorage.setItem("figs-re",""):localStorage.removeItem("figs-re"),s.hasAnsweredSkillCheck?localStorage.setItem("figs-hasc",""):localStorage.removeItem("figs-hasc"),s.skilled?localStorage.setItem("figs-s",""):localStorage.removeItem("figs-s")});const T="Favourites",I="Content",P="Search",j="Preferences",c={favourites:T,"hide-table":"Hide Table","show-table":"Show Table","disable-focus":"Disable Focus","enable-focus":"Enable Focus",content:I,"global-objects":"Global Objects","misc-types":"Miscellaneous Types","misc-enums":"Miscellaneous Enums",search:P,"pick-a-version":"Pick a version","version-not-selected":"Version not selected","made-by-applejuice":"Made by applejuice","show-everything":"Show everything","show-not-everything":"Show not everything",preferences:j,"jump-to-top":"Jump to top","enable-popup-in-examples":"Show popups in examples","enable-popup-in-signature":"Show popups in signatures","disable-popup-in-examples":"Hide popups in examples","disable-popup-in-signature":"Hide popups in signatures","experienced-user-skill":"Experienced person","new-user-skill":"New person","experienced-user-skill-switch":"I'm an experienced person","new-user-skill-switch":"I'm a new person","preferences-indicator":"You can change your option at anytime in preferences!","skill-level-prompt":"Select your skill level","submit-skill-check":"Submit my skill"},x=Object.freeze(Object.defineProperty({__proto__:null,favourites:T,content:I,search:P,preferences:j,default:c},Symbol.toStringTag,{value:"Module"}));let A=Object.assign({"./figs/en_us.json":()=>g(()=>Promise.resolve().then(()=>x),void 0,import.meta.url).then(s=>s.default),"./figs/pt_pt.json":()=>g(()=>import("./pt_pt-9a7b5972.js"),[],import.meta.url).then(s=>s.default)}),o={en_us:c},V=Object.entries(A);V.forEach(s=>{let e=s[0].split("/"),t=e[e.length-1].split(".")[0];t in o||(o[t]=s[1])});function k(s){return s.replaceAll("u","uwu").replaceAll("d","w").replaceAll("b","w").replaceAll("g","w").replaceAll("t","w")+(Math.random()>.8?" >w<":" :3")}let E={};Object.entries(c).forEach(s=>{E[s[0]]=k(s[1])});o.en_uwu=()=>new Promise(s=>s(E));function n(s,e){return`${s}-${e}`}class F{constructor(e){this.cachedTranslations={},this.providers={},this.stores={},this.languageStore=e,this.currentLanguage="",this.activeTransfers=[],this.loadCancel=()=>{},this.languageStore.subscribe(async t=>{t!==this.currentLanguage&&(this.currentLanguage=t,this.reloadQueue(),this.updateStores())})}reloadQueue(){if(this.currentLanguage!=="en_us"){let e=Object.entries(this.providers);for(let t=0;t<e.length;t++){let r=e[t],l=n(r[0],this.currentLanguage);this.currentLanguage in r[1]&&!(l in this.cachedTranslations||this.activeTransfers.includes(l))&&this.transfer(r[0])}}}async transfer(e){let t=this.currentLanguage,r=n(e,t),l=L.request(`Fetching language with a cache id of "${r}"`);this.activeTransfers.push(r);let i,a=this.providers[e][t];if(typeof a=="function")try{i=await a()}catch(u){console.error(u),this.activeTransfers.splice(this.activeTransfers.findIndex(y=>y==r),1),l();return}else i=a;this.cachedTranslations[r]=i,this.activeTransfers.splice(this.activeTransfers.findIndex(u=>u==r),1),t===this.currentLanguage&&this.updateStores(),l()}updateStores(){let e=Object.entries(this.stores);for(let t=0;t<e.length;t++)e[t][1].set(this.getStoreValue(e[t][0]))}getStoreValue(e){let t=Object.entries(this.providers);for(let r=0;r<t.length;r++){let l=t[r],i=n(l[0],this.currentLanguage);if(i in this.cachedTranslations&&e in this.cachedTranslations[i])return{type:"RESULT",result:this.cachedTranslations[i][e]};if(i=n(l[0],"en_us"),i in this.cachedTranslations&&e in this.cachedTranslations[i])return{type:"FALLBACK",result:this.cachedTranslations[i][e]}}return this.activeTransfers.length>0?{type:"PROCESSING"}:{type:"NOTFOUND"}}getPresentableValue(e){let t=this.getStoreValue(e);return this.getPresentableValueFromResult(t,e)}getPresentableValueFromResult(e,t){return e.type==="RESULT"?e.result:t}addProvider(e,t){this.providers[t]=e;let r=n(t,"en_us");return this.cachedTranslations[r]=e.en_us,this.reloadQueue(),()=>this.removeProvider(t)}removeProvider(e){delete this.providers[e],this.reloadQueue()}createStore(e){if(e in this.stores)return this.stores[e];let t=h(this.getStoreValue(e),r=>(e in this.stores||(this.stores[e]=t,r(this.getStoreValue(e))),()=>{delete this.stores[e]}));return this.stores[e]=t,t}getProviderStatistics(){let e={providers:Object.keys(this.providers),languages:{}},t=Object.entries(this.providers);for(let r=0;r<t.length;r++){let l=t[r],i=Object.keys(l[1]);for(let a=0;a<i.length;a++)i[a]in e.languages||(e.languages[i[a]]=[]),e.languages[i[a]].push(l[0])}return e}}let C=new F(O(_,s=>s.language));C.addProvider(o,"figs");export{C as p,_ as w};
