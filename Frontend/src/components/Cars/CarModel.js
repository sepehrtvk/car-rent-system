import React from "react";
import { Link } from "react-router-dom";

function CarModel(props) {
  return (
    <div className="col-3 mt-4">
      <div className="card">
        <img src={props.photo} alt={props.name} className="card-img-top"  height="200"/>
        <div className="card-body ">
          <h4 className="card-title fw-bold text-center mb-4 pb-3 border-bottom ">{props.name}</h4>
          <p className="card-text">برند :‌ {props.brand} </p>
          <p className="card-text">رنگ : {props.color}</p>
          <Link to={`/cars/${props.id}`} className="btn btn-primary text-center mt-4 w-100">
            اجاره خودرو
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CarModel;
