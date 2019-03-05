//数据获取者
let getters = {
    footFlag: (state) => {
        return state.footFlag
    },
    loadingFlag: (state) => {
        return state.loadingFlag
    },
    user: (state) => {
        return state.user
    },
    totalInfo(state){
        let total = {num: 0, price: 0}
        state.shopcar.forEach( item => {
            total.num += item.num
            total.price += item.num * item.commodityPrice
        })
        return total
    },
    shopcar(state){
        return state.shopcar
    }
}

export default getters