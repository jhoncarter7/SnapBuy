import { Fragment } from "react";
import { GroceriesData } from "../data/GroceriesData";
import classes from "./Groceries.module.css";
import Nav from "../component/Nav";
import ItemAddedToCart from "../notification/ItemAddedToCart";
import Groceriesjsx from "./Groceriesjsx";
const Groceries = () => {
  return (
    <Fragment>
      <ItemAddedToCart />
      <Nav />

      <div className={classes.card}>
        {GroceriesData.map((Grocery) => (
          <Groceriesjsx
            key={Grocery.id}
            id={Grocery.id}
            img={Grocery.img}
            Text={Grocery.Text}
            price={Grocery.price}
            RealPrice={Grocery.RealPrice}
            discount={Grocery.discount}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Groceries;
