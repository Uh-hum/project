<template>
    <div id="app">
        <Header></Header>
        <router-view></router-view>
        <Footer v-show="$route.meta.show"></Footer>
    </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";

export default {
    name: "App",
    components: {
        Header,
        Footer
    },
    // 组件挂载完毕向服务器发请求
    mounted() {
        // 派发一个action获取三级菜单后台服务器数据
        this.$store.dispatch("categoryList");
        this.$store.dispatch('getBannerList')
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /* margin-top: 60px; */
}
</style>
