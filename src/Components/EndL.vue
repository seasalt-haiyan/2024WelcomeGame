<template>
    <div class="Box1">
        <div class="white" ref="myElement">
            
            经过在 SIPC 学院的刻苦学习和磨练，你逐渐成长为一名强大的战士。你不仅掌握了各种对抗 Cyrus 的技能和策略，还结交了一群志同道合的伙伴。<br>
            在一次与 Cyrus 的激烈战斗中，你和你的伙伴们组成了一支强大的战队。凭借着彼此之间的默契和信任，你们们一路势如破竹。战场上，你敏锐地发现了 Cyrus 的核心弱点。你运用在学院所学的知识，制定了精密的作战计划。在伙伴们的全力配合下，发起了最后的总攻。<br>
            经过一场惊心动魄的激战，你们终于成功地消灭了 Cyrus，拯救了整个世界。世界的边陲重新恢复了往日的生机与繁荣，被摧毁的小镇也得以重建，你也终于解开了多年的心结。你重新回到了 SIPC 学院，将自己的经验和知识传授给学弟学妹们，培养出更多有能力守护世界的勇士。<br>
        </div>
        <button class="button1" @click="end">游戏结束</button>
        <button class="button2" @click="middleEnd">回到分院{{ num }}/7</button>
    </div>
    
</template>

<script setup name="EndL">
import {onMounted, ref} from "vue";
let num = ref(1);
const myElement = ref(null);
function end(){
    console.log(111);
}
function middleEnd(){
    console.log(222);
    
}
onMounted(() => {
    if(navigator.userAgent.match(/Mobile/i)) {
        // 移动设备
            console.log("mobile");  
            myElement.value.style.fontSize = "2vh";
            console.log(myElement.value.style);
        }
})
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    .Box1{
        
        position: absolute;
        height: 100%;
        width: 100%;
        background: url("../assest/library2.jpg") no-repeat center center;
        background-size: cover;
        opacity: 70%;
    }
    
    .white{
      box-sizing: border-box;
      position: absolute;
      width: 80vw;
      height: 60vh;
      left: 50%;
      top: 15vh;
      transform: translateX(-40vw);
      border-radius: 5%;
      background-color:rgba(255,255,255, 70%);
      padding: 5%;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 2vw;
      overflow: auto;
    }
    .white::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    .white::-webkit-scrollbar-thumb
    {

      border-radius: 10px;  background: #9e9e9e;  box-shadow: inset 0 0 5px rgba(0, 122, 204);
    }
    .button1{
        
        width: 30vw;
        height: 5vh;
        position: absolute;
        top: 80vh;
        left: 14vw;
        background-color: #907D6F;
        color: #FFFFFF;
        border-radius: 15px;
    }
    .button1:hover{
        box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.24);
        opacity: 80%;
    }
    .button2{
        width: 30vw;
        height: 5vh;
        position: absolute;
        top: 80vh;
        right: 14vw;
        background-color: #907D6F;
        color: #FFFFFF;
        border-radius: 15px;
    }
    .button2:hover{
        box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.24);
        opacity: 80%;
    }
</style>