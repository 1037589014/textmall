<template>
  <div v-if="Object.keys(params).length>1" class="params">
    <div v-for="item in params.rule.tables[0]" class="size">
      <div v-for="e in item">{{e}}</div>
    </div>
    <div v-for="item in params.info.set" class="info">
      <div>{{item.key}}</div>
      <div>{{item.value}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailParam',
  data () {
    return {
    }
  },
  props:{
    params:{
      type:Object,
      defalute(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.params{
  padding-top: 20px;
  border-top: 4px solid #eee;
}
.size,.info{
  display: flex;
  text-align: left;
}
.info{
  border-top: 1px solid #eee;

}
.size>div,.info>div{
  flex: 1;
  padding: 13px;
  border-bottom: 1px solid #eee;
  font-size: 14px;
}

.info>div:nth-child(2){
  flex: 3;
  color: #ec5371;
}

</style>
