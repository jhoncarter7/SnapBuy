import React from "react";
import { useSelector } from "react-redux";
import WhiseListProducts from "./WhiseListProducts";
import classes from  "./WhiseList.module.css"
import { useNavigate } from "react-router-dom";
function WhiseList() {
  const whiseData = useSelector((state) => state.whiseList.items);
  const navigate = useNavigate()
  const exitButton = () => {
    navigate("/");
  };
  return (
    <div className={classes.cartmain}>
       <img
        onClick={exitButton}
        src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/24/null/external-cross-interface-royyan-wijaya-detailed-outline-royyan-wijaya-2.png"
        alt=""
        style={{
          float: `right`,
          margin: `-2rem 3rem 0 0`,
          fontSize: `1rem`,
          cursor: `pointer`,
        }}
      />
  <div className={classes.cartContainer}>
    <div className={classes.containerItems}> 
      {whiseData.map((item) => (
        <WhiseListProducts
          key={item.id}
          id={item.id}
          Text={item.Title}
          img={item.img}
          price={item.price}
          RealPrice={item.RealPrice}
        />
      ))}
    </div>
    </div>
    </div>
  );
}

export default WhiseList;
