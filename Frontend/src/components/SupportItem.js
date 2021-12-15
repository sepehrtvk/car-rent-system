import React from "react";
import { BsTrash } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";

const SupportItem = (props) => {
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td>{props.supportQuestion}</td>
      <td>
        {props.supportAnwser === " " && (
          <button className="btn btn-dark" onClick={props.submitAnwser}>
            <AiOutlineMessage />
          </button>
        )}
        {props.supportAnwser !== " " && props.supportAnwser}
      </td>
      <td>
        <button className="btn btn-danger" onClick={props.deleteAnwser}>
          <BsTrash />
        </button>
      </td>
    </tr>
  );
};

export default SupportItem;
