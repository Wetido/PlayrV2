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
        commit("auth_success");
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
        commit("auth_success", token);
        resolve(token);
      })
      .catch(err => {
        commit("auth_err");
        reject(err);
      });
  });
};

export async function actionCurrentPosition({commit}){

  const options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0,
  };

  const success = (pos) => {
    var crd = pos.coords;
    commit('mutateCurrentPosition', crd)
  }

  const error = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  await navigator.geolocation.getCurrentPosition(success, error, options);
}



