const AUTH_STATUS = {
  loading: "loading",
  success: "success",
  error: "error"
};

export const auth_req = state => {
  state.authStatus = AUTH_STATUS.loading;
};

export const auth_err = state => {
  state.authStatus = AUTH_STATUS.error;
  state.token = null;
};

export const auth_success = (state, token = "") => {
  state.authStatus = AUTH_STATUS.success;
  state.token = token;
};

export function mutateCurrentPosition(state, payload){
  state.currentPosition = payload;
}

