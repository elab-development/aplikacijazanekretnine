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
          <p>Naša vizija je da ljudima pronađemo mesto za život iz snova</p>
        </div>
        <div className={styles.boxR}>
          <h1>Informacije</h1>
          <p>Resavska 98, Palilua 11000</p>
          <div className={styles.linkBox}>
          <Link style={{ textDecoration: "none" }} to={"/"}>
              <h3>Početna</h3>
            </Link>
            <Link style={{ textDecoration: "none" }} to={"/properties"}>
              <h3>Nekretnine</h3>
            </Link>
            <Link style={{ textDecoration: "none" }} to={"/favorites"}>
              <h3>Omiljene</h3>
            </Link>
            <Link style={{ textDecoration: "none" }} to={"/contact"}>
              <h3>Kontakt</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;