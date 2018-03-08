import './_gallery-item.scss';
import React from 'react';
import {connect} from 'react-redux';
import {galleryUpdate, galleryDelete} from '../../../action/gallery-actions';
import {createPhotoRequest, fetchPhotoRequest} from '../../../action/photo-actions';
import {renderIf} from '../../../lib/utils';
import GalleryForm from '../gallery-form';
import PhotoForm from '../../photo/photo-form';
import PhotoItem from '../../photo/photo-item';

class GalleryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.gallery ?
      this.props.gallery :
      {
        name: '',
        editing: false,
      };

    this.handleEditing = this.handleEditing.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleEditing(gallery) {
    this.setState({
      editing: !this.state.editing,
    });
  }

  handleUpdate(gallery) {
    this.setState({
      editing: !this.state.editing,
    });
    this.props.galleryUpdate(gallery);
  }

  handleDelete() {
    this.props.galleryDelete(this.state);
  }

  render() {
    return (
      <div className="gallery-item" key={this.props.gallery.name}>
        <h2 onDoubleClick={this.handleEditing}>{this.props.gallery.name}</h2>
        <button type="button" onClick={this.handleDelete}>{this.props.buttonText}</button>
        {renderIf(this.state.editing, <GalleryForm
          gallery={this.props.gallery}
          buttonText="Update Gallery"
          onComplete={this.handleUpdate}/>)}

        {/* <PhotoForm
          message="Add a Photo"
          className="photo-create"
          // riderId={this.props.rider._id}
          buttonText="Create Photo"
          onComplete={this.props.createBike}
        /> */}

        {/* {this.props.photos[0] ? this.props.photos.map(photo =>
          <PhotoItem key={photo._id} buttonText="Delete Photo" photo={photo} />
        )
          :
          undefined
        } */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  photos: state.photos,
});

const mapDispatchToProps = (dispatch) => ({
  galleryUpdate: gallery => dispatch(galleryUpdate(gallery)),
  galleryDelete: gallery => dispatch(galleryDelete(gallery)),
  createPhoto: photo => dispatch(createPhotoRequest(photo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GalleryItem);
