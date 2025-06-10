const ChainsFilter = () => {
  const filters = [
    { label: "Fab hotels", count: 44 },
    { label: "Treebo hotels ", count: 77 },
    { label: "Clarks lnn ", count: 9},
    { label: "Holiday lnn", count: 9 },
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
            <div className="text-14 text-light-1"> {"("} {filter.count} {")"}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ChainsFilter;
