import React from "react";
import styles from "./GetStarted.module.css";
import { Link } from "react-router-dom";
const GetStarted = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Započnite sa Homyzom</h1>
        <p>
        Pretplatite se i pronađite vrlo atraktivne ponude cena kod nas.
        Pronađite svoj dom uskoro.
        </p>
        <Link to={"/contact"}>
          <button>Započnite</button>
        </Link>
      </div>
    </div>
  );
};

export default GetStarted;