import React from "react";
import user1 from "../assets/images/user1.jpeg";
import user2 from "../assets/images/user2.jpg";
import user3 from "../assets/images/user3.jpg";
import user4 from "../assets/images/user4.jpeg";
import { FaQuoteLeft } from "react-icons/fa";

const usersSection = () => {
  return (
    <div className="py-3" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h3 className="mb-5">نظرات برخی از کاربران کارنت</h3>
          </div>
          <div className="col-3 p-4">
            <div className="row bg-white shadow-sm rounded-3 p-2">
              <div className="col-4 text-center">
                <img
                  src={user1}
                  className="border border-2 border-dark"
                  alt="user1photo"
                  style={{
                    width: "5.4rem",
                    height: "5.4rem",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div className="col-6">
                <p className=" fs-5 fw-bold mt-4 me-2 text-primary"> کیانا</p>
              </div>
              <div className="col-2 mt-1">
                <FaQuoteLeft size="1.8rem" className="text-light" />
              </div>
              <div className="col-12 mt-2 pb-4">
                <p className="text-center mt-1 pb-5">
                  هربار ماشین نیاز دارم برای اجاره ازین سایت استفاده میکنم و
                  قیمت ها مناسب است و سر تایم به دستم رسید.
                </p>
              </div>
            </div>
          </div>
          <div className="col-3 p-4">
            <div className="row bg-white shadow-sm rounded-3 p-2">
              <div className="col-4 text-center">
                <img
                  src={user2}
                  className="border border-2 border-dark"
                  alt="user1photo"
                  style={{
                    width: "5.4rem",
                    height: "5.4rem",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div className="col-6">
                <p className=" fs-5 fw-bold mt-4 me-2  text-primary"> سارا</p>
              </div>
              <div className="col-2 mt-1">
                <FaQuoteLeft size="1.8rem" className="text-light" />
              </div>
              <div className="col-12 mt-2 pb-4">
                <p className="text-center mt-1 pb-5">
                  من با سامانه کارنت همیشه بدون دردسر ماشین می گیریم و از
                  پشتیبانی آنلاین خیلی راضی هستم.
                </p>
              </div>
            </div>
          </div>
          <div className="col-3 p-4">
            <div className="row bg-white shadow-sm rounded-3 p-2">
              <div className="col-4 text-center">
                <img
                  src={user3}
                  className="border border-2 border-dark"
                  alt="user1photo"
                  style={{
                    width: "5.4rem",
                    height: "5.4rem",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div className="col-6">
                <p className=" fs-5 fw-bold mt-4 me-2 text-primary"> سپهر</p>
              </div>
              <div className="col-2 mt-1">
                <FaQuoteLeft size="1.8rem" className="text-light" />
              </div>
              <div className="col-12 mt-2">
                <p className="text-center mt-1 pb-5">
                  من با سامانه کارنت همیشه بدون دردسر ماشین می گیریم و از
                  پشتیبانی آنلاین خیلی راضی هستم تا جایی که دیگه از ماشین شخصی
                  استفاده نمی کنم :)
                </p>
              </div>
            </div>
          </div>
          <div className="col-3 p-4">
            <div className="row bg-white shadow-sm rounded-3 p-2">
              <div className="col-4 text-center">
                <img
                  src={user4}
                  className="border border-2 border-dark"
                  alt="user1photo"
                  style={{
                    width: "5.4rem",
                    height: "5.4rem",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div className="col-6">
                <p className=" fs-5 fw-bold mt-4 me-2 text-primary">
                  امیر حسین
                </p>
              </div>
              <div className="col-2 mt-1">
                <FaQuoteLeft size="1.8rem" className="text-light" />
              </div>
              <div className="col-12 mt-2">
                <p className="text-center mt-1">
                  بسیار سایت خوب و کارآمدی است،طراحی زیبا و یادگیری آسان استفاده
                  از آن باعث استفاده راحت تر از آن میشود به گونه ای که کاربر در
                  استفاده از آن دچار سردرگمی نمیشود همچنین گزینه های مرتب سازی
                  باعث جست وجوی راحت تر میشود.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default usersSection;
