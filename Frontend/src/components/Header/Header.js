import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdExit } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
const Header = () => {
  const authCtx = useContext(AuthContext);
  const name = localStorage.getItem("name");
  const history = useHistory();
  const logoutUser = () => {
    history.replace("/");
    authCtx.logout();
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <div className="d-flex justify-content-between align-items-center">
            <img
              src={logo}
              alt="logoMain"
              style={{ borderRadius: "50%", height: "60px", width: "60px" }}
            />
            <span className="ms-2">سامانه اجاره خودرو</span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-4">
            <Nav.Link as={NavLink} to="/allCars">
              مشاهده خودرو ها
            </Nav.Link>
            <Nav.Link as={NavLink} to="/lastCars">
              آخرین خودرو ها
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex align-items-center">
          {!authCtx.isLoggedIn && (
            <Link to="/auth" className="btn btn-primary">
              <BsFillPersonFill className="me-1" />
              ورود
            </Link>
          )}
          <div className="ms-4 border-start ps-3">
            <FaPhoneAlt />
            <span className="ms-1">۰۹۱۲۰۵۳۲۰۲۰</span>
          </div>
          {authCtx.isLoggedIn && (
            <Link
              to="/profile"
              className="ms-1 border-start ps-3 btn btn-primary"
            >
              <IoPersonCircle className="me-1" />
              <span className="ms-1">{name}</span>
            </Link>
          )}
          {authCtx.isLoggedIn && localStorage.getItem("role") === "admin" && (
            <Link
              to="/admin"
              className="ms-1 border-start ps-3 btn btn-primary"
            >
              <MdDashboard />
            </Link>
          )}
          {authCtx.isLoggedIn && (
            <button
              className="ms-2 border-start ps-3 btn btn-primary"
              onClick={logoutUser}
            >
              <IoMdExit />
            </button>
          )}
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
