import { useState } from "react";

const LocationMeet = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);

  const locationSearchContent = [
    {
      id: 1,
      name: "London",
      address: "Greater London, United Kingdom",
    },
    {
      id: 2,
      name: "New York",
      address: "New York State, United States",
    },
    {
      id: 3,
      name: "Paris",
      address: "France",
    },
    {
      id: 4,
      name: "Madrid",
      address: "Spain",
    },
    {
      id: 5,
      name: "Santorini",
      address: "Greece",
    },
  ];

  const handleOptionClick = (item) => {
    setSearchValue(item.name);
    setSelectedItem(item);
  };

  return (
    <>
      <div className="searchMenu-loc px-30 lg:py-20 lg:px-0 js-form-dd js-liverSearch">
        <div
          data-bs-toggle="dropdown"
          data-bs-auto-close="true"
          data-bs-offset="0,22"
        >
          <span className="badge rounded-pill location-badge" >
                 Location*
                    </span>
         
          <div
            className="text-15 ls-2 lh-16 location-input"
           
          >
            <div className="d-flex items-center">
              <i
                className="icon-location text-16"
                style={{ color: "#4c5e4c" }}
              />
              <input
                autoComplete="off"
                type="search"
                placeholder="Where are you going?"
                className="js-search js-dd-focus"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* End location Field */}

        <div className="shadow-2 dropdown-menu min-width-300">
          <div className="bg-white px-10 py-20 sm:px-0 sm:py-15 rounded-4">
            <ul className="y-gap-5 js-results">
              {locationSearchContent.map((item) => (
                <li
                  className={`-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1 ${
                    selectedItem && selectedItem.id === item.id ? "active" : ""
                  }`}
                  key={item.id}
                  role="button"
                  onClick={() => handleOptionClick(item)}
                >
                  <div className="d-flex">
                    <div className="icon-location-2 text-light-1 text-20 pt-4" />
                    <div className="ml-10">
                      <div className="text-15 lh-12 fw-500 js-search-option-target">
                        {item.name}
                      </div>
                      <div className="text-14 lh-12 text-light-1 mt-5">
                        {item.address}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationMeet;
