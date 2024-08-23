import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
//import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../component/ProductCard";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productLIst, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    let url = `https://my-json-server.typicode.com/kimyerins/mmd-react-router/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
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
