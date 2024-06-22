import React from "react";
import styles from "./Contact.module.css";
import Form from "./Form";
import Location from "./Location";
const Contact = () => {
  return (
    <div className={styles.container}>
      <Form />
      <Location />
    </div>
  );
};

export default Contact;