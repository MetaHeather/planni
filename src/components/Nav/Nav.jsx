import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css'

const Nav = (props) => {
    //if a user is logged in show logout, else show login/signup
    let nav = props.user ?
      <div>
        <Link to='' onClick={props.handleLogout} className={styles.link}>LOG OUT</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <span className={styles.welcome}>WELCOME, {props.user.name}</span>
      </div>
      :
      <div>
        <Link to='/login' className={styles.link}>LOG IN</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/signup' className={styles.link}>SIGN UP</Link>
      </div>;
      
  
    return (
      <div className={styles.NavBar}>
        {nav}
      </div>
    );
  };

export default Nav;