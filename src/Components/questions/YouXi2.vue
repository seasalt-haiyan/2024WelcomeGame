<template>
    <div class="background"></div>
    <WhiteScreen >
        <div>
            <p>你入院已经很久了，经过了每天的学习与练习，你现在已经有了一定的能力去对抗一些弱小的Cyrus。结束了今天一整天的实战练习后，你全身放松的躺在床上开摆，回想起有一次可真是惊险，六七团Cyrus一起发现了你，他们好像一起喊着羁绊啊友情啊什么的就冲了过来，还好你早在自己的周围就布置好了陷阱，想起刚入院的那段时间，老师给大家上的一节课：“我们平时执行任务充满了危险，所以如果能不战而胜自然是最好的，今天就教大家布置陷阱，大家都知道在游戏中很多物体都会设置碰撞体，让玩家不能穿过它，比如地图边缘和房子树木...还有些游戏中的NPC没有实体的模型，也就是没有碰撞体，如果和他碰到一起会直接穿过他，我们的陷阱就是与碰撞体有关的，在对一个物体添加碰撞体后，只要将碰撞体修改为______模式，就可以不产生碰撞的去检测碰撞，从而通过检测结果去触发我们的陷阱。”</p>
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