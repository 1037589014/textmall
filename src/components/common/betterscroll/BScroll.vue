<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div> 
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'BScroll',
  data () {
    return {
      scroll:null
    }
  },
  props:{
    pullUpLoad:{
      type:Boolean,
      default:false
    },
    probeType:{
      type:Number,
      default:0
    }
  },
  // DOM挂载完成后调用mounted
  mounted() {
    // 用refs保证每次选的是唯一的wrapper
   this.scroll= new BScroll(this.$refs.wrapper,{
      // observeDOM: true
      click:true,
      pullUpLoad:this.pullUpLoad,
      probeType:this.probeType,
      mouseWheel:true,
      disableMouse:false,
      disableTouch:false
    })
    this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp')
      
      setTimeout(()=>{
        this.scroll.finishPullUp()
        
      },2000)
    })
    this.scroll.on('scroll',position=>{
      // console.log(position);
      this.$emit('scroll',position)
    })
    // scroll.scrollTo(x,y,time)  跳转到某个位置

    // this.scroll.refresh()  从新计算高度
  },
  methods: {
    refresh() {
        this.scroll && this.scroll.refresh()
        // console.log(111);
      },
  },
}
</script>

<style scoped>

</style>
