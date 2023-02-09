import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./Auth-context";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoginClick, setIsLoginClick] = useState(false)

  const [accountCreated, setAccountCreated] = useState();
  const enteredEmailRef = useRef();
  const enteredPasswordRef = useRef();
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const switchHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const returnHome = useCallback(() => {
    navigate("/");
  }, [navigate]);

  useEffect(() => {
    authCtx.isLoggedIn && returnHome();
  }, [authCtx.isLoggedIn, returnHome]);

  console.log(authCtx.isLoggedIn);

  console.log(isLogin);
  console.log(isLoginClick);

const loginClickHandler = () => {
  if(isLogin){
    setIsLoginClick(true)
  }
 
}


const userSubmittHandler = (e) => {
  e.preventDefault();

  const enteredEmail = enteredEmailRef.current.value;
  const enteredPassword = enteredPasswordRef.current.value;
  let url;

  if (isLogin && isLoginClick) {
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCyMnxMdct73QXAXcst2Swn_lJx8d_TfpA";
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": " application/json",
        },
      })
        .then((resp) => {
          if (resp.ok) {
             
            return resp.json();
          } else {
            return resp.json().then((data) => {
              let errormessage = "Authentication failed";
              throw new Error(errormessage);
            });
          }
        })
        .then((data) => authCtx.login(data.idToken, data.localId))
    
        .catch((error) => error.message);
  } else {
    url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCyMnxMdct73QXAXcst2Swn_lJx8d_TfpA";
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": " application/json",
        },
      })
        .then((resp) => {
          if (resp.ok) {
               setAccountCreated("succeed")
            return resp.json();
          } else {
            return resp.json().then((data) => {
              let errormessage = "Authentication failed";
              throw new Error(errormessage);
            });
          }
        })
        .catch((error) => error.message);
  }

  
};


  return (
    <section className={classes.auth}>
      <form onSubmit={userSubmittHandler}>
        <h1>{isLogin ? "login" : "signUp"}</h1>
        <div className={classes.control}>
          <label htmlFor="email">email</label>
          <input type="email" id="email" required ref={enteredEmailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password"> password</label>
          <input
            type="password"
            id="password"
            required
            ref={enteredPasswordRef}
          />
        </div>
        <div className={classes.actions}>
          <h3>{accountCreated}</h3>
          <button onClick={loginClickHandler}>{isLogin ? "login" : "signUp"}</button>
          <button className={classes.toggle} onClick={switchHandler}>
            {isLogin ? "create a new account" : "login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
