import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const truncate = (str) => {
    return str.length > 70 ? str.substring(0, 65) + "..." : str;
  };
  return (
    <Card>
      <Card.Img
        variant="top"
        src={course.image_url}
        style={{ height: "10rem", objectFit: "cover" }}
      />
      <Card.Body>
        <Card.Title>{course.title}</Card.Title>
        <Card.Text>{truncate(course.description)}</Card.Text>
      </Card.Body>
      <Card.Body>
        <Button variant="primary" as={Link} to={`/courses/${course.id}`}>
          SEE MORE
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
