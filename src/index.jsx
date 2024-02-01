import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Services from './Services'
import About from './About'
import Rooms from './Rooms'
import Packages from './Packages'
import Spas from './Spas'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Services",
    element: <Services />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Rooms",
    element: <Rooms />,
  },
  {
    path: "/Packages",
    element: <Packages />,
  },
  {
    path: "/Spas",
    element: <Spas />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
