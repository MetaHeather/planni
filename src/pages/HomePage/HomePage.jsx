import React from 'react';
import Nav from '../../components/Nav/Nav';
import Assignment from '../../components/Assignment/Assignment'
import styles from './HomePage.module.css';

const HomePage = (props) => {
  return (
    <div>
      <Nav
        user={props.user}
        handleLogout={props.handleLogout}
      />
      {props.assignments ? 
          <Assignments 
            assignments={props.assignments}
          /> 
        : 
          "Loading..."
        }
    </div>
  );
};

function Assignments(props) {
  return(
    props.assignments.map(assignment => {
      return(
        <Assignment 
          assignment={assignment}
        />
      )
    })    
  )
} 

export default HomePage;