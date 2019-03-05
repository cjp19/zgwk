<template>
    <div class="app-foot-box">
        <ul>
            <li>
                <router-link 
                    :to = "{name: 'home'}"
                    active-class = 'active'
                >
                    <i class="fa fa-home"></i>
                    首页
                </router-link>
            </li>
            <li>
                <router-link 
                    :to = "{name: 'type'}"
                    active-class = 'active'
                >
                    <i class="fa fa-list"></i>
                    分类
                </router-link>
            </li>
            <li>
                <router-link 
                    :to = "{name: 'shopcar'}"
                    active-class = 'active'
                >
                    <i class="fa fa-clipboard"></i>
                    进货单
                </router-link>
            </li>
            <li>
                <router-link 
                    :to = "{name: 'mine'}"
                    active-class = 'active'
                >
                    <i class="fa fa-user"></i>
                    我的
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    console.log(document.body.clientWidth)
    export default {
        name: 'Foot'
    }
</script>

<style lang="css" scoped>
    .app-foot-box{
        width: 100%;
        height: 1rem;
        background-color: white;
        position: fixed;
        left: 0;
        bottom: 0;
        border-top: .02rem solid #eee;
    }
    .app-foot-box ul{
        overflow: hidden;
        width: 100%;
    }
    .app-foot-box ul li{
        float: left;
        width: 25%;
    }
    .app-foot-box .active{
        color: red;
    }
    .app-foot-box ul li i{
        font-size: .5rem;
        display: block;
        margin-top: .1rem;
    }
</style>