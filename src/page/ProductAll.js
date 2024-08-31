import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
//import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../component/ProductCard";
import { useSearchParams } from "react-router-dom";
import { fetchProducts } from "../redux/reducers/productSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductAll = () => {
  const productList = useSelector((state) => state.product.productList);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const getProducts = () => {
    let searchQuery = query.get("q") || "";
    dispatch(fetchProducts(searchQuery));
  };
  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <div className="productList">
      <ul className="prdList dfbox">
        {productList.map((menu) => (
          <li>
            <ProductCard item={menu} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductAll;
