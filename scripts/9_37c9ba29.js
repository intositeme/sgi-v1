webpackJsonp([9],{137:function(t,e,n){var o,i;o=n(154);var a=n(180);i=o=o||{},"object"!=typeof o["default"]&&"function"!=typeof o["default"]||(i=o=o["default"]),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=o},154:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),a=o(i),s=n(1),d=(o(s),n(2)),r=o(d),u=n(116),c=o(u),l=n(115),f=o(l);e["default"]={store:c["default"],data:function(){return{vm:"",instance:""}},computed:{page:function(){return this.$store.getters.page}},watch:{page:function(t){this.changePage(t)}},components:f["default"],mounted:function(){a["default"].expr[":"].hasPageClass=function(t){return/\bpage-/.test(t.className)},window.onpopstate=this.onWindowPopState,this.$root.$on("load-overlay-show-done",this.onOverlayShowDone),window.addthis.init()},updated:function(){this.$nextTick(function(){(0,a["default"])(this.$el).find("a").off("click"),(0,a["default"])(this.$el).find("a").click(this.onLinkClicks)})},methods:{onLinkClicks:function(t){if(t.currentTarget.hostname!==window.location.hostname)return!0;t.preventDefault();var e=t.currentTarget.attributes.href.value;return"#"!=e&&"javascript:void(0)"!=e&&void this.$store.dispatch("CHANGE_PAGE",{page:e})},changePage:function(t){this.$root.$emit("load-start")},onWindowPopState:function(t){if(t.state){var e=(t.state.title?t.state.title:document.title,t.state.page);this.$store.dispatch("CHANGE_PAGE",{page:e}),this.$root.$emit("window-popstate")}},onOverlayShowDone:function(){var t=this;(0,a["default"])("body").removeClass();var e=this.page;TweenMax.to((0,a["default"])("html, body"),.1,{scrollTop:0,ease:Cubic.easeInOut}),a["default"].ajax({url:e}).done(function(e){t.setNewContent(t,e)})},setNewContent:function(t,e){var n=t.page,o=document.createElement("html");o.innerHTML=e;var i=o.getElementsByTagName("sgi-page-content");""!==this.vm,""!==this.instance&&this.instance.$destroy(),this.vm=r["default"].extend({template:i[0].innerHTML,components:f["default"],mounted:function(){var e=this;this.$nextTick(function(){setTimeout(function(){(0,a["default"])(e.$el).find("a").off("click"),(0,a["default"])(e.$el).find("a").click(t.onLinkClicks),window.addthis.init(),window.addthis.toolbox(".addthis_toolbox")},100)})}}),this.instance=(new this.vm).$mount(document.getElementsByClassName("sgi-container")[0]);var s=(0,a["default"])(o).find("title").text();document.title=s,window.history.pushState({page:t.page,title:s},s,n),(0,a["default"])("body").addClass("page-"+t.page),t.$nextTick(function(){t.$root.$emit("load-end"),window.dispatchEvent(new Event("masonry-refresh"))})}}}},180:function(t,e){t.exports={render:function(){var t=this;return t._h("div")},staticRenderFns:[]}}});