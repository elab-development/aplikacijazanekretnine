import React from "react";
import styles from "./ContactInformation.module.css";
import ContactImg from "../../../Images/HomeIMGS/contact.jpg";
import FramedImage from "../../../Reusables/FramedImage/FramedImage";
import ContactBox from "../../../Reusables/ContactBox/ContactBox";
import {
  faCommentDots,
  faMessage,
  faPhone,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

const ContactInformation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.boxL}>
        <div className={styles.titleBox}>
          <h2>Our Contacts</h2>
          <h1>Easy to contact us</h1>
          <p>
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better
          </p>
        </div>
        <div className={styles.contactContainer}>
          <ContactBox icon={faPhone} title={"Call"} buttonTitle={"Call now"} />
          <ContactBox
            icon={faCommentDots}
            title={"Chat"}
            buttonTitle={"Chat now"}
          />
        </div>
        <div className={styles.contactContainer}>
          <ContactBox
            icon={faVideo}
            title={"Video Call"}
            buttonTitle={"Video call now"}
          />
          <ContactBox
            icon={faMessage}
            title={"Message"}
            buttonTitle={"Message now"}
          />
        </div>
      </div>
      <FramedImage img={ContactImg} />
    </div>
  );
};

export default ContactInformation;