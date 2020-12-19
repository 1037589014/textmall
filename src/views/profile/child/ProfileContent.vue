<template>
  <div class="content">
    <div class="news">
      <div class="img">
        <img src="~assets/img/profile/message.svg" alt="">
      </div>
      <div class="title">我的消息</div>
    </div>
    <div class="pointer">
      <div class="img">
        <img src="~assets/img/profile/pointer.svg" alt="">
      </div>
      <div class="title">积分商城</div>
    </div>
    <div class="vip">
      <div class="img">
        <img src="~assets/img/profile/vip.svg" alt="">
      </div>
      <div class="title">会员卡</div>
    </div>
    <div class="cart">
      <div class="img">
        <img src="~assets/img/profile/cart.svg" alt="">
      </div>
      <div class="title">我的购物车</div>
    </div>
    <div class="shopping">
      <div class="img">
        <img src="~assets/img/profile/shopping.svg" alt="">
      </div>
      <div class="title">下载购物APP</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileContent',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.content>div{
  display: flex;
  font-size: 16px;
}
.img{
  width: 6%;
  margin-right: 10px;
  margin:13px  15px 0 15px;
}
.title{
  width: 94%;
  padding: 13px 0;
}
img{
  width: 100%;
}
.pointer>.title{
  border-top:1px solid #eee ;
  border-bottom:1px solid #eee ;
}
.vip{
  border-bottom: 15px solid #eee;
}
.cart>.title{
  border-bottom:1px solid #eee ;

}
</style>
