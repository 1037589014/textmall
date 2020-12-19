import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cartList: []
    },
    mutations: {
        addCount(state, item) {
            item.count++
        },
        addCart(state, payload) {
            payload.count = 1
            payload.checked = true
            state.cartList.push(payload)
        },
        checkClick(state, index) {
            state.cartList[index].checked = !state.cartList[index].checked
                // console.log(state.cartList[index].checked);
        }
    },
    getters: {
        getLength(state) {
            return state.cartList.length
        },
        getList(state) {
            return state.cartList
        }
    },
    actions: {
        cartClick(context, payload) {
            return new Promise((reslove, reject) => {
                let isAdd = false
                for (let i = 0; i < context.state.cartList.length; i++) {
                    if (context.state.cartList[i].iid == payload.iid) {
                        // console.log(context.state.cartList[i]);
                        context.commit('addCount', context.state.cartList[i])
                        isAdd = true
                        reslove('商品数量+1')
                        break
                    }
                }
                if (context.state.cartList.length == 0 || !isAdd) {

                    context.commit('addCart', payload)
                    reslove('添加购物车成功')
                }
                // console.log(context.state.cartList);
            })

        }
    },
    modules: {}
})