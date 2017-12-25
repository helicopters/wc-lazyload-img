import Vue from 'vue'
import LazyLoadImg from './LazyLoadImg'
import LazyLoadImgDirective from './LazyLoadImgDirective'

export default {
	install (Vue) {
		Vue.component('LazyLoadImg', Vue.extend(LazyLoadImg));
		/* 注意这里 l 小写, 意味着调用是 v-lazyload*/
		Vue.directive('Lazyload', LazyLoadImgDirective);
	}
}