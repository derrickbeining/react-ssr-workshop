import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
// ------------------------------------------------------- from thunk.withExtraArgument
// ------------------------------------------------------- in client/index &
// ------------------------------------------------------- server / createStore
export const fetchUsers = () => async (dispatch, getState, apiAxios) => {
  return apiAxios.get('/users')
    .then(res => dispatch({type: FETCH_USERS, payload: res}))
  // .catch(reason => console.warn(reason.response));
}

export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser = () => (dispatch, getState, apiAxios) => {
  return apiAxios.get('/current_user')
    .then(res => dispatch({type: FETCH_CURRENT_USER, payload: res}))
  // .catch(reason => console.warn(reason.response));
}

export const FETCH_ADMINS = 'fetch_admins';
export const fetchAdmins = () => (dispatch, getState, apiAxios) => {
  return apiAxios.get('/admins')
    .then(res => dispatch({type: FETCH_ADMINS, payload: res}))
  // .catch(reason => console.warn(reason.response));
}
