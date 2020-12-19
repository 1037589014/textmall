<template>
  <div class="list-item" v-if="isLoad">
     <div class="list-button" :class="{checked:list.checked}" @click="checkClick(index)"></div>
     <div class="img" @click="toDetail(list.iid)">
       <img :src="list.image" alt="">
     </div>
     <div class="info" @click="toDetail(list.iid)"  >
       <div class="title">{{list.title}}</div>
       <div class="desc">{{list.desc}}</div>
       <div class="price">
         <span class="price-now">￥{{list.price}}</span>
         <span class="count">×{{list.count}}</span>
       </div>
     </div>
     
  </div>
</template>

<script>

export default {
  name: 'CartListItem',
  data () {
    return {
      isLoad:true
    }
  },
  props:{
    list:{
      type:Object,
      default(){
        return {}
      }
    },
   index:{
     type:Number,
     default:0
   }
  },
  methods: {
    checkClick(index){
      this.isLoad = false
      this.$store.commit('checkClick',index)
      this.$bus.$emit('itemClick')
      this.isLoad = true
      // console.log(this.list);
    },
    update(){
      this.isLoad = false
    this.isLoad = true
    },
      toDetail(iid){
      this.$router.push({
        path:'/detail/'+iid, 
      })
    }
  },
  activated() {
    this.update()
    this.$bus.$on('allClick',()=>{
      this.update()
    })
  },
 
}
</script>

<style scoped>
.list-item{
  padding: 8px 5px;
  border-bottom: 4px solid #eee;
  overflow: hidden;
}
.list-item>div{
  float: left;
}

.list-item .img{
  width: 20%;
  margin: 0 10px 0 5px;
  border-radius: 5px;
  overflow: hidden;
}
.info{
  width: 70%;
  font-size: 14px;
 
}
.title,.desc{
   white-space: nowrap;
  overflow: hidden;
    text-overflow: ellipsis;
}
.title{
  font-weight: 700;
}
.desc{
  font-size:12px;
  margin: 12px 0 20px 0;
  color: #999;
}
img{
  width: 100%;
  height: 80px;
}
.price-now{
  color: var(--color-high-text);
}
.count{
  float: right;
  font-weight: 700;
}
.list-button{
  width: 20px;
  height: 20px;
  border: 1px solid #eee;
  border-radius: 50%;
  background-image:url('~assets/img/cart/tick.svg') ;
  background-repeat: no-repeat;
  margin-top:30px
}
.checked{
    background-color:#ff8198;
}
</style>
