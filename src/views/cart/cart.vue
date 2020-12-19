<template>
  <div class="cart">
    <cart-nav-bar class="navbar"/>
    <scroll class="scroll" ref="scroll">
      <cart-list/>
    </scroll>
    <cart-bottom/>
  </div>
</template>

<script>
import CartNavBar from './child/CartNavBar'
import CartList from './child/CartList'
import CartBottom from './child/CartBottom'

import Scroll from 'components/common/betterscroll/BScroll'

export default {
  name: 'cart',
  data () {
    return {
    }
  },
  components:{
    CartNavBar,
    CartList,
    Scroll,
    CartBottom
  },
  activated() {
    this.$refs.scroll.refresh()
    // console.log(1);
  },
}
</script>

<style scoped>
.cart{
  height: 100vh;
}
.navbar{
  height: 49px;
  background-color: var(--color-tint);
  line-height: 49px;
}
.scroll{
  position: absolute;
  top:49px;
  bottom:85px;
  left: 0;
  right: 0;
  overflow: hidden;

}
</style>
