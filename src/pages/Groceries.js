
import { Fragment } from "react";
import { GroceriesData } from "../data/GroceriesData";
import classes from "./Groceries.module.css"
import Nav from "../component/Nav";
const Groceries = () => {
  return (
    <Fragment>
    <Nav/>
    
    <div className={classes.card}>
      {GroceriesData.map((Grocery) => (
        <div key={Grocery.id} className={classes.cardstart}>
          <img src={Grocery.img} alt="" />
          <div>{Grocery.Text}</div>
          <div className={classes.cardDiscount}>
            <div className={classes.cardPrice}>{Grocery.price}</div>
            <div className={classes.cardRPrice}>{Grocery.RealPrice}</div>
            <div className={classes.cardoff}>{Grocery.discount}</div>
          </div>
          <button className={classes.button}>addToCArt</button>
        </div>
      ))}
    </div>
   </Fragment>
  );
 
};

export default Groceries;
