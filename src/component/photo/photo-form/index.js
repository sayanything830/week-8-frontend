import './_photo-form.scss';
import React from 'react';
import {connect} from 'react-redux';

const fileToDataURL = file => {
  return new Promise((resolve, reject) => {
    if(!file)
      return reject(new Error('File is required'));

    //-------------------------------------------------------------
    // vinicio - sync
    let reader = new FileReader();
    reader.addEventListener('load', () => resolve(reader.result));
    reader.addEventListener('error',reject);
    //-------------------------------------------------------------

    return reader.readAsDataURL(file); // vinicio - async
  });
};

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    //-------------------------------------------------------------
    this.emptyState = {
      preview: undefined,

      photo: '',
      photoDirty: false,
      photoError: 'Picture is required.',

      description: '',
      descriptionDirty: false,
      descriptionError: 'Description is required.',
    };

    this.state = this.emptyState;
    //-------------------------------------------------------------
    // Binding Handlers
    //-------------------------------------------------------------
    let memberFunctions = Object.getOwnPropertyNames(PhotoForm.prototype);
    for(let functionName of memberFunctions) {
      if(functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
    //-------------------------------------------------------------
  }
  //----------------------------------------------------------------------
  // Member Functions
  //----------------------------------------------------------------------
  handleValidate({type,value,files}) {
    let validImageTypes = ['image/png','image/jpeg','image/jpg'];

    switch(type) {
    case 'file':
      if(files.length !== 1)
        return 'You must only select one file';

      let imageType = files[0].type;

      if(!validImageTypes.includes(imageType))
        return 'The image must be a png or a jpg';

      return null;
    case 'text':
      if(value.length < 5)
        return 'You must have at least 5 characters';
      return null;
    default:
      return null;
    }
  }

  handleChange(event) {
    let {type, value, files} = event.target;

    if(type === 'file') {
      let error = this.handleValidate(event.target);
      if(!error) {
        fileToDataURL(files[0])
          .then(preview => this.setState({preview}));
      }
      this.setState({
        photo: files[0],
        photoError: error,
        photoDirty: true,
      });
    } else {
      this.setState({
        description: value,
        descriptionError : this.handleValidate(event.target),
        descriptionDirty: true,
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    // if(error) return new Error(error);
    this.props.onComplete(this.state);
    this.setState(this.emptyState);
  }

  //----------------------------------------------------------------------
  // Life-cycle hooks
  //----------------------------------------------------------------------
  render(){
    return(
      <form
        onSubmit={this.handleSubmit}
        className='photo-form'>

        <img style={{width:'200px'}} src={this.state.preview} />

        <p>{this.state.photoError}</p>
        <label>Choose a File
        <input
          type='file'
          name='photo'
          onChange={this.handleChange}
        /></label>


        <fieldset>
          <label>Description
          <input
            type='text'
            name='description'
            value={this.state.description}
            onChange={this.handleChange}
          /></label>
        </fieldset>
        <p>{this.state.descriptionError}</p>

        <button
          type='submit'>
          upload photo
        </button>
      </form>
    );
  }
}

export default PhotoForm;
