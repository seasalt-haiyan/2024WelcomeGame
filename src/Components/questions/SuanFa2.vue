<template>
    <div class="background"></div>
    <WhiteScreen >
        <div>
            <p>在一片神秘的森林中，有一座闪耀着光芒的古老堡垒。这座堡垒里隐藏着一件神秘的宝物，传说中它拥有无穷的力量。为了找到这件宝物，你只身进入了森林。</p>
        <p>经过一番周折，在你面前的是一棵参天大树，奇怪的是这棵树从顶到下每一个书节点都分叉有两根树枝，共四层。树枝和节点从上向下从左向右看依次编号为12345678。其中1在第一层连接着2 3，2在第二层连接着4 5， 3在第二层连接着6，5在第三层连接着7 8 ，树旁有座石碑缺失密码，碑文撰"按左枝-节点-右枝输入密码"，你好像想到什么。</p>

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