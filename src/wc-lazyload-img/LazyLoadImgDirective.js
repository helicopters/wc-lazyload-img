export default {
	bind (el, binding) {
		el.setAttribute('data-src', binding.value);
		el.classList.add('wc-lazy-load-img');
	}
}