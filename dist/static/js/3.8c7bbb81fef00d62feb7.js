(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{438:function(t,e,n){"use strict";function r(t,e,n,r,o,s,i,a){var c,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),s&&(l._scopeId="data-v-"+s),i?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=c):o&&(c=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(t,e){return c.call(e),u(t,e)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,c):[c]}return{exports:t,options:l}}n.d(e,"a",function(){return r})},441:function(t,e,n){},445:function(t,e,n){t.exports=n(446)},446:function(t,e,n){n(447),t.exports=n(33).parseInt},447:function(t,e,n){var r=n(48),o=n(448);r(r.G+r.F*(parseInt!=o),{parseInt:o})},448:function(t,e,n){var r=n(19).parseInt,o=n(189).trim,s=n(137),i=/^[-+]?0[xX]/;t.exports=8!==r(s+"08")||22!==r(s+"0x16")?function(t,e){var n=o(String(t),3);return r(n,e>>>0||(i.test(n)?16:10))}:r},449:function(t,e,n){"use strict";var r=n(441);n.n(r).a},453:function(t,e,n){"use strict";n.r(e);var r=n(445),o=n.n(r),s={name:"root",data:function(){return{form:{r:6,g:6,b:6,hex:"#666",rgb:"6,6,6"},color:"#666"}},props:{},computed:{json:function(){return"{\n                    color: ".concat(this.form.hex,";\n                    background: rgb(").concat(this.form.rgb,");\n                }")}},methods:{change:function(t,e){console.log(t,e),this.form[e]=!t||t<0?0:t>255?255:o()(t),this.setHexAndRgb()},changeHex:function(t){t?"#"!==t[0]&&(this.form.hex="#"+t):this.form.hex="#",this.form.hex.length>7&&(this.form.hex=this.form.hex.substring(0,7));var e=this.rgb2Dec(this.form.hex);console.log("rgb",e,e[0]),this.form.r=e[0],this.form.g=e[1],this.form.b=e[2],console.log(e),this.form.rgb=e.join(",")},setHexAndRgb:function(){var t=this.form,e=t.r,n=t.g,r=t.b,o=this.rgb2Hex("rgb(".concat(e,",").concat(n,",").concat(e,")"));this.form.hex=o,this.form.rgb=e+","+n+","+r},hex2Rgb:function(t){var e=[];if(/^\#[0-9A-F]{3}$/i.test(t)){var n="#";t.replace(/[0-9A-F]/gi,function(t){n+=t+t}),t=n}return/^#[0-9A-F]{6}$/i.test(t)?(t.replace(/[0-9A-F]{2}/gi,function(t){e.push("0x"+t)}),e):(console.log("Input ".concat(t," is wrong!")),[0,0,0])},rgb2Hex:function(t){if(/^rgb\((\d{1,3}\,){2}\d{1,3}\)$/i.test(t)){var e="#";return t.replace(/\d{1,3}/g,function(t){t=(t=o()(t).toString(16)).length<2?0+t:t,e+=t}),e}return console.log("Input ".concat(t," is wrong!")),"#000"},rgb2Dec:function(t){return this.hex2Rgb(t).map(function(t){return Number(t).toString()})},onSuccess:function(){this.$message.success("复制成功")},onError:function(){}},created:function(){},beforeMount:function(){},mounted:function(){},components:{},watch:{},filters:{},directive:{}},i=(n(449),n(438)),a=Object(i.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"com-container"},[n("el-card",[n("div",{staticClass:"form-box"},[n("el-form",{ref:"form",staticClass:"form",attrs:{model:t.form,"label-width":"90px"},nativeOn:{submit:function(t){t.preventDefault()}}},[n("el-form-item",{attrs:{label:"红R(0~255)"}},[n("el-input",{attrs:{type:"number",maxlength:"3"},on:{input:function(e){return t.change(e,"r")}},model:{value:t.form.r,callback:function(e){t.$set(t.form,"r",e)},expression:"form.r"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"绿G(0~255)"}},[n("el-input",{attrs:{type:"number",maxlength:"3"},on:{input:function(e){return t.change(e,"g")}},model:{value:t.form.g,callback:function(e){t.$set(t.form,"g",e)},expression:"form.g"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"蓝B(0~255)"}},[n("el-input",{attrs:{type:"number",maxlength:"3"},on:{input:function(e){return t.change(e,"b")}},model:{value:t.form.b,callback:function(e){t.$set(t.form,"b",e)},expression:"form.b"}})],1)],1),t._v(" "),n("el-form",{ref:"form",staticClass:"form",attrs:{model:t.form,"label-width":"90px"},nativeOn:{submit:function(t){t.preventDefault()}}},[n("el-form-item",{attrs:{label:"16进制"}},[n("el-input",{on:{input:function(e){return t.changeHex(e)}},model:{value:t.form.hex,callback:function(e){t.$set(t.form,"hex",e)},expression:"form.hex"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"RGB"}},[n("el-input",{attrs:{readonly:""},model:{value:t.form.rgb,callback:function(e){t.$set(t.form,"rgb",e)},expression:"form.rgb"}})],1)],1)],1)]),t._v(" "),n("el-row",{attrs:{type:"flex",justify:"space-around"}},[n("el-col",{staticClass:"pos-rela",attrs:{span:11}},[n("pre",{staticClass:"pre is-always-shadow"},[t._v("                "+t._s(t.json)+"\n            ")]),t._v(" "),n("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.json,expression:"json",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onSuccess,expression:"onSuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}],staticClass:"btn-copy",attrs:{type:"button"}},[n("i",{staticClass:"el-icon-document-copy"})])]),t._v(" "),n("el-col",{attrs:{span:11,offset:"2"}},[n("div",{staticClass:"pre",style:{background:t.form.hex}})])],1)],1)},[],!1,null,null,null);e.default=a.exports}}]);