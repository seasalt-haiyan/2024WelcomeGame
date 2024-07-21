<template>
    <enter-game></enter-game>

</template>

<script>
    import WhiteScreen from './Component/WhiteScreen.vue';
    import EnterGame from './Views/EnterGame.vue'
    export default{
        components:{
            WhiteScreen,
            EnterGame
        }
    }
</script>

<style>
.d {
    width: 100vw;
    height: 100vh;
    background-color: green;
}
 * {
    padding: 0;
    margin: 0;
 }
</style>