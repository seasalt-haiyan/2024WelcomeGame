<template>
    <div class="background">
      <!-- 后期要删 -->
      <WhiteScreen></WhiteScreen>
      <div class="back">
  
      </div>
      <div class="error">  
          <div class="chara">
              <img src="../assest/wrong.png" alt="" class="img">
              <span style="color: #FBE6D7;">再想想呢</span>
          </div>
      </div>
    </div>
  </template>
  <script setup>
  import WhiteScreen from "./WhiteScreen.vue";
  </script>
  
  <style scoped>
  .error{
      position: absolute;
      top: 42vh;
      left: 20vw;
      width: 60vw;
      height: 8vh;
      background-color:#907D6F;
      font-family: "YouYuan";
      border: 5px solid  #FBE6D7;
      border-radius: 20px;
  
  }
  .back{
      width: 100vw;
      height: 100vh;
      background-color: white;
      opacity: 50%;
  }
  .chara{
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 5vh;
  }
  .background {
          width: 100%;
          height: 100vh; /* 确保背景高度覆盖整个视口 */
          background: url('../assest/castle.png') no-repeat center center; /* 居中显示背景图片 */
          background-size: cover; /* 确保背景图片覆盖整个容器 */
          opacity: 0.7; /* 设置背景图片透明度 */
      }
      @media screen and (max-width: 768px) {
          .error{
              position: absolute;
              top: 40vh;
              left: 20vw;
              width: 60vw;
              height: 3vh;
              background-color:#907D6F;
              font-family: "YouYuan";
              border: 5px solid  #FBE6D7;
              border-radius: 20px;
          }
          .chara{
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 5vw;
          }
          .img{
              width: 5vw;
          }
      }
  </style>