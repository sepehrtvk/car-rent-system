import React from "react";
import { Form, Button } from "react-bootstrap";
import useInput from "../../hooks/use-input";
import classes from "./Login.module.css";

const checkPhoneValid = (value) => {
  const isEmpty = value.trim() !== "";
  const is11char = value.length === 11;
  const isNotNumber = isNaN(value);
  const isNotFloat = value.indexOf(".") !== -1;
  const startsWith = value.trim().startsWith("0");

  return isEmpty && is11char && !isNotNumber && startsWith && !isNotFloat;
};

const checkPasswordValid = (value) => {
  return value.trim().length >= 8;
};

const Login = (props) => {
  const {
    value: phoneValue,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetphone,
  } = useInput(checkPhoneValid);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(checkPasswordValid);

  let formIsValid = false;

  if (phoneIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const submitLoginHandler = (e) => {
    e.preventDefault();

    passwordBlurHandler();
    phoneBlurHandler();
    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");
    console.log(phoneValue, passwordValue);

    resetphone();
    resetPassword();
  };

  return (
    <Form className={classes.form} onSubmit={submitLoginHandler}>
      <h4 className="text-center mt-4 mb-5">سامانه اجاره خودرو</h4>
      <Form.Group className="mb-4" controlId="phone">
        <Form.Label>شماره تلفن</Form.Label>
        <Form.Control
          type="tel"
          maxLength="11"
          placeholder="۰۹xxxxxxxxx"
          value={phoneValue}
          onChange={phoneChangeHandler}
          onBlur={phoneBlurHandler}
        />
        {phoneHasError && (
          <Form.Text className="text-danger">
            یک شماره موبایل معتبر وارد کنید
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
      <div className="d-flex justify-content-between align-items-center mt-5">
        <Button variant="primary" type="submit">
          ورود
        </Button>
        <Button variant="outline-primary" onClick={props.goToSignUp}>
          ثبت نام
        </Button>
      </div>
    </Form>
  );
};

export default Login;
