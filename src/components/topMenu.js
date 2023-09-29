import React from "react";
import logo from "./image/Logo.jpg";

function TopMenu() {
  return (
    <nav className="md:flex md:items-center md:w-auto md:text-center md:w-full md:flex-grow">
      <div className="flex justify-between items-center w-full">
        <div style={{ width: "163px", height: "55px", flexShrink: 0 }}>
          <img src={logo} alt="Logo" />
        </div>

        <div className="hidden md:flex space-x-4">
          <a href="/" className="text-blue-500 hover:text-gray-200">
            Element 1
          </a>
          <a href="/" className="text-blue-500 hover:text-gray-200">
            Element 2
          </a>
          <a href="/" className="text-blue-500 hover:text-gray-200">
            Element 3
          </a>
          <a href="/" className="text-blue-500 hover:text-gray-200">
            Element 4
          </a>
        </div>
      </div>
    </nav>
  );
}

export default TopMenu;
