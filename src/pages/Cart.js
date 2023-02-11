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
  console.log(cartItemList);
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
let Price = 0
  return (
    <div className={classes.cartmain}>
      <p className="">your cart item</p>
      {/* <p> total number of product = {totalQuantity}</p> */}
    
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
    { totalQuantity && <div className={classes.cartContainer}>
      <div className={classes.containerItems}>
      {cartItemList.map((item) => 
     { grandTotal += item.totalPrice
      Price += item.RealPrice
     return (
        <CartItem
          key={item.id}
          id={item.id}
          img={item.img}
          price={item.price}
          quantity={item.quantity}
          title={item.Title}
          RealPrice={item.RealPrice}
          totalPrice={item.totalPrice}
          totalQuantity={item.totalQuantity}
        />
      )})}
      </div>
      <div className={classes.cartBox}>
      <p>Realprice({totalQuantity}item)  <span>₹{Price}</span></p>
      <p>Discount <span> ₹{Price-grandTotal}</span> </p>
      <p>Delivery charge  <span>Free</span></p>
    <p>Total Amount <span>₹{grandTotal}</span> </p>
      <button className={classes.orderbutton} onClick={orderPlaceHandler}>
        PlaceOrder
      </button>
      </div>
      </div>}
    </div>
  );
};

export default Cart;
