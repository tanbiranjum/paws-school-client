import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import CourseCard from "../../components/CourseCard/CourseCard";

const Courses = () => {
  const [courses, setCourses] = useState();
  useEffect(() => {
    fetch("https://paws-school-server-tanbiranjum.vercel.app/course")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <Row>
      <Col xs={3} className="bg-primary">
        Hello
      </Col>
      <Col xs={9} className="bg-info py-3">
        <Row>
          {courses &&
            courses.map((course) => (
              <Col xs={4} className="mt-2" key={course.id}>
                <CourseCard course={course} />
              </Col>
            ))}
        </Row>
      </Col>
    </Row>
  );
};

export default Courses;
