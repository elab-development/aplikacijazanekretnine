import React from "react";
import styles from "./Card.module.css";

const Card = ({ item }) => {
  return (
    <div className={styles.container}>
      <img src={item.img} alt=""></img>
      <p>{item.price} $</p>
      <h3>{item.title}</h3>
    </div>
  );
};

export default Card;