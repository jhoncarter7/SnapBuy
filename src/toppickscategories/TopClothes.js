import classes from "./Top.module.css";
import { useDispatch } from "react-redux";
import { cartAction } from "../data/cart-Slice";

const TopClothes = (props) => {
  const { img, Text, price, id} = props;

  const dispatch = useDispatch()

  const addToCartHandler = () => {
      dispatch(cartAction.addTocart({id, Text, price, img}))
  }

  return (
    <div tabIndex={0} className={classes.card}>
       <img  src="https://img.icons8.com/windows/32/null/hearts.png" alt=""/>
      <img className={classes.cardimg} src={img} alt="images" />
      <div>{Text}</div>
      <div className={classes.price}>₹{price}</div>
      <button className={classes.button} style={{ bottom: "3.8rem" }}>
        view details</button>
      <button className={classes.button} onClick={addToCartHandler}> addToCArt</button>
    </div>
  );
};

export default TopClothes;
