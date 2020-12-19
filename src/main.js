import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast'

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

// 加载toast后会调用toast的install方法
Vue.use(toast)

Vue.use(VueLazyLoad, {
    loading: require('assets/img/common/placeholder.png')
})

// 解决移动端300ms延迟问题
FastClick.attach(document.body)

// 事件总线
Vue.prototype.$bus = new Vue()
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')