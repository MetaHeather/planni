import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import assignmentService from './utils/assignmentService'
import userService from './utils/userService';
import tokenService from './utils/tokenService';
import SignupPage from './pages/SignupPage/SignupPage';
import LoginPage from './pages/LoginPage/LoginPage';
import HomePage from './pages/HomePage/HomePage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      assignments: null,
      // Initialize user if there's a token, otherwise null
      user: userService.getUser()
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
  async componentDidMount() {
    //get all assignments using assignment service function
    const assignments = await assignmentService.getAllAssignments();
    //set assignment property in state to 
    this.setState({assignments})
  }


  render() {
    return(
      <Switch>
        <Route exact path='/' render={()=>
          <HomePage 
            user={this.state.user}
            handleLogout={this.handleLogout}
            assignments={this.state.assignments}
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
