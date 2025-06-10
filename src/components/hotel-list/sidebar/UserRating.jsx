const UserRating = () => {
  const filters = [
    { label: "3+", count: 234 },
    { label: "4+ ", count: 234 },
    { label: "3.5+ ", count: 234 },
    { label: "4.5+ ", count: 34 },
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

export default UserRating;
