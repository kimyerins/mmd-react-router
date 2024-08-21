import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../component/ProductCard";

const ProductAll = () => {
  const [productLIst, setProductList] = useState([]);
  const getProducts = async () => {
    let url = `https://my-json-server.typicode.com/kimyerins/mmd-react-router/products`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="productList">
      <ul className="prdList dfbox">
        {productLIst.map((menu) => (
          <li>
            <ProductCard item={menu} />
          </li>
        ))}
      </ul>
      <Container>
        {/* <Row>
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
      </Container>
    </div>
  );
};

export default ProductAll;
