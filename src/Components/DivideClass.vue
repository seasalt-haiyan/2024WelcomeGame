<template>
    <div class="background"></div>
    <!-- <div class="overlay"></div> -->
  <div id="CollectBox">
        <div id="title">选择你想去的学院</div>
        <div class="CollectItem" id="front" @click="submitClass(front)">
            <img src="../assest/front.png" class="SpecialCollectItemPicture">
            <div>前端</div>
        </div>
        <div class="CollectItem" id="product" @click="submitClass(product)">
            <img src="../assest/product.png" class="CollectItemPicture">
            <div>产品</div>
        </div>
        <div class="CollectItem" id="lot" @click="submitClass(lot)">
            <img src="../assest/lot.png" class="CollectItemPicture">
            <div>物联网</div>
        </div>
        <div class="CollectItem" id="acm" @click="submitClass(acm)">
            <img src="../assest/acm.jpeg" class="CollectItemPicture">
            <div>算法</div>
        </div>
        <div class="CollectItem" id="back" @click="submitClass(back)">
            <img src="../assest/back.jpeg" class="CollectItemPicture">
            <div>后端</div>
        </div>
        <div class="CollectItem" id="safe" @click="submitClass(safe)">
            <img src="../assest/safe.png" class="CollectItemPicture">
            <div>安全</div>
        </div>
        <div class="CollectItem" id="game" @click="submitClass(game)">
            <img src="../assest/game.png" class="CollectItemPicture">
            <div>游戏</div>
        </div>
        <div class="DecorationBox">
            <img src="../assest/decoration.png" class="decoration">
        </div>
  </div>
</template>

<script setup>
const submitClass = (classChoose) => {
    switch(classChoose){
        //这里放分院逻辑
    }
}

</script>

<style scoped>
@import url(../Views/css/DivideClass.css);
</style>