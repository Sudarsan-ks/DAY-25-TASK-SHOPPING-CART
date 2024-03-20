import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../Context";

export function Navbar() {
  const navigate = useNavigate();
  const { cart, warning, setAnnounce, announce } = useContext(ProductContext)
  return (
    <div className="nav-container">
      <div className="navbar">
        <div className="title_Shopping">
          <h4 onClick={() => navigate("/")}>My shopping</h4>
        </div>
        <div className="cartdesigning">
          <div className="cartlogo">
            <i
              className="fa-solid fa-cart-shopping"
              onClick={() => {
                navigate("/cart")
                if (cart.length === 0) {
                  setAnnounce(true)
                  setTimeout(() => {
                    setAnnounce(false)
                  }, 2000)
                }
              }}
            ></i>
          </div>
          <p className="countofcart">{cart.length}</p>
        </div>
      </div>
      <div className="addwarning">
        {
          warning && <div className="warning"><p>The product you selected is already added to the cart</p></div>
        }
        {
          announce && <div className="announce">Please select the product to view the cart</div>
        }
      </div>
    </div>

  );
}
