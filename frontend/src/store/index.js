import Vue from "vue";
import Vuex from "vuex";
import { actionCurrentPosition, actionAuthSuccess } from "./actions";
import { mutateCurrentPosition, mutateAuthSuccess } from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userId: 0,
    userHash: '',
    token: '',
    authStatus: '',
    currentPosition: null,
  },

  mutations: {
    mutateAuthSuccess,
    mutateCurrentPosition,
  },

  actions: {
    actionAuthSuccess,
    actionCurrentPosition
  },

  modules: {},

  getters: {
    getUserId: state => state.userId,
    getToken: state => state.token,
    getAuthStatus: state => state.authStatus,
    getCurrentPosition: state => state.currentPosition,
  }

});
