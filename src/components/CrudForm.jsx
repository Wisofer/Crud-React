import React, { useEffect, useState } from "react";
import { useContexto } from "../context/Context";
import { supabase } from "../api/Supabase";

const initialForm = {
  idUser: null,
  nombre: "",
  apellido: "",
  edad: "",
};

const CrudForm = () => {
  const { createData, updateData, dataToEdit, setdataToEdit } = useContexto();

  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.nombre || !form.apellido || !form.edad) {
      alert("Datos Incompletos");
      return;
    }

    if (form.idUser === null) {
      createData(form);
      const result = await supabase.from("crud").insert({
        idUser: Date.now(),
        nombre: form.nombre,
        apellido: form.apellido,
        edad: form.edad,
      });
    } else {
      updateData(form);

      const { error } = await supabase
        .from("crud")
        .update({
          nombre: form.nombre,
          apellido: form.apellido,
          edad: form.edad,
        })
        .eq("idUser", form.idUser);
    }

    

    handleReset();
    setForm(initialForm);
    setdataToEdit(null);
  };

  const handleReset = () => {
    setForm(initialForm);
  };

  return (
    <div className="bg-zinc-800 p-6 rounded-md shadow-md md:w-96 mx-auto">
      <h3 className="text-lg md:text-2x1 font-semibold mb-4 text-white">
        {dataToEdit ? "Editar" : "Agregar"}
      </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="hidden"
          value={form.idUser}
          name="id"
          onChange={handleChange}
        />
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium mb-2 text-white">
            Nombre:
          </label>
          <input
            className="block text-white border border-gray-300 p-2 w-full bg-zinc-700"
            value={form.nombre}
            type="text"
            onChange={handleChange}
            name="nombre"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2 text-white ">
            Apellido:
          </label>
          <input
            className="block border text-white border-gray-300 p-2 w-full bg-zinc-700"
            value={form.apellido}
            type="text"
            onChange={handleChange}
            name="apellido"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-medium mb-2 text-white">
            Edad:
          </label>
          <input
            className="block border text-white border-gray-300 p-2 w-full bg-zinc-700"
            value={form.edad}
            type="text"
            onChange={handleChange}
            name="edad"
          />
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4">
          <button
            className="w-full md:w-auto bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
            type="submit"
          >
            Enviar
          </button>
          <button
            className="w-full md:w-auto bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 mt-2 md:mt-0 transition-colors duration-300"
            onClick={handleReset}
          >
            Limpiar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CrudForm;
