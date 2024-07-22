<template>
  <div class="question">
    <slot></slot>
    
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
    setup(){
        let answer=ref('')
        return {
            answer
        }
    }

}
</script>

<style>
    hr {
        margin:  0% 10% ;
        border-width: 1px; /* 分隔线的宽度 */
        border-color: #000;
    }
    .in {
        background-color: transparent;
        border: none ;
        outline: 0px  ;
        
    }
    img {
        width: 100%;
    }
    .question {
        width: 100%;
        height: 100%;
        overflow-y: auto;
        font-family: Arial, Helvetica, sans-serif;
        color: black;
        font-size: 45;
        line-height: 1.5;
       
    }
    @media (max-width: 768px) {

/* 手机设备的样式 */
div {
    font-size: 45;
    line-height: 1.5;
    overflow: scroll;
}

}

@media (min-width: 769px) {

/* 电脑设备的样式 */
div {
    font-size: 75;
    line-height: 2;
}
}
</style>