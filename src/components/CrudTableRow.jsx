import React from "react";
import { useContexto } from "../context/Context";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const CrudTableRow = ({ db }) => {
  
  const { deleteData, setdataToEdit } = useContexto();

  return (
    <tr className="hover:bg-gray-100 transition">
      <td className="py-2 px-4 sm:py-3 sm:px-6">{db.nombre}</td>
      <td className="py-2 px-4 sm:py-3 sm:px-6">{db.apellido}</td>
      <td className="py-2 px-4 sm:py-3 sm:px-6">{db.edad}</td>
      <td className="py-2 px-4 sm:py-3 sm:px-6">
        <div className="flex flex-wrap gap-2">
          <Link to={"/"}>
            <button
              className="w-full sm:w-auto bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded-md mb-2 sm:mb-0 sm:mr-2 transition duration-300"
              onClick={() => setdataToEdit(db)}
            >
              Editar
            </button>
          </Link>

          <button
            className="w-full sm:w-auto bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded-md transition duration-300"
            onClick={() => deleteData(db.idUser)}
          >
            Eliminar
          </button>

          <Modal idUser={db.idUser} />
        </div>
      </td>
    </tr>
  );
};

export default CrudTableRow;