import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";
import useInput from "../../hooks/use-input";
import { Link } from "react-router-dom";
import UserView from "./UserView";

const checkPhoneValid = (value) => {
  const isEmpty = value.trim() !== "";
  const is11char = value.length === 11;
  const isNotNumber = isNaN(value);
  const isNotFloat = value.indexOf(".") !== -1;
  const startsWith = value.trim().startsWith("0");

  return isEmpty && is11char && !isNotNumber && startsWith && !isNotFloat;
};

const CarDetail = () => {
  const authCtx = useContext(AuthContext);
  const params = useParams();
  const [car, setCar] = useState([]);
  const [views, setViews] = useState([]);
  const [showSpinner, setShowSpinner] = useState(true);
  const [showRentMesssage, setShowShowRentMessage] = useState(false);
  const [rentTime, setRentTime] = useState(" ");
  const textRef = useRef();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    value: phoneValue,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetphone,
  } = useInput(checkPhoneValid);

  const changeSelect = (e) => {
    setRentTime(e.target.value);
  };

  const submitRentCar = (e) => {
    phoneBlurHandler();

    if (!phoneIsValid) {
      return;
    }

    fetch("http://localhost:5550/api/v1/requests", {
      method: "POST",
      body: JSON.stringify({
        name: localStorage.getItem("name"),
        phone: phoneValue,
        carname: car.name,
        rentTime: rentTime,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return null;
        }
      })
      .then((data) => {})
      .catch((err) => {
        console.log(err);
      });
    resetphone();
    setShowShowRentMessage(true);
  };

  useEffect(() => {
    const url = "http://localhost:5550/api/v1/cars/" + params.carId;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return null;
        }
      })
      .then((data) => {
        setCar(data.data.car);
        setShowSpinner(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.carId]);

  useEffect(() => {
    const url = "http://localhost:5550/api/v1/view";
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return null;
        }
      })
      .then((data) => {
        setViews(data.data.Views);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const submitUserView = (e) => {
    console.log();

    fetch("http://localhost:5550/api/v1/view", {
      method: "POST",
      body: JSON.stringify({
        name: localStorage.getItem("name"),
        carname: car.name,
        view: textRef.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return null;
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.reload();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center my-5">
          <h3>???????????? ???????? ?????? ??????</h3>
          {showSpinner && (
            <div
              className="spinner-border my-5 text-primary"
              style={{ width: "3.5rem", height: "3.5rem" }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </div>
      </div>
      {!showSpinner && (
        <div className="row">
          <div className="col-4">
            <img
              src={car.photo}
              alt={car.name}
              className="w-100 h-100 rounded-3"
            />
          </div>
          <div className="col-8">
            <table className="table text-center mb-5">
              <thead>
                <tr>
                  <th scope="col">??????</th>
                  <th scope="col">????????</th>
                  <th scope="col">??????????</th>
                  <th scope="col">??????</th>
                  <th scope="col">????????</th>
                  <th scope="col">???????? ????????</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{car.name}</td>
                  <td>{car.brand}</td>
                  <td>{car.capacity}</td>
                  <td>{car.color}</td>
                  <td>{car.class}</td>
                  <td>{car.gearbox}</td>
                </tr>
              </tbody>
            </table>
            <table className="table text-center mb-4">
              <thead>
                <tr>
                  <th scope="col">????????????</th>
                  <th scope="col">??????????</th>
                  <th scope="col">????????????</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-info">
                  <td> {car.pricePerDay} ??????????</td>
                  <td>{car.pricePerWeek} ??????????</td>
                  <td>{car.pricePerMonth} ??????????</td>
                </tr>
              </tbody>
            </table>
            <div className="row">
              <div className="col-9">
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={changeSelect}
                >
                  <option defaultValue>???????? ?????????? ???? ???????????? ???????? : </option>
                  <option value="???? ??????">???? ??????</option>
                  <option value="???? ????????">???? ????????</option>
                  <option value="???? ??????">???? ??????</option>
                </select>
              </div>
              <div className="col-3">
                <button
                  type="button"
                  className="btn btn-primary w-100"
                  onClick={handleShow}
                >
                  ??????????
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 mt-5 text-justify">
            <p className=" fw-bold fs-4">???????? ?????? ?????? ?????????? :</p>
          </div>
          <div className="col-12 my-3 text-justify">
            <p style={{ lineHeight: "2.2rem" }}>{car.description}</p>
          </div>
        </div>
      )}

      {authCtx.isLoggedIn && (
        <div className="container border-top">
          <div className="row text-center my-4">
            <h3>?????????? ??????????????</h3>
          </div>
          <div className="row pb-2 border-bottom">
            <div className="col-3 fw-bold fs-4 border-end">?????? ??????????</div>
            <div className="col-9 fw-bold fs-4 border-end">??????????</div>
          </div>
          {views.map((view) => (
            <UserView
              carname1={view.carname}
              carname2={car.name}
              userName={view.name}
              userView={view.view}
            />
          ))}
        </div>
      )}
      {!authCtx.isLoggedIn && (
        <div className="container border-top">
          <div className="row text-center my-4">
            <h3>?????????? ??????????????</h3>
          </div>
          <div className="row pb-2">
            <div className="col-12 text-danger fw-bold fs-4 ">
              ???????? ?????? ?????? ?? ???????? ?????????? ???????? ?????????????? ?????????? ???? ???????? ???????? ????????.
            </div>
          </div>
        </div>
      )}

      {authCtx.isLoggedIn && (
        <div className="container border-top">
          <div className="row text-center mb-4 mt-5">
            <h3>?????? ??????</h3>
          </div>
          <div className="row mb-5">
            <div className="col-12 fs-4 mb-2"> ?????? ??????:</div>
            <div className="col-10 fw-bold fs-4 ">
              <Form>
                <Form.Group className="text-end">
                  <Form.Control as="textarea" rows={3} ref={textRef} />
                </Form.Group>
              </Form>
            </div>
            <div className="col-2 text-center">
              <button
                className="btn btn-primary mt-4 w-100"
                onClick={submitUserView}
              >
                ?????? ??????
              </button>
            </div>
          </div>
        </div>
      )}

      {!authCtx.isLoggedIn && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>???????? ????????</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            ???????? ?????????? ?????????? ?????????? ???? ???????? ???????? ???????? ???? ?????? ?????? ????????
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-start">
            <Link to="/auth" className="btn btn-primary text-center">
              ???????? / ?????? ??????
            </Link>
          </Modal.Footer>
        </Modal>
      )}
      {authCtx.isLoggedIn && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>?????????? ???????????? ??????????</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {!showRentMesssage && (
              <Form.Group className="mb-4" controlId="phone">
                <Form.Label>?????????? ????????</Form.Label>
                <Form.Control
                  type="tel"
                  maxLength="11"
                  placeholder="????xxxxxxxxx"
                  value={phoneValue}
                  onChange={phoneChangeHandler}
                  onBlur={phoneBlurHandler}
                />
                {phoneHasError && (
                  <Form.Text className="text-danger">
                    ???? ?????????? ???????????? ?????????? ???????? ????????
                  </Form.Text>
                )}
              </Form.Group>
            )}
            {showRentMesssage && (
              <div>
                <p>?????????????? ?????????? ?????? ?????????? ???? ???????????? ?????? ????. </p>
                <p>?????????????? ???? ???????? ?????????????? ???? ?????? ???????? ???????????? ????????. </p>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-between">
            {!showRentMesssage && (
              <Button variant="primary" onClick={submitRentCar}>
                ?????? ??????????
              </Button>
            )}
            <Button variant="danger text-white" onClick={handleClose}>
              ????????
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default CarDetail;
