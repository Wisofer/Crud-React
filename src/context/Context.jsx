import { createContext, useContext, useState } from "react";

export const ContextFormulario = createContext();

export const useContexto = () => {
  const contexto = useContext(ContextFormulario);
  if (!contexto) {
    throw new console.error(
      "Lo lamento el contexto debe estar con un provider"
    );
  } else {
    return contexto;
  }
};

export const ContextoProvider = ({ children }) => {
  const initialDb = [
    {
        id:1,
        nombre:"William Fernando",
        apellido:"Borge Vanegas",
        edad:21
    },
    {
      id:2,
        nombre:"wisofer Fernando",
        apellido:"Borge Vanegas",
        edad:21
    },
    {
       id:3,
        nombre:"will Fernando",
        apellido:"Borge Vanegas",
        edad:21
    },
    {
      id:4,
        nombre:"ferhon Fernando",
        apellido:"Borge Vanegas",
        edad:21
    },

  ];
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

  return <ContextFormulario.Provider value={{createData, updateData, deleteData, db, setdataToEdit, dataToEdit }} >{children}</ContextFormulario.Provider>;
};
