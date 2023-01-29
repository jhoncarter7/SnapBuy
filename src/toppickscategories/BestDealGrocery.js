import classes from "./Top.module.css"

const BestDealGroceries = ({img, Text, price}) => {
    return<div className={classes.card}>
        <img className={classes.cardimg}  src={img} alt="groceries img"/>
        <div>{Text}</div>
        <div>{price}</div>
        <button className={classes.button} style={{bottom: "3.8rem"}}>view details </button>
    <button className={classes.button}> addToCArt</button>

    </div>
}

export default BestDealGroceries