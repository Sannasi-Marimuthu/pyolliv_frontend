const SearchBox = () => {
  const handleSearch = (event) => {
    event.preventDefault();
    // Your search logic here
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="sidebar-search single-field relative d-flex items-center mt-3">
        <input
          className="pl-30 border-light text-dark-1  rounded-5"
          type="email"
          placeholder="Search for locality & Hotel name"
          required
          style={{fontSize:"12px", padding:"0px"}}
        />
        <button type="submit" className="absolute d-flex items-center h-full">
          <i className="icon-search text-14 px-10 text-dark-1" />
        </button>
      </div>

     
    </form>
  );
};

export default SearchBox;
