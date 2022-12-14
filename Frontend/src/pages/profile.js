import { useRef, useState, useEffect } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import useInput from "../hooks/use-input";

const checkPhoneValid = (value) => {
  const isEmpty = value.trim() !== "";
  const is11char = value.length === 11;
  const isNotNumber = isNaN(value);
  const isNotFloat = value.indexOf(".") !== -1;
  const startsWith = value.trim().startsWith("0");

  return isEmpty && is11char && !isNotNumber && startsWith && !isNotFloat;
};

const Profile = () => {
  const email = localStorage.getItem("email");
  const name = localStorage.getItem("name");
  const role = localStorage.getItem("role");

  const textRef = useRef();

  const [show, setShow] = useState(false);
  const [supports, setSupports] = useState([]);
  const [showSpinner, setShowSpinner] = useState(true);

  const {
    value: phoneValue,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: resetphone,
  } = useInput(checkPhoneValid);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetch("http://localhost:5550/api/v1/support", {
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
        let suppArray = data.data.Supports;
        let newArray = [];
        suppArray.forEach((item) => {
          if (item.name === name) newArray.push(item);
        });
        setSupports(newArray);
        setShowSpinner(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [name]);

  const submitQuestion = () => {
    const message = textRef.current.value;
    if (message === "" || !phoneIsValid) return;
    resetphone();

    fetch("http://localhost:5550/api/v1/support", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        phone: phoneValue,
        supportAnwser: " ",
        supportQuestion: message,
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
        handleShow();
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.reload();
  };

  return (
    <div
      className="container-fluid bg-primary bg-gradient p-5"
      style={{ height: "100vh" }}
    >
      <div className="row">
        <div className="col-6 me-auto text-center">
          <h3 className="text-white border-bottom pb-3 mt-5">???????? ???????????? ????</h3>
          <ul className="list-group p-5 text-end">
            <li className="list-group-item fw-bold">
              ?????? :<span className="fw-normal me-2">{name}</span>
            </li>
            <li className="list-group-item fw-bold">
              ?????????? :<span className="fw-normal me-2">{email}</span>
            </li>
            <li className="list-group-item fw-bold">
              ?????? :<span className="fw-normal me-2">{role}</span>
            </li>
          </ul>
        </div>
      </div>
      {localStorage.getItem("role") === "user" && (
        <div className="row mt-3">
          <div className="col-6 text-center">
            <h3 className="text-white border-bottom pb-3 mt-5">
              ?????????????? ???????????????? ????????????
            </h3>
            <Form>
              <Form.Group className=" text-end" controlId="phone">
                <Form.Label className="text-white mt-3">
                  ?????????? ???????? :{" "}
                </Form.Label>
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
            </Form>
            <Form>
              <Form.Group
                className="my-4  text-end"
                controlId="exampleForm.ControlTextarea2"
              >
                <Form.Label className="text-white">
                  ?????? ?????????????? ?????? :{" "}
                </Form.Label>
                <Form.Control as="textarea" rows={3} ref={textRef} />
              </Form.Group>
            </Form>
            <button className="btn btn-light" onClick={submitQuestion}>
              ?????????? ?????????????? ????????????????
            </button>
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header>
              <Modal.Title>???????? ???? ?????????????? ????????????????</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              ?????????????? ?????? ???? ???????????? ?????? ????. ?????????? ???????? ?????????? ?????? ???????? ??????????.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                ????????
              </Button>
            </Modal.Footer>
          </Modal>
          <div className="col-6 text-center">
            <h3 className="text-white border-bottom pb-3 mt-5">
              ???????? ?????? ???????????????? ????????
            </h3>
            {showSpinner && (
              <div className="col-12 text-center">
                <div
                  className="spinner-border my-5 text-white "
                  style={{ width: "3.5rem", height: "3.5rem" }}
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
            <ul className="list-group p-5 text-end">
              {supports.map((item) => (
                <>
                  <li className="list-group-item fw-bold">
                    ???????? :
                    <span className="fw-normal me-2">
                      {item.supportQuestion}
                    </span>
                  </li>
                  <li className="list-group-item fw-bold">
                    ???????? :
                    {item.supportAnwser === " " && (
                      <span className="fw-normal me-2 text-danger">
                        ???????? ???????? ???? ???????? ???????? ??????
                      </span>
                    )}
                    {item.supportAnwser !== " " && (
                      <span className="fw-normal me-2 text-primary">
                        {item.supportAnwser}
                      </span>
                    )}
                  </li>
                </>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
