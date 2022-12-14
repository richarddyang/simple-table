import { useState } from "react";

import "./Pagination.css";

const Pagination = ({
  page,
  limit,
  totalResults,
  handlePageChange,
  handleLimitChange,
}) => {
  ///////////////////////////STATE INFO///////////////////////////////////////////////
  const [hasMore, setHasMore] = useState(false);
  const numOfPages = Math.ceil(totalResults / limit);

  if (page < numOfPages) {
    if (!hasMore) {
      setHasMore(true);
    }
  } else {
    if (hasMore) {
      setHasMore(false);
    }
  }

  return (
    <div className="pagination_container">
      <div>
        Show
        <select value={limit} onChange={handleLimitChange}>
          {[10, 25, 50, 100].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <div>
        {(page - 1) * limit + 1}-
        {(page - 1) * limit + limit < totalResults
          ? (page - 1) * limit + limit
          : totalResults}{" "}
        of {totalResults}
      </div>
      <div className="pagination">
        <button
          disabled={page === 1}
          onClick={() => handlePageChange((prev) => Math.max(prev - 1, 0))}
        >
          {"<"}
        </button>
        <span className="font-bold">
          {page}/{numOfPages}
        </span>
        <button
          disabled={!hasMore}
          onClick={() => {
            if (hasMore) {
              handlePageChange((prev) => prev + 1);
            }
          }}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
