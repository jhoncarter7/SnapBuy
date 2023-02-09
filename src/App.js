import { Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Clothes from "./pages/Clothes.js";
import Groceries from "./pages/Groceries.js";
import Phone from "./pages/Phone.js";
import Welcome from "./Welcome.js";
import Cart from "./pages/Cart.js";
import { FetchingCartData, sendingCartData } from "./data/SendFetch";
import { useDispatch, useSelector } from "react-redux";
import AuthForm from "./authentication/AuthForm.js";
import OrderPlace from "./pages/OrderPlace.js";
import AuthContext from "./authentication/Auth-context.js";


let isInitial = true

function App() {

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
 const authCtx = useContext(AuthContext)

const localId = authCtx.localId

  useEffect(() => {
  if(localId || null)
    dispatch(FetchingCartData(localId, null));
  
  }, [localId, dispatch]);

  
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.change || localId) {
      dispatch(sendingCartData(localId, cart));
    }
  }, [cart, localId, dispatch]);

  return <Routes>
    <Route path="/" element={<Navigate to={'/welcome'}/>}/>
    <Route path="/welcome" element={<Welcome/>}/>
    <Route path="/Phone" element={<Phone/>}/>
    <Route path="/clothes" element={<Clothes/>}/>
    <Route path="/Groceries" element={<Groceries/>}/>
    <Route path="/Cart" element={<Cart/>}/>
    <Route path="/AuthForm" element={<AuthForm/>}/>
    <Route path="/OrderPlace" element={<OrderPlace/>}/>
  </Routes>
}

export default App;

