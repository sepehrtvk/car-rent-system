import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CarDetail = () => {
  const params = useParams();
  const [car, setCar] = useState([]);
  const [showSpinner, setShowSpinner] = useState(true);

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

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center my-5">
          <h3>خودروی مورد نظر شما</h3>
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
                  <th scope="col">نام</th>
                  <th scope="col">برند</th>
                  <th scope="col">ظرفیت</th>
                  <th scope="col">رنگ</th>
                  <th scope="col">کلاس</th>
                  <th scope="col">جعبه دنده</th>
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
                  <th scope="col">روزانه</th>
                  <th scope="col">هفتگی</th>
                  <th scope="col">ماهانه</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-info">
                  <td> {car.pricePerDay} تومان</td>
                  <td>{car.pricePerWeek} تومان</td>
                  <td>{car.pricePerMonth} تومان</td>
                </tr>
              </tbody>
            </table>
            <div className="row">
              <div className="col-9">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option defaultValue>زمان اجاره را انتخاب کنید : </option>
                  <option value="1">یک روز</option>
                  <option value="2">یک هفته</option>
                  <option value="3">یک ماه</option>
                </select>
              </div>
              <div className="col-3">
                <button type="button" className="btn btn-primary w-100">
                  اجاره
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetail;
