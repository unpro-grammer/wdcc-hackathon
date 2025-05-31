import { useState } from 'react';
import styles from '../styles/nav.module.css';
import React from 'react';
import logo from '../resources/images/navbarlogo.png';
import { Link } from 'react-router-dom';


function Navbar() {
  // adding the states 
  const [isActive, setIsActive] = useState(false);

  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }

  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar}`}>
          <img src={logo} className={styles.logoImg} alt="Space Bites Logo" />
          <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
            <li onClick={removeActive}>
              <Link to='/' className={styles.navLink}>Home</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/discover' className={styles.navLink}>Discover</Link>
            </li>
            <li onClick={removeActive}>
              <Link to='/cart' className={styles.navLink}>Cart</Link>
            </li>
          </ul>
        </nav>

      </header>
    </div>
  );
}

export default Navbar;