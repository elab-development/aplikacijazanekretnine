import React from "react";
import styles from "./FramedImage.module.css";

const FramedImage = ({ img }) => {
  return (
    <div
      style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}
      className={styles.boxR}
    ></div>
  );
};

export default FramedImage;