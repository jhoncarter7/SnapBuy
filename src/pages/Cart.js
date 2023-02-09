import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import { cartAction } from "../data/cart-Slice";
import { useContext } from "react";
import AuthContext from "../authentication/Auth-context";
const Cart = () => {
  const navigate = useNavigate();

  const cartItemList = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  // const actualProduct = useSelector((state) => state.cart.actualProduct);
  const dispatch = useDispatch();
  const authCtx = useContext(AuthContext);
  const exitButton = () => {
    navigate("/");
  };


  const orderPlaceHandler = () => {
    if (totalQuantity >= 1 && authCtx.isLoggedIn) {
      navigate("/OrderPlace");
    } else {
      return  alert("login please!");
    }

    dispatch(cartAction.replaceCartData({ items: [], totalQuantity: 0 }));
  };
let grandTotal = 0
  return (
    <div className={classes.cartmain}>
      <p className="">your cart item</p>
      <p> total number of product = {totalQuantity}</p>
      <img
        onClick={exitButton}
        src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/null/external-cross-interface-royyan-wijaya-detailed-outline-royyan-wijaya-2.png"
        alt=""
        style={{
          float: `right`,
          margin: `-2rem 3rem 0 0`,
          fontSize: `1rem`,
          cursor: `pointer`,
        }}
      />
      {cartItemList.map((item) => 
     { grandTotal += item.totalPrice
     return (
        <CartItem
          key={item.id}
          id={item.id}
          img={item.img}
          price={item.price}
          quantity={item.quantity}
          title={item.Title}
          totalPrice={item.totalPrice}
          totalQuantity={item.totalQuantity}
        />
      )})}
  <p>GrandTotal = ₹{grandTotal}</p>
      <button className={classes.orderbutton} onClick={orderPlaceHandler}>
        PlaceOrder
      </button>
    </div>
  );
};

export default Cart;
