import React from "react";
import { Outlet } from "react-router-dom";
import NavComponent from "../components/NavComponent/NavComponent";

const Main = () => {
  return (
    <div>
      <NavComponent />
      <Outlet />
    </div>
  );
};

export default Main;
