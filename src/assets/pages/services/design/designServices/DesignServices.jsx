import styles from "./styles.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const contentData = [
  {
    tag: "Services",
    heading: "Craft Experiences, Not Just Interfaces",
    description:
      "Where functionality meets finesse. We turn ideas into intuitive, user-centered designs that don’t just look good – they feel right.",
    buttonText: "Schedule a Free Consultation",
  },
];

const DesignServices = () => {
  return (
    <div className={`${styles.mainDiv}`}>
      <Container>
        <Row>
          <Col>
            {contentData.map((item, index) => (
              <div key={index}>
                <Button className={`mb-3 ${styles.btn}`}>{item.tag}</Button>
                <h2 className={`mt-2 ${styles.topHeading}`}>{item.heading}</h2>
                <p className={`mt-4 ${styles.topPara}`}>{item.description}</p>
                <div>
                  <Button className={`mt-2 py-2 px-4 ${styles.btnTwo}`}>
                    {item.buttonText}
                  </Button>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DesignServices;
