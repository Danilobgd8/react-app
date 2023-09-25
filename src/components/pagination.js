import React, { useContext } from "react";
import { DataDispatchContext } from "./fetchData";

function Pagination() {
  const { state, dispatch } = useContext(DataDispatchContext);

  const { currentPage, itemsPerPage, data } = state;

  const paginate = (pageNumber) => {
    dispatch({ type: "SET_CURRENT_PAGE", payload: pageNumber });
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
      >
        Previous Page
      </button>
      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={data.length < itemsPerPage}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
      >
        Next Page
      </button>
    </div>
  );
}

export default Pagination;
