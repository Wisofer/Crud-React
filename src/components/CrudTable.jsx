import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ db, setdataToEdit, deleteData }) => {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left md:text-center">Nombre</th>
            <th className="py-2 px-4 border-b text-left md:text-center">Apellido</th>
            <th className="py-2 px-4 border-b text-left md:text-center">Edad</th>
            <th className="py-2 px-4 border-b text-left md:text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {db.length === 0 ? (
            <tr>
              <td colSpan="4" className="py-2 px-4 text-center">
                Sin Datos
              </td>
            </tr>
          ) : (
            db.map((el) => (
              <CrudTableRow
                key={el.id}
                db={el}
                setdataToEdit={setdataToEdit}
                deleteData={deleteData}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
