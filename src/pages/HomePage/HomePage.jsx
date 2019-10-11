import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import Assignment from '../../components/Assignment/Assignment';
import ButtonLink from '../../components/ButtonLink/ButtonLink';
import styles from './HomePage.module.css';

const HomePage = (props) => {
  return (
    <div className={styles.layout}>
      <Nav
        user={props.user}
        handleLogout={props.handleLogout}
      />
      <div className={styles.homePage}>
        {props.user ? 
        <>
        <header>
        <h1 className={styles.header}>Your Assignments</h1> 
        <ButtonLink className={styles.createLink} to='/assignment/create'>
          Create Assignment
        </ButtonLink>
        </header>

        {props.assignments ? 
            <Assignments 
              handleDeleteAssignment={props.handleDeleteAssignment}
              assignments={props.assignments}
            /> 
          : 
            "Loading..."
          }
      </>
      :
      <>
      <p className={styles.header}>Welcome to Planni!</p>
      <p className={styles.header}>Log in or create an account to start keeping track of your assignments today!</p>
      </>
      }    
      </div>  
    </div>
  );
};

function Assignments(props) {
  return(
    <div className={styles.assignmentGrid}>
      {props.assignments.map(assignment => {
        return(
            <Assignment 
              handleDeleteAssignment={props.handleDeleteAssignment}
              assignment={assignment}
            />
        )
      })}  
   </div>  
  )
} 

export default HomePage;