import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavComponent from "../components/NavComponent/NavComponent";

const Main = () => {
  return (
    <div>
      <NavComponent />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default Main;
