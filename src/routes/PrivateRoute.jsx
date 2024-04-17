import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-infinity loading-lg"></span>;
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname}></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
