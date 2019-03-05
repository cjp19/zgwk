<template>
    <div class="mine-box">
        <div class="my">
            <p>我的网库</p>
            <i class='fa fa-cogs'></i>
        </div>
        <div class="userinfo">
            <img src="../../../public/img/buyer_nologin.png" />
            <p>欢迎使用中国网库平台</p>
            
            <h3 v-show = "true">用户名称：{{username}}</h3>
            <button @click = 'logoff()'>注销</button>
        </div>
        <div class="goodstate">
            <ul>
                <li>
                    <i class="fa fa-wrench"></i>
                    <span>协商中</span>
                </li>
                <li>
                    <i class="fa fa-server"></i>
                    <span>待付款</span>
                </li>
                <li>
                    <i class="fa fa-truck"></i>
                    <span>待发货</span>
                </li>
                <li>
                    <i class="fa fa-cart-arrow-down"></i>
                    <span>待收货</span>
                </li>
                <li>
                    <i class="fa fa-shopping-basket"></i>
                    <span>全部订单</span>
                </li>
            </ul>
        </div>
        <div class="datav">
            <img src="../../../public/img/data_image_png;base1.png" class="l">
            <span>发布采购</span>
            <img src="../../../public/img/data_image_png;base….png" class="r">
        </div>
        <div class="datav">
            <img src="../../../public/img/data_image_png;base2.png" class="l">
            <span>开通企业买家服务</span>
            <img src="../../../public/img/data_image_png;base….png" class="r">
        </div>
        <div class="datav">
            <img src="../../../public/img/data_image_png;base3.png" class="l">
            <span>退换货管理</span>
            <img src="../../../public/img/data_image_png;base….png" class="r">
        </div>
        <div class="datav">
            <img src="../../../public/img/data_image_png;base4.png" class="l">
            <span>采购单管理</span>
            <img src="../../../public/img/data_image_png;base….png" class="r">
        </div>
        <div class="datav">
            <img src="../../../public/img/data_image_png;base5.png" class="l">
            <span>内部价特权</span>
            <img src="../../../public/img/data_image_png;base….png" class="r">
        </div>
        <div class="service">
            <p>服务</p>
        </div>
    </div>
</template>

<script>
    import store from '../../store'
    import {mapGetters} from 'vuex'
    export default {
        name: 'Mine',
        data(){
            return {
                usernameshow: false,
                userlogin: false,
                username: 'ty'
            }
        },
        // beforeRouteEnter(to,from,next){//实例生成前执行 this
        //     let data = true
        //     if(data){
        //         next(_this => _this.$root.footFlag = false)
        //     }else{
        //         next('/login')
        //     }
        // }
        beforeRouteEnter(to,from,next){
            let users = store.state.user
            console.log('username',users)
            let userlogin = store.state.userlogin
            if(!userlogin){
                next('/login')
            }else{
                next(vm => {
                    vm.$data.username = users.username?users.username:users[0].username
                })
            }
        },
        computed: {
            ...mapGetters(['user'])
        },
        methods: {
            logoff(){
                localStorage.userlogin = false
                store.state.userlogin = false
                this.$router.push('/login')
            }
        },
        mounted(){
            console.log(this)
            console.log(this.$data)
        }
    }
</script>

<style lang="css" scoped>
    .mine-box{}
    .mine-box .my{
        background-color:orange;
        overflow:hidden;
        width: 100%;
        height: 1rem;
    }
    .mine-box .my p{
        text-align: center;
        margin-left: 3.1rem;
        font: 700 .32rem/1rem "";
        float:left;
        color: #fff;
    }
    .mine-box .my i{
        float:right;
        font-size: .3rem;
        margin-right: .35rem;
        margin-top: .35rem;
        color: #fff;
    }
    .mine-box .userinfo{
        width: 100%;
        height: 2.4rem;
        background-color: #999;
        padding-top: .2rem;
        overflow: hidden;
    }
    .mine-box .userinfo img{
        width: 1.2rem;
        height: 1.2rem;
        display: block;
        margin: 0 auto .2rem;
    }
    .mine-box .userinfo p{
        text-align: center;
        margin-bottom: .1rem;
    }
    .mine-box .userinfo .login{
        background-color: #111;
        text-align: center;
        font: .22rem/.22rem "";
        color: #fff;
        border-radius: .1rem;
        padding: .04rem .12rem;
    }
    .mine-box .userinfo h3{
        float: left;
        margin-left: 2.4rem;
    }
    .mine-box .userinfo button{
        border: 0;
        float: left;
        margin-left: .3rem;
    }
    .mine-box .goodstate{
        height: 1.2rem;
        background-color: #fff;
        margin-top: .2rem;
        margin-bottom: .2rem;
    }
    .mine-box .goodstate ul{
        overflow:hidden;
    }
    .mine-box .goodstate ul li{
        float:left;
        width: 1.5rem;
        height: 1rem;
    }
    .mine-box .goodstate ul li i{
        display: block;
        margin: .1rem auto;
        font-size: .5rem;
    }
    .mine-box .goodstate ul li:nth-of-type(5) i{
        color: red;
    }
    .mine-box .datav{
        height: 1rem;
        margin-bottom: .2rem;
        background-color: #fff;
    }
    .mine-box .datav img.l{
        width: .6rem;
        height:.6rem;
        float: left;
        margin: .2rem 0 0 .2rem;
    }
    .mine-box .datav span{
        float:left;
        font: .3rem/1rem "";
        margin-left: .2rem;
    }
    .mine-box .datav img.r{
        float:right;
        margin-right: .2rem;
        width: .2rem;
        height: .35rem;
        margin-top: .3rem;
    }
    .mine-box .service{
        height: .8rem;
        margin-bottom: .2rem;
        background-color: #fff;
    }
    .mine-box .service p{
        font: .3rem/.8rem "";
        text-align: left;
        margin-left: .2rem;
    }
</style>