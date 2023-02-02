import { Fragment } from "react";
import { clothesData } from "../data/clothesData";
import classes from "./Clothes.module.css"
import Nav from "../component/Nav";
const Clothes = () => {
  return (
    <Fragment>
      <Nav/>
    <div className={classes.card}>
      {clothesData.map((clothe) => (
        <div key={clothe.id} className={classes.cardstart}>
          <img src={clothe.img} alt=""/>
          <div>{clothe.Text}</div>
          <div className={classes.cardDiscount}>
            <div className={classes.cardPrice}>{clothe.price}</div>
            <div className={classes.cardRPrice}>{clothe.RealPrice}</div>
            <div className={classes.cardoff}>{clothe.discount}</div>
          </div>
          <button className={classes.button}>addToCArt</button>
        </div>
      ))}
    </div>
    </Fragment>
  );
};

export default Clothes;
