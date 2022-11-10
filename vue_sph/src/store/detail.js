import { reqAddOrUpdateShopCart, reqGoodsInfo } from "@/api";
import {getUUID} from "@/utils/uuid_token"

const state = {
    goodInfo: {},
    uuid_token: getUUID(),
};
const actions = {
    async getGoodInfo({commit}, skuId) {
        let result = await reqGoodsInfo(skuId)
        if(result.code === 200) {
            commit("GETGOODINFO", result.data)
        }
    },
    async addOrUpdateShopCart({commit}, {skuId, skuNum}) {
        // 加入购物车返回的解构
        // 加入购物车的时候发送请求，将产品相关参数发送给服务器
        let result = await reqAddOrUpdateShopCart(skuId, skuNum)
        // 当前的函数如果执行就返回Promise
        if(result.code === 200) {
            // 代表加入购物车成功
            return "ok"
        } else {
            return Promise.reject(new Error("fail"))
        }
    }
};
const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo
    }
};
// getters 将组件当中的数据简化
const getters = {
    categoryView() {
        return state.goodInfo.categoryView || {}
    },
    skuInfo() {
        return state.goodInfo.skuInfo || {}
    },
    spuSaleAttrList() {
        return state.goodInfo.spuSaleAttrList || []
    }

};

export default {
    state,
    actions,
    mutations,
    getters
};
