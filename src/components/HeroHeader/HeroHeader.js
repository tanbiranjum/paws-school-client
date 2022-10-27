import React from "react";
import { Button, Card, Row } from "react-bootstrap";
import HeroImg from "../../assets/hero.jpg";
import styles from "./HeroHeader.module.scss";

const HeroHeader = () => {
  return (
    <Row style={{ backgroundImage: `url(${HeroImg}` }} className={styles.hero}>
      <div className="h-100 d-flex flex-column justify-content-center align-items-start ps-5">
        <h1 className="text-uppercase fs-5 fs-2">
          Learn Petting With Paws School
        </h1>
        <p className="text-primary">IT HELP YOU RAISE CALM, HAPPY & WELL-BEHAVED PET</p>
        <Button variant="primary">
          GET STARTED
        </Button>
      </div>
    </Row>
  );
};

export default HeroHeader;
