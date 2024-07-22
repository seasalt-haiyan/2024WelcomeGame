<template>
  <span class="bear">
      <img src="../assest/bear.png" alt="">
      <div class="num">共通过了{{num}}关</div>
  </span>
</template>

<script>
import {ref} from 'vue'
export default {
    setup(){
        let num=ref(0)
        console.log(num)
        return {
            num
        }
    }

}
</script>

<style scoped>
.bear {

    position: absolute;
    top: 6vh;
    left: 13vw;
}
    img {
        position: absolute;
        width: 50px;
    }
    .num {
        width: 100px;
        height: 30px;
        background-color: #907D6F;
        color: white;
        font-size: 40;
        display: flex;
    justify-content: center;
    align-items: center;
    padding:2px 10px 2px 40px;
    margin: 0px 10px ;
    border-radius: 17px;
    font-family: Arial, Helvetica, sans-serif;
    }
</style>