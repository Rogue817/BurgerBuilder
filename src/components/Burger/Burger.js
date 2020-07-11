import React from "react";
import "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = () => (
  <div className="Burger">
    <BurgerIngredient type="BREAD_TOP" />
    <BurgerIngredient type="BACON" />
    <BurgerIngredient type="CHEESE" />
    <BurgerIngredient type="MEAT" />
    <BurgerIngredient type="BACON" />
    <BurgerIngredient type="CHEESE" />
    <BurgerIngredient type="MEAT" />
    <BurgerIngredient type="BREAD_BOTTOM" />
  </div>
);

export default Burger;
