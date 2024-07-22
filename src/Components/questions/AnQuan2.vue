<template>
     <div class="background"></div>
     <WhiteScreen>
        <div>
        <p style="font-size: 45px;"><b>Reverse Engine</b></p>
        <p>在一个夜晚，Cyrus突然对我们发起了一次猝不及防的网络攻击。他们的目标是我们藏着重要信息的服务器。幸运的是，我们的防御系统成功地抵挡了他们的直接攻击。但是，Cyrus并没有就此罢休，他们在我们的网络中留下了一个神秘的程序。</p>
        <p>这个程序是一个锁，它将我们的重要信息锁在了其中。这个锁看起来非常复杂，我们的分析师试图破解它，但是没有成功。为了保护我们的信息，我们需要你的帮助。你的任务是，通过逆向工程的方法，找出这个锁的解锁密码。</p>
        <p>附件地址：</p>
        <p>https://www.lanzouh.com/iWQQA245q02f</p>
        <p>密码:d16o</p>
    </div>
      <span class="answer">答案是：<input type="text" v-model="answer"></span>
    </WhiteScreen>
  <button  class="submit" @click="sumbit">
    提交
  </button>
    
</template>
    
<script setup>
import WhiteScreen from '../WhiteScreen.vue';
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
let answer = ref('');
const router = useRouter();
const obj={
    answer:answer.value
}
const sumbit = ()=>{
  axios.post('http://127.0.0.1:4523/m1/4859235-4514837-default/sipc/secure/second',obj).then((res)=>{
    console.log(res);
        if(res.status === 200 ){
            router.push('/safe/question3');
        }
  }).catch((err)=>{
    console.log(err);
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