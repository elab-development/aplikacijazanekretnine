import React from "react";
import styles from "./GetStarted.module.css";

const GetStarted = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Get Started With Homyz</h1>
        <p>
          Subscribe and find super attractive price quotes from us. Find your
          residence soon
        </p>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default GetStarted;