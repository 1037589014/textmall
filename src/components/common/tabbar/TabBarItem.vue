<template>

      <div class="tab-bar-item" @click='itemTouch'>
        <div v-if="!isActive"><slot name="img"></slot></div>
          <div v-else><slot name="active"></slot></div>
          <!-- 利用计算属性动态绑定style -->
          <div :style="activeStyle"> <slot name="text"></slot></div>
      </div>
    
  
</template>

<script>
export default {
  name: 'TabBarItem',
  data () {
    return {
      // isActive:false
    }
  },
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  computed:{
    isActive(){
      // 我
      return this.$route.path ==this.path
      // 老师
      // return this.$route.path.indexOf(this.path) !=-1
    },
    activeStyle(){
      return this.isActive? {color:this.activeColor}:{}
    }
  },
  methods: {
    itemTouch(){
      // this.isActive = !this.isActive
      this.$router.push(this.path)
      // console.log(this.$route);
    },
    
  },
}
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
      width: 24px;
      height: 24px;
      margin-bottom: -3px;
      margin-top: 3px;
  }
  /* .active{
    color: red;
  } */
</style>
