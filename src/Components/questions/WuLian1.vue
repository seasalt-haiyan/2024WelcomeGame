<template>
    <div class="background"></div>
  <WhiteScreen >
    <p>欢迎来到物联网的世界！在这里，你可以实现任意的智能化，比如自动驾驶，自制相机等等，下面会有模拟开发的入门题目，来试试吧</p>
    
    
    <p>对于物联网来说，点亮一个灯是程序员的"hello world!"，下面是一个模拟点灯表格，你要在需要的地方设置为1，不需要的地方设置为0：基本的点灯流程为开启对应时钟，把灯的电路连接。已知现在灯在GPIOA、14号电路上。</p>

    <p>GPIOA</p>
    <p>设置为1:</p>
    <p>开启GPIOA的时钟</p>
    <p>设置为0:</p>
    <p>关闭GPIOA的时钟</p>
    <br>

    <p>GPIOB</p>
    <p>设置为1:</p>
    <p>开启GPIOB的时钟</p>
    <p>设置为0:</p>
    <p>关闭GPIOB的时钟</p>
    <br>

    <p>GPIOC</p>
    <p>设置为1:</p>
    <p>开启GPIOC的时钟</p>
    <p>设置为0:</p>
    <p>关闭GPIOC的时钟</p>
    <br>

    <p>12号</p>
    <p>设置为1:</p>
    <p>连接12号电路</p>
    <p>设置为0:</p>
    <p>断开12号电路</p>
    <br>

    <p>13号</p>
    <p>设置为1:</p>
    <p>连接13号电路</p>
    <p>设置为0:</p>
    <p>断开13号电路</p>
    <br>
    
    <p>14号</p>
    <p>设置为1:</p>
    <p>连接14号电路</p>
    <p>设置为0:</p>
    <p>断开14号电路</p>
    <br>
    <p>请写出对应设置的值:(依次写入)</p>
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
      instance.post('/sipc/iot/first', obj).then((res)=>{
        console.log(obj);
        console.log(res);
        if(res.code === "200" ){
            router.push('/Iot/question2');
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
   