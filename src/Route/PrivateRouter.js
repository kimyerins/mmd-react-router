import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import Login from "../page/Login";
import ProductDetail from "../page/ProductDetail";

const PrivateRouter = () => {
  const authenticate = useSelector((state) => state.auth.authenticate);
  return authenticate ? <ProductDetail /> : <Navigate to="/login" />;
};

export default PrivateRouter;
