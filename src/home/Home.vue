<template>
    <div class="home">
        <nav-bar></nav-bar>
        <home-swiper :swip="swiperLists"></home-swiper>
        <home-icons :icons="iconLists"></home-icons>
        <img-text></img-text>
        <card-card></card-card>
        <card-good></card-good>
        <card-new></card-new>
    </div>
</template>
<script>

import HomeSwiper from '../components/Home/Swiper'
import HomeIcons from '../components/Home/Icons'
import imgText from '../components/Home/imgText'
import CardCard from '../components/Home/Card'
import CardGood from '../components/Home/Goods'
import CardNew from '../components/Home/CardNew'
import NavBar from '../navbar/NavBar'
import pic1 from '@/assets/image/11.png'
import pic2 from '@/assets/image/22.png'
import pic3 from '@/assets/image/33.png'
import pic4 from '@/assets/image/icon1.png'
import axios from 'axios'


export default {
  name: 'Home',
  components: {
    HomeSwiper,
    HomeIcons,
    imgText,
    NavBar,
    CardCard,
    CardGood,
    CardNew
  },
 data(){
    return {
        iconLists: [
          {id: '0001',src: pic4,desc: '账单服务'}, 
          {id:'0002',src: pic4,desc: '额度管理'},
          {id:'0003',src: pic4,desc: '灵活分析'},
           {id: '0004',src: pic4,desc: '卡片挂失'}, 
          {id:'0005',src: pic4,desc: '用卡帮助'},
          {id:'0006',src: pic4,desc: '我要办卡'},
           {id: '0007',src: pic4,desc: '二维码支付'}, 
          {id:'0008',src: pic4,desc: '短信服务'},
          {id:'0009',src: pic4,desc: '我要现金'},
           {id: '00010',src: pic4,desc: '进度查询'}, 
          {id:'00011',src: pic4,desc: '进度查询'},
          {id:'00012',src: pic4,desc: '进度查询'},
        ],
        swiperLists: [
          {id: '0001',src: pic1,}, 
          {id:'0002',src: pic2,},
          {id:'0003',src: pic3,}
      ]
    }
  },
  
  methods: {
    // getHomeData: function() {
    //     axios.get('/mock/index.json').then(this.getHomeDataSucc)
    // },
    // getHomeDataSucc: function(res) {
    //     res = res.data
    //     if(res.ret&&res.data) {
    //         const data = res.data
    //         this.iconLists = data.iconList
    //         this.swiperLists = data.swiperList
    //     }
    // }
  },
  mounted () {
    // this.getHomeData()
  },
  activated () {
   
  }
}
</script>
<style scoped>
</style>
