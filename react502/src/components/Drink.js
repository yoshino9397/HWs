import React from "react";

const Drink = ({ drink, handleQuantity, getRandomColor }) => {
  return (
    <div className="card">
      <div
        className="card-body fw-bold"
        style={{ backgroundColor: getRandomColor(drink.id) }}
      >
        {drink.beverage} : {drink.quantity}
      </div>
      <div className="card-footer">
        <button
          className="btn btn-primary m-1"
          onClick={() => handleQuantity("+", drink.id)}
        >
          +
        </button>
        <button
          className="btn btn-danger m-1"
          onClick={() => handleQuantity("-", drink.id)}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Drink;
