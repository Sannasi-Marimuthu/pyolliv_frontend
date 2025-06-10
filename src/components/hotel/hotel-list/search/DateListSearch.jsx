import React, { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";

const DateListSearch = () => {
  const [dates, setDates] = useState([
    new DateObject().setDay(15),
    new DateObject().setDay(14).add(1, "month"),
  ]);

  return (
    <div className="text-15 text-light-1 ls-2 lh-16 custom_dual_datepicker list-date"  >

       <i
                className="icon-calendar text-16 mr-5"
                style={{ color: "#4c5e4c" }}
              />
      <DatePicker
        inputClass="custom_input-picker"
        containerClassName="custom_container-picker"
        value={dates}
        onChange={setDates}
        numberOfMonths={2}
        offsetY={10}
        range
        rangeHover
        format="MMMM DD"
      />
    </div>
  );
};

export default DateListSearch;
