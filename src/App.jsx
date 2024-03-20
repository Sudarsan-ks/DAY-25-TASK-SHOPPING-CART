import React from "react";
import { Navbar } from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Shopping } from "./Components/Shopping";
import { Cart } from "./Components/Cart";
import { ProductProvider } from "./Context";

function App() {
  return (
    <ProductProvider >
      <div className="container">
        <div className="shopping-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Shopping />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </ProductProvider>
  );
}

export default App;
