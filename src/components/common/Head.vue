<template>
    <div class="app-head-box">
        <img src="../../../public/img/homelogo.png">
        <input placeholder="请输入产品关键字" class="search" />
    </div>
</template>

<script>
    export default {
        name: 'Head',
        data() {
            return {
                msg: 'header',
                value: ''
            }
        }
    }
</script>

<style lang="css" scoped>
    .app-head-box{
        height:.9rem;
        overflow: hidden;
        background: #fff;
    }
    img{
        width: 20%;
        height: .45rem;
        margin-top: .25rem;
        margin-left: .2rem;
        float: left
    }
    .app-head-box .search{
        width: 70%;
        float: right;
        background: #eee;
        height: .6rem;
        border-radius: .1rem;
        padding: 0 .1rem;
        margin: .15rem .1rem 0 0;
    }
</style>