import styles from "./styles.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const contentData = [
  {
    title: "Services",
    buttonText: "Schedule Consultation",
  },
];

const Header = () => {
  return (
    <div className={`${styles.mainDiv}`}>
      <Container>
        <Row>
          <Col>
            {contentData.map((item, index) => (
              <div key={index}>
                <Button className={`mb-3 ${styles.btn}`}>{item.title}</Button>
                <div>
                  <Button className={`mt-2 py-2 px-4  ${styles.btnTwo}`}>
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

export default Header;
