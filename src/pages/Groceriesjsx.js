import { useDispatch } from "react-redux";
import { cartAction } from "../data/cart-Slice";
import classes from "./Groceries.module.css";

const Groceriesjsx = (props) => {
  const { id, price, Text, img, RealPrice, discount } = props;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartAction.addTocart({ id, Text, price }));
  };

  return (
    <div className={classes.cardstart}>
      <img
        src="https://img.icons8.com/windows/32/null/hearts.png"
        alt=""
        style={{ marginLeft: `275px` }}
      />
      <img src={img} alt="" />
      <div>{Text}</div>
      <div className={classes.cardDiscount}>
        <div className={classes.cardPrice}>{price}</div>
        <div className={classes.cardRPrice}>{RealPrice}</div>
        <div className={classes.cardoff}>{discount}</div>
      </div>
      <button className={classes.button} onClick={addToCartHandler}>
        addToCArt
      </button>
    </div>
  );
};

export default Groceriesjsx;
