import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav';

class App extends Component {
  render() {
    return(
      <Switch>
        <Route exact path='/' render={()=>
          <Nav />
        }/>
      </Switch>
    )
  }
}

export default App;
