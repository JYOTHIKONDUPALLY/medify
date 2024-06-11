import React from "react";
import styles from "./featureSection.module.css";
import iphone from "../../images/iPhone-13-Pro-Front.png";
import circles from "../../images/background.png";
import shade from "../../images/shade2.png";
const featureSection = () => {
  return (
    <div className={styles.conatiner}>
      <div className={styles.features} id="features">
        <div className={styles.left}>
          <img src={iphone} className={styles.img1} alt="iphone" />
          <img src={circles} className={styles.img2} alt="circles" />
          <img src={shade} className={styles.img3} alt="shade" />
        </div>
        <div className={styles.right}>
          <p className={styles.subtitle}>FEATURES</p>
          <h1>Uifry Premium</h1>
          <ul>
            <li>
              <p className={styles.heading}>Budgeting Intervals</p>
              <p className={styles.body}>
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
            </li>
            <li>
              <p className={styles.heading}>Budgeting Intervals</p>
              <p className={styles.body}>
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
            </li>
            <li>
              <p className={styles.heading}>Budgeting Intervals</p>
              <p className={styles.body}>
                Cum et convallis risus placerat aliquam, nunc. Scelerisque
                aliquet faucibus tincidunt eu adipiscing sociis arcu lorem
                porttitor.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.advantage}>
        <div className={styles.left}>
          <p className={styles.subtitle}>ADVANTAGES</p>
          <h1>Why Choose Uifry?</h1>
          <ul>
            <li>
              <p className={styles.heading}>Clever Notifications</p>
              <p className={styles.body}>
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.
              </p>
            </li>
          </ul>
        </div>
        <div className={styles.right}></div>
      </div>
      <div className={styles.customization}>
        <div className={styles.left}></div>
        <div className={styles.right}>
          <ul>
            <li>
              <p className={styles.heading}>Fully Customizable</p>
              <p className={styles.body}>
                Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
                ultricies. In ultrices malesuada elit mauris etiam odio. Duis
                tristique lacus, et blandit viverra nisl velit. Sed mattis
                rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget
                ac dolor neque lorem sapien, suspendisse aliquam.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default featureSection;
