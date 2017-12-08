import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
// ------------------------------------------------------- from thunk.withExtraArgument
// ------------------------------------------------------- in client/index &
// ------------------------------------------------------- server / createStore
export const fetchUsers = () => async (dispatch, getState, apiAxios) => {
  const res = await apiAxios.get('http://react-ssr-api.herokuapp.com/users');
  return dispatch({
    type: FETCH_USERS,
    payload: res
  });
}

export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser = () => async (dispatch, getState, apiAxios) => {
  const res = await apiAxios.get('/current_user');
  return dispatch({
    type: FETCH_CURRENT_USER,
    payload: res,
  })
}

export const FETCH_ADMINS = 'fetch_admins';
export const fetchAdmins = () => async (dispatch, getState, apiAxios) => {
  const res = await apiAxios.get('/admins');
  return dispatch({
    type: FETCH_ADMINS,
    payload: res,
  })
}
