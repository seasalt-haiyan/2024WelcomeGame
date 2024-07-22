<template>
    <div class="background"></div>
    <WhiteScreen >
        <div>
            <p>你和海星终于快快乐乐的上路了，半路他说他离开大海太久了快干巴了，给你指了条路就自己溜了，你叹了口气，又独自上路了。</p>
            <p>突然灌木丛里跳出来一个披头散发的黑袍老太，她酷似童话里的恶毒继母，你安慰自己，这是学院里，怎么会真有坏人呢！你问她叫什么名字。她说”我叫坏家伙。桀桀桀桀桀桀桀“</p>
            <p>坏家伙说：”我有两个苹果，你一个我一个“，恰好就是一红一绿两个苹果！你拿膝盖想了想也知道红苹果=毒苹果！你刚想结果绿苹果，坏家伙大笑一声直接啃了绿苹果，并把红苹果塞到了你手上！</p>
            <p>你非常紧张，只要红苹果能变成绿苹果，就不会中毒了吧！你这次翻阅了前端魔法入门2《css大法》你念道：</p>
            <p>apple{</p>
            <p>___________</p>
            <p>}</p>
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