const Amenities = () => {
  const checkboxes = [
    { label: "AIRPORT RANSFERS", count: 66 },
    { label: "Balcony/Terrace", count: 54 },
    { label: "Bar", count: 67 },
    { label: "Barbeque", count: 77 },
    { label: "Beach", count: 66 },
    { label: "Bonfire", count: 65 },
    { label: "Business Centre", count: 87 },
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
            <div className="text-14 text-light-1"> {"("} {checkbox.count} {")"} </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Amenities;
