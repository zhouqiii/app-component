<template>
    <div class="home">
        <home-swiper :swip="swiperLists"></home-swiper>
        <home-icons :icons="iconLists"></home-icons>
        <img-text></img-text>
    </div>
</template>
<script>

import HomeSwiper from '../components/Home/Swiper'
import HomeIcons from '../components/Home/Icons'
import imgText from '../components/Home/imgText'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HomeSwiper,
    HomeIcons,
    imgText
  },
  data () {
    return {
        iconLists: [],
        swiperLists: [],
    }
  },
  
  methods: {
    getHomeData: function() {
        axios.get('/mock/index.json').then(this.getHomeDataSucc)
    },
    getHomeDataSucc: function(res) {
        res = res.data
        if(res.ret&&res.data) {
            const data = res.data
            this.iconLists = data.iconList
            this.swiperLists = data.swiperList
        }
    }
  },
  mounted () {
    this.getHomeData()
  },
  activated () {
   
  }
}
</script>
<style scoped>
</style>
