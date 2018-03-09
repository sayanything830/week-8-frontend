import './_settings.scss';
import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../lib/utils';
import ProfileForm from '../profile';
import {createProfileRequest, updateProfileRequest, getProfileRequest} from '../../action/profile-actions';


class Settings extends React.Component {
  componentWillMount() {
    this.props.getProfile();
  }

  render() {
    let {params} = this.props.match;
    console.log('settings props', this.props);
    return (
      <div className="settings-container">

        {renderIf(this.props.profiles,
          <div className="profile-container">
            <h2>Your Profile</h2>
            <img style={{width:'100px'}} src={this.props.profiles.avatar}/>
            <p>{this.props.profiles.bio}</p>
          </div>
        )}


        <ProfileForm
          auth={params.auth}
          onComplete={this.props.createProfile}/>)

      </div>
    );
  }
}

let mapStateToProps = state => ({
  profiles: state.profiles,
});
let mapDispatchToProps = dispatch => ({
  createProfile: profile => dispatch(createProfileRequest(profile)),
  updateProfile: profile => dispatch(updateProfileRequest(profile)),
  getProfile: () => dispatch(getProfileRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
