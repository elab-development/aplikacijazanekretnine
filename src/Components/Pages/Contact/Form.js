import React, { useRef, useState } from "react";
import styles from "./Form.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Form = () => {
  const phoneNumber = "+381113988668";
  const form = useRef();
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const validEmailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;



  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h1> Postavite pitanje </h1>
        <form ref={form} className={styles.inputBox}>
          <input
            required
            type="text"
            placeholder="Email"
            name="user_email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          {emailError && <p className={styles.errorP}>Invalid Email</p>}

          <input
            required
            name="user_name"
            type="text"
            placeholder="Ime"
            className={styles.input}
            value={name}
            onChange={(e) => setName(capitalizeFirstLetter(e.target.value))}
          ></input>

          <input
            required
            name="user_lastname"
            type="text"
            placeholder="Prezime"
            className={styles.input}
            value={lastname}
            onChange={(e) => setLastname(capitalizeFirstLetter(e.target.value))}
          ></input>

          <textarea
            required
            name="message"
            placeholder="Poruka"
            className={styles.textarea}
            cols="60"
            rows="10"
            value={message}
            onChange={(e) => setMessage(capitalizeFirstLetter(e.target.value))}
          ></textarea>
          {messageError && <p className={styles.errorP}>Message is required</p>}
        </form>

        <div className={styles.btnBox}>
          <button value="Send">POSALJITE EMAIL</button>
        </div>
      </div>
      <div className={styles.iconInfoBox}>
        <div className={styles.iconBox}>
          <FontAwesomeIcon className={styles.icon} icon={faLocationDot} />
          <Link
            style={{ textDecoration: "none" }}
            to={
              "https://www.google.com/maps/place/Pro+Fizio+ambulanta+za+rehabilitaciju/@44.762536,20.484407,15z/data=!4m5!3m4!1s0x0:0x8bdc6653c0a24352!8m2!3d44.762536!4d20.484407"
            }
          >
            <p>Resavska 98, Palilula 11000</p>
          </Link>
        </div>
        <div className={styles.iconBox}>
          <FontAwesomeIcon className={styles.icon} icon={faPhone} />
          <Link style={{ textDecoration: "none" }} to={`tel:${phoneNumber}`}>
            <p>021 123 145 14</p>
          </Link>
        </div>
        <div className={styles.iconBox}>
          <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
          <Link
            style={{ textDecoration: "none" }}
            to={"mailto:office@profizio.rs"}
          >
            <p>office@homyz.rs</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Form;