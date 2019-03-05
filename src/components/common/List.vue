<template>
    <div class="app-list-box">
        <div class="list">
            <ul>
                <li v-for = '(v,i) in data.data' :key = ''v.id>
                    <img v-bind:src="v.imgsrc">
                    <p>{{v.title}}</p>
                    <span>{{v.price}}</span>
                </li>
            </ul>
            <p class="load">点击继续加载</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'List',
        data(){
            return {
                data: ''
            }
        },
        mounted(){
            this.$http.get('/data/good.json')
            .then(res => {
                console.log(res)
                this.data = res
            })
            .catch(error => console.log(error))
        }
        // this.$http.get('/dt/napi/index/hot/',{
        //     params: {
        //         start: 0,
        //         include_fields: 'sender,album',
        //         limit: 48,
        //         _: Date.now()
        //     }
        // })
        // .then(res => {
        //     console.log(res)
        // })
        // .catch(error => console.log(error))
        // }
    }
</script>

<style lang="css" scoped>
    .app-list-box .list{
        position: relative;
    }
    .app-list-box .list .load{
        text-align: center;
        font: .26rem/.8rem "";
        background: #fff;
    }
    .app-list-box .list ul{
        overflow:hidden;
    }
    .app-list-box .list ul li{
        width: 3.7rem;
        height: 5rem;
        float: left;
        background-color: #fff;
        margin-top: .1rem;
    }
    .app-list-box .list ul li img{
        width: 3.7rem;
        height: 3.7rem;
    }
    .app-list-box .list ul li p{
        font: .26rem/.3rem "";
        height: .6rem;
        text-align: left;
        padding: 0 .15rem;
        overflow: hidden;
    }
    .app-list-box .list ul li span{
        display: block;
        font: .26rem/.5rem "";
        color: red;
        text-align: left;
        padding: 0 .15rem;
    }
    .app-list-box .list ul li:nth-child(odd){
        margin-right: .1rem;
    }
</style>