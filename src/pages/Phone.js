import { Fragment } from "react";
import { PhoneData } from "../data/PhoneData";
import classes from "./Phone.module.css";
import Nav from "../component/Nav";
import ItemAddedToCart from "../notification/ItemAddedToCart";
import Phonejsx from "./Phonejsx";

const Phone = () => {
  return (
    <Fragment >
       <Nav />
      <section>
      <ItemAddedToCart />
      <div className={classes.card}>
        {PhoneData.map((phn) => (
          <Phonejsx
            key={phn.id}
            id={phn.id}
            Text={phn.Text}
            img={phn.img}
            price={phn.price}
            RealPrice={phn.RealPrice}
            discount={phn.discount}
          />
        ))}
      </div>
      </section>
    </Fragment>
  );
};

export default Phone;
