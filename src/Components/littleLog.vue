<template>
    <div class="loginout">
    <span class="login"><div class="greenDot"></div>已登录<span class="v" @click="logOutCome">ᐯ</span></span>
    <span class="logout" v-show="isShow" @click="logOut">退出登录</span>
    </div>
</template>

<script>
import {ref} from 'vue'
export default {
    setup(){
        let isShow=ref(false)
        function logOutCome(){
            isShow.value=!isShow.value
        }
        function logOut(){
            console.log('logout')
        }
        return {
            isShow,
            logOutCome,
            logOut
        }
    }
}
</script>

<style scoped>
.loginout {
    position: absolute;
    top: 6vh;
    right: 13vw;
    display: flex;
    width: 150px;
    flex-direction: column;
    justify-self: center;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
}
    .greenDot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #92ff01;
        display: inline-block;
        margin:0px 5px;
    }
    .v {
        padding: 5px;
    }
    .login {
        width: 100px;
        color: grey;
        font-weight: bold;
        font-size: 32;
    }
    .logout {
        /* box-sizing: content-box; */
        display: flex;
        background-color: #fff;
        color: #333333;
        justify-content: center;
        align-items: center;
        font-size: 32;
        margin: 10px;
        padding: 10px;
        border-radius: 10px;
    }
</style>