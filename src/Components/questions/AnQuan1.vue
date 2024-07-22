<template>
    <div class="background"></div>
    <WhiteScreen>
        <div>
        <p>欢迎来到安全组(鼓掌)！你们的到来，让我们感到无比的兴奋和期待(鼓掌)。作为这个世界的守护者，我们肩负着抵御 Cyrus 侵袭的重任，而你们，就是我们未来的希望(鼓掌)。</p>
        <br>
        <p>在这里，你们将接受最专业的训练，学习最先进的技术，与最优秀的伙伴一起并肩作战。我们相信，你们每个人都有自己的独特之处，都有能力成为一名出色的安全战士。</p>
        <br>
        <p>但是，我们也要提醒你们，这里的生活并不轻松。你们将面临各种挑战和困难，需要付出更多的努力和汗水。但请相信，只要你们坚持不懈，勇于拼搏，就一定能够战胜一切困难，成为一名真正的英雄。</p>
        <br>
        <p>最后，我们希望你们能够珍惜这次机会，充分发挥自己的潜力，为守护这个世界而努力奋斗！</p>
        <br>
        <p style="font-size: 45px;"><b>web</b></p>
        <p>在TUT组织的不断努力下, 我们派遣了一位光战士潜入了Cyrus内部, 他在Cyrus的网络中为你留下了一段密钥用来指引你前行</p>
        <p>但是,为了此次行动不被察觉,我们将这段密钥藏在一个游戏中来迷惑Cyrus的检测</p>
        <p>不幸的是, 这个游戏还是引起了Cyrus的注意, 虽然他们不知道其中的秘密, 但他们将游戏的难度大幅提高, 只有你的分数达到20000以上, 你才能获得其中的密钥</p>
        <p>我们知道这几乎是一件不可能完成的任务, 但是, 总会有什么办法的!</p>
        <p>加油吧, 勇士!</p>
        <br>
        <p>Tips: </p>
        <p>1. 这是一个2048游戏, 按动键盘上的上下左右键开始!</p>
        <p>2. 或许你应该先了解一下JavaScript?</p>
        <p>3. 不要尝试对服务器发起攻击或压力测试!!!</p>
        <br>
        <p>游戏地址:</p>
        <p>https://nacl1.github.io/Game/</p>
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
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import WhiteScreen from '../WhiteScreen.vue';
import littleBear from '../../Components/littleBear.vue';
  import littleLog from '../../Components/littleLog.vue';


let answer = ref('');
const router = useRouter();
const obj={
    answer:answer.value
}
const sumbit = ()=>{
  axios.post('http://127.0.0.1:4523/m1/4859235-4514837-default/sipc/secure/first',obj).then((res)=>{
    console.log(res);
        if(res.status === 200 ){
            router.push('/safe/question2');
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