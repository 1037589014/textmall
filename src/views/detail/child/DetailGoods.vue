<template>
  <div v-if="Object.keys(goods).length>1" class="goods">
    <div class="title">
       <div class="start"></div>
    <div class="desc">{{goods.desc}}</div>
    <div class="end"></div>
    </div>
   
    <div class="key">{{goods.detailImage[0].key}}</div>
    <div class="img">
      <img v-for="item in goods.detailImage[0].list" :src="item" alt="" @load="imgLoad">
    </div>
  </div>
</template>

<script>


export default {
  name: 'DetailGoods',
  data () {
    return {

    }
  },
  props:{
    goods:{
      type:Object,
      defalute(){
        return {}
      }
    }
  },
  methods: {
    imgLoad(){
      this.$emit('imgLoad')
    }
  },
}
</script>

<style scoped>
.goods{
  padding-top: 10px;
  border-top: 4px solid #eee;
}
.title{
  overflow: hidden;
}
.desc{
  font-size: 14px;
  margin: 10px;
}
img{
  width: 100%;
}
.start,.end{
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  margin: 10px;
  position: relative;
}
.end{
  float: right;
}
.start::before{
  content: '';
  display: block;
  width: 5px;
  height: 5px;
  background-color: #000;
  position: absolute;
  top: -5px;
  left: 0;
}
.end::after{
  content: '';
  display: block;
  width: 5px;
  height: 5px;
  background-color: #000;
  position: absolute;
  top: -5px;
  right: 0;
}
.key{
  margin:  0 0 10px 10px;
}
</style>
