<template>
  <div class="view" >

    <a v-for="item in goods" :href="item.link">
      <div class="img"> <img :src="item.image" alt="" @load="imgLoad"></div>
     
      <div class="title">{{item.title}}</div>
    </a>
  </div>
</template>

<script>
export default {
  name: 'CategoryView',
  data () {
    return {
    }
  },
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    },
  },
  methods: {
    imgLoad(){
      this.$emit('imgLoad')
    }
  },
}
</script>

<style scoped>
.view{
  overflow: hidden;
  background-color: #fff;
  padding:5px 10px;
}
a{
  text-align: center;
  display: block;
  width: 33%;
  float: left;
  padding: 8px;

}
.title{
  margin-top: 8px;
  font-size: 12px;
}
.img{

}
img{
  width: 100%;
}
</style>
