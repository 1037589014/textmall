<template>
  <div class="toast" v-show="show" >
    <div>{{message}}</div>
   
  </div>
</template>

<script>
export default {
  name: 'Toasst',
  data () {
    return {
      message:'',
      show:false
    }
  }, 
  methods: {
    toastShow(message='默认内容',time=1500){
      this.show=true
      this.message = message 
      setTimeout(() => {
      this.show=false 
      this.message = ''  
      }, time);
    }
  },
  
}
</script>

<style scoped>
.toast{
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 58;
  transform: translate(-50%,-50%);
  background-color: rgba(0,0,0,.7);
  padding: 8px 10px;
  color: #fff;
}
</style>
