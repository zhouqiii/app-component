<template>
    <div class="card">
        <div class="contentBox">
            <swiper :options="swiperOption" v-if="showSwipers">
                <swiper-slide v-for="(item,index) of newsList" :key="index">
                    <div v-for="o of item"  :key="o.id" class="imgText">
                        <div>
                            <img :src="o.src">
                        </div>
                        <div class="text">
                            <p class="text-1">{{o.desc1}}</p>
                            <p class="text-2">{{o.desc2}}</p>
                        </div>
                    </div>
                </swiper-slide>
            </swiper> 
        </div>
    </div>
</template>
<script>
import pic1 from '@/assets/image/icon4.png'
import pic2 from '@/assets/image/icon2.png'
import pic3 from '@/assets/image/icon3.png'
import pic4 from '@/assets/image/card9.png'
export default {
    name:'CardNew',
    data(){
        return{
            newsList:[
               [
                {id:'1-1',src:pic1,desc1:'1元抢30元话费',desc2:'1元抢30元话费1元抢30元话费'},
                {id:'1-2',src:pic2,desc1:'1元抢30元话费1元抢30元话费',desc2:'1元抢30元话费1元'},
                {id:'1-3',src:pic3,desc1:'1元抢30元话费',desc2:'1元抢30元话费1元'}
               ],
               [
                {id:'1-1',src:pic3,desc1:'1元抢30元话费',desc2:'1元抢30元话费1元抢30元话费'},
                {id:'1-2',src:pic1,desc1:'1元抢30元话费1元抢30元话费',desc2:'1元抢30元话费1元'},
                {id:'1-3',src:pic2,desc1:'1元抢30元话费',desc2:'1元抢30元话费1元'}
               ],
                
            ],
            swiperOption: {
             pagination: '.swiper-pagination' ,
             loop: false,
           }
        }
    },
     computed: {
        showSwipers: function () {
            return this.newsList.length
        }
    }
}

</script>

<style scoped>

.contentBox{
   padding: 1.5%;
   margin: 1.5%;
   border: 1px solid #eeeeee;
   box-sizing: border-box;
    
}
.imgText{
    display: flex;
    margin-top: 1%;
}
.text p{
    margin-top: 3%;
    margin-bottom: 3%;
    text-align: left;
}
.text{
    margin-left: 2%;
}
.text-2{
    font-size: 10px;
    color: #91919e;
}
.text-1{
    font-size: 12px;
}
</style>