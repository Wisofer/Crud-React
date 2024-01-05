import React, { useState, useEffect } from "react";
import { useContexto } from "../context/Context";
import { supabase } from "../api/Supabase";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const CrudTable = () => {
  const { db, setDb, deleteData, setdataToEdit } = useContexto();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataFromSupabase = async () => {
      try {
        const { data } = await supabase
          .from("crud")
          .select("*")
          .order("nombre", { ascending: false });

        setDb(data);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching data from Supabase:", error);
        setLoading(false);
      }
    };

    fetchDataFromSupabase();
  }, []);

  return (
    <div className="mt-4">
      {loading ? (

        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-zinc-700">
          <div className="p-40 rounded-md shadow-md">
            <h1 className="text-center text-lg text-gray-600 text-white">Cargando...</h1>
          </div>
        </div>
        
      ) : db.length === 0 ? (
        <div className="bg-zinc-700 p-4 rounded-md shadow-md">
          <p className="text-center text-white text-gray-600">Sin Datos</p>
        </div>
      ) : (
        <div className="grid gap-4 grid-cols-1 ho sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-3 m-1">
          {db.map((el) => (
            <div
              key={el.id}
              className="bg-zinc-700 hover:bg-zinc-800  border-radius: 300px; mt-5 mx-5 p-4 rounded-md shadow-md "
            >
              <p className="mb-2 text-xl font-semibold text-white">
                {el.nombre} {el.apellido}
              </p>
              <p className="text-gray-600 text-white">Edad: {el.edad}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                <Link
                  to={"/formulario"}
                  className="text-white bg-blue-500  rounded py-1 px-1 font-bold hover:bg-blue-700 "
                >
                  <button onClick={() => setdataToEdit(el)}>Editar</button>
                </Link>

                <Link className="bg-red-500 rounded border py-1 px-1 font-bold text-white hover:bg-red-700">
                  <button onClick={() => deleteData(el.idUser)}>
                    Eliminar
                  </button>
                </Link>

                <Link className="bg-green-500 rounded border py-1 px-1   hover:bg-green-700">
                  <Modal idUser={el.idUser} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CrudTable;
