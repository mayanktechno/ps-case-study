"use strict";(self.webpackChunkassesment1=self.webpackChunkassesment1||[]).push([[823],{7823:(D,r,c)=>{c.r(r),c.d(r,{DynamicDivModule:()=>f});var m=c(6019),t=c(3556);const a=["scrollframe"],d=["item"];function h(n,s){if(1&n){const i=t.EpF();t.TgZ(0,"div",2,3),t.TgZ(2,"button",4),t.NdJ("click",function(){const l=t.CHM(i).index;return t.oxw().alertFunction(l+1)}),t._uU(3),t.qZA(),t.qZA()}if(2&n){const i=s.$implicit;t.xp6(3),t.hij("click ",i,"")}}let u=(()=>{class n{constructor(){this.items=[],this.newDiv=[],this.index=1,this.limit=24,this.isNearBottom=!0}ngOnInit(){this.items=this.dynamicDiv(this.index,this.limit)}ngAfterViewInit(){this.scrollContainer=this.scrollFrame.nativeElement}onItemElementsChanged(){this.isNearBottom&&this.scrollToBottom()}dynamicDiv(i,o){let e=[];for(let l=i;l<=o;l++)e.push(l);return e}alertFunction(i){i%10||alert(`Button  in  ${i}th div  clicked `)}scrollToBottom(){window.scroll({top:this.scrollContainer.scrollHeight,left:0}),this.limit+=24;let i=this.dynamicDiv(this.items.length+1,this.limit);console.log(i),this.items=[...this.items,...i]}isUserNearBottom(){return window.scrollY+window.innerHeight>document.body.scrollHeight-0}scrolled(i){this.isNearBottom=this.isUserNearBottom(),this.onItemElementsChanged()}}return n.\u0275fac=function(i){return new(i||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-dynamic-div"]],viewQuery:function(i,o){if(1&i&&(t.Gf(a,5),t.Gf(d,5)),2&i){let e;t.iGM(e=t.CRH())&&(o.scrollFrame=e.first),t.iGM(e=t.CRH())&&(o.itemElements=e)}},hostBindings:function(i,o){1&i&&t.NdJ("scroll",function(l){return o.scrolled(l)},!1,t.Jf7)},decls:3,vars:1,consts:[["scrollframe",""],["class","div1",4,"ngFor","ngForOf"],[1,"div1"],["item",""],[1,"myClass",3,"click"]],template:function(i,o){1&i&&(t.TgZ(0,"div",null,0),t.YNc(2,h,4,1,"div",1),t.qZA()),2&i&&(t.xp6(2),t.Q6J("ngForOf",o.items))},directives:[m.sg],styles:[".div1[_ngcontent-%COMP%]{width:200px;height:200px;border:1px solid black;position:relative;top:10px;float:left}.myClass[_ngcontent-%COMP%]{position:absolute;top:40%;left:36%}"]}),n})();var v=c(8427);const p=[{path:"",component:u}];let f=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[m.ez,v.Bz.forChild(p)]]}),n})()}}]);