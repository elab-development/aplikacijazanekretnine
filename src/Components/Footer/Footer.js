import React from "react";
import styles from "./Footer.module.css";
import logo from "../../Images/FooterIMGS/logo2.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.boxL}>
          <Link to={"/"}>
            <img className={styles.logo} src={logo} alt=""></img>
          </Link>
          <p>
            Our vision is to make all people the best place to live for them.
          </p>
        </div>
        <div className={styles.boxR}>
          <h1>Information</h1>
          <p>145 New York, FL 5467, USA</p>
          <div className={styles.linkBox}>
          <Link style={{ textDecoration: "none" }} to={"/"}>
              <h3>Home</h3>
            </Link>
            <Link style={{ textDecoration: "none" }} to={"/properties"}>
              <h3>Properties</h3>
            </Link>

            <Link style={{ textDecoration: "none" }} to={"/contact"}>
              <h3>Contact</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;