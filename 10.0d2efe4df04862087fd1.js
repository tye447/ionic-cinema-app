(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"4+IK":function(n,e,i){"use strict";i.r(e),i.d(e,"AccountPageModule",function(){return l});var o=i("ofXK"),t=i("3Pt+"),c=i("TEn/"),b=i("tyNb"),r=i("fXoL");const a=[{path:"",component:(()=>{class n{constructor(n){this.router=n}ionViewWillEnter(){this.userInfo=JSON.parse(window.sessionStorage.getItem("currentUser"))}ngOnInit(){this.ionViewWillEnter()}change(n){"id"!=n&&this.router.navigate(["account-update"],{queryParams:{option:n}})}signOut(){window.sessionStorage.clear(),this.router.navigateByUrl("login").then()}}return n.\u0275fac=function(e){return new(e||n)(r.Jb(b.g))},n.\u0275cmp=r.Db({type:n,selectors:[["app-account"]],decls:34,vars:5,consts:[["slot","start"],["defaultHref","/home"],[3,"click"],["name","copy-outline"],["name","chevron-forward-outline"],["expand","block",2,"margin","1em","align-self","center",3,"click"]],template:function(n,e){1&n&&(r.Mb(0,"ion-header"),r.Mb(1,"ion-toolbar"),r.Mb(2,"ion-buttons",0),r.Kb(3,"ion-back-button",1),r.Lb(),r.Mb(4,"ion-title"),r.ic(5),r.Lb(),r.Lb(),r.Lb(),r.Mb(6,"ion-content"),r.Mb(7,"ion-list"),r.Mb(8,"ion-item",2),r.Ub("click",function(){return e.change("id")}),r.Mb(9,"ion-label"),r.ic(10,"ID"),r.Lb(),r.Mb(11,"ion-label"),r.ic(12),r.Lb(),r.Kb(13,"ion-icon",3),r.Lb(),r.Mb(14,"ion-item",2),r.Ub("click",function(){return e.change("name")}),r.Mb(15,"ion-label"),r.ic(16,"Name"),r.Lb(),r.Mb(17,"ion-label"),r.ic(18),r.Lb(),r.Kb(19,"ion-icon",4),r.Lb(),r.Mb(20,"ion-item",2),r.Ub("click",function(){return e.change("age")}),r.Mb(21,"ion-label"),r.ic(22,"Age"),r.Lb(),r.Mb(23,"ion-label"),r.ic(24),r.Lb(),r.Kb(25,"ion-icon",4),r.Lb(),r.Mb(26,"ion-item",2),r.Ub("click",function(){return e.change("password")}),r.Mb(27,"ion-label"),r.ic(28,"Password"),r.Lb(),r.Mb(29,"ion-label"),r.ic(30),r.Lb(),r.Kb(31,"ion-icon",4),r.Lb(),r.Mb(32,"ion-button",5),r.Ub("click",function(){return e.signOut()}),r.ic(33," Sign Out "),r.Lb(),r.Lb(),r.Lb()),2&n&&(r.zb(5),r.jc(null==e.userInfo?null:e.userInfo.name),r.zb(7),r.jc(e.userInfo.id),r.zb(6),r.jc(e.userInfo.name),r.zb(6),r.jc(e.userInfo.age),r.zb(6),r.jc(e.userInfo.password))},directives:[c.n,c.C,c.e,c.b,c.c,c.B,c.l,c.t,c.r,c.s,c.o,c.d],styles:[""]}),n})()}];let s=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.Hb({type:n}),n.\u0275inj=r.Gb({imports:[[b.i.forChild(a)],b.i]}),n})(),l=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.Hb({type:n}),n.\u0275inj=r.Gb({imports:[[o.b,t.b,c.D,s]]}),n})()}}]);