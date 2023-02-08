import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footers}>
        <h2>Follow the Flock</h2>
        <p>
          Exclusive offers, a heads up on new things, and sightings of _
          in the wild. Oh, we have cute sheep, too. #_
        </p>
      </div>
      <div className={classes.footers}>
        <h2>Help</h2>
        <a href="/">Privacy & Policy</a>
        <a href="/">Shipping & Delivery</a>
        <a href="/">Refund policy</a>
        <a href="/">Track your order</a>
      </div>
      <div className={classes.footers}>
        <h2>Support</h2>
        <a href="/">Feedback</a>
        <a href="/">Contact us</a>
        <a href="/">Download app</a>
        <a href="/">Terms and conditions</a>
      </div>
      <div>
      <p>&copy; Copyright 2022 by Nikhil Rai</p>
      </div>
    </div>
  );
};

export default Footer;
