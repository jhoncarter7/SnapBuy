import { Fragment } from "react";
import { clothesData } from "../data/clothesData";
import classes from "./Clothes.module.css";
import Nav from "../component/Nav";
import ItemAddedToCart from "../notification/ItemAddedToCart";
import Clothesjsx from "./Clothesjsx";

const Clothes = () => {
  return (
    <Fragment>
      <ItemAddedToCart />
      <Nav />
      <div className={classes.card}>
        {clothesData.map((clothe) => (
          <Clothesjsx
            key={clothe.id}
            id={clothe.id}
            img={clothe.img}
            Text={clothe.Text}
            price={clothe.price}
            RealPrice={clothe.RealPrice}
            discount={clothe.discount}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Clothes;
