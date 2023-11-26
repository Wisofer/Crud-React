import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl">
            <Link to={"/"}>
              <span className="cursor-pointer hover:text-gray-300">Home</span>
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link to={"contacto"}>
              <span className="cursor-pointer text-white hover:text-gray-300">
                Contacto
              </span>
            </Link>

            <Link to={"nosotros"}>
              <span className="cursor-pointer text-white hover:text-gray-300">
                Nosotros
              </span>
            </Link>

            <Link to={"datos"}>
              <span className="cursor-pointer text-white hover:text-gray-300">
                Datos
              </span>
            </Link>
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
