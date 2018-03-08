const validatePhoto = photo => {
  if(!photo)
    throw new Error('Invalid Photo');

  let {_id, url, description, owner} = photo;

  if(!_id || !url || !description || !owner)
    throw new Error('Invalid Photo');
};

export default (state = [],{type, payload}) => {
  switch(type){
  case 'PHOTO_CREATE':
    validatePhoto(payload);
    return [payload, ...state];
  case 'TOKEN_DELETE':
    return [];
  default:
    return state;
  }
};
