import React from "react";
import styles from "./Favorites.module.css";
import { useSelector } from "react-redux";
import Card from "../../../Reusables/Card/Card";

const Favorites = () => {
  const favorites = useSelector((state) => state.user.favorites);

  return (
    <div className={styles.container}>
      <h2>Your Favorite Properties</h2>
      <div className={styles.cardsContainer}>
        {favorites.length > 0 ? (
          favorites.map((item) => <Card key={item.id} item={item} />)
        ) : (
          <p>You have no favorite properties.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;