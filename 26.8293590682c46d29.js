"use strict";(self.webpackChunkassesment1=self.webpackChunkassesment1||[]).push([[26],{8026:(x,o,g)=>{g.r(o),g.d(o,{GridListViewModule:()=>d});var m=g(6019);const l=[{name:"samsung-galaxy-03",image:"samsung-galaxy-03-.jpg",price:1e4},{name:"samsung-galaxy-a03-core",image:"samsung-galaxy-a03-core.jpg",price:198800},{name:"samsung-galaxy-a03s",image:"samsung-galaxy-a03s.jpg",price:10500},{name:"samsung-galaxy-a12-nacho",image:"samsung-galaxy-a12-nacho.jpg",price:19080},{name:"samsung-galaxy-a12-sm-a125",image:"samsung-galaxy-a12-sm-a125.jpg",price:1700},{name:"samsung-galaxy-a13-5g",image:"samsung-galaxy-a13-5g.jpg",price:19900},{name:"samsung-galaxy-a22-5g",image:"samsung-galaxy-a22-5g.jpg",price:18430},{name:"samsung-galaxy-a2v2",image:"samsung-galaxy-a22.jpg",price:16500},{name:"samsung-galaxy-a32-4g-new",image:"samsung-galaxy-a32-4g-new.jpg",price:19900},{name:"samsung-galaxy-a52-5g",image:"samsung-galaxy-a52-5g.jpg",price:16400},{name:"samsung-galaxy-a72-4g",image:"samsung-galaxy-a72-4g.jpg",price:19300},{name:"samsung-galaxy-f02s",image:"samsung-galaxy-f02s.jpg",price:82700},{name:"samsung-galaxy-f12",image:"samsung-galaxy-f12.jpg",price:18900},{name:"samsung-galaxy-f22",image:"samsung-galaxy-f22.jpg",price:29e3},{name:"samsung-galaxy-f42-5g",image:"samsung-galaxy-f42-5g.jpg",price:4400},{name:"samsung-galaxy-f62",image:"samsung-galaxy-f62.jpg",price:8930},{name:"samsung-galaxy-m21-2021",image:"samsung-galaxy-m21-2021.jpg",price:23e3},{name:"samsung-galaxy-m31-sm-m315f",image:"samsung-galaxy-m31-sm-m315f.jpg",price:12500},{name:"samsung-galaxy-m32-5g-new",image:"samsung-galaxy-m32-5g-new.jpg",price:47e3},{name:"samsung-galaxy-m32",image:"samsung-galaxy-m32.jpg",price:44e3},{name:"samsung-galaxy-m62",image:"samsung-galaxy-m62.jpg",price:5e3},{name:"samsung-galaxy-quantum-2-sm-a826s",image:"samsung-galaxy-quantum-2-sm-a826s.jpg",price:12400},{name:"samsung-galaxy-xcover-5",image:"samsung-galaxy-xcover-5.jpg",price:13e3},{name:"samsung-galaxy-z-fold3-5g",image:"samsung-galaxy-z-fold3-5g.jpg",price:12e3}];var a=g(3556);function r(n,i){if(1&n&&(a.TgZ(0,"div",10),a._UZ(1,"img",11),a.TgZ(2,"h2"),a._uU(3),a.ALo(4,"uppercase"),a.qZA(),a.TgZ(5,"h4"),a._uU(6),a.ALo(7,"currency"),a.qZA(),a.qZA()),2&n){const e=i.$implicit;a.xp6(1),a.MGl("src","./assets/images/",e.image,"",a.LSH),a.xp6(2),a.Oqu(a.lcZ(4,3,e.name)),a.xp6(3),a.Oqu(a.xi3(7,5,e.price,"INR"))}}let c=(()=>{class n{constructor(){this.items=[],this.mobiles=l}ngOnInit(){this.items=l,this.elements=document.getElementsByClassName("column"),this.container=document.getElementById("btnContainer"),this.container.getElementsByClassName("btn")}ngAfterViewInit(){this.listView(),this.items=l.sort((e,s)=>e.price-s.price)}listView(){for(let e=0;e<this.elements.length;e++)this.elements[e].style.width="46%",this.elements[e].style.margin="10px",document.getElementsByClassName("btn")[0].classList.add("active"),document.getElementsByClassName("btn")[1].classList.remove("active")}gridView(){for(let e=0;e<this.elements.length;e++)this.elements[e].style.width="21%",this.elements[e].style.margin="10px",document.getElementsByClassName("btn")[1].classList.add("active"),document.getElementsByClassName("btn")[0].classList.remove("active")}onChange(e){if(console.log(e.target.value),1==e.target.value){this.items=[];let s=JSON.stringify(this.mobiles),t=JSON.parse(s);this.items=t}2==e.target.value&&(this.items=this.items.sort((s,t)=>s.price-t.price)),3==e.target.value&&(this.items=this.items.sort((s,t)=>t.price-s.price))}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=a.Xpm({type:n,selectors:[["app-grid-list-view"]],decls:17,vars:1,consts:[["id","btnContainer",2,"display","flex"],["id","btn1",1,"btn",2,"margin-right","5px",3,"click"],[1,"fa","fa-bars"],["id","btn2",1,"btn",2,"margin-right","5px",3,"click"],[1,"fa","fa-th-large"],[2,"padding","10px",3,"change"],["value","2"],["value","3"],[1,"row"],["class","column",4,"ngFor","ngForOf"],[1,"column"],[2,"display","flex",3,"src"]],template:function(e,s){1&e&&(a.TgZ(0,"div",0),a.TgZ(1,"div"),a.TgZ(2,"button",1),a.NdJ("click",function(){return s.listView()}),a._UZ(3,"i",2),a._uU(4," List"),a.qZA(),a.TgZ(5,"button",3),a.NdJ("click",function(){return s.gridView()}),a._UZ(6,"i",4),a._uU(7," Grid"),a.qZA(),a.qZA(),a.TgZ(8,"div"),a.TgZ(9,"select",5),a.NdJ("change",function(y){return s.onChange(y)}),a.TgZ(10,"option",6),a._uU(11,"Low To High"),a.qZA(),a.TgZ(12,"option",7),a._uU(13,"High To Low"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a._UZ(14,"br"),a.TgZ(15,"div",8),a.YNc(16,r,8,8,"div",9),a.qZA()),2&e&&(a.xp6(16),a.Q6J("ngForOf",s.items))},directives:[m.sg],pipes:[m.gd,m.H9],styles:['.column[_ngcontent-%COMP%]{float:left;width:50%;padding:10px}.row[_ngcontent-%COMP%]:after{content:"";display:table;clear:both}.btn[_ngcontent-%COMP%]{border:none;outline:none;padding:12px 16px;background-color:#f1f1f1;cursor:pointer}.btn[_ngcontent-%COMP%]:hover{background-color:#ddd}.btn.active[_ngcontent-%COMP%]{background-color:#666;color:#fff}#btnContainer[_ngcontent-%COMP%]{margin-top:10px;float:inline-end}.custom-select[_ngcontent-%COMP%]{position:relative;font-family:Arial}']}),n})();var u=g(8427);const p=[{path:"",component:c}];let d=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[[m.ez,u.Bz.forChild(p)]]}),n})()}}]);