import { useNavigate } from "react-router-dom";
import classes from "./CardCategaries.module.css"

const CardCategories = ({ Text, img, activation }) => {
const navigate = useNavigate()
const submitHandler = () => {
if (activation === "s1") navigate("/phone")
else if(activation=== "s2") navigate("/clothes")
else if(activation=== "s3") navigate("/Groceries")
}

  return (
  
      <div className={classes.card}>
        
        <img className={classes.cardimg} src={img} alt="imag"/>
        <div className={classes.shopbutton} onClick={submitHandler}> shop now</div>
        <div>{Text}</div>
      </div>
   
  );
};

export default CardCategories;
