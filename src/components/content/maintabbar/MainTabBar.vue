<template>
  
     <tab-bar>
      <tab-bar-item path='/home' >
        <img src="~assets/img/tabbar/home.svg" alt="" slot="img">
        <img src="~assets/img/tabbar/home_active.svg" alt="" slot="active">
        <div slot="text">首页</div>
      </tab-bar-item>
       <tab-bar-item  path='/category' >
        <img src="~assets/img/tabbar/category.svg" alt="" slot="img">
        <img src="~assets/img/tabbar/category_active.svg" alt="" slot="active">
        <div slot="text">分类</div>
      </tab-bar-item>
        <tab-bar-item  path='/cart' >
        <img src="~assets/img/tabbar/shopcart_active.svg" alt="" slot="active">
        <img src="~assets/img/tabbar/shopcart.svg" alt="" slot="img">
        <div slot="text">购物车</div>
      </tab-bar-item>
        <tab-bar-item  path='/profile'  >
        <img src="~assets/img/tabbar/profile_active.svg" alt="" slot="active">
        <img src="~assets/img/tabbar/profile.svg" alt="" slot="img">
        <div slot="text">个人</div>
      </tab-bar-item>
    </tab-bar>

</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  name: 'MainTabBar',
  data () {
    return {
    }
  },
  components:{
      TabBar,
      TabBarItem
  }
}
</script>

<style scoped>
</style>
