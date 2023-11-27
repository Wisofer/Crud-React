import React, { useEffect } from "react";
import CrudTableRow from "./CrudTableRow";
import { useContexto } from "../context/Context";
import { supabase } from "../api/Supabase";

const CrudTable = () => {
  const { db, setDb } = useContexto();

  useEffect(() => {
    const datoSupabase = async () => {
      const { data } = await supabase.from("crud").select("*").order("nombre", {ascending:false});
      setDb(data);
      
    };



    datoSupabase();
  }, []);

  return (
    <div className="mt-4 overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-left md:text-center">
              Nombre
            </th>
            <th className="py-2 px-4 border-b text-left md:text-center">
              Apellido
            </th>
            <th className="py-2 px-4 border-b text-left md:text-center">
              Edad
            </th>
            <th className="py-2 px-4 border-b text-left md:text-center">
              Acciones
            </th>
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
            db.map((el) => <CrudTableRow key={el.id} db={el} />)
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
