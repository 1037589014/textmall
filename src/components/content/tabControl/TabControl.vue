<template>
  <div class="tab-control">
    <div v-for="(item,index) in title" :class="{active:index==activeIndex}" @click="itemClick(item,index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props:{
    title:{
      type:Array,
      defaule:[]
    }
  },
  data(){
    return {
      activeIndex:0,
      activeItem:this.title[0]
    }
  },
  methods: {
    itemClick(item,index){
      this.activeIndex=index
      this.$emit('controlClick',item,index)
    }
  },
}
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}
.tab-control span{
  padding: 5px;
}
.tab-control>div{
  flex:1;
}
.active{
  color:#ff5777;
}
.active span{
  border-bottom: 2px solid#ff5777;
}
</style>
