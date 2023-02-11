import classes from "./Phone.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../data/cart-Slice";
import { whiseListAction } from "../data/whiseList-Slice";

const Phonejsx = (props) => {
  const { id, price, Text, img, RealPrice, discount } = props;
  const dispatch = useDispatch();
  const items = useSelector((state) => state.whiseList.items);
  const isWhiseList = items.find((item) => item.id === id);
  const WhiseListHandler = () => {
    if (isWhiseList) {
      dispatch(whiseListAction.removingWhiseList(id));
    } else {
      dispatch(whiseListAction.addingWhiseList({ id, Text, price, img }));
    }
  };
  const addToCartHandler = () => {
    dispatch(
      cartAction.addTocart({ id, Text, price, img, discount, RealPrice })
    );
  };

  return (
    <div className={classes.cardstart}>
      {isWhiseList ? (
        <img
          src="https://img.icons8.com/office/30/000000/filled-like--v1.png"
          alt=""
          onClick={WhiseListHandler}
          style={{ marginLeft: `275px` }}
        />
      ) : (
        <img
          src="https://img.icons8.com/ios-glyphs/30/null/hearts.png"
          alt=""
          onClick={WhiseListHandler}
          style={{ marginLeft: `275px` }}
        />
      )}

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

export default Phonejsx;
