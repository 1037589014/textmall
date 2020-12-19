<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
     <tab-control :title="['流行','新款','精选']" class="mycontrol fixed-control" @controlClick="controlClick" ref="control1" v-show="isFixed" />
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
   <scroll class="scroll" ref="scroll" @pullingUp='pullingUp' @scroll='scroll' :pullUpLoad='true' :probeType='3'>
     <swiper :banners='banners' class="myswiper" @swiperLoad="swiperLoad"/>
    <home-recommends :recommends='recommends'/>
    <home-feature/>
    <tab-control :title="['流行','新款','精选']" class="mycontrol" @controlClick="controlClick" ref="control2" :class="{fixed:isFixed}"/>
    
    <goods-list :goods='goods[controlType].list'/>
   </scroll>

  </div>
</template> 

<script>
import {BackTopMixin} from 'common/mixin'
import * as homerequest from 'network/home'
import {debounce} from 'common/utils'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backtop/BackTop'
import scroll from 'components/common/betterscroll/BScroll'

import Swiper from './child/HomeSwiper'
import HomeRecommends from './child/HomeRecommend'
import HomeFeature from './child/HomeFeature'




export default {
  name: 'home',
  mixins:[BackTopMixin],
  data () {
    return {
      banners:[],
      recommends:[],
      goods:{
        pop:{
          page:0,
          list:[]
        },
        new:{
          page:0,
          list:[]
        },
        sell:{
          page:0,
          list:[]
        }
      },
      controlType:'pop',

      tabOffsetTop:100,
      isFixed:false,
      saveY:0
    }
  },
  components:{
    NavBar,
    Swiper,
    HomeRecommends,
     HomeFeature,
     TabControl,
     GoodsList,
    scroll,
    BackTop
  },
  created() {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
    
    
  },
  mounted() {
    // console.log(this.$refs.scroll.scroll.refresh);
      const refresh = debounce(this.$refs.scroll.refresh)
    this.$bus.$on('imgLoad',()=>{
      // debounce(this.$refs.scroll.refresh,50)()
      // debounce(this.$refs.scroll.scroll.refresh,50)()
        refresh()
    })
    
  },
  methods: {
    // 点击相关
    controlClick(item,index){
      if(item=='流行'){
        this.controlType='pop'
      }
      else if(item=='新款')
      {
        this.controlType='new'
      }
      else{
        this.controlType='sell'
      }
      this.$refs.control1.activeIndex=index
      this.$refs.control2.activeIndex=index
    },

    // 网络请求相关 
    getHomeMultidata(){
      homerequest.getHomeMultidata().then(res=>{
      // console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      // console.log(this.banners);
      // console.log(this.recommends);
    })
    },
    getHomeGoods(type){
      homerequest.getHomeGoods(type,this.goods[type].page + 1).then(res=>{
        // console.log(res);
        this.goods[type].page++;
        this.goods[type].list.push(...res.data.list)
        // console.log(this.goods[type].list[0].link);
        
      })
    },
    // 滑动相关
  pullingUp(){
    console.log('加载新数据');
    this.getHomeGoods(this.controlType)
  },
 
  // 加载相关
  swiperLoad(){

// console.log(this.$refs.control2.$el.offsetTop);
    this.tabOffsetTop=this.$refs.control2.$el.offsetTop+44 
  }
  },
  activated() {
    // 切换页面时保持原位置不变 
    // 先刷新后跳转
    this.$refs.scroll.refresh()
    this.$refs.scroll.scroll.scrollTo(0,this.saveY,0)
    // console.log(this.saveY);
  },
  deactivated() {
   this.saveY = this.$refs.scroll.scroll.y
  //  console.log(this.saveY);
  },
}
</script>

<style scoped>
#home{
  height: 100vh;
  position: relative;
  /* overflow: hidden; */
}
.home-nav{
  background-color:var(--color-tint);
}
.myswiper{
  margin-top: 44px;
}
.mycontrol{
  /* position: sticky;
  top:44px; */
}
.scroll{
  /* height: 500px; */
  /* background-color: pink; */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left:0;
  right: 0;
  z-index: 4;
}
.fixed{
  /* position: fixed;
  left: 0;
  right: 0; */
}
.fixed-control{
  position: relative;
  z-index: 5;
}
</style>
