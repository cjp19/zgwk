<template>
    <div class="app-home-box">
        <Head></Head>
        <Banner></Banner>
        <div class="programaWrap">
            <ul>
                <li>
                <a href="#">
                    <img src="http://img.99114.com/group1/M00/62/AE/wKgGS1xH4kOAdmRwAAAgVbKE4TE260.png" alt="京东金条" title="京东金条">
                    <span>京东金条</span>
                </a>
                </li>
                <li>
                <a href="#">
                    <img src="http://img.99114.com/group1/M00/8D/A7/wKgGSFxH4kyADNkqAAAQBhRIuKw699.png" alt="行业分类" title="行业分类">
                    <span>行业分类</span>
                </a>
                </li>
                <li>
                <a href="#">
                    <img src="http://img.99114.com/group1/M00/62/AE/wKgGS1xH4lGAJkB5AAAXpcHJl64046.png" alt="免费旅游" title="免费旅游">
                    <span>免费旅游</span>
                </a>
                </li>
                <li>
                <a href="#">
                    <img src="http://img.99114.com/group1/M00/8D/A7/wKgGSFxH4lWAfgxaAAARuH1CHOk675.png" alt="采购中心" title="采购中心">
                    <span>采购中心</span>
                </a>
                </li>
                <li>
                    <a href="#">
                        <img src="http://img.99114.com/group1/M00/8D/A7/wKgGSFxH4lqAaywpAAAX95SJitA148.png" alt="一键开店" title="一键开店">
                        <span>一键开店</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="head">
            <div class="headlines">
                <img src="../../../public/img/toutiao.jpg">
            </div>
            <div class="recommend">
                <ul>
                    <li><img src="../../../public/img/tuijian1.jpg"></li>
                    <li><img src="../../../public/img/tuijian2.jpg"></li>
                    <li><img src="../../../public/img/tuijian3.jpg"></li>
                    <li><img src="../../../public/img/tuijian4.jpg"></li>
                </ul>
            </div>
        </div>
        <List></List>
        <div class="bottom">
            <span @click = "login" class="login">登录</span>
            <span @click = "register" class="register">免费注册</span>
            <p>京ICP证060961号 网站备案号京ICP备08102099号-148</p>
            <p>版权所有：北京网库信息技术股份有限公司</p>
        </div>
    </div>
</template>

<script>
import Banner from './Banner'
import Head from '../common/Head'
import List from '../common/List'
    export default {
        name: 'Home',
        components: {
            Banner,Head,List
        },
        methods: {
            login(){
                this.$router.push('/login')
            },
            register(){
                this.$router.replace('/register')
            }
        }
    }
</script>

<style lang="css" scoped>
    .app-home-box{
        padding-bottom: 1rem;
    }
    .programaWrap ul{
        overflow:hidden;
        padding:.3rem .2rem .1rem;
        margin-top:.2rem;
        background-color:#fff;
    }
    .programaWrap ul li{
        float:left;
        width:1.42rem;
        height:1.6rem;
    }
    .programaWrap ul li img{
        width:.9rem;
        height:.9rem;
        display:block;
        margin:0 auto .1rem;
    }
    .programaWrap ul li span{
        font-size:.28rem;
        color:#333;
        display:block;
        margin-top:.2rem;
    }
    .head{
        overflow: hidden;
        padding: .1rem 0;
    }
    .headlines{
        float: left;
        width: 2.5rem;
        height: 3rem;
    }
    .headlines img{
        width: 2.5rem;
        height: 3rem;
    }
    .recommend{
        float: right;
    }
    .recommend ul{
        overflow: hidden;
        float: left;
        width: 5rem;
        height: 3rem;
    }
    .recommend ul li{
        width: 2.5rem;
        height: 1.5rem;
        float: left;
    }
    .recommend ul li img{
        width: 2.5rem;
        height: 1.5rem;
    }
    .bottom{
        padding: .1rem .2rem .4rem;
        text-align: left;
        background-color: #fff;
        margin-top: .1rem;
    }
    .bottom .login,.register{
        color: #08e;
        font: .28rem/.8rem "";
        margin-right: .4rem;
    }
    .bottom p{
        text-align: center;
        font-size: .2rem;
    }
</style>