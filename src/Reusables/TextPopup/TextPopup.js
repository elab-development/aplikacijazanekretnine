import React, { useState } from "react";
import styles from "./TextPopup.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TextPopup = ({ title, icon, leftIcon, p }) => {
  const [popup, setPopup] = useState(false);

  const togglePopup = () => {
    if (!popup) {
      setPopup(true);
    } else {
      setPopup(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.iconTitlecontainer}>
        <div>
          <FontAwesomeIcon className={styles.icon} icon={leftIcon} />
        </div>
        <h3>{title}</h3>
        <div onClick={togglePopup}>
          <FontAwesomeIcon className={styles.icon} icon={icon} />
        </div>
      </div>
      {popup ? <p>{p}</p> : ""}
    </div>
  );
};

export default TextPopup;