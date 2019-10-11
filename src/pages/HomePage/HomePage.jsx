import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import Assignment from '../../components/Assignment/Assignment';
import ButtonLink from '../../components/ButtonLink/ButtonLink';
import styles from './HomePage.module.css';

const HomePage = (props) => {
  return (
    <>
      <Nav
        user={props.user}
        handleLogout={props.handleLogout}
      />
      <div className={styles.homePage}>
        <header>
        <h1 className={styles.assignmentsHeader}>Your Assignments</h1> 
        <ButtonLink className={styles.createLink} to='/assignment/create'>
          Create Assignment
        </ButtonLink>
        </header>
        
        
        {props.assignments ? 
            <Assignments 
              assignments={props.assignments}
            /> 
          : 
            "Loading..."
          }
      </div>  
    </>
  );
};

function Assignments(props) {  return(
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