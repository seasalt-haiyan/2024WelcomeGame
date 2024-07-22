<template>
    <div class="background"></div>
  <WhiteScreen >
    <div>
        <p>你的一个非常低级的MQTT服务器收到消息，它只会向你展示发布者传来的HEX原始文本，以下是其中的一部分：</p>
    
    
        <p>300c 0004 7878 7978 6278 7879 7862 ，你想破解其中包含的消息内容。（输入：只需要输入消息内容。）</p>
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
   