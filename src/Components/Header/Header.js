import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import logo from "../../images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 660);

  const handleToggleButton = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 660);
      if (window.innerWidth > 660) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.toggleButton} onClick={handleToggleButton}>
        <MenuIcon />
      </div>
      <div className={styles.logo}>
        <img src={logo} alt="logo" width="100%" height="100%" />
        <div className={styles.nav}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#aboutus">About Us</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
          </ul>
        </div>
        {isOpen && isMobile && (
          <div className={styles.mobilenav}>
            <button onClick={handleClose} className={styles.closeButton}>
              <CloseIcon />
            </button>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#aboutus">About Us</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
            </ul>
            <div className={styles.button}>
              <button>Download</button>
            </div>
          </div>
        )}
      </div>
      <div className={styles.button}>
        <button>Download</button>
      </div>
    </div>
  );
};

export default Header;
