<template>
    <div class="background"></div>
  <WhiteScreen >
    <div>
        <p>太好啦！你走出了迷宫！刚走了两步你就遇到了一只派大星（别问魔法学院为啥有海星，海星哥看到你，问你是不是前端组的新生，你心中一喜，你回答道“是！”，海星说：”啥我听不见！“你大声重复了一遍是，他却挠挠头，说”兄弟，你不告诉我你身份，我是不能带你去学院的。“你情急之下想对着他耳朵大喊，但是海星的耳朵在哪啊！！</p>   
        <p>你必须用一些魔法来扩大声音了！</p>    
        <p>把你虚弱的一声"是"变成</p>
        <p style="font-size: 3rem;"><b>"是"</b></p>
        <p>你又掏出了《html》，你念道：</p>
    </div>
      <span class="answer">答案是：<input type="text" v-model="answer"></span>
  </WhiteScreen>
  <button  class="submit" @click="sumbit">
    提交
  </button>
  
  
  
  </template>
    
    <script setup>
  import WhiteScreen from '@/Components/WhiteScreen.vue';
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