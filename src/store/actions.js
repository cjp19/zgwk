//动作触发者
//引用const.js
import {FOOT_FLAG_CHANGE,LOADING_FLAG,USER_CHANGE,REG,SYNC_UPDATE,LOGIN} from './const.js'

import router from '../router'

import axios from 'axios'

import { Toast } from 'mint-ui';

let actions = {
    [FOOT_FLAG_CHANGE]: ({commit,state},payload) => {
        commit(FOOT_FLAG_CHANGE,payload)
    },
    [LOADING_FLAG]: ({commit,state},payload) => {
        commit(LOADING_FLAG,payload)
    },
    [USER_CHANGE]: ({commit,state},payload) => {
        commit(USER_CHANGE,payload)
    },
    initCar: ({commit}) => {
        console.log('initCar')
        let cars = getCars()
        commit(SYNC_UPDATE,cars)
    },
    reg: ({commit,state},payload) => {
        console.log('cjp')
        commit(REG,payload)
    },
    registeruser({commit},user){
        setTimeout(() => {
            if(user.password == user.repassword){
                let users = getUsers();
                users.splice(0,1)
                users.push(user);
                localStorage.users = JSON.stringify(users)
                router.push('/mine')
                commit(USER_CHANGE,user)
            }else{
                alert("输入的密码不一致")
            }
        },200)
    },
    loginuser({commit},user){
        setTimeout(() => {
            let userl = JSON.parse(localStorage.users)
            if(userl[0].username == user.username && userl[0].password == user.password){
                localStorage.userlogin = true
                commit(LOGIN,true)
                router.push('/mine')
            }else{
                alert('用户名或密码错误')
            }
        },200)
    },
    addcar({commit},good){
        // console.log('asasas',good)
        setTimeout(() => {
            let cars = getCars();
            let isHas = cars.some( item => {
                if(item.commodityId === good.commodityId){
                    item.num++;
                    return true
                }
            })
            if(!isHas){
                good.num = 1
                cars.push(good)
            }
            localStorage.cars = JSON.stringify(cars)
            Toast({
                message: '添加成功',
                position: 'center',
                duration: 800
              });
            commit(SYNC_UPDATE,cars)
        },200)
    },
    detailaddcar({commit},good){
        // console.log('asasas',good)
        setTimeout(() => {
            let cars = getCars();
            let cid = good[0];
            let cnum = good[1];
            let gods = [];
            console.log('cid',cid,cnum)
            axios.get('/data/goods.json')
                    .then(res => {console.log(res.data);gods = res.data})
                    .catch(error => console.log(error))
            console.log('gods',gods)
            let isHas = cars.some( item => {
                if(item.commodityId === gods[cid][cnum].commodityId){
                    item.num++;
                    return true
                }
            })
            if(!isHas){
                gods[cid][cnum].num = 1
                cars.push(gods[cid][cnum])
            }
            localStorage.cars = JSON.stringify(cars)
            commit(SYNC_UPDATE,cars)
        },200)
    },
    reducercar({commit},good){
        setTimeout(() => {
            let cars = getCars()
            cars = cars.filter( (item) => {
                if(item.commodityId === good.commodityId){
                    item.num--
                    if( item.num <= 0){
                        return false
                    }
                    return true
                }
                return true
            })
            localStorage.cars = JSON.stringify(cars)
            commit(SYNC_UPDATE,cars)
        },200)
    }
}

function getCars(){
    return JSON.parse(localStorage.cars?localStorage.cars:'[]')
}
function getUsers(){
    return JSON.parse(localStorage.users?localStorage.users:'[]')
}

export default actions