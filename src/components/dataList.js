import React, { useContext } from "react";
import { DataDispatchContext } from "./fetchData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function DataList() {
  const { state, dispatch } = useContext(DataDispatchContext);
  const { data, smallData, currentPage, itemsPerPage } = state;

  const deleteItem = (id, dataType) => {
    let updatedData;
    if (dataType === "data") {
      updatedData = data.filter((item) => item.id !== id.toString());
      dispatch({ type: "SET_DATA", payload: updatedData });
    } else if (dataType === "smallData") {
      updatedData = smallData.filter((item) => item.id !== id.toString());
      dispatch({ type: "SET_SMALL_DATA", payload: updatedData });
    }
  };

  const numberOfPages = Math.ceil(data.length / itemsPerPage);
  const canGoNext = currentPage < numberOfPages;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const currentSmallItems = smallData.slice(
    0,
    itemsPerPage - currentItems.length
  );

  const nextPage = () => {
    dispatch({ type: "SET_CURRENT_PAGE", payload: currentPage + 1 });
  };

  const prevPage = () => {
    dispatch({ type: "SET_CURRENT_PAGE", payload: currentPage - 1 });
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        {currentItems.map((item) => (
          <div
            key={item.id}
            className={`p-4 rounded-md border border-blue-500 rounded-none transition-transform duration-300 ease-in-out transform hover:scale-165 hover:shadow-lg hover:-translate-y-2 hover:-translate-x-2 ${
              item.small ? "small-item" : ""
            }`}
            style={{ zIndex: 1 }}
          >
            <img
              src={item.image}
              alt={item.title}
              className={`mb-5 w-full h-60 object-cover rounded-none`}
              style={{ zIndex: -1 }}
            />
            <h2 className="mb-5 text-lg font-semibold">{item.title}</h2>
            <p className="mb-5 text-gray-600 font-bold">
              {item.description.substring(0, 80)}
            </p>
            <p className="mb-5 text-gray-600 ">{item.description}</p>
            <div className="flex items-center justify-between mb-0">
              <a href="/" className="text-blue-600 font-bold">
                {item.title} <FontAwesomeIcon icon={faArrowRightLong} />
              </a>
              <button
                onClick={() => deleteItem(item.id, "data")}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {currentSmallItems.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          {currentSmallItems.map((item) => (
            <div
              key={item.id}
              className={`p-4 rounded-md border border-blue-500 rounded-none transition-transform duration-300 ease-in-out transform hover:scale-165 hover:shadow-lg hover:-translate-y-2 hover:-translate-x-2 small-item`}
              style={{ zIndex: 1 }}
            >
              <div className="flex">
                <div className="w-1/2">
                  <p className="mb-5 text-lg font-semibold">{item.title}</p>
                  <p className="mb-5 text-gray-600 text-sm">
                    {item.description.substring(0, 50)}
                  </p>
                  <p className="mb-5 text-gray-600 text-sm">
                    {item.description.substring(0, 50)}
                  </p>
                  <a
                    href="/"
                    className="absolute bottom-5 left-0 mb-5 ml-5 text-blue-600 font-bold"
                  >
                    Link
                  </a>
                  <button
                    onClick={() => deleteItem(item.id, "smallData")}
                    className="absolute bottom-0 left-0 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-sm"
                  >
                    X
                  </button>
                </div>
                <div className="w-1/2 pr-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`mb-5 w-full h-60 object-cover rounded-none`}
                    style={{ zIndex: -1 }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

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
      <div className="text-center">
        <p>Footer text</p>
      </div>
    </div>
  );
}

export default DataList;
