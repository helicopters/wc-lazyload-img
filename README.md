## 基于 Vue 2.x 的图片懒加载组件


## 安装
```shell
npm i wc-lazyload-img --save-dev

//main.js
import Lazyload from 'wc-lazyload-img'
Vue.use(Lazyload);
```


## 使用
```html

<lazyload-img v-if="list.length">

	<!-- 图片 -->
	
	<img v-for="(url, key) in list" v-lazyload="url" alt="">

	<!-- div -->
	<div v-for="(url, key) in list" v-lazyload="url"></div>


</lazyload-img>

```


## 说明
> 当数据是异步获取的时候, 需要在 lazyload-img 上面加一个 if, 防止数据没出来之前, lazyload-img 里面的
mounted 已经执行; 

> 需要懒加载的元素上面, 要添加一个 v-lazyload 指令.



## 项目地址
[wc-lazyload-img](https://github.com/helicopters/wc-lazyload-img);