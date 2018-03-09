import React from 'react';
import {connect} from 'react-redux';
import {fetchPhotoRequest, photoCreate, createPhotoRequest} from '../../action/photo-actions';
import PhotoForm from '../photo/photo-form';

class Dashboard extends React.Component {
  componentWillMount() {
    if(this.props.photos.length === 0) {
      this.props.fetchPhotos();
    }
  }

  render() {
    return (
      <div className="dashboard-container">
        <h1>Welcome to Your Dashboard!</h1>

        <PhotoForm onComplete={this.props.createPhoto}/>
        {this.props.photos ?
          this.props.photos.map(photo =>
            <div key={photo._id}>
              <img style={{width:'200px'}} src={photo.url} />
              <p>{photo.description}</p>
            </div>)
          : undefined}

      </div>
    );
  }
}

const mapStateToProps = state => ({
  photos: state.photos,
});

const mapDispatchToProps = (dispatch, getState) => ({
  fetchPhotos: () => dispatch(fetchPhotoRequest()),
  createPhoto: photo => dispatch(createPhotoRequest(photo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);


