<template>
  <div class="detail">
    <detail-nav-bar ref="nav" class="detail-nav-bar" @navClick='navClick'/>
    <scroll class="detail-scroll" ref="scroll" @scroll='scroll'  :probeType='3'>
      <detail-swiper :topImage='topImage'/>
    <detail-base :base='base'/>
    <detail-shop :shop='shop'/>
    <detail-goods :goods='goods' @imgLoad='imgLoad'/>
    <detail-param ref="param" :params='params'/>
    <detail-comment ref="comment" :comment='comment'/>
    <goods-list ref="goods" :goods='recommend'/>
    </scroll>
    <back-top  @click.native="backClick" v-show="isShowBackTop"/>
    <detail-bottom :base='base' />
    <!-- <toast :message='message'  v-show="isShow"/> -->
  </div>
</template>

<script>
import {getDetail,getRecommend,base,shop} from 'network/detail'
import {debounce} from 'common/utils'
import {BackTopMixin} from 'common/mixin'

import DetailNavBar from './child/DetailNavBar'
import DetailSwiper from './child/DetailSwiper'
import DetailBase from './child/DetailBase'
import DetailShop from './child/DetailShop'
import DetailGoods from './child/DetailGoods'
import DetailParam from './child/DetailParam'
import DetailComment from './child/DetailComment'
import DetailBottom from './child/DetailBottom'
import BackTop from 'components/content/backtop/BackTop'

import Scroll from 'components/common/betterscroll/BScroll'
import GoodsList from 'components/content/goods/GoodsList'
// import Toast from 'components/common/toast/Toast'
export default {
  name: 'detail',
  mixins:[BackTopMixin],
  data () {
    return {
      iid:null,
      load:null,
      navActive:0,
      topImage:[],
      isShow:false,
      base:{
        // title:'',
        // columns:[],
        // discountDesc:'',
        // lowNowPrice:'',
        // oldPrice:'',
        // services:[]
      },
      shop:{},
      goods:{},
      params:{},
      comment:{},
      recommend:[],
      positionY:[],
      message:''
    }
  },
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBase,
    DetailShop,
    DetailGoods,
    Scroll,
    DetailParam,
    DetailComment,
    GoodsList,
    BackTop,
    DetailBottom,
    // Toast

  },
  created() {
    this.iid=this.$route.params.iid
    getDetail(this.iid).then(res=>{
      // console.log(res);
      this.topImage = res.result.itemInfo.topImages
      // this.base.columns = res.result.columns
      // this.base.title = res.result.itemInfo.title
      // this.base.lowNowPrice = res.result.itemInfo.lowNowPrice
      // this.base.oldPrice = res.result.itemInfo.oldPrice
      // this.base.discountDesc = res.result.itemInfo.discountDesc
      // this.base.services = res.result.shopInfo.services
      this.base = new base(res.result.itemInfo,res.result.columns,res.result.shopInfo.services)
     this.shop = new shop(res.result.shopInfo) 
     this.goods = res.result.detailInfo
     this.params = res.result.itemParams
     if(res.result.rate.list){
       this.comment = res.result.rate.list[0]
     }
    })
    getRecommend().then(res=>{
     this.recommend= res.data.list
    })

  },
  mounted() {
        

    this.load = debounce(this.$refs.scroll.refresh)
    this.update = debounce(()=>{
      this.positionY = []
    this.positionY.push(0)
    this.positionY.push(this.$refs.param.$el.offsetTop)
    this.positionY.push(this.$refs.comment.$el.offsetTop)
    this.positionY.push(this.$refs.goods.$el.offsetTop)
    console.log(this.positionY);
    },50)
    // this.position = debounce(()=>{
    //   this.positionY = []
    // this.positionY.push(0)
    // this.positionY.push(this.$refs.param.$el.offsetTop)
    // this.positionY.push(this.$refs.comment.$el.offsetTop)
    // this.positionY.push(this.$refs.goods.$el.offsetTop)
    // // console.log(this.positionY);
    // },500)
  },
  updated() {
    //  this.positionY = []
    // this.positionY.push(0)
    // this.positionY.push(this.$refs.param.$el.offsetTop)
    // this.positionY.push(this.$refs.comment.$el.offsetTop)
    // this.positionY.push(this.$refs.goods.$el.offsetTop)
    // console.log(this.positionY);

  },
  methods: {
    imgLoad(){
      this.load()
      this.update()
    },  
    navClick(index){
      // 点击导航栏内容滚动
      // console.log(index);
      this.$refs.scroll.scroll.scrollTo(0,-this.positionY[index],500)
// this.$refs.nav.activeIndex = index

    },
      scroll(position) {
            this.isShowBackTop = position.y < -1500
            this.isFixed = position.y < -this.tabOffsetTop
            
            // 导航栏跟随滚动
            for(let i =0;i<this.positionY.length;i++)
            {
              if((i==this.positionY.length-1||-position.y<this.positionY[i+1]))
              {
                if(i==this.$refs.nav.activeIndex) break
                // console.log(i);
                 this.navActive = i
                this.$refs.nav.activeIndex = i
                break
              }
            }
        },
  //       toastShow(message){ 
  //         this.message = message
  //     this.isShow=true
  //     setTimeout(() => {
  //     this.isShow=false   
  //     }, 2000);
  //   }
  }
}
</script>

<style scoped>
.detail{
  position: relative;
  z-index: 13;
  background-color: #fff;
  height: 100vh;
}
.detail-nav-bar{
  position: relative;
  z-index: 17;
  background-color: #fff;
}
.detail-scroll{
  overflow: hidden;
  position: absolute;
z-index: 15;
 top: 44px;
bottom: 49px;
  left: 0;
  right: 0;
  
}
</style>
