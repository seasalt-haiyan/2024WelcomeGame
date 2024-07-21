<template>
    <div class="main1" id="bg">
      <WhiteScreen><cquestionOne v-if="isShow.One"/><cquestionTwo v-if="isShow.Two"/></WhiteScreen>
      <div class="submit" @click="next">提交</div>
    </div>
  </template>
  
  <script>
  import WhiteScreen from '../Components/WhiteScreen.vue'
  import cquestionOne from './cquestion/cquestionOne.vue'
  import cquestionTwo from './cquestion/cquestionTwo.vue'
  import {ref,reactive} from 'vue'
  
  
  export default {
      name:'EnterGame',
      components:{
          WhiteScreen,
          cquestionOne,
          cquestionTwo
      },
      setup() {
          let pageNumer=1;
          let isShow=reactive({
            One:true,
            Two:false
          });
          
          function next(){
            // console.log(isShow)
            pageNumer++;
            console.log(pageNumer)
            if(pageNumer<=2){
              isShow.One=!isShow.One
              isShow.Two=!isShow.Two
              const background=document.getElementById('bg')
              const submit=document.querySelector('.submit')
              background.classList.add('main2')
              submit.style.background = '#A17F78'
            }else{
  
            }
          }
          return {
            next,
            pageNumer,
            isShow
          }
      }
  
  }
  </script>
  
  <style>
        .submit {
          color:white;
          position: absolute;
          width: 150px;
          height: 50px;
          background: #9AAB7E;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          font-size: 25px;
          border-radius: 10px;
          bottom: 100px;
        }
      .main1 {
          width: 100vw;
          height: 100vh;
          opacity: 0.7;
          background: url(../assest/castle.png);
          background-size: cover;
          background-repeat: no-repeat;
          background-position:  center center;
  
      }
      .main2{
        background: url(../assest/hall.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position:  center center;
      }
      /* 根据视口宽度判断设备 */
  @media (max-width: 768px) {
    /* 手机设备的样式 */
   
  }
  
  @media (min-width: 769px) {
    /* 电脑设备的样式 */
   
  }
  
  </style>