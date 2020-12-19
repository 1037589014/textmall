<template>
  <div v-if="Object.keys(comment).length>1">
    <div class="top">
      <div>用户评论</div>
      <div>更多</div>
    </div>
    <div class="user">
      <img :src="comment.user.avatar" alt="">
      <span> {{comment.user.uname}}</span>
     
    </div>
    <div class="title">
      {{comment.content}}
    </div>
    <div class="time">
      <span>{{comment.created | time}}</span>
      <span>{{comment.style}}</span>
    </div>
    <div class="img">
      <img v-for="item in comment.images" :src="item" alt="">
    </div>
  </div>
  <div v-else class="no">
    暂无评论
  </div>
</template>

<script>
import {debounce,getTime} from 'common/utils'
export default {
  name: 'DetailComment',
  data () {
    return {
    }
  },
  props:{
    comment:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters:{
    time(val){
     return  getTime(val)
    }
  }
}
</script>

<style scoped>
.top{
  display: flex;
  justify-content: space-between;
  padding: 20px 13px;
  font-size: 13px;
  border-top: 4px solid #eee;
  border-bottom: 2px solid #eee;
  font-weight: 700;
}
.user{
  margin: 10px 10px 0;
  font-size: 14px;
  font-weight: 700;
}
.user span{
  position: relative;
  top: -12px;
}
.user img{
  width: 36px;
  border-radius: 50%;
  margin-right: 5px;
}
.title{
  font-size: 13px;
  padding: 10px;
}
.time{
  padding-left: 6px;
  font-size: 12px;
  color: #999;
}
.time span{
  margin:0 4px;
}
.img{
  padding:10px 10px 20px;
  border-bottom: 4px solid #eee;
}
.img img{
  width: 60px;
  height: 60px;
  margin: 2px;
}
.no{
  padding: 20px;
  border-top: 4px solid #eee;
  border-bottom: 4px solid #eee;
}
</style>
