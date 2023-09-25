import React from "react";
import DataList from "./components/dataList";
import DataFetcher from "./components/fetchData";
import Navbar from "./components/navbar";
import TopMenu from "./components/topMenu";
import DarkMenu from "./components/darkMenu";

function App() {
  return (
    <DataFetcher>
      <div className="w-1/2 mx-auto dark-menu">
        <div className="max-w-5xl mx-auto p-2 rounded">
          <DarkMenu />
          <TopMenu />
          <br />
          <Navbar />
          <DataList />
        </div>
      </div>
    </DataFetcher>
  );
}

export default App;
