import React from "react";
import styles from "./Header.module.css";
import heroImg from "../../../Images/HomeIMGS/hero-image.png";
import FramedImage from "../../../Reusables/FramedImage/FramedImage";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.boxL}>
        <div>
          <h1>Otkrijte </h1>
          <h1>Pravo Mesto </h1>
          <h1>Za Vas</h1>
        </div>
        <p>
          Pronadjite različite apartmane koje Vam odgovaraju. Zaboravite sve
          poteškoće u pronalaženju stana za Vas.
        </p>
        <div className={styles.numberBox}>
          <div className={styles.numberIconPBox}>
            <p style={{ color: "white", fontSize: "35px" }}>
              9000{" "}
              <span style={{ color: "orange", fontWeight: "100", margin: "0" }}>
                +
              </span>
            </p>
            <p>Proizvoda</p>
          </div>
          <div className={styles.numberIconPBox}>
            <p style={{ color: "white", fontSize: "35px" }}>
              2000{" "}
              <span style={{ color: "orange", fontWeight: "100", margin: "0" }}>
                +
              </span>
            </p>
            <p>Zadovoljnih Mušterija</p>
          </div>
          <div className={styles.numberIconPBox}>
            <p style={{ color: "white", fontSize: "35px" }}>
              28{" "}
              <span style={{ color: "orange", fontWeight: "100", margin: "0" }}>
                +
              </span>
            </p>
            <p>Dodeljenih Nagrada</p>
          </div>
        </div>
      </div>
      <FramedImage img={heroImg} />
    </div>
  );
};

export default Header;