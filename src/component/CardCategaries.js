import classes from "./CardCategaries.module.css"

const CardCategories = ({ Text, img }) => {
  return (
  
      <div className={classes.card}>
        <img className={classes.cardimg} src={img} alt="imag"/>
        <div className={classes.shopbutton}> shop now</div>
        <div>{Text}</div>
      </div>
   
  );
};

export default CardCategories;
