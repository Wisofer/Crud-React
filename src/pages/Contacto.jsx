import React, { useState } from 'react';

const Contacto = () => {
  const [informacion, setInformacion] = useState({
    correo:"wisofer17@gmail.com",
    telefono1: "8231-0100",
    telefono2: "8153-9569",
    ubicacion: "Leon",
    calle:"Central de león",
    pais:"Nicaragua",

  })
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md max-w-lg w-full">
        <h2 className="text-3xl font-semibold mb-4 text-center">Información de Contacto</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Detalles de Contacto</h3>
          <p className="text-gray-600">Correo electrónico: {informacion.correo} </p>
          <p className="text-gray-600">Teléfonos: (505) {informacion.telefono1} - {informacion.telefono2}  </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Ubicación: {informacion.ubicacion}</h3>
          <p className="text-gray-600">{informacion.calle}</p>
          <p className="text-gray-600"> {informacion.pais} </p>
        </div>
        <div className="text-center">
          <p className="text-gray-600">Muchas gracias por establecerte en contacto.</p>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
