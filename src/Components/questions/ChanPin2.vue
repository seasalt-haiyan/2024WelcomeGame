<template>
    <div class="background"></div>
  <WhiteScreen >
    <div>
        <p>你走进了一个神秘房间，房间布置古朴典雅，墙壁上绘制着复杂的符号和图案，似乎蕴含着无限的智慧和秘密。房间中央摆放着一张巨大的古老书桌，桌上放着一本本厚重的古籍和形形色色的奇怪物件。</p>

​    
        <p>你靠近书桌，一本本书看过去《俞军产品方法论》《决胜B端》《增长黑客》……突然书桌上的古怪物件发出微弱的光芒，一道声音响起：“欢迎来到肖恩·埃利斯的神秘房间，准备好迎接你的挑战吧。”</p>

        <p>你紧张而兴奋地站定，准备迎接挑战。突然，房间里传来幽幽的声音“SWOT……SWOT……”</p>
        <p>你思索片刻，很快就明白了这是需要你解释SWOT是什么，你在脑中思索片刻就确定了答案并坚定地说道：</p>
        <p>__________________</p>
        <p>房间中的光芒突然一闪，声音也随之消失。一阵悦耳的音乐响起，房间的气氛变得温暖而祥和。你感到一股肃穆的力量在房间中弥漫开来……</p>

​    </div>
      <span class="answer">答案是：<input type="text" v-model="answer"></span>
  </WhiteScreen>
  <littleBear/>
  <littleLog/>
  <button  class="submit" @click="sumbit">
    提交
  </button>
  
  
  
  </template>
    
    <script setup>
  import WhiteScreen from '@/Components/WhiteScreen.vue';
  import littleBear from '../../Components/littleBear.vue';
  import littleLog from '../../Components/littleLog.vue';
      import { ref } from 'vue';
      let answer = ref('');
      
      const sumbit = ()=>{
        // axiox.post
        console.log('111');
      }
    </script>
    
    <style scoped>
    * {
      padding: 0;
      margin: 0;
    }
    .background{
      width: 100%;
      height: 100vh; /* 确保背景高度覆盖整个视口 */
      background: url('../../assest/hall.jpg') no-repeat center center; /* 居中显示背景图片 */
      background-size: cover; /* 确保背景图片覆盖整个容器 */
      opacity: 0.7; /* 设置背景图片透明度 */
    }
    input{
      font-size: 45px;
          width: 250px;
          border: none;
          border-bottom: 2px solid #000;
          background: transparent;
          padding: 5px 10px;
          outline: none;
    }
    .submit{
      width: 200px;
      height: 50px;
      background: #907D6F;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom:10vh;
      border-radius: 10px;
      cursor: pointer;
    }
    </style>
   