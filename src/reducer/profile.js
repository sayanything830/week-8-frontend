const validateProfile = profile => {
  if(!profile)
    throw new Error('Invalid Profile');

  let {bio, username, email} = profile;

  if(!bio || !username || !email)
    throw new Error('Invalid Profile, bio, username, and email required');
};

export default (state = [],{type, payload}) => {
  switch(type){
  case 'PROFILE_CREATE':
    validateProfile(payload);
    return [payload, ...state];
  case 'PROFILE_GET':
    return payload;
  case 'PROFILE_UPDATE':
    return payload;
  // case 'TOKEN_DELETE':
  //   return [];
  default:
    return state;
  }
};
