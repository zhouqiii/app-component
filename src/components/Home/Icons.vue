<template>
<div class="icons">
    <!-- <swiper :options="swiperOption" v-if="showIcons"> -->
    <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
        <div class="icon-img">
        <img class="icon-img-img" :src="item.src"/>
        </div>
        <p class="icon-desc">{{item.desc}}</p>
        </div>
    </swiper-slide>
    <!-- </swiper> -->
</div>
</template>
<script>

export default {
    name: 'HomeIcons',
    props: {
        icons: Array
    },
    data () {
        return {
            swiperOption: {
                loop: false,
                autoplay: false
            }
        }
    },
    computed: {
        pages: function () {
            const pages = []
            this.icons.forEach((item,index) => {
              const page = Math.floor(index / 10)
              if(!pages[page]) {
                  pages[page] = []
              }
              pages[page].push(item)
            })
            return pages
        },
        // showIcons: function () {
        //     return this.icons.length
        // }
    }
} 
</script>
<style lang="stylus" scoped>
@import '~@/css/varibles.styl' 
@import '~@/css/mixin.styl' 

.icons
    overflow: hidden
    height: 0
    width: 100%
    padding-bottom: 50%
    .icon
        position: relative
        overflow: hidden
        float: left
        width: 20%
        height: 0
        padding-bottom: 25%
        .icon-img
            position: absolute
            top: 3px
            left: 0
            right: 0
            bottom: 25px
            box-sizing: border-box
            padding: 7px
            .icon-img-img
                height: 100%
                display: block
                margin: 0 auto
        .icon-desc
            position: absolute
            left: 0
            right: 0
            bottom: -13px
            height: 25px
            line-height: 25px
            font-size: 14px
            ellipsis()
         
</style>


