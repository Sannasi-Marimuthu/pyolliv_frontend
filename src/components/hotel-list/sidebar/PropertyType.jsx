const PropertyType = () => {
  const checkboxes = [
    { label: "Hotel", count: 23 },
    { label: "Apartment", count: 23 },
    { label: "Guest House ", count: 21 },
    { label: "Homestay", count: 28 },
    { label: "Villa", count: 29 },
  ];

  return (
    <>
      {checkboxes.map((checkbox, index) => (
        <div className="row y-gap-10 items-center justify-between" key={index}>
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input type="checkbox" name="name" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-14 ml-10">{checkbox.label}</div>
            </div>
          </div>
          {/* End col-auto */}
          <div className="col-auto">
            <div className="text-14 text-light-1">{"("} {checkbox.count}{")"} </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PropertyType;
