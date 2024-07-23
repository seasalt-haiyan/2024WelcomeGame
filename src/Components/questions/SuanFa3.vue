<template>
    <div class="background"></div>
    <WhiteScreen >
        <div>
            <p>因为你努力学习算法，河神奖励了你许多果子，它们一堆一堆摆放在地面上，共<b>20</b>堆，你决定把所有的果子合成一堆。</p>
        <p>每一次合并，你可以把任意两堆果子合并到一起，消耗的体力等于两堆果子的重量之和。可以看出，所有的果子经过<b>19</b>次合并之后， 就只剩下一堆了。你在合并果子时总共消耗的体力等于每次合并所耗体力之和。</p>
        <p>因为还要花大力气把这些果子搬回家，所以你在合并果子时要尽可能地节省体力。假定每个果子重量都为 <b>1</b> ，并且已知：前<b>10</b>堆果子，每堆的个数分别为i[log<sub>2</sub>i](1&lt;=i&lt;=10)；后<b>10</b>堆果子，每堆的个数分别为i<sup>2</sup>(1&lt;=i&lt;=10)。你的任务是设计出合并的次序方案，使你耗费的体力最少，并输出这个最小的体力耗费值。</p>
        </div>
        <span class="answer">答案是：<input type="text" v-model="answer"></span>
    </WhiteScreen>
    <littleBear/>
    <littleLog/>
    <button  class="submit" @click="sumbit">
        提交
    </button>   
    <CommonError v-if="error"/> 
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
        const router = useRouter();
        let error = ref(false);       
        const sumbit = ()=>{
            // axiox.post
            const obj = {
            answer: answer.value
        }
        /*console.log('111');*/
        instance.post('/sipc/algorithm/third', obj).then((res)=>{
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