<template>
     <div class="background"></div>
     <WhiteScreen>
        <div>
        <p style="font-size: 45px;"><b>crypto</b></p>
        <p>在一个月黑风高的夜晚，一名光战士在Cyrus中得到了秘密情报，他害怕暴露，赶紧将这个重要信息加密过后，发给了十万八千里之外的你，请你尽快解密，得到这个重要情报，就能知道Cyrus的弱点！！！</p>
        <p>ZmF7eXVPdGxnQ3JzdX0=</p>
        <p>Tips:可以去看看古典密码，这不一定只有一种加密哦！(答案形式flag{xxx})</p>
    
    </div>
      <span class="answer">答案是：<input type="text" v-model="answer"></span>
  </WhiteScreen>
  <littleBear/>
  <littleLog/>
  <button  class="submit" @click="sumbit">
    提交
  </button>
   
</template>
    
<script setup>
import WhiteScreen from '../WhiteScreen.vue';
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import littleBear from '../../Components/littleBear.vue';
  import littleLog from '../../Components/littleLog.vue';
let answer = ref('');
const router = useRouter();
const obj={
    answer:answer.value
}
const sumbit = ()=>{
  axios.post('http://127.0.0.1:4523/m1/4859235-4514837-default/sipc/secure/fourth',obj).then((res)=>{
    console.log(res);
        if(res.status === 200 ){
            router.push('/safe/question5');
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