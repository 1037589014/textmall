<template>
  <div class="recommends">
    <div v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props:{
    recommends:{
      type:Array,
      defaule:[]
    }
  }
}
</script>

<style scoped>
.recommends{
  display: flex;
  padding: 10px 0 10px;
  border-bottom: 10px solid #eee;
}
.recommends>div{
  flex: 1;
  font-size: 12px;
  text-align: center;
}
.recommends>div img{
  width: 70px;
  height: 70px;
  margin-bottom: 5px;
}
</style>
