import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ element: Component, ...props }) => {
  console.log(props.loggedIn, 'props.loggedIn');
  return props.loggedIn ? (
    <Component {...props} />
  ) : (
    <Navigate to="/signin" replace />
  );
};
