import React from 'react';
import {connect} from 'react-redux';
import ProfileForm from '../profile';
import {createProfileRequest} from '../../action/profile-actions';


class Settings extends React.Component {
  render() {
    let {params} = this.props.match;
    return (
      <div className="settings-container">
        <ProfileForm
          auth={params.auth}
          onComplete={this.props.createProfile}/>
      </div>
    );
  }
}

let mapStateToProps = () => ({});
let mapDispatchToProps = dispatch => ({
  createProfile: profile => dispatch(createProfileRequest(profile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
