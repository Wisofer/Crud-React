import { data } from "autoprefixer";
import { supabase } from "../api/Supabase";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const [db, setDb] = useState([]);
  const [dataToEdit, setdataToEdit] = useState(null);

  const createData = (data) => {
    setDb([...db, data] );
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
    
    
    
  };

  const deleteData = async (id) => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que deseas eliminar este elemento?"
    ); 

    if (confirmDelete) {
      const { error } = await supabase.from("crud").delete().eq("idUser", id);
      const newData = db.filter((el) => el.idUser !== id);
      setDb(newData);
      
      
      
    }

    
  };

  


  return <ContextFormulario.Provider value={{createData, updateData, deleteData, db, setDb, setdataToEdit, dataToEdit }} >{children}</ContextFormulario.Provider>;
};
