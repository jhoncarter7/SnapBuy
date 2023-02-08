import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Clothes from "./pages/Clothes.js";
import Groceries from "./pages/Groceries.js";
import Phone from "./pages/Phone.js";
import Welcome from "./Welcome.js";
import Cart from "./pages/Cart.js";
import { FetchingCartData, sendingCartData } from "./data/SendFetch";
import { useDispatch, useSelector } from "react-redux";
import AuthForm from "./authentication/AuthForm.js";


let isInitial = true

function App() {

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(cart);



  useEffect(() => {
    dispatch(FetchingCartData());
  
  }, [dispatch]);

  
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.change) {
      dispatch(sendingCartData(cart));
    }
  }, [cart, dispatch]);

  return <Routes>
    <Route path="/" element={<Navigate to={'/welcome'}/>}/>
    <Route path="/welcome" element={<Welcome/>}/>
    <Route path="/Phone" element={<Phone/>}/>
    <Route path="/clothes" element={<Clothes/>}/>
    <Route path="/Groceries" element={<Groceries/>}/>
    <Route path="/Cart" element={<Cart/>}/>
    <Route path="/AuthForm" element={<AuthForm/>}/>
  </Routes>
}

export default App;

