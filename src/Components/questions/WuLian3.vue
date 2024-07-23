<template>
    <div class="background"></div>
  <WhiteScreen >
    <div>
        <p>你的一个非常低级的MQTT服务器收到消息，它只会向你展示发布者传来的HEX原始文本，以下是其中的一部分：</p>
    
    
        <p>300c 0004 7878 7978 6278 7879 7862 ，你想破解其中包含的消息内容。（输入：只需要输入消息内容。）</p>
    </div>
      <span class="answer">答案是：<input type="text" v-model="answer"></span>
  </WhiteScreen>
  <littleBear/>
  <littleLog/>
  <CommonError v-if="error"/>
  <button  class="submit" @click="submit">
    提交
  </button>
  
  
  
  </template>
    
    <script setup>
  import WhiteScreen from '@/Components/WhiteScreen.vue';
  import littleBear from '../../Components/littleBear.vue';
  import littleLog from '../../Components/littleLog.vue';
 import { ref } from 'vue';
import CommonError from '../CommonError.vue';
import  instance  from '../../http';
import { useRouter } from 'vue-router';
      let answer = ref('');
      const router=useRouter()
      let error = ref(false);
      const submit = ()=>{
        // axiox.post
        const obj = {
            answer: answer.value
        }
      instance.post('/sipc/iot/third', obj).then((res)=>{
        console.log(obj);
        console.log(res);
        if(res.code === "200" ){
            router.push('/end');
        }else if(res.code === "400"){
          error.value = true;
          setTimeout(()=>{
            error.value = false;
          },3000)
        }
    })
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
   