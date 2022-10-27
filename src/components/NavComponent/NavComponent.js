import React from "react";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate, NavLink } from "react-router-dom";
import PawLogo from "../../assets/paw.png";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const NavComponent = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    logOut().then(() => {
      navigate("/home");
    });
  };

  const handleBrokenImg = (e) => {
    e.target.src = "https://ik.imagekit.io/localghost/avatar_uKuSwHPe6.png";
  };

  const handleToggleTheme = (e) => {
    e.preventDefault();
    e.target.innerText = e.target.innerText === "Light" ? "Dark" : "Light";
  };
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="d-flex align-items-center" as={Link} to="/">
            <img src={PawLogo} alt="paw logo" className="w-25 pe-3" />
            Paws School
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto w-100">
              <Nav.Link
                as={NavLink}
                to="/"
                className={({ isActive }) =>
                  isActive ? "fw-bold text-primary" : ""
                }
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/courses"
                className={({ isActive }) => (isActive ? "fw-bold" : "")}
              >
                Courses
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/blog"
                className={({ isActive }) => (isActive ? "fw-bold" : "")}
              >
                Blog
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/faq"
                className={({ isActive }) => (isActive ? "fw-bold" : "")}
              >
                FAQ
              </Nav.Link>
              <div className="ms-lg-auto mt-2 mt-lg-0 d-flex align-items-center">
                {user?.uid && (
                  <Link to="/profile">
                    <img
                      src={user?.photoURL}
                      alt="client image"
                      style={{ width: "40px" }}
                      className="rounded-circle"
                      title={user?.displayName}
                      onError={handleBrokenImg}
                    />
                  </Link>
                )}
                <NavDropdown
                  title={user?.uid ? "Profile" : "Login"}
                  id="basic-nav-dropdown"
                >
                  {user?.uid && (
                    <NavDropdown.Item as={Link} to="/profile">
                      Profile
                    </NavDropdown.Item>
                  )}
                  {!user && (
                    <NavDropdown.Item as={Link} to="/register">
                      Register
                    </NavDropdown.Item>
                  )}
                  {!user && (
                    <NavDropdown.Item as={Link} to="/login">
                      Login
                    </NavDropdown.Item>
                  )}
                  {user?.uid && (
                    <>
                      <NavDropdown.Divider />
                      <NavDropdown.Item
                        as={Link}
                        to="/logout"
                        onClick={handleLogout}
                      >
                        Logout
                      </NavDropdown.Item>
                    </>
                  )}
                </NavDropdown>
              </div>
              <Button
                variant="dark"
                size="sm"
                className="py-1 px-4 ms-lg-4 mt-2 mt-lg-0 align-self-start align-self-lg-center"
                onClick={handleToggleTheme}
              >
                Dark
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavComponent;
