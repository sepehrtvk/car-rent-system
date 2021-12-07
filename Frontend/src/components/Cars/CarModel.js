import React from "react";

function CarModel(props) {
  return (
    <div className="col-3">
      <div class="card">
        <img src={props.photo} alt={props.name} class="card-img-top"  height="200"/>
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          <p class="card-text">{props.brand}</p>
          <p class="card-text">{props.color}</p>
          <a href="#" class="btn btn-primary">
            اجاره خودرو
          </a>
        </div>
      </div>
    </div>
  );
}

export default CarModel;
