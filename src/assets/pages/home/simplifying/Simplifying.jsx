import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import styles from "./styles.module.css";

const Simplifying = () => {
  return (
    <div className={`container-xxl ${styles.mainContainer}`}>
      <Row>
        <Col md={6} className={`${styles.leftCol}`}>
          <Button className={`${styles.btn}`}>WHAT WE DO</Button>
          <h1 className={`flex-end ${styles.topHeading}`}>
            What we do Simplifying IT for a complex world.
          </h1>
        </Col>
        <Col md={6} className="right-col">
          <Image />
        </Col>
      </Row>
    </div>
  );
};

export default Simplifying;
