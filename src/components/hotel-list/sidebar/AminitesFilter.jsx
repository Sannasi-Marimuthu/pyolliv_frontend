const AmenitiesFilter = () => {
  // const amenities = [
  //   { name: "Garden View ", count: 25 },
  //   { name: "City View", count: 25 },
  // ];
   const [roomViews, setSetViews] = useState([]);
// const [roomtypes, setRoomtypes] = useState(null);
   useEffect(() => {
    // Replace with your actual backend API URL
    axios.get("http://localhost:4500")
      .then((response) => {
        setSetViews(response.data); // assuming response is like [{name: "", count: 10}, ...]
      })
      .catch((error) => {
        console.error("Error fetching amenities:", error);
      });
  }, []);

  return (
    <>
      {roomViews.map((room, index) => (
        <div className="row y-gap-10 items-center justify-between" key={index}>
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input type="checkbox" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-14 ml-10">{room.roomView}</div>
            </div>
          </div>
          {/* <div className="col-auto">
            <div className="text-14 text-light-1">{"("} {amenity.count} {")"}</div>
          </div> */}
        </div>
      ))}
    </>
  );
};

export default AmenitiesFilter;
