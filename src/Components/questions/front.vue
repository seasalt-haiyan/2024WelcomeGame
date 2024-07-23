<template>
    <div class="background"></div>
  <WhiteScreen >
        <p>你来到了前端学院！一只油光水滑的海燕负责迎接你，指引你穿过到达学院必经的迷宫。你东张西望了一会，一抬头海燕都不知道飞到哪里了！完了，你要自己前进了！</p>
        <p>经过你的不懈努力！走到了死路！！不甘心的你凿壁偷光，竟然发现真正的出口只和你一墙之隔，你计上心头，翻阅起了前端入门魔法书《html》希望找到一条咒语，让你换行到真正出路！</p>
        <img src="./imgs/front.jpg" alt="">
        <p>你念出了咒语：</p>
      <span class="answer">答案是：<input type="text" v-model="answer"></span>
  </WhiteScreen>
  <littleBear/>
  <littleLog/>
  <CommonError v-if="error"/>

  <button  class="submit" @click="submit">
    提交
  </button>
  
  <br/>
  
  </template>
    
    <script setup>
  import WhiteScreen from '@/Components/WhiteScreen.vue';
  import littleBear from '../../Components/littleBear.vue';
  import littleLog from '../../Components/littleLog.vue';
  import CommonError from '../CommonError.vue';
  import  instance  from '../../http';
import { useRouter } from 'vue-router';
      import { ref } from 'vue';

      let answer = ref('');
      const router = useRouter();
      let error = ref(false);
      
      const submit = ()=>{
        // axiox.post
        const obj = {
            answer: answer.value
        }
      instance.post('/sipc/frontend/first', obj).then((res)=>{
        // console.log(obj);
        // console.log(res);
        if(res.code === "200" ){
            router.push('/front/question2');
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
   