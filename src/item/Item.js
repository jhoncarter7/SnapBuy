import Banner from "../component/Banner";
import classes from "./Items.module.css"
const dummy = [
  {
    id: "1",
    url: "https://thumbs.dreamstime.com/z/grocery-shopping-promotional-sale-banner-fast-shopping-cart-full-fresh-colorful-food-grocery-shopping-promotional-sale-banner-168812786.jpg",
  },
  {
    id: "2",
    url: "https://marketplace.canva.com/EAFMyDADdFY/1/0/1600w/canva-pink-pastel-abstract-geometric-shapes-kids-fashion-sale-banner-A7wSvAwQAis.jpg",
  },
  {
    id: "3",
    url: "https://static.vecteezy.com/system/resources/previews/008/071/140/non_2x/online-shop-flash-sale-banner-template-design-up-to-50-off-discount-sale-vector.jpg",
  },
];


const Item = () => {
 
  return (
    <div className={classes.Item}>
      <Banner dummy={dummy} />
    
    </div>
  );
};

export default Item;
