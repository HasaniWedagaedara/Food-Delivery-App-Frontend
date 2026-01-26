import React, { useContext } from 'react'
import './FoodItems.css'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext';

const FoodItems = ({id,name,price, description, image}) => {

    const {cartItems,addTocart,removeFromcart}=useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-img" src={image} alt={name} />
        {!cartItems?.[id] ? (
          <img
            className="add"
            src={assets.add_icon_white}
            alt="Add Icon"
            onClick={() => addTocart(id)}
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              alt="Remove Icon"
              onClick={() => removeFromcart(id)}
            />
            <p>{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              alt="Add Icon"
              onClick={() => addTocart(id)}
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} about="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
}

export default FoodItems
