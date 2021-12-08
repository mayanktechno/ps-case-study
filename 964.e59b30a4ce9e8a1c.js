"use strict";(self.webpackChunkassesment1=self.webpackChunkassesment1||[]).push([[964],{3964:(ve,L,m)=>{m.r(L),m.d(L,{UserListModule:()=>ye});var E=m(6019),o=m(3556),q=m(2997),$=m(8305),W=m(4799),V=m(461),k=m(4753);class J{}class A{}class y{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?this.lazyInit="string"==typeof t?()=>{this.headers=new Map,t.split("\n").forEach(e=>{const r=e.indexOf(":");if(r>0){const n=e.slice(0,r),i=n.toLowerCase(),c=e.slice(r+1).trim();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(c):this.headers.set(i,[c])}})}:()=>{this.headers=new Map,Object.keys(t).forEach(e=>{let r=t[e];const n=e.toLowerCase();"string"==typeof r&&(r=[r]),r.length>0&&(this.headers.set(n,r),this.maybeSetNormalizedName(e,n))})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();const e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof y?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){const e=new y;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof y?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){const e=t.name.toLowerCase();switch(t.op){case"a":case"s":let r=t.value;if("string"==typeof r&&(r=[r]),0===r.length)return;this.maybeSetNormalizedName(t.name,e);const n=("a"===t.op?this.headers.get(e):void 0)||[];n.push(...r),this.headers.set(e,n);break;case"d":const i=t.value;if(i){let c=this.headers.get(e);if(!c)return;c=c.filter(h=>-1===i.indexOf(h)),0===c.length?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,c)}else this.headers.delete(e),this.normalizedNames.delete(e)}}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}}class Y{encodeKey(t){return I(t)}encodeValue(t){return I(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}}const ee=/%(\d[a-f0-9])/gi,te={40:"@","3A":":",24:"$","2C":",","3B":";","2B":"+","3D":"=","3F":"?","2F":"/"};function I(s){return encodeURIComponent(s).replace(ee,(t,e)=>{var r;return null!=(r=te[e])?r:t})}function U(s){return`${s}`}class g{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new Y,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function(s,t){const e=new Map;return s.length>0&&s.replace(/^\?/,"").split("&").forEach(n=>{const i=n.indexOf("="),[c,h]=-1==i?[t.decodeKey(n),""]:[t.decodeKey(n.slice(0,i)),t.decodeValue(n.slice(i+1))],a=e.get(c)||[];a.push(h),e.set(c,a)}),e}(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{const r=t.fromObject[e];this.map.set(e,Array.isArray(r)?r:[r])})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();const e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){const e=[];return Object.keys(t).forEach(r=>{const n=t[r];Array.isArray(n)?n.forEach(i=>{e.push({param:r,value:i,op:"a"})}):e.push({param:r,value:n,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{const e=this.encoder.encodeKey(t);return this.map.get(t).map(r=>e+"="+this.encoder.encodeValue(r)).join("&")}).filter(t=>""!==t).join("&")}clone(t){const e=new g({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":const e=("a"===t.op?this.map.get(t.param):void 0)||[];e.push(U(t.value)),this.map.set(t.param,e);break;case"d":if(void 0===t.value){this.map.delete(t.param);break}{let r=this.map.get(t.param)||[];const n=r.indexOf(U(t.value));-1!==n&&r.splice(n,1),r.length>0?this.map.set(t.param,r):this.map.delete(t.param)}}}),this.cloneFrom=this.updates=null)}}class se{constructor(){this.map=new Map}set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}keys(){return this.map.keys()}}function F(s){return"undefined"!=typeof ArrayBuffer&&s instanceof ArrayBuffer}function _(s){return"undefined"!=typeof Blob&&s instanceof Blob}function j(s){return"undefined"!=typeof FormData&&s instanceof FormData}class T{constructor(t,e,r,n){let i;if(this.url=e,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function(s){switch(s){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||n?(this.body=void 0!==r?r:null,i=n):i=r,i&&(this.reportProgress=!!i.reportProgress,this.withCredentials=!!i.withCredentials,i.responseType&&(this.responseType=i.responseType),i.headers&&(this.headers=i.headers),i.context&&(this.context=i.context),i.params&&(this.params=i.params)),this.headers||(this.headers=new y),this.context||(this.context=new se),this.params){const c=this.params.toString();if(0===c.length)this.urlWithParams=e;else{const h=e.indexOf("?");this.urlWithParams=e+(-1===h?"?":h<e.length-1?"&":"")+c}}else this.params=new g,this.urlWithParams=e}serializeBody(){return null===this.body?null:F(this.body)||_(this.body)||j(this.body)||"undefined"!=typeof URLSearchParams&&this.body instanceof URLSearchParams||"string"==typeof this.body?this.body:this.body instanceof g?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||j(this.body)?null:_(this.body)?this.body.type||null:F(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof g?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(t={}){var v;const e=t.method||this.method,r=t.url||this.url,n=t.responseType||this.responseType,i=void 0!==t.body?t.body:this.body,c=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,h=void 0!==t.reportProgress?t.reportProgress:this.reportProgress;let a=t.headers||this.headers,p=t.params||this.params;const w=null!=(v=t.context)?v:this.context;return void 0!==t.setHeaders&&(a=Object.keys(t.setHeaders).reduce((b,l)=>b.set(l,t.setHeaders[l]),a)),t.setParams&&(p=Object.keys(t.setParams).reduce((b,l)=>b.set(l,t.setParams[l]),p)),new T(e,r,i,{params:p,headers:a,context:w,reportProgress:h,responseType:n,withCredentials:c})}}var u=(()=>((u=u||{})[u.Sent=0]="Sent",u[u.UploadProgress=1]="UploadProgress",u[u.ResponseHeader=2]="ResponseHeader",u[u.DownloadProgress=3]="DownloadProgress",u[u.Response=4]="Response",u[u.User=5]="User",u))();class x{constructor(t,e=200,r="OK"){this.headers=t.headers||new y,this.status=void 0!==t.status?t.status:e,this.statusText=t.statusText||r,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}}class S extends x{constructor(t={}){super(t),this.type=u.ResponseHeader}clone(t={}){return new S({headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class O extends x{constructor(t={}){super(t),this.type=u.Response,this.body=void 0!==t.body?t.body:null}clone(t={}){return new O({body:void 0!==t.body?t.body:this.body,headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class z extends x{constructor(t){super(t,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${t.url||"(unknown url)"}`:`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}}function P(s,t){return{body:t,headers:s.headers,context:s.context,observe:s.observe,params:s.params,reportProgress:s.reportProgress,responseType:s.responseType,withCredentials:s.withCredentials}}let B=(()=>{class s{constructor(e){this.handler=e}request(e,r,n={}){let i;if(e instanceof T)i=e;else{let a,p;a=n.headers instanceof y?n.headers:new y(n.headers),n.params&&(p=n.params instanceof g?n.params:new g({fromObject:n.params})),i=new T(e,r,void 0!==n.body?n.body:null,{headers:a,context:n.context,params:p,reportProgress:n.reportProgress,responseType:n.responseType||"json",withCredentials:n.withCredentials})}const c=(0,q.of)(i).pipe((0,W.b)(a=>this.handler.handle(a)));if(e instanceof T||"events"===n.observe)return c;const h=c.pipe((0,V.h)(a=>a instanceof O));switch(n.observe||"body"){case"body":switch(i.responseType){case"arraybuffer":return h.pipe((0,k.U)(a=>{if(null!==a.body&&!(a.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return a.body}));case"blob":return h.pipe((0,k.U)(a=>{if(null!==a.body&&!(a.body instanceof Blob))throw new Error("Response is not a Blob.");return a.body}));case"text":return h.pipe((0,k.U)(a=>{if(null!==a.body&&"string"!=typeof a.body)throw new Error("Response is not a string.");return a.body}));default:return h.pipe((0,k.U)(a=>a.body))}case"response":return h;default:throw new Error(`Unreachable: unhandled observe type ${n.observe}}`)}}delete(e,r={}){return this.request("DELETE",e,r)}get(e,r={}){return this.request("GET",e,r)}head(e,r={}){return this.request("HEAD",e,r)}jsonp(e,r){return this.request("JSONP",e,{params:(new g).append(r,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,r={}){return this.request("OPTIONS",e,r)}patch(e,r,n={}){return this.request("PATCH",e,P(n,r))}post(e,r,n={}){return this.request("POST",e,P(n,r))}put(e,r,n={}){return this.request("PUT",e,P(n,r))}}return s.\u0275fac=function(e){return new(e||s)(o.LFG(J))},s.\u0275prov=o.Yz7({token:s,factory:s.\u0275fac}),s})();class X{constructor(t,e){this.next=t,this.interceptor=e}handle(t){return this.interceptor.intercept(t,this.next)}}const Z=new o.OlP("HTTP_INTERCEPTORS");let oe=(()=>{class s{intercept(e,r){return r.handle(e)}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275prov=o.Yz7({token:s,factory:s.\u0275fac}),s})();const ie=/^\)\]\}',?\n/;let K=(()=>{class s{constructor(e){this.xhrFactory=e}handle(e){if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new $.y(r=>{const n=this.xhrFactory.build();if(n.open(e.method,e.urlWithParams),e.withCredentials&&(n.withCredentials=!0),e.headers.forEach((l,d)=>n.setRequestHeader(l,d.join(","))),e.headers.has("Accept")||n.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){const l=e.detectContentTypeHeader();null!==l&&n.setRequestHeader("Content-Type",l)}if(e.responseType){const l=e.responseType.toLowerCase();n.responseType="json"!==l?l:"text"}const i=e.serializeBody();let c=null;const h=()=>{if(null!==c)return c;const l=1223===n.status?204:n.status,d=n.statusText||"OK",C=new y(n.getAllResponseHeaders()),N=function(s){return"responseURL"in s&&s.responseURL?s.responseURL:/^X-Request-URL:/m.test(s.getAllResponseHeaders())?s.getResponseHeader("X-Request-URL"):null}(n)||e.url;return c=new S({headers:C,status:l,statusText:d,url:N}),c},a=()=>{let{headers:l,status:d,statusText:C,url:N}=h(),f=null;204!==d&&(f=void 0===n.response?n.responseText:n.response),0===d&&(d=f?200:0);let D=d>=200&&d<300;if("json"===e.responseType&&"string"==typeof f){const ge=f;f=f.replace(ie,"");try{f=""!==f?JSON.parse(f):null}catch(be){f=ge,D&&(D=!1,f={error:be,text:f})}}D?(r.next(new O({body:f,headers:l,status:d,statusText:C,url:N||void 0})),r.complete()):r.error(new z({error:f,headers:l,status:d,statusText:C,url:N||void 0}))},p=l=>{const{url:d}=h(),C=new z({error:l,status:n.status||0,statusText:n.statusText||"Unknown Error",url:d||void 0});r.error(C)};let w=!1;const v=l=>{w||(r.next(h()),w=!0);let d={type:u.DownloadProgress,loaded:l.loaded};l.lengthComputable&&(d.total=l.total),"text"===e.responseType&&!!n.responseText&&(d.partialText=n.responseText),r.next(d)},b=l=>{let d={type:u.UploadProgress,loaded:l.loaded};l.lengthComputable&&(d.total=l.total),r.next(d)};return n.addEventListener("load",a),n.addEventListener("error",p),n.addEventListener("timeout",p),n.addEventListener("abort",p),e.reportProgress&&(n.addEventListener("progress",v),null!==i&&n.upload&&n.upload.addEventListener("progress",b)),n.send(i),r.next({type:u.Sent}),()=>{n.removeEventListener("error",p),n.removeEventListener("abort",p),n.removeEventListener("load",a),n.removeEventListener("timeout",p),e.reportProgress&&(n.removeEventListener("progress",v),null!==i&&n.upload&&n.upload.removeEventListener("progress",b)),n.readyState!==n.DONE&&n.abort()}})}}return s.\u0275fac=function(e){return new(e||s)(o.LFG(E.JF))},s.\u0275prov=o.Yz7({token:s,factory:s.\u0275fac}),s})();const M=new o.OlP("XSRF_COOKIE_NAME"),R=new o.OlP("XSRF_HEADER_NAME");class G{}let le=(()=>{class s{constructor(e,r,n){this.doc=e,this.platform=r,this.cookieName=n,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,E.Mx)(e,this.cookieName),this.lastCookieString=e),this.lastToken}}return s.\u0275fac=function(e){return new(e||s)(o.LFG(E.K0),o.LFG(o.Lbi),o.LFG(M))},s.\u0275prov=o.Yz7({token:s,factory:s.\u0275fac}),s})(),H=(()=>{class s{constructor(e,r){this.tokenService=e,this.headerName=r}intercept(e,r){const n=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||n.startsWith("http://")||n.startsWith("https://"))return r.handle(e);const i=this.tokenService.getToken();return null!==i&&!e.headers.has(this.headerName)&&(e=e.clone({headers:e.headers.set(this.headerName,i)})),r.handle(e)}}return s.\u0275fac=function(e){return new(e||s)(o.LFG(G),o.LFG(R))},s.\u0275prov=o.Yz7({token:s,factory:s.\u0275fac}),s})(),ce=(()=>{class s{constructor(e,r){this.backend=e,this.injector=r,this.chain=null}handle(e){if(null===this.chain){const r=this.injector.get(Z,[]);this.chain=r.reduceRight((n,i)=>new X(n,i),this.backend)}return this.chain.handle(e)}}return s.\u0275fac=function(e){return new(e||s)(o.LFG(A),o.LFG(o.zs3))},s.\u0275prov=o.Yz7({token:s,factory:s.\u0275fac}),s})(),ue=(()=>{class s{static disable(){return{ngModule:s,providers:[{provide:H,useClass:oe}]}}static withOptions(e={}){return{ngModule:s,providers:[e.cookieName?{provide:M,useValue:e.cookieName}:[],e.headerName?{provide:R,useValue:e.headerName}:[]]}}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=o.oAB({type:s}),s.\u0275inj=o.cJS({providers:[H,{provide:Z,useExisting:H,multi:!0},{provide:G,useClass:le},{provide:M,useValue:"XSRF-TOKEN"},{provide:R,useValue:"X-XSRF-TOKEN"}]}),s})(),de=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=o.oAB({type:s}),s.\u0275inj=o.cJS({providers:[B,{provide:J,useClass:ce},K,{provide:A,useExisting:K}],imports:[[ue.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]]}),s})();function he(s,t){if(1&s&&(o.TgZ(0,"tr"),o.TgZ(1,"td"),o._uU(2),o.qZA(),o.TgZ(3,"td"),o._uU(4),o.qZA(),o.TgZ(5,"td"),o._uU(6),o.qZA(),o.TgZ(7,"td"),o._uU(8),o.qZA(),o.TgZ(9,"td"),o._uU(10),o.qZA(),o.qZA()),2&s){const e=t.$implicit;o.xp6(2),o.Oqu(null==e?null:e.name),o.xp6(2),o.Oqu(null==e?null:e.class),o.xp6(2),o.Oqu(null==e?null:e.sub1),o.xp6(2),o.Oqu(null==e?null:e.sub2),o.xp6(2),o.Oqu(null==e?null:e.sub3)}}let pe=(()=>{class s{constructor(e){this.http=e,this.count=0,this.previousIndex=0}ngOnInit(){this.getStudentData()}getStudentData(){this.http.get("./../../assets/json/user.json").subscribe(e=>{this.studentData=e,console.log(this.studentData)})}sortingName(e,r){console.log(e),this.previousIndex!==r&&(this.count=0),this.previousIndex=r,this.count++,"name"==e&&(1==this.count&&(this.studentData=this.studentData.sort((n,i)=>{if(n.name<i.name)return-1})),2==this.count&&(this.studentData=this.studentData.reverse()),3==this.count&&(this.getStudentData(),this.count=0))}sortingClass(e,r){this.type=e,this.previousIndex!==r&&(this.count=0),this.previousIndex=r,"class"==this.type&&(this.count++,1==this.count&&this.studentData.sort((n,i)=>n.class-i.class),2==this.count&&this.studentData.sort((n,i)=>i.class-n.class),3==this.count&&(this.getStudentData(),this.count=0))}sortingSub1(e,r){this.type=e,this.previousIndex!==r&&(this.count=0),this.previousIndex=r,"sub1"==this.type&&(this.count++,1==this.count&&this.studentData.sort((n,i)=>n.sub1-i.sub1),2==this.count&&this.studentData.sort((n,i)=>i.sub1-n.sub1),3==this.count&&(this.getStudentData(),this.count=0))}sortingSub2(e,r){this.type=e,this.previousIndex!==r&&(this.count=0),this.previousIndex=r,"sub2"==this.type&&(this.count++,1==this.count&&this.studentData.sort((n,i)=>n.sub2-i.sub2),2==this.count&&this.studentData.sort((n,i)=>i.sub2-n.sub2),3==this.count&&(this.getStudentData(),this.count=0))}sortingSub3(e,r){this.type=e,this.previousIndex!==r&&(this.count=0),this.previousIndex=r,"sub3"==this.type&&(this.count++,1==this.count&&this.studentData.sort((n,i)=>n.sub3-i.sub3),2==this.count&&this.studentData.sort((n,i)=>i.sub3-n.sub3),3==this.count&&(this.getStudentData(),this.count=0))}}return s.\u0275fac=function(e){return new(e||s)(o.Y36(B))},s.\u0275cmp=o.Xpm({type:s,selectors:[["app-user-list"]],decls:13,vars:1,consts:[["id","customers",1,"sortable"],[3,"click"],[4,"ngFor","ngForOf"]],template:function(e,r){1&e&&(o.TgZ(0,"table",0),o.TgZ(1,"tr"),o.TgZ(2,"th",1),o.NdJ("click",function(){return r.sortingName("name",1)}),o._uU(3,"Name"),o.qZA(),o.TgZ(4,"th",1),o.NdJ("click",function(){return r.sortingClass("class",2)}),o._uU(5,"Class"),o.qZA(),o.TgZ(6,"th",1),o.NdJ("click",function(){return r.sortingSub1("sub1",3)}),o._uU(7,"Sub1"),o.qZA(),o.TgZ(8,"th",1),o.NdJ("click",function(){return r.sortingSub2("sub2",4)}),o._uU(9,"Sub2"),o.qZA(),o.TgZ(10,"th",1),o.NdJ("click",function(){return r.sortingSub3("sub3",5)}),o._uU(11,"Sub3"),o.qZA(),o.qZA(),o.YNc(12,he,11,5,"tr",2),o.qZA()),2&e&&(o.xp6(12),o.Q6J("ngForOf",r.studentData))},directives:[E.sg],styles:["#customers[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif;border-collapse:collapse;width:100%;margin-top:20px}#customers[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], #customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #ddd;padding:8px}#customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(even){background-color:#f2f2f2}#customers[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover{background-color:#ddd}#customers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding-top:12px;padding-bottom:12px;text-align:left;background-color:#04aa6d;color:#fff}"]}),s})();var fe=m(8427);const me=[{path:"",component:pe}];let ye=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=o.oAB({type:s}),s.\u0275inj=o.cJS({imports:[[E.ez,fe.Bz.forChild(me),de]]}),s})()}}]);