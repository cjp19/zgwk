<template>
  <div id="app">
  <!-- <transition enter-active-class = "animated slideInRight"> -->
    <router-view>展示区</router-view>
  <!-- </transition> -->
    <Foot v-show = 'footFlag'></Foot>
  </div>
</template>

<script>
import Foot from './components/common/Foot'
import {mapActions,mapMutations,mapGetters} from 'vuex'
import {FOOT_FLAG_CHANGE,LOADING_FLAG,USER_CHANGE} from './store/const.js'
  export default {
    name: "App",
    components: {
      Foot
    },
    computed: {
      ...mapGetters(['footFlag','loadingFlag','user']),
      num(){
        return 2
      }
    },
    created(){
      this.initCar()
    },
    mounted(){
      console.log('root',this.$root)
    },
    methods: {
      ...mapMutations(['chen']),
      ...mapActions(['initCar']),
      aa(){
        alert(1)
      },
      add(){
        console.log(this.$store.state)
      }
      // chen(){
      //   this.$store.commit('chen',1)
      // }
    },
    watch: {
      //路由的监听
      $route: {
        handler(){
          //数据改变后的执行函数
          let path = this.$route.path
          if(/login|register|detail/.test(path)){
            this.$store.dispatch(FOOT_FLAG_CHANGE,false)
          }
          if(/home|type|shopcar|mine/.test(path)){
            this.$store.dispatch(FOOT_FLAG_CHANGE,true)
          }
        },
        immediate: true //立刻开启当前数据监听和执行
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:#eee;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
