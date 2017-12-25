<template>
	<div class="lazy-load-img-container">
		<slot/>
	</div>
</template>
<script>
	import toArray from './utils/to-array'
	export default {
		name: 'LazyLoadImg',
		mounted () {
			let timer = null;
			/* 获取某个元素是否在 viewport 中 */
			let isInViewport = (el, viewportHeight) => {
				if (Math.abs(el.getBoundingClientRect().top) >= viewportHeight) {
					return false;
				}
				return true;
			}
			/* 获取当前 viewport 的高度 */
			let getViewportHeight = () => {
				return window.innerHeight || document.documentElement.clientHeight;
			}
			/* 获取所有需要判断是否在 viewport 的元素 */
			let getAllElements = (selector) => {
				return toArray(document.querySelectorAll(selector));
			}
			/* 获取所有在, 或者曾经在 viewport 中的元素的列表 */
			let getAllInViewportElements = (selector) => {
				return getAllElements(selector).filter((el) => {
					if (isInViewport(el, getViewportHeight())) {
						return el;
					}
				})
			}
			/* 判断是不是图片 */
			let isImg = (el)=>{
				if (el.nodeName === 'IMG') {
					return true;
				}
				return false;
			}
			/*  加载图片, 其实就是改 src 或者啥玩意的 */
			let loadImg = () => {
				getAllInViewportElements('.wc-lazy-load-img').forEach((el)=>{
					let src = el.getAttribute('data-src');
					/* 如果是一个图片, 设置 src 属性 */
					if (isImg(el)) {
						/* 这里还真的是要防止一下用户设置了一个默认图, 所以不能按照是否有 src 来避免重复赋值*/
						el.src = src;
					} else {
						el.style.backgroundImage = `url(${src})`
					}				
				});
			}
			/* 滚动事件加载 */
			document.addEventListener('scroll', ()=> {
				clearTimeout(timer);
				timer = setTimeout(()=>{
					loadImg();
				}, 30);				
			}, false);

			/* 移动端的 touchmove 事件 */
			document.addEventListener('touchmove', ()=> {
				clearTimeout(timer);
				timer = setTimeout(()=>{
					loadImg();
				}, 30);				
			}, false);

			/* 
				初始化加载
			*/
			loadImg();
		}
	}
</script>