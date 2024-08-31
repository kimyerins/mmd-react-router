import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetail } from "../redux/reducers/productSlice";

const ProductDetail = () => {
  let { id } = useParams();
  const product = useSelector((state) => state.product.selectedItem);
  const dispatch = useDispatch();
  const getProductDetail = () => {
    dispatch(fetchProductDetail(id));
  };
  const formattedPrice = product?.price
    ?.toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  useEffect(() => {
    getProductDetail();
  }, [id]);
  return (
    <div>
      <div className="dfbox detail_wrap">
        <div className="imgbox">
          <img src={`../${product?.img}`} alt="img" />
        </div>
        <div className="txtbox">
          <div className="tit">{product?.title}</div>
          <div className="price">₩{formattedPrice}</div>
          <select>
            {product?.size.map((data, index) => (
              <option key={index}>{data}</option>
            ))}
          </select>
          <button>추가하기</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
