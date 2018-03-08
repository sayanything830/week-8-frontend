export const galleryCreate = gallery => {
  return {
    type: 'GALLERY_CREATE',
    payload: gallery,
  };
};

export const galleryUpdate = gallery => ({
  type: 'GALLERY_UPDATE',
  payload: gallery,
});

export const galleryDelete = gallery => ({
  type: 'GALLERY_DELETE',
  payload: gallery,
});

export const galleryReset =  () => ({type: 'GALLERY_RESET'});
