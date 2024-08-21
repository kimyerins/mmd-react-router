import React from "react";

const ProductCard = ({ item }) => {
  const formattedPrice = item?.price
    ?.toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <div>
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
