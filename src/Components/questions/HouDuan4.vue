<template>
    <div class="background"></div>
  <WhiteScreen >
    <div>
        <p>你提交了token，成功地访问了学院的资源。在这个过程中，你注意到了一件有趣的事情：学长在使用资源时似乎并没有使用任何 token 或类似的身份验证机制。</p>
        <p>你的好奇心驱使你向学长提出了这个问题。学长微微一笑，解释道：“你正在使用的这种方法是面向全 SIPC 学校的标准身份验证流程。但作为后端学院的一员，我们有更直接的方式——使用管理员账户，可以无障碍地访问所有资源。”</p>
        <p>你的眼睛一亮，“想要这个管理员账户吗？”学长继续说道，语气中带着一丝挑战，“我们将这个账户的秘密分散到了各个学院的/back 位置。如果你有勇气和智慧，就去把它们找出来吧！”</p>
        <p>然后，你需要访问每个学院特的根路径+/back 路径来获取对应的私钥，这些私钥将被拼接到 key 中，逐步形成一段完整的密语。</p>
        <p>界面上的六个按钮分别对应着六个学院，你需要按照对应的指引，去探索 SIPC 学院的六个不同领域：前端、产品、算法、物联、安全和游戏。当你按下按钮，相应的公钥就会存储在 Authorization 中。然后，你需要访问每个学院特的根路径+/back 路径来获取对应的私钥，这些私钥将会按照访问的顺序进行拼接，逐步形成一段完整的密语。</p>
        <p>你需要收集齐所有的私钥，将它们拼接成一句话——"innovation passion cooperation Wellcome to SIPC115 ！！！"，并提交给我。</p>
    </div>
      <span class="answer">答案是：<input type="text" v-model="privateKey"></span>
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
      let privateKey = ref('');
      const router = useRouter();
      let error = ref(false);
      const sumbit = ()=>{
        // axiox.post
        const obj = {
          privateKey: privateKey.value
        }
        /*console.log('111');*/
        instance.post('/sipc/backend/fourth', obj).then((res)=>{
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