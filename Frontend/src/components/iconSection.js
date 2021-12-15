import React from "react";
import {
  FcCustomerSupport,
  FcCalendar,
  FcApproval,
  FcGlobe,
} from "react-icons/fc";
const iconSection = () => {
  return (
    <div className="py-3" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h3 className="mb-5">خدمات کارنت</h3>
          </div>
          <div className="col-3 text-center">
            <div className="text-center shadow-sm rounded-3 bg-white py-4 me-3">
              <FcCustomerSupport size="5rem" />
              <h6 className="fw-bold mt-4">پشتیبانی آنلاین</h6>
            </div>
          </div>
          <div className="col-3 text-center">
            <div className="text-center shadow-sm rounded-3 bg-white py-4 me-3">
              <FcCalendar size="5rem" />
              <h6 className="fw-bold mt-4">
                اجاره  روزانه ، هفتگی و ماهانه
              </h6>
            </div>
          </div>
          <div className="col-3 text-center">
            <div className="text-center shadow-sm rounded-3 bg-white py-4 me-3">
              <FcApproval size="5rem" />
              <h6 className="fw-bold mt-4">تضمین بهترین قیمت</h6>
            </div>
          </div>
          <div className="col-3 text-center">
            <div className="text-center shadow-sm rounded-3 bg-white py-4 me-3">
              <FcGlobe size="5rem" />
              <h6 className="fw-bold mt-4">امکان اجاره از سراسر کشور</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default iconSection;
