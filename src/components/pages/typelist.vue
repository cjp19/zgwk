<template>
    <div class="detail-box">
        <div class="goodlist1">
        <Loading v-show = 'loadingflag'></Loading>
            <ul>
                <li 
                    v-bind:category_id = "category_id"
                    v-for = '(good,i) in goods[this.$route.params.id]'
                    :key = 'good.commodityId'
                >
                    <router-link 
                        class="left"
                        :to = "{name: 'detail', query: {category_id: category_id,num: i}}">
                        <div>
                            <img :src="good.pictureUrl">
                            <h3>{{good.commodityName}}</h3>
                            <p>价格：￥{{good.commodityPrice}}</p>
                        </div>
                    </router-link>
                    <div class="right">
                        <button type="button" name="button" @click = 'addcar(good)'>加入购物车</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {mapActions} from 'vuex'
    export default {
        name: 'Detail',
        data(){
            return {
                goods: [],
                category_id: '',
                loadingflag: true
            }
        },
        created(){
            this.getGoods()
            this.category_id = this.$route.params.id?this.$route.params.id:0
        },
        methods: {
            ...mapActions(['addcar']),
            getGoods(){
                this.$http.get('/data/goods.json')
                    .then(res => {console.log(res);this.goods = res.data;this.loadingflag = false})
                    .catch(error => console.log(error))
            }
        },
        mounted(){
            console.log(this.$route.params.id)
        }
    }
</script>

<style lang="css" scoped>
    .detail-box .goodlist1 ul{
        padding-bottom: 1rem;
        padding-top: .1rem;
    }
    .detail-box .goodlist1 ul li{
        display: flex;
        justify-content: space-between;
        align-item: center;
        border: .02rem solid #ddd;
        margin: 0 0 .15rem .2rem;
        padding: 0 .2rem .2rem;
        background-color: #fff;
    }
    .detail-box .goodlist1 ul li a{
        display: block;
    }
    .detail-box .goodlist1 ul li .left{
        width: 60%;
        text-align: left;
    }
    .detail-box .goodlist1 ul li .left h3{
        overflow:hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .detail-box .goodlist1 ul li .left img{
        width: 1rem;
        height: 1rem;
    }
    .detail-box .goodlist1 ul li .right{
        float: right;
        width: 35%;
    }
    .detail-box .goodlist1 ul li .right button{
        font-size: .26rem;
        border: 0;
        background: #eee;
        width: 1.8rem;
        height: .6rem;
        margin-top: 1rem;
    }
</style>