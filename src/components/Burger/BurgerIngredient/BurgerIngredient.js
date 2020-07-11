import React from "react";
import "./BurgerIngredient.css";
import PropTypes from "prop-types";

const BurgerIngredient = ({ type }) => {
  let ingredient = null;
  switch (type) {
    case "BREAD_TOP":
      ingredient = (
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
      );
      break;
    case "BREAD_BOTTOM":
      ingredient = <div className="BreadBottom"></div>;
      break;
    case "CHEESE":
      ingredient = <div className="Cheese"></div>;
      break;
    case "BACON":
      ingredient = <div className="Bacon"></div>;
      break;
    case "MEAT":
      ingredient = <div className="Meat"></div>;
      break;
    case "SALAD":
      ingredient = <div className="Salad"></div>;
      break;
    default:
      ingredient = null;
      break;
  }
  return ingredient;
};

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredient;

