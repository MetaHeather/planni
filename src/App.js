import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import userService from '../../utils/userService';
import tokenService from '../../utils/tokenService';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      ...this.getInitialState(),
      // Initialize user if there's a token, otherwise null
      user: userService.getUser()
    };
  }

  getInitialState() {
    return {

    };
  }

   /*--- Callback Methods ---*/
  handleLogout = () => {
    userService.logout();
    //will remove user object from state
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  /*--- Lifecycle Methods ---*/


  render() {
    return(
      <Switch>
        <Route exact path='/' render={()=>
          <HomePage 
            user={this.state.user}
            handleLogout={this.handleLogout}
          />
        }/>
        <Route exact path='/signup' render={({ history }) => 
          <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
          />
        }/>
        <Route exact path='/login' render={({ history }) => 
          <LoginPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
          />
        }/>
      </Switch>
    )
  }
}

export default App;
