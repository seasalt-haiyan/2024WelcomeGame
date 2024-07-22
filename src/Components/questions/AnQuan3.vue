<template>
    <div class="background"></div>
     <WhiteScreen>
        <div>
        <p style="font-size: 45px;"><b>Pwn</b></p>
        <p>在光战士们前仆后继的努力下，终于拿到了Cyrus内部系统的一个程序源码，又在安全组的哥哥姐姐们夜以继日的努力下，发现这个程序中有严重的栈溢出漏洞，或许从而可以拿到Cyrus内部系统的控制权，窃取他们的机密文件，又又在安全组的哥哥姐姐们夜以继日的努力下，发现程序中有很多值得利用的地址:</p>
        <p>pop rax; ret :0x111111</p>
        <p>pop rbx; ret :0x222222</p>
        <p>pop rcx; ret :0x333333</p>
        <p>pop rdx; ret :0x333333</p>
        <p>pop rdi; ret :0x444444</p>
        <p>pop rsi; ret :0x555555</p>
        <p>pop r8; ret :0x666666</p>
        <p>pop r9; ret :0x777777</p>
        <p>pop r10; ret :0x888888</p>
        <p>system函数的地址 :0x114514</p>
        <p>write函数的地址 :0x985985</p>
        <p>read函数的地址 :0x211211</p>
        <p>"/bin/sh"字符串的地址 :0x857857</p>
        <p>"TUT! What Can I Say?"字符串地址 :0x242424</p>
        <br>
        <p>怎么把他们组合起来控制程序的执行流才能拿到Cyrus内部系统的控制权呢？</p>
        <br>
        <p>注意:</p>
        <p>答案是地址的组合，中间用英文逗号(,)隔开，例：0x111111,0x222222,0x333333</p>
        <br>
        <p>Tips:</p>
        <p>什么是pop？什么是ret？寄存器都有哪些？程序执行函数时是怎么利用寄存器传参的？需要执行的是system("/bin/sh")</p>
        


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
  axios.post('http://127.0.0.1:4523/m1/4859235-4514837-default/sipc/secure/third',obj).then((res)=>{
    console.log(res);
        if(res.status === 200 ){
            router.push('/safe/question4');
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