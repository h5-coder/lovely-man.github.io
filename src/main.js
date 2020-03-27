// js
// import 'babel-polyfill'; // 解决IE兼容问题
// import '@babel/polyfill';
import Vue from 'vue';
import router from './router';
import ElementUI from 'element-ui';
import store from './store/';
import '@/../static/js/cookie.js';
// import '@/../static/js/toFixed.js';
import './filters/index.js';
import '@/directives/index.js';
// 复制到粘贴板插件
import VueClipboard from 'vue-clipboard2';
// css
import '../static/css/reset.css';
import 'element-ui/lib/theme-chalk/index.css';
import '../static/css/iconfont.css';

// less
import './less/index.less';

// mock 动态引入用
if (process.env.NODE_ENV === 'development') {
    process.env.MOCK && require('./mock/index.js');
}

VueClipboard.config.autoSetContainer = true;
Vue.use(VueClipboard);
Vue.use(ElementUI);

// Vue.config.silent = true;
Vue.config.productionTip = false;

window.vueVm = new Vue({
    el: '#app',
    data() {
        return {};
    },
    router,
    store,
    // 组件
    components: {}
});
