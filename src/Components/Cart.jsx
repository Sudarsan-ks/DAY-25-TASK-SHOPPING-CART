import { useContext, useEffect } from "react";
import { ProductContext } from "../Context";

export function Cart() {



  const { cart, removecart, price, plusbtn, minisbtn } = useContext(ProductContext)
  return (
    <div className="cart-container">
      <div className="cart">
        {
          cart.map((sud, index) => {
            return (
              <div className="cartbox" key={index}>
                <div className="img_div">
                  <div className="img"><img src={sud.images} alt="img" /></div>
                </div>
                <div className="title_div">
                  <div className="title_cart">{sud.title}</div>
                </div>
                <div className="plusorminus">
                  <button onClick={() => plusbtn(sud)}>+</button>
                  <p className="count">{sud.count}</p>
                  <button onClick={() => minisbtn(sud)}>-</button>
                </div>
                <div className="cartbtn">
                  <button onClick={() => removecart(sud.id)}>Remove</button>
                </div>
                <div className="price">
                  <div className="productprice"><i className="fa fa-inr " aria-hidden="true"></i> {sud.price}</div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="total">
        <div className="totalprice">Total price of the cart is - <span>{price}</span></div>
      </div>
    </div>
  );
}
