import { reqGetSearchInfo } from "@/api";

const state = {
    searchList: {}
};
const actions = {
    async getSearchInfo({ commit }, params) {
        let result = await reqGetSearchInfo(params);
        // params 形参是当用户派发action的时候第二个参数传递过来的，至少是一个空对象
        if (result.code === 200) {
            commit("GETSEARCHINFO", result.data);
        }
    }
};
const mutations = {
    GETSEARCHINFO(state, searchList) {
        state.searchList = searchList
    }
};
// getters 将组件当中的数据简化
const getters = {
    goodsList(state) {
        return state.searchList.goodsList || []
    },
    trademarkList(state) {
        return state.searchList.trademarkList || []
    },
    attrsList(state) {
        return state.searchList.attrsList || []
    }
};

export default {
    state,
    actions,
    mutations,
    getters
};
