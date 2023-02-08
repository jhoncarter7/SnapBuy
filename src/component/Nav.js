import { Link, useNavigate } from "react-router-dom";
import classes from "./nav.module.css";
import { useSelector } from "react-redux";
import { useContext } from "react";
import AuthContext from "../authentication/Auth-context";
const Nav = () => {
const navigate = useNavigate()
const totalQuantity = useSelector(state => state.cart.totalQuantity)

const cartCtx = useContext(AuthContext)



  const CartData = () => {
navigate("/Cart")
  };

  const Homebutton = () => {
    navigate("/")
  }

  const signoutHandler = () => {

    cartCtx.logout();
    navigate("/")
  }


  return (
    <nav className={classes.nav}>

      <input className={classes.input} placeholder="search your products" />
      <ul>
        <li>
          <img
          onClick={Homebutton}
            className={classes.navimg}
            src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/48/null/external-home-interface-royyan-wijaya-detailed-outline-royyan-wijaya.png"
            alt="home"
          />
        </li>
        <li>
          <div className={classes.profile}>
          <Link to="/AuthForm">
          <img
            className={classes.navimg}
            src="https://img.icons8.com/ios/50/null/user-male-circle--v1.png"
            alt="account"
          />
           </Link>
          <div className={classes.profile_p}>
          <Link to="/AuthForm">
          <p>Login</p>
          </Link>

          {cartCtx.isLoggedIn && <p onClick={signoutHandler}>Logout</p>}
          </div>
           </div>
        </li>
        <li>
          <img
            className={classes.navimg}
            src="https://img.icons8.com/ios/50/null/hearts--v1.png"
            alt=""
          />
        </li>
        <li onClick={CartData}>

          <img
            className={classes.navimg}
            src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/null/external-shopping-cart-interface-kiranshastry-lineal-kiranshastry-1.png"
            alt="Cart"
          />
          <div className={classes.navcart}>{totalQuantity}</div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
