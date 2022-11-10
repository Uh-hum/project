import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Detail from "@/pages/Detail";
import addCartSuccess from "@/pages/AddCartSuccess";
import shopCar from "@/pages/ShopCart"

//配置路由
export default [
    {
        path: "/home",
        component: Home,
        meta: { show: true }
    },
    {
        path: "/search/:keyword?",
        name: "search",
        component: Search,
        meta: { show: true },
        // 路由组件传递props数据
        props: true
    },
    {
        path: "/login",
        component: Login,
        meta: { show: false }
    },
    {
        path: "/register",
        component: Register,
        meta: { show: false }
    },
    {
        // 点击商品图片时候需要跳转详情页
        name: "detail",
        path: "/detail/:skuId",
        component: Detail
    },
    {
        name: "addcartsuccess",
        path: "/addcartsuccess",
        component: addCartSuccess
    },
    {
        name: "shopCar",
        path: "/shopCar",
        component: shopCar
    },
    //重定向，项目运行的时候访问 / ,立马定向到首页
    {
        path: "*",
        redirect: "/home"
    }
];
