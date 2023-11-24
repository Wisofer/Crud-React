import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const CrudApi = () => {
  const [db, setDb] = useState([]);
  const [dataToEdit, setdataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map(el => el.id === data.id ? data : el )
    setDb(newData);
  };

  const deleteData = (id) => {
    const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este elemento?");

  if (confirmDelete) {
    const newData = db.filter((el) => el.id !== id);
    setDb(newData);
  }
  }; 

  return (
    <div>
      <h3>App REACT</h3>
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setdataToEdit={setdataToEdit}
      />

      <table>
        <CrudTable
          db={db}
          setdataToEdit={setdataToEdit}
          deleteData={deleteData}
        />
      </table>
    </div>
  );
};

export default CrudApi;
