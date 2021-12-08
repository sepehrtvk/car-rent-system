import React from "react";

const ReqItem = (props) => {
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td>{props.name}</td>
      <td>{props.carname}</td>
      <td>{props.phone}</td>
      <td> {props.rentTime}</td>
    </tr>
  );
};

export default ReqItem;
