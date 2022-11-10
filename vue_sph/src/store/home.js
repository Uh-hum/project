import { reqGetBannerList, reqCategoryList, reqFloorList } from "@/api";

const state = {
    // 向服务器发送请求获取三级菜单数据
    categoryList: [],
    // mock拦截ajax请求，返回假数据给前端
    bannerList: [],
    floorList: []
};
const actions = {
    // 向服务器发请求获取三级菜单
    async categoryList({ commit }) {
        let result = await reqCategoryList();
        if (result.code === 200) {
            commit("CATEGORYLIST", result.data);
        }
    },
    // 获取首页轮播图数据
    async getBannerList({ commit }) {
        let result = await reqGetBannerList();
        console.log(result);
        if (result.code === 200) {
            commit("BANNERLIST", result.data);
        }
    },
    async getFloorList({ commit }) {
        let result = await reqFloorList();
        if (result.code === 200) {
            commit("FLOORLIST", result.data);
        }
    }
};
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    BANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    },
    FLOORLIST(state, floorList) {
        state.floorList = floorList
    }
};
const getters = {};

export default {
    state,
    actions,
    mutations,
    getters
};
