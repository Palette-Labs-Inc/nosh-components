"use strict";(self.webpackChunkOrderingComponents=self.webpackChunkOrderingComponents||[]).push([[96],{3694:(r,e,s)=>{function a(r,e){return Object.keys(e).reduce((function(s,a){a.startsWith(r)&&(s[a.substr(r.length)]=e[a]);return s}),{})}s.r(e),s.d(e,{queryString:()=>n});var t=s(7475),i=s(5469);function n(r,e){var s=document.createElement("a");s.href=e;var n=s.search.slice(1).split("&").reduce((function(r,e){var s=e.split("="),a=s[0],i=s[1];return r[a]=(0,t.a)(i),r}),{}),u=[],d=n.ajs_uid,o=n.ajs_event,_=n.ajs_aid,c=(0,i.PO)(r.options.useQueryString)?r.options.useQueryString:{},j=c.aid,v=void 0===j?/.+/:j,p=c.uid,f=void 0===p?/.+/:p;if(_){var y=Array.isArray(n.ajs_aid)?n.ajs_aid[0]:n.ajs_aid;v.test(y)&&r.setAnonymousId(y)}if(d){var h=Array.isArray(n.ajs_uid)?n.ajs_uid[0]:n.ajs_uid;if(f.test(h)){var l=a("ajs_trait_",n);u.push(r.identify(h,l))}}if(o){var A=Array.isArray(n.ajs_event)?n.ajs_event[0]:n.ajs_event,g=a("ajs_prop_",n);u.push(r.track(A,g))}return Promise.all(u)}}}]);