import React, { useContext, useState } from "react";
import { DataDispatchContext } from "./fetchData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import DarkTheme from "./darkTheme";

function DataList() {
  const { state, dispatch } = useContext(DataDispatchContext);
  const { data, smallData, currentPage, itemsPerPage } = state;
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  //za paginaciju
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const currentSmallItems = smallData.slice(
    0,
    itemsPerPage - currentItems.length
  );

  return (
    <div className={` ${isDarkMode ? "dark-mode" : ""}`}>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        {currentItems.map((item) => (
          <div
            key={item.id}
            className="p-3 dark-menu bg-white border border-blue-500 transition-transform duration-300 ease-in-out transform hover:scale-165 hover:shadow-lg hover:-translate-y-2 hover:-translate-x-2"
            style={{
              width: "540px",
              height: "434px",
              border: "1px solid #348ABF",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="mb-2 w-full h-60 object-cover rounded-none"
              style={{ width: "520px", height: "245px" }}
            />
            <h2
              style={{
                color: "#042440",
                fontFamily: "Inter",
                fontSize: "10px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                textTransform: "uppercase",
                marginBottom: "15px",
              }}
            >
              {item.title}
            </h2>
            <p
              style={{
                color: "#042440",
                fontFamily: "Playfair Display",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
                marginBottom: "10px",
              }}
            >
              {item.description.substring(0, 80)}
            </p>
            <p
              style={{
                color: "#042440",
                fontFamily: "Inter",
                fontSize: "14px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                marginBottom: "7px",
              }}
            >
              {item.description}
            </p>
            <a
              href="/"
              style={{
                color: "#348ABF ",
                fontFamily: "Inter",
                fontSize: "10px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "uppercase",
              }}
            >
              {item.title} <FontAwesomeIcon icon={faArrowRightLong} />
            </a>

            <button
              onClick={() => deleteItem(item.id, "data")}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        {currentSmallItems.map((item) => (
          <div
            key={item.id}
            className={`p-3 ${
              isDarkMode ? "dark-mode dark-menu" : ""
            } bg-white border border-blue-500 transition-transform duration-300 ease-in-out transform hover:scale-165 hover:shadow-lg hover:-translate-y-2 hover:-translate-x-2`}
            style={{
              width: "540px",
              height: "217px",
              border: "1px solid #348ABF",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div className="p-3">
              <h2
                style={{
                  color: "#042440",
                  fontFamily: "Inter",
                  fontSize: "10px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                  textTransform: "uppercase",
                  marginBottom: "15px",
                }}
              >
                {item.title}
              </h2>
              <p
                style={{
                  color: " #000",
                  fontFamily: "Playfair Display",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "normal",
                  marginBottom: "10px",
                }}
              >
                {item.description.substring(0, 80)}
              </p>
              <p
                style={{
                  color: "#808495",
                  fontFamily: "Inter",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  marginBottom: "17px",
                }}
              >
                {item.description}
              </p>
              <div>
                <a
                  href="/"
                  style={{
                    color: "#348ABF",
                    fontFamily: "Inter",
                    fontSize: "10px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "uppercase",
                    marginBottom: "25px",
                  }}
                >
                  {item.title} <FontAwesomeIcon icon={faArrowRightLong} />
                </a>
                <button
                  onClick={() => deleteItem(item.id, "smallData")}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs ml-auto"
                >
                  X
                </button>
              </div>
            </div>
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "230px",
                height: "197px",
                marginLeft: "10px",
                marginRight: "10px",
              }}
            />
          </div>
        ))}
      </div>
      <DarkTheme isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />{" "}
      <div className="text-center">
        <p>Footer text</p>
      </div>
    </div>
  );
}

export default DataList;
