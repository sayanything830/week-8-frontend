import {combineReducers} from 'redux';
import token from './auth';
import galleryReducer from './gallery';
import photoReducer from './photo';
import profileReducer from './profile';

export default combineReducers({
  token: token,
  galleries: galleryReducer,
  photos: photoReducer,
  profiles: profileReducer,
});
