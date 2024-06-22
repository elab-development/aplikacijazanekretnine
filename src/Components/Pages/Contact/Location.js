import React from "react";
import styles from "./Location.module.css";

const Location = () => {
  return (
    <div>
      <div className={styles.locationTextBox}>
        <iframe
          title="location"
          className={styles.location}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2939.9207390215747!2d-74.29907600000001!3d42.53573840000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dc3264431e711d%3A0xe901d004a7549082!2zTlktMTQ1LCBOZXcgWW9yaywg0KHRmNC10LTQuNGa0LXQvdC1INCU0YDQttCw0LLQtQ!5e0!3m2!1ssr!2srs!4v1717674645817!5m2!1ssr!2srs"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;