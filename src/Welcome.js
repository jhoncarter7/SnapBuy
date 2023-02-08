import { Fragment } from "react";
import Categories from "./component/Categories";
import Footer from "./component/Footer";

import Nav from "./component/Nav";
import Item from "./item/Item";
import Top from "./toppickscategories/Top";
import ItemAddedToCart from "./notification/ItemAddedToCart";



const Welcome = () => {
 
  return (
    <Fragment>
      <ItemAddedToCart />
      <Nav />
      <Item />
      <Categories />
      <Top />
      <Footer />
    </Fragment>
  );
};

export default Welcome;
