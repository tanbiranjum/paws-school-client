import React from "react";
import { useLoaderData } from "react-router-dom";
import HeroHeader from "../../components/HeroHeader/HeroHeader";

const Home = () => {
  const courses = useLoaderData();
  return (
    <div>
      <HeroHeader />
      {console.log(courses)}
    </div>
  );
};

export default Home;
