import React from "react";
import { Col, Row, Nav, Container, Form, Button } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-5 py-3 bg-primary">
      <Container>
        <Row className="align-items-center">
          <Col xl={4}>
            <Nav
              defaultActiveKey="/home"
              as="ul"
              className="flex-column align-items-start"
            >
              <Nav.Item as="li">
                <Nav.Link as={Link} to="/home" className="text-light ps-0">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link
                  as={Link}
                  to="/courses"
                  eventKey="link-1"
                  className="text-light ps-0"
                >
                  Courses
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link
                  as={Link}
                  to="/faq"
                  eventKey="link-2"
                  className="text-light ps-0"
                >
                  FAQ
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link
                  as={Link}
                  to="/blog"
                  eventKey="link-2"
                  className="text-light ps-0"
                >
                  Blog
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col
            xl={4}
            className="d-flex flex-column gap-2 justify-content-center"
          >
            <h6 className="text-center text-light">Follow us on</h6>
            <div className="d-flex gap-3 justify-content-center">
              <a href="https://facebook.com">
                <FaFacebook className="fs-2 text-light" />
              </a>
              <a href="https://instagram.com">
                <FaInstagram className="fs-2 text-light" />
              </a>
              <a href="https://linkedin.com">
                <FaLinkedin className="fs-2 text-light" />
              </a>
              <a href="https://twitter.com">
                <FaTwitter className="fs-2 text-light" />
              </a>
            </div>
          </Col>
          <Col xl={4} className="mt-3 mt-md-0">
            <h6 className="text-light">Subscribe to our news letter</h6>
            <Form className="d-flex">
              <Form.Control
                type="email"
                placeholder="jhondoe@mail.com"
                style={{
                  borderTopRightRadius: "0",
                  borderBottomRightRadius: "0",
                }}
              ></Form.Control>
              <Button
                type="submit"
                variant="info"
                style={{
                  borderTopLeftRadius: "0",
                  borderBottomLeftRadius: "0",
                }}
                onClick={(e) => e.preventDefault()}
              >
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>
        <p className="text-center text-light">Ⓒ Copyright 2022 | Paws School</p>
      </Container>
    </div>
  );
};

export default Footer;
