import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Property.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faDoorOpen, faShower } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { addToBookings, removeFromBookings } from "../../Features/userSlice";
const Property = ({ setAuthModule }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.user.bookings);
  const user = useSelector((state) => state.user.user);
  const { item } = location.state || {};
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const today = new Date();

  
  if (!item) {
    return <div>Loading...</div>;
  }
  const isBooked = bookings.some((bookingItem) => bookingItem.id === item.id);


  const handleRemoveBooking = () => {
    dispatch(removeFromBookings(item));
    setEndDate(false);
    setStartDate(false);
    navigate("/bookings");
  };
  const handleBookingClick = () => {
    if (user) {
      setShowDatePicker(true);
    } else {
      setAuthModule(true);
    }
  }
  const handleDateSelection = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleModalClose = () => {
    setShowDatePicker(false);
    setStartDate(null); // Reset selected dates when closing the modal
    setEndDate(null);
  };
  return (
    <div className={styles.container}>
      <h1>Property Details</h1>
      <img src={item.img} alt="Property" />
      <div className={styles.lBox}>
        <div className={styles.titlePriceBox}>
          <h2>{item.title}</h2>
          <span style={{ color: "#2c4dcd" }}>{item.price} $</span>
        </div>
        <div className={styles.roomsBox}>
          <div className={styles.iconTextBox}>
            <FontAwesomeIcon className={styles.icon} icon={faShower} />
            <h6>{item.bathroom} Kupatilo/a</h6>
          </div>

          <div className={styles.iconTextBox}>
            <FontAwesomeIcon className={styles.icon} icon={faCar} />
            <h6>Parking</h6>
          </div>

          <div className={styles.iconTextBox}>
            <FontAwesomeIcon className={styles.icon} icon={faDoorOpen} />
            <h6>{item.bathroom} Sobe/a</h6>
          </div>
        </div>
        <p>{item.description}</p>
        <button onClick={handleBookingClick}>Rezervisi</button>
        {showDatePicker && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modalContent}>
            <DatePicker
              selected={startDate}
              onChange={handleDateSelection}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              inline
            />
            <div className={styles.btnBox}>
              <button className={styles.closeBtn} onClick={handleModalClose}>
                Close
              </button>
              <button className={styles.closeBtn}>Done</button>
            </div>
          </div>
        </div>
      )}
        <div className={styles.roomsBox}>
          <div className={styles.iconTextBox}>
            <FontAwesomeIcon className={styles.icon} icon={faShower} />
            <h6>{item.bathroom} Kupatilo/a</h6>
          </div>

          <div className={styles.iconTextBox}>
            <FontAwesomeIcon className={styles.icon} icon={faCar} />
            <h6>Parking</h6>
          </div>

          <div className={styles.iconTextBox}>
            <FontAwesomeIcon className={styles.icon} icon={faDoorOpen} />
            <h6>{item.bathroom} Sobe/a</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;