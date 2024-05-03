import React, { useContext, useEffect, useState } from "react";
import "./cart.css";
import { CartContext } from "../../../context/CartContext";
function Cart() {
  const { cart, handleAddToCart, setCart, positions, setPositions } = useContext(CartContext);
  const [total, settotal] = useState(0);
  const calculatetotalprice = () => {
    settotal(cart.length * 100);
  };

  useEffect(() => {
    calculatetotalprice();
  });

  return (
    <div style={{ backgroundColor: "white" }}>
      <div id="upperbar">
        <div>
          <img src="../../healthfitnessimages/logos/1.png" alt="brandLogo" id="landingPage" />
        </div>
        <div>
          <p>
            <span id="first">BAG </span>--------- <span id="second">ADDRESS</span> ---------
            <span>PAYMENT</span>
          </p>
        </div>
        <div>
          <img
            src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
            alt=""
            style={{ width: "40px", height: "40px", top: "1px" }}
          />
          <span>100% SECURE</span>
        </div>
      </div>

      <div id="timerbox">
        <p>
          Sale Starts in <span> 3 </span> Days
        </p>
      </div>
      <div class="con_ord">
        <div class="xyz">
          <div className="cart">
            {cart &&
              cart.map((product, index) => (
                <div key={index} className="cart-item">
                  <img src={product.image_url} alt={product.para} className="product-image" />
                  <div className="product-info">
                    <h3 className="brand-name">{product.brand}</h3>
                    <p className="product-name">{product.para}</p>
                    <p className="product-price">{product.price}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div class="orderbox">
          <div class="pricedets">PRICE DETAILS</div>
          <div class="total">
            <span>Total MRP</span>
            <span class="totalprice">{total}</span>
          </div>
          <div class="discount">
            <span>Discount on MRP</span>
            <span class="filldiscount">--</span>
          </div>

          <div class="cartamount">
            <span>Total Amount</span>
            <span class="amount_pay">{total}</span>
          </div>
          <p>Enter Promo Code </p>
          <div class="promocode">
            <input type="text" id="promo" placeholder="coupon code" />
            <div class="apply">Apply</div>
          </div>

          <div class="makeorder">PLACE ORDER</div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
