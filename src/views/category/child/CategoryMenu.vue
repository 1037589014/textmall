<template>
  <ul class="menu">
    <li v-for="(item,index) in menu" :class="{active:index==isActive}" @click="liClick(index)">
      {{item.title}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CategoryMenu',
  data () {
    return {
      isActive:0,

    }
  },
  props:{
    menu:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods: {
    liClick(index){
      this.isActive=index
      this.$emit('menuClick',this.menu[index].maitKey,this.menu[index].miniWallkey)
    }
  },
}
</script>

<style scoped>
.menu{
  width: 96px;
  text-align: center;
  font-size: 14px;
  background-color: #f6f6f6;
}
.menu>li{
  padding: 15px;

}
.menu>.active{
  background-color: #fff;
  color: #ff5777;
  font-weight: 700;
  border-left: 3px solid  #ff5777;
}
</style>
