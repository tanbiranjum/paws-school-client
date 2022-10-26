import React from "react";
import { useContext } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Checkout = () => {
  const course = useLoaderData()[0];
  const { user } = useContext(AuthContext);
  return (
    <div style={{ height: "70vh" }}>
      <h1>Checkout</h1>
      <Row className="mt-5">
        <Col sx={6}>
          <h4>Customer Details</h4>
          <p>Customer name: {user.displayName}</p>
          <p>Email: {user.email}</p>
          {console.log(user)}
        </Col>
        <Col sx={6}>
          <h4>Course Description</h4>
          <p>Course name: {course.title}</p>
          <p>Course price: {course.price}</p>
          <Button variant="primary">Go To Billing</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Checkout;
