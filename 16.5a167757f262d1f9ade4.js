(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"99Un":function(i,t,e){"use strict";e.r(t),e.d(t,"HomePageModule",function(){return a});var n=e("TEn/"),s=e("ofXK"),o=e("3Pt+"),r=e("tyNb"),c=e("fXoL"),l=e("jK6o");function b(i,t){if(1&i){const i=c.Nb();c.Mb(0,"ion-col",4),c.Mb(1,"ion-card",5),c.Ub("click",function(){c.ec(i);const e=t.$implicit;return c.Wb().goToFilmPage(e.id)}),c.Mb(2,"ion-card-header"),c.Kb(3,"ion-img",6),c.Mb(4,"ion-card-title",7),c.ic(5),c.Xb(6,"uppercase"),c.Lb(),c.Lb(),c.Lb(),c.Lb()}if(2&i){const i=t.$implicit;c.zb(3),c.cc("src",i.img),c.zb(2),c.jc(c.Yb(6,2,i.title))}}const u=[{path:"",component:(()=>{class i{constructor(i,t){this.filmService=i,this.router=t,this.results=[]}ionViewDidEnter(){this.films=this.filmService.getAllFilms()}ngOnInit(){this.ionViewDidEnter()}search(i){const t=i.target.value.toLowerCase();this.results=[],this.films=this.filmService.getAllFilms(),""!==t&&(this.films.forEach(i=>{this.filmService.getFilmById(i.id).title.toLowerCase().indexOf(t)>-1&&this.results.push(i)}),this.films=this.results)}goToFilmPage(i){this.router.navigate(["film",i])}}return i.\u0275fac=function(t){return new(t||i)(c.Jb(l.a),c.Jb(r.g))},i.\u0275cmp=c.Db({type:i,selectors:[["app-home"]],decls:6,vars:2,consts:[[3,"fullscreen"],["fixed",""],[3,"ionInput"],["size-xs","12","size-md","4",4,"ngFor","ngForOf"],["size-xs","12","size-md","4"],[3,"click"],[2,"height","200px",3,"src"],[1,"ion-text-center",2,"height","50px"]],template:function(i,t){1&i&&(c.Mb(0,"ion-content",0),c.Mb(1,"ion-list"),c.Mb(2,"ion-grid",1),c.Mb(3,"ion-row"),c.Mb(4,"ion-searchbar",2),c.Ub("ionInput",function(i){return t.search(i)}),c.Lb(),c.hc(5,b,7,4,"ion-col",3),c.Lb(),c.Lb(),c.Lb(),c.Lb()),2&i&&(c.bc("fullscreen",!0),c.zb(5),c.bc("ngForOf",t.films))},directives:[n.m,n.u,n.n,n.w,n.x,n.G,s.h,n.l,n.g,n.i,n.q,n.k],pipes:[s.l],styles:[""]}),i})()}];let f=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=c.Hb({type:i}),i.\u0275inj=c.Gb({imports:[[r.i.forChild(u)],r.i]}),i})(),a=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=c.Hb({type:i}),i.\u0275inj=c.Gb({imports:[[n.E,s.b,o.b,f]]}),i})()}}]);