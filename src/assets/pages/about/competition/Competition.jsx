import { Button, Col, Image, Row } from "react-bootstrap";
import styles from "./styles.module.css";

const Competition = () => {
  return (
    <div className={`container-xxl p-3 ${styles.mainContainer}`}>
      <Row>
        <Col md={8} className={`${styles.leftCol}`}>
          <Button className={`${styles.btn}`}>Our Core Values</Button>
          <h1 className={`flex-end ${styles.topHeading}`}>
            Our culture is built around five key attributes that differentiate
            us from our competition.
          </h1>
        </Col>
        <Col md={4} className="right-col">
          <Image />
        </Col>
      </Row>
    </div>
  );
};

export default Competition;
