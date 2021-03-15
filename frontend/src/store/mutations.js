import {AUTH_STATUS} from "@/consts/routes";


export function mutateAuthSuccess(state, payload){
  state.authStatus = AUTH_STATUS.SUCCESS;
  state.token = payload.token;
  state.userId = payload.userId;
  state.userHash = payload.userHash;
}


export function mutateCurrentPosition(state, payload){
  state.currentPosition = payload;
}

