// 配置路由
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
// 引入路由组件
import routes from "./routes";

// 重写push和repalce方法来解决编程式路由在跳转当前路径且参数没有变化时抛出的NavigationDuplicated错误
// 原因分析： push的promise方法需要通过参数指定回调函数，如果没有回调函数就会返回一个promise来指定成功和失败的回调
// 且内部会判断如果要跳转的路径和参数没变化就会抛出一个失败的promise
const originPush = VueRouter.prototype.push;
const originReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        return originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(
            this,
            location,
            () => {},
            () => {}
        );
    }
};
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        return originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(
            this,
            location,
            () => {},
            () => {}
        );
    }
};

export default new VueRouter({
    routes,
    //滚动行为
    scrollBehavior(to, from, savedPosition) {
        // console.log(to, from, savedPosition)
        //返回的这个y=0，代表的滚动条在最上方
        return { y: 0 };
    }
});
