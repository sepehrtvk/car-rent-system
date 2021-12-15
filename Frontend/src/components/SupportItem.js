import React from "react";

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
            پاسخ دادن
          </button>
        )}
        {props.supportAnwser !== " " && (props.supportAnwser)}
      </td>
    </tr>
  );
};

export default SupportItem;
