(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"4+IK":function(n,e,o){"use strict";o.r(e),o.d(e,"AccountPageModule",function(){return l});var t=o("ofXK"),i=o("3Pt+"),c=o("TEn/"),b=o("tyNb"),r=o("fXoL");const a=[{path:"",component:(()=>{class n{constructor(n){this.router=n}ionViewWillEnter(){this.userInfo=JSON.parse(window.sessionStorage.getItem("currentUser"))}ngOnInit(){this.ionViewWillEnter()}change(n){"id"!=n&&this.router.navigate(["account-update"],{queryParams:{option:n}})}signOut(){window.sessionStorage.clear(),this.router.navigateByUrl("login").then()}}return n.\u0275fac=function(e){return new(e||n)(r.Jb(b.g))},n.\u0275cmp=r.Db({type:n,selectors:[["app-account"]],decls:34,vars:5,consts:[["slot","start"],["defaultHref","/home"],[3,"click"],["name","copy-outline"],["name","chevron-forward-outline"],["expand","block",2,"margin","1em","align-self","center",3,"click"]],template:function(n,e){1&n&&(r.Mb(0,"ion-header"),r.Mb(1,"ion-toolbar"),r.Mb(2,"ion-buttons",0),r.Kb(3,"ion-back-button",1),r.Lb(),r.Mb(4,"ion-title"),r.fc(5),r.Lb(),r.Lb(),r.Lb(),r.Mb(6,"ion-content"),r.Mb(7,"ion-list"),r.Mb(8,"ion-item",2),r.Tb("click",function(){return e.change("id")}),r.Mb(9,"ion-label"),r.fc(10,"ID"),r.Lb(),r.Mb(11,"ion-label"),r.fc(12),r.Lb(),r.Kb(13,"ion-icon",3),r.Lb(),r.Mb(14,"ion-item",2),r.Tb("click",function(){return e.change("name")}),r.Mb(15,"ion-label"),r.fc(16,"Name"),r.Lb(),r.Mb(17,"ion-label"),r.fc(18),r.Lb(),r.Kb(19,"ion-icon",4),r.Lb(),r.Mb(20,"ion-item",2),r.Tb("click",function(){return e.change("age")}),r.Mb(21,"ion-label"),r.fc(22,"Age"),r.Lb(),r.Mb(23,"ion-label"),r.fc(24),r.Lb(),r.Kb(25,"ion-icon",4),r.Lb(),r.Mb(26,"ion-item",2),r.Tb("click",function(){return e.change("password")}),r.Mb(27,"ion-label"),r.fc(28,"Password"),r.Lb(),r.Mb(29,"ion-label"),r.fc(30),r.Lb(),r.Kb(31,"ion-icon",4),r.Lb(),r.Mb(32,"ion-button",5),r.Tb("click",function(){return e.signOut()}),r.fc(33," Sign Out "),r.Lb(),r.Lb(),r.Lb()),2&n&&(r.zb(5),r.gc(null==e.userInfo?null:e.userInfo.name),r.zb(7),r.gc(e.userInfo.id),r.zb(6),r.gc(e.userInfo.name),r.zb(6),r.gc(e.userInfo.age),r.zb(6),r.gc(e.userInfo.password))},directives:[c.n,c.B,c.e,c.b,c.c,c.A,c.l,c.t,c.r,c.s,c.o,c.d],styles:[""]}),n})()}];let s=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.Hb({type:n}),n.\u0275inj=r.Gb({imports:[[b.i.forChild(a)],b.i]}),n})(),l=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.Hb({type:n}),n.\u0275inj=r.Gb({imports:[[t.b,i.b,c.C,s]]}),n})()}}]);