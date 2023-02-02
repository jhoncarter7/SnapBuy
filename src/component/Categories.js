import { useState } from "react";
import CardCategories from "./CardCategaries";
import classes from "./Categories.module.css";

const Dummy_card1 = [{id: "a1", img: "cardimg/img4.jpg", Text: "Price 5000 - 20000" }, {id: "a2", img: "cardimg/img5.jpg", Text: "price 20000 - 40000"}, {id: "a3", img: "cardimg/img6.jpg", Text: "price 40000 or above"}]

const Dummy_card2 = [{id: "a1", img: "https://4.imimg.com/data4/YE/CV/ANDROID-21824924/product-500x500.jpeg", Text: "Men-Clothes" }, {id: "a2", img: "https://i.pinimg.com/originals/cc/84/15/cc84151fb19c3392f6d51be3ad3ecdcd.jpg", Text: "Women Clothes"}, {id: "a3", img: "https://cdn.pixabay.com/photo/2018/05/01/07/55/boy-3364927_960_720.jpg", Text: "Children Clothes"}]

const Dummy_card3 = [{id: "a1", img: "cardimg/img1.jpg", Text: "Household care" }, {id: "a2", img: "cardimg/img1.jpg", Text: "Pakage Food"}, {id: "a3", img: "cardimg/img3.jpg", Text: "Others"}]


const Categories = () => {
  const [currentDummyCard, setCurrentDummyCard] = useState(Dummy_card1)
const [activation, setActivation] = useState("s1")
  const fordummy1 =() => {
    setActivation("s1")
    setCurrentDummyCard(Dummy_card1)
  }
  const fordummy2 =() => {
    setActivation("s2")
setCurrentDummyCard(Dummy_card2)
  }
  const fordummy3 =() => {
    setActivation("s3")
setCurrentDummyCard(Dummy_card3)
  }
  return (
    <section className={classes.section2}>
      <h1 className={classes.heading}>OUR CATEGORIES</h1>
      <ul className={classes.categoriesList}>
        <li><button className={classes.button} onClick={fordummy1} >SmartPhone</button></li>
        <li><button className={classes.button} onClick={fordummy2}>Clothes</button></li>
        <li><button className={classes.button} onClick={fordummy3}>Groceries</button></li>
      </ul>
      <div className={classes.cardparent}> {currentDummyCard.map((dummy) => <CardCategories key={dummy.id} id={dummy.id} img={dummy.img} Text={dummy.Text} activation={activation}/>)}  </div>

      
    </section>
  );
};

export default Categories;
