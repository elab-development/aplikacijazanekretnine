import React from "react";
import styles from "./ContactBox.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContactBox = ({ icon, buttonTitle, title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.iconTitleBox}>
        <div className={styles.iconBox}>
          <FontAwesomeIcon className={styles.icon} icon={icon} />
        </div>
        <div className={styles.titleNumberBox}>
          <h3>{title}</h3>
          <p>021 123 145 14</p>
        </div>
      </div>
      <button>{buttonTitle}</button>
    </div>
  );
};

export default ContactBox;