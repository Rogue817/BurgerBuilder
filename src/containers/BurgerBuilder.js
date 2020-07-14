import React, { useReducer, useMemo } from "react";
import Burger from "../components/Burger/Burger";
import IngredientSelector from "../components/Burger/IngredientSelector/IngredientSelector";

const ingredientsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_INGREDIENT":
      return state.concat(action.payload);
    case "REMOVE_INGREDIENT":
      state.splice(action.payload, 1);
      return [...state];
    case "UPDATE_INGREDIENT":
      state.splice(action.payload.index, 1, action.payload.ingredient);
      return [...state];
    default:
      return state;
  }
};

const BurgerBuilder = () => {
  const [ingredients, dispatchIngredients] = useReducer(ingredientsReducer, []);
  const handleSelectIngredient = (index, event) => {
    event.preventDefault();
    if (ingredients[index]) {
      dispatchIngredients({
        type: "UPDATE_INGREDIENT",
        payload: { index, ingredient: event.target.value }
      });
    }
    else dispatchIngredients({ type: "ADD_INGREDIENT", payload: event.target.value });
  }

  const handleRemoveIngredient = (index) => {
    dispatchIngredients({ type: "REMOVE_INGREDIENT", payload: index });
  }

  const helperArray = useMemo(() => (
    Array.apply(null, Array(ingredients.length + 1)).map((_, idx) => idx)
  ), [ingredients.length]);

  return (
    <>
      <Burger ingredients={ingredients} />
      {helperArray.map((_, index) => (
        <IngredientSelector
          key={`${ingredients[index]}${index}`}
          value={ingredients[index]}
          onSelectIngredient={handleSelectIngredient.bind(null, index)}
          onRemoveIngredient={handleRemoveIngredient.bind(null, index)}
        />
      ))}
    </>
  );
};

export default BurgerBuilder;
