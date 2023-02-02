import { Fragment } from "react";
import { PhoneData } from "../data/PhoneData";
import classes from "./Phone.module.css"
import Nav from "../component/Nav";
const Phone = ({ Text }) => {
  return (
    <Fragment>
      <Nav/>
    <div className={classes.card}>
      
      {PhoneData.map((phn) => (
        <div key={phn.id} className={classes.cardstart}>
          <img src={phn.img} alt="" />
          <div>{phn.Text}</div>
          <div className={classes.cardDiscount}>
            <div className={classes.cardPrice}>{phn.price}</div>
            <div className={classes.cardRPrice}>{phn.RealPrice}</div>
            <div className={classes.cardoff}>{phn.discount}</div>
          </div>
          <button className={classes.button} >addToCArt</button>
        </div>
      ))}
    </div>
    </Fragment>
  );
};

export default Phone;
