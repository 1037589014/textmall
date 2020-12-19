<template>
  <div class="pay">
    <div class="money">
      <span class="count">0.00</span><span>元</span>
      <div class="mine">我的余额</div>
    </div>
    <div class="discounts">
       <span class="count">0</span><span>个</span>
      <div class="mine">我的优惠</div>
    </div>
    <div class="integral">
      <span class="count">0</span><span>分</span>
      <div class="mine">我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfilePay',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.pay{
  display: flex;
  text-align: center;
  border-bottom: 15px solid #eee;
  font-size: 13px;
}
.pay>div{
  flex: 1;
  padding: 15px;
}
.discounts{
  border-left: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6;
}
.count{
  color:#ff5f3e;
  font-size: 24px;
  font-weight: 700;
}
.mine{
  margin-top: 10px;
}
</style>
