<template>
  <span class="bear">
      <img src="../assest/bear.png" alt="">
      <div class="num">共通过了{{num}}关</div>
  </span>
</template>

<script setup>

import {ref,onMounted} from 'vue'
import { defineProps } from 'vue'
import instance from '../Router/';

        defineProps({
            num:{
                type:Number,
            }
        })
        // console.log(num)

        // let totalNum=ref(0);

        // onMounted(()=>{
        //     instance.get('/sipc/user/total').then((res)=>{
        //         console.log(res);
        //     })
  
        // })



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