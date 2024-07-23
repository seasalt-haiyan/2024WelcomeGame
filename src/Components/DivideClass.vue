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
        // console.log(body);
        console.log(res);
        
        if(res.code === "200" ){
            switch(res.data.page){
                case 'ApplyPage':
                    router.push({path:'/divideClassEnter',query:{classChoose:classChoose}});
                    break;
                case 'FrontendQuestion1':
                    router.push('/front/question1');
                    break;
                case 'FrontendQuestion2':
                    router.push('/front/question2');
                    break;
                case 'FrontendQuestion3':
                    router.push('/front/question3');
                    break;
                case 'FrontendQuestion4':
                    router.push('/front/question4');
                    break;
                case 'BackendQuestion1':
                    router.push('/back/question1');
                    break;
                case 'BackendQuestion2':
                    router.push('/back/question2');
                    break;
                case 'BackendQuestion3':
                    router.push('/back/question3');
                    break;
                case 'BackendQuestion4':
                    router.push('/back/question4');
                    break;
                case 'ProductQuestion1':
                    router.push('/product/question1');
                    break;
                case 'ProductQuestion2':
                    router.push('/product/question2');
                    break;
                case 'ProductQuestion3':
                    router.push('/product/question3');
                    break;
                case 'AlgorithmQuestion1':
                    router.push('/acm/question1');
                    break;
                case 'AlgorithmQuestion2':
                    router.push('/acm/question2');
                    break;
                case 'AlgorithmQuestion3':
                    router.push('/acm/question3');
                    break;
                case 'SecurityStart':
                    router.push('/safe/question1');
                    break;
                case 'SecureQuestion1':
                    router.push('/safe/question1');
                    break;
                case 'SecureQuestion2':
                    router.push('/safe/question2');
                    break;
                case 'SecureQuestion3':
                    router.push('/safe/question3');
                    break;
                case 'SecureQuestion4':
                    router.push('/safe/question4');
                    break;
                case 'SecureQuestion5':
                    router.push('/safe/question5');
                    break;
                case 'IoTQuestion1':
                    router.push('/Iot/question1');
                    break;
                case 'IoTQuestion2':
                    router.push('/Iot/question2');
                    break;
                case 'IoTQuestion3':
                    router.push('/Iot/question3');
                    break;
                case 'GamingQuestion1':
                    router.push('/game/question1');
                    break;
                case 'GamingQuestion2':
                    router.push('/game/question2');
                    break;
                case 'GamingQuestion3':
                    router.push('/game/question3');
                    break;
                case 'FinalPage':
                    router.push('/end');
                    break;
                default:
                    router.push('/divideClass');
                    break;
            }
            
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