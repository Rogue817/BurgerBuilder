import React from "react";
import "../../styles/Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = ({ ingredients }) => (
  <div className="Burger">
    <BurgerIngredient type="BREAD_TOP" />
    {!ingredients.length ? (
      <p>Start to add ingredients!</p>
    ) : (
      ingredients.map((ingType, index) => (
        <BurgerIngredient key={ingType + index} type={ingType} />
      ))
    )}
    <BurgerIngredient type="BREAD_BOTTOM" />
  </div>
);

export default Burger;
