// Importa React y los estilos de la aplicación
import React from "react";
import "./App.css";

// Importa el componente CrudApp y la función useContexto desde el contexto
import CrudApp from "./components/CrudApp";
import { useContexto } from "./context/Context";

// Define el componente principal de la aplicación
function App() {
  // Utiliza el hook useContexto para obtener datos del contexto
  const { nombre } = useContexto();

  // Muestra el nombre en la consola (útil para depuración)
  

  // Renderiza la aplicación
  return (
    <>
      {/* Estructura básica de la aplicación */}
      <div className="bg-gray-200 mt-10 ">
        <div className="container mx-auto py-8">
          <div className="max-w-lg mx-auto lg:max-w-full">
            {/* Renderiza el componente CrudApp dentro de un contenedor */}
            <CrudApp />
          </div>
        </div>
      </div>
    </>
  );
}

// Exporta el componente principal para que pueda ser utilizado en otros archivos
export default App;
