import React from "react";
import { Container } from "react-bootstrap";
import classes from "./MainHeader.module.css";
const MainHeader = () => {
  return (
    <Container fluid className={`${classes.main} p-0`}>
      <div className={classes.heading}>
        <h1>Car Rent System</h1>
      </div>
    </Container>
  );
};

export default MainHeader;
