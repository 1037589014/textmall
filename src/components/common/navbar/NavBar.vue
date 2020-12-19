<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
    
    
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.nav-bar{
  display: flex;
  height: 44px;
  text-align: center;
  line-height: 44px;
  color: #fff;
  box-shadow: 0 1px 5px rgba(0, 0, 0, .1);
  /* position:fixed; */
  /* top: 0;
  left: 0;
  right: 0; */
  /* z-index: 5; */
}
.left,.right{
  width: 60px;
}
.center{
  flex: 1;
}
</style>
