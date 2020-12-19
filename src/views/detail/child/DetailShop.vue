<template>
  <div class="shop">
    <div class="logo">
      <img :src="shop.logo" alt="">
      <span>{{shop.name}}</span>
    </div>
    <div class="info">
      <div class="left">
        <div>
          <div>{{(shop.cSells/10000).toFixed(1)}}万</div>
          <div>总销量</div>
        </div>
        <div>
          <div>
            {{shop.cGoods}}
          </div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="right">
        <div v-for="item in shop.score" >
          <div>{{item.name}}</div>
          <div :class="{better:item.isBetter}" class="score">{{item.score.toFixed(2)}}</div>
          <!-- <span>{{item.isBetter?高:低}}</span> -->
        </div>
      </div>
    </div>
    <div class="inshop">
      <a :href="shop.url">
        进店逛逛
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShop',
  data () {
    return {
    }
  },
  props:{
    shop:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.shop{
  margin-top: 20px;
  padding: 0 5px;
  font-weight: 700;
}
.logo{
  margin-bottom: 20px;
}
.logo span{
    position: relative;
    top: -20px;
}
.logo img{
  width: 50px;
  border-radius: 25px;
  border: 2px solid #eee;
  margin-right: 10px;
}
.info{
  display: flex;
  justify-content: space-around;
  text-align: center;
   font-size: 13px;
   margin-bottom: 20px;
}
.info .left{
    display: flex;
  justify-content: space-around;
  border-right: 3px solid #eee;
  padding-right: 20px;
}
.info .left>div{
  margin:10px;
}
.info .left>div>div{
  margin: 2px;
}
.info .right>div{
   display: flex;
   justify-content: space-between;
}
.info .right>div>div{
  margin: 3px;
}
.info .right>div>.score{
  text-align: left;
  color: green;
  /* display: block; */
}
.info .right>div>.score::after{
  content: '低';
  background-color: green;
  color: #fff;
  margin-left: 6px;
}
.info .right>div .better{
  color: red;
 

}
.info .right>div>.better::after{
  content: '高';
  background-color: red;
}
.inshop{
  text-align: center;
  width: 150px;
  height: 30px;
  line-height: 30px;
  margin: 0 auto;
  background-color: #eee;
  font-size: 13px;
  border-radius: 10px;
  margin-bottom: 20px;
}
</style>
