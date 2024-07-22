<template>
  <div class="main1" id="bg">
    <WhiteScreen><enter-one v-if="isShow.One"/><enter-two v-if="isShow.Two"/></WhiteScreen>
    <span class="next" @click="next">next></span>
  </div>
</template>

<script>
import WhiteScreen from '../Components/WhiteScreen.vue'
import enterTwo from './enterGame/enterTwo.vue'
import enterOne from './enterGame/enterOne.vue'
import {ref,reactive} from 'vue'
import { useRouter } from 'vue-router';



export default {
  
    name:'EnterGame',
    components:{
        WhiteScreen,
        enterOne ,
        enterTwo
    },
    setup() {
        const router = useRouter();
        let pageNumer=1;
        let isShow=reactive({
          One:true,
          Two:false
        });
        
        function next(){
          // console.log(isShow)
          pageNumer++;
          if(pageNumer<=2){
            isShow.One=!isShow.One
            isShow.Two=!isShow.Two
            const background=document.getElementById('bg')
            
            background.classList.add('main2')
          }else{
            router.push('/Cquestion')
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

<style scoped>
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
        background: url(../assest/house.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position:  center center;

    }
    .main2{
      background: url(../assest/library.jpg);
      background-size: cover;
      background-repeat: no-repeat;
      background-position:  center center;
    }
    /* 根据视口宽度判断设备 */

</style>