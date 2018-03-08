import superagent from 'superagent';

// -- Sync Actions -- //
export const tokenSet = token => ({
  type: 'TOKEN_SET',
  payload: token,
});

export const tokenDelete = () => ({
  type: 'TOKEN_DELETE',
});

// -- Async Actions -- //
export const signupRequest = user => dispatch => {
  return superagent.post(`${__API_URL__}/signup`)
    .send(user)
    .then(res => {
      return dispatch(tokenSet(res.text));
      try {
        localStorage.setItem('token', res.text);
      } catch(e) {
        console.log(e);
        throw e;
      }
    });
};

export const signinRequest = user => dispatch => {
  return superagent.get(`${__API_URL__}/login`)
    .auth(user.username, user.password)
    .then(res => {
      return dispatch(tokenSet(res.text));
      try {
        localStorage.setItem('token', res.text);
      } catch(e) {
        console.log(e);
        throw e;
      }
    });
};
