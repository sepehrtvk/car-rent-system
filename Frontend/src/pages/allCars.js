import React from "react";
import Cars from "../components/Cars/Cars";

const AllCars = () => {
  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col-12 text-center mt-5" >
                <h3>لیست همه خوردرو های کارنت</h3>
            </div>
            <div className="col-12" >
                <Cars mode="all" />
            </div>
        </div>
      </div>
    </>
  );
};

export default AllCars;
