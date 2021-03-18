<template>
<div class="swiper">
   <swiper :options="swiperOption" v-if="showSwipers">
    <!-- slides -->
    <swiper-slide v-for="item of swip" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" /> 
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    
  </swiper> 
</div> 
</template>
<script>
export default {
    name: 'HomeSwiper',
    props: {
        swip: Array
    },
    data () {
        return{
           swiperOption: {
             pagination: '.swiper-pagination' ,
             loop: true,
           }
        }
    },
    computed: {
        showSwipers: function () {
            return this.swip.length
        }
    }
}
</script>
<style lang="stylus" scoped>
.swiper>>>.swiper-pagination-bullet-active//滑点是swiper插件自带的样式，用>>>来自定义改变
    background: #00a1ff !important 
.swiper
    background: #eeeeee
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 32%
    .swiper-img
        width: 47%
</style>
