import React from "react";
import "./App.css";
import CrudApp from "./components/CrudApp";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="bg-gray-200 min-h-screen">
        <div className="container mx-auto py-8">
          <div className="max-w-lg mx-auto lg:max-w-full">
            <CrudApp />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
