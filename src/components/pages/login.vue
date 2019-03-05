<template>
    <div class="login-box">
        <mt-header title="登录">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button slot="right"></mt-button>
        </mt-header>
        <img src="../../../public/img/logo.png">
        <div class="form-box">
                <input type="text" placeholder="请输入会员名/邮箱/手机号" v-model = 'user.username'>
                <input type="password" placeholder="请输入密码" v-model = 'user.password'>
                <p class="p1">忘记密码?</p>
                <button @click = 'loginuser(user)'>登录</button>
                <p class="p2">验证码登录</p>
                <router-link to="/register" class="p3">>>免费注册</router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import store from '../../store'
import {mapActions} from 'vuex'
    export default {
        name: 'Login',
        data(){
            return {
                user: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            ...mapActions(['loginuser']),
            goback(){
                this.$router.go(-1)
            },
            // login(){
            //     //后台
            //     //axios.get('http:localhost:3000/login',params:{username: this.username,password: this.password})
            //     this.$http
            //         .get('/data/user.json')
            //         .then(
            //             res => {
            //                 this.$store.dispatch('USER_CHANGE',res.data.userData.nikeName)
            //                 this.$store.dispatch('LOADING_FLAG',false)
            //                 console.log('login')
            //                 //编程式导航
            //                 this.$router.push('/mine')
            //             }
            //         )
            //         .catch(error => console.log(error))
            // }
            login(){
                let user = JSON.parse(localStorage.getItem('users')?localStorage.getItem('users'):'[]')
                let userexist = false
                if(user.length != 0 && this.username == user[0].username){
                    userexist = true
                }
                if(userexist){
                    // store.state.userlogin = true
                    localStorage.userlogin = true
                    this.$router.push('/mine')
                }else{
                    alert('登录失败')
                }
            }
        }
    }
</script>

<style lang="css" scoped>
    .login-box{
        background-color: white;
        height: 13.34rem;
    }
    .login-box img{
        width: 2rem;
        height:2rem;
        margin:.6rem auto;
    }
    .login-box .form-box input{
        display: block;
        width: 6rem;
        height:1rem;
        margin: 0 auto;
        border-bottom: .02rem solid #ddd;
        font-size: .3rem;
    }
    .login-box .form-box p.p1{
        text-align: right;
        font: .25rem/.8rem "";
        margin-right:.8rem;
    }
    .login-box .form-box p.p2{
        float:left;
        font: .25rem/.6rem "";
        margin-left:.8rem;
        padding-top:.16rem;
    }
    .login-box .form-box .p3{
        display:block;
        float:right;
        font: .25rem/.6rem "";
        margin-right:.8rem;
        padding-top:.16rem;
    }
    .login-box .form-box button{
        width:6rem;
        height:.8rem;
        background:#ccc;
        color:#fff;
        font:.3rem/.8rem "";
        border:0;
        margin-top: .3rem;
    }
</style>