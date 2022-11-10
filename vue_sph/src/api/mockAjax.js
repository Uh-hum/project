import axios from "axios";
// 引入进度条
import nProgress from "nprogress";
import 'nprogress/nprogress.css'

const requests = axios.create({
    // 基础路径
    baseURL: "/mock",
    // 请求超时事件
    timeout: 5000
});
// 请求拦截器
requests.interceptors.request.use((config) => {
    // config 配置对象，对象中的 headers 请求头属性很重要
    // 进度条开始动
    nProgress.start()
    return config;
});
// 响应拦截器
requests.interceptors.response.use(
    (res) => {
        // 进度条结束
        nProgress.done()
        // 成功的回调函数：服务器响应数据回来以后响应拦截器可以拦截
        return res.data;
    },
    (error) => {
        return Promise.reject(new Error(error));
    }
);

export default requests;
