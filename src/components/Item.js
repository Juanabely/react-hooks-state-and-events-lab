import React,{useState} from "react";

function Item({ name, category }) {
  const[incart,setIncart]=useState(false)
  const[action,setAction]=useState(true)

  function handleAddToCart(){
    setIncart(!incart)
    setAction(!action)
  }
  return (
    <li className={incart? "in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>{action?"Add to Cart":"Remove from Cart"}</button>
    </li>
  );
}

export default Item;