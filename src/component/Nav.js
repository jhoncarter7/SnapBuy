import classes from "./nav.module.css";

const Nav = () => {
  return (
    <nav className={classes.nav} >
      <input className={classes.input} placeholder="search your products" />
      <ul>
        <li><img className={classes.navimg}  src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/48/null/external-home-interface-royyan-wijaya-detailed-outline-royyan-wijaya.png" alt=""/></li>
        <li><img className={classes.navimg} src="https://img.icons8.com/ios/50/null/user-male-circle--v1.png" alt=""/></li>
        <li><img className={classes.navimg} src="https://img.icons8.com/ios/50/null/hearts--v1.png" alt=""/></li>
        <li><img className={classes.navimg} src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/null/external-shopping-cart-interface-kiranshastry-lineal-kiranshastry-1.png" alt=""/></li>
        
      </ul>
    </nav>
  );
};

export default Nav;
