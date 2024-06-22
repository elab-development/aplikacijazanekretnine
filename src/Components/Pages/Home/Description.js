import React from "react";
import styles from "./Description.module.css";
import valueImg from "../../../Images/HomeIMGS/value.png";
import FramedImage from "../../../Reusables/FramedImage/FramedImage";
import TextPopup from "../../../Reusables/TextPopup/TextPopup";
import {
  faChartSimple,
  faCheckCircle,
  faChevronDown,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";

const Description = () => {
  return (
    <div className={styles.container}>
      <FramedImage img={valueImg} />
      <div className={styles.boxR}>
        <div>
          <h2>Our Value</h2>
          <h1>Value We Give to You</h1>
          <p>
            We always ready to help by providijng the best services for you. We
            beleive a good blace to live can make your life better
          </p>
        </div>

        <TextPopup
          leftIcon={faCheckCircle}
          icon={faChevronDown}
          title={"Best interest rates on the market"}
          p={
            "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim. "
          }
        />
        <TextPopup
          leftIcon={faXmarkCircle}
          icon={faChevronDown}
          title={"Prevent unstable prices"}
          p={
            " Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim."
          }
        />
        <TextPopup
          leftIcon={faChartSimple}
          icon={faChevronDown}
          title={"Best price on the market"}
          p={
            " Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim."
          }
        />
      </div>
    </div>
  );
};

export default Description;