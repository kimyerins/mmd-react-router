import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
//import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../component/ProductCard";
import { useSearchParams } from "react-router-dom";
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const ProductAll = () => {
  const productLIst = useSelector((state) => state.product.productList);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const getProducts = () => {
    let searchQuery = query.get("q") || "";
    dispatch(productAction.getProducts(searchQuery));
  };
  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <div className="productList">
      <ul className="prdList dfbox">
        {productLIst.map((menu) => (
          <li>
            <ProductCard item={menu} />
          </li>
        ))}
      </ul>
      {/* <Container> */}
      {/*  <Row>
          <Col md={3}>
            <ProductCard />
          </Col>
          <Col md={3}>
            <ProductCard />
          </Col>
          <Col md={3}>
            <ProductCard />
          </Col>
          <Col md={3}>
            <ProductCard />
          </Col>
        </Row> */}
      {/*</Container>*/}
    </div>
  );
};

export default ProductAll;
