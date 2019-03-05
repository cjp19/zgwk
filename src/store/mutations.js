//数据的修改者
import {FOOT_FLAG_CHANGE,LOADING_FLAG,USER_CHANGE,REG, SYNC_UPDATE,LOGIN} from './const.js'
let mutations = {
    [FOOT_FLAG_CHANGE]: (state,payload) => {
        state.footFlag = payload
    },
    [LOADING_FLAG]: (state,payload) => {
        state.loadingFlag = payload
    },
    [USER_CHANGE]: (state,payload) => {
        state.user = payload
    },
    [REG]: (state,payload) => {
        state.user = payload
    },
    [SYNC_UPDATE]: (state,payload) => {
        state.shopcar = payload
    },
    [LOGIN]: (state,payload) => {
        state.userlogin = payload
    }
}
export default mutations