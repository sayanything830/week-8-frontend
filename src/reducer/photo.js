const validatePhoto = photo => {
  if(!photo)
    throw new Error('Photo missing');

  let {_id, url, description, owner} = photo;

  if(!_id || !description)
    throw new Error('Invalid Photo');
};

export default (state = [], {type, payload}) => {
  switch(type){
  case 'PHOTO_CREATE':
    validatePhoto(payload);
    return [payload, ...state];
  case 'PHOTO_SET':
    return [...payload.data, ...state];
  // case 'TOKEN_DELETE':
  //   return [];
  default:
    return state;
  }
};
