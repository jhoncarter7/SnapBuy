// import { useDispatch } from "react-redux";
import { whiseListAction } from "../data/whiseList-Slice";
import React from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../data/cart-Slice";
import classes from "./WhiseListProducts.module.css"
const WhiseListProducts = (props) => {
  const dispatch = useDispatch();

  const { id, img, Text, RealPrice, price } = props;

  const removeItemHandler = () => {
    dispatch(whiseListAction.removingWhiseList(id));
  };
  const addingToCartHandler = () => {
    dispatch(cartAction.addTocart({ id, Text, price, img, RealPrice }));
  };
  return (
    <div>
      <div className={classes.cart}>
        <img className={classes.cartimg} src={img} alt="" />
        <p>{Text}</p>
        <p>₹{price}</p>
        <p>{RealPrice}</p>
        <div className={classes.cartbutton}>  
        <button onClick={removeItemHandler}>removeItem</button>
        <button onClick={addingToCartHandler}>AddToCArt</button>
        </div>
      </div>
    </div>
  );
};

export default WhiseListProducts;
