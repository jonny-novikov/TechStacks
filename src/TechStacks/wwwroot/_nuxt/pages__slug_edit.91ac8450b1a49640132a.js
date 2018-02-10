webpackJsonp([3],{"2sSu":function(e,t,s){"use strict";var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",[e.techstack?s("TechStackEdit",{attrs:{techstack:e.techstack}}):e._e(),e.techstack||e.loading?e._e():s("v-card",[s("v-alert",{staticStyle:{"min-width":"800px","text-align":"center"},attrs:{color:"error subheading",icon:"warning",value:!0}},[e._v("\n        TechStack '"+e._s(e.slug)+"' was not found\n      ")]),s("v-card-actions",{staticStyle:{"text-align":"center"}},[s("v-flex",[s("v-btn",{attrs:{to:"/stacks",exact:""}},[e._v("View TechStacks")]),s("v-btn",{attrs:{to:"/stacks/new",color:"primary"}},[e._v("Add TechStack")])],1)],1)],1)],1)};r._withStripped=!0;var n={render:r,staticRenderFns:[]};t.a=n},"5c1x":function(e,t,s){"use strict";var r=s("BpKR"),n=s("pQMr"),a=!1;var i=function(e){a||s("FJw5")},c=s("VU/8")(r.a,n.a,!1,i,null,null);c.options.__file="src\\components\\TechStackEdit.vue",t.a=c.exports},BVBb:function(e,t,s){"use strict";var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",[s("img",{ref:"imageUrl",staticStyle:{cursor:"pointer"},attrs:{src:e.imageUrl},on:{click:e.onPickFile}})]),s("div",[e.imageUrl?s("v-btn",{staticClass:"error",attrs:{raised:""},on:{click:e.removeFile}},[e._v("\n            "+e._s(e.removeLabel)+"\n        ")]):s("v-btn",{attrs:{raised:""},on:{click:e.onPickFile}},[e._v("\n            "+e._s(e.selectLabel)+"\n        ")]),s("input",{ref:"image",attrs:{type:"file",name:"image",accept:e.accept},on:{change:e.onFilePicked}})],1)])};r._withStripped=!0;var n={render:r,staticRenderFns:[]};t.a=n},BpKR:function(e,t,s){"use strict";var r=s("woOf"),n=s.n(r),a=s("Xxa5"),i=s.n(a),c=s("fZjL"),o=s.n(c),l=s("exGp"),u=s.n(l),d=s("Dd8w"),h=s.n(d),v=s("TxlB"),p=s("NYxO"),m=s("5YJS"),f=s("kRG6"),g=(s.n(f),s("J9uk")),x={name:"",vendorName:"",appUrl:"",description:"",details:"",isLocked:!1,screenshot:null,screenshotUrl:"",technologyIds:[]};t.a={props:["techstack"],components:{FileInput:v.a},computed:h()({canChange:function(){return!this.techstack||this.user.userAuthId==this.techstack.ownerId||this.isAdmin}},Object(p.mapGetters)(["loading","isAuthenticated","user","isAdmin"])),methods:{onFileChange:function(e){this.screenshot=e},submit:function(){var e=u()(i.a.mark(function e(){var t,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.$refs.form.validate()){e.next=23;break}if(e.prev=1,this.$store.commit("loading",!0),t=f.toObject.call(this,o()(x)),this.techstack){e.next=10;break}return e.next=7,Object(g.d)(t,this.screenshot);case 7:e.t0=e.sent,e.next=13;break;case 10:return e.next=12,Object(g.y)(h()({},t,{id:this.id}),this.screenshot);case 12:e.t0=e.sent;case 13:s=e.t0,this.$router.push("/"+s.slug),e.next=20;break;case 17:e.prev=17,e.t1=e.catch(1),this.responseStatus=e.t1.responseStatus||e.t1;case 20:return e.prev=20,this.$store.commit("loading",!1),e.finish(20);case 23:case"end":return e.stop()}},e,this,[[1,17,20,23]])}));return function(){return e.apply(this,arguments)}}(),remove:function(){var e=u()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.$store.commit("loading",!0),e.next=4,Object(g.f)(this.id);case 4:return this.$store.commit("removeTechStack",this.techstack),e.next=7,this.$router.push("/stacks");case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),this.responseStatus=e.t0.responseStatus||e.t0;case 12:return e.prev=12,this.$store.commit("loading",!1),e.finish(12);case 15:case"end":return e.stop()}},e,this,[[0,9,12,15]])}));return function(){return e.apply(this,arguments)}}(),loadVersion:function(e){n()(this,e,{id:this.id})},errorResponse:f.errorResponse,dateFmtHM:f.dateFmtHM},mounted:function(){var e=u()(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.techstack){e.next=8;break}return this.title="Edit "+this.techstack.name,this.actionLabel="Update TechStack",n()(this,this.techstack),this.technologyIds=(this.techstack.technologyChoices||[]).map(function(e){return e.technologyId}),e.next=7,Object(g.n)(this.techstack.slug);case 7:this.previousVersions=e.sent;case 8:return e.next=10,Object(g.q)();case 10:this.technologySelectItems=e.sent;case 11:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),data:function(){return h()({},x,{title:"Add a new TechStack",actionLabel:"Add TechStack",valid:!0,allowDelete:!1,responseStatus:null,nameCounter:m.a,nameRules:m.b,urlRules:m.e,urlCounter:m.d,technologySelectItems:[],previousVersions:[]})}}},DE3n:function(e,t,s){(e.exports=s("FZ+f")(!1)).push([e.i,"input[type=file][data-v-036beace]{position:absolute;left:-99999px}",""])},FI1S:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("ityF"),n=s("2sSu"),a=s("VU/8")(r.a,n.a,!1,null,null,null);a.options.__file="src\\pages\\_slug\\edit.vue",t.default=a.exports},FJw5:function(e,t,s){var r=s("pQ6z");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);s("rjj0")("ec7300ba",r,!1)},TxlB:function(e,t,s){"use strict";var r=s("z6fj"),n=s("BVBb"),a=!1;var i=function(e){a||s("ut45")},c=s("VU/8")(r.a,n.a,!1,i,"data-v-036beace",null);c.options.__file="src\\components\\FileInput.vue",t.a=c.exports},ityF:function(e,t,s){"use strict";var r=s("Xxa5"),n=s.n(r),a=s("exGp"),i=s.n(a),c=s("Dd8w"),o=s.n(c),l=s("5c1x"),u=s("NYxO");t.a={components:{TechStackEdit:l.a},computed:o()({slug:function(){return this.$route.params.slug}},Object(u.mapGetters)(["loading","getTechnologyStack","isAuthenticated"])),mounted:function(){var e=i()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("getTechnologyStack",this.slug);case 2:this.techstack=this.getTechnologyStack(this.slug);case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),data:function(){return{techstack:null}}}},pQ6z:function(e,t,s){(e.exports=s("FZ+f")(!1)).push([e.i,".image-upload IMG{max-width:300px;max-height:150px}",""])},pQMr:function(e,t,s){"use strict";var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",[e.isAuthenticated?e._e():s("v-layout",{attrs:{fluid:""}},[s("v-flex",{staticClass:"headline",staticStyle:{"text-align":"center"}},[e._v("Authentication is Required")])],1),e.isAuthenticated?s("v-layout",{attrs:{fluid:""}},[s("v-flex",{class:e.loading?"loading-body":"",attrs:{sm10:"","offset-sm1":""}},[s("v-toolbar",[s("v-toolbar-title",{staticClass:"headline"},[e._v(e._s(e.title))]),s("v-spacer"),e.previousVersions.length>0?s("v-toolbar-items",[s("v-menu",{attrs:{"offset-y":""}},[s("v-btn",{attrs:{slot:"activator",flat:""},slot:"activator"},[e._v("\r\n                    Previous Versions  \r\n                    "),s("v-icon",[e._v("reply")])],1),s("v-list",e._l(e.previousVersions,function(t){return s("v-list-tile",{key:t.id,on:{click:function(s){e.loadVersion(t)}}},[s("v-list-tile-title",[e._v("Modified by "+e._s(t.lastModifiedBy)+" at "+e._s(e.dateFmtHM(new Date(t.lastModified))))])],1)}))],1)],1):e._e()],1),s("v-card",[s("v-card-title",{attrs:{"primary-title":""}},[s("v-form",{ref:"form",staticStyle:{width:"100%"},attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[s("v-container",[s("v-alert",{attrs:{outline:"",color:"error",icon:"warning",value:e.errorResponse()}},[e._v(e._s(e.errorResponse()))]),s("v-layout",[s("v-flex",{attrs:{xs6:""}},[s("v-text-field",{attrs:{label:"Stack Name",required:"",rules:e.nameRules,counter:e.nameCounter,"error-messages":e.errorResponse("name")},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),s("v-text-field",{attrs:{label:"Vendor Name",required:"",rules:e.nameRules,counter:e.nameCounter,"error-messages":e.errorResponse("vendorName")},model:{value:e.vendorName,callback:function(t){e.vendorName=t},expression:"vendorName"}}),s("v-text-field",{attrs:{label:"App URL",required:"",rules:e.urlRules,counter:e.urlCounter,"error-messages":e.errorResponse("appUrl")},model:{value:e.appUrl,callback:function(t){e.appUrl=t},expression:"appUrl"}})],1),s("v-flex",{staticClass:"image-upload",staticStyle:{"text-align":"right"},attrs:{xs6:""}},[s("v-layout",{staticStyle:{"text-align":"center",margin:"1em auto"}},[s("v-alert",{attrs:{outline:"",color:"error",icon:"warning",value:e.errorResponse("screenshotUrl")}},[e._v(e._s(e.errorResponse("screenshotUrl")))])],1),s("small",{staticStyle:{"margin-right":"2em",color:"#999"}},[e._v("(minimum 860 x 690)")]),s("file-input",{ref:"fileScreenshot",attrs:{value:e.screenshotUrl,accept:"image/*",selectLabel:"Add Screenshot"},on:{input:e.onFileChange}})],1)],1),s("v-select",{attrs:{label:"Select Technologies",autocomplete:"",loading:e.loading,multiple:"",chips:"",required:"",items:e.technologySelectItems,rules:[function(){return e.technologyIds.length>0||"You must choose at least one"}]},model:{value:e.technologyIds,callback:function(t){e.technologyIds=t},expression:"technologyIds"}}),s("v-text-field",{attrs:{label:"Summary",counter:740,"multi-line":"",rows:6,required:"",rules:[function(e){return!!e||"Required"},function(e){return e.length>=50||"Min 50 characters"},function(e){return e.length<=740||"Max 740 characters"}],"error-messages":e.errorResponse("description")},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}}),s("v-text-field",{attrs:{label:"details (markdown)","multi-line":"",rows:20,counter:4e3,rules:[function(e){return e.length<=4e3||"Max 4000 characters"}],"error-messages":e.errorResponse("details")},model:{value:e.details,callback:function(t){e.details=t},expression:"details"}}),s("v-checkbox",{directives:[{name:"show",rawName:"v-show",value:e.canChange,expression:"canChange"}],attrs:{label:"Prevent others from editing this Technology?"},model:{value:e.isLocked,callback:function(t){e.isLocked=t},expression:"isLocked"}})],1)],1)],1),s("v-card-actions",{staticStyle:{"text-align":"center"}},[s("v-layout",[s("v-flex",[s("v-btn",{attrs:{large:"",disabled:!e.valid||e.loading},on:{click:e.submit}},[e._v(e._s(e.actionLabel))])],1),e.techstack&&(e.techstack.ownerId==e.user.userAuthId||e.isAdmin)?s("v-flex",{staticStyle:{margin:".5em -3em 0 3em"},attrs:{xs1:""}},[s("v-checkbox",{attrs:{large:"",label:"confirm"},model:{value:e.allowDelete,callback:function(t){e.allowDelete=t},expression:"allowDelete"}})],1):e._e(),e.techstack&&(e.techstack.ownerId==e.user.userAuthId||e.isAdmin)?s("v-flex",{attrs:{xs5:""}},[s("v-btn",{staticClass:"white--text",attrs:{large:"",disabled:!e.allowDelete,color:"red"},on:{click:e.remove}},[e._v("\r\n                      Delete TechStack\r\n                    ")])],1):e._e()],1)],1)],1)],1)],1):e._e()],1)};r._withStripped=!0;var n={render:r,staticRenderFns:[]};t.a=n},ut45:function(e,t,s){var r=s("DE3n");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);s("rjj0")("9fcc69cc",r,!1)},z6fj:function(e,t,s){"use strict";t.a={props:{value:{type:String},accept:{type:String,default:"*"},selectLabel:{type:String,default:"Select an image"},removeLabel:{type:String,default:"Remove"}},data:function(){return{imageUrl:""}},watch:{value:function(e){this.imageUrl=e}},mounted:function(){this.imageUrl=this.value},methods:{onPickFile:function(){this.$refs.image.click()},onFilePicked:function(e){var t=this,s=e.target.files||e.dataTransfer.files;if(s&&s[0]){var r=s[0].name;if(r&&r.lastIndexOf(".")<=0)return;var n=new FileReader;n.addEventListener("load",function(){t.imageUrl=n.result}),n.readAsDataURL(s[0]),this.$emit("input",s[0])}},removeFile:function(){this.imageUrl=""}}}}});