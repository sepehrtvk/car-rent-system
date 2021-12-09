import React, { useState, useEffect } from "react";
import CarModel from "./CarModel";

const Cars = (props) => {
  const [cars, setCars] = useState([]);
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5550/api/v1/cars", {
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
  }, []);

  return (
    <section className="container">
      <div className="row my-5">
        {props.mode !== "all" && (
          <div className="col-12 text-center">
            <h3 className="mb-5">آخرین خودرو ها</h3>
          </div>
        )}
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

        {props.mode !== "all" &&
          cars.map(
            (carItem, index) =>
              index < 4 && (
                <CarModel
                  key={carItem._id}
                  name={carItem.name}
                  brand={carItem.brand}
                  photo={carItem.photo}
                  color={carItem.color}
                  id={carItem._id}
                />
              )
          )}
        {props.mode === "all" &&
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
    </section>
  );
};

export default Cars;
