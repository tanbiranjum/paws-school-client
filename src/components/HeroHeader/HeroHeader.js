import React from "react";
import { Button, Card, Row } from "react-bootstrap";
import HeroImg from "../../assets/hero.jpg";
import styles from "./HeroHeader.module.scss";

const HeroHeader = () => {
  return (
    <Row style={{ backgroundImage: `url(${HeroImg}` }} className={styles.hero}>
      <div className="h-100 d-flex flex-column justify-content-center align-items-start ps-3">
        <h1 className="text-uppercase text-light">
          Learn Petting With Paws School
        </h1>
        <p className="text-light">IT HELP YOU RAISE CALM, HAPPY & WELL-BEHAVED PET</p>
        <Button variant="primary" size="lg">
          GET STARTED
        </Button>
      </div>
    </Row>
  );
};

export default HeroHeader;
