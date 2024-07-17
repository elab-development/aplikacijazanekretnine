import React from "react";
import styles from "./AuthModule.module.css";
import logo from "../../Images/NavIMGS/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const AuthModule = ({ setAuthModule }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.moduleBox}>
        <FontAwesomeIcon
          onClick={() => setAuthModule(false)}
          className={styles.icon}
          icon={faXmark}
        />
        <img src={logo} alt="logo"></img>
        <p>
          Za rezervaciju i dodavanje nekretnina u omiljene, prijavite se ili
          kreirajte nalog.
        </p>

        <button
          onClick={() => {
            navigate("/auth");
            setAuthModule(false);
          }}
        >
          Prijavite se
        </button>
      </div>
    </div>
  );
};

export default AuthModule;