import React from "react";
import { Container } from "react-bootstrap";
import classes from "./MainHeader.module.css";
const MainHeader = () => {
  return (
    <Container fluid className={`${classes.main} p-0`}>
      <div className={classes.heading}>
        <h1>کارنت</h1>
        <h2>سمانه اجاره آنلاین خورو</h2>
        <p>با پشتیبانی ۲۴ ساعته</p> 
      </div>
    </Container>
  );
};

export default MainHeader;
