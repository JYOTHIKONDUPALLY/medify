import React from "react";
import Header from "../Header/Header";
import styles from "./HeroSection.module.css";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import star from "../../images/Star 2.png";
import shade from "../../images/shade2.png";
import arrow from "../../images/Vector 1.png";
import rebbon from "../../images/img1.png";
import iphoneFront from "../../images/iphoneFont.png";
import imphoneback from "../../images/iphoneBack.png";
import circle from "../../images/background.png";
const HeroSection = () => {
  return (
    <din id="home">
      <Header />
      <div className={styles.HeroSection}>
        <div className={styles.left}>
          <img
            className={styles.shade}
            src={shade}
            width="350px"
            height="250px"
            alt="shade"
          />
          <h1>Make The Best Financial Decisions</h1>
          <p>
            Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
          </p>
          <div className={styles.navSection}>
            <button className={styles.btn}>
              Get Started <img src={arrow} alt="arrow" />
            </button>
            <button className={styles.watchbtn}>
              <PlayCircleOutlineIcon /> Watch Video
            </button>
          </div>

          <img src={rebbon} alt="rebbon" />
        </div>
        <div className={styles.right}>
          <img src={iphoneFront} className={styles.img1} alt="iphone" />
          <img src={imphoneback} className={styles.img2} alt="iphone" />
          <img src={iphoneFront} className={styles.img3} alt="iphone" />
          <img src={circle} className={styles.img4} alt="circle" />
          <img src={shade} alt="shade" className={styles.img5} />
        </div>
      </div>
    </din>
  );
};

export default HeroSection;
