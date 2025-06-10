const HouseRules = () => {
  const amenities = [
    { name: "Alcohol Allowed", count: 225 },
    { name: "Pets Allowed", count: 23 },
    { name: "Smoking Allowed", count: 23 },
    { name: "Unmarried Couple Allowed", count: 23 },
  ];

  return (
    <>
      {amenities.map((amenity, index) => (
        <div className="row y-gap-10 items-center justify-between" key={index}>
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input type="checkbox" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-14 ml-10">{amenity.name}</div>
            </div>
          </div>
          <div className="col-auto">
            <div className="text-14 text-light-1"> {"("} {amenity.count} {")"} </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HouseRules;
