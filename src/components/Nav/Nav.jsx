import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css'

const Nav = (props) => {
    //if a user is logged in show logout, else show login/signup
    let nav = props.user ?
      <>
        <span className={styles.welcome}>{props.user.name}'s Planni</span>
        <Link to='' onClick={props.handleLogout} className={styles.link}>Log Out</Link>
      </>
      :
      <>
        <Link to='/'>Planni</Link>
        <Link to='/login' className={styles.link}>Log In</Link>
        <Link to='/signup' className={styles.link}>Sign Up</Link>
      </>;
      
  
    return (
      <div className={styles.NavBar}>
        {nav}
      </div>
    );
  };

export default Nav;