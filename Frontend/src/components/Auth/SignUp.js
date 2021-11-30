import React from "react";
import { Form, Button } from "react-bootstrap";
import classes from "./SignUp.module.css";
import useInput from "../../hooks/use-input";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import AuthContext from "../../store/auth-context";

const checkEmailValid = (value) => {
  const isEmpty = value.trim() !== "";
  const is11char = value.length === 11;
  const isNotNumber = isNaN(value);
  const isNotFloat = value.indexOf(".") !== -1;
  const startsWith = value.trim().startsWith("0");

  return true;
  return isEmpty && is11char && !isNotNumber && startsWith && !isNotFloat;
};

const checkPasswordValid = (value) => {
  return value.trim().length >= 8;
};

const SignUp = (props) => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const {
    value: fnameValue,
    isValid: fnameIsValid,
    hasError: fnameHasError,
    valueChangeHandler: fnameChangeHandler,
    inputBlurHandler: fnameBlurHandler,
    reset: resetFname,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lnameValue,
    isValid: lnameIsValid,
    hasError: lnameHasError,
    valueChangeHandler: lnameChangeHandler,
    inputBlurHandler: lnameBlurHandler,
    reset: resetLname,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetemail,
  } = useInput(checkEmailValid);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(checkPasswordValid);

  const {
    value: password2Value,
    isValid: password2IsValid,
    hasError: password2HasError,
    valueChangeHandler: password2ChangeHandler,
    inputBlurHandler: password2BlurHandler,
    reset: resetPassword2,
  } = useInput((value) => value === passwordValue);

  let formIsValid = false;

  if (
    fnameIsValid &&
    lnameIsValid &&
    passwordIsValid &&
    emailIsValid &&
    password2IsValid
  ) {
    formIsValid = true;
  }

  const submitSignUpHandler = (e) => {
    e.preventDefault();

    fnameBlurHandler();
    lnameBlurHandler();
    emailBlurHandler();
    passwordBlurHandler();
    password2BlurHandler();

    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");
    console.log(fnameValue, lnameValue, emailValue, passwordValue);

    // axios
    //   .post("http://localhost:5550/api/v1/users/login",{
    //     name: fnameValue + " " + lnameValue,
    //     email: emailValue,
    //     password: passwordValue,
    //     passwordConfirm: passwordValue,
    //   })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));

    fetch("http://localhost:5550/api/v1/users/signup", {
      method: "POST",
      body: JSON.stringify({
        name: fnameValue + " " + lnameValue,
        email: emailValue,
        password: passwordValue,
        passwordConfirm: passwordValue,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        // const expirationTime = new Date(
        //   new Date().getTime() + +data.expiresIn * 1000
        // );
        console.log(data.token);
        authCtx.login(data.token, 3443443,fnameValue);
        history.replace("/");
      })
      .catch((err) => {
        console.log(err);
      });

    // resetFname();
    // resetLname();
    // resetPassword();
    // resetPassword2();
    // resetemail();
  };

  return (
    <Form className={classes.form} onSubmit={submitSignUpHandler}>
      <h4 className="text-center mt-4 mb-5">سامانه اجاره خودرو</h4>

      <div className="row">
        <div className="col-md-6">
          <Form.Group className="mb-4" controlId="name">
            <Form.Label>نام</Form.Label>
            <Form.Control
              type="text"
              placeholder="نام"
              value={fnameValue}
              onChange={fnameChangeHandler}
              onBlur={fnameBlurHandler}
            />
            {fnameHasError && (
              <Form.Text className="text-danger">
                لطفا نام خود را وارد نمایید
              </Form.Text>
            )}
          </Form.Group>
        </div>

        <div className="col-md-6">
          <Form.Group className="mb-4" controlId="familyName">
            <Form.Label>نام خانوادگی</Form.Label>
            <Form.Control
              type="text"
              placeholder="نام خانوادگی"
              value={lnameValue}
              onChange={lnameChangeHandler}
              onBlur={lnameBlurHandler}
            />
            {lnameHasError && (
              <Form.Text className="text-danger">
                لطفا نام خانوادگی خود را وارد نمایید
              </Form.Text>
            )}
          </Form.Group>
        </div>
      </div>

      <Form.Group className="mb-4" controlId="phone">
        <Form.Label>ایمیل</Form.Label>
        <Form.Control
          type="email"
          placeholder="example@test.com"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && (
          <Form.Text className="text-danger">
            یک ایمیل موبایل معتبر وارد کنید
          </Form.Text>
        )}
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicPassword">
        <Form.Label>رمز عبور</Form.Label>
        <Form.Control
          type="password"
          placeholder="رمز عبور"
          value={passwordValue}
          onChange={passwordChangeHandler}
          onBlur={passwordBlurHandler}
        />
        {passwordHasError && (
          <Form.Text className="text-danger">
            رمز عبور باید شامل حداقل ۸ کاراکتر باشد
          </Form.Text>
        )}
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicPassword2">
        <Form.Label>تکرار رمز عبور </Form.Label>
        <Form.Control
          type="password"
          placeholder="تکرار رمز عبور"
          value={password2Value}
          onChange={password2ChangeHandler}
          onBlur={password2BlurHandler}
        />
        {password2HasError && (
          <Form.Text className="text-danger">تکرار رمز صحیح نمی باشد</Form.Text>
        )}
      </Form.Group>

      <div className="d-flex justify-content-between align-items-center mt-5">
        <Button variant="primary" type="submit">
          ثبت نام
        </Button>
        <Button variant="outline-primary" onClick={props.goToLogin}>
          ورود
        </Button>
      </div>
    </Form>
  );
};

export default SignUp;
