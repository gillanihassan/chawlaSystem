import { Col, Row } from "react-bootstrap";
import styles from "./styles.module.css";

function ContentBlock() {
  return (
    <div className={`container-xxl mt-3 p-3 ${styles.mainContainer}`}>
      <Row>
        <Col md={8}>
          <h2 className={`${styles.topHeading}`}>
            Business Intelligence Best Practices – The AZK AI Advantage
          </h2>
          <p className={`mt-5 ${styles.para}`}>
            Handling vast, complex datasets comes with its challenges – data
            congestion, silos, integrity issues, and limited in-house expertise.
            AZK AI’s Business Intelligence solutions are designed to help you
            overcome these obstacles with ease.
          </p>
          <p className={`mt-3 ${styles.para}`}>
            What sets us apart? Our unwavering commitment to innovation. We
            don’t just follow best practices – we redefine them, delivering
            forward-thinking BI strategies that drive real results.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default ContentBlock;
