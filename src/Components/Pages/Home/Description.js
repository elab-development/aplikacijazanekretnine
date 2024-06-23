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
          <h2>Šta nudimo</h2>
          <h1>Nudimo Vam</h1>
          <p>
            Uvek smo spremni da pomognemo pružanjem najboljih usluga za Vas.
            Verujemo da dobro mesto za život, čini život lepšim.
          </p>
        </div>

        <TextPopup
          leftIcon={faCheckCircle}
          icon={faChevronDown}
          title={"Najbolje kamate na tržištu"}
          p={
            "Ekskluzivne kamatne stope koje su trenutno najbolje na tržištu, pružajući vam maksimalnu uštedu i profitabilnost. "
          }
        />
        <TextPopup
          leftIcon={faXmarkCircle}
          icon={faChevronDown}
          title={"Sprečite nestabilne cene"}
          p={
            " Sprečite nestabilne cene pravovremenim planiranjem i strategijskim pristupom."
          }
        />
        <TextPopup
          leftIcon={faChartSimple}
          icon={faChevronDown}
          title={"Najpovoljnije cene na tržištu"}
          p={
            " Najpovoljnije cene na tržištu uz naše specijalne ponude i usluge garantuju stabilnost i sigurnost vašeg ulaganja."
          }
        />
      </div>
    </div>
  );
};

export default Description;