import React, { useState, useEffect } from "react";
import { FaSortAmountDownAlt } from "react-icons/fa";
import CarModel from "../components/Cars/CarModel";

const AllCars = () => {
  const [cars, setCars] = useState([]);
  const [showSpinner, setShowSpinner] = useState(true);
  const [url, seturl] = useState("http://localhost:5550/api/v1/cars");
  const [newUrl, setnewUrl] = useState("");

  useEffect(() => {
    setShowSpinner(true);
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
        setCars(data.data.cars);
        setShowSpinner(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);
  const changeHandler = (e) => {
    e.preventDefault();
    seturl(newUrl);
  };
  const optionHandler = (e) => {
    const val = e.target.value;
    if (val === "1")
      setnewUrl("http://localhost:5550/api/v1/cars?sort=-pricePerDay");
    if (val === "2")
      setnewUrl("http://localhost:5550/api/v1/cars?sort=pricePerDay");
    if (val === "3")
      setnewUrl("http://localhost:5550/api/v1/cars?sort=-capacity");
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mt-5">
            <h3>لیست همه خوردرو های کارنت</h3>
          </div>
          <div className="col-2 text-center mt-5 border-start">
            <h4 className="border-bottom pb-2 mb-5">
              <FaSortAmountDownAlt /> مرتب سازی{" "}
            </h4>
            <h6 className="mt-5 text-end">مرتب سازی بر اساس : </h6>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={optionHandler}
            >
              <option value="0"></option>
              <option value="1">بیشترین قیمت</option>
              <option value="2">کمترین قیمت</option>
              <option value="3">ظرفیت خودرو</option>
            </select>
            <button
              className="btn btn-warning mt-5 w-100"
              onClick={changeHandler}
            >
              اعمال تغییر
            </button>
          </div>
          <div className="col-10">
            <div className="row my-5">
              {showSpinner && (
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
              {!showSpinner &&
                cars.map((carItem, index) => (
                  <CarModel
                    key={carItem._id}
                    name={carItem.name}
                    brand={carItem.brand}
                    photo={carItem.photo}
                    color={carItem.color}
                    id={carItem._id}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCars;
