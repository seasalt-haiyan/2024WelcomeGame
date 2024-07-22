<template>
    <div class="background"></div>
    <WhiteScreen >
        <div>
            
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