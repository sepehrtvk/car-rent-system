import { useState, useEffect, useRef } from "react";
import ReqItem from "../components/ReqItem";
import SupportItem from "../components/SupportItem";
import { Modal, Button, Form } from "react-bootstrap";
const AdminPanel = () => {
  const [requests, setRequests] = useState([]);
  const [supports, setSupports] = useState([]);
  const [id, setId] = useState("");
  const [show, setShow] = useState(false);
  const textRef = useRef();
  const [showSpinner1, setShowSpinner1] = useState(true);
  const [showSpinner2, setShowSpinner2] = useState(true);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetch("http://localhost:5550/api/v1/requests", {
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
        setRequests(data.data.Requests);
        setShowSpinner1(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
        setSupports(data.data.Supports);
        setShowSpinner2(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const sendPatch = () => {
    fetch("http://localhost:5550/api/v1/support/" + id, {
      method: "PATCH",
      body: JSON.stringify({
        supportAnwser: textRef.current.value,
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
    setId(" ");
    handleClose();
    window.location.reload();
  };

  const submitAnwser = (id) => {
    setId(id);
    handleShow();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center my-5">
          <h3>لیست درخواست های اجاره</h3>
        </div>
      </div>
      {showSpinner1 && (
        <div className="col-12 text-center">
          <div
            className="spinner-border my-5 text-primary "
            style={{ width: "3.5rem", height: "3.5rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {!showSpinner1 && (
        <div className="col-12 mb-5">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ردیف</th>
                <th scope="col">نام</th>
                <th scope="col">نام خودرو</th>
                <th scope="col">شماره تلفن</th>
                <th scope="col">زمان اجاره</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((reqItem, index) => (
                <ReqItem
                  key={index}
                  index={index}
                  name={reqItem.name}
                  phone={reqItem.phone}
                  carname={reqItem.carname}
                  rentTime={reqItem.rentTime}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="row mt-5">
        <div className="col-12 text-center my-5">
          <h3>لیست درخواست های پشتیبانی</h3>
        </div>
      </div>
      {showSpinner2 && (
        <div className="col-12 text-center">
          <div
            className="spinner-border my-5 text-primary "
            style={{ width: "3.5rem", height: "3.5rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {!showSpinner2 && (
        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ردیف</th>
                <th scope="col">نام</th>
                <th scope="col">شماره تلفن</th>
                <th scope="col">سوال</th>
                <th scope="col">پاسخ </th>
              </tr>
            </thead>
            <tbody>
              {supports.map((reqItem, index) => (
                <SupportItem
                  key={index}
                  index={index}
                  name={reqItem.name}
                  phone={reqItem.phone}
                  supportQuestion={reqItem.supportQuestion}
                  supportAnwser={reqItem.supportAnwser}
                  submitAnwser={() => submitAnwser(reqItem._id)}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>پاسخ به درخواست پشتیبانی</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>پاسخ : </Form.Label>
              <Form.Control as="textarea" rows={3} ref={textRef} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <Button variant="primary" onClick={sendPatch}>
            ثبت
          </Button>
          <Button variant="danger" onClick={handleClose}>
            بستن
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminPanel;
