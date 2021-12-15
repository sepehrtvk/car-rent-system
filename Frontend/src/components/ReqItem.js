import React from "react";
import { BsTrash } from "react-icons/bs";
const ReqItem = (props) => {
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td>{props.name}</td>
      <td>{props.carname}</td>
      <td>{props.phone}</td>
      <td> {props.rentTime}</td>
      <td>
        <button className="btn btn-danger" onClick={props.deleteRequest}>
          <BsTrash />
        </button>
      </td>
    </tr>
  );
};

export default ReqItem;
