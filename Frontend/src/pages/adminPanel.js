import { useState, useEffect } from "react";
import ReqItem from "../components/ReqItem";

const AdminPanel = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5550/api/v1/requests", {
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
        setRequests(data.data.Requests);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center my-5">
          <h3>لیست درخواست های مشتریان</h3>
        </div>
      </div>
      <div className="col-12">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ردیف</th>
              <th scope="col">نام</th>
              <th scope="col">نام خودرو</th>
              <th scope="col">شماره تلفن</th>
              <th scope="col">زمان اجاره</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((reqItem,index) => (
              <ReqItem
                key={index}
                index={index}
                name={reqItem.name}
                phone={reqItem.phone}
                carname={reqItem.carname}
                rentTime={reqItem.rentTime}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
