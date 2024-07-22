<template>
    <span>答案是:</span><input type="text" v-model="answer" class="in">
    <hr>
  <span class="next" @click="next">提交</span>
</template>

<script setup>
          function next(){
            console.log('a')
          }
</script>

<style>

        .next {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 10px;
          width: 20vw;
          height: 5vh;
          background-color: #A17F78;
          color:white;
          font-size: 50;
          position: absolute;
          left: 40vw;
          top:80%;
        }
</style>