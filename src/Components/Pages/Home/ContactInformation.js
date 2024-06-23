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
          <h2>Naš Kontakt</h2>
          <h1>Lako nas je kontaktirati</h1>
          Uvek smo spremni da vam pomognemo pružanjem najboljih usluga za vas.
          Verujemo da dobro mesto za život može unaprediti vaš život.
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