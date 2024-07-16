import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./Property.module.css";

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
      <div className={styles.titlePriceBox}>
        <h2>{item.title}</h2>
        <p>{item.price} $</p>
      </div>
    </div>
  );
};

export default Property;