import React, { useState } from "react";
const counters = [
  { name: "Adults", defaultValue: 2 },
  { name: "Children", defaultValue: 1 },
  { name: "Rooms", defaultValue: 1 },
];

const Counter = ({ name, defaultValue, onCounterChange }) => {
  const [count, setCount] = useState(defaultValue);
  const incrementCount = () => {
    setCount(count + 1);
    onCounterChange(name, count + 1);
  };
  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
      onCounterChange(name, count - 1);
    }
  };

  return (
    <>
      <div className="row y-gap-10 justify-between items-center">
        <div className="col-auto">
          <div className="text-15 lh-12 fw-500">{name}</div>
          {name === "Children" && (
            <div className="text-14 lh-12 text-light-1 mt-5">Ages 0 - 17</div>
          )}
        </div>
        {/* End .col-auto */}
        <div className="col-auto">
          <div className="d-flex items-center js-counter">
            <button
              className="button -outline-blue-1 text-blue-1 size-38 rounded-4 js-down"
              onClick={decrementCount}
            >
              <i className="icon-minus text-12" />
            </button>
            {/* decrement button */}
            <div className="flex-center size-20 ml-15 mr-15">
              <div className="text-15 js-count">{count}</div>
            </div>
            {/* counter text  */}
            <button
              className="button -outline-blue-1 text-blue-1 size-38 rounded-4 js-up"
              onClick={incrementCount}
            >
              <i className="icon-plus text-12" />
            </button>
            {/* increment button */}
          </div>
        </div>
        {/* End .col-auto */}
      </div>
      {/* End .row */}
      <div className="border-top-light mt-24 mb-24" />
    </>
  );
};

const GuestListSearch = () => {
  const [guestCounts, setGuestCounts] = useState({
    Adults: 2,
    Children: 1,
    Rooms: 1,
  });
  const handleCounterChange = (name, value) => {
    setGuestCounts((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <div className="searchMenu-guests px-20  lg:py-20 lg:px-0 js-form-dd  position-relative">
      <div
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
        aria-expanded="false"
        data-bs-offset="0,22"
      >
        <span className="badge rounded-pill" style={{ color:"#000", fontWeight:"450" }} >
                Guests & Romms*
                    </span>
        <div
          className="text-15 text-light-1 ls-2 lh-16 list-guest1"
        
        >
          <span className="js-count-adult">
            <img
              src="/img/general/adult.png"
              alt=""
              width={20}
            />{" "}
            {guestCounts.Adults}  adults {" "}
          </span>
         
          <span className="js-count-child">
            <img
              src="/img/general/child.png"
              alt=""
              width={15}
            />{" "}
            {guestCounts.Children}  childeren 
          </span>{" "}
        
          <span className="js-count-room">
            {" "}
            <img
              src="/img/general/room.png"
              alt=""
              width={20}
            />{" "}
            {guestCounts.Rooms}  room
          </span>{" "}
         
        </div>
      </div>
      {/* End guest */}

      <div className="shadow-2 dropdown-menu min-width-400">
        <div className="bg-white px-30 py-30 rounded-4 counter-box">
          {counters.map((counter) => (
            <Counter
              key={counter.name}
              name={counter.name}
              defaultValue={counter.defaultValue}
              onCounterChange={handleCounterChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default GuestListSearch;
