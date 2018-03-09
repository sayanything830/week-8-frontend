import React from 'react';
import Dashboard from './dashboard';
import Landing from './landing';
import Navbar from './navbar';
import Settings from './settings';
import {Provider} from 'react-redux';
import createStore from '../lib/app-create-store';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

const store = createStore();

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if(localStorage.token)
      store.dispatch({type: 'TOKEN_SET', payload: localStorage.token});
  }


  render() {
    let {token} = store.getState();

    return (
      <main className="application">
        <Provider store={store}>
          <BrowserRouter>
            <React.Fragment>
              <Navbar token={token}/>
              <Route exact path="/welcome/:auth" component={Landing}/>
              <Route exact path="/settings" component={Settings}/>
              <Route exact path="/dashboard" component={() =>
                store.getState().token
                  ? <Dashboard token={token}/>
                  : <Redirect to="/welcome/signup"/>}
              />
            </React.Fragment>
          </BrowserRouter>
        </Provider>
      </main>
    );
  }
}
