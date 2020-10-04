!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n=n||self).amapUpper=e()}(this,(function(){"use strict";"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var n=function(n,e){return n(e={exports:{}},e.exports),e.exports}((function(n,e){n.exports=function(){function n(n){var i=[];return n.AMapUI&&i.push(e(n.AMapUI)),n.Loca&&i.push(o(n.Loca)),Promise.all(i)}function e(n){return new Promise((function(e,o){var a=[];if(n.plugins)for(var l=0;l<n.plugins.length;l+=1)-1==t.AMapUI.plugins.indexOf(n.plugins[l])&&a.push(n.plugins[l]);if(p.AMapUI===i.failed)o("前次请求 AMapUI 失败");else if(p.AMapUI===i.notload){p.AMapUI=i.loading,t.AMapUI.version=n.version||t.AMapUI.version,l=t.AMapUI.version;var r=document.body||document.head,d=document.createElement("script");d.type="text/javascript",d.src="https://webapi.amap.com/ui/"+l+"/main.js",d.onerror=function(n){p.AMapUI=i.failed,o("请求 AMapUI 失败")},d.onload=function(){if(p.AMapUI=i.loaded,a.length)window.AMapUI.loadUI(a,(function(){for(var n=0,o=a.length;n<o;n++){var i=a[n].split("/").slice(-1)[0];window.AMapUI[i]=arguments[n]}for(e();s.AMapUI.length;)s.AMapUI.splice(0,1)[0]()}));else for(e();s.AMapUI.length;)s.AMapUI.splice(0,1)[0]()},r.appendChild(d)}else p.AMapUI===i.loaded?n.version&&n.version!==t.AMapUI.version?o("不允许多个版本 AMapUI 混用"):a.length?window.AMapUI.loadUI(a,(function(){for(var n=0,o=a.length;n<o;n++){var i=a[n].split("/").slice(-1)[0];window.AMapUI[i]=arguments[n]}e()})):e():n.version&&n.version!==t.AMapUI.version?o("不允许多个版本 AMapUI 混用"):s.AMapUI.push((function(n){n?o(n):a.length?window.AMapUI.loadUI(a,(function(){for(var n=0,o=a.length;n<o;n++){var i=a[n].split("/").slice(-1)[0];window.AMapUI[i]=arguments[n]}e()})):e()}))}))}function o(n){return new Promise((function(e,o){if(t.AMap.version.startsWith("2.0"))o("Loca 暂不适配 JSAPI 2.0,请使用 1.4.15");else if(p.Loca===i.failed)o("前次请求 Loca 失败");else if(p.Loca===i.notload){p.Loca=i.loading,t.Loca.version=n.version||t.Loca.version;var a=t.Loca.version,l=t.key,r=document.body||document.head,d=document.createElement("script");d.type="text/javascript",d.src="https://webapi.amap.com/loca?v="+a+"&key="+l,d.onerror=function(n){p.Loca=i.failed,o("请求 AMapUI 失败")},d.onload=function(){for(p.Loca=i.loaded,e();s.Loca.length;)s.Loca.splice(0,1)[0]()},r.appendChild(d)}else p.Loca===i.loaded?n.version&&n.version!==t.Loca.version?o("不允许多个版本 Loca 混用"):e():n.version&&n.version!==t.Loca.version?o("不允许多个版本 Loca 混用"):s.Loca.push((function(n){n?o(n):o()}))}))}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var i,a;(a=i||(i={})).notload="notload",a.loading="loading",a.loaded="loaded",a.failed="failed";var t={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},p={AMap:i.notload,AMapUI:i.notload,Loca:i.notload},s={AMap:[],AMapUI:[],Loca:[]},l=[],r=function(n){"function"==typeof n&&(p.AMap===i.loaded?n(window.AMap):l.push(n))};return{load:function(e){return new Promise((function(o,a){if(p.AMap==i.failed)a("");else if(p.AMap==i.notload){var s=e.key,d=e.version,c=e.plugins;s?(window.AMap&&"lbs.amap.com"!==location.host&&a("禁止多种API加载方式混用"),t.key=s,t.AMap.version=d||t.AMap.version,t.AMap.plugins=c||t.AMap.plugins,p.AMap=i.loading,d=document.body||document.head,window.___onAPILoaded=function(t){if(delete window.___onAPILoaded,t)p.AMap=i.failed,a(t);else for(p.AMap=i.loaded,n(e).then((function(){o(window.AMap)})).catch(a);l.length;)l.splice(0,1)[0]()},(c=document.createElement("script")).type="text/javascript",c.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+t.AMap.version+"&key="+s+"&plugin="+t.AMap.plugins.join(","),c.onerror=function(n){p.AMap=i.failed,a(n)},d.appendChild(c)):a("请填写key")}else if(p.AMap==i.loaded)if(e.key&&e.key!==t.key)a("多个不一致的 key");else if(e.version&&e.version!==t.AMap.version)a("不允许多个版本 JSAPI 混用");else{if(s=[],e.plugins)for(d=0;d<e.plugins.length;d+=1)-1==t.AMap.plugins.indexOf(e.plugins[d])&&s.push(e.plugins[d]);s.length?window.AMap.plugin(s,(function(){n(e).then((function(){o(window.AMap)})).catch(a)})):n(e).then((function(){o(window.AMap)})).catch(a)}else if(e.key&&e.key!==t.key)a("多个不一致的 key");else if(e.version&&e.version!==t.AMap.version)a("不允许多个版本 JSAPI 混用");else{var u=[];if(e.plugins)for(d=0;d<e.plugins.length;d+=1)-1==t.AMap.plugins.indexOf(e.plugins[d])&&u.push(e.plugins[d]);r((function(){u.length?window.AMap.plugin(u,(function(){n(e).then((function(){o(window.AMap)})).catch(a)})):n(e).then((function(){o(window.AMap)})).catch(a)}))}}))},reset:function(){delete window.AMap,delete window.AMapUI,delete window.Loca,t={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},p={AMap:i.notload,AMapUI:i.notload,Loca:i.notload},s={AMap:[],AMapUI:[],Loca:[]}}}}()}));class e{constructor(n){this.map=null,this.initMap(n)}initMap(n){this.map=new AMap.Map(n.target,Object.assign({center:[120.682817,30.513707],zooms:[3,20],zoom:13,expandZoomRange:!0,...n}))}}class o{constructor(e){this.PENDING="pending",this.FULFILLED="fulfilled",this.REJECTED="rejected",this.status=this.PENDING,this.onFulfillInitMaps=[];const o=Object.assign({},{version:"1.4.15",plugins:["AMap.Geocoder","AMap.PolyEditor","AMap.MarkerClusterer","AMap.MouseTool","AMap.Autocomplete","AMap.PlaceSearch"]},e);if(!o.key)throw Error("key has not be fount.");n.load(o).then((n=>{window.AMap=n,this.status=this.FULFILLED,this.onFulfillInitMaps.forEach((n=>n()))}))}initMap(n,o){if(this.status===this.REJECTED)throw Error("jsApi加载出错，请检查！");this.status===this.FULFILLED&&o(new e(n)),this.status===this.PENDING&&this.onFulfillInitMaps.push((()=>{o(new e(n))}))}}let i=null;return{load:function(n){return i||(i=new o(n)),i},initMap:function(n,e){if(!i)throw Error("You must execute load before executing initMap");i.initMap(n,e)}}}));