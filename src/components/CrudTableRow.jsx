import React from "react";

const CrudTableRow = ({ db, deleteData, setdataToEdit }) => {
  const { nombre, apellido, edad, id } = db;

  return (
    <tr className="hover:bg-gray-100 transition">
      <td className="py-2 px-4 sm:py-3 sm:px-6">{nombre}</td>
      <td className="py-2 px-4 sm:py-3 sm:px-6">{apellido}</td>
      <td className="py-2 px-4 sm:py-3 sm:px-6">{edad}</td>
      <td className="py-2 px-4 sm:py-3 sm:px-6">
        <button
          className="w-full sm:w-auto bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded-md mb-2 sm:mb-0 sm:mr-2 transition duration-300"
          onClick={() => setdataToEdit(db)}
        >
          Editar
        </button>
        <button
          className="w-full sm:w-auto bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded-md transition duration-300"
          onClick={() => deleteData(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
