import React, { createContext, useEffect, useReducer } from "react";
import axios from "axios";

export const DataDispatchContext = createContext();
const initialState = {
  data: [],
  currentPage: 1,
  itemsPerPage: 8,
};

function dataReducer(state, action) {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };
    case "SET_ITEMS_PER_PAGE":
      return { ...state, itemsPerPage: action.payload };
    default:
      return state;
  }
}

function DataFetcher({ children }) {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  const apiUrl = "http://localhost:4000/data";

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((res) => dispatch({ type: "SET_DATA", payload: res.data }))
      .catch((err) => console.log(err));
  }, []);

  return (
    <DataDispatchContext.Provider value={{ state, dispatch }}>
      {children}
    </DataDispatchContext.Provider>
  );
}

export default DataFetcher;
