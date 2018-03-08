import React from 'react';
import {renderIf} from '../../../lib/utils';
import {Redirect} from 'react-router-dom';

export default class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      username: '',
      email: '',
      password: '',
      usernameError: null,
      emailError: null,
      passwordError: null,
      error: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let {name, value} = e.target;
    this.setState({
      [name]: value.trim(),
      usernameError: name === 'username' && !value.trim() ? 'Username required' : null,
      emailError: name === 'email' && !value.trim() ? 'Email required' : null,
      passwordError: name === 'password' && !value.trim() ? 'Password required' : null,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let {username, email, password} = this.state;
    this.props.onComplete({ username, email, password })
      .then(action => {
        this.setState({ username: '', email: '', password: '' });
        if(!action.payload) return;
        localStorage.token = action.payload;
        return this.setState({token: true});
      })
      .catch(error => this.setState({error}));
  }

  render() {
    return (
      <div className="auth-form">
        {this.state.token ? <Redirect to='/dashboard'/> : undefined}
        <form
          className="auth-form"
          onSubmit={this.handleSubmit}
          noValidate>
          <fieldset>
            <input
              type="text"
              name="username"
              placeholder="username"
              pattern=""
              value={this.state.username}
              onChange={this.handleChange}/>
          </fieldset>
          {renderIf(this.state.usernameError, <span className="tooltip">{this.state.usernameError}</span>)}

          {renderIf(this.props.auth === 'signup',
            <fieldset>
              <input
                type="email"
                name="email"
                placeholder="email"
                value={this.state.email}
                onChange={this.handleChange}/>
            </fieldset>
          )}
          <fieldset>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}/>
          </fieldset>

          <button type="submit">{this.props.auth}</button>
        </form>

      </div>
    );
  }
}
