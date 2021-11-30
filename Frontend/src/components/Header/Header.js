import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdExit } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";

const Header = () => {
  const authCtx = useContext(AuthContext);
  const name = localStorage.getItem("name");

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
            <Nav.Link href="#home">مشاهده خودرو ها</Nav.Link>
            <Nav.Link as={NavLink} to="/lastCars">
              آخرین خودرو ها
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
        <div className="d-flex align-items-center">
          {!authCtx.isLoggedIn && (
            <Link to="/auth" className="btn btn-primary">
              <BsFillPersonFill className="me-1" />
              ورود
            </Link>
          )}
          {authCtx.isLoggedIn && (
            <div className="d-flex">
              <span className="ms-2">سلام</span>
              <h5>{name}</h5>
            </div>
          )}
          <div className="ms-4 border-start ps-3">
            <FaPhoneAlt />
            <span className="ms-1">۰۹۱۲۰۵۳۲۰۲۰</span>
          </div>
          {authCtx.isLoggedIn && (
            <button
              className="ms-4 border-start ps-3 btn btn-primary"
              onClick={authCtx.logout}
            >
              <IoMdExit className="me-1" />
              <span className="ms-1">خروج</span>
            </button>
          )}
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
