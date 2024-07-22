<template>
    <div class="background"></div>
    <WhiteScreen >
        <div>
            <p>你咬了一口！活了下来！坏家伙非常欣赏你的胆识与才华，决定用扫帚带你飞一段路，你高兴的和她出发了。</p>   
            <p>你被坏家伙扔到了一个草丛里！你居然信任坏家伙！这里草木旺盛，非常安静，你探查起来，怪不得如此安静，这里竟然睡着一只老虎！你已经尽量小声，却还是吵醒了他！他眯眼看了看你，一抬爪子，一个光球飞向了你！你大喊”不要打我！“他却头也不回的走掉了。</p>  
            <p>光芒散尽，你面前站着一个和你一摸一样的人！ta居然还要攻击你，物理攻击你们不相上下，你想要挥动魔杖，可是你的魔法攻击却不能识别你和ta，<b>现在你们都是<xx/>这样相同的标签,究竟怎样才能精确识别对面这个 坏xx 呢</b></p>
            <p>（提示，你可以独特地称呼ta为（起id为 坏xx</p>
            <p>你念出选择咒语（选择咒语内部直接填写“攻击咒语”四个字：</p>
        </div>
        <span class="answer">答案是：<input type="text" v-model="answer"></span>
        <p>你费尽千辛万苦终于抵达了前端学院，那里有许多学长学姐，这一路上遇到的海燕，派大星，坏家伙，大老虎竟都在其中，好吧也许确实很坑，很累，但他们其实一直都在你身边，经过这一路，魔法书已经在你的手中，所以，欢迎选择前端！！</p>
    </WhiteScreen>
    <littleBear/>
    <littleLog/>
    <button  class="submit" @click="sumbit">
        提交
    </button>    
    </template>
        
    <script setup>
    import WhiteScreen from '@/Components/WhiteScreen.vue';
    import littleBear from '../../Components/littleBear.vue';
  import littleLog from '../../Components/littleLog.vue';
        import { ref } from 'vue';
        let answer = ref('');        
        const sumbit = ()=>{
            // axiox.post
            console.log('111');
          }
        </script>
        
        <style scoped>
        * {
          padding: 0;
          margin: 0;
        }
        .background{
          width: 100%;
          height: 100vh; /* 确保背景高度覆盖整个视口 */
          background: url('../../assest/hall.jpg') no-repeat center center; /* 居中显示背景图片 */
          background-size: cover; /* 确保背景图片覆盖整个容器 */
          opacity: 0.7; /* 设置背景图片透明度 */
        }
        input{
          font-size: 45px;
              width: 250px;
              border: none;
              border-bottom: 2px solid #000;
              background: transparent;
              padding: 5px 10px;
              outline: none;
        }
        .submit{
          width: 200px;
          height: 50px;
          background: #907D6F;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom:10vh;
          border-radius: 10px;
          cursor: pointer;
        }
        </style>