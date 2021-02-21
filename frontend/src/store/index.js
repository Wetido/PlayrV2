import Vue from "vue";
import Vuex from "vuex";
import { login, register } from "./actions";
import { auth_err, auth_req, auth_success } from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
    authStatus: ""
  },
  mutations: {
    auth_err,
    auth_req,
    auth_success
  },
  actions: {
    register,
    login
  },
  modules: {},
  getters: {
    getToken: state => state.token
  }
});
