// import classes from "./TopClothes.module.css";
import classes from "./Top.module.css"
const TopClothes = ({ img, Text, price }) => {
  return  <div className={classes.card}>
    <img className={classes.cardimg} src={img} alt="images" />
    <div>{Text}</div>
    <div  className={classes.price}>{price}</div>
 
    <button className={classes.button} style={{bottom: "3.8rem"}}>view details </button>
    <button className={classes.button}> addToCArt</button>
  
    
  </div>;
};

export default TopClothes;
