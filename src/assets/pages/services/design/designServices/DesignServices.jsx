import styles from "./styles.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const DesignServices = () => {
  return (
    <div className={`${styles.mainDiv}`}>
      <Container>
        <Row>
          <Col>
            <Button className={`mb-3 ${styles.btn}`}>Services</Button>
            <h2 className={`mt-2 ${styles.topHeading}`}>
              Craft Experiences, Not Just Interfaces
            </h2>
            <p className={`mt-4 ${styles.topPara}`}>
              Where functionality meets finesse. We turn ideas into intuitive,
              user-centered designs that don’t just look good – they feel right.
            </p>
            <div>
              <Button className={`mt-2 py-2 px-4 ${styles.btnTwo}`}>
                Schedule a Free Consultation
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DesignServices;
