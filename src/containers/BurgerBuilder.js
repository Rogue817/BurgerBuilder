import React, { useReducer } from "react";
import Burger from "../components/Burger/Burger";

const ingredientsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_INGREDIENT":
      return state.concat(action.payload); // dispatchIngredients({ type: "ADD_INGREDIENT", payload: ingredient })
    case "REMOVE_INGREDIENT":
      return state.splice(action.payload, 1); // dispatchIngredients({ type: "REMOVE_INGREDIENT", payload: index })
    default:
      return state;
  }
};

const BurgerBuilder = () => {
  const [ingredients, dispatchIngredients] = useReducer(ingredientsReducer, [
    "CHEESE",
    "BACON",
    "MEAT",
  ]);
  return <Burger ingredients={ingredients} />;
};

export default BurgerBuilder;
