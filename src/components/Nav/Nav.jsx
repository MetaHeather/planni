import React from 'react';
import styles from './Nav.module.css'

const NavBar = (props) => {
    //if a user is logged in show logout, else show login/signup
    let nav = props.user ?
      <div>
        <Link to='' onClick={props.handleLogout} className={styles.NavBar-link}>LOG OUT</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <span className={styles.NavBar-welcome}>WELCOME, {props.user.name}</span>
      </div>
      :
      <div>
        <Link to='/login' className={styles.NavBar-link}>LOG IN</Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/signup' className={styles.NavBar-link}>SIGN UP</Link>
      </div>;
  
    return (
      <div className={styles.NavBar}>
        {nav}
      </div>
    );
  };

export default Nav;