import React from "react";
import styles from "./Footer.module.css";
import logo from "../../Images/FooterIMGS/logo2.png";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.boxL}>
          <img className={styles.logo} src={logo} alt=""></img>
          <p>
            Our vision is to make all people the best place to live for them.
          </p>
        </div>
        <div className={styles.boxR}>
          <h1>Information</h1>
          <p>145 New York, FL 5467, USA</p>
          <div className={styles.linkBox}>
            <h3>Home</h3>
            <h3>Properties</h3>
            <h3>Contact</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;