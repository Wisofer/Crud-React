import React, { useState } from "react";
import CrudForm from "./CrudForm";

const CrudApp = () => {
  return (
    <div className="container mx-auto mt-8 p-4 lg:p-8 bg-zinc-700 max-w-2xl py-20">
      <h3 className="text-3xl font-semibold mb-4 text-white text-center">APLICACION DE INFORMACION</h3>
      <CrudForm />
    </div>
  );
};

export default CrudApp;
