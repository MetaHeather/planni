import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css'
import ButtonLink from '../../components/ButtonLink/ButtonLink'

const Nav = (props) => {
    //if a user is logged in show logout, else show login/signup
    let nav = props.user ?
      <div className={styles.NavBar}>
        <span className={styles.welcomeUser}>{props.user.name}'s Planni</span>
        <ButtonLink to='' onClick={props.handleLogout} className={styles.logout}>Log Out</ButtonLink>
      </div>
      :
      <div className={styles.NavBar}>
        <Link to='/'>Planni</Link>
        <Link to='/login' className={styles.link}>Log In</Link>
        <Link to='/signup' className={styles.link}>Sign Up</Link>
      </div>;
      

    return (
      <>
        {nav}
      </>
    );
  };

export default Nav;