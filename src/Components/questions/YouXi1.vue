<template>
    <div class="background"></div>
    <WhiteScreen >
        <div>
            <p>再三思考之下，你戴上了游戏学院的院帽，分院仪式结束后，你前往了游戏组报道，在门口看到了一个穿着院服的学长，嘴里小声的反复念叨着什么“关注涌厨沓斐喵”。你虽然疑惑这话是什么意思，但你还是找了个位置坐了下来。不一会，学院的老师走进了教室，向新同学们解释起了游戏学院对抗Cyrus的方式。“你们进入游戏学院，会被赐予祝福，你们在游戏世界的造物会映射到现实世界中，所以我们游戏学院的学子有着无尽的可能性，这都取决于你们的练习与思考。”看着面露骄傲神色的老师，你似乎也被一股无形的力量所感染，内心充满对未来的希望。十分钟后，老师激情的演讲结束了，在最后留给了大家一个小问题，“既然你们成为了游戏学院的一份子，以后必然和游戏引擎少不了接触，请说出一个主流的游戏引擎”</p>

        </div>
        <span class="answer">答案是：<input type="text" v-model="answer"></span>
    </WhiteScreen>
    <button  class="submit" @click="sumbit">
        提交
    </button>    
    </template>
        
    <script setup>
    import WhiteScreen from '@/Components/WhiteScreen.vue';
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