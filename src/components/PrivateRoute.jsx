// src/components/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // Si l'utilisateur n'est pas authentifié, rediriger vers la page de connexion
    return <Navigate to="/connexion" />;
  }

  // Si l'utilisateur est authentifié, rendre le composant demandé
  return <Component {...rest} />;
};

export default PrivateRoute;
