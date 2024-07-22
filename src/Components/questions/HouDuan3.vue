<template>
    <div class="background"></div>
  <WhiteScreen >
    <div>
        <p>在你成功解开令牌之谜，输入了你的学号后，周围的世界似乎发生了微妙的变化。原本空无一人的图书馆突然变得熙熙攘攘，书架间穿梭着勤奋的学子和忙碌的学者。你很快意识到，先前的寂静和孤独不过是一种幻象，是图书馆对你的第一次考验。</p>
        <p>但这已经不重要了。随着大门的缓缓开启，你终于踏入了这座充满智慧的殿堂。当你还沉浸在这新奇的环境中时，你注意到了一个不寻常的存在——一只萝卜子。它似乎在你进入图书馆的那一刻起，就一直躲在角落里默默地观察着你。当你走上前去，打算询问自己接下来应该如何行动时，萝卜子却像是早已预料到你的问题，主动走了出来。</p>
        <p>  "你是想问你接下来该干什么吧。"，她如此说道，她是怎么知道的？你心想，但她似乎又看穿了你的想法，"毕竟我是高性能的嘛，你在前边的考验拿到了自己的学号吧，但这只能让你能进出图书馆，但是查阅图书馆的资料都需要一个叫做"token"的东西，换句话说就是你现在还没有完全被图书馆认可"。</p>
        <p>萝卜子故意停了一会，似乎是想看你的反应，但你并没有什么反应，这好像让萝卜子不是很高兴，"但是也不是没有办法，作为这座图书馆的管理员，我也有给予别人"token"的权限，但是你需要向我证明你自己的信息检索能力，方法也很简单，这是一个"token"的头部eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9，它里边是 token 的签名方法和 token 格式，我会暂时给你查阅这里资料的权限，你需要找到有关如何解读它的方法（上网查询），然后你要找到一位学者（上网查询），让他补全这个"token"，用来签名的秘钥为U0lQQzExNQ==，它和头部的加密方法是一样的，解密后即可得到真正的秘钥，最后再在负载（Payload）上声明 SIPC 学院的特产的三种宝石"innovation"，"passion"和"cooperation"，只有三种宝石都有（值都为 true（布尔值，不是字符串））并且融合为一个整体（作为一个类），命名为"Backend"时，"token"才能发挥正确的功能。这可不是故意刁难你哦，一定不是。拿到"token"后交给我检查一下，之后你就可以随意访问学院的资源了"。</p>

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
  import WhiteScreen from '@/Components/WhiteScreen.vue';
  import littleBear from '../../Components/littleBear.vue';
  import littleLog from '../../Components/littleLog.vue';
      import { ref } from 'vue';
      let answer = ref('');
      
      const sumbit = ()=>{
        // axiox.post
        console.log('111');
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