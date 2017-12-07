import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
// ------------------------------------------------------- from thunk.withExtraArgument
// ------------------------------------------------------- in client/index
export const fetchUsers = () => async (dispatch, getState, apiAxios) => {
  const res = await axios.get('http://react-ssr-api.herokuapp.com/users');
  return dispatch({
    type: FETCH_USERS,
    payload: res
  });
}
