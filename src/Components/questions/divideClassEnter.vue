<template>
    <div class="main1" id="bg">
      <WhiteScreen>
        <p>“恭喜你进入了{{classChoose}}学院！”</p>
        <br>
        <p>分院帽的声音刚刚落下，小考拉便兴奋地扯了扯你的衣角，示意你跟上它。你跟在小考拉身后，耳边传来同学们的欢声笑语。</p>
        <br>
        <p>经过一片波光粼粼的湖泊，湖水清澈见底，鱼儿在水中自由自在地游弋。湖边的垂柳随风摇曳，仿佛在向你招手。</p>
        <br>
        <p>不多时，一座宏伟的建筑出现在眼前，那便是你所属学院的所在地。建筑的大门上方镶嵌着学院的徽章，闪耀着神秘的光芒。你走进了这扇大门，开启了一段新的征程。</p>
      </WhiteScreen>
        <littleBear/>
        <littleLog/>
      <span class="next" @click="next">next></span>
    </div>
  </template>
  
  <script >
  import WhiteScreen from '../../Components/WhiteScreen.vue'
  import littleBear from '../../Components/littleBear.vue';
  import littleLog from '../../Components/littleLog.vue';
  import {ref,reactive} from 'vue'
  import { useRouter } from 'vue-router';
  
  
  
  export default {
    
      name:'EnterGame',
      components:{
          WhiteScreen,
          littleBear,
            littleLog
      },
      setup() {
        let classChoose=ref('')//选择的学院
          function next(){
            //跳转方向第一题
          }
          return {
            next,
          }
      }
  
  }
  </script>
  
  <style scoped>
        .next {
          color:white;
          font-size: 40;
          position: absolute;
          left: 80%;
          top:80%;
        }
      .main1 {
          width: 100vw;
          height: 100vh;
          opacity: 0.7;
          background: url('../../assest/hall.jpg');
          background-size: cover;
          background-repeat: no-repeat;
          background-position:  center center;
  
      }

      /* 根据视口宽度判断设备 */
  
  </style>