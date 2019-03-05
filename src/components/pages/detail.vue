<template>
    <div class="detail-box">
        <p class="return" @click = "creturn"><</p>
        <div class="goodlist">
            <img :src="goods[this.$route.query.category_id][this.$route.query.num].pictureUrl">
            <h3>{{goods[this.$route.query.category_id][this.$route.query.num].commodityName}}</h3>
            <p class="price"><span>￥</span>{{goods[this.$route.query.category_id][this.$route.query.num].commodityPrice}}</p>
            <div class="addcarbox">
                <div class="index">
                    <i class="fa fa-home"></i>
                    <p>首页</p>
                </div>
                <div class="shopcar">
                    <router-link to = "/shopcar">
                        <i class="fa fa-cart-arrow-down"></i>
                        <p>购物车</p>
                    </router-link>
                </div>
                <button class="add">加入购物车</button>
            </div>
            <div class="sale">
                <p class="sp">促销</p>
                <div class="saleIn">
                    <span>优惠</span>
                    <p>超值礼盒</p>
                </div>
            </div>
            <div class="guige">
                <p class="guige1">规格</p>
                <p class="guige2">{{goods[this.$route.query.category_id][this.$route.query.num].commodityPrice}}{{goods[this.$route.query.category_id][this.$route.query.num].commoditySpec}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {mapActions} from 'vuex'
    export default {
        name: 'Detail',
        // data(){
        //     return {
        //         dataList: ''
        //     }
        // },
        // props: ['id'],
        // created(){
        //     console.log(axios)
        //     axios.get('/wph/api/category/category/getSellingCategorysChildren/',{
        //         params: {
        //             app_name: '',
        //             app_version: '',
        //             mobile_channel: '',
        //             hierarchy_id: '',
        //             category_id: this.$route.query.category_id,
        //             warehouse: '',
        //             mars_cid: '',
        //             category_filter: '',
        //             sale_for: '',
        //             area_id:'',
        //             from_url_go_api_switch: '',
        //             preview_go_admin: '',
        //             src: 'app',
        //             channel_id: '',
        //             wap_id: 'classify_wap_107',
        //             channel_name: '',
        //             _t: Date.now(),
        //             _: Date.now()
        //         }
        //     }).then(res => {this.dataList = res.data;console.log(res.data)}).catch(error => console.log(error))
        // }

        data(){
            return {
                goods: []
            }
        },
        created(){
            this.getGoods()
        },
        methods: {
            ...mapActions(['addcar','detailaddcar']),
            getGoods(){
                this.$http.get('/data/goods.json')
                    .then(res => {console.log(res);this.goods = res.data})
                    .catch(error => console.log(error))
            },
            creturn(){
                this.$router.go(-1)
            }
        },
    }
</script>

<style lang="css" scoped>
    .detail-box .return {
        position: fixed;
        top: .2rem;
        left: .2rem;
        width: .6rem;
        height: .6rem;
        border: .02rem solid #ccc;
        border-radius: 50%;
        font: .4rem/.56rem "";
        color: #ccc;
    }
    .detail-box .goodlist{
        padding-bottom: 1.2rem;
    }
    .detail-box .goodlist img{
        display: block;
        width: 100%;
    }
    .detail-box .goodlist h3{
        background-color: #fff;
        padding: .2rem;
        text-align: left;
        font: .36rem/.6rem "";
    }
    .detail-box .goodlist p.price{
        color: #ff6353;
        font: .4rem/.4rem "";
        text-align: left;
        padding: 0 .2rem .4rem;
        background-color: #fff;
    }
    .detail-box .goodlist p span{
        font: .3rem/.4rem "";
        color: #ff6353;
    }
    .detail-box .goodlist .addcarbox{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1rem;
        background: #fff;
    }
    .detail-box .goodlist .addcarbox .index{
        float:left;
        margin: .15rem .5rem 0 .5rem;
    }
    .detail-box .goodlist .addcarbox .shopcar{
        float:left;
        margin-top: .15rem;
    }
    .detail-box .goodlist .addcarbox button{
        float:right;
    }
    .detail-box .goodlist .addcarbox i{
        font-size: .4rem;
    }
    .detail-box .goodlist .addcarbox p{
        color: #999;
    }
    .detail-box .goodlist .addcarbox .add{
        float: right;
        height: 1rem;
        width: 2rem;
        border: 0;
        background-color: #ff6353;
        color: #fff;
    }
    .detail-box .goodlist .sale{
        width: 100%;
        height: 2rem;
        background-color: #fff;
        margin: .2rem 0;
    }
    .detail-box .goodlist .sale .sp{
        padding: 0 .3rem;
        height: 1rem;
        font: 700 .3rem/1rem "";
        color: #999;
        border-bottom: .02rem solid #eee;
        text-align: left;
    }
    .detail-box .goodlist .sale .saleIn{
        overflow:hidden;
    }
    .detail-box .goodlist .sale .saleIn span{
        float: left;
        width: .6rem;
        height: .3rem;
        background-color: #ff6353;
        color: #fff;
        margin: .3rem;
    }
    .detail-box .goodlist .sale .saleIn p{
        float: left;
        margin-top: .25rem;
        font-size: .3rem;
    }
    .detail-box .goodlist .guige{
        background: #fff;
        margin-top: .2rem;
        overflow: hidden;
        height: 1.1rem;
        border-bottom: .02rem solid #ccc;
    }
    .detail-box .goodlist .guige1{
        float: left;
        color: #bbb;
        font: .3rem/1rem "";
        margin-left: .2rem;
    }
    .detail-box .goodlist .guige2{
        border: .02rem solid #11b57c;
        color: #11b57c;
        float: left;
        padding: .1rem;
        font-size: .24rem;
        margin: .25rem 0 0 .2rem;
    }
</style>