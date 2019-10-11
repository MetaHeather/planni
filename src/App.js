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
import AddAssignmentPage from './pages/AddAssignmentPage/AddAssignmentPage'
import UpdateAssignmentPage from './pages/UpdateAssignmentPage/UpdateAssignmentPage'


class App extends Component {
  constructor() {
    super();
    this.state = {
      assignments: null,
      // Initialize user if there's a token, otherwise null
      user: userService.getUser()
    };
  }

   /*--- Handler Methods ---*/
  handleCreateAssignment = async newAssignmentData => {
    //creates new assignment from form on create page
    const newAssignment = await assignmentService.createAssignment(newAssignmentData);
    this.setState(state => ({
      //replaces state with new array containing existing assignments and adding new one
      assignments: [...state.assignments, newAssignment]
      //call back function as 2nd argument, redirects to home page
    }), () => this.props.history.push('/'));
  }

  handleUpdateAssignment = async newAssignmentData => {
    //creates new assignment from form on update page
    const updatedAssignment = await assignmentService.updateAssignment(newAssignmentData);
    this.setState(state => ({
      //replaces state with new array replacing updated assignment with new data
      assignments: state.assignments.map(a => a._id === updatedAssignment._id ? updatedAssignment : a)
      //call back function as 2nd argument, redirects to home page
    }), () => this.props.history.push('/'));
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
        <Route exact path='/assignment/create' render={() =>
          <AddAssignmentPage 
            user={this.state.user}
            handleCreateAssignment={this.handleCreateAssignment}
          />
        }/>
        <Route exact path='/assignment/:id/edit' render={({ history }) => 
          <UpdateAssignmentPage
            handleUpdateAssignment={this.handleUpdateAssignment}
            user={this.state.user}
            history={history}
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
