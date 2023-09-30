import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container mx-auto" style={{ maxWidth: "1080px" }}>
      <button
        onClick={toggleMenu}
        className="text-blue-500 hover:text-gray-200 md:hidden"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      <nav
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex  md:items-center md:w-auto md:text-center md:w-full md:flex-grow justify-end ml-auto md:mr-0`}
      >
        <a
          href="/"
          className="block mt-4 text-blue-500 md:inline-block md:mt-0 md:ml-6 hover:bg-gray-200"
        >
          Menu 1
        </a>
        <a
          href="/"
          className="block mt-4 text-blue-500 md:inline-block md:mt-0 md:ml-6 hover:bg-gray-200"
        >
          Menu 2
        </a>
        <a
          href="/"
          className="block mt-4 text-blue-500 md:inline-block md:mt-0 md:ml-6 hover:bg-gray-200"
        >
          Menu 3
        </a>
        <a
          href="/"
          className="block mt-4 text-blue-500 md:inline-block md:mt-0 md:ml-6 hover:bg-gray-200"
        >
          Menu 4
        </a>
        <a
          href="/"
          className="block mt-4 text-blue-500 md:inline-block md:mt-0 md:ml-6 hover:bg-gray-200"
        >
          Menu 5
        </a>
        <a
          href="/"
          className="block mt-4 text-blue-500 md:inline-block md:mt-0 md:ml-6 hover:bg-gray-200"
        >
          Menu 6
        </a>
        <a
          href="/"
          className="block mt-4 text-blue-500 md:inline-block md:mt-0 md:ml-6 hover:bg-gray-200"
        >
          Menu 7
        </a>
        <a
          href="/"
          className="block mt-4 text-blue-500 md:inline-block md:mt-0 md:ml-6 hover:bg-gray-200"
        >
          Menu 8
        </a>
        <a
          href="/"
          className="block mt-4 text-blue-500 md:inline-block md:mt-0 md:ml-6 hover:bg-gray-200"
        >
          Menu 9
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
