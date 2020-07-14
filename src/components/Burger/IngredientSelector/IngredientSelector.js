import React, { useState, useEffect } from "react";
import "../../../styles/IngredientSelector.css";

const IngredientSelector = ({ value = "", onSelectIngredient, onRemoveIngredient = () => { } }) => {
    const [visibility, setVisibility] = useState("hidden");

    useEffect(() => {
        const updatedVisibility = value ? "visible" : "hidden";
        setVisibility(updatedVisibility);
    }, [value]);
    
    return (
        <div className="BuildControl">
            <select 
                value={value}
                onChange={onSelectIngredient}
            >
                <option disabled value="">Add Ingredient</option>
                <option value="BACON">Bacon</option>
                <option value="CHEESE">Cheese</option>
                <option value="MEAT">Meat</option>
                <option value="SALAD">Salad</option>
            </select>
            <button
                type="button"
                className="Less"
                style={{ visibility }}
                onClick={onRemoveIngredient}
            >
                Remove
            </button>
        </div>
    );
};

export default IngredientSelector;