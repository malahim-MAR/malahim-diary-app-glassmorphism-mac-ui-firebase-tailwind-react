import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { store } from "./redux/store/store";
import routesBeforeLogin from "./components/routeBeforeLogin";
import routesAfterLogin from "./components/routeAfterLogin";
import React from "react";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";

function AppRouter() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser || null);
    });
    return () => unsubscribe();
  }, []);

  if (user === undefined) return <div>Loading...</div>; // Checking the user

  const router = user ? routesAfterLogin : routesBeforeLogin;

  return <RouterProvider router={router} />;
}

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
