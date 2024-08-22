import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/kimyerins/mmd-react-router/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <div>
      <div className="dfbox detail_wrap">
        <div className="imgbox">
          <img src={`../${product?.img}`} alt="img" />
        </div>
        <div className="txtbox">
          <div className="tit">{product?.title}</div>
          <div className="price">₩{product?.price}</div>
          <select>
            {product?.size.map((data) => (
              <option>{data}</option>
            ))}
          </select>
          <button>추가하기</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
