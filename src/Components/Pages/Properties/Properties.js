import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./Property.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faDoorOpen, faShower } from "@fortawesome/free-solid-svg-icons";
const Property = () => {
  const location = useLocation();
  const { item } = location.state || {};

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h1>Property Details</h1>
      <img src={item.img} alt="Property" />
      <div>
        <div className={styles.titlePriceBox}>
          <h2>{item.title}</h2>
          <p>{item.price} $</p>
        </div>
        <div className={styles.roomsBox}>
          <div className={styles.iconTextBox}>
            <FontAwesomeIcon className={styles.icon} icon={faShower} />
            <h6>{item.bathroom} Kupatilo/a</h6>
          </div>

          <div className={styles.iconTextBox}>
            <FontAwesomeIcon className={styles.icon} icon={faCar} />
            <h6>Parking</h6>
          </div>

          <div className={styles.iconTextBox}>
            <FontAwesomeIcon className={styles.icon} icon={faDoorOpen} />
            <h6>{item.bathroom} Sobe/a</h6>
          </div>
        </div>
        <div className={styles.roomsBox}>
          <div className={styles.iconTextBox}>
            <FontAwesomeIcon className={styles.icon} icon={faShower} />
            <h6>{item.bathroom} Kupatilo/a</h6>
          </div>

          <div className={styles.iconTextBox}>
            <FontAwesomeIcon className={styles.icon} icon={faCar} />
            <h6>Parking</h6>
          </div>

          <div className={styles.iconTextBox}>
            <FontAwesomeIcon className={styles.icon} icon={faDoorOpen} />
            <h6>{item.bathroom} Sobe/a</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;