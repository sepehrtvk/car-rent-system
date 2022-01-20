import React from "react";

const UserView = (props) => {
  return (
      (props.carname1 === props.carname2) &&
      <div className="row my-3">
      <div className="col-3">{props.userName}</div>
      <div className="col-9">{props.userView}</div>
    </div>
  );
};

export default UserView;
