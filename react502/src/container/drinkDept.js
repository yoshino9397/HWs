import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Drink from "../components/Drink";
import { drinkUpdate } from "../redux/actions/action";

const DrinkDept = () => {
  const [drink, setDrink] = useState();
  const drinkData = useSelector((state) => state.drink.drinkData);
  const dispatch = useDispatch();

  console.log("DRINK RENDER");

  const handleQuantity = (operator, id) => {
    dispatch(drinkUpdate(operator, id));
    setDrink(id);
  };

  const getRandomColor = (id) => {
    let color = "#";
    let letter = "0123456789ABCDEF";
    if (drink === id) {
      for (let i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 16)];
      }
    }
    return color;
  };
  return (
    <>
      <h1>Drink Department</h1>
      <div className="card-group">
        {drinkData.map((drink) => (
          <Drink
            key={drink.id}
            drink={drink}
            handleQuantity={handleQuantity}
            getRandomColor={getRandomColor}
          />
        ))}
      </div>
    </>
  );
};

export default DrinkDept;
