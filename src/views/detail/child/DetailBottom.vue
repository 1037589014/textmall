<template>
  <div class="bottom">
    <div class="service">
      <div></div>
      <span>客服</span>
      </div>
    <div class="shop">
       <div></div>
      <span>店铺</span>
    </div>
    <div class="star" :class="{isStar:isStar}" @click="isStar=!isStar">
       <div></div>
      <span>收藏</span>
    </div>
    <div class="cart" @click="addCart">加入购物车</div>
    <div class="buy">购买</div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottom',
  data () {
    return {
      isStar:false,
      cartInfo:{}
    }
  },
  props:{
    base:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    addCart(){
      this.cartInfo.desc = this.base.desc
      this.cartInfo.title = this.base.title
      this.cartInfo.price = this.base.lowNowPrice
      this.cartInfo.image = this.base.image
      this.cartInfo.iid = this.$route.params.iid
      this.$store.dispatch('cartClick',this.cartInfo).then(res=>{
        // console.log(this.$toast);
        this.$toast.toastShow(res,2000)
        // this.$emit('toastShow',res)
      })
      // console.log(this.cartInfo);
      
    }
  },
}
</script>

<style scoped>
.bottom{

  background-color: #fff;
  height: 49px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 66;
  display: flex;
  justify-content: space-between;
  line-height: 39px;
  font-weight: 700;

}
.bottom>div{
    text-align: center;
    padding: 5px;
}
.service,.shop,.star{
  flex:1;
  font-size: 12px;
  line-height: 16px;
}
.cart,.buy{
  flex: 2;
}
.service>div,.shop>div,.star>div{
  width: 22px;
  height: 22px;
  margin: 2px auto;
  background: url('~assets/img/detail/detail_bottom.png') 0 -53px/100%;
}
.shop>div{
   background: url('~assets/img/detail/detail_bottom.png') 0 -99px/100%;
}
.star>div{
   background: url('~assets/img/detail/detail_bottom.png') 0 0/100%;
}
.cart{
  background-color: #f1d608;
}
.buy{
  background-color: #e4487c;
  color: #fff;
}
.isStar>div{
  background:url('~assets/img/detail/detail_bottom.png') 0 -26px/100% ;
}
</style>
