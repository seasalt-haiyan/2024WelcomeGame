<template>
    <div class="main1" id="bg">
      <WhiteScreen>
    
    <seperate-questions><slot></slot></seperate-questions>
      </WhiteScreen>
      <span class="next" @click="next">提交</span>
    </div>
  </template>
  
  <script>

  import WhiteScreen from './WhiteScreen.vue'
  import {ref,reactive} from 'vue'
import seperateQuestions from './seperateQuestions.vue'
  
  
  export default {
      name:'EnterGame',
      components:{
          WhiteScreen,
          seperateQuestions
      },
      setup() {

          return {
           
      }
  
  }
}
  </script>
  
  <style>
  * {
    padding: 0;
    margin: 0;
  }

      .main1 {
          width: 100vw;
          height: 100vh;
          opacity: 0.7;
          background: url(../assest/stairs.jpg);
          background-size: cover;
          background-repeat: no-repeat;
          background-position:  center center;
  
      }

 
  
  </style>