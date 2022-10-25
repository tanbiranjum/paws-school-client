import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import NavComponent from "../components/NavComponent/NavComponent";

const Main = () => {
  return (
    <div>
      <NavComponent />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default Main;
