import React from "react";
import { useState, useEffect } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [show, setShow] = useState({})
  const [cart, setCart] = useState([])
  const [warning, setWarning] = useState(false)
  const [price, setPrice] = useState(0)
  const [announce, setAnnounce] = useState(false)
  const navigate = useNavigate()

  //To handle the description of the product
  const handleinfo = (productid) => {
    setShow(prestate => ({
      ...prestate,
      [productid]: !prestate[productid]
    }))
  }

  //To Add product to the cart
  const addtocart = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
      }
    })
    if (isPresent) {
      setWarning(true)
      setTimeout(() => {
        setWarning(false)
      }, 2500)
      return;
    }
    setCart([...cart, item])

  };

  //To Remove product from the cart
  const removecart = (itemid) => {
    const updatedcart = cart.filter((product) => itemid !== product.id);
    setCart(updatedcart)
  };

  //To Add price whenever the product is added
  const handleprice = () => {
    let totalprice = 0
    cart.map((product) => {
      totalprice += product.count * product.price
    })
    setPrice(totalprice)
  }

  useEffect(() => {
    handleprice()
  })

  //To Increase the Quantity of a product
  const plusbtn = (item) => {
    let ind = -1;
    cart.forEach((product, index) => {
      if (item.id === product.id) {
        ind = index
      }
    })
    const tempcart = cart;
    tempcart[ind].count += 1
    if (tempcart[ind].count === 0) {
      tempcart[ind].count = 1
    }
    setCart([...tempcart])
  }

  //To Decrease the Quantity of a product
  const minisbtn = (item) => {
    let ind = -1;
    cart.forEach((product, index) => {
      if (item.id === product.id) {
        ind = index
      }
    })
    const tempcart = cart;
    tempcart[ind].count -= 1
    if (tempcart[ind].count === 0) {
      tempcart[ind].count = 1
    }
    setCart([...tempcart])

  }

  //It will navigate to home when there is nothing in cart
  if (price === 0) {
    navigate('/')
  }

  return (
    <ProductContext.Provider value={{ addtocart, removecart, show, handleinfo, cart, warning, price, handleprice, plusbtn, minisbtn, announce, setAnnounce }}>
      {children}
    </ProductContext.Provider>
  );
};

