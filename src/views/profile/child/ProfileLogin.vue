<template>
  <div class="profile-login">
    <div class="img">
      <img src="~assets/img/profile/avatar.svg" alt="">
    </div>
    <div class="content">
      <div class="login">登录/注册</div>
      <div class="phone">
        <img src="~assets/img/profile/phone.svg" alt="">
        <span>暂无绑定手机号</span>
        </div>
    </div>
    <div class="go">
      <img src="~assets/img/common/arrow-left.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileLogin',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.profile-login{
  background-color: #ff8198;
  display: flex;
  color: #fff;
  font-size: 16px;
  padding:0 15px;
}
.img{
  width: 20%;
  margin-right: 10px;
}
img{
  width: 100%;
}
.content{
  width: 75%;
}
.go{
  width: 7%;
  padding-top: 20px;
}
.phone{
  display: flex;
  font-size: 13px;
  margin-bottom: 15px;
}
.phone>img{
  width: 9%;
}
.phone>span{
  margin-top: 3px;
}
.login{
  margin: 10px 0 10px 5px;
}

</style>
