import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Row, ListGroup } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import CourseCard from "../../components/CourseCard/CourseCard";

const Courses = () => {
  const [courses, setCourses] = useState();
  const [activeCategoryID, setActiveCategoryID] = useState(0);

  const categories = useLoaderData();
  useEffect(() => {
    fetch("https://paws-school-server-tanbiranjum.vercel.app/course")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <Row style={{ minHeight: "70vh" }}>
      <Col xs={3} className="bg-primary">
        <h6 className="mt-2 text-white">Filter By Category</h6>
        <ListGroup className="mt-3">
          <ListGroup.Item
            style={{ cursor: "pointer" }}
            onClick={() => {
              setActiveCategoryID(0);
            }}
          >
            All Courses
          </ListGroup.Item>
          {categories &&
            categories.map((category) => (
              <ListGroup.Item
                style={{ cursor: "pointer" }}
                key={category.id}
                onClick={() => {
                  setActiveCategoryID(category.id);
                }}
              >
                {category.category_name}
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Col>
      <Col xs={9} className="bg-info py-3">
        <Row>
          {courses &&
            courses
              .filter((course) => {
                if (course.category_id === activeCategoryID) {
                  return true;
                } else if (activeCategoryID === 0) {
                  return true;
                } else {
                  return false;
                }
              })
              .map((course) => (
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
