(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{ak9z:function(o,t,e){"use strict";e.r(t),e.d(t,"GroupsPageModule",function(){return l});var r=e("TEn/"),n=e("ofXK"),i=e("3Pt+"),s=e("tyNb"),c=e("fXoL"),u=e("ohih");let b=(()=>{class o{constructor(o){this.router=o,this.group={}}ngOnInit(){}goToGroupPage(o){this.router.navigate(["group",o])}}return o.\u0275fac=function(t){return new(t||o)(c.Jb(s.g))},o.\u0275cmp=c.Db({type:o,selectors:[["app-group-item"]],inputs:{group:"group"},decls:14,vars:4,consts:[[3,"click"],[1,"ion-align-items-center"],["size-xs","2","size-md","1"],[3,"src"],["size-xs","9","offset-xs","1","size-md","10","offset-md","1"],[1,"ion-text-center"]],template:function(o,t){1&o&&(c.Mb(0,"ion-card",0),c.Tb("click",function(){return t.goToGroupPage(t.group.id)}),c.Mb(1,"ion-card-content"),c.Mb(2,"ion-grid"),c.Mb(3,"ion-row",1),c.Mb(4,"ion-col",2),c.Mb(5,"ion-avatar"),c.Kb(6,"img",3),c.Lb(),c.Lb(),c.Mb(7,"ion-col",4),c.Mb(8,"ion-card-title",5),c.fc(9),c.Lb(),c.Mb(10,"ion-card-subtitle"),c.fc(11),c.Lb(),c.Mb(12,"ion-card-subtitle"),c.fc(13),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb()),2&o&&(c.zb(6),c.ac("src",t.group.img,c.cc),c.zb(3),c.gc(t.group.name),c.zb(2),c.hc("",t.group.members.length," Members"),c.zb(2),c.hc("",t.group.events.length," Events"))},directives:[r.g,r.h,r.n,r.w,r.l,r.b,r.k,r.j],styles:[""]}),o})();function p(o,t){1&o&&c.Kb(0,"app-group-item",4),2&o&&c.Zb("group",t.$implicit)}const g=[{path:"",component:(()=>{class o{constructor(o,t){this.groupService=o,this.router=t}ionViewDidEnter(){this.groups=this.groupService.getAllGroups()}ngOnInit(){this.ionViewDidEnter()}goToGroup(o){this.groupService.getGroupById(o),this.router.navigateByUrl("group").then()}}return o.\u0275fac=function(t){return new(t||o)(c.Jb(u.a),c.Jb(s.g))},o.\u0275cmp=c.Db({type:o,selectors:[["app-groups"]],decls:6,vars:2,consts:[[3,"fullscreen"],["fixed",""],["size-xs","12"],[3,"group",4,"ngFor","ngForOf"],[3,"group"]],template:function(o,t){1&o&&(c.Mb(0,"ion-content",0),c.Mb(1,"ion-list"),c.Mb(2,"ion-grid",1),c.Mb(3,"ion-row"),c.Mb(4,"ion-col",2),c.ec(5,p,1,1,"app-group-item",3),c.Lb(),c.Lb(),c.Lb(),c.Lb(),c.Lb()),2&o&&(c.Zb("fullscreen",!0),c.zb(5),c.Zb("ngForOf",t.groups))},directives:[r.m,r.u,r.n,r.w,r.l,n.h,b],styles:[""]}),o})()}];let a=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=c.Hb({type:o}),o.\u0275inj=c.Gb({imports:[[s.i.forChild(g)],s.i]}),o})(),l=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=c.Hb({type:o}),o.\u0275inj=c.Gb({imports:[[r.D,n.b,i.b,a]]}),o})()}}]);