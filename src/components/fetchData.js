import React, { createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";

export const DataDispatchContext = createContext();

const initialState = {
  data: [],
  smallData: [],
  currentPage: 1,
  itemsPerPage: 8,
};

function dataReducer(state, action) {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "SET_SMALL_DATA":
      return { ...state, smallData: action.payload };
    case "SET_CURRENT_PAGE":
      return { ...state, currentPage: action.payload };
    case "SET_ITEMS_PER_PAGE":
      return { ...state, itemsPerPage: action.payload };
    default:
      return state;
  }
}

async function fetchData(url, dispatch, actionType) {
  try {
    const response = await axios.get(url);
    dispatch({ type: actionType, payload: response.data });
    return response.data;
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
    throw error;
  }
}

function DataFetcher({ children }) {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  const [smallDataLoaded, setSmallDataLoaded] = useState(false);

  useEffect(() => {
    fetchData("http://localhost:4000/data", dispatch, "SET_DATA")
      .then(() =>
        fetchData(
          "http://localhost:4000/small-data",
          dispatch,
          "SET_SMALL_DATA"
        )
      )
      .then(() => setSmallDataLoaded(true))
      .catch((err) => console.error(err));
  }, []);

  return (
    <DataDispatchContext.Provider value={{ state, dispatch }}>
      {smallDataLoaded && children}
    </DataDispatchContext.Provider>
  );
}

export default DataFetcher;
