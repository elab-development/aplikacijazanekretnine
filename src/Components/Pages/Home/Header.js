import React from "react";
import styles from "./Header.module.css";
import heroImg from "../../../Images/HomeIMGS/hero-image.png";
import FramedImage from "../../../Reusables/FramedImage/FramedImage";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.boxL}>
        <div>
          <h1>Discover </h1>
          <h1>Most Suitable </h1>
          <h1>Property</h1>
        </div>
        <p>
          Find a variety of properties that suit you very easilty Forget all
          difficulties in finding a residence for you
        </p>
        <div className={styles.numberBox}>
          <div className={styles.numberIconPBox}>
            <p style={{ color: "white", fontSize: "35px" }}>
              9000{" "}
              <span style={{ color: "orange", fontWeight: "100", margin: "0" }}>
                +
              </span>
            </p>
            <p>Premium Products</p>
          </div>
          <div className={styles.numberIconPBox}>
            <p style={{ color: "white", fontSize: "35px" }}>
              2000{" "}
              <span style={{ color: "orange", fontWeight: "100", margin: "0" }}>
                +
              </span>
            </p>
            <p>Happy Customers</p>
          </div>
          <div className={styles.numberIconPBox}>
            <p style={{ color: "white", fontSize: "35px" }}>
              28{" "}
              <span style={{ color: "orange", fontWeight: "100", margin: "0" }}>
                +
              </span>
            </p>
            <p>Awards Winnings</p>
          </div>
        </div>
      </div>
      <FramedImage img={heroImg} />
    </div>
  );
};

export default Header;