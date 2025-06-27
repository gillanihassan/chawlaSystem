import { Col, Row } from "react-bootstrap";
import styles from "./styles.module.css";

function ChooseUs() {
  return (
    <div className={`container-xxl mt-5 ${styles.mainContainer}`}>
      <h2 className={`${styles.topHeading}`}>
        Comprehensive IT <br /> services for businesses
      </h2>
      <Row className="mt-5 gy-4">
        <Col md={6}>
          <p className={`${styles.para}`}>
            When we say comprehensive, we mean comprehensive. Tecnologia has the
            experience and expertise to provide an excellent experience across
            spheres, for truly holistic IT.
          </p>
        </Col>
        <Col md={6}>
          <p className={`${styles.para}`}>
            Some MSPs struggle to offer consulting or network services. But your
            organization needs the entire experience to stop worrying about IT.
            Learn more about our services below.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default ChooseUs;
