<template>
    <div class="background"></div>
    <littleBear/>
    <littleLog/>
  <div id="CollectBox">
        <div id="title">选择你想去的学院</div>
        <div class="CollectItem" id="front" @click="submitClass('Frontend')">
            <img src="../assest/front.png" class="SpecialCollectItemPicture">
            <div>前端</div>
        </div>
        <div class="CollectItem" id="product" @click="submitClass('Product')">
            <img src="../assest/product.png" class="CollectItemPicture">
            <div>产品</div>
        </div>
        <div class="CollectItem" id="lot" @click="submitClass('IoT')">
            <img src="../assest/lot.png" class="CollectItemPicture">
            <div>物联网</div>
        </div>
        <div class="CollectItem" id="acm" @click="submitClass('Algorithm')">
            <img src="../assest/acm.jpeg" class="CollectItemPicture">
            <div>算法</div>
        </div>
        <div class="CollectItem" id="back" @click="submitClass('Backend')">
            <img src="../assest/back.jpeg" class="CollectItemPicture">
            <div>后端</div>
        </div>
        <div class="CollectItem" id="safe" @click="submitClass('Secure')">
            <img src="../assest/safe.png" class="CollectItemPicture">
            <div>安全</div>
        </div>
        <div class="CollectItem" id="game" @click="submitClass('Game')">
            <img src="../assest/game.png" class="CollectItemPicture">
            <div>游戏</div>
        </div>
        <div class="DecorationBox">
            <img src="../assest/decoration.png" class="decoration">
        </div>
  </div>
</template>

<script setup>
import littleBear from '@/Components/littleBear.vue';
import littleLog from '@/Components/littleLog.vue';
import { useRouter } from 'vue-router';
import instance from '../http'; 
const router = useRouter();
const submitClass = (classChoose) => {
      const body = {
        name: classChoose
    }
      instance.post('/sipc/user/college', body).then((res)=>{
        console.log(body);
        console.log(res);
        
        if(res.code === "200" ){
            router.push({path:'/divideClassEnter',query:{classChoose:classChoose}});
        }
    }
  ).catch((err)=>{
    console.log(err);
      alert('请检查你的代码是否正确');
  });
    }

</script>

<style scoped>
@import url(../Views/css/DivideClass.css);
</style>