"use strict";(self.webpackChunkOrderingComponents=self.webpackChunkOrderingComponents||[]).push([[214],{4783:(e,r,n)=>{n.r(r),n.d(r,{remoteMiddlewares:()=>c});var t=n(655),a=n(9699),i=n(6548),s=n(9382);function c(e,r,n){var c;return(0,t.mG)(this,void 0,void 0,(function(){var o,l,u,d,f=this;return(0,t.Jh)(this,(function(m){switch(m.label){case 0:return(0,a.s)()?[2,[]]:(o=(0,s.Kg)(),l=null!==(c=r.enabledMiddleware)&&void 0!==c?c:{},u=Object.entries(l).filter((function(e){e[0];return e[1]})).map((function(e){return e[0]})),d=u.map((function(r){return(0,t.mG)(f,void 0,void 0,(function(){var a,s,c,l;return(0,t.Jh)(this,(function(t){switch(t.label){case 0:a=r.replace("@segment/",""),s=a,n&&(s=btoa(a).replace(/=/g,"")),c="".concat(o,"/middleware/").concat(s,"/latest/").concat(s,".js.gz"),t.label=1;case 1:return t.trys.push([1,3,,4]),[4,(0,i.v)(c)];case 2:return t.sent(),[2,window["".concat(a,"Middleware")]];case 3:return l=t.sent(),e.log("error",l),e.stats.increment("failed_remote_middleware"),[3,4];case 4:return[2]}}))}))})),[4,Promise.all(d)]);case 1:return[2,m.sent().filter(Boolean)]}}))}))}}}]);