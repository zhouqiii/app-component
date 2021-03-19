<template>
<div class="imgText">
    <div class="contentIT">
        <div class="leftImg">
            <div class="imageI">
                <img :src="srcleft" class="logoImg">
            </div>
        </div>
        <div class="swiperText">
             <swiper :options="swiperOption">
                <!-- slides -->
                <swiper-slide v-for="item of swipText" :key="item.id" class="swiperCon">
                    <div>
                         <p class="swiper-item">{{item.text1}}</p> 
                         
                    </div>
                </swiper-slide>
                <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
            </swiper> 
        </div>
     </div>
</div> 
</template>
<script>
//import { defineComponent } from '@vue/composition-api'
import pic1 from '@/assets/image/ll.png'
export default{
    name:'imgText',
    data () {
        return {
            swiperOption: {
             pagination: '.swiper-pagination' ,
             direction:'vertical',
             loop: true,
             autoplay: 3000,
             speed: 1000,
             disableOnInteraction: true,//用户操作后,停止自动切换
            },
            swipText:[
                {id:'1',text1:'好消息!超全攻略免费领 还能当钱花',text2:'喂!有一份惊喜的礼品等你领'},
                {id:'2',text1:'重大好消息!超全攻略免费领 还能当钱花',text2:'喂!有一份惊喜的礼品等你领'}
            ],
            srcleft:pic1,

        }
    },
}
</script>
<style lang="stylus" scoped>
.contentIT
    display:flex;
    height:85px;
    padding:7px 3px;
    overflow:hidden;
    background:#eeeeee;
    .leftImg
         width:30%;
        .imageI
            float:left;
            .logoImg
                width:100%;
                height:80%;
        .swiperCon
            line-height:80px;
</style>

