<template>
  <div class="main1" id="bg">
    <WhiteScreen><enter-one v-if="isShow.One"/><enter-two v-if="isShow.Two"/></WhiteScreen>
    <span class="next" @click="next">next></span>
  </div>
</template>

<script>
import WhiteScreen from '../Component/WhiteScreen.vue'
import enterTwo from './enterGame/enterTwo.vue'
import enterOne from './enterGame/enterOne.vue'
import {ref,reactive} from 'vue'


export default {
    name:'EnterGame',
    components:{
        WhiteScreen,
        enterOne ,
        enterTwo
    },
    setup() {
        let pageNumer=1;
        let isShow=reactive({
          One:true,
          Two:false
        });
        
        function next(){
          console.log(isShow)
          pageNumer++;
          console.log(pageNumer)
          if(pageNumer<=2){
            isShow.One=!isShow.One
            isShow.Two=!isShow.Two
            const background=document.getElementById('bg')
            console.log(background.classList)
            background.classList.add('main2')
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
      .next {
        color:white;
        font-size: 40;
        position: absolute;
        left: 80%;
        top:75%;
      }
    .main1 {
        width: 100vw;
        height: 100vh;
        opacity: 0.7;
        background: url(../assets/house.jpg);
        background-size: cover;
        background-repeat: no-repeat;

    }
    .main2{
      background: url(../assets/library.jpg);
    }
    /* 根据视口宽度判断设备 */
@media (max-width: 768px) {
  /* 手机设备的样式 */
 
}

@media (min-width: 769px) {
  /* 电脑设备的样式 */
 
}

</style>