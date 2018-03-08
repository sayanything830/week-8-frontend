import React from 'react';
import {connect} from 'react-redux';
import AuthForm from '../auth/auth-form';
import {signupRequest, signinRequest} from '../../action/auth-actions';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    // this.redirect = this.redirect.bind(this);
  }

  // redirect(path) {
  //   this.props.history.replace(path);
  // }

  render() {
    console.log('__LANDING_PROPS__', this.props);
    let {params} = this.props.match;
    let onComplete = params.auth === 'signin'
      ? this.props.signin
      : this.props.signup;

    return (
      <div className="landing-container">
        <h1>Welcome! Please {this.props.match.params.auth === 'signin' ? 'Signin' : 'Signup'}</h1>
        <AuthForm
          // redirect={this.redirect}
          // history={this.props.history}
          auth={params.auth}
          onComplete={onComplete}/>
      </div>
    );
  }
}

let mapStateToProps = () => ({

});
let mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signupRequest(user)),
  signin: user => dispatch(signinRequest(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
