import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "i-Phone 10x Max",
      price: 99999,
      quantity: 78,
    },
    {
      id: 2,
      name: "Samsung Galaxy 10x Max",
      price: 99999,
      quantity: 46,
    },
    {
      id: 3,
      name: "Nokia 10 Max",
      price: 99999,
      quantity: 74,
    },
    {
      id: 4,
      name: "i-Phone 16 Max",
      price: 99999,
      quantity: 78,
    },
  ]);

  const incrementQuantity = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decrementQuantity = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <ProductList
          products={products}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      </main>
    </>
  );
}

export default App;
