import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <div className="mt-5">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            How to Get Premium Access to Course
          </Accordion.Header>
          <Accordion.Body>
            Go to course details page and then by clicking of get premium access
            button you can get premium access to this course.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How to Login and Register</Accordion.Header>
          <Accordion.Body>
            For login go to <Link to="/login">login</Link> page and for register
            go to <Link to="/register">register</Link> page
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FAQ;
