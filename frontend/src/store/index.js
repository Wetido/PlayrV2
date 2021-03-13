import Vue from "vue";
import Vuex from "vuex";
import { login, register, actionCurrentPosition } from "./actions";
import { auth_err, auth_req, auth_success, mutateCurrentPosition } from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
    authStatus: "",
    currentPosition: null,

  },
  mutations: {
    auth_err,
    auth_req,
    auth_success,
    mutateCurrentPosition,
  },
  actions: {
    register,
    login,
    actionCurrentPosition
  },

  modules: {},

  getters: {
    getToken: state => state.token,
    getAuthStatus: state => state.authStatus,
    getCurrentPosition: state => state.currentPosition,
  }

});
