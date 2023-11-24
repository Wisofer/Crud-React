import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [
  {
    id: 1,
    nombre: "Wisofer",
    apellido: "17",
    edad: 21,
  },
  {
    id: 2,
    nombre: "Nicole",
    apellido: "Suarez",
    edad: 17,
  },
  {
    id: 3,
    nombre: "Maria Guadalupe",
    apellido: "Flores",
    edad: 19,
  },
  {
    id: 4,
    nombre: "Ashly",
    apellido: "Hernandez",
    edad: 23,
  },
];

const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setdataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que deseas eliminar este elemento?"
    );

    if (confirmDelete) {
      const newData = db.filter((el) => el.id !== id);
      setDb(newData);
    }
  };

  return (
    <div className="container mx-auto mt-8 p-4 lg:p-8 bg-gray-100 max-w-2xl">
      <h3 className="text-3xl font-semibold mb-4">APLICACION DE INFORMACION</h3>
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setdataToEdit={setdataToEdit}
      />

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-400 mt-4">
          <CrudTable
            db={db}
            setdataToEdit={setdataToEdit}
            deleteData={deleteData}
          />
        </table>
      </div>
    </div>
  );
};

export default CrudApp;
