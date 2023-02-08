

import classes from "./CartItem.module.css";
// import { useSelector } from "react-redux";

import { cartAction } from "../data/cart-Slice";
import { useDispatch } from "react-redux";

const CartItem = (props) => {

 const dispatch = useDispatch();


const {id, price, title, totalPrice, quantity} =props

const removeFromCartHandler =  ()=> {
  dispatch(cartAction.removeFromCart(id))
}


  const addToCartHandler = () => {
    dispatch(cartAction.addTocart({id, title, price}));

  };


  return (
    <section  className={classes.cart}>
    
      <div className={classes.cartTitle}>{title}</div>
      <div>
        {" "}
        ₹{totalPrice} (<span>₹{price}/item</span>)
      </div>
      <div className={classes.cartbutton}>
        <button onClick={removeFromCartHandler} >
          <img
            src="https://img.icons8.com/material-sharp/24/null/minus-sign.png"
            alt=""
          />
        </button>
        <div className={classes.quantity}>{quantity}</div>
        <button onClick={addToCartHandler}>
          <img
            src="https://img.icons8.com/material-sharp/24/null/add.png"
            alt=""
          />
        </button>
      </div>
    </section>
  );
};

export default CartItem;
