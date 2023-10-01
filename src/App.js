import React from "react";
import DataList from "./components/dataList";
import DataFetcher from "./components/fetchData";
import Navbar from "./components/navbar";
import TopMenu from "./components/topMenu";

function App() {
  return (
    <DataFetcher>
      <div
        className="container mx-auto min-h-screen flex flex-col justify-center items-center "
        style={{ maxWidth: "1080px" }}
      >
        <div>
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
