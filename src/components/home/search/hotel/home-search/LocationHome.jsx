import React, { useState, useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

// Google API Key – for security, store in .env in production
const GOOGLE_API_KEY = "AIzaSyCmt0pZZUQmVayZvjHfVHdF_7pVZUKCAsg";

// Styled input
const StyledAutocompleteInput = styled("input")(({ theme }) => ({
  backgroundColor: "#fff",
  borderRadius: "4px",
  width: "100%",
  height: "32px",
  padding: "0 10px",
  fontSize: "0.8rem",
  boxSizing: "border-box",
  border: "1px solid #ccc",
  color: "#1a2a1a",
  "&:hover": {
    borderColor: "#4b5e4b",
  },
  "&:focus": {
    borderColor: "#4b5e4b",
    outline: "none",
    boxShadow: "0 0 0 1px #4b5e4b",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const LocationHome = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: GOOGLE_API_KEY,
      libraries: ["places"],
    });

    loader.load().then(() => {
      if (!inputRef.current) return;

      const autocomplete = new window.google.maps.places.Autocomplete(
        inputRef.current,
        {
          componentRestrictions: { country: "IN" },
          types: ["(cities)"], // You can change this to 'geocode' or 'establishment'
        }
      );

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (!place || !place.address_components) return;

        setInputValue(place.formatted_address);
        setSelectedItem(place);
      });
    });
  }, []);

  return (
    <div className="searchMenu-loc px-30 lg:py-20 lg:px-0">
      <span className="badge rounded-pill location-badge">Location*</span>

      <div className="text-15 ls-2 lh-16 location-input">
        <div className="d-flex items-center">
          <i className="icon-location text-16" style={{ color: "#4c5e4c" }} />
          <Box sx={{ flex: 1 }}>
            <StyledAutocompleteInput
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter a location"
              aria-label="Location autocomplete"
            />
          </Box>
        </div>
      </div>

     
    </div>
  );
};

export default LocationHome;