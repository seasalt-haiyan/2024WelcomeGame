<template>
  <div class="main">
    <WhiteScreen>1111</WhiteScreen>
  </div>
</template>

<script>
import WhiteScreen from '../components/WhiteScreen.vue'

export default {
    components:{
        WhiteScreen
    }

}
</script>

<style>
    .main {
        width: 100vw;
        height: 100vh;


    }
    /* 根据视口宽度判断设备 */
@media (max-width: 768px) {
  /* 手机设备的样式 */
  .main{
    background-color: red;
    opacity: 0.7;
        background: url(../src/assets/house.jpg);
        background-size: contain;
        background-repeat: no-repeat;
  }
}

@media (min-width: 769px) {
  /* 电脑设备的样式 */
  .main{
    background-color: red;
    opacity: 0.7;
        background: url(../src/assets/house.jpg);
        background-size: contain;
        background-repeat: no-repeat;
        background-position:  center center;
  }
}

</style>