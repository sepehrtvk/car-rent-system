import React from "react";
import { Form, Button } from "react-bootstrap";
import useInput from "../../hooks/use-input";
import classes from "./Login.module.css";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";

const checkEmailValid = (value) => {
  const email = value.includes("@")
  const isNotNumber = isNaN(value);

  return isNotNumber && email;
};

const checkPasswordValid = (value) => {
  return value.trim().length >= 8;
};

const Login = (props) => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);

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

  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const submitLoginHandler = (e) => {
    e.preventDefault();

    passwordBlurHandler();
    emailBlurHandler();
    if (!formIsValid) {
      return;
    }

    fetch("http://localhost:5550/api/v1/users/login", {
      method: "POST",
      body: JSON.stringify({
        email: emailValue,
        password: passwordValue,
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
        authCtx.login(data.token, 3443443,data.data.user.name);
        history.replace("/");
      })
      .catch((err) => {
        console.log(err);
      });



    resetemail();
    resetPassword();
  };

  return (
    <Form className={classes.form} onSubmit={submitLoginHandler}>
      <h4 className="text-center mt-4 mb-5">سامانه اجاره خودرو</h4>
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
