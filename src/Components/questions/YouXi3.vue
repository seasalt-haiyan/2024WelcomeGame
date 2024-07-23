<template>
    <div class="background"></div>
    <WhiteScreen >
        <div>
            <p>Cyrus中也不乏一些Boss级别的存在，虽然稀少，但不幸的是你们的小队在一次任务中遇到了，尽管你已经驰骋战场多年，但在绝对的力量你们面前似乎都是徒劳，只听着阵阵噪音将你包围，似乎快要将你的心灵侵染，“平角裤平角裤”这听不懂的声音让你异常烦躁，就在Cyrus马上要攻击到你的一瞬间，你似乎看到了小时候村子的模样，“这就是我的走马灯吗，真是像游戏男主一样啊”，这一瞬间仿佛事件静止了下来，有无数的场景在你眼前划过，儿时的经历，家人的笑颜，村子的消亡以及来到学院后所发生的一切，你所学过的知识在你头脑中不断飞转，而你也好像可以看见他们环绕在你周围，你可以看见他们身上有一道若隐若现的白光，他们延伸至了同一个地方，似乎是它们的本质所在，你试图伸手去触碰，却又遥不可及，看着你周身的所有文字，你突然顿悟了，“天不生我，Unity万古如长夜！”，你看破了Unity的万物本质，探寻到了Unity的所有对象的基类__________。你睁开双眼，周身所有的Cyrus全部消散，你散发出耀眼的光芒。</p>
        </div>
        <span class="answer">答案是：<input type="text" v-model="answer"></span>
        <p>在游戏的Unity上，你已经走到了术之尽头，现在你可以尝试去选择其他的方向来提升自我了。</p>
    </WhiteScreen>
    <littleBear/>
    <littleLog/>
    <CommonError v-if="error"/>
    <button  class="submit" @click="submit">
        提交
    </button>    
    </template>
        
    <script setup>
    import CommonError from '../CommonError.vue';
  import  instance  from '../../http';
  import { useRouter } from 'vue-router';
    import WhiteScreen from '@/Components/WhiteScreen.vue';
    import littleBear from '../../Components/littleBear.vue';
  import littleLog from '../../Components/littleLog.vue';
        import { ref } from 'vue';
        let error = ref(false);
        let answer = ref('');        
        const router = useRouter();       
        const submit = ()=>{
        const obj = {
            answer: answer.value
        }
      instance.post('/sipc/game/third', obj).then((res)=>{
        //  console.log(obj);
        // console.log(res);
        if(res.code === "200" ){
            router.push('/end');
        }else if(res.code === "400"){
          error.value = true;
          setTimeout(()=>{
            error.value = false;
          },3000)
        }
    })
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