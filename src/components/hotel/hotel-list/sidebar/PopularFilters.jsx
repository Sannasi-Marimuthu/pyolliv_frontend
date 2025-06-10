const popularFilters = () => {
  const filters = [
    { label: "OllivStay", count: 58 },
    { label: "Book @ 0 ", count: 815 },
    { label: "Flexible Check In", count: 26 },
    { label: "Daily Steal Deal ", count: 66 },
    { label: "Early Bird Deal", count: 1 },
    { label: "Last Minute Deal", count: 1 },
    { label: "Couple Friendly", count: 85 },
    { label: "Free Cancellation ", count: 815 },
    { label: "Free Breakfast", count: 117 },
    { label: "Pay At Hotel ", count: 4 },
  ];

  return (
    <>
      {filters.map((filter, index) => (
        <div key={index} className="row y-gap-10 items-center justify-between">
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input type="checkbox" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-14 ml-10">{filter.label}</div>
            </div>
          </div>
          <div className="col-auto">
            <div className="text-14 text-light-1">{"("}{filter.count}{")"}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default popularFilters;
