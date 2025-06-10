import React, { useState, useEffect } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
// import api from "../../../../../axios/axios"; // adjust based on your structure
import { Box, Typography } from "@mui/material";

const DateSearchHome = () => {
  const [dates, setDates] = useState([null, null]);
  const [searchData, setSearchData] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    checkInDay: "",
    checkOutDay: "",
    rooms: "",
    guests: "",
  });

  useEffect(() => {
    const storedData = sessionStorage.getItem("searchDetails");
    if (storedData) {
      try {
        const bookingDetails = JSON.parse(storedData);
        const checkInDate = bookingDetails.checkIn?.split(".").reverse().join("-");
        const checkOutDate = bookingDetails.checkOut?.split(".").reverse().join("-");

        setDates([
          checkInDate ? new DateObject(checkInDate) : null,
          checkOutDate ? new DateObject(checkOutDate) : null,
        ]);

        setSearchData((prev) => ({
          ...prev,
          ...bookingDetails,
        }));
      } catch (error) {
        console.error("Error parsing session data:", error);
      }
    }
  }, []);

  useEffect(() => {
    if (!dates[0] || !dates[1]) return;

    const checkInFormatted = dates[0].format("DD.MM.YYYY");
    const checkOutFormatted = dates[1].format("DD.MM.YYYY");
    const checkInDay = dates[0].format("dddd");
    const checkOutDay = dates[1].format("dddd");

    setSearchData((prev) => ({
      ...prev,
      checkIn: checkInFormatted,
      checkOut: checkOutFormatted,
      checkInDay,
      checkOutDay,
    }));
  }, [dates]);

  const fetchHotels = async () => {
    const { location, checkIn, checkOut } = searchData;

    if (!location || !checkIn || !checkOut) return;

    const Loc = location.split(",")[0].trim();
    const C3 = checkIn.split(".").reverse().join("-");
    const C4 = checkOut.split(".").reverse().join("-");

    try {
      const response = await api.getAll(
        `get?type=Hotelsearch&place=${Loc}&checkin=${C3}&checkout=${C4}`
      );
      setFiltereddetails(response.data);
      setOriginalFilteredDetails(response.data);
    } catch (err) {
      setError("Failed to fetch filtered hotels");
    }
  };

  return (
    <Box >
      {/* <Typography sx={{ fontSize: "0.8rem", fontWeight: 500, mb: 1 }}>
        Select Dates
      </Typography> */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "8px",
          backgroundColor: "#d9e1ee",
          maxWidth: "350px",
        }}
      >
        <i className="icon-calendar text-16" style={{ color: "#4c5e4c" }} />
        <DatePicker
          value={dates}
          onChange={setDates}
          numberOfMonths={1}
          range
          rangeHover
          format="MMMM DD"
          inputClass="custom_input-picker"
          containerClassName="custom_container-picker"
          placeholder="Select Your Date"
        />
      </Box>

      {/* Displaying formatted dates (optional) */}
      
    </Box>
  );
};

export default DateSearchHome;