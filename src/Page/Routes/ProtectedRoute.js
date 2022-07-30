import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const { userLogin } = useSelector((state) => state.user);
  let location = useLocation();
  console.log(location.state);

  if (userLogin === null) {
    return <Navigate to="/signin" />;
  }

  return <Navigate to={location.state?.ticketUrl} />;
};

export default ProtectedRoute;
