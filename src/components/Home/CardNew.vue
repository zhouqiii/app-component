<template>
    <div class="card">
        <div class="contentBox">
            <div v-for="item of newsList" :key="item.id">
                <div style="display:inli-block">
                    <div>
                        <img :src="item.src">
                    </div>
                    <p>{{item.desc}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import pic1 from '@/assets/image/card8.png'
import pic2 from '@/assets/image/card9.png'
import pic3 from '@/assets/image/card8.png'
import pic4 from '@/assets/image/card9.png'
export default {
    name:'CardNew',
    data(){
        return{
            newsList:[
                {id:'1-1',src:pic1,desc:'1元抢30元话费'},
                {id:'1-2',src:pic2,desc:'1元抢30元话费'}
                
            ]
        }
    }
}

</script>

<style scoped>
.card{
    padding-bottom: 60px;
}
.contentBox{
    /* display: flex; */
    
}
</style>