webpackJsonp([0],{"+6Bu":function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){var n={};for(var s in t)e.indexOf(s)>=0||Object.prototype.hasOwnProperty.call(t,s)&&(n[s]=t[s]);return n}},"/oVj":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".post-info{opacity:.6;font-size:11px;white-space:nowrap}",""])},"0XSc":function(t,e,n){"use strict";var s=n("BJtK"),r=n("6Uta"),i=n("VU/8")(s.a,r.a,!1,null,null,null);i.options.__file="src\\components\\ReportDialog.vue",e.a=i.exports},"2Mzs":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.organization?n("div",{staticClass:"post-info",staticStyle:{"text-transform":"lowercase"}},[t._v("submitted "+t._s(t.fromNow(t.post.created))+" by\n    "),n("nuxt-link",{attrs:{to:t.routes.user(t.post.createdBy)}},[t._v("@"+t._s(t.post.createdBy))]),t._v("\n    to "),n("nuxt-link",{attrs:{to:t.toUrl}},[t._v(t._s(t.toLabel))]),(t.post.technologyIds||[]).length>0&&t.technologyTiers.length>0?n("span",[t._v("\n      with\n      "),t._l(t.post.technologyIds,function(e){return n("nuxt-link",{key:e,staticClass:"tag",attrs:{to:t.routes.techTag(t.getTechnologySlug(e),t.getTechnologyOrganization(e))}},[t._v("\n      "+t._s(t.getTechnologySlug(e))+"\n      ")])})],2):t._e()],1):t._e()};s._withStripped=!0;var r={render:s,staticRenderFns:[]};e.a=r},"2d4h":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"news"},[!t.organization&&t.loading?n("h2",{staticClass:"svg-icon loading"},[t._v("Loading "+t._s(t.slug)+" News ...")]):t._e(),t.notFound?n("h2",[n("v-icon",{attrs:{color:"red"}},[t._v("error_outline")]),t._v(" '"+t._s(t.slug)+"' was not found")],1):t.organization?n("v-layout",{attrs:{column:""}},[n("v-flex",[n("v-layout",[t.canPostToOrganization()?n("div",[t.add?t._e():n("v-btn",{attrs:{fab:"",dark:"",small:"",color:"pink",title:"Submit New Post"},on:{click:t.open}},[n("v-icon",{attrs:{dark:""}},[t._v("add")])],1),t.add?n("v-btn",{attrs:{fab:"",dark:"",small:"",color:"pink",title:"Hide"},on:{click:t.close}},[n("v-icon",{attrs:{dark:""}},[t._v("remove")])],1):t._e()],1):n("div",[n("v-btn",{attrs:{fab:"",dark:"",small:"",color:"grey",title:"You are not permitted to submit posts"}},[n("v-icon",{attrs:{dark:""}},[t._v("add")])],1)],1),n("h1",[n("span",{staticClass:"parent-organization"},[n("nuxt-link",{staticStyle:{color:"#333"},attrs:{to:t.routes.homeNews}},[t._v("news ")]),n("em",[t._v("/")])],1),"category"==t.view?n("nuxt-link",{staticStyle:{color:"#333"},attrs:{to:t.routes.organizationNews(t.organization.slug)}},[t._v("\n                    "+t._s(t.organization.name)+"\n                  ")]):n("a",{staticStyle:{color:"#333"},on:{click:function(e){e.preventDefault(),t.resetQuery()}}},[t._v("\n                    "+t._s(t.organization.name)+"\n                  ")])],1),n("v-spacer"),n("span",{staticClass:"org-links"},["TechnologyStack"==t.organization.refSource?n("nuxt-link",{attrs:{to:t.routes.stack(t.organization.slug)}},[t._v(t._s(t.organization.name)+"'s TechStack")]):t._e(),"Technology"==t.organization.refSource?n("nuxt-link",{attrs:{to:t.routes.tech(t.getTechnologySlug(t.organization.refId))}},[t._v("TechStacks using "+t._s(t.organization.name))]):t._e(),t.canManageOrganization()?n("nuxt-link",{attrs:{to:t.routes.organization(t.organization.slug)}},[t._v("manage")]):t._e()],1),n("v-btn-toggle",{staticStyle:{"margin-right":"5px"},model:{value:t.all,callback:function(e){t.all=e},expression:"all"}},[n("v-btn",[t._v("all")])],1),t.browsablePostTypes.length>0?n("v-btn-toggle",{attrs:{multiple:""},model:{value:t.filterTypes,callback:function(e){t.filterTypes=e},expression:"filterTypes"}},t._l(t.visibleTypeLabels,function(e){return n("v-btn",{key:e},[t._v(t._s(e))])})):t._e()],1)],1),t.add?n("v-flex",[n("PostEdit",{attrs:{org:t.organization,initialTypes:t.types,initialCategoryId:t.categoryId},on:{done:t.postDone}})],1):t._e(),t.latestOrganizationPosts&&t.latestOrganizationPosts.length>0?n("v-flex",{staticStyle:{margin:"1em 0"}},[n("v-layout",[n("PostsList",{attrs:{posts:t.latestOrganizationPosts,page:t.page}}),n("v-flex",{staticStyle:{"max-width":"300px","margin-left":"1em"}},[n("MembersInfo",{attrs:{organization:t.organization},on:{done:t.memberDone}}),"category"!=t.view&&t.organization.categories.length>1?n("div",[n("v-toolbar",[n("v-toolbar-title",[t._v("Categories")])],1),t._l(t.organization.categories,function(e){return n("v-card",{key:e.slug,class:["category",{highlight:t.c==e.slug}]},[n("v-card-title",{staticStyle:{padding:"10px"}},[n("a",{on:{click:function(n){n.preventDefault(),t.changeCategory(e)}}},[t._v("\n                        "+t._s(e.name)+"\n                      ")])])],1)})],2):t._e()],1)],1),n("v-flex",{staticStyle:{"margin-top":"5px"}},[t.page>0?n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.loadPage(t.page-1)}}},[n("v-icon",[t._v("chevron_left")]),t._v("\n                prev\n              ")],1):t._e(),t.hasMore?n("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.loadPage(t.page+1)}}},[t._v("\n                more\n                "),n("v-icon",[t._v("chevron_right")])],1):t._e()],1)],1):t.loading?t._e():n("v-flex",[n("v-alert",{staticStyle:{"margin-top":"1em"},attrs:{color:"info",outline:"",value:!0}},[t._v("\n            No Results matched your Query\n          ")])],1)],1):t._e()],1)};s._withStripped=!0;var r={render:s,staticRenderFns:[]};e.a=r},"3wY3":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",[t._l(t.posts,function(e,s){return n("v-card",{key:e.id,class:["post",t.votedClass(e.id)]},[n("v-card-title",[n("v-container",{attrs:{fluid:"","grid-list-sm":""}},[n("v-layout",{attrs:{row:"","align-center":""}},[n("v-flex",{style:{maxWidth:t.maxWidth}},[n("span",{staticClass:"rank"},[t._v(t._s(t.startIndex+s))])]),n("v-flex",{staticStyle:{"max-width":"52px"}},[n("v-layout",{staticStyle:{"text-align":"center"},attrs:{column:""}},[n("v-btn",{staticClass:"vote-btn up",attrs:{icon:"",disabled:!t.canVotePost(e)},on:{click:function(n){t.votePost(e,1)}}},[n("v-icon",[t._v("arrow_drop_up")])],1),n("h4",{staticClass:"votes"},[t._v(t._s(t.postKarma(e)))]),n("v-btn",{staticClass:"vote-btn down",attrs:{icon:"",disabled:!t.canVotePost(e)},on:{click:function(n){t.votePost(e,-1)}}},[n("v-icon",[t._v("arrow_drop_down")])],1)],1)],1),n("v-flex",{staticClass:"post-body"},[n("v-layout",{attrs:{column:""}},[e.url?t._e():n("nuxt-link",{staticClass:"post-link",attrs:{to:t.routes.post(e.id,e.slug)}},[t._v(t._s(e.title))]),e.url?n("a",{staticClass:"post-link external",attrs:{href:e.url}},[t._v(t._s(e.title))]):t._e(),n("PostInfo",{attrs:{organization:t.getOrganization(e.organizationId),post:e}}),n("div",{staticClass:"post-actions"},[n("nuxt-link",{attrs:{to:t.routes.post(e.id,e.slug)}},[t._v(t._s(e.commentsCount||"")+" "+t._s(e.commentsCount>1?"comments":"comment"))]),n("a",{on:{click:function(n){t.hidePost(e.id)}}},[t._v("hide")]),t.canFavoritePost(e)?n("a",{on:{click:function(n){t.favoritePost(e)}}},[t._v(t._s(t.favoriteLabel(e)))]):t._e(),t.canReportPost(e)?n("a",{on:{click:function(n){t.reportPostId=e.id}}},[t._v("report")]):t._e()],1)],1)],1)],1)],1)],1)],1)}),t.reportPostId?n("ReportDialog",{attrs:{postId:t.reportPostId},on:{close:function(e){t.reportPostId=null}}}):t._e()],2)};s._withStripped=!0;var r={render:s,staticRenderFns:[]};e.a=r},"4wis":function(t,e,n){"use strict";var s=n("X2Aw"),r=n("0XSc"),i=(n("NYxO"),n("u1Qv")),o=n("C/un");e.a={components:{PostInfo:s.a,ReportDialog:r.a},props:["posts","page"],computed:{startIndex:function(){return 1+this.page*o.a},maxWidth:function(){return 12*(this.startIndex+o.a).toString().length+"px"}},methods:{getOrganization:function(t){return this.$store.getters.getOrganization(t)},postKarma:o.v,votedClass:o.A,votePost:o.y,favoritePost:o.p,favoriteLabel:o.o,hidePost:o.q,canVotePost:o.m,canFavoritePost:o.c,canReportPost:o.i},data:function(){return{routes:i.a,reportPostId:null}}}},"6Uta":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"700px"},model:{value:t.open,callback:function(e){t.open=e},expression:"open"}},[n("v-card",[n("v-card-title",[t._v("\n        Please tell us what's wrong with this post?\n    ")]),n("v-card-text",[n("v-form",{ref:"form",staticStyle:{padding:"0 0 0 2em"},attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-alert",{attrs:{outline:"",color:"error",icon:"warning",value:t.errorResponse()}},[t._v(t._s(t.errorResponse()))]),n("v-radio-group",{attrs:{rules:[function(t){return!!t||"Required"}],"error-messages":t.errorResponse("type")},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},t._l(t.flagTypeSelectItems,function(t){return n("v-radio",{key:t.text,attrs:{label:t.text,value:t.value}})})),n("v-text-field",{attrs:{label:"Notes",counter:400,"multi-line":"",rows:3,"error-messages":t.errorResponse("notes")},model:{value:t.notes,callback:function(e){t.notes=e},expression:"notes"}})],1)],1),n("v-card-actions",[n("v-layout",[n("v-flex",{staticStyle:{"text-align":"center"}},[n("v-btn",{attrs:{flat:""},on:{click:function(e){e.stopPropagation(),t.close(e)}}},[t._v("Close")]),n("v-btn",{attrs:{flat:"",large:"",disabled:!t.valid,color:"primary"},on:{click:t.submit}},[t._v("\n                Submit\n            ")])],1)],1)],1)],1)],1)};s._withStripped=!0;var r={render:s,staticRenderFns:[]};e.a=r},"8rI9":function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".invite-message{color:rgba(0,0,0,.5);text-transform:lowercase}",""])},ADrC:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("User")]),t.user?n("ul",[n("li",[t._v(t._s(t.user.userAuthId)+". @"+t._s(t.user.userName)+", isAdmin: "+t._s(t.isAdmin))])]):n("p",[t._v("No User")]),n("h2",[t._v("Organization")]),t.organization?n("ul",[n("li",[t._v(t._s(t.organization.id)+". "+t._s(t.organization.name)+" ("+t._s(t.organization.slug)+")")]),t.organization.locked?n("li",[t._v("Locked "+t._s(t.organization.locked))]):t._e(),t.organization.deleted?n("li",[t._v("Deleted "+t._s(t.organization.deleted))]):t._e(),t.organization.hidden?n("li",[t._v("Hidden "+t._s(t.organization.hidden))]):t._e(),t.member?n("li",[t._v("\n            Organization Member, Moderator: "+t._s(t.member.isModerator)+", \n            Deny: "+t._s(t.deny.length>0?t.deny.join(", "):"None")+" \n        ")]):n("li",[t._v("Not an Organization Member")]),t.isOrganizationModerator?n("li",[t._v("Is Organization Moderator")]):t._e(),t.isOrganizationOwner?n("li",[t._v("Is Organization Owner")]):t._e()]):n("p",[t._v("No Organization")]),n("h2",[t._v("Post")]),t.post?n("ul",[n("li",[t._v(t._s(t.post.id)+". "+t._s(t.post.title))]),n("li",[t._v("Created "+t._s(t.post.created)+" by "+t._s(t.post.createdBy))]),n("li",[t._v("Modified "+t._s(t.post.modified)+" by "+t._s(t.post.modifiedBy))]),t.post.archived?n("li",[t._v("Archived")]):t._e(),t.post.locked?n("li",[t._v("Locked "+t._s(t.post.locked))]):t._e(),t.post.deleted?n("li",[t._v("Deleted "+t._s(t.post.deleted))]):t._e(),t.post.hidden?n("li",[t._v("Hidden "+t._s(t.post.hidden))]):t._e()]):n("p",[t._v("No Post")]),n("h2",[t._v("Comment")]),t.comment?n("ul",[n("li",[t._v(t._s(t.comment.id))]),n("li",[t._v(t._s(t.substring(t.comment.content)))]),n("li",[t._v("Created "+t._s(t.post.created)+" by "+t._s(t.post.createdBy))]),n("li",[t._v("Modified "+t._s(t.post.modified))]),t.post.deleted?n("li",[t._v("Deleted "+t._s(t.post.deleted))]):t._e(),t.post.hidden?n("li",[t._v("Hidden "+t._s(t.post.hidden))]):t._e()]):n("p",[t._v("No Comment")])])};s._withStripped=!0;var r={render:s,staticRenderFns:[]};e.a=r},Act9:function(t,e,n){var s=n("/oVj");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n("rjj0")("157c5271",s,!1)},BJtK:function(t,e,n){"use strict";var s=n("Xxa5"),r=n.n(s),i=n("exGp"),o=n.n(i),a=n("NYxO"),l=n("kRG6"),c=(n.n(l),n("J9uk"));e.a={props:{postId:{type:Number},commentId:{type:Number}},computed:Object(a.mapGetters)(["flagTypeSelectItems"]),methods:{submit:function(){var t=o()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.$refs.form.validate()){t.next=21;break}if(t.prev=1,this.$store.commit("loading",!0),!this.commentId){t.next=8;break}return t.next=6,Object(c._2)(this.postId,this.commentId,this.type,this.notes);case 6:t.next=11;break;case 8:if(!this.postId){t.next=11;break}return t.next=11,Object(c._1)(this.postId,this.type,this.notes);case 11:this.type=this.notes=null,this.close(),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),this.responseStatus=t.t0.responseStatus||t.t0;case 18:return t.prev=18,this.$store.commit("loading",!1),t.finish(18);case 21:case"end":return t.stop()}},t,this,[[1,15,18,21]])}));return function(){return t.apply(this,arguments)}}(),close:function(){this.$emit("close")},errorResponse:l.errorResponse},mounted:function(){},data:function(){return{open:!0,valid:!1,type:null,notes:null}}}},BVBb:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("img",{ref:"imageUrl",staticStyle:{cursor:"pointer"},attrs:{src:t.imageUrl},on:{click:t.onPickFile}})]),n("div",[t.imageUrl?n("v-btn",{staticClass:"error",attrs:{raised:""},on:{click:t.removeFile}},[t._v("\n            "+t._s(t.removeLabel)+"\n        ")]):n("v-btn",{attrs:{raised:""},on:{click:t.onPickFile}},[t._v("\n            "+t._s(t.selectLabel)+"\n        ")]),n("input",{ref:"image",attrs:{type:"file",name:"image",accept:t.accept},on:{change:t.onFilePicked}})],1)])};s._withStripped=!0;var r={render:s,staticRenderFns:[]};e.a=r},DE3n:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"input[type=file][data-v-036beace]{position:absolute;left:-99999px}",""])},DKpQ:function(t,e,n){"use strict";var s=n("MS25"),r=n("ajlC"),i=!1;var o=function(t){i||n("vxyC")},a=n("VU/8")(s.a,r.a,!1,o,null,null);a.options.__file="src\\components\\MembersInfo.vue",e.a=a.exports},"DV/1":function(t,e,n){"use strict";var s=function(){var t=this.$createElement;return(this._self._c||t)("NewsPosts",{attrs:{slug:this.$route.params.slug,query:this.$route.query}})};s._withStripped=!0;var r={render:s,staticRenderFns:[]};e.a=r},Gu7T:function(t,e,n){"use strict";e.__esModule=!0;var s,r=n("c/Tr"),i=(s=r)&&s.__esModule?s:{default:s};e.default=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,i.default)(t)}},MS25:function(t,e,n){"use strict";var s=n("Xxa5"),r=n.n(s),i=n("exGp"),o=n.n(i),a=n("Dd8w"),l=n.n(a),c=n("NYxO"),u=n("u1Qv"),p=n("J9uk"),d=n("kRG6");n.n(d);e.a={props:["organization"],computed:l()({errorSummary:function(){return d.errorResponseExcept.call(this,[])},owners:function(){return this.organization.owners},moderators:function(){return this.organization.moderators},membersTotal:function(){return this.organization.membersTotal},member:function(){var t=this;return this.userOrganizations.members.find(function(e){return e.organizationId==t.organization.id})},pendingInvite:function(){var t=this;return this.userOrganizations.memberInvites.find(function(e){return e.organizationId==t.organization.id})}},Object(c.mapGetters)(["loading","isAuthenticated","userId","userOrganizations"])),methods:{requestInvite:function(){var t=o()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.$store.commit("loading",!0),t.next=4,Object(p._3)(this.organization.id);case 4:this.$emit("done",!0),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),this.responseStatus=t.t0.responseStatus||t.t0;case 10:return t.prev=10,this.$store.commit("loading",!1),t.finish(10);case 13:case"end":return t.stop()}},t,this,[[0,7,10,13]])}));return function(){return t.apply(this,arguments)}}()},data:function(){return{routes:u.a,responseStatus:null}}}},NlUG:function(t,e,n){"use strict";var s=n("Ntw/"),r=n("ADrC"),i=n("VU/8")(s.a,r.a,!1,null,null,null);i.options.__file="src\\components\\DebugInfo.vue",e.a=i.exports},"Ntw/":function(t,e,n){"use strict";var s=n("Xxa5"),r=n.n(s),i=n("exGp"),o=n.n(i),a=n("Dd8w"),l=n.n(a),c=n("NYxO");e.a={props:["post","comment"],computed:l()({member:function(){return this.organizationMember},deny:function(){return[this.member.denyAll?"All":"",this.member.denyPosts?"Posts":"",this.member.denyComments?"Comments":""].filter(function(t){return t})}},Object(c.mapGetters)(["user","organization","isAdmin","organizationMember","isOrganizationModerator","isOrganizationOwner"])),methods:{substring:function(t){return(t||"").substring(0,50)}},mounted:function(){var t=o()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},TgSk:function(t,e,n){"use strict";var s=n("woOf"),r=n.n(s),i=n("Gu7T"),o=n.n(i),a=n("fZjL"),l=n.n(a),c=n("Xxa5"),u=n.n(c),p=n("exGp"),d=n.n(p),v=n("Dd8w"),h=n.n(v),g=n("TxlB"),f=n("NYxO"),m=n("kRG6"),_=(n.n(m),n("J9uk")),y=n("5YJS"),x=n("C/un"),b={organizationId:null,categoryId:null,type:null,title:null,url:null,imageUrl:null,content:null,locked:null,lockedBy:null,technologyIds:[]};e.a={components:{FileInput:g.a},props:["org","initialTypes","initialCategoryId","post"],computed:h()({edit:function(){return!!this.post}},Object(f.mapGetters)(["loading","isAuthenticated","isOrganizationModerator","allowablePostTypes","allowablePostTypeSelectItems","technologySelectItems","categorySelectItems"])),methods:{onFileChange:function(t){this.image=t},reset:function(t,e){this.responseStatus=this.title=this.content=this.url=this.imageUrl=this.image=null,this.technologyIds=[],this.$emit("done",t,e)},lockPost:function(){var t=d()(u.a.mark(function t(e){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(_.Q)(this.post.id,e);case 2:this.reset(!0,!0);case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),deletePost:function(){var t=d()(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(_.q)(this.post.id);case 2:this.reset(!0,!0);case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),submit:function(){var t=d()(u.a.mark(function t(){var e;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.$refs.form.validate()){t.next=23;break}if(t.prev=1,this.$store.commit("loading",!0),e=m.toObject.call(this,l()(b)),!this.edit){t.next=10;break}return t.next=7,Object(_._8)(h()({},e,{id:this.post.id}),this.image);case 7:t.t0=t.sent,t.next=13;break;case 10:return t.next=12,Object(_.k)(e,this.image);case 12:t.t0=t.sent;case 13:t.t0,this.reset(!0),t.next=20;break;case 17:t.prev=17,t.t1=t.catch(1),this.responseStatus=t.t1.responseStatus||t.t1;case 20:return t.prev=20,this.$store.commit("loading",!1),t.finish(20);case 23:case"end":return t.stop()}},t,this,[[1,17,20,23]])}));return function(){return t.apply(this,arguments)}}(),canUpdatePost:x.k,errorResponse:m.errorResponse},mounted:function(){var t=d()(u.a.mark(function t(){var e,n=this;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=[].concat(o()((this.initialTypes||"").split(",")),["Post"]),this.type=e.filter(function(t){return t&&n.allowablePostTypes.indexOf(t)>=0})[0],this.initialCategoryId&&(this.categoryId=this.initialCategoryId),this.$store.dispatch("loadTechnologyTiers"),this.org&&(this.organizationId=this.org.id),this.post&&r()(this,this.post);case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),data:function(){return h()({valid:!0,allowDelete:!1,disposing:!1,titleCounter:y.m,titleRules:y.n,urlCounter:y.p,urlRulesOptional:y.r,contentCounter:y.a,contentRules:y.b},b,{image:null})}}},TxlB:function(t,e,n){"use strict";var s=n("z6fj"),r=n("BVBb"),i=!1;var o=function(t){i||n("ut45")},a=n("VU/8")(s.a,r.a,!1,o,"data-v-036beace",null);a.options.__file="src\\components\\FileInput.vue",e.a=a.exports},"W+Vu":function(t,e,n){"use strict";var s=n("TgSk"),r=n("aaJT"),i=n("VU/8")(s.a,r.a,!1,null,null,null);i.options.__file="src\\components\\PostEdit.vue",e.a=i.exports},X2Aw:function(t,e,n){"use strict";var s=n("rHK5"),r=n("2Mzs"),i=!1;var o=function(t){i||n("Act9")},a=n("VU/8")(s.a,r.a,!1,o,null,null);a.options.__file="src\\components\\PostInfo.vue",e.a=a.exports},aaJT:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"post-edit",class:{edit:t.edit,add:!t.edit},attrs:{flat:t.edit}},[n("v-card-title",{attrs:{"primary-title":""}},[n("v-form",{ref:"form",staticStyle:{width:"100%"},attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-container",[n("v-alert",{attrs:{outline:"",color:"error",icon:"warning",value:t.errorResponse()}},[t._v(t._s(t.errorResponse()))]),n("v-layout",[n("v-flex",{attrs:{xs8:""}},[n("v-select",{attrs:{label:"Type",items:t.allowablePostTypeSelectItems},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}}),n("v-text-field",{attrs:{label:"Title",required:"",rules:t.titleRules,counter:t.titleCounter,"error-messages":t.errorResponse("title")},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),n("v-flex",{staticClass:"image-upload",staticStyle:{"text-align":"right"},attrs:{xs4:""}},[n("v-layout",[n("v-alert",{attrs:{outline:"",color:"error",icon:"warning",value:t.errorResponse("imageUrl")}},[t._v(t._s(t.errorResponse("imageUrl")))])],1),n("small",{staticStyle:{color:"#999"}},[t._v("(minimum 500 x 500)")]),n("file-input",{ref:"fileIcon",attrs:{value:t.imageUrl,accept:"image/*",selectLabel:"Add Image"},on:{input:t.onFileChange}})],1)],1),n("v-layout",[n("v-flex",[n("v-text-field",{attrs:{label:"URL",spellcheck:!1,rules:t.urlRulesOptional,counter:t.urlCounter,"error-messages":t.errorResponse("url")},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}}),n("v-text-field",{attrs:{label:"Text (markdown)",counter:t.contentCounter,"multi-line":"","auto-grow":"",rows:6,rules:t.contentRules,"error-messages":t.errorResponse("content")},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t.valid?n("a",{staticClass:"help-fmt",attrs:{target:"_blank",href:"https://guides.github.com/features/mastering-markdown/"}},[t._v("formatting help")]):t._e(),t.categorySelectItems.length>0?n("v-select",{attrs:{label:"Category",autocomplete:"",items:t.categorySelectItems},model:{value:t.categoryId,callback:function(e){t.categoryId=e},expression:"categoryId"}}):t._e(),n("v-select",{attrs:{label:"Technologies (optional, 5 max)",autocomplete:"",multiple:"",chips:"",items:t.technologySelectItems,rules:[function(t){return!t||t.length<=5||"Maximum exceeded"}]},model:{value:t.technologyIds,callback:function(e){t.technologyIds=e},expression:"technologyIds"}}),t.edit&&t.isOrganizationModerator?n("v-flex",{staticStyle:{"text-align":"right"}},[n("v-layout",[n("v-btn",{staticClass:"white--text",attrs:{small:"",color:t.locked?"green":"red"},on:{click:function(e){t.lockPost(!t.locked)}}},[t._v("\n                            "+t._s(t.locked?"Unlock":"Lock")+"\n                        ")]),t.lockedBy?n("span",{staticStyle:{"line-height":"40px","padding-right":"10px",color:"#999"}},[t._v("locked By @"+t._s(t.lockedBy))]):t._e()],1)],1):t._e()],1)],1)],1)],1)],1),n("v-card-actions",[n("v-layout",[n("v-btn",{attrs:{disabled:!t.valid||t.loading,color:"primary"},on:{click:t.submit}},[t._v("\n        Submit\n    ")]),t.edit?n("v-btn",{on:{click:function(e){t.reset(!1)}}},[t._v("\n        Close\n    ")]):t._e(),n("v-spacer"),t.post&&t.canUpdatePost(t.post)?n("v-flex",{staticStyle:{"max-width":"200px","text-align":"right"}},[n("v-layout",[n("v-checkbox",{staticStyle:{width:"100px"},attrs:{label:"confirm"},model:{value:t.allowDelete,callback:function(e){t.allowDelete=e},expression:"allowDelete"}}),n("v-btn",{staticClass:"white--text",attrs:{disabled:!t.allowDelete,color:"red"},on:{click:t.deletePost}},[t._v("Delete")])],1)],1):t._e()],1)],1)],1)};s._withStripped=!0;var r={render:s,staticRenderFns:[]};e.a=r},ajlC:function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.organization?n("v-card",{staticStyle:{"margin-bottom":"1em"}},[n("v-card-title",[n("v-layout",{attrs:{column:""}},[n("v-alert",{attrs:{outline:"",color:"error",icon:"warning",value:t.errorSummary}},[t._v(t._s(t.errorSummary))]),t._l(t.owners,function(e){return n("v-flex",{key:e.userName},[n("nuxt-link",{attrs:{to:t.routes.user(e.userName)}},[t._v("@"+t._s(e.userName)+" ")]),n("em",{staticClass:"tag green"},[t._v("owner")])],1)}),t._l(t.moderators,function(e){return n("v-flex",{key:e.userName},[n("nuxt-link",{attrs:{to:t.routes.user(e.userName)}},[t._v("@"+t._s(e.userName)+" ")]),n("em",{staticClass:"tag green"},[t._v("owner")])],1)}),!t.member||t.member.isOwner||t.member.isModerator?t._e():n("v-flex",[n("nuxt-link",{attrs:{to:t.routes.user(t.member.userName)}},[t._v("@"+t._s(t.member.userName)+" ")]),n("em",{staticClass:"tag"},[t._v("member")])],1),!t.member&&t.isAuthenticated?n("v-flex",{staticStyle:{"margin-top":"1em","text-align":"center"}},[t.pendingInvite&&null==t.pendingInvite.dismissed?n("v-btn",{attrs:{disabled:!0,color:"primary"}},[t._v("Request Pending")]):t.pendingInvite?t._e():n("div",[0==t.owners.length&&0==t.moderators.length?n("div",{staticClass:"invite-message"},[t._v("\n            take ownership and handle moderation of this "+t._s(t.organization.refSource||"organization")+"\n          ")]):n("div",{staticClass:"invite-message"},[t._v("\n            become a member of this "+t._s(t.organization.refSource||"organization")+"\n          ")]),n("v-btn",{attrs:{color:"primary",disabled:t.loading},on:{click:t.requestInvite}},[t._v("\n            "+t._s(0==t.owners.length&&0==t.moderators.length?"Request Ownership":"Request Invite")+"\n          ")])],1)],1):t._e(),t.membersTotal>1?n("v-flex",{staticStyle:{"text-align":"center","margin-top":"1em"}},[t._v(t._s(t.membersTotal)+" members")]):t._e()],2)],1)],1):t._e()};s._withStripped=!0;var r={render:s,staticRenderFns:[]};e.a=r},c0L2:function(t,e,n){"use strict";var s=n("fZjL"),r=n.n(s),i=n("+6Bu"),o=n.n(i),a=n("woOf"),l=n.n(a),c=n("Xxa5"),u=n.n(c),p=n("exGp"),d=n.n(p),v=n("Dd8w"),h=n.n(v),g=n("W+Vu"),f=n("zjGH"),m=n("DKpQ"),_=n("NlUG"),y=n("NYxO"),x=n("u1Qv"),b=n("5YJS"),k=n("C/un"),w=n("kRG6");n.n(w);e.a={components:{PostEdit:g.a,PostsList:f.a,MembersInfo:m.a,DebugInfo:_.a},props:["slug","query","view"],computed:h()({page:function(){return parseInt(this.$route.query.p||0)},hasMore:function(){return(this.latestOrganizationPosts||[]).length>=k.a},categoryId:function(){var t=this,e=this.organization&&this.organization.categories.filter(function(e){return e.slug==t.c})[0];return e&&e.id},filterTypeNames:function(){var t=this;return this.filterTypes.map(function(e){return t.browsablePostTypes[e]})},visibleTypeLabels:function(){var t=this;return this.browsablePostTypes.map(function(e){return t.postTypeLabelsMap[e]})}},Object(y.mapGetters)(["loading","isAuthenticated","organization","browsablePostTypes","postTypeLabelsMap","latestOrganizationPosts","getTechnologySlug","getTechStackSlug"])),methods:{open:function(){this.add=!0},close:function(){this.add=!1},memberDone:function(){var t=d()(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.$store.dispatch("loadUserOrganizations"),this.$store.dispatch("loadOrganizationById",this.organization.id);case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),postDone:function(){var t=d()(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.add=!1,this.$store.commit("latestOrganizationPostsQuery",null),t.next=4,this.refreshPosts();case 4:this.$router.push(this.$route.path+(this.types?"?types="+this.types:""));case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),refreshPosts:function(){var t=d()(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch({type:"latestOrganizationPosts",types:this.types,page:this.page,categoryId:this.categoryId});case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),loadPage:function(t){var e=l()({},this.$route.query,{p:t});0==e.p&&delete e.p,this.$router.push(Object(w.appendQueryString)(this.$route.path,e))},initRoute:function(t){var e=this;this.c=t.c,this.p=t.p,this.add=!!t.add,this.types=t.add||t.types;var n=(this.types||"").split(",").map(function(t){return e.browsablePostTypes.findIndex(function(e){return e==t})}).filter(function(t){return t>=0});this.stageChanges({filterTypes:n,all:0==n.length?0:null})},updateUrl:function(t){var e=this.$route.query,n=(e.p,e.add,o()(e,["p","add"]));for(var s in t)n[s]=t[s],void 0===n[s]&&delete n[s];this.$router.push(Object(w.appendQueryString)(this.$route.path,n)),this.refreshPosts()},resetQuery:function(){this.c=void 0,this.changeTypes({})},changeCategory:function(t){this.c=this.c!=t.slug?t.slug:void 0,this.updateUrl({c:this.c})},changeTypes:function(t){0==r()(t).length?(this.initRoute({types:null}),this.stageChanges({all:0,filterTypes:[]}),this.updateUrl({types:void 0,c:this.c})):(this.stageChanges({all:null}),t!==this.$route.query.types&&(this.initRoute({types:t}),this.updateUrl({types:t,c:this.c})))},stageChanges:function(t){var e=this;for(var n in this.staging=t,t)this[n]=t[n];this.$nextTick(function(){return e.staging=null})},canManageOrganization:k.d,canPostToOrganization:k.f,fromNow:b.e},watch:{all:function(t){this.staging||this.changeTypes({})},filterTypes:function(t){if(!this.staging){var e=this.filterTypeNames.filter(function(t){return t}).sort().join(","),n=t.length===this.browsablePostTypes.length||0===t.length;this.changeTypes(n?{}:e)}},page:function(t){this.refreshPosts()},query:function(t){this.initRoute(t),this.refreshPosts()}},mounted:function(){var t=d()(u.a.mark(function t(){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.c=this.$route.query.c,this.$store.commit("latestOrganizationPostsQuery",null),this.initRoute(this.$route.query),t.next=5,this.$store.dispatch("loadOrganizationBySlugIfNotExists",this.slug);case 5:return t.next=7,this.refreshPosts();case 7:this.notFound=null==this.organization&&0==(this.latestOrganizationPosts||[]).length,this.$store.dispatch("loadUserPostActivity"),this.$store.dispatch("loadTechnologyTiers");case 10:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),data:function(){return{routes:x.a,types:null,c:null,staging:null,filterTypes:[],all:null,add:!1,reportPostId:null,notFound:!1}}}},hvo6:function(t,e,n){"use strict";var s=n("pFxY");e.a={components:{NewsPosts:s.a}}},onYG:function(t,e,n){var s=n("rCdP");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n("rjj0")("fe244cb2",s,!1)},pFxY:function(t,e,n){"use strict";var s=n("c0L2"),r=n("2d4h"),i=!1;var o=function(t){i||n("onYG")},a=n("VU/8")(s.a,r.a,!1,o,"data-v-2d455ee0",null);a.options.__file="src\\components\\NewsPosts.vue",e.a=a.exports},rCdP:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".image-upload IMG[data-v-2d455ee0]{max-width:200px;max-height:200px}.org-links a[data-v-2d455ee0]{font-size:16px;line-height:36px;vertical-align:middle;margin-right:20px}",""])},rHK5:function(t,e,n){"use strict";var s=n("Dd8w"),r=n.n(s),i=n("NYxO"),o=n("u1Qv"),a=n("5YJS");e.a={props:["organization","post"],computed:r()({category:function(){var t=this;return this.post.categoryId&&(this.organization.categories||[]).filter(function(e){return e.id==t.post.categoryId})[0]},toLabel:function(){var t=this.category&&this.category.name||"",e=t&&(this.organization.name.indexOf(t)>=0||t.indexOf(this.organization.name)>=0)?"":this.organization.name+" ";return t?""+e+t+" "+this.post.type+"s":""+e+this.post.type+"s"},toUrl:function(){var t={types:this.post.type};return this.category&&(t.c=this.category.slug),o.a.organizationNews(this.organization.slug,t)}},Object(i.mapGetters)(["loading","getTechnologySlug","technologyTiers","getTechnologyOrganization"])),methods:{fromNow:a.e},mounted:function(){this.$store.dispatch("loadTechnologyTiersIfNotExists")},data:function(){return{routes:o.a}}}},sPz1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("hvo6"),r=n("DV/1"),i=n("VU/8")(s.a,r.a,!1,null,null,null);i.options.__file="src\\pages\\_slug\\index.vue",e.default=i.exports},u1Qv:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var s=n("fZjL"),r=n.n(s),i=n("kRG6"),o=(n.n(i),function(t,e){return function(t){return t&&r()(t).length>0}(e)?Object(i.appendQueryString)(t,e):t}),a={formattingHelp:"https://guides.github.com/features/mastering-markdown/",homeNews:"/",homeTop:"/top",homeFavorites:"/favorites",newStack:"/stacks/new",newTech:"/tech/new",homeTech:"/tech",homeStacks:"/stacks",newsTech:function(t){return"/?t="+t},techTier:function(t){return"/tech?tier="+t},organization:function(t){return"/organizations/"+t},organizationNews:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return o("/"+t,e)},stack:function(t){return"/stacks/"+t},editStack:function(t){return"/stacks/"+t+"/edit"},tech:function(t){return"/tech/"+t},editTech:function(t){return"/tech/"+t+"/edit"},user:function(t){return"/users/"+t},userAvatar:function(t){return"/users/"+t+"/avatar"},post:function(t,e){return"/posts/"+t+"/"+e},comment:function(t,e){return"/comments/"+t+"/"+e},techTag:function(t,e){return e?"/?t="+t:"/tech/"+t}}},ut45:function(t,e,n){var s=n("DE3n");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n("rjj0")("9fcc69cc",s,!1)},vxyC:function(t,e,n){var s=n("8rI9");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n("rjj0")("1b98a202",s,!1)},z6fj:function(t,e,n){"use strict";e.a={props:{value:{type:String},accept:{type:String,default:"*"},selectLabel:{type:String,default:"Select an image"},removeLabel:{type:String,default:"Remove"}},data:function(){return{imageUrl:""}},watch:{value:function(t){this.imageUrl=t}},mounted:function(){this.imageUrl=this.value},methods:{onPickFile:function(){this.$refs.image.click()},onFilePicked:function(t){var e=this,n=t.target.files||t.dataTransfer.files;if(n&&n[0]){var s=n[0].name;if(s&&s.lastIndexOf(".")<=0)return;var r=new FileReader;r.addEventListener("load",function(){e.imageUrl=r.result}),r.readAsDataURL(n[0]),this.$emit("input",n[0])}},removeFile:function(){this.imageUrl=""}}}},zjGH:function(t,e,n){"use strict";var s=n("4wis"),r=n("3wY3"),i=n("VU/8")(s.a,r.a,!1,null,null,null);i.options.__file="src\\components\\PostsList.vue",e.a=i.exports}});