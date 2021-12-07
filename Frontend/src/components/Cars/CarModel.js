import React from "react";

function CarModel(props) {
  return (
    <div className="col-3">
      <div class="card">
        <img src={props.photo} alt={props.name} class="card-img-top"  height="200"/>
        <div class="card-body ">
          <h4 class="card-title fw-bold text-center mb-4 pb-3 border-bottom ">{props.name}</h4>
          <p class="card-text">برند :‌ {props.brand} </p>
          <p class="card-text">رنگ : {props.color}</p>
          <a href="#" class="btn btn-primary text-center mt-4 w-100">
            اجاره خودرو
          </a>
        </div>
      </div>
    </div>
  );
}

export default CarModel;
