<template>
    <classQuestion >
        <p>紧接着你从一旁的桉树上摘下一段带着鲜嫩叶子的桉树枝，递给了小考拉，考拉满意极了，领着你来到了分院礼堂。你听周围的同学们说，这个分院帽会给你出一道题，答对了这道题你就可以选择自己想去的学院。你心想“一定要试试，选一个适合自己的学院！”</p>
        <br>
        <br>
        <p>轮到你戴上分院帽了，你看到了前面的同学们有悲有喜，你也怀揣着紧张的情绪坐上了分院之椅。</p>
        <p>分院帽：“你好哇！聪明的年轻人！下面我要说几个密码，你需要通过它们破译出分院咒语，才能选择想去的学院。准备好了吗！”</p>
        <p>“83 73 80 67 49 49 53”</p>
        <p>你想了想，大声喊出了分院咒语：_______!</p>
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