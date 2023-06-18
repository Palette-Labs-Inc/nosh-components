"use strict";(self.webpackChunkOrderingComponents=self.webpackChunkOrderingComponents||[]).push([[464],{8598:(n,t,i)=>{function e(n,t){var i,e;return"boolean"==typeof(null==t?void 0:t.enabled)?t.enabled:null===(e=null===(i=null==n?void 0:n.__default)||void 0===i?void 0:i.enabled)||void 0===e||e}i.d(t,{n:()=>e})},8009:(n,t,i)=>{i.r(t),i.d(t,{LegacyDestination:()=>S,ajsDestinations:()=>I});var e=i(655),r=i(9969),o=i(5904),s=i(9784),a=i(466),u=i(9699),c=i(9147),l=i(8598),d=i(913),h=i(6749),v=i(360),f=i(5976),p=i(6170),g=i(9382),m=i(6548);function y(n){return n.toLowerCase().replace(".","").replace(/\s+/g,"-")}function w(n,t){return void 0===t&&(t=!1),t?btoa(n).replace(/=/g,""):void 0}function b(n,t,i,r){return(0,e.mG)(this,void 0,void 0,(function(){var o,s,a,u,c,l;return(0,e.Jh)(this,(function(d){switch(d.label){case 0:o=y(t),s=w(o,r),a=(0,g.Kg)(),u="".concat(a,"/integrations/").concat(null!=s?s:o,"/").concat(i,"/").concat(null!=s?s:o,".dynamic.js.gz"),d.label=1;case 1:return d.trys.push([1,3,,4]),[4,(0,m.v)(u)];case 2:return d.sent(),function(n,t,i){var r,o;try{var s=(null!==(o=null===(r=null===window||void 0===window?void 0:window.performance)||void 0===r?void 0:r.getEntriesByName(n,"resource"))&&void 0!==o?o:[])[0];s&&t.stats.gauge("legacy_destination_time",Math.round(s.duration),(0,e.ev)([i],s.duration<100?["cached"]:[],!0))}catch(n){}}(u,n,t),[3,4];case 3:throw c=d.sent(),n.stats.gauge("legacy_destination_time",-1,["plugin:".concat(t),"failed"]),c;case 4:return l=window["".concat(o,"Deps")],[4,Promise.all(l.map((function(n){return(0,m.v)(a+n+".gz")})))];case 5:return d.sent(),window["".concat(o,"Loader")](),[2,window["".concat(o,"Integration")]]}}))}))}var _=i(5469),k=function(n,t){var i,e=t.type,r=t.bundlingStatus,o=t.versionSettings,s="unbundled"!==r&&("browser"===e||(null===(i=null==o?void 0:o.componentTypes)||void 0===i?void 0:i.includes("browser")));return!n.startsWith("Segment")&&"Iterable"!==n&&s},z=function(n,t){var i=!1===t.All&&void 0===t[n];return!1===t[n]||i};function G(n,t){return(0,e.mG)(this,void 0,void 0,(function(){var i,r=this;return(0,e.Jh)(this,(function(a){switch(a.label){case 0:return i=[],(0,o.s)()?[2,t]:[4,(0,h.x)((function(){return t.length>0&&(0,o.G)()}),(function(){return(0,e.mG)(r,void 0,void 0,(function(){var r,o;return(0,e.Jh)(this,(function(e){switch(e.label){case 0:return(r=t.pop())?[4,(0,c.a)(r,n)]:[2];case 1:return o=e.sent(),o instanceof s._||i.push(r),[2]}}))}))}))];case 1:return a.sent(),i.map((function(n){return t.pushWithBackoff(n)})),[2,t]}}))}))}var S=function(){function n(n,t,i,r,o){void 0===i&&(i={}),this.options={},this.type="destination",this.middleware=[],this._ready=!1,this._initialized=!1,this.flushing=!1,this.name=n,this.version=t,this.settings=(0,e.pi)({},i),this.disableAutoISOConversion=r.disableAutoISOConversion||!1,this.integrationSource=o,this.settings.type&&"browser"===this.settings.type&&delete this.settings.type,this.options=r,this.buffer=r.disableClientPersistence?new v.Z(4,[]):new f.$(4,"dest-".concat(n)),this.scheduleFlush()}return n.prototype.isLoaded=function(){return this._ready},n.prototype.ready=function(){var n;return null!==(n=this.onReady)&&void 0!==n?n:Promise.resolve()},n.prototype.load=function(n,t){var i;return(0,e.mG)(this,void 0,void 0,(function(){var r,o,s=this;return(0,e.Jh)(this,(function(e){switch(e.label){case 0:return this._ready||void 0!==this.onReady?[2]:null===(i=this.integrationSource)||void 0===i?[3,1]:(o=i,[3,3]);case 1:return[4,b(n,this.name,this.version,this.options.obfuscate)];case 2:o=e.sent(),e.label=3;case 3:r=o,this.integration=function(n,t,i){var e;"Integration"in n?(n({user:function(){return i.user()},addIntegration:function(){}}),e=n.Integration):e=n;var r=new e(t);return r.analytics=i,r}(r,this.settings,t),this.onReady=new Promise((function(n){s.integration.once("ready",(function(){s._ready=!0,n(!0)}))})),this.onInitialize=new Promise((function(n){s.integration.on("initialize",(function(){s._initialized=!0,n(!0)}))}));try{n.stats.increment("analytics_js.integration.invoke",1,["method:initialize","integration_name:".concat(this.name)]),this.integration.initialize()}catch(t){throw n.stats.increment("analytics_js.integration.invoke.error",1,["method:initialize","integration_name:".concat(this.name)]),t}return[2]}}))}))},n.prototype.unload=function(n,t){return function(n,t,i){return(0,e.mG)(this,void 0,void 0,(function(){var r,o,s,a;return(0,e.Jh)(this,(function(e){return r=(0,g.Kg)(),o=y(n),s=w(n,i),a="".concat(r,"/integrations/").concat(null!=s?s:o,"/").concat(t,"/").concat(null!=s?s:o,".dynamic.js.gz"),[2,(0,m.t)(a)]}))}))}(this.name,this.version,this.options.obfuscate)},n.prototype.addMiddleware=function(){for(var n,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];this.middleware=(n=this.middleware).concat.apply(n,t)},n.prototype.shouldBuffer=function(n){return"page"!==n.event.type&&((0,o.s)()||!1===this._ready||!1===this._initialized)},n.prototype.send=function(n,t,i){var r,o;return(0,e.mG)(this,void 0,void 0,(function(){var s,u,c,d,h,v;return(0,e.Jh)(this,(function(f){switch(f.label){case 0:if(this.shouldBuffer(n))return this.buffer.push(n),this.scheduleFlush(),[2,n];if(s=null===(o=null===(r=this.options)||void 0===r?void 0:r.plan)||void 0===o?void 0:o.track,u=n.event.event,s&&u&&"Segment.io"!==this.name){if(c=s[u],!(0,l.n)(s,c))return n.updateEvent("integrations",(0,e.pi)((0,e.pi)({},n.event.integrations),{All:!1,"Segment.io":!0})),n.cancel(new a.Y({retry:!1,reason:"Event ".concat(u," disabled for integration ").concat(this.name," in tracking plan"),type:"Dropped by plan"})),[2,n];if(n.updateEvent("integrations",(0,e.pi)((0,e.pi)({},n.event.integrations),null==c?void 0:c.integrations)),(null==c?void 0:c.enabled)&&!1===(null==c?void 0:c.integrations[this.name]))return n.cancel(new a.Y({retry:!1,reason:"Event ".concat(u," disabled for integration ").concat(this.name," in tracking plan"),type:"Dropped by plan"})),[2,n]}return[4,(0,p.applyDestinationMiddleware)(this.name,n.event,this.middleware)];case 1:if(null===(d=f.sent()))return[2,n];h=new t(d,{traverse:!this.disableAutoISOConversion}),n.stats.increment("analytics_js.integration.invoke",1,["method:".concat(i),"integration_name:".concat(this.name)]),f.label=2;case 2:return f.trys.push([2,5,,6]),this.integration?[4,this.integration.invoke.call(this.integration,i,h)]:[3,4];case 3:f.sent(),f.label=4;case 4:return[3,6];case 5:throw v=f.sent(),n.stats.increment("analytics_js.integration.invoke.error",1,["method:".concat(i),"integration_name:".concat(this.name)]),v;case 6:return[2,n]}}))}))},n.prototype.track=function(n){return(0,e.mG)(this,void 0,void 0,(function(){return(0,e.Jh)(this,(function(t){return[2,this.send(n,r.Track,"track")]}))}))},n.prototype.page=function(n){var t;return(0,e.mG)(this,void 0,void 0,(function(){var i=this;return(0,e.Jh)(this,(function(e){return(null===(t=this.integration)||void 0===t?void 0:t._assumesPageview)&&!this._initialized&&this.integration.initialize(),[2,this.onInitialize.then((function(){return i.send(n,r.Page,"page")}))]}))}))},n.prototype.identify=function(n){return(0,e.mG)(this,void 0,void 0,(function(){return(0,e.Jh)(this,(function(t){return[2,this.send(n,r.Identify,"identify")]}))}))},n.prototype.alias=function(n){return(0,e.mG)(this,void 0,void 0,(function(){return(0,e.Jh)(this,(function(t){return[2,this.send(n,r.Alias,"alias")]}))}))},n.prototype.group=function(n){return(0,e.mG)(this,void 0,void 0,(function(){return(0,e.Jh)(this,(function(t){return[2,this.send(n,r.Group,"group")]}))}))},n.prototype.scheduleFlush=function(){var n=this;this.flushing||setTimeout((function(){return(0,e.mG)(n,void 0,void 0,(function(){var n;return(0,e.Jh)(this,(function(t){switch(t.label){case 0:return this.flushing=!0,n=this,[4,G(this,this.buffer)];case 1:return n.buffer=t.sent(),this.flushing=!1,this.buffer.todo>0&&this.scheduleFlush(),[2]}}))}))}),5e3*Math.random())},n}();function I(n,t,i,r,o){var s,a;if(void 0===t&&(t={}),void 0===i&&(i={}),(0,u.s)())return[];n.plan&&((i=null!=i?i:{}).plan=n.plan);var c=null!==(a=null===(s=n.middlewareSettings)||void 0===s?void 0:s.routingRules)&&void 0!==a?a:[],l=n.integrations,h=i.integrations,v=(0,d.o)(n,null!=i?i:{}),f=null==o?void 0:o.reduce((function(n,t){var i;return(0,e.pi)((0,e.pi)({},n),((i={})[function(n){return("Integration"in n?n.Integration:n).prototype.name}(t)]=t,i))}),{}),p=new Set((0,e.ev)((0,e.ev)([],Object.keys(l).filter((function(n){return k(n,l[n])})),!0),Object.keys(f||{}).filter((function(n){return(0,_.PO)(l[n])||(0,_.PO)(null==h?void 0:h[n])})),!0));return Array.from(p).filter((function(n){return!z(n,t)})).map((function(n){var t=function(n){var t,i,e,r;return null!==(r=null!==(i=null===(t=null==n?void 0:n.versionSettings)||void 0===t?void 0:t.override)&&void 0!==i?i:null===(e=null==n?void 0:n.versionSettings)||void 0===e?void 0:e.version)&&void 0!==r?r:"latest"}(l[n]),e=new S(n,t,v[n],i,null==f?void 0:f[n]);return c.filter((function(t){return t.destinationName===n})).length>0&&r&&e.addMiddleware(r),e}))}}}]);