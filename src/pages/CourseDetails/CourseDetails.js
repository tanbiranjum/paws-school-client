import React from "react";
import { Col, Row, Button, Card, Badge } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { createRef } from "react";
import Pdf from "react-to-pdf";

const CourseDetails = () => {
  const course = useLoaderData()[0];
  const ref = createRef();

  const options = {
    orientation: "landscape",
  };

  return (
    <div className="mt-5" style={{ height: "64vh" }}>
      <Pdf targetRef={ref} filename="course-description.pdf" options={options}>
        {({ toPdf }) => (
          <Button variant="primary" className="mb-4" onClick={toPdf}>
            Download PDF
            <FaDownload className="ms-2" />
          </Button>
        )}
      </Pdf>
      <Row ref={ref}>
        <Col xs={4}>
          {console.log(course)}
          <img src={course.image_url} alt="course image" />
        </Col>
        <Col xs={8}>
          <Card>
            <Card.Header>
              <Badge bg="primary" className="me-2">
                Rating {course.rating}
              </Badge>
              <Badge bg="success">Enrolled {course.enrolled}</Badge>
            </Card.Header>
            <Card.Body>
              <Card.Title>{course.title}</Card.Title>
              <Card.Subtitle>Author: {course.author}</Card.Subtitle>
              <Card.Text className="mt-2">{course.description}</Card.Text>
              <Card.Text>Price: ${course.price}</Card.Text>
              <Button
                variant="primary"
                style={{ marginTop: "-10px" }}
                as={Link}
                to={`/checkout/${course.id}`}
              >
                Buy ${course.price}
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CourseDetails;
