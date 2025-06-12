import { useState } from "react";

const Pagination = () => {
  const totalPages = 25; // You can update this dynamically if needed
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const renderPage = (pageNumber, isActive = false) => {
    const className = `size-40 flex-center rounded-full cursor-pointer ${
      isActive ? "bg-dark-1 text-white" : ""
    }`;
    return (
      <div key={pageNumber} className="col-auto">
        <div className={className} onClick={() => handlePageClick(pageNumber)}>
          {pageNumber}
        </div>
      </div>
    );
  };

  const renderPages = () => {
    const pageNumbers = [];

    // Simple case: show only first 5 pages and currentPage
    const displayPages = 5;
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, startPage + displayPages - 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers.map((pageNumber) =>
      renderPage(pageNumber, pageNumber === currentPage)
    );
  };

  return (
    <div className="mt-30 pt-30">
      <div className="row x-gap-10 y-gap-20 justify-between md:justify-center">
        {/* Previous Button */}
        <div className="col-auto md:order-1">
          <button
            className="button -blue-1 size-40 rounded-full border-light"
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <i className="icon-chevron-left text-12" />
          </button>
        </div>

        {/* Page Numbers */}
        <div className="col-md-auto md:order-3">
          <div className="row x-gap-20 y-gap-20 items-center md:d-none">
            {renderPages()}
            {currentPage < totalPages - 2 && (
              <>
                <div className="col-auto">
                  <div className="size-40 flex-center rounded-full">...</div>
                </div>
                <div className="col-auto">
                  <div
                    className="size-40 flex-center rounded-full cursor-pointer"
                    onClick={() => handlePageClick(totalPages)}
                  >
                    {totalPages}
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="row x-gap-10 y-gap-20 justify-center items-center d-none md:d-flex">
            {renderPages()}
          </div>
        </div>

        {/* Next Button */}
        <div className="col-auto md:order-2">
          <button
            className="button -blue-1 size-40 rounded-full border-light"
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <i className="icon-chevron-right text-12" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
