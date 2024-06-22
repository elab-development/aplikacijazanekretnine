import React from "react";
import styles from "./Nav.module.css";
import logoImg from "../../Images/NavIMGS/logo.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
      <div
      className={`${styles.container} ${
        scrolling ? styles.containerScrolling : ""
      }`}
    >
      <div className={styles.logoBox}>
      <Link to={"/"}>
          <img src={logoImg} alt="logo"></img>
        </Link>
      </div>
      <div className={styles.menuBox}>
      <Link style={{ textDecoration: "none" }} to={"/"}>
          <h2>Home</h2>
        </Link>
        <Link style={{ textDecoration: "none" }} to={"/properties"}>
          <h2>Properties</h2>
        </Link>
        <Link style={{ textDecoration: "none" }} to={"/contact"}>
          <h2>Contact</h2>
        </Link>
          <Link to={"/auth"}>
            <button>Login</button>
          </Link>
      </div>
    </div>
  );
};

export default Nav;