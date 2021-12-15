import React from "react";
import { BsFillHeartFill } from "react-icons/bs";
const footer = () => {
  return (
    <div className="bg-dark w-100 p-4 text-center text-light">
      <span>
        Made with <BsFillHeartFill color="red" size="1.2rem" /> by AgileTeam
      </span>
    </div>
  );
};

export default footer;
