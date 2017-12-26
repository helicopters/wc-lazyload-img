<style>
li {
	height: 200px;
	width: 100%;
	background: red;
	display: flex;
	align-items: center;
	justify-content: center;
}

img {
    width: 100%;
    height: 200px;
}

</style>
<template>
	<div class="container">
        <lazyload-img v-if="list.length">
            <img v-lazyload="item" alt="" v-for="(item, key) in list"/>
            <ul>
                <li v-lazyload="item" alt="" v-for="(item, key) in list"></li>
            </ul>
        </lazyload-img>
	</div>
</template>
<script>

	export default {
		name: 'App',
        data () {
            return {
                list: []
            }
        },
        mounted () {
            let list = ['http://imgstore.cdn.sogou.com/app/a/100540002/1170479_s_90_2_219x160.jpg','http://pic.58pic.com/58pic/17/18/97/01U58PIC4Xr_1024.jpg','http://77fkxu.com1.z0.glb.clouddn.com/20160308/1457402219_73571.jpg','http://cover.read.duokan.com/mfsv2/download/fdsc3/p01N203pHTU7/Wr5314kcLAtVCi.jpg!t','http://cover.read.duokan.com/mfsv2/download/fdsc3/p01a3SXHo2hZ/XYAC5TLk4uYWXn.jpg!t','http://4493bz.1985t.com/uploads/allimg/140628/1-14062Q33R6.jpg','http://4493bz.1985t.com/uploads/allimg/140628/1-14062Q33242.jpg','http://img.bizhi.sogou.com/images/2014/12/10/997251.jpg','http://imgstore.cdn.sogou.com/app/a/100540002/1170473_s_90_2_219x160.jpg'];

            setTimeout(()=>{
                this.list = list;
            }, 1000)
        }
	}
</script>