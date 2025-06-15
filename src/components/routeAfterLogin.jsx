import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout.jsx";
import Home from "../Pages/Home.jsx";
import Professional from "../Pages/Professional.jsx";
import Important from "../Pages/Important.jsx";
import General from "../Pages/General.jsx";
import Event from "../Pages/Event.jsx";
import Shopping from "../Pages/Shopping.jsx";

const routesBeforeLogin = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "professional-notes",
        element: <Professional />,
      },
      {
        path: "important-notes",
        element: <Important />,
      },
      {
        path: "shopping-notes",
        element: <Shopping />,
      },
      {
        path: "general-notes",
        element: <General />,
      },
      {
        path: "event-notes",
        element: <Event />,
      },
    ],
  },
]);
export default routesBeforeLogin;
