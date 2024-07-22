<template>
  <div class="WhiteScreen">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .WhiteScreen {
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
    }
</style>