import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import HeroHeader from "../../components/HeroHeader/HeroHeader";
import catPet from "../../assets/petcat.png";
import { Col, Row, Card, Button } from "react-bootstrap";
import profilePic from "../../assets/profile.png";
import CourseCard from "../../components/CourseCard/CourseCard";

const Home = () => {
  const courses = useLoaderData();
  return (
    <div>
      <HeroHeader />
      <Row className="my-5 justify-content-between align-items-center">
        <Col lg={6} xl={5}>
          <Card className="border-0">
            <Card.Img
              variant="top"
              src={profilePic}
              style={{ width: "100px", margin: "0 auto" }}
            />
            <Card.Body>
              <Card.Title className="text-center">Elon Mask</Card.Title>
              <Card.Subtitle className="text-center text-info">
                Founder of Tesla
              </Card.Subtitle>
              <Card.Text className="mt-2">
                Pets need care and attention to keep them healthy, happy, and
                safe. They need healthy food; clean, fresh water; and a
                comfortable place to sleep. Most pets also require regular
                exercise to stay fit. It is important to find out all about an
                animal before deciding whether it will fit in well with you or
                your family.{" "}
                <span className="text-primary">
                  I learned good lesson about my pet from these courses and now
                  I can take care of my pet.
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col
          lg={6}
          xl={5}
          className="d-flex flex-column align-items-center mt-xs-5"
        >
          <h4 className="text-uppercase">
            Your Pet Needs Your Attention & Care
          </h4>
          <img src={catPet} alt="cat" style={{ width: "18rem" }} />
        </Col>
      </Row>
      <h1 className="text-center mt-5">Course</h1>
      <Row>
        {courses &&
          courses.slice(0, 3).map((course) => (
            <Col md={6} xl={4} className="mt-2" key={course.id}>
              <CourseCard course={course} />
            </Col>
          ))}
      </Row>
      <Button variant="info" as={Link} to="/courses" className="mt-3 ms-auto fw-1">
        ALL COURSES
      </Button>
    </div>
  );
};

export default Home;
