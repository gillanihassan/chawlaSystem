import styles from "./styles.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const contentData = [
  {
    title: "Services",
    heading: "Services",
    buttonText: "Schedule Consultation",
  },
  // Future items bhi add kar sakte hain yahan
];

const TopSection = () => {
  return (
    <div className={`${styles.mainDiv}`}>
      <Container>
        <Row>
          <Col>
            {contentData.map((item, index) => (
              <div key={index}>
                <Button className={`${styles.btn}`}>{item.title}</Button>
                <h2 className={`mt-2 ${styles.topHeading}`}>{item.heading}</h2>
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

export default TopSection;
