import React, { useState } from "react";
import classes from "./AuthForm.module.css";
import Login from "./Login";
import SignUp from "./SignUp";

const AuthForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const setIsLogin = () => {
    setIsSignIn(true);
  };
  const setIsSignUp = () => {
    setIsSignIn(false);
  };

  return (
    <section className={classes.authSection}>
      {isSignIn && <Login goToSignUp={setIsSignUp} />}
      {!isSignIn && <SignUp goToLogin={setIsLogin} />}
    </section>
  );
};

export default AuthForm;
