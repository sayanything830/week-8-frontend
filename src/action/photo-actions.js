import superagent from 'superagent';
import {logError} from '../lib/utils';

// -- Sync Actions -- //
export const photoSet = photos => ({
  type: 'PHOTO_SET',
  payload: photos,
});

export const photoCreate = photo => {
  return {
    type: 'PHOTO_CREATE',
    payload: photo,
  };
};

export const photoUpdate = photo => ({
  type: 'PHOTO_UPDATE',
  payload: photo,
});

export const photoDelete = photo => ({
  type: 'PHOTO_DELETE',
  payload: photo,
});

export const photoReset = () => ({
  type: 'PHOTO_RESET',
});

// -- Async Actions -- //
export const fetchPhotoRequest = () => dispatch => {
  return superagent.get(`${__API_URL__}/photos`)
    .then(res => dispatch(photoSet(res.body)))
    .catch(logError);
};

export const createPhotoRequest = (photo) => (dispatch) => {
  let token = localStorage.getItem('token');

  return superagent.post(`${__API_URL__}/photos`)
    .set('Authorization', `Bearer ${token}`)
    .field('description', photo.description)
    .attach('photo', photo.photo)
    .then(res => {
      return dispatch(photoCreate(res.body));
    })
    .catch(logError);
};

export const updatePhotoRequest = photo => dispatch => {
  let token = localStorage.getItem('token');

  return superagent.put(`${__API_URL__}/photos/${photo._id}`)
    .set('Authorization', `Bearer ${token}`)
    .field('description', photo.description)
    .attach('photo', photo.photo)
    .then(() => dispatch(photoUpdate(photo)))
    .catch(logError);
};

export const deletePhotoRequest = photo => dispatch => {
  return superagent.delete(`${__API_URL__}/photos/${photo._id}`)
    .then(() => dispatch(photoDelete(photo)))
    .catch(logError);
};


