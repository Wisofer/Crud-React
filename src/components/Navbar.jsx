import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl">
            <Link to={"/"}>
              <span className="cursor-pointer hover:text-gray-300">Home</span>
            </Link>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } lg:flex space-x-4 lg:space-x-8`}
          >
            <Link
              to={"formulario"}
              onClick={toggleMenu}
              className="block lg:inline-block text-white hover:text-gray-300"
            >
              Formulario
            </Link>
            <Link
              to={"contacto"}
              onClick={toggleMenu}
              className="block lg:inline-block text-white hover:text-gray-300"
            >
              Contacto
            </Link>
            <Link
              to={"nosotros"}
              onClick={toggleMenu}
              className="block lg:inline-block text-white hover:text-gray-300"
            >
              Nosotros
            </Link>
            <Link
              to={"datos"}
              onClick={toggleMenu}
              className="block lg:inline-block text-white hover:text-gray-300"
            >
              Datos
            </Link>
          </div>
          <div className="lg:hidden">
            <button
              className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-300 hover:text-white hover:border-white"
              onClick={toggleMenu}
            >
              <svg
                className="h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path
                  fillRule="evenodd"
                  d="M3 5h14a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 5h14a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 5h14a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div className="container mx-auto mt-4">
        <div className="w-full lg:w-3/4 xl:w-1/2 mx-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Navbar;