import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import styles from './HomePage.module.css';

const GamePage = (props) => {
  return (
    <div>
      <NavBar
        user={props.user}
        handleLogout={props.handleLogout}
      />
    </div>
  );

};

export default HomePage;