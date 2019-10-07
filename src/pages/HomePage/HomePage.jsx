import React from 'react';
import Nav from '../../components/Nav/Nav';
import styles from './HomePage.module.css';

const HomePage = (props) => {
  return (
    <div>
      <Nav
        user={props.user}
        handleLogout={props.handleLogout}
      />
    </div>
  );

};

export default HomePage;