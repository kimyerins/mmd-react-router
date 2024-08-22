import React from "react";
import { Navigate } from "react-router";
import Login from "../page/Login";
import ProductDetail from "../page/ProductDetail";

const PrivateRouter = ({ authenticate }) => {
  return authenticate ? <ProductDetail /> : <Navigate to="/login" />;
};

export default PrivateRouter;
