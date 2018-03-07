webpackJsonp([15],{"DV/1":function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticStyle:{width:"100%"}},[o("div",{staticClass:"hero"},[o("v-parallax",{attrs:{src:t.heroUrl}},[o("v-layout",{attrs:{"align-center":""}},[o("v-layout",{attrs:{column:"","align-center":""}},[o("v-flex",{staticStyle:{"min-height":"0"},attrs:{fluid:"","grid-list-lg":""}},[o("v-card",{staticStyle:{"max-width":"1200px"}},[o("v-card-title",{staticStyle:{"justify-content":"center","min-height":"300px","min-width":"800px"},attrs:{"primary-title":""}},[!t.techstack&&t.loading?o("h2",{staticClass:"svg-icon loading"},[t._v("Loading Technology Stack "+t._s(t.slug)+" ...")]):t._e(),t.techstack||t.loading?t.techstack?o("v-layout",[o("v-flex",[o("h1",[t._v(t._s(t.techstack.name))]),t.techstack.vendorName!=t.techstack.name?o("div",{staticClass:"vendor"},[t._v(t._s(t.techstack.vendorName))]):t._e(),t.techstack?o("div",{staticClass:"description"},[t._v(t._s(t.techstack.description))]):t._e()]),t.techstack.screenshotUrl&&t.techstack.appUrl?o("v-flex",{staticStyle:{"text-align":"center"}},[o("a",{attrs:{href:t.techstack.appUrl}},[o("img",{staticStyle:{"max-width":"400px","max-height":"300px"},attrs:{src:t.techstack.screenshotUrl}}),o("div",[t._v(t._s(t.techstack.appUrl))])])]):t._e()],1):t._e():o("h2",[o("v-icon",{attrs:{color:"red"}},[t._v("error_outline")]),t._v(" Technology Stack '"+t._s(t.slug)+"' was not found")],1)],1),t.techstack?o("v-card-actions",{staticStyle:{"min-height":"52px"}},[o("v-flex",{staticClass:"viewcounts",attrs:{xs11:""}},[t.pageStats&&t.pageStats.viewCount>1?o("div",[o("span",[t.hasFavorited?t._e():o("v-btn",{attrs:{icon:"",title:t.isAuthenticated?"add to favorites":"Sign In to add to favorites"},on:{click:function(e){t.addFavorite()}}},[o("v-icon",[t._v("favorite_border")])],1),t.hasFavorited?o("v-btn",{attrs:{icon:"",title:"remove from favorites"},on:{click:function(e){t.removeFavorite()}}},[o("v-icon",{attrs:{color:"pink"}},[t._v("favorite")])],1):t._e(),t.pageStats.favCount>0?o("b",[t._v(t._s(t.pageStats.favCount))]):t._e(),t._v(" /\n                    ")],1),o("span",[o("b",[t._v(t._s(t.pageStats.viewCount))]),t._v(" views")])]):t._e()]),o("v-flex",{attrs:{xs1:""}},[t.canChange?o("v-btn",{attrs:{color:"pink",dark:"",absolute:"",bottom:"",center:"",fab:"",large:"",to:"/"+t.techstack.slug+"/edit",title:"Edit "+t.techstack.name}},[o("v-icon",[t._v("edit")])],1):t._e()],1),o("v-flex",{staticStyle:{"text-align":"right","margin-right":"1em",color:"gray","font-size":"smaller","vertical-align":"middle"},attrs:{xs12:""}},[t.techstack.lastModifiedBy&&t.techstack.lastModifiedBy!=t.techstack.createdBy?o("span",[t._v("\n                    updated "+t._s(t.dateFmt(new Date(t.techstack.lastModified)))+" by "),o("nuxt-link",{attrs:{to:"/users/"+t.techstack.lastModifiedBy}},[t._v(t._s(t.techstack.lastModifiedBy))])],1):t._e(),o("span",[t._v("\n                    added by "),o("nuxt-link",{attrs:{to:"/users/"+t.techstack.createdBy}},[t._v(t._s(t.techstack.createdBy))])],1)])],1):t._e()],1)],1)],1)],1)],1)],1),t.techstack?o("v-container",{staticClass:"body",attrs:{"grid-list-md":""}},[o("v-layout",{attrs:{row:"",wrap:""}},[o("v-flex",[o("v-toolbar",[o("v-toolbar-title",[t._v("Technologies used by "+t._s(t.techstack.name))])],1),o("v-card",t._l(t.stackTiers,function(e){return o("v-layout",{key:e.name,staticClass:"tech-info"},[o("v-flex",[o("v-flex",[o("h2",[t._v(t._s(e.title))])]),o("v-container",{attrs:{fluid:"","grid-list-sm":""}},[o("v-layout",{attrs:{row:"",wrap:"","align-center":""}},t._l(e.techChoices,function(e){return o("v-flex",{key:e.id,staticStyle:{"max-width":"300px"}},[o("nuxt-link",{attrs:{to:"/tech/"+e.slug,title:e.name}},[e.logoApproved?o("img",{staticStyle:{"max-width":"300px","max-height":"80px",padding:"0 1em 0 .5em"},attrs:{src:e.logoUrl}}):t._e()])],1)}))],1)],1)],1)}))],1)],1)],1):t._e(),t.techstack&&t.techstack.detailsHtml?o("section",{staticClass:"block block1"},[o("v-container",{staticClass:"body",staticStyle:{"padding-bottom":"2em"},attrs:{id:"stack-details","grid-list-md":""}},[o("v-card",[o("v-card-title",[o("div",{staticClass:"details-html",staticStyle:{padding:"1em"},domProps:{innerHTML:t._s(t.techstack.detailsHtml)}})])],1)],1)],1):t._e()],1)};a._withStripped=!0;var c={render:a,staticRenderFns:[]};e.a=c},HmOE:function(t,e,o){!function(){var e=["black-white-city.jpg","photo-1421789665209-c9b2a435e3dc.jpg","photo-1422207134147-65fb81f59e38.jpg","photo-1422360902398-0a91ff2c1a1f.jpg","photo-1427087302890-2f05ee3bee12.jpg","photo-1429552054921-018e433d7d34.jpg","photo-1431538510849-b719825bf08b.jpg","photo-1431576901776-e539bd916ba2.jpg","photo-1432821579285-1b649e5b1ce3.jpg","photo-1437419764061-2473afe69fc2.jpg","photo-1437422061949-f6efbde0a471.jpg","photo-1443890923422-7819ed4101c0.jpg","photo-1446329813274-7c9036bd9a1f.jpg","photo-1446776653964-20c1d3a81b06.jpg","photo-1448357019934-caa4696bb949.jpg","photo-1449157291145-7efd050a4d0e.jpg","photo-1449942120512-7a6f1ea6b0c4.jpg","photo-1451187580459-43490279c0fa.jpg","photo-1453090927415-5f45085b65c0.jpg","photo-1454817481404-7e84c1b73b4a.jpg","photo-1455383333344-451b6147021b.jpg","photo-1455656678494-4d1b5f3e7ad4.jpg","photo-1456244440184-1d494704a505.jpg","photo-1457459686225-c7db79d4e59f.jpg","photo-1457685373807-8c4d8be4c560.jpg","photo-1458668383970-8ddd3927deed.jpg","photo-1460574283810-2aab119d8511.jpg","photo-1461353789837-8eb180f968d2.jpg","photo-1462331321792-cc44368b8894.jpg","photo-1462331940025-496dfbfc7564.jpg","photo-1462332420958-a05d1e002413.jpg","photo-1462899006636-339e08d1844e.jpg","photo-1462903004115-f8e27d6a3985.jpg","photo-1464621922360-27f3bf0eca75.jpg","photo-1464817739973-0128fe77aaa1.jpg","photo-1465438503376-a2a921c57ffa.jpg","photo-1465935343323-d742334bcbda.jpg","photo-1467358895199-cd5d1847a7e4.jpg","photo-1467810563316-b5476525c0f9.jpg","photo-1468325089340-2ec20e175048.jpg","photo-1468436139062-f60a71c5c892.jpg","photo-1468536029150-d16666b345a1.jpg","photo-1471644518115-1f02e9819854.jpg","photo-1471769321038-24f4db35b24d.jpg","photo-1471872973917-3e115886ed07.jpg","photo-1473197411253-0151b2882b52.jpg","photo-1473308822086-710304d7d30c.jpg","photo-1473800447596-01729482b8eb.jpg","photo-1475241404975-c3ae90fdd9e6.jpg","photo-1475754857078-5c15de17844c.jpg","photo-1475778057357-d35f37fa89dd.jpg","photo-1476067897447-d0c5df27b5df.jpg","photo-1476362555312-ab9e108a0b7e.jpg","photo-1476483547798-bf769a2cbba5.jpg","photo-1476514525535-07fb3b4ae5f1.jpg","photo-1476522183715-d1a7af59419f.jpg","photo-1476820865390-c52aeebb9891.jpg","photo-1476891626313-2cecb3820a69.jpg","photo-1477244075012-5cc28286e465.jpg","photo-1477489875296-423abee7bade.jpg","photo-1477501502166-8c6f76b18a1b.jpg","photo-1477951233099-d2c5fbd878ee.jpg","photo-1478031706604-bb4b7b0b4e9e.jpg","photo-1478428036186-d435e23988ea.jpg","photo-1479030160180-b1860951d696.jpg","photo-1479147014836-dda42d84c1a9.jpg","photo-1479839672679-a46483c0e7c8.jpg","photo-1480241352829-e1573ff2414e.jpg","photo-1480506132288-68f7705954bd.jpg","photo-1480618757544-81c31930008e.jpg","photo-1481026469463-66327c86e544.jpg","photo-1482003297000-b7663a1673f1.jpg","photo-1482855549413-2a6c9b1955a7.jpg","photo-1483094035713-218a81c0d971.jpg","photo-1483653085484-eb63c9f02547.jpg","photo-1483804728039-acddc304e9cc.jpg","photo-1483992233021-1801812fdacb.jpg","photo-1484100356142-db6ab6244067.jpg","photo-1484420269607-41d8060e9779.jpg","photo-1484882918957-e9f6567be3c8.jpg","photo-1485889397316-8393dd065127.jpg","photo-1486230057997-a68a7fe3b16e.jpg","photo-1486692957922-ea51ea8472bc.jpg","photo-1487023269153-8ab6d0e24173.jpg","photo-1487111023822-2e903e12f6f0.jpg","photo-1487525219605-eadb39ae229c.jpg","photo-1487621167305-5d248087c724.jpg","photo-1488190211105-8b0e65b80b4e.jpg","photo-1488489153583-89ce18dd4968.jpg","photo-1489343511429-5482f78c15cf.jpg","photo-1489537235181-fc05daed5805.jpg","photo-1491514104444-e033f313a5fc.jpg","photo-1493441883526-0ed85220dc0c.jpg","photo-1493704074932-e1c9d6ccd131.jpg","photo-1494253188410-ff0cdea5499e.jpg","photo-1494822493217-c9840aba840c.jpg","photo-1494891848038-7bd202a2afeb.jpg","photo-1495045197504-5128e3c8469f.jpg","photo-1495195129352-aeb325a55b65.jpg","photo-1495250357898-6822052ef5b8.jpg","photo-1495431088732-09e59535d241.jpg","photo-1495603491717-3d3374928dc6.jpg","photo-1495743853775-60402c6c643e.jpg","photo-1496060169243-453fde45943b.jpg","photo-1496148353342-96817d85ea40.jpg","photo-1496170804262-975019a5cd34.jpg","photo-1496208612508-eb52fba7d94e.jpg","photo-1496259947555-d77e1140f6c5.jpg","photo-1496264057429-6a331647b69e.jpg","photo-1496282413736-d42bd1e239b8.jpg","photo-1496483353456-90997957cf99.jpg","photo-1496688519089-de7d4b5c05d7.jpg","photo-1497010905071-cba70e163811.jpg","photo-1498036882173-b41c28a8ba34.jpg","photo-1498713301984-508015049dc1.jpg","photo-1499744937866-d7e566a20a61.jpg","photo-1499865375034-7cccc6d92a18.jpg","photo-1500393734221-584dd6dbf92a.jpg","photo-1500412830877-c77d92c33203.jpg","photo-1500531279542-fc8490c8ea4d.jpg","photo-1501820434261-5bb046afcf6b.jpg","photo-1502133639165-ea20bc43e157.jpg","photo-1502517787199-e68205b0c811.jpg","photo-1503206557829-9a9979ad1227.jpg","photo-1503435980610-a51f3ddfee50.jpg","photo-1504888302758-9adb6780e7c8.jpg","photo-1505348288055-07fa73d30043.jpg","photo-1505562130589-9879683e72da.jpg","photo-1505644605728-ea5ecbfef171.jpg","photo-1505682499293-233fb141754c.jpg","photo-1505682634904-d7c8d95cdc50.jpg","photo-1506020647804-b04ee956dc04.jpg","photo-1506155475929-a146afddd515.jpg","photo-1506268919522-a927511962a9.jpg","photo-1506305269769-53a5714a93be.jpg","photo-1506440905961-0ab11f2ed5bc.jpg","photo-1507646278763-8b57d6bf6369.jpg","photo-1507706132643-4b3dabbca8b3.jpg","photo-1507980062492-714282f31ee0.jpg","photo-1508138221679-760a23a2285b.jpg","photo-1508141610389-6253d977b87e.jpg","photo-1508233620467-f79f1e317a05.jpg","photo-1509664158680-07c5032b51e5.jpg","photo-1510279770292-4b34de9f5c23.jpg","photo-1510382739061-d3f7bb547302.jpg","photo-1510849090660-6c8e1908c3c9.jpg","photo-1510861320402-285a6c7639ea.jpg"],o="https://servicestack.github.io/images/",a=[0,31,59,90,120,151,181,212,243,273,304,334];function c(t){return a[t.getMonth()]+t.getDate()}function p(t){return o+"hero/"+e[t%e.length]}var s={baseUrl:o,images:e,get:p,random:function(){return p(Math.floor(Math.random()*e.length))},daily:function(t,e){return p(c(t||new Date)+(e||0))},hourly:function(t,e){return p(function(t){return 24*c(t)+t.getHours()}(t||new Date)+(e||0))},static:function(t,e){return p(function(t){if(!t)return 0;"string"!=typeof t&&(t=t.toString());for(var e=0,o=0;o<t.length;o++)e=(e<<5)-e+t.charCodeAt(o),e&=e;return Math.abs(e)}(t)+(e||0))}};void 0!==t&&t.exports&&(t.exports=s),s}()},PMAo:function(t,e,o){var a=o("HmOE");t.exports={heroes:a}},YCd4:function(t,e,o){var a=o("yENK");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o("rjj0")("d69cb714",a,!1)},hvo6:function(t,e,o){"use strict";var a=o("Xxa5"),c=o.n(a),p=o("exGp"),s=o.n(p),h=o("Dd8w"),i=o.n(h),r=o("NYxO"),n=o("kRG6"),d=(o.n(n),o("PMAo"));o.n(d),o("IcnI");e.a={computed:i()({slug:function(){return this.$route.params.slug},heroUrl:function(){return d.heroes.static(this.slug)},techstack:function(){return this.getTechnologyStack(this.slug)},canChange:function(){return this.canChangeTechStack(this.techstack)},hasFavorited:function(){return this.isFavoriteTechStack(this.slug)},pageStats:function(){return this.getPageStats("stack",this.slug)},stackTiers:function(){var t=this,e=[];return this.allTiers.forEach(function(o){var a=t.techstack.technologyChoices.filter(function(t){return t.tier===o.name});a.length>0&&e.push({title:o.title,techChoices:a})}),e}},Object(r.mapGetters)(["loading","canChangeTechStack","allTiers","getTechnologyStack","getPageStats","isFavoriteTechStack","isAuthenticated"])),methods:{dateFmt:n.dateFmt,refreshPageStats:function(){this.$store.dispatch("getPageStats",{type:"stack",slug:this.slug,id:this.techstack&&this.techstack.id})},addFavorite:function(){var t=s()(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.isAuthenticated){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,this.$store.dispatch("addFavorite",{type:"stack",id:this.techstack.id});case 4:this.refreshPageStats();case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),removeFavorite:function(){var t=s()(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.isAuthenticated){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,this.$store.dispatch("removeFavorite",{type:"stack",id:this.techstack.id});case 4:this.refreshPageStats();case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},mounted:function(){var t=s()(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("getTechnologyStack",this.slug);case 2:this.refreshPageStats();case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},sPz1:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o("hvo6"),c=o("DV/1"),p=!1;var s=function(t){p||o("YCd4")},h=o("VU/8")(a.a,c.a,!1,s,null,null);h.options.__file="src\\pages\\_slug\\index.vue",e.default=h.exports},yENK:function(t,e,o){(t.exports=o("FZ+f")(!1)).push([t.i,".tech-info{padding:0 2em}.tech-info h2{font-size:24px;font-weight:400;color:#8eacbb;padding:1em 0}.vendor{line-height:2em;font-size:24px;color:gray}",""])}});