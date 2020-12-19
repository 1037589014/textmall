<template>
  <div v-if="$store.state.cartList.length!=0">
    <cart-list-item v-for="(item,index) in $store.getters.getList" :list='item' :index='index' :key="item.iid"/>
  </div>
  <div v-else>
    购物车空空哒
  </div>
</template>

<script>
import CartListItem from './CartListItem'
export default {
  name: 'CartList',
  data () {
    return {
    }
  },
  components:{
    CartListItem
  },
  methods: {
   
  },
}
</script>

<style scoped>
</style>
