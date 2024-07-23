<template>
     <div class="background"></div>
     <WhiteScreen>
        <div>
        <p style="font-size: 45px;"><b>misc</b></p>
        <p>经历了这些, 你守护住了 SIPC, 抵御了 Cyrus 侵袭, 并且成长了很多, 在最后你需要配合警方找到幕后凶手, 由于犯罪团伙的违法行为, 警方开始了网上的溯源追踪, 根据警方的搜查, 截获了一段嫌疑人传输的密文:</p>
        <p>（密文放到最后了）</p>
        <p>与此同时, 警方还获取到了嫌疑人对接地点的图片</p>
        <img src="./imgs/anquan.png" alt="">
        <p>警方一头雾水的望着这段密文和截获的图片, 渴望着你的帮助, 守护者, 你能协助警方利用社会工程学的方式找到犯罪嫌疑人的真实姓名吗</p>
        <p>Tips: 对接地点是这张图片景点的外文, 若有任何疑问, 可以解开这段密文来联系到警方(出题人微信号), 和警方进一步沟通并获得更多hint(警方为了防止联系方式泄露, 在现场给你敲了一段密文, 聪明的你将此节奏记录了下来)</p>
        <p>--.- .- --.- -....- --.- .-- --.- -....- --.- ..--.- --.-</p>
        <p>友善爱国自由诚信民主友善平等爱国诚信自由诚信自由公正敬业友善公正爱国富强友善爱国平等友善自由自由诚信富强法治友善爱国法治敬业友善自由爱国自由友善爱国公正诚信民主爱国诚信民主爱国诚信自由公正爱国爱国爱国诚信平等友善爱国平等友善平等敬业诚信民主和谐诚信自由平等爱国诚信平等诚信民主富强友善爱国平等爱国诚信富强诚信富强富强诚信自由公正爱国爱国敬业民主文明诚信文明文明富强友善爱国公正敬业爱国诚信民主平等友善爱国法治友善自由法治友善平等富强友善爱国公正敬业爱国诚信富强友善敬业诚信自由平等敬业文明诚信民主民主友善爱国自由诚信民主诚信民主友善自由友善公正诚信自由法治敬业诚信富强爱国自由友善爱国平等诚信富强友善敬业诚信民主敬业诚信自由公正爱国友善爱国诚信富强平等友善爱国平等敬业友善公正诚信民主富强友善爱国法治爱国文明诚信民主敬业</p>
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
import WhiteScreen from '../WhiteScreen.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import littleBear from '../../Components/littleBear.vue';
  import littleLog from '../../Components/littleLog.vue';
  import CommonError from '../CommonError.vue';
  import  instance  from '../../http';
let answer = ref('');
let error = ref(false);
const router = useRouter();
const obj={
    answer:answer.value
}
const submit = ()=>{
        const obj = {
            answer: answer.value
        }
      instance.post('/sipc/secure/fifth', obj).then((res)=>{
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