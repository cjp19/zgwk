<template>
    <div class="shopcar-box">
        <mt-header title="进货单" class="myheader">
            <router-link to="/" slot="left">
                <mt-button icon="back" @click ="creturn"></mt-button>
            </router-link>
            <mt-button slot="right"></mt-button>
        </mt-header>
        <div class="goodlist" v-show = 'showcar'>
            <div class="shopcar-icon">
                <img src="../../../public/img/data_image_shopcar.png">
            </div>
            <p class="line-word1">进货单空空如也</p>
            <p class="line-word2">赶紧挑选中意的货品吧！</p>
            <router-link
                :to = "{name: 'home'}"
                class="line-btn">去首页逛逛
            </router-link>
        </div>
        <div class="goodlist1">
            <ul>
                <li 
                    v-for = 'shopca in shopcar'
                    :key = 'shopca.commodityId'
                >
                    <input type="checkbox">
                    <div class="left">
                        <img :src="shopca.pictureUrl">
                        <h3>{{shopca.commodityName}}</h3>
                        <p>￥{{shopca.commodityPrice}}</p>
                        
                    </div>
                    <div class="right">
                        <button type="button" name="button" @click = 'addcar(shopca)'>+</button>
                        <span>{{shopca.num}}</span>
                        <button type="button" name="button" @click = 'reducercar(shopca)'>-</button>
                    </div>
                </li>
            </ul>
        </div>
        <!-- <p>{{time | time('-')}}</p> -->
        <div class="totalprice">
            <div class="select">
                <input type="checkbox"><span>全选</span>
            </div>
            <div class="price">
                <p class="he">合计(不含运费):  <span>￥{{totalInfo.price | fixed}}</span></p>
                <p class="zhe">已优惠:￥0.00</p>
            </div>
            <button>去结算</button>
        </div>
    </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from 'vuex'
    var methodsMixin = {
        methods: {
            creturn(){
                this.$router.go(-1)
            }
        }
    }
    export default {
        name: 'Shopcar',
        data(){
            return {
                shopcardata: '',
                showcar: true,
                time: Date.now()
            }
        },
        created(){
            this.showcardata()
        },
        computed: {
            ...mapGetters(['totalInfo']),
            ...mapState({
                shopcar: state => state.shopcar
            })
        },
        methods: {
            ...mapActions(['addcar','reducercar']),
            showcardata(){
                console.log('asdfgh',this.shopcar)
                if(this.shopcar.length == 0){
                    this.showcar = true;
                }else{
                    this.showcar = false;
                }
            }
        },
        mixins: [methodsMixin],
        filters: {
            time(val,type){
                let date = new Date(val)
                return date.getFullYear() + type + (date.getMonth() + 1) + type + date.getDate()
            },
            fixed(val){
                return val.toFixed(2)
            }
        }
    }
</script>

<style lang="css" scoped>
    .shopcar-box{
        padding-top: .7rem;
    }
    .shopcar-box .myheader{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
    }
    .shopcar-box .goodlist{
        background-color: #f4f4f4;
        height: 5rem;
        padding-top: .5rem;
    }
    .shopcar-box .goodlist .shopcar-icon{
        width: 2.2rem;
        height: 2.2rem;
        margin: 0 auto;
        background-color: #d6d6d6;
        border-radius: 50%;
    }
    .shopcar-box .goodlist .shopcar-icon img{
        width: 1.2rem;
        height: 1.2rem;
        margin: .6rem auto;
    }
    .shopcar-box .goodlist .line-word1{
        margin-top: .3rem;
        font: .3rem/.3rem "";
    }
    .shopcar-box .goodlist .line-word2{
        margin-top: .2rem;
        font-size: .26rem/.26rem "";
    }
    .shopcar-box .goodlist .line-btn{
        display: block;
        font: .3rem/.6rem "";
        border: .02rem solid #f60;
        width: 2.4rem;
        margin: .2rem auto;
        border-radius: .1rem;
        color: #f60;
    }
    .shopcar-box .goodlist1 ul{
        padding-bottom: 2rem;
    }
    .shopcar-box .goodlist1 ul li{
        display: flex;
        justify-content: space-between;
        align-item: center;
        box-shadow: 1px 1px 5px black;
        margin: .2rem;
        padding: .2rem;
        height: 1.5rem;
        background-color: #fff;
    }
    .shopcar-box .goodlist1 ul li input{
        margin-top: .6rem;
    }
    .shopcar-box .goodlist1 ul li .left{
        width: 70%;
        text-align: left;
    }
    .shopcar-box .goodlist1 ul li .left img{
        width: 1.5rem;
        height: 1.5rem;
        float: left;
    }
    .shopcar-box .goodlist1 ul li .left h3{
        overflow:hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin: .1rem;
    }
    .shopcar-box .goodlist1 ul li .left p{
        margin-top: .5rem;
        color: #ff6353;
    }
    .shopcar-box .goodlist1 ul li .right{
        border: .02rem solid #ccc;
        border-radius: .08rem;
        overflow:hidden;
        width: 1.6rem;
        height: .4rem;
        margin-top: .8rem;
    }
    .shopcar-box .goodlist1 ul li .right button{
        float:left;
        width: .4rem;
        height: .4rem;
        border: 0;
        background-color: #fff;
    }
    .shopcar-box .goodlist1 ul li .right span{
        float:left;
        width: .76rem;
        height: .4rem;
        line-height: .4rem;
        border-left: .02rem solid #ccc;
        border-right: .02rem solid #ccc;
    }
    .shopcar-box .totalprice{
        text-align: left;
        position: fixed;
        left: 0;
        bottom: 1rem;
        height: 1rem;
        background: #fff;
        width: 100%;
        height: 1rem;
    }
    .shopcar-box .totalprice .select{
        float:left;
    }
    .shopcar-box .totalprice .select input{
        margin: .4rem 0 0 .3rem;
    }
    .shopcar-box .totalprice .select span{
        font: .3rem/1rem "";
        margin-left: .1rem;
    }
    .shopcar-box .totalprice .price{
        float:left;
        padding-left: .8rem;
        width: 3.2rem;
    }
    .shopcar-box .totalprice .price .he{
        text-align: right;
        font: .23rem/.5rem "";
    }
    .shopcar-box .totalprice .price .he span{
        font-size: .3rem;
        color: #fb3d3d;
    }
    .shopcar-box .totalprice .price .zhe{
        text-align: right;
        color: #666;
        font: .23rem/.4rem "";
    }
    .shopcar-box .totalprice button{
        float:right;
        border: 0;
        height: 1rem;
        width: 2rem;
        background: #fb3d3d;
        color: #fff;
        font: .32rem/1rem "";
    }
</style>