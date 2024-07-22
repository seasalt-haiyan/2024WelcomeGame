<template>
    <div class="background"></div>
  <WhiteScreen >
    <p>为了对抗Cyrus，你和你的小伙伴需要设计一个软件。为了能尽快做出这个产品，明确需求的优先级是一项很重要的工作，怎么排出需求的优先级呢？小考拉向导好像看出了你的烦恼，把你带到了学院的神秘森林！神秘森林中有一棵极有智慧的老神树，它总是能给这些聪明的年轻人一些非常有用的指引！</p>
    
    
    <p>（啪嗒啪嗒  啪嗒啪嗒）你走到了老神树面前戳了戳它（戳戳<br/>“是——谁——吵——醒——我？？？！”</p>

    <p>（哈——）老神树伸了个懒腰：“咳咳，那个...年轻人你能不能帮我一点小忙...”他看起来还有点不好意思的挠了挠头，“我...我有点饿了嘿嘿嘿...你能不能帮我找点薄荷叶子吃哇...”</p>
    <p>你松了一口气，原来只是找点薄荷叶子啊，来找老神树的路上刚好就有！你赶紧回去摘了一些薄荷叶子给老神树。</p>
    <p>正当你疑惑如何获得老神树的指引时，耳边突然听见了一些可可爱爱的声音“kano kano kano kano...”</p>
    <p>你刚想说老神树吃东西的声音好可爱啊,突然灵光一闪！明确需求的优先级可以用KANO模型呀！</p>
    <p>那么~KANO模型将用户需求分成哪几类了呢？</p>

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