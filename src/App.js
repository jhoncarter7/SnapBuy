import { Navigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Clothes from "./pages/Clothes.js";
import Groceries from "./pages/Groceries.js";
import Phone from "./pages/Phone.js";
import Welcome from "./Welcome.js";

function App() {
  return <Routes>
    <Route path="/" element={<Navigate to={'/welcome'}/>}/>
    <Route path="/welcome" element={<Welcome/>}/>
    <Route path="/Phone" element={<Phone/>}/>
    <Route path="/clothes" element={<Clothes/>}/>
    <Route path="/Groceries" element={<Groceries/>}/>
  </Routes>
}

export default App;

