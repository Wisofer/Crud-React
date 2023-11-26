import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Contacto from "./pages/Contacto.jsx";
import Nosotros from "./pages/Nosotros.jsx";
import CrudTable from "./components/CrudTable.jsx";
import { ContextoProvider } from "./context/Context.jsx";
//import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "nosotros",
        element: <Nosotros />,
      },
      {
        path: "contacto",
        element: <Contacto />,
      },
      {
        path: "datos",
        element: <CrudTable />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextoProvider>
      <RouterProvider router={router} />
    </ContextoProvider>
  </React.StrictMode>
);
