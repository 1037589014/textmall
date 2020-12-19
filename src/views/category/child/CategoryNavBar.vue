<template>
    <nav-bar class="category-navbar">
      <div slot="center">商品分类</div>
    </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'CategoryNavBar',
  data () {
    return {
    }
  },
  components:{
    NavBar
  }
}
</script>

<style scoped>
.category-navbar{
  background-color: #ff8198;
  font-weight: 700;
}
</style>
