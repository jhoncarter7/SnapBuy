import { Fragment } from "react";
import TopClothes from "./TopClothes";
import classes from "./Top.module.css"
import TopSmartPhone from "./TopSmastPhone";
import BestDealGroceries from "./BestDealGrocery";
const Dummy_clothes = [{id: "a1", img: "clothes/img1.jpg", Text: "Cutter & Buck Virtue Eco Pique Stripe Recycled Mens Polo", price: "₹1500"}, {id: "a2", img: "clothes/img2.jpg", Text: "Cutter & Buck Adapt Eco Knit Stretch Recycled Mens Quarter Zip Pullover", price: "₹1300"}, {id: "a3", img: "clothes/img3.jpg", Text: " Cutter & Buck Prospect Textured Stretch Mens Short Sleeve Polo", price: "₹1000"}, {id: "a4", img: "clothes/img4.jpg", Text: "Cutter & Buck Pike Double Dot Print Stretch Mens Polo ", price: "₹2000"}, {id: "a5", img: "clothes/img5.jpg", Text: "Cutter & Buck Forge Tonal Stripe Stretch Mens Polo", price: "₹900"}]

const Dummy_phone = [{id: "a1", img: "phone/img1.jpg", Text: "  Apple iPhone 14 128 GB, Blue", price: "₹74,900"}, {id: "a2", img: "phone/img2.jpg", Text: "Apple iPhone 14 Plus 128 GB,     Starlight", price: "₹84,900"}, {id: "a3", img: "phone/img3.jpg", Text: "Motorola G62 5G 128 GB, 6 GB RAM, Midnight Grey, Mobile Phone", price: "₹14,900"}, {id: "a4", img: "phone/img4.jpg", Text: "Xiaomi 11T Pro 5G  128 GB, 8 GB, Moonlight White, Mobile Phone ", price: "₹36,900"}, {id: "a5", img: "phone/img5.jpg", Text: "OnePlus 10T 5G 128 GB, 8 GB RAM, Moonstone Black, Mobile Phone", price: "₹49,900"}]

const Dummy_grocery = [{id: "a1", img: "groceries/img1.webp", Text: "Happilo 100% Natural Premium Californian Almonds, 500 g ", price: "₹432"}, {id: "a2", img: "groceries/img2.webp", Text: "Diaper Pants - Extra Large", price: "₹634"}, {id: "a3", img: "groceries/img3.webp", Text: " Tomato - Hybrid (Loose)", price: "₹31"}, {id: "a4", img: "groceries/img4.webp", Text: "Farm Eggs - Regular, Medium, Antibiotic Residue-Free 30-pcs", price: "₹180"}, {id: "a5", img: "groceries/img5.webp", Text: "Fresho Frozen Green Peas, 500 g Pouch ", price: "₹81"}]

const Top = () => {

    return(<Fragment>
        <div>
        <h1>Top Pick Clothes</h1>
        <div className={classes.top}> 
   { Dummy_clothes.map((Dummy)=> <TopClothes key={Dummy.id} img={Dummy.img} Text={Dummy.Text} price={Dummy.price}/>)}
   </div>
   </div>

   <div>
  <h1>Top pick SmartPhone</h1>
  <div className={classes.top}>
    {Dummy_phone.map((dummy)=> <TopSmartPhone key={dummy.id} img={dummy.img} Text={dummy.Text} price={dummy.price}/>)}
  </div>
   </div>

   <div>
<h1>Best Deal Groceries</h1>
<div className={classes.top}>
    {Dummy_grocery.map((grocery)=> <BestDealGroceries key={grocery.id} img={grocery.img} Text={grocery.Text} price={grocery.price}/>)}
</div>
    
   </div>
</Fragment>)
}

export default Top;