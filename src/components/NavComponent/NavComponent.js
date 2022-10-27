import React from "react";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";
import PawLogo from "../../assets/paw.png";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { FaUser } from "react-icons/fa";

const NavComponent = () => {
  const { user, loading, logOut } = useContext(AuthContext);
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
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <img src={PawLogo} alt="paw logo" className="w-35 pe-3" />
            Paws School
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto w-100">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/courses">
                Courses
              </Nav.Link>
              <Nav.Link as={Link} to="/blog">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/faq">
                FAQ
              </Nav.Link>
              <div className="ms-auto d-flex align-items-center">
                {user?.uid && (
                  <img
                    src={user?.photoURL}
                    alt="client image"
                    style={{ width: "40px" }}
                    className="rounded-circle"
                    title={user?.displayName}
                    onError={handleBrokenImg}
                  />
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
              <Button variant="dark" size="sm" className="py-0 px-4 ms-4">
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
