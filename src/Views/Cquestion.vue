<template>
<classQuestion >
    <p>你到达了传说中的SIPC学院，它坐落于赛罗米尔的山谷，收到这所学院的录取通知书代表你有守护世界的潜力，你是坚毅勇敢的化身。。在这个学校，入学第一件事就是找到自己的向导，你的向导是一只考拉，聪明的你很快就发现你可以用一种奇妙的语言和考拉交流，你像是生来就有这样的潜力。</p>
    <br>
    <br>
    <p>试着和自己的向导小考拉打招呼吧~（补全下面的代码输出“hello，kaola”）</p>
    <p>#include&lt;stdio.h &gt;</p>
    <p>int main()</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;______________</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 0;</p>
    <p>&nbsp;&nbsp;}</p>
    <span class="answer">答案是：<input type="text" v-model="answer"></span>
</classQuestion>



</template>
  
  <script setup>
    import classQuestion from '@/Components/classQuestion.vue';
    import { ref } from 'vue';
    let answer = ref('');
  </script>
  
  <style scoped>
  * {
    padding: 0;
    margin: 0;
  }
  
  </style>