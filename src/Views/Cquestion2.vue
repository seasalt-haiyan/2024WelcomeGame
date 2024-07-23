<template>
  <div class="background"></div>
  <littleBear :num="1"/>
  <littleLog/>
<WhiteScreen >
    <p>紧接着你从一旁的桉树上摘下一段带着鲜嫩叶子的桉树枝，递给了小考拉，考拉满意极了，领着你来到了分院礼堂。你听周围的同学们说，这个分院帽会给你出一道题，答对了这道题你就可以选择自己想去的学院。你心想“一定要试试，选一个适合自己的学院！”</p>
    <br>
    <br>
    <p>轮到你戴上分院帽了，你看到了前面的同学们有悲有喜，你也怀揣着紧张的情绪坐上了分院之椅</p>
    <p>分院帽：“你好哇！聪明的年轻人！下面我要说几个密码，你需要通过它们破译出分院咒语，才能选择想去的学院。准备好了吗！”</p>
    <p>“83 73 80 67 49 49 53”</p>
    <p>你想了想，大声喊出了分院咒语：_______!</p>
    <span class="answer">答案是：<input type="text" v-model="answer"></span>
</WhiteScreen>
<CommonError v-if="error"/>
<button  class="submit" @click="submit">
  提交
</button>



</template>
  
<script setup>
import WhiteScreen from '@/Components/WhiteScreen.vue';
import littleBear from '@/Components/littleBear.vue';
import littleLog from '@/Components/littleLog.vue';
import CommonError from '@/Components/CommonError.vue';
import { useRouter } from 'vue-router';
import instance from '../http';
    import { ref } from 'vue';
    let answer = ref('');
    let error = ref(false);
    const router = useRouter();

    
    const submit = ()=>{
      const body = {
      answer: answer.value
    }
      instance.post('/sipc/main/second', body).then((res)=>{
        if(res.code === "200" ){
            router.push('/divideClass');
        }else if(res.code === "400"){
          error.value = true;
          setTimeout(()=>{
            error.value = false;
          },3000)
        }
    }
  ).catch((err)=>{
      alert('请检查你的代码是否正确');
  });
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
    background: url('../assest/hall.jpg') no-repeat center center; /* 居中显示背景图片 */
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
    background: #A17F78;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom:10vh;
    border-radius: 10px;
    cursor: pointer;
  }
  </style>