import { reqGetCode, reqUserInfo, reqUserLogin, reqUserRegister } from "@/api";
import {setToken} from "@/utils/token"
const state = {
    code: "",
    token: localStorage.getItem("TOKEN"),
    userInfo: {}
};
const actions = {
    // 获取验证码
    async getCode({ commit }, phone) {
        let result = await reqGetCode(phone);
        if (result.code == 200) {
            commit("GETCODE", result.data);
            return "ok";
        } else {
            return Promise.reject(new Error());
        }
    },
    //用户注册
    async userRegister({ commit }, user) {
        let result = await reqUserRegister(user);
        if (result.code == 200) {
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
    // 登录
    async userLogin({ commit }, data) {
        let result = await reqUserLogin(data);
        if (result.code == 200) {
            // console.log(result);
            commit("USERLOGIN", result.data.token);
            setToken(result.data.token)
            return "ok";
        } else {
            return Promise.reject(new Error("faile"));
        }
    },
    // 获取用户信息
    async getUserInfo({ commit }) {
        let result = await reqUserInfo();
        if (result.code == 200) {
            // console.log(result);
            commit("GETUSERINFO", result.data);
        } 
    }
};
const mutations = {
    GETCODE(state, code) {
        state.code = code;
    },
    USERLOGIN(state, token) {
        state.token = token;
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo
    }
};
const getters = {};
export default {
    state,
    actions,
    mutations,
    getters
};
