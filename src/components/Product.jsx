import React from "react";

export default function Product({ product, incrementQuantity, decrementQuantity }) {
  const { id, name, price, quantity } = product;

  return (
    <div className="row">
      <div className="col-5">
        <h2>
          {name}
          <span className="badge bg-secondary text-white">₹{price}</span>
        </h2>
      </div>
      <div className="col-3">
        <div className="btn-group" role="group" aria-label=" ">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => decrementQuantity(id)} // Corrected
          >
            -
          </button>
          <button type="button" className="btn btn-danger">
            {quantity}S
          </button>
          <button
            type="button"
            className="btn btn-info"
            onClick={() => incrementQuantity(id)} // Corrected
          >
            +
          </button>
        </div>
      </div>
      <div className="col-4">
        {isNaN(quantity * price) ? "Invalid Value" : quantity * price}
      </div>
    </div>
  );
}
