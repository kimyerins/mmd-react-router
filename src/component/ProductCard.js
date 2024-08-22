import React from "react";
import { useNavigate } from "react-router";

const ProductCard = ({ item }) => {
  const formattedPrice = item?.price
    ?.toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div className="card" onClick={showDetail}>
      <div className="imgbox">
        <img src={item?.img} alt="img" />
      </div>
      <div className="txtbox">
        {/* <div className="choice">
          {item?.choice == true ? "Conscious choice" : ""}
        </div> */}
        {item?.choice && <div className="choice">Conscious choice</div>}
        <div className="tit">{item?.title}</div>
        <div className="price">₩{formattedPrice}</div>
        {item?.new && <div className="new">신제품</div>}
      </div>
    </div>
  );
};

export default ProductCard;
