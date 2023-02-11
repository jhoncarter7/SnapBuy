import classes from "./Top.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../data/cart-Slice";
import { whiseListAction } from "../data/whiseList-Slice";

const TopSmartPhone = (props) => {
  const { img, Text, price, id } = props;
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
    dispatch(cartAction.addTocart({ id, Text, price, img }));
  };
  return (
    <div className={classes.card}>
      {isWhiseList ? (
        <img
          src="https://img.icons8.com/office/30/000000/filled-like--v1.png"
          alt=""
          onClick={WhiseListHandler}
        />
      ) : (
        <img
          src="https://img.icons8.com/ios-glyphs/30/null/hearts.png"
          alt=""
          onClick={WhiseListHandler}
        />
      )}
      <img className={classes.cardimg} src={img} alt="phone images" />
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

export default TopSmartPhone;
