import {combineReducers} from 'redux';
import adminsReducer from './adminsReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';

export default combineReducers({
  admins: adminsReducer,
  auth: authReducer,
  users: usersReducer,
})
