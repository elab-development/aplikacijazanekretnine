import React from "react";
import styles from "./Nav.module.css";
import logoImg from "../../Images/NavIMGS/logo.png";

const Nav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoBox}>
        <img src={logoImg} alt="logo"></img>
      </div>
      <div className={styles.menuBox}>
        <h2>Home</h2>
        <h2>Properties</h2>
        <h2>Contact</h2>
        <button>Login</button>
      </div>
    </div>
  );
};

export default Nav;