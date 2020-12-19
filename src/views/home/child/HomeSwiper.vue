<template>
    <Swiper>
     <swiper-item v-for="item in banners">
          <a :href="item.link">
            <img :src="item.image" alt="" @load="imgLoad">
          </a>
      </swiper-item> 
    </Swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
  name: 'HomeSwiper',
  data(){
    return {
      isLoad:false
    }
  },
  props:{
    banners:{
      type:Array,
      defaule(){
        return []
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods: {
    imgLoad(){
      if(!this.isLoad){
        this.isLoad = true
        setTimeout(()=>{
          this.$emit('swiperLoad')
         
        },500)
         
      }
    }
  },
  mounted() {
    //  this.$emit('swiperLoad')
  },
}
</script>

<style scoped>
</style>
