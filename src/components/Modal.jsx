import React, { useState } from "react";
import { supabase } from "../api/Supabase";
import { useEffect } from "react";

export default function Modal({ idUser }) {
  const [showModal, setShowModal] = React.useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataFromSupabase = async () => {
      const { data } = await supabase
        .from("crud")
        .select("*")
        .eq("idUser", idUser);
      setData(data[0]);
      
    };

    fetchDataFromSupabase();
  }, [idUser]);

  return (
    <>
      <button
      className="font-bold text-white"
        
        onClick={() => setShowModal(true)}
      >
        Mostrar
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-5 max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-zinc-700 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t text-white">
                  <h3 className="text-3xl font-semibold">
                    Informacion del usuario
                  </h3>

                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none bg-white">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="p-5 text-white">
                  <h2 className="text-2xl">Su Nombre es: {data?.nombre}</h2>
                  <h4 className="text-1xl">Su Apellido es: {data?.apellido}</h4>
                  <h6 className="text-1xl">Su edad es: {data?.edad}</h6>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}