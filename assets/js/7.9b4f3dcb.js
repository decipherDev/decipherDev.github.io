(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{386:function(t,i,a){},435:function(t,i,a){"use strict";a(386)},453:function(t,i,a){"use strict";a.r(i);a(197),a(62),a(26),a(186),a(187);var e=a(358),s=a(364),n={components:{VLazyImage:e.a,Layout:s.default},data:function(){return{topicsList:[]}},created:function(){this.topicsList=this.$topics.list,this.topicsList.sort((function(t,i){return t.name>i.name?1:-1}))},computed:{topicDetails:function(){return this.$site.pages.filter((function(t){return"/topics/"===t.path}))[0].frontmatter.topicDetails}},methods:{handleNavigation:function(t){this.$router.push("".concat(t.path)).catch((function(t){"NavigationDuplicated"===t.name||t.message.includes("Avoided redundant navigation to current location")||console.log(t)}))}}},o=(a(435),a(17)),c=Object(o.a)(n,(function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("Layout",{scopedSlots:t._u([{key:"page-top",fn:function(){return[a("div",{staticClass:"theme-default-content content__default"},[a("h1",[t._v("👋 Hey Start Monkeying Around!!!")]),t._v(" "),t._l(t.topicsList,(function(i,e){return a("div",{key:i.name,staticClass:"topic-card",on:{click:function(a){return t.handleNavigation(i)}}},[a("div",{staticClass:"title-and-summary"},[a("div",{staticClass:"title-wrapper"},[a("h2",{staticClass:"title"},[t._v(t._s(t.topicDetails[e].title))]),t._v(" "),a("h2",{staticClass:"number-of-posts"},[t._v("("+t._s(i.pages.length)+")")])]),t._v(" "),a("p",[t._v("\n            "+t._s(t.topicDetails[e].summary)+"\n          ")])]),t._v(" "),a("div",{staticClass:"logo"},[a("v-lazy-image",{attrs:{src:t.$withBase("/images/"+t.topicDetails[e].logo),"src-placeholder":t.$withBase("/images/"+t.topicDetails[e].placeholder),alt:t.topicDetails[e].alt}})],1)])}))],2)]},proxy:!0}])})}),[],!1,null,"9415d188",null);i.default=c.exports}}]);