import Banner from "../component/Banner";
import classes from "./Items.module.css"
const dummy = [
  {
    id: "1",
    url: "img/img1.jpg",
  },
  {
    id: "2",
    url: "img/img2.jpg",
  },
  {
    id: "3",
    url: "img/img3.jpg",
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
