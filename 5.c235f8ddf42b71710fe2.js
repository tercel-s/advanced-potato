(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1gO7":function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){return function(){}}(),o=u("pMnS"),i=u("YAQW"),a=u("Ip0R"),c=t.nb({encapsulation:2,styles:[],data:{}});function s(l){return t.Db(0,[(l()(),t.pb(0,0,null,null,1,"span",[["class","bs-remove-tab"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;return"click"===n&&(u.preventDefault(),t=!1!==e.removeTab(l.parent.context.$implicit)&&t),t},null,null)),(l()(),t.Cb(-1,null,[" \u274c"]))],null,null)}function r(l){return t.Db(0,[(l()(),t.pb(0,0,null,null,8,"li",[],[[2,"active",null],[2,"disabled",null]],null,null,null,null)),t.ob(1,278528,null,0,a.h,[t.s,t.t,t.k,t.D],{ngClass:[0,"ngClass"]},null),t.zb(2,2),(l()(),t.pb(3,0,null,null,5,"a",[["class","nav-link"],["href","javascript:void(0);"]],[[1,"id",0],[2,"active",null],[2,"disabled",null]],[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=0!=(l.context.$implicit.active=!0)&&t),t},null,null)),(l()(),t.pb(4,16777216,null,null,2,"span",[],null,null,null,null,null)),t.ob(5,16384,null,0,i.a,[t.O],{ngTransclude:[0,"ngTransclude"]},null),(l()(),t.Cb(6,null,["",""])),(l()(),t.gb(16777216,null,null,1,null,s)),t.ob(8,16384,null,0,a.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=l(n,2,0,"nav-item",n.context.$implicit.customClass||"");l(n,1,0,u),l(n,5,0,n.context.$implicit.headingRef),l(n,8,0,n.context.$implicit.removable)},function(l,n){l(n,0,0,n.context.$implicit.active,n.context.$implicit.disabled),l(n,3,0,n.context.$implicit.id?n.context.$implicit.id+"-link":"",n.context.$implicit.active,n.context.$implicit.disabled),l(n,6,0,n.context.$implicit.heading)})}function b(l){return t.Db(0,[(l()(),t.pb(0,0,null,null,3,"ul",[["class","nav"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==u.preventDefault()&&t),t},null,null)),t.ob(1,278528,null,0,a.h,[t.s,t.t,t.k,t.D],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),t.gb(16777216,null,null,1,null,r)),t.ob(3,278528,null,0,a.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(4,0,null,null,1,"div",[["class","tab-content"]],null,null,null,null,null)),t.xb(null,0)],function(l,n){var u=n.component;l(n,1,0,"nav",u.classMap),l(n,3,0,u.tabs)},null)}var p=u("ZYCi"),d=u("K9Ia"),f=u("A5cQ"),g=function(){function l(l){this.lStorageManager=l,this.newTabAdded=new d.a,this.tabRemoved=new d.a,this.tabs=[]}return l.prototype.addNewTabIfNotExist=function(l,n){if(l&&n){this.tabs.filter(function(n){return n.title===l}).length<0||this.tabs.forEach(function(n){if(n.title===l)return n.active=!0,void window.focus()});var u=this.lStorageManager.findWindow(l);if(u){var t={actionName:"selectTab",title:""+l},e=window.open("",u);if(e)return e.postMessage(JSON.stringify(t),"*"),void e.focus()}this.addNewTab(l,n),window.focus()}},l.prototype.addNewTab=function(l,n){var u={title:""+l,content:""+n,active:!0};this.tabs.push(u),this.lStorageManager.addFunctionId(l),this.newTabAdded.next(u)},l.prototype.selectTab=function(l){this.tabs.forEach(function(n){n.title===l&&(n.active=!0)})},l.prototype.removeTabHandler=function(l){this.lStorageManager.removeFunctionId(l.title);var n=this.tabs.indexOf(l);this.tabs.splice(n,1),this.tabRemoved.next(n)},l.ngInjectableDef=t.S({factory:function(){return new l(t.W(f.a))},token:l,providedIn:"root"}),l}(),v=u("EcEN"),m=u("bne5"),w=function(){function l(l,n){var u=this;this.tabsetManager=l,this.lStorageManager=n,this.windowId=v.v4(),this.unloadSrc=Object(m.a)(window,"unload"),this.messageSrc=Object(m.a)(window,"message"),window.opener&&window.opener.postMessage(this.windowId,"*"),this.lStorageManager.addSubWindowId(this.windowId),this.unloadSrc.subscribe(function(){u.lStorageManager.removeSubWindowId(u.windowId)}),this.messageSrc.subscribe(function(l){try{var n=JSON.parse(l.data);if("addNewTab"===n.actionName&&u.tabsetManager.addNewTabIfNotExist(n.title,n.path),"selectTab"===n.actionName&&u.tabsetManager.selectTab(n.title),"kill"===n.actionName)try{window.close()}catch(l){}}catch(l){console.log(l)}})}return l.ngInjectableDef=t.S({factory:function(){return new l(t.W(g),t.W(f.a))},token:l,providedIn:"root"}),l}(),h=function(){function l(l,n,u,t,e){this.subWindowManager=l,this.tabsetManager=n,this.router=u,this.route=t,this.cd=e}return l.prototype.ngOnInit=function(){var l=this;window.name=this.subWindowManager.windowId,this.tabsetManager.newTabAdded.subscribe(function(n){l.selectTabHandler(n)});try{1===window.performance.navigation.type&&(console.log("reloaded!"),window.close())}catch(n){}},l.prototype.ngAfterViewChecked=function(){this.cd.detectChanges()},l.prototype.ngAfterViewInit=function(){},l.prototype.selectTabHandler=function(l){l.active=!0,this.router.navigate([l.content],{relativeTo:this.route,replaceUrl:!0}),window.focus()},l.prototype.removeTabHandler=function(l){this.tabsetManager.removeTabHandler(l)},l}(),y=t.nb({encapsulation:0,styles:[['[_nghost-%COMP%]     .nav-link .bs-remove-tab{position:relative;font-size:0}[_nghost-%COMP%]     .nav-link .bs-remove-tab::after{content:"\\f00d";font-family:FontAwesome;font-style:normal;font-weight:400;text-decoration:inherit;font-size:1rem;left:.5rem;position:relative}']],data:{animation:[{type:7,name:"openClose",definitions:[{type:0,name:"open",styles:{type:6,styles:{height:"*",opacity:1},offset:null},options:void 0},{type:0,name:"closed",styles:{type:6,styles:{height:"0",opacity:0},offset:null},options:void 0},{type:1,expr:"open => closed",animation:[{type:4,styles:null,timings:"0.2s"}],options:null},{type:1,expr:"closed => open",animation:[{type:4,styles:null,timings:"0.2s"}],options:null}],options:{}}]}});function k(l){return t.Db(0,[(l()(),t.pb(0,0,null,null,1,"tab",[],[[1,"id",0],[2,"active",null],[2,"tab-pane",null]],[[null,"selectTab"],[null,"deselect"],[null,"removed"]],function(l,n,u){var t=!0,e=l.component;return"selectTab"===n&&(t=!1!==e.selectTabHandler(l.context.$implicit)&&t),"deselect"===n&&(t=0!=(l.context.$implicit.active=!1)&&t),"removed"===n&&(t=!1!==e.removeTabHandler(l.context.$implicit)&&t),t},null,null)),t.ob(1,212992,null,0,i.b,[i.d,t.k,t.D],{heading:[0,"heading"],disabled:[1,"disabled"],removable:[2,"removable"],customClass:[3,"customClass"],active:[4,"active"]},{selectTab:"selectTab",deselect:"deselect",removed:"removed"})],function(l,n){l(n,1,0,n.context.$implicit.title,n.context.$implicit.disabled,!0,n.context.$implicit.customClass,n.context.$implicit.active)},function(l,n){l(n,0,0,t.yb(n,1).id,t.yb(n,1).active,t.yb(n,1).addClass)})}function C(l){return t.Db(0,[t.Ab(402653184,1,{tabset:0}),(l()(),t.pb(1,0,null,null,7,"div",[["class","container-fluid"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,4,"div",[],[[24,"@openClose",0]],null,null,null,null)),(l()(),t.pb(3,0,null,null,3,"tabset",[],[[2,"tab-container",null]],null,null,b,c)),t.ob(4,180224,[[1,4],["tabset",4]],0,i.d,[i.e,t.D],null,null),(l()(),t.gb(16777216,null,0,1,null,k)),t.ob(6,278528,null,0,a.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(7,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t.ob(8,212992,null,0,p.n,[p.b,t.O,t.j,[8,null],t.h],null,null)],function(l,n){l(n,6,0,n.component.tabsetManager.tabs),l(n,8,0)},function(l,n){l(n,2,0,n.component.tabsetManager.tabs.length>1?"open":"closed"),l(n,3,0,t.yb(n,4).clazz)})}function x(l){return t.Db(0,[(l()(),t.pb(0,0,null,null,1,"app-tab-container",[],null,null,null,C,y)),t.ob(1,12697600,null,0,h,[w,g,p.k,p.a,t.h],null,null)],function(l,n){l(n,1,0)},null)}var I=t.lb("app-tab-container",h,x,{},{},[]),T=u("l207"),M=function(){function l(l,n){this.tabsetManager=n,this.title=T.a.functionId.page1,l.setTitle(this.title)}return l.prototype.ngOnInit=function(){},l.prototype.gotoPage2=function(){this.tabsetManager.addNewTabIfNotExist(T.a.functionId.page2,"page2")},l.prototype.gotoPage3=function(){this.tabsetManager.addNewTabIfNotExist(T.a.functionId.page3,"page3")},l}(),N=u("ZYjt"),D=t.nb({encapsulation:0,styles:[[""]],data:{}});function O(l){return t.Db(0,[(l()(),t.pb(0,0,null,null,3,"div",[["class","row mb-5"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,2,"div",[["class","col"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.Cb(3,null,[" "," "])),(l()(),t.pb(4,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,4,"div",[["class","col"]],null,null,null,null,null)),(l()(),t.pb(6,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),t.pb(7,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Cb(-1,null,["\u798f\u4e95\u770c\uff08\u3075\u304f\u3044\u3051\u3093\uff09"])),(l()(),t.Cb(-1,null,["\u306f\u3001\u65e5\u672c\u6d77\u3084\u82e5\u72ed\u6e7e\u306b\u9762\u3059\u308b\u65e5\u672c\u306e\u884c\u653f\u533a\u753b\u53ca\u3073\u5730\u65b9\u516c\u5171\u56e3\u4f53\u3002\u770c\u5e81\u6240\u5728\u5730\u53ca\u3073\u6700\u5927\u306e\u90fd\u5e02\u306f\u798f\u4e95\u5e02\u3067\u3042\u308b\u3002 "])),(l()(),t.pb(10,0,null,null,8,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(11,0,null,null,2,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),t.pb(12,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Cb(-1,null,[" \u5c71\u4e2d\u5ce0\u30fb\u6728\u30ce\u82bd\u5ce0\u30fb\u6803\u30ce\u6728\u5ce0\u3092\u901a\u308b\u7a1c\u7dda\u3092\u5883\u306b\u3057\u3066\u3001\u5317\u5074\u306e\u5dba\u5317\uff08\u8d8a\u524d\u5730\u65b9\uff09\u3068\u3001\u5357\u5074\u306e\u5dba\u5357\uff08\u82e5\u72ed\u5730\u65b9\u304a\u3088\u3073\u6566\u8cc0\u5e02\uff09\u3088\u308a\u69cb\u6210\u3055\u308c\u308b\u3002\u307e\u305f\u65e5\u672c\u6d77\u53ca\u3073\u82e5\u72ed\u6e7e\u306e\u798f\u4e95\u770c\u6d77\u57df\u306b\u306f\u5468\u56f20.1km\u4ee5\u4e0a\u306e\u5cf6\u304c58\u3042\u308b\u304c\u5168\u3066\u7121\u4eba\u5cf6\u3067\u3001\u5e38\u795e\u534a\u5cf6\u6c96\u306e\u5ca9\u7901\u3067\u3042\u308b\u5343\u5cf6\u3067\u7d043km\u306e\u8ddd\u96e2\u3057\u304b\u96e2\u308c\u3066\u3044\u306a\u3044\u3002 "])),(l()(),t.pb(14,0,null,null,4,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),t.pb(15,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Cb(-1,null,[" \u8d8a\u524d\u306e\u7dd1\u8c4a\u304b\u306a\u5c71\u3005\u3068\u3001\u82e5\u72ed\u306e\u6e05\u3089\u304b\u306a\u6c34\u306e\u6d41\u308c\u306b\u4ee3\u8868\u3055\u308c\u308b\u3088\u3046\u306b\u81ea\u7136\u304c\u7f8e\u3057\u3044\u5834\u6240\u3067\u3042\u308a\u3001\u305d\u308c\u3092\u4ee3\u8868\u3059\u308b\u8a9e\u306b\u8d8a\u5c71\u82e5\u6c34\uff08\u3048\u3064\u3056\u3093\u3058\u3083\u304f\u3059\u3044\uff09\u304c\u3042\u308b\u3002 "])),(l()(),t.pb(17,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Cb(-1,null,[" \u5730\u7406\u4e0a\u306f\u5317\u9678\u5730\u65b9\u307e\u305f\u306f\u4e2d\u90e8\u5730\u65b9\u3068\u5206\u985e\u3055\u308c\u308b\u304c\u3001\u884c\u653f\u7ba1\u8f44\u533a\u5206\u306b\u304a\u3044\u3066\u8fd1\u757f\u5730\u65b9\u3068\u3055\u308c\u308b\u5834\u5408\u3082\u3042\u308b\u3002 "])),(l()(),t.pb(19,0,null,null,6,"div",[["class","row my-3"]],null,null,null,null,null)),(l()(),t.pb(20,0,null,null,2,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),t.pb(21,0,null,null,1,"button",[["class","btn btn-outline-secondary btn-block"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.gotoPage2()&&t),t},null,null)),(l()(),t.Cb(-1,null,[" Page 2 \u3078 "])),(l()(),t.pb(23,0,null,null,2,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),t.pb(24,0,null,null,1,"button",[["class","btn btn-outline-secondary btn-block"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.gotoPage3()&&t),t},null,null)),(l()(),t.Cb(-1,null,[" Page 3 \u3078 "]))],null,function(l,n){l(n,3,0,n.component.title)})}function P(l){return t.Db(0,[(l()(),t.pb(0,0,null,null,1,"app-page1",[],null,null,null,O,D)),t.ob(1,114688,null,0,M,[N.i,g],null,null)],function(l,n){l(n,1,0)},null)}var S=t.lb("app-page1",M,P,{},{},[]),$=function(){function l(l,n){this.tabsetManager=n,this.title=T.a.functionId.page2,l.setTitle(this.title)}return l.prototype.ngOnInit=function(){},l.prototype.gotoPage1=function(){this.tabsetManager.addNewTabIfNotExist(T.a.functionId.page1,"page1")},l.prototype.gotoPage3=function(){this.tabsetManager.addNewTabIfNotExist(T.a.functionId.page3,"page3")},l}(),E=t.nb({encapsulation:0,styles:[[""]],data:{}});function A(l){return t.Db(0,[(l()(),t.pb(0,0,null,null,3,"div",[["class","row mb-5"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,2,"div",[["class","col"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.Cb(3,null,[" "," "])),(l()(),t.pb(4,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,4,"div",[["class","col"]],null,null,null,null,null)),(l()(),t.pb(6,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),t.pb(7,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Cb(-1,null,["\u4eac\u90fd\u5927\u5b66\uff08\u304d\u3087\u3046\u3068\u3060\u3044\u304c\u304f\u3001\u82f1\u8a9e: Kyoto University\uff09"])),(l()(),t.Cb(-1,null,["\u306f\u3001 \u4eac\u90fd\u5e9c\u4eac\u90fd\u5e02\u5de6\u4eac\u533a\u5409\u7530\u672c\u753a36\u756a\u57301\u306b\u672c\u90e8\u3092\u7f6e\u304f\u65e5\u672c\u306e\u56fd\u7acb\u5927\u5b66\u3067\u3042\u308b\u3002 1897\u5e74\u306b\u8a2d\u7f6e\u3055\u308c\u305f\u3002\u5927\u5b66\u306e\u7565\u79f0\u306f\u4eac\u5927\uff08\u304d\u3087\u3046\u3060\u3044\uff09\u3002 "])),(l()(),t.pb(10,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(11,0,null,null,2,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),t.pb(12,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Cb(-1,null,[" \u4eac\u90fd\u5e02\u5185\u306e\u7e41\u83ef\u8857\u304b\u3089\u96e2\u308c\u305f\u53e4\u90fd\u306e\u98a8\u60c5\u3092\u6b8b\u3059\u843d\u3061\u7740\u3044\u305f\u74b0\u5883\u306e\u4e2d\u306b\u3042\u308a\u3001\u4f55\u4e8b\u3082\u5b66\u751f\u306e\u81ea\u4e3b\u6027\u306b\u4efb\u305b\u308b\u3068\u3044\u3046\u300c\u81ea\u7531\u306e\u5b66\u98a8\u300d\u3092\u6a19\u699c\u3057\u3066\u3044\u308b\u3002 \u30ea\u30d9\u30e9\u30eb\u6d3e\u306a\u5927\u5b66\u306e\u50be\u5411\u306b\u3042\u308b\u3002 \u6bce\u5e74\u884c\u308f\u308c\u308b11\u6708\u796d\u3084\u6298\u7530\u5148\u751f\u50cf\u3092\u5de1\u308b\u843d\u66f8\u304d\u3001 \u5352\u696d\u5f0f\u3067\u306e\u4eee\u88c5\u306a\u3069\u306b\u3082\u305d\u306e\u4e00\u7aef\u3092\u57a3\u9593\u898b\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002 "])),(l()(),t.pb(14,0,null,null,2,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),t.pb(15,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Cb(-1,null,[" \u4eac\u90fd\u5927\u5b66\u306e\u8d77\u6e90\u306f\u6587\u4e45\u5143\u5e748\u670816\u65e5\uff081861\u5e749\u670820\u65e5\uff09\u306b\u9577\u5d0e\u306b\u8a2d\u7acb\u3055\u308c\u305f\u9577\u5d0e\u990a\u751f\u6240\uff08\u305d\u306e\u5f8c\u3001\u9577\u5d0e\u7cbe\u5f97\u9928\u3078\u6539\u79f0\uff09\u307e\u3067\u9061\u308b\u3002 \u9577\u5d0e\u7cbe\u5f97\u9928\u306e\u7406\u5316\u5b66\u90e8\u9580\u306f\u3001\u5f53\u521d\u306f\u6c5f\u6238\u306b\u3042\u3063\u305f\u958b\u6210\u6240\uff08\u73fe\u5728\u306e\u6771\u4eac\u5927\u5b66\uff09\u3078\u300c\u7406\u5316\u5b66\u6821\u300d\u3068\u3057\u3066\u79fb\u8a2d\u3059\u308b\u3053\u3068\u306b\u306a\u3063\u3066\u3044\u305f\u304c\u3001\u660e\u6cbb\u7dad\u65b0\u306e\u6df7\u4e71\u3067\u5b9f\u73fe\u3057\u306a\u304b\u3063\u305f\u3002 "])),(l()(),t.pb(17,0,null,null,6,"div",[["class","row my-3"]],null,null,null,null,null)),(l()(),t.pb(18,0,null,null,2,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),t.pb(19,0,null,null,1,"button",[["class","btn btn-outline-secondary btn-block"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.gotoPage1()&&t),t},null,null)),(l()(),t.Cb(-1,null,[" Page 1 \u3078 "])),(l()(),t.pb(21,0,null,null,2,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),t.pb(22,0,null,null,1,"button",[["class","btn btn-outline-secondary btn-block"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.gotoPage3()&&t),t},null,null)),(l()(),t.Cb(-1,null,[" Page 3 \u3078 "]))],null,function(l,n){l(n,3,0,n.component.title)})}function j(l){return t.Db(0,[(l()(),t.pb(0,0,null,null,1,"app-page2",[],null,null,null,A,E)),t.ob(1,114688,null,0,$,[N.i,g],null,null)],function(l,n){l(n,1,0)},null)}var F=t.lb("app-page2",$,j,{},{},[]),R=function(){function l(l,n){this.tabsetManager=n,this.title=T.a.functionId.page3,l.setTitle(this.title)}return l.prototype.ngOnInit=function(){},l.prototype.gotoPage1=function(){this.tabsetManager.addNewTabIfNotExist(T.a.functionId.page1,"page1")},l.prototype.gotoPage2=function(){this.tabsetManager.addNewTabIfNotExist(T.a.functionId.page2,"page2")},l}(),W=t.nb({encapsulation:0,styles:[[""]],data:{}});function V(l){return t.Db(0,[(l()(),t.pb(0,0,null,null,3,"div",[["class","row mb-5"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,2,"div",[["class","col"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),t.Cb(3,null,[" "," "])),(l()(),t.pb(4,0,null,null,5,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,4,"div",[["class","col"]],null,null,null,null,null)),(l()(),t.pb(6,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),t.pb(7,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Cb(-1,null,["\u30d5\u30e9\u30a4\u30c9\u30dd\u30c6\u30c8"])),(l()(),t.Cb(-1,null,["\u306f\u3001\u30b8\u30e3\u30ac\u30a4\u30e2\u3092\u98df\u3079\u3084\u3059\u3044\u5927\u304d\u3055\u306b\u5207\u3063\u3066\u3001\u6cb9\u3067\u63da\u3052\u305f\u6599\u7406\u3067\u3042\u308b\u3002 \u65e5\u672c\u3067\u306f\u30dd\u30c6\u30c8\u30d5\u30e9\u30a4\u3068\u547c\u3076\u3053\u3068\u3082\u3042\u308b\u3002 "])),(l()(),t.pb(10,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(11,0,null,null,1,"div",[["class","col-4"]],null,null,null,null,null)),(l()(),t.Cb(-1,null,[" \u30d9\u30eb\u30ae\u30fc\u306f\u30d5\u30ea\u30c3\u30c4\uff08\u30d5\u30e9\u30a4\u30c9\u30dd\u30c6\u30c8\uff09\u767a\u7965\u306e\u5730\u3092\u79f0\u3057\u3066\u304a\u308a\u3001 \u30d6\u30eb\u30c3\u30d8\uff08\u30d6\u30eb\u30fc\u30b8\u30e5\uff09\u306b\u306f\u30d5\u30ea\u30c3\u30c4\u535a\u7269\u9928\u304c\u3042\u308b\u3002 17\u4e16\u7d00\u3001\u30ca\u30df\u30e5\u30fc\u30eb\u3067\u9b5a\u306b\u4e0d\u6f01\u306b\u56f0\u3063\u305f\u4f4f\u6c11\u304c\u30b8\u30e3\u30ac\u30a4\u30e2\u3092\u63da\u3052\u3066\u98df\u3079\u305f\u3053\u3068\u304c\u8d77\u6e90\u3068\u540c\u56fd\u3067\u306f\u4f1d\u3048\u3089\u308c\u3066\u3044\u308b\u3002 "])),(l()(),t.pb(13,0,null,null,1,"div",[["class","col-4"]],null,null,null,null,null)),(l()(),t.Cb(-1,null,[" \u5bb6\u5ead\u7528\u306e\u30d5\u30e9\u30a4\u30c9\u30dd\u30c6\u30c8\u7528\u306e\u6cb9\u3084\u3001\u30dd\u30c6\u30c8\u3068\u6cb9\u3092\u5165\u308c\u3066\u624b\u8efd\u306b\u63da\u3052\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u8abf\u7406\u5668\u5177\u306a\u3069\u3082\u6bd4\u8f03\u7684\u666e\u53ca\u3057\u3066\u3044\u308b\u3002 \u30d9\u30eb\u30ae\u30fc\u306e\u4e00\u822c\u5bb6\u5ead\u306f\u96fb\u6c17\u30d5\u30e9\u30a4\u30e4\u30fc\u3092\u9ad8\u3044\u5272\u5408\u3067\u5e38\u5099\u3057\u3066\u3044\u308b\u3002 "])),(l()(),t.pb(15,0,null,null,1,"div",[["class","col-4"]],null,null,null,null,null)),(l()(),t.Cb(-1,null,[" \u30aa\u30e9\u30f3\u30c0\u3067\u306f\u57fa\u672c\u7684\u306b\u30dd\u30c6\u30c8\u306f\u591c\u98df\u3084\u663c\u98df\u3068\u3044\u3063\u305f\u65e5\u5e38\u751f\u6d3b\u3067\u98df\u3079\u3089\u308c\u3066\u3044\u308b\u3002\u5b9f\u969b\u306b\u30dd\u30c6\u30c8\u306f\u5e97\u3067\u8cb7\u3046\u306e\u3060\u304c\u3001\u65e5\u672c\u306e\u3088\u3046\u306b\u3001\u6cb9\u3092\u30d5\u30e9\u30a4\u30d1\u30f3\u306b\u5165\u308c\u3066\u6c5a\u3059\u3053\u3068\u304c\u306a\u304f\u3001\u30dd\u30c6\u30c8\u3092\u63da\u3052\u308b\u30d5\u30e9\u30a4\u30e4\u30fc\u304c\u3042\u308b\u3002 "])),(l()(),t.pb(17,0,null,null,6,"div",[["class","row my-3"]],null,null,null,null,null)),(l()(),t.pb(18,0,null,null,2,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),t.pb(19,0,null,null,1,"button",[["class","btn btn-outline-secondary btn-block"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.gotoPage1()&&t),t},null,null)),(l()(),t.Cb(-1,null,[" Page 1 \u3078 "])),(l()(),t.pb(21,0,null,null,2,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),t.pb(22,0,null,null,1,"button",[["class","btn btn-outline-secondary btn-block"],["type","button"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.gotoPage2()&&t),t},null,null)),(l()(),t.Cb(-1,null,[" Page 2 \u3078 "]))],null,function(l,n){l(n,3,0,n.component.title)})}function H(l){return t.Db(0,[(l()(),t.pb(0,0,null,null,1,"app-page3",[],null,null,null,V,W)),t.ob(1,114688,null,0,R,[N.i,g],null,null)],function(l,n){l(n,1,0)},null)}var q=t.lb("app-page3",R,H,{},{},[]),z=function(){return function(){}}();u.d(n,"SubModuleNgFactory",function(){return U});var U=t.mb(e,[],function(l){return t.vb([t.wb(512,t.j,t.bb,[[8,[o.a,I,S,F,q]],[3,t.j],t.x]),t.wb(4608,a.l,a.k,[t.u,[2,a.r]]),t.wb(1073742336,a.b,a.b,[]),t.wb(1073742336,p.m,p.m,[[2,p.s],[2,p.k]]),t.wb(1073742336,z,z,[]),t.wb(1073742336,i.c,i.c,[]),t.wb(1073742336,e,e,[]),t.wb(1024,p.i,function(){return[[{path:"",component:h,children:[{path:"page1",component:M},{path:"page2",component:$},{path:"page3",component:R}]}]]},[])])})},"4fRq":function(l,n){var u="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(u){var t=new Uint8Array(16);l.exports=function(){return u(t),t}}else{var e=new Array(16);l.exports=function(){for(var l,n=0;n<16;n++)0==(3&n)&&(l=4294967296*Math.random()),e[n]=l>>>((3&n)<<3)&255;return e}}},EcEN:function(l,n,u){var t=u("xDdU"),e=u("xk4V"),o=e;o.v1=t,o.v4=e,l.exports=o},I2ZF:function(l,n){for(var u=[],t=0;t<256;++t)u[t]=(t+256).toString(16).substr(1);l.exports=function(l,n){var t=n||0;return[u[l[t++]],u[l[t++]],u[l[t++]],u[l[t++]],"-",u[l[t++]],u[l[t++]],"-",u[l[t++]],u[l[t++]],"-",u[l[t++]],u[l[t++]],"-",u[l[t++]],u[l[t++]],u[l[t++]],u[l[t++]],u[l[t++]],u[l[t++]]].join("")}},xDdU:function(l,n,u){var t,e,o=u("4fRq"),i=u("I2ZF"),a=0,c=0;l.exports=function(l,n,u){var s=n&&u||0,r=n||[],b=(l=l||{}).node||t,p=void 0!==l.clockseq?l.clockseq:e;if(null==b||null==p){var d=o();null==b&&(b=t=[1|d[0],d[1],d[2],d[3],d[4],d[5]]),null==p&&(p=e=16383&(d[6]<<8|d[7]))}var f=void 0!==l.msecs?l.msecs:(new Date).getTime(),g=void 0!==l.nsecs?l.nsecs:c+1,v=f-a+(g-c)/1e4;if(v<0&&void 0===l.clockseq&&(p=p+1&16383),(v<0||f>a)&&void 0===l.nsecs&&(g=0),g>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");a=f,c=g,e=p;var m=(1e4*(268435455&(f+=122192928e5))+g)%4294967296;r[s++]=m>>>24&255,r[s++]=m>>>16&255,r[s++]=m>>>8&255,r[s++]=255&m;var w=f/4294967296*1e4&268435455;r[s++]=w>>>8&255,r[s++]=255&w,r[s++]=w>>>24&15|16,r[s++]=w>>>16&255,r[s++]=p>>>8|128,r[s++]=255&p;for(var h=0;h<6;++h)r[s+h]=b[h];return n||i(r)}},xk4V:function(l,n,u){var t=u("4fRq"),e=u("I2ZF");l.exports=function(l,n,u){var o=n&&u||0;"string"==typeof l&&(n="binary"===l?new Array(16):null,l=null);var i=(l=l||{}).random||(l.rng||t)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,n)for(var a=0;a<16;++a)n[o+a]=i[a];return n||e(i)}}}]);