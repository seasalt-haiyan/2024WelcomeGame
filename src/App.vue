<template>
    <enter-game></enter-game>

</template>

<script>
    import WhiteScreen from '../components/WhiteScreen.vue';
import EnterGame from '../views/EnterGame.vue';

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