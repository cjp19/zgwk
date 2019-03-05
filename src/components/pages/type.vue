<template>
    <div class="type-box">
        <div class="type">
            <p>推荐分类</p>
            <ul>
                <li>
                    <router-link :to = "{name: 'typelist',params: {id: '0'} }" class="link" active-class = 'active'>新鲜水果</router-link>
                </li>
                <li>
                    <router-link :to = "{name: 'typelist',params: {id: '1'} }" class="link" active-class = 'active'>精选肉类</router-link>
                </li>
                <li>
                    <router-link :to = "{name: 'typelist',params: {id: '2'} }" class="link" active-class = 'active'>海鲜水产</router-link>
                </li>
                <li>
                    <router-link :to = "{name: 'typelist',params: {id: '3'} }" class="link" active-class = 'active'>乳品糕点</router-link>
                </li>
                <li>
                    <router-link :to = "{name: 'typelist',params: {id: '4'} }" class="link" active-class = 'active'>新鲜蔬菜</router-link>
                </li>
            </ul>
        </div>
        <router-view class="type-data">子路由</router-view>
    </div>
</template>

<script>
    export default {
        name: 'Type'
    }
</script>

<style lang="css" scoped>
    .type-box{
        overflow: hidden;
    }
    .type-box .type{
        width: 1.8rem;
        float:left;
        position: fixed;
        top: 0;
        left: 0;
    }
    .type-box .type p{
        width: 1.8rem;
        height: .88rem;
        color: #f60;
        font: .3rem/.88rem "";
        background-color: #f8f8f8;
    }
    .type-box .type ul{}
    .type-box .type ul li{
        width: 1.8rem;
        height: .88rem;
        border-bottom: .02rem solid #eee;
        background-color: #fff;
    }
    .type-box .type ul li .link{
        display: block;
        width: 1.8rem;
        height: .88rem;
        font: .3rem/.88rem "";
    }
    .type-box .type .active{
        color: #fff;
        background-color: #f60;
    }
    .type-box .type-data{
        margin-left: 1.8rem;
        width: 5.7rem;
    }
</style>