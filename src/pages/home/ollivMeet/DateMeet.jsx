import React, { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";

const DateMeet = () => {
  const [dates, setDates] = useState([
    new DateObject().setDay(15),
    new DateObject().setDay(14).add(1, "month"),
  ]);

  return (
    <div className="text-15 text-light-1 ls-2 lh-16 custom_dual_datepicker list-date date-input"  >

       <i
                className="icon-calendar text-16 mr-5"
                style={{ color: "#4c5e4c" }}
              />
      <DatePicker
        inputClass="custom_input-picker"
        containerClassName="custom_container-picker"
        value={dates}
        onChange={setDates}
        numberOfMonths={1}
        offsetY={10}
        range
        format="MMMM DD"
      />
    </div>
  );
};

export default DateMeet;
