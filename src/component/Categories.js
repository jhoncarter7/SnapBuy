import { useState } from "react";
import CardCategories from "./CardCategaries";
import classes from "./Categories.module.css";

const Dummy_card1 = [{id: "a1", img: "cardimg/img4.jpg", Text: "Price 5000 - 20000" }, {id: "a2", img: "cardimg/img5.jpg", Text: "price 20000 - 40000"}, {id: "a3", img: "cardimg/img6.jpg", Text: "price 40000 or above"}]

const Dummy_card2 = [{id: "a1", img: "cardimg/img1.jpg", Text: "Price 5000 - 20000" }, {id: "a2", img: "cardimg/img2.jpg", Text: "bla bla"}, {id: "a3", img: "cardimg/img3.jpg", Text: "price 20000 - 40000"}]

const Dummy_card3 = [{id: "a1", img: "cardimg/img1.jpg", Text: "Price 5000 - 20000" }, {id: "a2", img: "cardimg/img1.jpg", Text: "bla bla"}, {id: "a3", img: "cardimg/img3.jpg", Text: "price 5000 - 20000"}]


const Categories = () => {
  const [currentDummyCard, setCurrentDummyCard] = useState(Dummy_card1)

  const fordummy1 =() => {
    setCurrentDummyCard(Dummy_card1)
  }
  const fordummy2 =() => {
setCurrentDummyCard(Dummy_card2)
  }
  const fordummy3 =() => {
setCurrentDummyCard(Dummy_card3)
  }
  return (
    <section className={classes.section2}>
      <h1 className={classes.heading}>OUR CATEGORIES</h1>
      <ul className={classes.categoriesList}>
        <li><button className={classes.button} onClick={fordummy1}>SmartPhone</button></li>
        <li><button className={classes.button} onClick={fordummy2}>Clothes</button></li>
        <li><button className={classes.button} onClick={fordummy3}>Groceries</button></li>
      </ul>
      <div className={classes.cardparent}> {currentDummyCard.map((dummy) => <CardCategories key={dummy.id} img={dummy.img} Text={dummy.Text}/>)}  </div>

      
    </section>
  );
};

export default Categories;
