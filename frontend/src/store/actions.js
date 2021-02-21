import axios from "axios";

const BACKEND_URL = "http://localhost:5000";
const ROUTES = {
  login: "auth/login",
  signUp: "auth/signUp"
};

export const register = ({ commit }, userData) => {
  return new Promise((resolve, reject) => {
    commit("auth_req");
    axios
      .post(`${BACKEND_URL}/${ROUTES.signUp}`, userData)
      .then(response => {
        commit("auth_register_success");
        resolve(response);
      })
      .catch(err => {
        commit("auth_err");
        reject(err);
      });
  });
};

export const login = ({ commit }, userData) => {
  return new Promise((resolve, reject) => {
    commit("auth_req");
    axios
      .post(`${BACKEND_URL}/${ROUTES.login}`, userData)
      .then(({ data: token }) => {
        commit("auth_login_success", token);
        resolve(token);
      })
      .catch(err => {
        commit("auth_err");
        reject(err);
      });
  });
};
