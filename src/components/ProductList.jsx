import React from "react";
import Product from "./Product";

export default function ProductList({
  products,
  incrementQuantity,
  decrementQuantity,
}) {
  if (!Array.isArray(products)) {
    return <p> Oops!! Product not found.</p>;
  }

  return (
    <div>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      ))}
    </div>
  );
}
