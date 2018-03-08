let validateGallery = gallery => {
  if(!gallery.name) {
    throw new Error('Validation Error: category must include name');
  }
};

let initialState = [];

export default (state=[], action) => {
  let {type, payload} = action;

  switch(type) {
  case 'GALLERY_CREATE':
    validateGallery(payload);
    return [...state, payload];
  case 'GALLERY_UPDATE':
    validateGallery(payload);
    return state.map(gallery => gallery.name === payload.name ? payload : gallery);
  case 'GALLERY_DELETE':
    validateGallery(payload);
    return state.filter(category => category.name !== payload.name);
  case 'GALLERY_RESET': return initialState;
  default: return state;
  }
};
