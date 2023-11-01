import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  const cartStatus = inCart ? "in-cart" : "";

  const handleClick = () => {
    setInCart((inCart) => !inCart)
  }
  
  const buttonLabel = inCart ? "Remove From Cart" : "Add to Cart";

  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{buttonLabel}</button>
    </li>
  );
}

export default Item;
