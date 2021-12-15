import React from "react";
import user1 from '../assets/images/user1.jpeg';

const usersSection = () => {
  return (
    <div className="py-3" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h3 className="mb-5">نظرات برخی از کاربران کارنت</h3>
          </div>
          <div className="col-3" >
              <div className="row" >
                  <div className="col-4 text-center" >
                      <img src={user1} className="border border-2 border-primary"  alt= "user1photo" style={{width:"6rem",height:"6rem",borderRadius:"50%"}} />
                      <p className=" fs-5 mt-3" >  کیانا</p>
                  </div>
                  <div className="col-8" >
                      <p className="text-justify mt-1" >
                          من با سامانه کارنت همیشه بدون دردسر ماشین می گیریم و از پشتیبانی آنلاین خیلی راضی هستم.
                      </p>
                  </div>
              </div>
          </div>
          <div className="col-3" >
              <div className="row" >
                  <div className="col-4 text-center" >
                      <img src={user1} className="border border-2 border-primary"  alt= "user1photo" style={{width:"6rem",height:"6rem",borderRadius:"50%"}} />
                      <p className=" fs-5 mt-3" >  کیانا</p>
                  </div>
                  <div className="col-8" >
                      <p className="text-justify mt-1" >
                          من با سامانه کارنت همیشه بدون دردسر ماشین می گیریم و از پشتیبانی آنلاین خیلی راضی هستم.
                      </p>
                  </div>
              </div>
          </div>
          <div className="col-3" >
              <div className="row" >
                  <div className="col-4 text-center" >
                      <img src={user1} className="border border-2 border-primary"  alt= "user1photo" style={{width:"6rem",height:"6rem",borderRadius:"50%"}} />
                      <p className=" fs-5 mt-3" >  کیانا</p>
                  </div>
                  <div className="col-8" >
                      <p className="text-justify mt-1" >
                          من با سامانه کارنت همیشه بدون دردسر ماشین می گیریم و از پشتیبانی آنلاین خیلی راضی هستم.
                      </p>
                  </div>
              </div>
          </div>
          <div className="col-3" >
              <div className="row" >
                  <div className="col-4 text-center" >
                      <img src={user1} className="border border-2 border-primary"  alt= "user1photo" style={{width:"6rem",height:"6rem",borderRadius:"50%"}} />
                      <p className=" fs-5 mt-3" >  کیانا</p>
                  </div>
                  <div className="col-8" >
                      <p className="text-justify mt-1" >
                          من با سامانه کارنت همیشه بدون دردسر ماشین می گیریم و از پشتیبانی آنلاین خیلی راضی هستم.
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
