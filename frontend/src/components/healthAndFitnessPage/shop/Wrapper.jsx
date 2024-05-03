import React, { useContext, useState } from "react";
import { productData } from "./shop.js";
import { CartContext } from "../../../context/CartContext.jsx";
function Wrapper() {
  // console.log(productData);

  // console.log(cart);
  const { cart, handleAddToCart, setCart, positions, setPositions } = useContext(CartContext);

  return (
    <div id="wrapper">
      <div id="container">
        {productData.map((product, index) => (
          <div key={index} style={{ cursor: "pointer" }}>
            <img src={product.image_url} alt="" />
            <div className="contentBox">
              <h4>{product.brand}</h4>
              <p>{product.para}</p>
              <div className="mixbox">
                <p>{product.price}</p>
                <p className="strikep">{product.strikedoffprice}</p>
                <p className="offer"> {product.offer}</p>
              </div>
              <p className="wishListp">{product.atw}</p>
              <p className="addToBagp" onClick={() => handleAddToCart(product, index)}>
                {positions.includes(index) ? "added" : product.atc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wrapper;
