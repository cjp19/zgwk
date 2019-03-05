<template>
    <div class="register-box">
        <mt-header title="注册">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <mt-button slot="right"></mt-button>
        </mt-header>
        <div class="form-box">
                <input type="text" placeholder="请输入您的会员名/邮箱/手机号" v-model = 'user.username'>
                <input type="password" placeholder="请输入您的密码" v-model = 'user.password'>
                <input type="password" placeholder="请再次输入您的密码" v-model = 'user.repassword'>
                <button @click = 'registeruser(user)'>注册</button>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
    export default {
        name: 'Register',
        data(){
            return {
                user: {
                    username: '',
                    password: '',
                    repassword: ''
                },
                paramData: {
                    $router: this.$router,
                    user: this.user
                }
            }
        },
        methods: {
            ...mapActions(['reg','registeruser'])
        }
    }
</script>

<style lang="css" scoped>
    .register-box{
        background-color: white;
        height: 13.34rem;
    }
    .register-box .form-box input{
        display: block;
        width: 6rem;
        height:1rem;
        margin: 0 auto;
        border-bottom: .02rem solid #ddd;
        font-size: .3rem;
    }
    .register-box .form-box p.p1{
        text-align: right;
        font: .25rem/.8rem "";
        margin-right:.8rem;
    }
    .register-box .form-box p.p2{
        float:left;
        font: .25rem/.6rem "";
        margin-left:.8rem;
        padding-top:.16rem;
    }
    .register-box .form-box .p3{
        display:block;
        float:right;
        font: .25rem/.6rem "";
        margin-right:.8rem;
        padding-top:.16rem;
    }
    .register-box .form-box button{
        width:6rem;
        height:.8rem;
        background:#ccc;
        color:#fff;
        font:.3rem/.8rem "";
        border:0;
        margin-top: .3rem;
    }
</style>