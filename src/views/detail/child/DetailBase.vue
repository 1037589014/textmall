<template>
<!-- v-if="Object.keys(base).length !== 0"判断base是否含有key即是否为空对象，数据没有传入时为空对象，不渲染，数据传入后在渲染-->
  <div v-if="Object.keys(base).length !== 0">
    <div class="title">{{base.title}}</div>
    <div class="price">
      <div class="new">{{base.price}}</div>
      <div class="old">{{base.oldPrice}}</div>
      <div class="desc">{{base.discountDesc}}</div>
    </div>
    <div class="columns">
      <span>{{base.columns[0]}}</span>
      <span>{{base.columns[1]}}</span>
      <span>{{base.services[base.services.length-1].name}}</span>
    </div>
    <div class="services">
      <span v-for="(item,index) in base.services" v-show="index<base.services.length-1">
        <img :src="item.icon" alt="" v-show="item.icon">
     {{item.name}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBase',
  data () {
    return {
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
  // 此时base数据还没有传入
  created() {
    // console.log(this.base.columns);
    // console.log(this.base.services[0].name);
  },
  // 此时base数据还没有传入
  mounted() {
    // console.log(this.base);
    // console.log(this.base.columns);
    
  },
  updated() {
    // console.log(this.base);
    
  },
  destroyed() {
    // console.log(this.base);
    
  },
}
</script>

<style scoped>
.title{
  font-weight: 500;
  margin: 10px 5px;
}
.price{
  overflow: hidden;
  margin-bottom: 10px;
}
.new{
  color: #ff8198;
  font-size: 22px;
}
.old{
  font-size: 10px;
  text-decoration: line-through;
  line-height: 28px;
}
.desc{
  background-color: #ff5777;
  border-radius: 5px;
  padding: 2px;
  font-size: 12px;
  color: #fff;
}
.price>div{
  float: left;
  margin: 3px;
}
.columns,
.services{
  display: flex;
  font-size: 12px;
 justify-content: space-between;
  padding: 0 8px;
}
.columns{
  margin-bottom: 5px;
}
.services{
  border-bottom: 4px solid #eee;
  border-top: 4px solid #eee;
  padding: 15px 8px;
  font-weight: 600;
}

.services>span img{
  width: 12px;
  height: 12px;
}
</style>
