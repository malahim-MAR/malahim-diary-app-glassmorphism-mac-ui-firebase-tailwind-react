import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout.jsx";
import Login from "../Pages/Login.jsx";
import Signup from "../Pages/Signup.jsx";

const routesBeforeLogin = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // cleaner alternative to `path: ""`
        element: <Login />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

export default routesBeforeLogin;
