<template>
    <div class="background"></div>
  <WhiteScreen >
    <div>
        <p>现在，你获得了一堆设备和模块，并且可以连接到网络。</p>
    
    
        <p>你有了一个理想的12位ADC模块，参考电压为2.5V。你的面前有三个没有任何标识的电源，连接电源与ADC模块，模块输出了数字666、2024、1145，向导考拉提示道：“如果标注电压，方可过关，否则必遭严惩，你明白吗？”（输入：包含单位V，保留两位小数即可，多个值中间空一格。）</p>
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
      instance.post('/sipc/iot/second', obj).then((res)=>{
        console.log(obj);
        console.log(res);
        if(res.code === "200" ){
            router.push('/Iot/question3');
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
   