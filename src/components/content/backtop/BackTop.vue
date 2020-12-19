<template>
  <div class="backtop">
  <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'BackTop',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.backtop{
  position: absolute;
  bottom: 50px;
  right: 8px;
  z-index: 20;
}
.backtop img{
  width: 40px;
  height: 40px;
}
</style>
