import React from 'react';
import {connect} from 'react-redux';
import {fetchPhotoRequest, photoCreate} from '../../action/photo-actions';
import {galleryCreate} from '../../action/gallery-actions';
import GalleryForm from '../gallery/gallery-form';
import GalleryItem from '../gallery/gallery-item';
import PhotoForm from '../photo/photo-form';

class Dashboard extends React.Component {
  componentWillMount() {
    this.props.fetchPhotos();
  }

  render() {
    return (
      <div className="dashboard-container">
        <h1>Welcome to Your Dashboard!</h1>
        <GalleryForm
          buttonText="Create"
          onComplete={this.props.createGallery}/>

        {this.props.galleries ?
          this.props.galleries.map((gallery, idx) =>
            <div key={idx}>
              <GalleryItem
                gallery={gallery}
                buttonText="Delete Gallery"/>
            </div>)
          :
          undefined
        }

        <PhotoForm onComplete={this.props.createPhoto}/>

        {/* {this.props.photos ?
          this.props.photos.data.map(photo =>
            <div key={photo._id}>
              <img style={{width:'200px'}} src={photo.url} />
              <p>{photo.description}</p>
            </div>)
          : undefined} */}

      </div>
    );
  }
}

const mapStateToProps = state => ({
  galleries: state.galleries,
  photos: state.photos,
});

const mapDispatchToProps = (dispatch, getState) => ({
  createGallery: gallery => dispatch(galleryCreate(gallery)),
  fetchPhotos: () => dispatch(fetchPhotoRequest()),
  createPhoto: photo => dispatch(photoCreate(photo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);


