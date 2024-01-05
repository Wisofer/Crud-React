import React from 'react';

const Nosotros = () => {
  return (
    <div className="min-h-screen mx-5 flex items-center justify-center">
      <div className="bg-zinc-700 p-8 rounded-md shadow-md text-white max-w-lg w-full">
        <h2 className="text-3xl font-semibold mb-4 text-center">¡Hola, soy William!</h2>
        <div className="mb-4">
          <p className="text-gray-600 text-white">
            Soy un apasionado desarrollador frontend con 21 años de edad, ubicado en Nicaragua.
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600 text-white">
            Egresado de la Universidad Nacional Autónoma de Nicaragua (UNAN) en León, me especializo
            en la creación de experiencias web cautivadoras y funcionales.
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600 text-white">
            Con un enfoque en la innovación, ofrezco servicios tecnológicos que van desde el diseño
            y desarrollo de sitios web hasta la optimización de la experiencia del usuario.
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600 text-white">
            Mi objetivo es contribuir al crecimiento de proyectos mediante soluciones creativas y
            eficientes. ¡Hablemos sobre cómo puedo ayudarte a alcanzar tus objetivos digitales!
          </p>
        </div>
        <div className="text-center">
          <p className="text-gray-600 text-white">¡Gracias por conocer un poco más sobre mí!</p>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
