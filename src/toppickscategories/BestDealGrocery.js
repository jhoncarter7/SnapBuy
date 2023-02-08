// import { useDispatch } from "react-redux"

import classes from "./Top.module.css";
import { useDispatch } from "react-redux";
import { cartAction } from "../data/cart-Slice";

const BestDealGroceries = (props) => {
    const { img, Text, price, id } = props;

    
  const dispatch = useDispatch();
 
  const addToCartHandler = () => {
    dispatch(cartAction.addTocart({ id, Text, price }));
  };

  return (
    <div className={classes.card}>
      <img src="https://img.icons8.com/windows/32/null/hearts.png" alt="" />
      <img className={classes.cardimg} src={img} alt="groceries img" />
      <div>{Text}</div>
      <div>₹{price}</div>
      <button className={classes.button} style={{ bottom: "3.8rem" }}>
        view details{" "}
      </button>
      <button className={classes.button} onClick={addToCartHandler}>
        {" "}
        addToCArt
      </button>
    </div>
  );
};

export default BestDealGroceries;
