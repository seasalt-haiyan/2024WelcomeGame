<template>
    <div class="background"></div>
  <WhiteScreen >
    <div>
        <p>在神秘房间的挑战之后，你感到自己的心智得到了锻炼，对于产品设计和用户需求的理解更加深入。房间中的光芒渐渐消散，声音再次响起：“恭喜你，勇敢的战士，你已经通过了第一项考验。现在，你需要前往下一站，那里将有更多的挑战等待着你。”</p>
    
    
        <p>你被带到了SIPC学院的地下实验室，这里充满了科技的气息，各种先进的设备和仪器排列整齐，闪烁着光芒。一位穿着白大褂的教授迎接了你，他的眼神中透露出对你的期待和信任。</p>
    
        <p>教授指着一台看似普通的电脑屏幕，屏幕上显示着一串串代码和图表，他说：“这是一款正在开发中的抗Cyrus软件，但我们遇到了一些难题。我们需要你根据马斯洛需求层次理论，为这款软件设计一个功能，帮助使用者在对抗Cyrus的过程中得到心理上的支持。”你认真地思考了片刻，然后向教授解释道：“___________________"</p>
        <p>教授听了你的建议，露出了满意的微笑，他说：“很好，你的想法很有创意，也符合马斯洛需求层次理论。我相信这款软件在你的帮助下，将能够帮助更多的人在对抗Cyrus的过程中找到力量和希望。”</p>
        <p>（请将答案提交给桑子璇学姐，她将给你通往结局的密钥，QQ号：2864163255）</p>
    
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
      instance.post('/sipc/product/third', obj).then((res)=>{
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
   