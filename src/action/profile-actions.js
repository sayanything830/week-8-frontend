import superagent from 'superagent';

// -- Sync Actions -- //
export const createProfile = profile => ({
  type: 'PROFILE_CREATE',
  payload: profile,
});

export const getProfile = profile => ({
  type: 'PROFILE_GET',
  payload: profile,
});

export const updateProfile = profile => ({
  type: 'PROFILE_UPDATE',
  payload: profile,
});

// -- Async Actions -- //
export const createProfileRequest = (profile) => (dispatch) => {
  let token = localStorage.getItem('token');

  return superagent.post(`${__API_URL__}/profiles`)
    .set('Authorization', `Bearer ${token}`)
    .field('bio', profile.bio)
    .attach('avatar', profile.avatar)
    .then(res => {
      return dispatch(createProfile(res.body));
    });
};

export const getProfileRequest = profile => dispatch => {
  let token = localStorage.getItem('token');

  return superagent.get(`${__API_URL__}/profiles/me`)
    .set('Authorization', `Bearer ${token}`)
    .then(res => dispatch(getProfile(res.body)));
};

export const updateProfileRequest = profile => dispatch => {
  let token = localStorage.getItem('token');

  return superagent.put(`${__API_URL__}/profiles/${profile._id}`)
    .set('Authorization', `Bearer ${token}`)
    .send(profile)
    .then(() => dispatch(updateProfile(profile)));
};
