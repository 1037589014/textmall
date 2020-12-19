<template>
  <div>
    <nav-bar class="navbar">
      <div slot="center">我的档案</div>
    </nav-bar>
    <profile-login/>
    <profile-pay/>
    <profile-content/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import ProfileLogin from './child/ProfileLogin'
import ProfilePay from './child/ProfilePay'
import ProfileContent from './child/ProfileContent'
export default {
  name: 'profile',
  data () {
    return {
    }
  },
  components:{
    NavBar,
    ProfileLogin,
    ProfilePay,
    ProfileContent
  }
}
</script>

<style scoped>
.navbar{
  background-color: #ff8198;
}
</style>
