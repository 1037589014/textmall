<template>
  <div class="item">
    <a @click="itemClick">
       <img :src="imgUrl" alt="" @load="imgLoad">
    <p class="title">{{item.title}}</p>
    <span class="price">{{item.price}}</span>
   
    <span class="star"> <img src="~assets/img/common/collect.svg" alt=""></span>
    <span class="cfav">{{item.cfav}}</span>
    </a>
   
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props : {
   
       item:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods: {
      imgLoad(){
        this.$bus.$emit('imgLoad')
      },
      itemClick(){
        if(this.item.iid)
        {
          this.$router.push('/detail/'+this.item.iid)
        }
        
        else{
          this.$router.push('/detail/'+this.item.item_id)
        }
      }
    },
   computed:{
    imgUrl(){
      return this.item.image|| this.item.img || this.item.show.img
    }
  }
}
</script>

<style scoped>
.item{
  font-size: 13px;
  text-align: center;
  
}
.item span{
  font-size: 12px;
}
img{
  width: 100%;
}
.title{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.price{
  color: var(--color-tint);
}
.star{
  display: inline-block;
  width: 14px;
  height: 14px;
  margin: 0 2px;
  position: relative;
}
.star img{
  width: 13px;
  height: 13px;
  position: absolute;
  top: 3px;
  left: 3px;
}
</style>
