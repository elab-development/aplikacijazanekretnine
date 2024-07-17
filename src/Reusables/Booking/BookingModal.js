import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingModal = ({ opened, setOpened }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        isClearable
      />
    </div>
  );
};

export default BookingModal;