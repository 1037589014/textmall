<template>
  <div class="bottom">
    <div class="left">
      <div class="button" :class="{isChecked:isChecked}" @click="allClick"></div>
      <div>全选</div>
      <div class="all">合计:￥{{all.toFixed(2)}}</div>
    </div>
    <div class="right" @click="payClick">
      去结算({{$store.state.cartList.length}})
    </div>
     
  </div>
</template>

<script>
export default {
  name: 'CartBottom',
  data () {
    return {
      isChecked:true,
      all:0
    }
  },
  methods: {
    allClick(){
      this.isChecked = !this.isChecked
      if(this.$store.getters.getLength!=0){
        this.$store.getters.getList.forEach(e => {
        e.checked=this.isChecked
      });
      }
      this.$bus.$emit('allClick')
      this.getAll( )
    },
    getAll(){
        this.all = 0
      this.$store.getters.getList.forEach(e=>{
        if(e.checked){
          this.all = this.all + e.price*e.count
        }      
      })
    },
    payClick(){
      if(this.$store.getters.getLength==0){
        this.$toast.toastShow('购物车中没有商品',2000)
      }
      else{
         this.$toast.toastShow('请支付'+this.all.toFixed(2)+'元',2000)
      }
    }
  },
  activated() {
    this.getAll()
    this.$bus.$on('itemClick',()=>{
      if(this.$store.getters.getLength==0||this.$store.getters.getList.some(e=>!e.checked)){
      this.isChecked=false
    }
    else{
      this.isChecked=true
    }
    this.getAll()
    })
    
  },

}
</script>

<style scoped>
.bottom{
  height: 36px;
  position: absolute;
  bottom: 49px;
  left: 0;
  right: 0;
  background-color: #eee;
  line-height: 31px;
  font-size: 14px;
}
.left{
  padding: 5px;
  display: flex;
}
.right{
  line-height: 21px;
  color: #fff;
  background-color: red;
  padding: 10px 20px;
  
}
.button{
  width: 20px;
  height: 20px;
  border: 1px solid #eee;

  border-radius: 50%;
  background-image:url('~assets/img/cart/tick.svg') ;
  background-repeat: no-repeat;
  margin-top:5px;

}
.isChecked{
    background-color:#ff8198;
}
.all{
  margin-left: 10px;
}
</style>
