<template>
  <div>
    <nav-bar>
      <div slot="center">购物车({{getLength}})</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import {mapGetters} from 'vuex'
export default {
  name: 'CartNavBar',
  data () {
    return {
    }
  },
  components:{
    NavBar
  },
  computed:{
    ...mapGetters(['getLength'])
  }
}
</script>

<style scoped>
</style>
