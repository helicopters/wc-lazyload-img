import Vue from 'vue'
import App from './App'

import LazyLoadImg from './wc-lazyload-img'
Vue.use(LazyLoadImg);

new Vue({
    el: '#app',
    template: '<App/>',
    components: {App}
})
