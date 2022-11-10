// 当前模块所有的API接口进行统一管理
import requests from "./request";

// 通过mock拦截ajax请求，请求向mock假数据发起
import mockRequests from "./mockAjax";

// 三级联动请求地址
// /api/product/getBaseCategoryList
export const reqCategoryList = () =>
    requests.get("/product/getBaseCategoryList");

// 获取banner轮播图
export const reqGetBannerList = () => mockRequests.get("/banner");

// 获取floor数据
export const reqFloorList = () => mockRequests.get("/floor");

// 获取搜索模块数据，地址：/api/list，请求方式为post
export const reqGetSearchInfo = (params) =>
    requests({
        url: "/list",
        method: "POST",
        data: params
    });

// 获取商品详情信息的接口
export const reqGoodsInfo = (skuId) => requests.get(`/item/${skuId}`);

// 将产品添加到购物车中 或者更新某一个产品的个数
export const reqAddOrUpdateShopCart = (skuId, skuNum) =>
    requests.post(`/cart/addToCart/${skuId}/${skuNum}`);

//获取购物车列表数据接口
//URL:/api/cart/cartList   method:get
export const reqCartList = () =>
    requests({ url: "/cart/cartList ", method: "get" });

//删除购物产品的接口
//URL:/api/cart/deleteCart/{skuId}   method:DELETE
export const reqDeleteCartById = (skuId) =>
    requests({ url: `/cart/deleteCart/${skuId}`, method: "delete" });

//修改商品的选中状态
//URL:/api/cart/checkCart/{skuId}/{isChecked}   method:get
export const reqUpdateCheckedByid = (skuId, isChecked) =>
    requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: "get" });

// 获取验证码
export const reqGetCode = (phone) =>
    requests.get(`/user/passport/sendCode/${phone}`);

// 注册
export const reqUserRegister = (data) =>
    requests.post("/user/passport/register", data);

// 登录
export const reqUserLogin = (data) =>
    requests.post("/user/passport/login", data);

// 获取用户信息 （需要带着用户的token向服务器要用户信息）
// 将 token 放在请求头中发给服务器
export const reqUserInfo = () => requests.get("/user/passport/auth/getUserInfo")