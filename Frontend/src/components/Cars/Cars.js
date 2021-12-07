import React, { useState, useEffect } from "react";
import classes from "./Cars.module.css";
import CarModel from "./CarModel";

const Cars = () => {
  const [cars, setCars] = useState([]);

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
        console.log(data.data.cars);
        setCars(data.data.cars);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="container">
      <div className="row my-5">
        <div className="col-12 text-center" >
          <h3 className="mb-5" >آخرین خودرو ها</h3>
        </div>
        {cars.map((carItem) => (
          <CarModel
            name={carItem.name}
            brand={carItem.brand}
            photo={carItem.photo}
            color={carItem.color}
          />
        ))}
      </div>
    </section>
  );
};

export default Cars;
