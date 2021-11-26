import React from "react";
import { useLocation } from "react-router";
import Header from "../Header/Header";

const Layout = (props) => {
  const location = useLocation();
  return (
    <>
      {!location.pathname.includes("auth") && (
        <header>
          <Header />
        </header>
      )}
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
