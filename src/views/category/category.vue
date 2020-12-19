<template>
  <div class="category">
    <CategoryNavBar/>
    <div class="category-content">
      <better-scroll class="scroll1">
      <category-menu :menu='category' @menuClick='menuClick' class="menu"/>
    </better-scroll>
    <better-scroll class="scroll2" ref="scroll">
      <category-view :goods='goods' class="view" @imgLoad='imgLoad' v-show="viewShow"/>
      <tab-control :title="['综合','新品','销量']" @controlClick='controlClick'></tab-control>
      <goods-list :goods='list[type]' v-show="viewShow"/>
    </better-scroll>
    </div>
    
  </div>
</template>

<script>
import GoodsList from 'components/content/goods/GoodsList'
import BetterScroll from 'components/common/betterscroll/BScroll'
import CategoryNavBar from './child/CategoryNavBar'
import CategoryMenu from './child/CategoryMenu'
import CategoryView from './child/CategoryView'
import TabControl from 'components/content/tabControl/TabControl'


import {getCategory,getGoods,getList} from 'network/category'
import {debounce} from 'common/utils'
export default {
  name: 'category',
  data(){
    return {
      category:[],
      goods:[],
      list:{
        pop:[],
        sell:[],
        new:[]
      },
      type:'pop',
      refresh:'',
      viewShow:true
    }
  },
 components:{
   CategoryNavBar,
   CategoryMenu,
   CategoryView,
   BetterScroll,
   GoodsList,
  GoodsList,
  TabControl
 },
 methods: {
   getAllList(miniWallkey){
     getList(miniWallkey,'pop').then(res=>{
       this.list.pop=res
    })
    getList(miniWallkey,'sell').then(res=>{
      this.list.sell=res
    })
    getList(miniWallkey,'new').then(res=>{
      this.list.new=res
    })
   },
   menuClick(maitKey,miniWallkey){ 
     this.$refs.scroll.scroll.scrollTo(0,0)
     this.viewShow = false
     getGoods(maitKey).then(res=>{
       console.log(res);
       this.goods=res.data.list
     })
    this.getAllList(miniWallkey)
   },
   imgLoad(){

    this.refresh()
    this.viewShow = true
   },
   controlClick(item,index){
     if(index==0){
       this.type='pop'
     }
    else if(index==1){
       this.type='new'
     }
     else{
       this.type='sell'
     }
     console.log(this.list[this.type]);
   }
 },
 created() {
  
   getCategory().then(res=>{
     console.log(res);
     this.category = res.data.category.list
      getGoods(this.category[0].maitKey).then(res=>{
         this.goods=res.data.list
      })
      this.getAllList(this.category[0].miniWallkey)
   })
 },
 mounted() {
        this.refresh = debounce(this.$refs.scroll.refresh)
   this.$bus.$on('imgLoad',()=>{
     this.imgLoad()
   })
 },
}
</script>

<style scoped>
.category{
  
  height: 100vh;

}
.category-content{
  display: flex;
  overflow: hidden;
}

.scroll1{
  position: absolute;
  top: 44px;
  left: 0;
  right: 264px;
  bottom: 49px;
  overflow: hidden;
}
.scroll2{
   position: absolute;
  top: 44px;
  left: 96px;
  right: 0;
  bottom: 49px;
  overflow: hidden;
}
</style>
