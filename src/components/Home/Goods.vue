<template>
    <div class="card">
        <div class="cardDisplay">
            <el-row class="cardRow">
                <el-col :span="8" v-for="(item, index) in cardList" :key="item.id" :offset="index > 0 ? 3 : 0">
                    <el-card :body-style="{ padding: '0px' }">
                    <img :src="item.src" class="image">
                    <div>
                        <p id="cardtext">{{item.des}}</p>
                        <p id="cardps">{{item.ps}}</p>
                    </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import pic1 from '@/assets/image/card2.png'
import pic2 from '@/assets/image/card4.png'
import pic3 from '@/assets/image/card4.png'
export default {
    name:'CardGood',
    data(){
        return{
             cardList:[
                {id:'1',des:'家居日用',ps:'防水创可贴套餐',src:pic1},
                {id:'2',des:'家居日用',ps:'防水创可贴套餐',src:pic2},
                 {id:'3',des:'家居日用',ps:'防水创可贴套餐',src:pic3},
                //  {id:'4',des:'家居日用',ps:'防水创可贴套餐',src:pic1},
               
            ],
        }
    }
}
</script>

<style scoped>
.cardDisplay{
    /* height: 100px; */
}

.cardRow {
  display: flex;
 
  justify-content: space-between;
  padding: 1.5%;
  position: inherit;
}
 .image {
    width: 100%;
    display: block;
  }
#cardtext{
    font-size: 14px;
    font-weight:bold;
    margin-bottom: 0%;
    margin-top: 1%;
}
#cardps{
    font-size: 10px;
    margin-bottom: 0%;
    margin-top: 1%;
    color: gray;
}
.el-col-offset-3{
    margin-left: 0;
    /* width: 33.3% !important; */
}
</style>
