<template>
  <div>
    <swiper class="hidden"> 
      <swiper-item v-for="item in topImage">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index'
export default {
  name: 'DeaileSwiper',
  data () {
    return {
    }
  },
  props:{
    topImage:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>
.hidden{
  height: 300px;
}
img{
  margin-top: -70px;
}
</style>
