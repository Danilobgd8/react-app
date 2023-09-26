import React, { useContext } from "react";
import { DataDispatchContext } from "./fetchData";

function Pagination() {
  const { state, dispatch } = useContext(DataDispatchContext);
  const { currentPage, data, itemsPerPage } = state;

  const numberOfPages = Math.ceil(data.length / itemsPerPage);
  const canGoNext = currentPage < numberOfPages;

  const nextPage = () => {
    dispatch({ type: "SET_CURRENT_PAGE", payload: currentPage + 1 });
  };

  const prevPage = () => {
    dispatch({ type: "SET_CURRENT_PAGE", payload: currentPage - 1 });
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={prevPage}
        disabled={currentPage === 1}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
      >
        Previous Page
      </button>
      <button
        onClick={nextPage}
        disabled={!canGoNext}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
      >
        Next Page
      </button>
    </div>
  );
}

export default Pagination;
