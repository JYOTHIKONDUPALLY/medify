import React from "react";
import styles from "./Header.module.css";
import logo from "../../images/logo.png";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.nav}>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Pricing</li>
          <li>Features</li>
        </ul>
      </div>
      <div className={styles.button}>
        <button>Download</button>
      </div>
    </div>
  );
};

export default Header;
