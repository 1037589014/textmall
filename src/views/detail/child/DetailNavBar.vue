<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="left" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="center">
        <div v-for="(item,index) in title" :class="{active:index==activeIndex}" @click="itemClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'DetailNavBar',
  data () {
    return {
      title:['商品','参数','评论','推荐'],
      activeIndex:0
    }
  },
  components:{
    NavBar
  },
  methods: {
    itemClick(index){
      this.activeIndex = index
      this.$emit('navClick',index)
    },
    backClick(){
      this.$router.back()
    },
   
  },
}
</script>

<style scoped>

.center{
  color: #000;
  display: flex;
  
}
.center>div{
  flex: 1;
  font-size: 13px;
  color: #666;
}
img{
  margin-top: 12px;
}
.center>.active{
  color: #ff8198;
}
</style>
