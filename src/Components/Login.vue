<template>
    <div class="background"></div>
    <div class="title">
        SIPC学院之谜
        </div>
    <div class="login-box">
        <div>姓名: <input type="text" v-model="name"/></div> 
        <div>学号: <input type="text" v-model="studentId"/></div>
        <div class="sumbit" @click="submitForm">
            <img src="../assest/plane.png" alt="提交">
        </div>
    </div>
    
</template>

<script setup>
import { ref } from 'vue';
import  instance  from '../http';
import { useRouter } from 'vue-router';


const name = ref('');
const studentId = ref('');
const router = useRouter();

const submitForm = ()=>{
    const formData = {
        name: name.value,
        studentId: studentId.value
    };
    instance.post('/sipc/user/login', formData).then((res)=>{
        if(res.code === "200" ){
            localStorage.setItem('token',res.data.token);
            // console.log(res.data.page);
            switch(res.data.page){
                case 'StartPage1':
                    router.push('/entergame');
                    break;
                case'Question2':
                    router.push('/Cquestion2');
                    break;
                default:
                    router.push('/divideClass');
            }
        }
    }).catch((err)=>{
        alert('请检查姓名和学号是否正确');
    });
}

</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }
      html, body {
        width: 100%;
        height: 100%;
    } 

    .background {
        width: 100%;
        height: 100vh; /* 确保背景高度覆盖整个视口 */
        background: url('../assest/castle.png') no-repeat center center; /* 居中显示背景图片 */
        background-size: cover; /* 确保背景图片覆盖整个容器 */
        opacity: 0.7; /* 设置背景图片透明度 */

    }
    .title{
        font-size: 90px;
        width:100%;
        text-align: center;
        color: #000000;
        font-family: Arial, Helvetica, sans-serif;
        position: absolute;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
    }
    .login-box{
        width: 500px;
        height:300px;
        background: rgba(255,255,255,0.5);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .login-box div{
        margin: 10px;
        font-size:45px
    }
    .login-box input{
        font-size: 45px;
        width: 250px;
        border: none;
        border-bottom: 2px solid #000;
        background: transparent;
        padding: 5px 10px;
        outline: none;
    }
    .sumbit{
        position: absolute;
        bottom:-110px;
        cursor:pointer;
    }
    .sumbit img{
        width: 200px;
        
    }
   /* 媒体查询部分 */
   @media screen and (max-width: 768px) {
        .title {
            font-size: 45px;
            font-weight: bold;
        }
        .login-box {
            width: 80%;
            height: auto;
            padding: 15px;
        }
        .login-box div {
            font-size: 30px;
            margin: 15px;
        }
        .login-box input {
            font-size: 30px;
            width: 150px;
        }
        .sumbit img {
            width: 100px;
        }
        .sumbit{
            bottom: -80px;
        }
    }
</style>
<style>
* {
        margin: 0;
        padding: 0;
    }
</style>