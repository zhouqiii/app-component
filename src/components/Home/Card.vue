<template>
    <div>
        <div class="card">
            <el-row class="cardRow">
                <el-col :span="10" v-for="(item, index) in cardList1" :key="item.id" :offset="index > 0 ? 2 : 0" class="cardCol">
                    <el-card :body-style="{ padding: '2% 4%' }">
                    <img :src="item.src" class="image">
                    <div>
                        <p id="cardtext">{{item.des}}</p>
                        <p id="cardps">{{item.ps}}</p>
                    </div>
                    </el-card>
                </el-col>
            </el-row>
            <el-row class="cardRow">
                <el-col :span="10" v-for="(o, index) in cardList2" :key="index" :offset="index > 0 ? 2 : 0" class="cardCol">
                    <el-card :body-style="{ padding: '2% 4%' }">
                    <img :src="o.src" class="image">
                    <div>
                        <p id="cardtext">{{o.des}}</p>
                        <p id="cardps">{{o.ps}}</p>
                    </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
        <div></div>
    </div>
</template>
<script>
import pic1 from '@/assets/image/card1.png'
import pic2 from '@/assets/image/card5.png'
import pic3 from '@/assets/image/card6.png'
import pic4 from '@/assets/image/card7.png'
export default {
    name:'Card',
    data(){
        return{
            cardList1:[
                {id:'1',des:'长城留留学生卡',ps:'免手续费',src:pic1},
                {id:'2',des:'长城留学生卡',ps:'免手续费',src:pic2},
               
            ],
             cardList2:[
                {id:'1',des:'长城留留学生卡',ps:'免手续费',src:pic3},
                {id:'2',des:'长城留学生卡',ps:'免手续费',src:pic4},
               
            ]
        }
    }
}
</script>

<style scoped>

.cardRow {
  display: flex;
  flex-flow:row wrap;
  justify-content: space-between;
  padding: 1.5%;
  position: inherit;
}
.cardCol{
    /* width: 50%; */
}
#cardtext{
    font-size: 12px;
    margin-bottom: 0%;
    margin-top: 1%;
}
#cardps{
    font-size: 10px;
    margin-bottom: 0%;
    margin-top: 1%;
    color: gray;
}
.image {
    width: 100%;
    display: block;
  }
.el-col-offset-2{
    margin-left: 5% !important;
}
</style>
