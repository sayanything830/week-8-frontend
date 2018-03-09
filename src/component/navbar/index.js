import React from 'react';
import {Link} from 'react-router-dom';
import {renderIf} from '../../lib/utils';
import {tokenDelete} from '../../action/auth-actions';
import Avatar from '../avatar';

export default class Navbar extends React.Component {

  render() {
    return (
      <header>
        <Avatar/>
        <nav>
          <ul>
            {renderIf(!this.props.token,
              <React.Fragment>
                <li><Link to="/welcome/signup">Signup</Link></li>
                <li><Link to="/welcome/signin">Signin</Link></li>
              </React.Fragment>
            )}
            {renderIf(this.props.token,
              <React.Fragment>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/settings">Settings</Link></li>
                <li><Link to="/welcome/signup">Signup</Link></li>
                <li><Link to="/welcome/signin">Signin</Link></li>
              </React.Fragment>
            )}
          </ul>
        </nav>
      </header>
    );
  }
}

let mapStateToProps = state => ({});
let mapDispatchToProps = dispatch => ({
  tokenDelete: () => dispatch(tokenDelete),
});
