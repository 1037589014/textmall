<template>
  <div class="height">
    <div v-for="item in goods" class="good-list">
      <!-- 加key避免切换tab-control商品内容不变 -->
      <goods-list-item :item='item' />
    </div>
    
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  name: 'GoodsList',
  props : {
    
      goods:{
        type:Array,
        default:[]
      }
    
  },
  components:{
    GoodsListItem
  },

}
</script>

<style scoped>
.good-list{
  width: 50%;
  float: left;
  padding: 5px;
  box-sizing: border-box;
}
.height{
  overflow: hidden;
}
</style>
