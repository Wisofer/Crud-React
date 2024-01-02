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

        // Simulamos un tiempo de carga de 2 segundos antes de mostrar los datos
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      } catch (error) {
        console.error("Error fetching data from Supabase:", error);
        setLoading(false);
      }
    };

    fetchDataFromSupabase();
  }, []);

  return (
    <div className="mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {loading ? (
        <div className="bg-white p-50 rounded-md shadow-md">
          <h1 className="text-center text-gray-600">Cargando...</h1>
        </div>
      ) : db.length === 0 ? (
        <div className="bg-white p-4 rounded-md shadow-md">
          <p className="text-center text-gray-600">Sin Datos</p>
        </div>
      ) : (
        db.map((el) => (
          <div key={el.id} className="bg-white mt-5 p-4 rounded-md shadow-md w-full sm:w-64 md:w-72 lg:w-96">
            <p className="mb-2 text-xl font-semibold">
              {el.nombre} {el.apellido}
            </p>
            <p className="text-gray-600">Edad: {el.edad}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              <Link to={"/"}>
                <button
                  className="w-full bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded-md mb-2 sm:mb-0 sm:mr-2 transition duration-300 focus:outline-none"
                  onClick={() => setdataToEdit(el)}
                >
                  Editar
                </button>
              </Link>

              <button
                className="w-full bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded-md transition duration-300 focus:outline-none"
                onClick={() => deleteData(el.idUser)}
              >
                Eliminar
              </button>

              <Modal idUser={el.idUser} />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CrudTable;
