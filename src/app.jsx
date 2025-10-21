import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Screens/Home/Home.jsx";
import ProjectDetails from "./Screens/CardDetails.jsx/CardDetail.jsx";

// Definimos las rutas
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/proyecto/:id",
    element: <ProjectDetails />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
