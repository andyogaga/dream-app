import React from "react";
import { getDreams } from "../utils/helper";
import { LIMIT } from "../utils/constants";

const Pagination = ({ page, setPage }) => {
  return (
    <div className="pagination">
      <span>{`${(page - 1) * LIMIT + 1} - ${
        getDreams().length > page * LIMIT ? page * LIMIT : getDreams().length
      } of ${getDreams().length}`}</span>
      {page > 1 && <button onClick={() => setPage(page - 1)}>{"<"}</button>}
      <button>{page}</button>
      <button
        onClick={() => {
          if (getDreams(page + 1).length > 0) {
            setPage(page + 1);
          }
        }}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
